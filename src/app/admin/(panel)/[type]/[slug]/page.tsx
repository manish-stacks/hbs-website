import { notFound } from "next/navigation";
import { Builder } from "@/components/admin/Builder";
import { getEntryBySlug, type EntryType } from "@/lib/content";

export const dynamic = "force-dynamic";
const TYPES: Record<string, EntryType[]> = { pages: ["page", "service"], services: ["service", "page"], blog: ["blog"] };

export default async function EditEntry({ params }: { params: Promise<{ type: string; slug: string }> }) {
  const { type, slug } = await params;
  if (!TYPES[type]) notFound();
  const e = await getEntryBySlug(TYPES[type], decodeURIComponent(slug));
  if (!e) notFound();
  return (
    <Builder
      id={e.id}
      type={e.type}
      initial={{
        meta: {
          title: e.title, slug: e.slug, excerpt: e.excerpt, image: e.image, imageAlt: e.imageAlt, noindex: e.noindex, canonical: e.canonical,
          author: e.author, tag: e.tag, status: e.status, seoTitle: e.seoTitle, seoDescription: e.seoDescription,
        },
        blocks: e.blocks,
      }}
    />
  );
}
