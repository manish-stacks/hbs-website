import { notFound } from "next/navigation";
import { Builder } from "@/components/admin/Builder";
import { newBlock } from "@/lib/blocks";
import type { EntryType } from "@/lib/content";

export const dynamic = "force-dynamic";
const TYPES: Record<string, EntryType> = { pages: "page", services: "service", blog: "blog" };

export default async function NewEntry({ params }: { params: Promise<{ type: string }> }) {
  const type = TYPES[(await params).type];
  if (!type) notFound();
  const blocks = type === "blog" ? [newBlock("text"), newBlock("cta")] : [newBlock("hero"), newBlock("text")];
  return (
    <Builder
      id={null}
      type={type}
      initial={{ meta: { title: "", slug: "", excerpt: "", image: "", imageAlt: "", noindex: false, canonical: "", author: "", tag: "", status: "draft", seoTitle: "", seoDescription: "" }, blocks }}
    />
  );
}
