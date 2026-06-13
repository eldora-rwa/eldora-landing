import PrimaryButton from "@/components/PrimaryButton";
import type { DocumentBlock } from "@/data/documentContent";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router";
import {
  documentSections as sections,
  partTitles,
  type DocumentSection,
} from "./documentSections";

const normalizeSectionTitle = (value: string) =>
  value
    .toLowerCase()
    .replace(/^[a-z]?\d+[.)]?\s+/i, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const linkPattern =
  /([^\s<>()]+@[^\s<>()]+\.[^\s<>()]+|https?:\/\/[^\s<>()]+|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s<>()]*)?)/g;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const splitTrailingPunctuation = (value: string) => {
  const match = value.match(/^(.+?)([.,!?;:]+)?$/);

  return {
    linkText: match?.[1] ?? value,
    trailingText: match?.[2] ?? "",
  };
};

const getHref = (value: string) => {
  if (emailPattern.test(value)) {
    return `mailto:${value}`;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `https://${value}`;
};

const renderInlineText = (text: string) => {
  const segments = [...text.matchAll(linkPattern)];

  if (segments.length === 0) {
    return text;
  }

  const content = [];
  let lastIndex = 0;

  segments.forEach((match, index) => {
    const matchedText = match[0];
    const startIndex = match.index ?? 0;

    if (startIndex > lastIndex) {
      content.push(text.slice(lastIndex, startIndex));
    }

    const { linkText, trailingText } = splitTrailingPunctuation(matchedText);
    const isEmail = emailPattern.test(linkText);

    content.push(
      <a
        key={`${linkText}-${index}`}
        href={getHref(linkText)}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noreferrer"}
        className="text-navi-light underline underline-offset-4"
      >
        {linkText}
      </a>,
    );

    if (trailingText) {
      content.push(trailingText);
    }

    lastIndex = startIndex + matchedText.length;
  });

  if (lastIndex < text.length) {
    content.push(text.slice(lastIndex));
  }

  return content;
};

const documentHeading = "Platform Documentation & User Guide";
const documentDescriptions = [
  "On-Chain Investing · Tokenized Equities · DeFi Yield · DEX",
  "277+ Assets · 85+ Countries · 10,000+ Users · 5.3% T-Bill APY",
  "Version 1.0 · June 2026 · app.eldora.do",
];
const overviewSectionTitle = "Table of Contents";
const kycVideoEmbedUrl = "https://www.youtube.com/embed/1Iph2CoWR8s";

const getParagraphClassName = (
  block: Extract<DocumentBlock, { type: "paragraph" }>,
) => {
  if (block.style === "Title") {
    return "font-eiko text-4xl leading-tight text-cream-light md:text-6xl";
  }

  if (block.style === "Heading 2") {
    return "font-eiko text-2xl leading-tight text-navi-dark md:text-[2rem]";
  }

  if (block.style === "Heading 3") {
    return "text-lg font-semibold text-navi-light md:text-xl";
  }

  if (partTitles.has(block.text)) {
    return "text-sm font-semibold uppercase tracking-[0.28em] text-navi-light";
  }

  const isMetaLine =
    block.text.includes("Version 1.0") ||
    block.text.includes("app.eldora.do") ||
    block.text.startsWith("GDPR + Swiss") ||
    block.text.startsWith("Effective Date:");

  if (isMetaLine) {
    return "text-sm text-navi-dark/60 md:text-base";
  }

  if (isMutedItalicParagraph(block.text)) {
    return "text-base italic leading-7 text-navi-dark/60";
  }

  return "text-base leading-7 text-navi-dark/85";
};

const mutedItalicParagraphPrefixes = [
  "Rates are variable",
  "LLTV =",
  "Gas estimates are approximate",
] as const;

const isQuoteParagraph = (text: string) =>
  text.startsWith("“") || text.startsWith("— ");

const isMutedItalicParagraph = (text: string) =>
  isQuoteParagraph(text) ||
  mutedItalicParagraphPrefixes.some((prefix) => text.startsWith(prefix));

const calloutTitlePrefixes = [
  "Real Ownership — Not Synthetic",
  "Geographic Restrictions",
  "Your Data is Protected",
  "Hardware Wallet Tip",
  "No Account Required",
  "Simulation Disclaimer",
  "Free, Always",
  "When Can You Trade?",
  "Put Idle Capital to Work",
  "Lending Risk Disclosure",
  "Bridging Times",
  "Leaderboard is Public",
  "Phishing Warning — Important",
  "One KYC, All Chains",
  "Access Restrictions",
  "Smart Contract Risk",
] as const;

const splitCalloutText = (text: string) => {
  const matchedPrefix = calloutTitlePrefixes.find((prefix) =>
    text.startsWith(prefix),
  );

  if (!matchedPrefix) {
    return null;
  }

  const body = text.slice(matchedPrefix.length).trim();

  if (!body) {
    return null;
  }

  return {
    title: matchedPrefix,
    body,
  };
};

const getSectionByTitle = (title: string) => {
  const normalizedTarget = normalizeSectionTitle(title);

  return sections.find((section) => {
    const normalizedSection = normalizeSectionTitle(section.title);

    return (
      normalizedSection === normalizedTarget ||
      normalizedSection.endsWith(normalizedTarget) ||
      normalizedTarget.endsWith(normalizedSection)
    );
  });
};

const getSectionDisplayTitle = (section: DocumentSection) =>
  section.title === overviewSectionTitle ? "Overview" : section.title;

const getTableCellClassName = (
  isOverviewTable: boolean,
  rowIndex: number,
  cellIndex: number,
) => {
  const base = "px-4 py-4 align-top text-sm leading-6 md:px-5 md:text-base";

  if (isOverviewTable) {
    if (cellIndex === 0) {
      return `${base} w-14 font-medium text-navi-light`;
    }

    if (cellIndex === 1) {
      return `${base} font-medium text-navi-dark`;
    }

    return `${base} text-navi-dark/60`;
  }

  if (rowIndex === 0) {
    return `${base} font-semibold text-navi-dark`;
  }

  return `${base} text-navi-dark/80`;
};

const scrollToSection = (sectionId: string) => {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - 104;
  window.scrollTo({ top, behavior: "smooth" });
};

const renderBlock = (
  block: DocumentBlock,
  index: number,
  section: DocumentSection,
) => {
  if (block.type === "image") {
    return (
      <figure
        key={`image-${index}`}
        className="overflow-hidden rounded-[28px] bg-[#EDF3FF]"
      >
        <img
          src={block.src}
          alt={block.alt}
          className="w-full rounded-[28px] object-cover"
        />
      </figure>
    );
  }

  if (block.type === "imagePlaceholder") {
    return (
      <div
        key={`image-placeholder-${index}`}
        className="rounded-[28px] border border-dashed border-navi-light/40 bg-[#EDF3FF] px-6 py-12 text-center text-navi-dark/70"
      >
        <p className="font-semibold text-navi-dark">Image placeholder</p>
        <p className="mt-2 text-sm">{block.note}</p>
      </div>
    );
  }

  if (block.type === "table") {
    const isOverviewTable = section.title === overviewSectionTitle;
    const isSingleCellCallout =
      block.rows.length === 1 && block.rows[0].length === 1;
    const calloutContent = isSingleCellCallout
      ? splitCalloutText(block.rows[0][0])
      : null;

    if (calloutContent) {
      return (
        <div
          key={`table-${index}`}
          className="rounded-[28px] bg-[#EDF3FF] px-6 py-6 md:px-7"
        >
          <h3 className="text-base font-semibold leading-7 text-navi-dark md:text-lg">
            {calloutContent.title}
          </h3>
          <p className="mt-2 text-base leading-7 text-navi-dark/62">
            {calloutContent.body}
          </p>
        </div>
      );
    }

    return (
      <div
        key={`table-${index}`}
        className="overflow-hidden rounded-[28px] border border-[#DCE5F3] bg-white"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr
                  key={`row-${rowIndex}`}
                  onClick={
                    isOverviewTable
                      ? () => {
                          const targetSection = getSectionByTitle(row[1]);
                          if (targetSection) {
                            scrollToSection(targetSection.id);
                          }
                        }
                      : undefined
                  }
                  role={isOverviewTable ? "link" : undefined}
                  tabIndex={isOverviewTable ? 0 : undefined}
                  onKeyDown={
                    isOverviewTable
                      ? (event) => {
                          if (event.key !== "Enter" && event.key !== " ") {
                            return;
                          }

                          event.preventDefault();
                          const targetSection = getSectionByTitle(row[1]);
                          if (targetSection) {
                            scrollToSection(targetSection.id);
                          }
                        }
                      : undefined
                  }
                  className={
                    isOverviewTable
                      ? "group cursor-pointer border-t border-[#E5ECF6] transition-colors hover:bg-[#F6F9FF]"
                      : rowIndex === 0
                        ? "bg-[#EDF3FF]"
                        : "border-t border-[#E5ECF6]"
                  }
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`cell-${rowIndex}-${cellIndex}`}
                      className={getTableCellClassName(
                        isOverviewTable,
                        rowIndex,
                        cellIndex,
                      )}
                    >
                      {isOverviewTable && cellIndex === 1 ? (
                        <span className="text-left text-navi-dark underline-offset-4 group-hover:underline">
                          {cell}
                        </span>
                      ) : (
                        renderInlineText(cell)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (block.type === "paragraph" && block.text === "KYC video") {
    return (
      <div
        key={`kyc-video-${index}`}
        className="aspect-video w-full overflow-hidden rounded-2xl"
      >
        <iframe
          src={kycVideoEmbedUrl}
          title="KYC video guide"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  const ParagraphTag = isQuoteParagraph(block.text) ? "blockquote" : "p";

  return (
    <ParagraphTag
      key={`paragraph-${index}`}
      className={getParagraphClassName(block)}
    >
      {renderInlineText(block.text)}
    </ParagraphTag>
  );
};

interface DocumentArticleProps {
  embedded?: boolean;
}

export function DocumentArticle({ embedded = false }: DocumentArticleProps) {
  return (
    <section
      className={
        embedded
          ? "bg-transparent px-0 py-0"
          : "bg-white px-4 pt-28 pb-10 lg:pt-32 lg:pb-14"
      }
    >
      <div className={embedded ? "w-full" : "mx-auto max-w-5xl"}>
        <article className="bg-transparent">
          <div className="mb-12 flex flex-col gap-3 border-b border-[#E5ECF6] pb-8">
            <h1 className="font-eiko text-4xl leading-tight text-navi-dark lg:text-6xl">
              {documentHeading}
            </h1>

            {documentDescriptions.map((description, index) => (
              <p
                key={description}
                className={
                  index === 0
                    ? "text-base italic leading-7 text-navi-dark/70"
                    : index === 1
                      ? "text-base font-semibold leading-7 text-navi-dark/85"
                      : "text-sm leading-6 text-navi-dark/56 md:text-base"
                }
              >
                {description}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-16">
            {sections.map((section, sectionIndex) => {
              const showPartLabel =
                section.part &&
                sections[sectionIndex - 1]?.part !== section.part;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-b border-[#E5ECF6] pb-12 last:border-b-0 last:pb-0"
                >
                  <div className="max-w-4xl">
                    {showPartLabel ? (
                      <div className="mb-6 inline-flex rounded-full border border-[#D7E4F7] bg-[#EDF3FF] px-5 py-2">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-navi-light">
                          {section.part}
                        </p>
                      </div>
                    ) : null}
                    <h2 className="mt-3 font-eiko text-3xl leading-tight text-navi-dark lg:text-5xl">
                      {getSectionDisplayTitle(section)}
                    </h2>
                  </div>

                  <div className="mt-8 flex flex-col gap-5">
                    {section.blocks.map((block, index) =>
                      renderBlock(block, index, section),
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}

export default function DocumentPage() {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-40 border-b border-navi-light/30 bg-navi-dark/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/logo.png"
              alt="Eldora"
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          <PrimaryButton
            onClick={() => window.open("https://app.eldora.do", "_self")}
            className="flex items-center gap-2 px-4 py-2 md:px-5"
          >
            <span className="hidden sm:inline">Launch App</span>
            <span className="sm:hidden">Launch</span>
            <ExternalLink size={14} />
          </PrimaryButton>
        </div>
      </header>

      <DocumentArticle />
    </>
  );
}
