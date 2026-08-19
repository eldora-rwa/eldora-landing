import { motion } from "motion/react";
import { investCards } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const desktopInvestContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
} as const;

const desktopInvestItemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
} as const;

const AccessGlobalMarketsSection = () => {
  return (
    <section
      id="product"
      className="bg-linear-to-b from-navi-light/5 via-navi-light/50 to-navi-light px-4 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-eiko text-4xl text-navi-dark lg:text-6xl">
          Access Global Markets
        </h2>

        <motion.div
          variants={desktopInvestContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 hidden grid-cols-3 gap-6 lg:grid"
        >
          {investCards.map((card) => (
            <motion.article
              key={card.index}
              variants={desktopInvestItemVariants}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-60 w-full object-contain"
              />

              <div className="mt-2 p-6">
                <h3 className="font-eiko text-3xl leading-tight text-navi-light">
                  {card.title}
                </h3>
                <p className="mt-4 whitespace-pre-line text-navi-dark/90">
                  {card.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mx-auto mt-10 block w-full lg:hidden">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {investCards.map((card) => (
                <CarouselItem
                  key={card.index}
                  className="flex basis-[88%] pl-4 first:pl-0 sm:basis-[72%]"
                >
                  <article className="flex w-full h-full min-h-[460px] flex-col rounded-[28px] bg-white">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-60 w-full object-contain"
                    />

                    <div className="mt-0 p-5">
                      <h3 className="font-eiko text-3xl leading-tight text-navi-dark">
                        {card.title}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-navi-dark/90">
                        {card.desc}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-center gap-4 px-4">
              <CarouselPrevious className="static size-12 cursor-pointer border border-navi-dark bg-transparent text-navi-dark hover:bg-white" />
              <CarouselNext className="static size-12 cursor-pointer border border-navi-light bg-navi-light text-white! hover:bg-navi-base" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AccessGlobalMarketsSection;
