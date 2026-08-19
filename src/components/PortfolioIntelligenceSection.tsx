import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import PrimaryButton from "@/components/PrimaryButton";
import PricingPlanCard, { type PricingPlan } from "@/components/PricingPlanCard";
import SectionBadge from "@/components/SectionBadge";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const pricingPlans: PricingPlan[] = [
  {
    name: "Observer",
    description: "Free market headquarters",
    price: "Free",
    priceNote: "No credit card. No expiry.",
    ctaLabel: "Your current plan",
    ctaVariant: "current",
    sectionHeader: "Everything you need to stay informed",
    features: [
      {
        name: "Live Market TV",
        desc: "Bloomberg, CNBC & Reuters - always on",
      },
      {
        name: "Crypto Market Pulse",
        desc: "Top 10 coins + Fear & Greed trends",
      },
      {
        name: "Real-Time Market Dashboard",
        desc: "Stocks, crypto, commodities & volatility",
      },
      {
        name: "Economic & IPO Calendar",
        desc: "Key US and EU events in one place",
      },
      {
        name: "Financial & Crypto News Feed",
        desc: "Real-time headlines from trusted sources",
      },
    ],
  },
  {
    name: "Analyst",
    description: "Full data for active traders",
    price: "$189",
    priceNote: "/ year",
    savings: "$15.53 / month effective · Save 18% vs monthly",
    badge: {
      label: "Popular",
      variant: "popular",
    },
    ctaLabel: "Unlock Full Analysis",
    ctaVariant: "primary",
    sectionHeader: "Everything you need to make better trades",
    features: [
      {
        name: "AI Earnings Summaries",
        desc: "Instant takeaways from every earnings call",
      },
      {
        name: "Advanced Stock Analysis",
        desc: "Financials, valuation & technical indicators",
      },
      {
        name: "Macro Intelligence Dashboard",
        desc: "Markets, rates, inflation & on-chain signals",
      },
      {
        name: "Unlimited Alerts & Watchlists",
        desc: "Never miss a market-moving event",
      },
      {
        name: "Weekly AI Market Brief",
        desc: "Everything that matters, every Monday",
      },
    ],
  },
  {
    name: "Edge",
    description: "Maximum alpha",
    price: "$289",
    priceNote: "/ year",
    savings: "$23.75 / month effective · Save 18% vs monthly",
    badge: {
      label: "Coming August · Early Offer!",
      variant: "early",
    },
    ctaLabel: "Get Early Access",
    ctaVariant: "primary",
    sectionHeader: "Everything you need to gain an edge",
    features: [
      {
        name: "AI Earnings Summaries",
        desc: "Management insights beyond the headlines",
      },
      {
        name: "Portfolio Risk Simulator",
        desc: "Stress-test positions before the market does",
      },
      {
        name: "Correlation Matrix",
        desc: "Understand portfolio exposure instantly",
      },
      {
        name: "Trading View + AI Deep Research",
        desc: "Analyze and execute from one screen",
      },
      {
        name: "API & Priority Support",
        desc: "Build with Eldora data, get faster help",
      },
    ],
  },
];

type PortfolioIntelligenceSectionProps = {
  onLaunchApp: () => void;
  onOpenPricing: () => void;
};

const PortfolioIntelligenceSection = ({
  onLaunchApp,
  onOpenPricing,
}: PortfolioIntelligenceSectionProps) => {
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
    <section className="px-4 py-0">
      <div
        className="relative overflow-hidden rounded-4xl px-6 py-30 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #94C4FF 0%, #1D43A8 39.9%, #0B1F75 70.67%, #010425 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <SectionBadge
          invertColor
          text="Portfolio Intelligence · Observer · Analyst · Edge"
        />
        <h3 className="mx-auto mt-10 max-w-4xl font-eiko text-3xl lg:text-6xl lg:leading-16">
          From Data to Decisions
        </h3>
        <p className="mx-auto mt-2 lg:text-xl">
          Live Bloomberg, CNBC, Fear & Greed, real-time prices,
          <br className="block lg:hidden" /> and AI market insights - all in one
          dashboard.
        </p>

        <div className="relative mx-auto mt-12 hidden w-full max-w-6xl grid-cols-3 gap-5 text-left md:grid lg:gap-6">
          {pricingPlans.map((plan) => (
            <PricingPlanCard
              key={plan.name}
              plan={plan}
              onPlanAction={onOpenPricing}
            />
          ))}
        </div>

        <div className="mx-auto mt-10 block w-full max-w-[25rem] text-left md:hidden">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full [&_[data-slot=carousel-content]]:overflow-visible"
          >
            <CarouselContent className="-ml-4 py-8">
              {pricingPlans.map((plan) => (
                <CarouselItem key={plan.name} className="pl-4">
                  <PricingPlanCard plan={plan} onPlanAction={onOpenPricing} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-2 px-4">
              {pricingPlans.map((plan, index) => (
                <button
                  key={`pricing-dot-${plan.name}`}
                  type="button"
                  aria-label={`Go to ${plan.name} plan`}
                  aria-current={currentIndex === index}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={cn(
                    "size-2.5 rounded-full bg-white/30 transition-all duration-300",
                    currentIndex === index && "w-8 bg-white",
                  )}
                />
              ))}
            </div>
          </Carousel>
        </div>

        <PrimaryButton
          withEffect
          onClick={onLaunchApp}
          className="mx-auto mt-12 flex items-center gap-2 px-6 py-2"
        >
          Try Observatory Free. No login
          <MoveRight size={16} />
        </PrimaryButton>
      </div>
    </section>
  );
};

export default PortfolioIntelligenceSection;
