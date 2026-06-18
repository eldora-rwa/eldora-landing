import { documentContent, type DocumentBlock } from "@/data/documentContent";

export interface DocumentSection {
  id: string;
  title: string;
  part: string | null;
  blocks: DocumentBlock[];
}

export const overviewSectionTitle = "Overview";
export const platformGuidePartTitle = "Platform Guide";
export const legalPartTitle = "Legal & Compliance";
export const contactSupportSectionTitle = "Contact & Support";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const overviewSectionPattern = /^(table of contents|overview)$/i;
const partAPattern = /^(part\s+a\b.*|platform guide)$/i;
const partBPattern = /^(part\s+b\b.*|legal\s*&\s*compliance)$/i;
const contactSupportPattern = /^(t4[.)]?\s+)?contact\s*&\s*support$/i;

const normalizeSectionTitle = (title: string) => {
  if (overviewSectionPattern.test(title)) {
    return overviewSectionTitle;
  }

  if (contactSupportPattern.test(title)) {
    return contactSupportSectionTitle;
  }

  return title;
};

const normalizePartTitle = (title: string) => {
  if (partAPattern.test(title)) {
    return platformGuidePartTitle;
  }

  if (partBPattern.test(title)) {
    return legalPartTitle;
  }

  return title;
};

const isRawPartTitle = (title: string) =>
  partAPattern.test(title) || partBPattern.test(title);

export const isEmbeddedDocumentSectionVisible = (section: DocumentSection) =>
  section.title === overviewSectionTitle ||
  section.title === contactSupportSectionTitle ||
  section.part === platformGuidePartTitle;

export const documentSections: DocumentSection[] = [];

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
        id: slugify(normalizeSectionTitle(block.text)),
        title: normalizeSectionTitle(block.text),
        part: currentPart,
        blocks: [],
      };
      documentSections.push(currentSection);
      continue;
    }

    if (
      block.type === "table" &&
      block.rows.length === 1 &&
      block.rows[0].length === 1 &&
      isRawPartTitle(block.rows[0][0])
    ) {
      currentPart = normalizePartTitle(block.rows[0][0]);
      continue;
    }

    if (
      block.type === "paragraph" &&
      block.style === "normal" &&
      isRawPartTitle(block.text)
    ) {
      if (currentSection?.title === overviewSectionTitle) {
        currentSection.blocks.push(block);
      }
      continue;
    }

    currentSection?.blocks.push(block);
  }
}
