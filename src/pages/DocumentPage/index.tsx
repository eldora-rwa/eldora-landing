import PrimaryButton from "@/components/PrimaryButton";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { documentContent, type DocumentBlock } from "@/data/documentContent";
import { BookOpen, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface DocumentSection {
  id: string;
  title: string;
  part: string | null;
  blocks: DocumentBlock[];
}

interface SectionGroup {
  title: string;
  sections: DocumentSection[];
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const isUrl = (value: string) => /^https?:\/\/\S+$/i.test(value);
const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const renderInlineText = (text: string) => {
  if (isUrl(text)) {
    return (
      <a
        href={text}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-navi-light underline underline-offset-4"
      >
        {text}
        <ExternalLink size={14} />
      </a>
    );
  }

  if (isEmail(text)) {
    return (
      <a
        href={`mailto:${text}`}
        className="text-navi-light underline underline-offset-4"
      >
        {text}
      </a>
    );
  }

  return text;
};

const sections: DocumentSection[] = [];
const documentHeading = "Platform Documentation & User Guide";
const documentDescriptions = [
  "On-Chain Investing · Tokenized Equities · DeFi Yield · DEX",
  "277+ Assets · 85+ Countries · 10,000+ Users · 5.3% T-Bill APY",
  "Version 1.0 · June 2026 · app.eldora.do",
];
const overviewSectionTitle = "Table of Contents";
const partTitles = new Set([
  "PART A — PLATFORM GUIDE",
  "PART B — LEGAL & COMPLIANCE",
]);

{
  let currentPart: string | null = null;
  let currentSection: DocumentSection | null = null;
  let reachedFirstSection = false;

  for (const block of documentContent.blocks) {
    if (
      !reachedFirstSection &&
      block.type === "paragraph" &&
      block.style === "normal"
    ) {
      continue;
    }

    if (block.type === "paragraph" && block.style === "Heading 1") {
      reachedFirstSection = true;
      currentSection = {
        id: slugify(block.text),
        title: block.text,
        part: currentPart,
        blocks: [],
      };
      sections.push(currentSection);
      continue;
    }

    if (
      block.type === "table" &&
      block.rows.length === 1 &&
      block.rows[0].length === 1 &&
      partTitles.has(block.rows[0][0])
    ) {
      currentPart = block.rows[0][0];
      continue;
    }

    if (
      block.type === "paragraph" &&
      block.style === "normal" &&
      partTitles.has(block.text)
    ) {
      if (currentSection?.title === "Table of Contents") {
        currentSection.blocks.push(block);
      }
      continue;
    }

    currentSection?.blocks.push(block);
  }
}

const groupedSections = sections.reduce<SectionGroup[]>((groups, section) => {
  const title = section.part ?? "OTHER";
  const existingGroup = groups.find((group) => group.title === title);

  if (existingGroup) {
    existingGroup.sections.push(section);
    return groups;
  }

  groups.push({
    title,
    sections: [section],
  });

  return groups;
}, []);

const getSectionDisplayTitle = (section: DocumentSection) =>
  section.title === overviewSectionTitle ? "Overview" : section.title;

const isOverviewSection = (section: DocumentSection) =>
  section.title === overviewSectionTitle;

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

  return "text-base leading-7 text-navi-dark/85 md:text-lg md:leading-8";
};

const renderBlock = (block: DocumentBlock, index: number) => {
  if (block.type === "image") {
    return (
      <figure
        key={`image-${index}`}
        className="overflow-hidden rounded-[28px] border border-[#DCE5F3] bg-[#EDF3FF] p-3"
      >
        <img
          src={block.src}
          alt={block.alt}
          className="w-full rounded-[20px] object-cover"
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
                  className={
                    rowIndex === 0
                      ? "bg-[#EDF3FF]"
                      : "border-t border-[#E5ECF6]"
                  }
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`cell-${rowIndex}-${cellIndex}`}
                      className={`px-4 py-4 align-top text-sm leading-6 md:px-5 md:text-base ${
                        rowIndex === 0
                          ? "font-semibold text-navi-dark"
                          : "text-navi-dark/80"
                      }`}
                    >
                      {renderInlineText(cell)}
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

  return (
    <p key={`paragraph-${index}`} className={getParagraphClassName(block)}>
      {renderInlineText(block.text)}
    </p>
  );
};

function DocumentSidebar({
  activeSectionId,
  onSelectSection,
}: {
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
}) {
  const { isMobile, setOpenMobile } = useSidebar();

  const handleSelectSection = (sectionId: string) => {
    onSelectSection(sectionId);
    window.scrollTo({ top: 0 });

    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <BookOpen />
              <span>Documentation</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {groupedSections.map((group) => (
          <SidebarGroup key={group.title}>
            {group.title === "OTHER" ? null : (
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.sections.map((section) => (
                  <SidebarMenuItem key={section.id}>
                    <SidebarMenuButton
                      type="button"
                      isActive={activeSectionId === section.id}
                      onClick={() => handleSelectSection(section.id)}
                      tooltip={getSectionDisplayTitle(section)}
                    >
                      <span>{getSectionDisplayTitle(section)}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

export default function DocumentPage() {
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? "");
  const activeSection =
    sections.find((section) => section.id === activeSectionId) ?? sections[0];

  return (
    <SidebarProvider defaultOpen>
      <DocumentSidebar
        activeSectionId={activeSection?.id ?? ""}
        onSelectSection={setActiveSectionId}
      />

      <SidebarInset className="min-w-0">
        <header className="fixed top-0 right-0 left-0 z-40 border-b border-navi-light/30 bg-navi-dark/95 backdrop-blur-md md:left-[var(--sidebar-width)]">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <SidebarTrigger className="size-9 rounded-full text-cream-light hover:bg-white/10 hover:text-cream-light md:hidden" />

              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Eldora"
                  className="h-10 w-auto object-contain md:h-12"
                />
              </Link>
            </div>

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

        <section className="bg-white px-4 pt-28 pb-10 lg:pt-32 lg:pb-14">
          <div className="mx-auto max-w-5xl">
            {activeSection ? (
              <article key={activeSection.id} className="bg-white">
                {isOverviewSection(activeSection) ? (
                  <div className="mb-12 flex flex-col gap-3 border-b border-[#E5ECF6] pb-8">
                    <h1 className="font-eiko text-4xl leading-tight text-navi-dark lg:text-6xl">
                      {documentHeading}
                    </h1>

                    {documentDescriptions.map((description, index) => (
                      <p
                        key={description}
                        className={
                          index === documentDescriptions.length - 1
                            ? "text-sm leading-6 text-navi-dark/56 md:text-base"
                            : "text-base leading-7 text-navi-dark/76 md:text-lg"
                        }
                      >
                        {description}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="max-w-4xl">
                    <h1 className="font-eiko text-3xl leading-tight text-navi-dark lg:text-5xl">
                      {activeSection.title}
                    </h1>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-5">
                  {activeSection.blocks.map((block, index) =>
                    renderBlock(block, index),
                  )}
                </div>
              </article>
            ) : null}
          </div>
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
