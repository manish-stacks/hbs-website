import { notFound } from "next/navigation";
import { EntryEditor } from "@/components/admin/EntryEditor";
import type { EntryType } from "@/lib/content";

export const dynamic = "force-dynamic";
const TYPES: Record<string, EntryType> = { pages: "page", blog: "blog" };

export default async function NewEntry({ params }: { params: Promise<{ type: string }> }) {
  const type = TYPES[(await params).type];
  if (!type) notFound();
  return (
    <EntryEditor
      id={null}
      type={type}
      initial={{ meta: { title: "", slug: "", excerpt: "", image: "", imageAlt: "", noindex: false, canonical: "", author: "", tag: "", status: "draft", seoTitle: "", seoDescription: "" }, html: "", converted: false }}
    />
  );
}
