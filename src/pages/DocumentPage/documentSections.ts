import { documentContent, type DocumentBlock } from "@/data/documentContent";

export interface DocumentSection {
  id: string;
  title: string;
  part: string | null;
  blocks: DocumentBlock[];
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const partTitles = new Set([
  "PART A — PLATFORM GUIDE",
  "PART B — LEGAL & COMPLIANCE",
]);

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
        id: slugify(block.text),
        title: block.text,
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
