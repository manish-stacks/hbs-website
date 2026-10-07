export type BlockType = "hero" | "heading" | "text" | "image" | "features" | "checklist" | "faq" | "cta";
export type Block = { id: string; type: BlockType; [k: string]: unknown };
export type Field = { k: string; label: string; t: "text" | "area" | "image" | "lines" | "items"; sub?: Field[]; hint?: string };

export const BLOCKS: Record<BlockType, { label: string; fields: Field[]; init: Record<string, unknown> }> = {
  hero: {
    label: "Hero banner",
    fields: [
      { k: "eyebrow", label: "Eyebrow", t: "text" },
      { k: "title", label: "Title", t: "text" },
      { k: "tagline", label: "Tagline", t: "area" },
      { k: "image", label: "Background image (optional)", t: "image" },
    ],
    init: { eyebrow: "Service", title: "Page title", tagline: "Short supporting line", image: "" },
  },
  heading: {
    label: "Section heading",
    fields: [
      { k: "text", label: "Heading", t: "text" },
      { k: "sub", label: "Sub text", t: "area" },
    ],
    init: { text: "Section heading", sub: "" },
  },
  text: {
    label: "Text",
    fields: [
      { k: "heading", label: "Heading (optional)", t: "text" },
      { k: "body", label: "Body (blank line = new paragraph)", t: "area" },
    ],
    init: { heading: "", body: "Write your content here." },
  },
  image: {
    label: "Image",
    fields: [
      { k: "src", label: "Image", t: "image" },
      { k: "alt", label: "Alt text", t: "text" },
      { k: "caption", label: "Caption (optional)", t: "text" },
    ],
    init: { src: "", alt: "", caption: "" },
  },
  features: {
    label: "Feature cards",
    fields: [
      { k: "heading", label: "Heading", t: "text" },
      { k: "intro", label: "Intro", t: "area" },
      {
        k: "items",
        label: "Cards",
        t: "items",
        sub: [
          { k: "title", label: "Title", t: "text" },
          { k: "body", label: "Text", t: "area" },
          { k: "href", label: "Link (optional)", t: "text" },
        ],
      },
    ],
    init: { heading: "What we do", intro: "", items: [{ title: "Feature title", body: "Describe it briefly.", href: "" }] },
  },
  checklist: {
    label: "Checklist",
    fields: [
      { k: "heading", label: "Heading", t: "text" },
      { k: "intro", label: "Intro", t: "area" },
      { k: "items", label: "Items (one per line)", t: "lines" },
    ],
    init: { heading: "What is included", intro: "", items: ["First item", "Second item"] },
  },
  faq: {
    label: "FAQ",
    fields: [
      { k: "heading", label: "Heading", t: "text" },
      {
        k: "items",
        label: "Questions",
        t: "items",
        sub: [
          { k: "q", label: "Question", t: "text" },
          { k: "a", label: "Answer", t: "area" },
        ],
      },
    ],
    init: { heading: "Common questions", items: [{ q: "Question?", a: "Answer." }] },
  },
  cta: {
    label: "Call to action",
    fields: [
      { k: "title", label: "Title", t: "text" },
      { k: "text", label: "Text", t: "area" },
      { k: "label", label: "Button label", t: "text" },
      { k: "href", label: "Button link", t: "text" },
    ],
    init: { title: "Ready to start?", text: "Talk to our team today.", label: "Contact us", href: "/contact-us" },
  },
};

export const BLOCK_TYPES = Object.keys(BLOCKS) as BlockType[];
export const uid = () => Math.random().toString(36).slice(2, 10);
export const newBlock = (type: BlockType): Block => ({ id: uid(), type, ...structuredClone(BLOCKS[type].init) });

export const str = (v: unknown) => (typeof v === "string" ? v : "");
export const rows = (v: unknown) => (Array.isArray(v) ? (v as Record<string, string>[]) : []);
export const strs = (v: unknown) => (Array.isArray(v) ? (v as string[]) : []);
export const safeHref = (h: string) => (/^(\/|https?:\/\/|mailto:|tel:|#)/i.test(h) ? h : "/");
