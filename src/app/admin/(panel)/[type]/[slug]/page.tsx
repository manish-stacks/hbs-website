import { notFound } from "next/navigation";
import { EntryEditor } from "@/components/admin/EntryEditor";
import { getEntryBySlug, type EntryType } from "@/lib/content";
import { blocksToHtml } from "@/lib/richtext";

export const dynamic = "force-dynamic";
const TYPES: Record<string, EntryType[]> = { pages: ["page", "service"], services: ["service", "page"], blog: ["blog"] };

export default async function EditEntry({ params }: { params: Promise<{ type: string; slug: string }> }) {
  const { type, slug } = await params;
  if (!TYPES[type]) notFound();
  const e = await getEntryBySlug(TYPES[type], decodeURIComponent(slug));
  if (!e) notFound();
  const article = e.blocks.length === 1 && e.blocks[0]!.type === "article";
  const html = article ? String(e.blocks[0]!.body ?? "") : blocksToHtml(e.blocks as Record<string, unknown>[]);
  return (
    <EntryEditor
      id={e.id}
      type={e.type}
      initial={{
        meta: {
          title: e.title, slug: e.slug, excerpt: e.excerpt, image: e.image, imageAlt: e.imageAlt, noindex: e.noindex, canonical: e.canonical,
          author: e.author, tag: e.tag, status: e.status, seoTitle: e.seoTitle, seoDescription: e.seoDescription,
        },
        html,
        converted: !article && e.blocks.length > 0,
      }}
    />
  );
}
