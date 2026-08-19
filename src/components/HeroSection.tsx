import { MoveRight } from "lucide-react";
import heroLayerOne from "@/assets/imgs/hero_img_new_001.jpg";
import heroLayerTwo from "@/assets/imgs/hero_img_new_002.png";
import heroLayerTwoMobile from "@/assets/imgs/hero_img_new_002_mobile.png";
import PrimaryButton from "@/components/PrimaryButton";

type HeroSectionProps = {
  onLaunchApp: () => void;
};

const HeroSection = ({ onLaunchApp }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen min-h-[100svh] overflow-hidden bg-navi-dark">
      <img
        src={heroLayerOne}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="relative z-10 mx-auto flex min-h-screen min-h-[100svh] w-full max-w-7xl
         flex-col px-5 pt-28 sm:px-6 md:px-8 md:pt-32 lg:px-4 lg:pt-24"
      >
        <div className="flex min-h-0 items-start justify-center pt-16 md:flex-1 md:items-end md:pt-6 lg:pt-0">
          <img
            src={heroLayerTwoMobile}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="h-auto w-[108%] object-contain md:hidden"
          />
          <img
            src={heroLayerTwo}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="hidden h-auto w-full max-w-[54rem] object-contain md:block lg:max-h-full lg:max-w-none"
          />
        </div>
        <div
          className="z-10 flex w-full shrink-0 flex-col items-center gap-8 pt-4
           pb-[max(3rem,env(safe-area-inset-bottom))] text-center md:gap-10 md:pt-6
           md:pb-[max(3.5rem,env(safe-area-inset-bottom))] lg:gap-6 lg:pt-6
           lg:pb-[max(2rem,env(safe-area-inset-bottom))]"
        >
          <div className="max-w-[29rem] md:max-w-[44rem] lg:max-w-none">
            <h1 className="font-eiko text-[32px] leading-[1.22] tracking-[-0.03em] text-cream-light md:text-[52px] md:leading-[1.14] md:tracking-[-0.02em] lg:text-5xl lg:leading-tight lg:tracking-normal">
              <span className="md:hidden">
                <span className="block">
                  Own{" "}
                  <span className="text-[#28FFBC]">$NVDA, $AAPL, $TSLA</span>
                </span>
                <span className="block">and 724 more US stocks on-</span>
                <span className="block">chain. Real ownership. No</span>
                <span className="block">broker account.</span>
              </span>
              <span className="hidden md:block lg:hidden">
                <span className="block">
                  Own{" "}
                  <span className="text-[#28FFBC]">$NVDA, $AAPL, $TSLA</span>
                </span>
                <span className="block">and 724 more US stocks on-chain.</span>
                <span className="mt-3 block">
                  Real ownership. No broker account.
                </span>
              </span>
              <span className="hidden lg:inline">
                Own <span className="text-[#28FFBC]">$NVDA, $AAPL, $TSLA</span>{" "}
                and 724 more US stocks on-chain.
                <span className="mt-2 block lg:mt-0">
                  Real ownership. No broker account.
                </span>
              </span>
            </h1>
          </div>
          <PrimaryButton
            withEffect
            onClick={onLaunchApp}
            className="flex min-h-12 items-center gap-2 px-8 py-2 text-[18px] font-medium
               md:min-h-15 md:px-10 md:text-[22px] lg:min-h-0 lg:px-6 lg:text-base"
          >
            <span className="lg:hidden">Launch app</span>
            <span className="hidden lg:inline">Launch App</span>
            <MoveRight size={16} />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
