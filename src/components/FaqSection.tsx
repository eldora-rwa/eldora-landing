import { memo, useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { faqs } from "@/constants";
import bgFaq from "@/assets/imgs/bg_faq.png";
import SectionBadge from "@/components/SectionBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqCategory =
  | "all"
  | "getting-started"
  | "investing"
  | "security"
  | "withdrawals";

const faqCategoryOptions: Array<{ id: FaqCategory; label: string }> = [
  { id: "all", label: "All questions" },
  { id: "getting-started", label: "Getting started" },
  { id: "investing", label: "Investing" },
  { id: "security", label: "Security" },
  { id: "withdrawals", label: "Withdrawals" },
];

const faqCategoryKeywords: Record<
  Exclude<FaqCategory, "all" | "getting-started">,
  string[]
> = {
  investing: [
    "invest",
    "investing",
    "stocks",
    "assets",
    "markets",
    "broker",
    "bank",
    "platform",
  ],
  security: [
    "safe",
    "security",
    "non-custodial",
    "regulated",
    "control",
    "assets",
  ],
  withdrawals: ["withdraw", "withdrawal", "exit", "positions"],
};

const FaqSection = memo(() => {
  const [faqQuery, setFaqQuery] = useState("");
  const [activeFaqCategory, setActiveFaqCategory] =
    useState<FaqCategory>("all");
  const [openFaq, setOpenFaq] = useState("0");

  const filteredFaqs = useMemo(() => {
    const normalizedFaqQuery = faqQuery.trim().toLowerCase();

    return faqs.filter((item, index) => {
      const faqText = `${item.title} ${item.content}`.toLowerCase();

      const matchesCategory =
        activeFaqCategory === "all"
          ? true
          : activeFaqCategory === "getting-started"
            ? index < 3
            : faqCategoryKeywords[activeFaqCategory].some((keyword) =>
                faqText.includes(keyword),
              );

      const matchesQuery =
        normalizedFaqQuery.length === 0 || faqText.includes(normalizedFaqQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeFaqCategory, faqQuery]);

  useEffect(() => {
    if (filteredFaqs.length === 0) {
      setOpenFaq("");
      return;
    }

    const hasOpenItem = filteredFaqs.some((_, index) => `${index}` === openFaq);

    if (!hasOpenItem) {
      setOpenFaq("0");
    }
  }, [filteredFaqs, openFaq]);

  return (
    <section className="relative bg-black py-[120px] text-white">
      <img
        src={bgFaq}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-28">
        <div className="flex flex-col gap-8 lg:gap-10">
          <h3 className="font-eiko text-5xl leading-[1.08]">
            Everything You Need to Know
          </h3>

          <label className="relative block">
            <Search className="pointer-events-none absolute left-6 top-1/2 size-5 -translate-y-1/2 text-white/55" />
            <input
              type="text"
              value={faqQuery}
              onChange={(event) => setFaqQuery(event.target.value)}
              placeholder="Search questions..."
              className="h-16 w-full rounded-full border border-white/45 bg-transparent pl-14 pr-6 text-lg text-white outline-none transition-colors placeholder:text-white/55 focus:border-white/80"
            />
          </label>

          <div className="flex flex-col gap-3">
            {faqCategoryOptions.map((category) => {
              const isActive = category.id === activeFaqCategory;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveFaqCategory(category.id)}
                  className={`flex items-center gap-3 rounded-full px-5 py-4 text-left text-xl font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#1E3453] text-white"
                      : "text-white/90 hover:bg-white/8"
                  }`}
                >
                  <span
                    className={`size-2.5 rounded-full transition-colors ${
                      isActive ? "bg-[#619EFF]" : "bg-transparent"
                    }`}
                  />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <SectionBadge invertColor text="FAQ" />
          <Accordion
            type="single"
            collapsible
            value={openFaq}
            onValueChange={setOpenFaq}
          >
            {filteredFaqs.map((item, index) => (
              <AccordionItem
                key={item.title}
                value={`${index}`}
                className="border-b border-white/35 py-1"
              >
                <AccordionTrigger
                  className="flex items-center justify-between gap-6 py-4 hover:no-underline 
                    group [&[data-state=open]>span]:text-gold-base
                    [&_svg]:size-7 [&_svg]:text-[#4C7BCC]! [&_svg]:shrink-0
                    [&[data-state=open]>svg]:text-[#D7B36A]!"
                >
                  <span className="font-eiko text-2xl leading-[1.35] text-white transition-colors duration-200 lg:text-3xl">
                    {item.title.split(". ")[1] || item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="whitespace-pre-line pt-1 pb-5 text-lg text-white/85">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="border-b border-white/35 py-6 text-lg text-white/70">
                No questions found for this filter.
              </div>
            )}
          </Accordion>
        </div>
      </div>
    </section>
  );
});

FaqSection.displayName = "FaqSection";

export default FaqSection;
