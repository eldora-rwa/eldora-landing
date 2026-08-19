import { CheckCircle2, Clock, Crown, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingFeature {
  name: string;
  desc: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  savings?: string;
  badge?: {
    label: string;
    variant: "popular" | "early";
  };
  ctaLabel: string;
  ctaVariant: "current" | "primary";
  sectionHeader: string;
  features: PricingFeature[];
}

type PricingPlanCardProps = {
  plan: PricingPlan;
  onPlanAction: () => void;
};

const PricingPlanCard = ({ plan, onPlanAction }: PricingPlanCardProps) => {
  const isFeatured = plan.name === "Analyst";

  return (
    <article
      className={cn(
        "relative flex min-h-[560px] flex-col overflow-hidden rounded-[24px] border p-7 backdrop-blur-sm md:p-6 lg:p-8",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-32 before:bg-[radial-gradient(70%_95%_at_50%_0%,rgba(76,133,255,0.48),rgba(76,133,255,0))]",
        isFeatured
          ? "border-[#4C86FF]/40 bg-[#071653]/92 shadow-[0_30px_90px_rgba(11,66,210,0.35)] before:opacity-100"
          : "border-white/8 bg-[#071653]/45 shadow-[0_18px_54px_rgba(0,0,0,0.12)] before:opacity-35 md:translate-y-2",
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex min-h-8 items-start justify-between gap-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            {plan.name}
          </h4>
          {plan.badge && (
            <span
              className={cn(
                "inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-[11px] leading-none text-white",
                plan.badge.variant === "popular" ? "bg-[#4C86FF]" : "bg-black/35",
              )}
            >
              {plan.badge.variant === "popular" ? (
                <Crown className="size-3" aria-hidden="true" />
              ) : (
                <Clock className="size-3" aria-hidden="true" />
              )}
              {plan.badge.label}
            </span>
          )}
        </div>

        <p className="mt-3 text-[15px] text-white/90">{plan.description}</p>

        <div className="mt-7 min-h-[78px]">
          {plan.price === "Free" ? (
            <>
              <div className="text-[34px] font-semibold leading-none text-white">
                {plan.price}
              </div>
              <p className="mt-2 text-[13px] text-white">{plan.priceNote}</p>
            </>
          ) : (
            <>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-[34px] font-semibold leading-none text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-white">{plan.priceNote}</span>
                <button
                  type="button"
                  onClick={onPlanAction}
                  className="ml-auto hidden items-center gap-1 text-xs text-white/85 underline underline-offset-2 transition hover:text-white lg:flex"
                >
                  <Info className="size-3.5" aria-hidden="true" />
                  Benefit Detail
                </button>
              </div>
              {plan.savings && (
                <p className="mt-2 text-xs font-medium text-[#23E6AE]">
                  {plan.savings}
                </p>
              )}
            </>
          )}
        </div>

        <button
          type="button"
          onClick={onPlanAction}
          className={cn(
            "mt-5 flex min-h-10 w-full items-center justify-center rounded-full px-5 text-sm font-medium transition",
            plan.ctaVariant === "current"
              ? "bg-white/14 text-white hover:bg-white/20"
              : "bg-[#075BFF] text-white shadow-[0_12px_34px_rgba(7,91,255,0.28)] hover:bg-[#1468FF]",
          )}
        >
          {plan.ctaLabel}
        </button>

        <div className="mt-8 flex flex-1 flex-col">
          <p className="text-[15px] font-medium text-white">
            {plan.sectionHeader}
          </p>
          <div className="mt-4 flex flex-col gap-4">
            {plan.features.map((feature) => (
              <div key={feature.name} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-white"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[15px] leading-5 text-white">
                    {feature.name}
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-white/45">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PricingPlanCard;
