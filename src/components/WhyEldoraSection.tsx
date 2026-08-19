import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { whyEldora } from "@/constants";
import { cn } from "@/lib/utils";
import SectionBadge from "@/components/SectionBadge";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const WhyEldoraSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCurrentIndex = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateCurrentIndex();
    carouselApi.on("reInit", updateCurrentIndex);
    carouselApi.on("select", updateCurrentIndex);

    return () => {
      carouselApi.off("reInit", updateCurrentIndex);
      carouselApi.off("select", updateCurrentIndex);
    };
  }, [carouselApi]);

  return (
    <section id="learn" className="bg-navi-light/5 px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionBadge text="WHY ELDORA" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="max-w-xl">
            <div className="flex flex-col gap-4 text-left font-eiko text-2xl text-navi-dark/90 md:gap-8 lg:text-3xl">
              <p>
                Global markets are open. Access isn't.
                <br className="hidden lg:block" /> Banks add friction. Brokers
                add fees.
                <br className="hidden lg:block" /> Platforms add complexity.
              </p>

              <p>Eldora removes all of it.</p>

              <p>
                One account. One KYC. $NVDA, $AAPL,
                <br className="hidden lg:block" /> Gold, T-Bills - from your
                crypto wallet, <br className="hidden lg:block" />
                <span className="text-[#3B82F6]">24/7, from $1.</span>
              </p>
            </div>
          </div>

          <div className="w-full">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {whyEldora.map((item, index) => (
                  <CarouselItem
                    key={`${index + 1}`}
                    className="lg:pl-4 lg:basis-[72%] xl:basis-[68%]"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.img}
                        alt={`Why Eldora slide ${index + 1}`}
                        className="block size-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  {whyEldora.map((_, index) => (
                    <button
                      key={`why-dot-${index + 1}`}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={currentIndex === index}
                      onClick={() => carouselApi?.scrollTo(index)}
                      className={cn(
                        "size-2.5 rounded-full bg-navi-dark/20 transition-all duration-300",
                        currentIndex === index && "w-8 bg-blue-500",
                      )}
                    />
                  ))}
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEldoraSection;
