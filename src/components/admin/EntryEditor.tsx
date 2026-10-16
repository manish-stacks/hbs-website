"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeft, Eye, Globe, ImageIcon, Search, Settings2 } from "lucide-react";
import { ImageField, inp, lbl, slugify } from "./Fields";
import { RichEditor } from "./RichEditor";
import { card } from "./ListUI";
import { uid } from "@/lib/blocks";
import type { EntryType } from "@/lib/content";

export type Meta = {
  title: string; slug: string; excerpt: string; image: string; imageAlt: string; noindex: boolean; canonical: string;
  author: string; tag: string; status: "draft" | "published"; seoTitle: string; seoDescription: string;
};

const count = (n: number, max: number) => <span className={`ml-1 font-normal ${n > max ? "text-red-600" : "text-[var(--color-text-muted)]"}`}>{n}/{max}</span>;
const Panel = ({ icon: I, title, children }: { icon: typeof Globe; title: string; children: React.ReactNode }) => (
  <section className={`${card} p-5`}>
    <h3 className="mb-4 flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[var(--color-ink)]"><I size={15} className="text-[var(--color-brand)]" /> {title}</h3>
    <div className="space-y-4">{children}</div>
  </section>
);

/** Simple editor for custom pages and blog posts: title, content and SEO. */
export function EntryEditor({ id, type, initial }: { id: number | null; type: EntryType; initial: { meta: Meta; html: string; converted: boolean } }) {
  const router = useRouter();
  const [meta, setMeta] = useState(initial.meta);
  const [html, setHtml] = useState(initial.html);
  const [entryId, setEntryId] = useState(id);
  const [savedSlug, setSavedSlug] = useState(initial.meta.slug);
  const [slugTouched, setSlugTouched] = useState(!!id);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);

  const blog = type === "blog";
  const prefix = blog ? "/blog/" : "/";
  const listKey = blog ? "blog" : "pages";
  const setM = (k: keyof Meta, v: string | boolean) => { setMeta((m) => ({ ...m, [k]: v })); setDirty(true); };

  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => { if (dirty) e.preventDefault(); };
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  async function save(status: "draft" | "published") {
    if (!meta.title.trim()) return setMsg({ ok: false, t: "Please add a title." });
    setBusy(true);
    setMsg(null);
    const r = await fetch(entryId ? `/api/admin/entries/${entryId}` : "/api/admin/entries", {
      method: entryId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...meta, status, type, blocks: [{ id: uid(), type: "article", body: html }] }),
    });
    const j = await r.json().catch(() => ({}));
    setBusy(false);
    if (!r.ok) return setMsg({ ok: false, t: j.error || "Save failed" });
    const finalSlug = slugify(meta.slug || meta.title);
    setMeta((m) => ({ ...m, status, slug: finalSlug }));
    setSavedSlug(finalSlug);
    setDirty(false);
    setMsg({ ok: true, t: status === "published" ? "Published" : "Saved as draft" });
    if (!entryId) setEntryId(j.id);
    if (finalSlug !== initial.meta.slug || !entryId) router.replace(`/admin/${listKey}/${finalSlug}`);
  }

  const title = (blog ? "Blog post" : "Page") + (entryId ? "" : " (new)");

  return (
    <div>
      <div className="sticky top-16 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] bg-white/90 px-4 py-3 backdrop-blur sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Link href={`/admin/${listKey}`} className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]" aria-label="Back"><ArrowLeft size={16} /></Link>
          <div className="min-w-0"><p className="truncate font-display text-[15px] font-bold">{meta.title || title}</p><p className="text-[11px] capitalize text-[var(--color-text-muted)]">{title} · {meta.status}</p></div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {msg ? <span className={`text-xs font-semibold ${msg.ok ? "text-[var(--color-success)]" : "text-red-600"}`}>{msg.t}</span> : dirty ? <span className="text-xs font-semibold text-[var(--color-accent)]">Unsaved changes</span> : null}
          {entryId ? <a href={`/admin/preview/${listKey}/${savedSlug}`} target="_blank" className="flex items-center gap-1.5 rounded-xl border border-[var(--color-border)] px-4 py-2 text-xs font-bold hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"><Eye size={14} /> Preview</a> : null}
          <button disabled={busy} onClick={() => save("draft")} className="rounded-xl border border-[var(--color-ink)] px-4 py-2 text-xs font-bold hover:bg-[var(--color-ink)] hover:text-white disabled:opacity-60">Save draft</button>
          <button disabled={busy} onClick={() => save("published")} className="rounded-xl bg-gradient-to-r from-[var(--color-brand)] to-[#e11d63] px-5 py-2 text-xs font-bold text-white shadow-[0_10px_22px_-10px_rgba(229,35,27,.7)] disabled:opacity-60">{busy ? "Saving..." : "Publish"}</button>
        </div>
      </div>

      <div className="grid gap-6 p-4 sm:p-8 xl:grid-cols-[1fr_340px]">
        <div className="min-w-0 space-y-5">
          {initial.converted ? (
            <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-[13px] text-amber-900">
              <AlertTriangle size={18} className="mt-0.5 shrink-0" />
              <p>This page was built with the old block builder. Its text has been converted into the editor below. Please review it, because saving will replace the old layout with this content.</p>
            </div>
          ) : null}

          <section className={`${card} p-5 sm:p-6`}>
            <label className={lbl}>Title</label>
            <input className={`${inp} !py-3 !text-lg font-bold`} placeholder="Enter a title" value={meta.title} onChange={(e) => { setM("title", e.target.value); if (!slugTouched) setMeta((m) => ({ ...m, slug: slugify(e.target.value) })); }} />
            <label className={`${lbl} mt-4`}>Link</label>
            <div className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">{prefix}<input className={inp} value={meta.slug} onChange={(e) => { setSlugTouched(true); setM("slug", slugify(e.target.value)); }} placeholder="page-url" /></div>
            <label className={`${lbl} mt-4`}>Short summary {count(meta.excerpt.length, 200)}</label>
            <textarea className={inp} rows={2} value={meta.excerpt} onChange={(e) => setM("excerpt", e.target.value)} placeholder="One or two lines shown under the title and in lists." />
          </section>

          <section className={`${card} p-5 sm:p-6`}>
            <label className={lbl}>Content</label>
            <RichEditor value={html} onChange={(v) => { setHtml(v); setDirty(true); }} />
          </section>
        </div>

        <aside className="space-y-5">
          <Panel icon={ImageIcon} title="Featured image">
            <ImageField value={meta.image} onChange={(v) => setM("image", v)} />
            <div><label className={lbl}>Image description (alt text)</label><input className={inp} value={meta.imageAlt} onChange={(e) => setM("imageAlt", e.target.value)} /></div>
          </Panel>

          {blog ? (
            <Panel icon={Settings2} title="Post details">
              <div><label className={lbl}>Author</label><input className={inp} value={meta.author} onChange={(e) => setM("author", e.target.value)} /></div>
              <div><label className={lbl}>Category / tag</label><input className={inp} value={meta.tag} onChange={(e) => setM("tag", e.target.value)} /></div>
            </Panel>
          ) : null}

          <Panel icon={Search} title="Search engine (SEO)">
            <div><label className={lbl}>SEO title {count(meta.seoTitle.length, 60)}</label><input className={inp} value={meta.seoTitle} onChange={(e) => setM("seoTitle", e.target.value)} placeholder={meta.title} /></div>
            <div><label className={lbl}>Meta description {count(meta.seoDescription.length, 160)}</label><textarea className={inp} rows={3} value={meta.seoDescription} onChange={(e) => setM("seoDescription", e.target.value)} placeholder={meta.excerpt} /></div>
            <div><label className={lbl}>Canonical URL (optional)</label><input className={inp} value={meta.canonical} onChange={(e) => setM("canonical", e.target.value)} /></div>
            <label className="flex cursor-pointer items-center gap-2 text-[13px] font-semibold"><input type="checkbox" checked={meta.noindex} onChange={(e) => setM("noindex", e.target.checked)} className="h-4 w-4 accent-[var(--color-brand)]" /> Hide from search engines</label>
            <div className="rounded-xl bg-[var(--color-surface)] p-3">
              <p className="truncate text-[15px] font-semibold text-blue-700">{meta.seoTitle || meta.title || "Page title"}</p>
              <p className="truncate text-[12px] text-green-700">{meta.canonical || `${prefix}${meta.slug}`}</p>
              <p className="mt-0.5 line-clamp-2 text-[12px] text-[var(--color-text-muted)]">{meta.seoDescription || meta.excerpt || "Description"}</p>
            </div>
          </Panel>
        </aside>
      </div>
    </div>
  );
}
