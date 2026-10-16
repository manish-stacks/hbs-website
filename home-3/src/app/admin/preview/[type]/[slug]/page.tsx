import Link from "next/link";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { getEntryBySlug, type EntryType } from "@/lib/content";

export const dynamic = "force-dynamic";
const TYPES: Record<string, EntryType[]> = { pages: ["page", "service"], services: ["service", "page"], blog: ["blog"] };

export default async function Preview({ params }: { params: Promise<{ type: string; slug: string }> }) {
  const { type, slug } = await params;
  if (!TYPES[type]) notFound();
  const e = await getEntryBySlug(TYPES[type], decodeURIComponent(slug));
  if (!e) notFound();
  const path = e.type === "blog" ? `/blog/${e.slug}` : `/${e.slug}`;
  return (
    <div className="theme-hbs">
      <div className="sticky top-0 z-50 flex items-center justify-between gap-4 bg-[var(--color-ink)] px-5 py-3 text-sm text-white">
        <span>Preview ({e.status}): {e.title}</span>
        <Link href={`/admin/${type}/${e.slug}`} className="rounded-full bg-[var(--color-brand)] px-4 py-1.5 text-xs font-bold">Back to editor</Link>
      </div>
      <BlockRenderer blocks={e.blocks} slug={e.slug} path={path} />
    </div>
  );
}
