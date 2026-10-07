"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowUp, ChevronDown, Copy, Eye, GripVertical, Plus, Trash2 } from "lucide-react";
import { FieldEditor, ImageField, iconBtn, inp, lbl, slugify } from "./Fields";
import { BLOCKS, BLOCK_TYPES, newBlock, str, uid, type Block, type BlockType } from "@/lib/blocks";
import type { EntryType } from "@/lib/content";

type Meta = { title: string; slug: string; excerpt: string; image: string; imageAlt: string; noindex: boolean; canonical: string; author: string; tag: string; status: "draft" | "published"; seoTitle: string; seoDescription: string };

export function Builder({ id, type, initial }: { id: number | null; type: EntryType; initial: { meta: Meta; blocks: Block[] } }) {
  const router = useRouter();
  const [meta, setMeta] = useState(initial.meta);
  const [blocks, setBlocks] = useState(initial.blocks);
  const [open, setOpen] = useState<string | null>(null);
  const [over, setOver] = useState<number | null>(null);
  const [slugTouched, setSlugTouched] = useState(!!id);
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [entryId, setEntryId] = useState(id);
  const [savedSlug, setSavedSlug] = useState(initial.meta.slug);

  const setM = (k: keyof Meta, v: string | boolean) => setMeta((m) => ({ ...m, [k]: v }));
  const prefix = type === "blog" ? "/blog/" : "/";
  const listKey = type === "page" ? "pages" : type === "service" ? "services" : "blog";
  const listHref = `/admin/${listKey}`;

  function insert(t: BlockType, at = blocks.length) {
    const b = newBlock(t);
    setBlocks((bs) => [...bs.slice(0, at), b, ...bs.slice(at)]);
    setOpen(b.id);
  }
  function move(from: number, to: number) {
    setBlocks((bs) => {
      const n = [...bs];
      const [x] = n.splice(from, 1);
      n.splice(to > from ? to - 1 : to, 0, x!);
      return n;
    });
  }
  function drop(e: React.DragEvent, at: number) {
    e.preventDefault();
    setOver(null);
    const d = e.dataTransfer.getData("text/plain");
    if (d.startsWith("new:")) insert(d.slice(4) as BlockType, at);
    else if (d.startsWith("move:")) move(Number(d.slice(5)), at);
  }
  const step = (i: number, d: number) => move(i, d > 0 ? i + 2 : i - 1);
  const patch = (bid: string, k: string, v: unknown) => setBlocks((bs) => bs.map((b) => (b.id === bid ? { ...b, [k]: v } : b)));
  const dup = (i: number) => setBlocks((bs) => [...bs.slice(0, i + 1), { ...structuredClone(bs[i]!), id: uid() }, ...bs.slice(i + 1)]);
  const remove = (i: number) => confirm("Remove this block?") && setBlocks((bs) => bs.filter((_, j) => j !== i));

  const zone = (i: number) => (
    <div
      key={`z${i}`}
      onDragOver={(e) => { e.preventDefault(); setOver(i); }}
      onDragLeave={() => setOver((o) => (o === i ? null : o))}
      onDrop={(e) => drop(e, i)}
      className={`rounded-lg border-2 border-dashed transition-all ${over === i ? "my-1 h-14 border-[var(--color-brand)] bg-[var(--color-brand-soft)]" : "h-2 border-transparent"}`}
    />
  );

  async function save(status: "draft" | "published") {
    setBusy(true);
    setMsg(null);
    const r = await fetch(entryId ? `/api/admin/entries/${entryId}` : "/api/admin/entries", {
      method: entryId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...meta, status, type, blocks }),
    });
    const j = await r.json().catch(() => ({}));
    setBusy(false);
    if (!r.ok) return setMsg({ ok: false, t: j.error || "Save failed" });
    const finalSlug = slugify(meta.slug || meta.title);
    setMeta((m) => ({ ...m, status, slug: finalSlug }));
    setSavedSlug(finalSlug);
    setMsg({ ok: true, t: status === "published" ? "Published" : "Saved as draft" });
    if (!entryId) {
      setEntryId(j.id);
    }
    if (finalSlug !== initial.meta.slug || !entryId) router.replace(`/admin/${listKey}/${finalSlug}`);
  }

  return (
    <div>
      <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] bg-white/95 px-5 py-3 backdrop-blur sm:px-8">
        <div className="flex items-center gap-3">
          <Link href={listHref} className={iconBtn}><ArrowLeft size={16} /></Link>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand)]">{type}</p>
            <p className="max-w-[260px] truncate text-sm font-bold">{meta.title || "Untitled"}</p>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${meta.status === "published" ? "bg-green-50 text-[var(--color-success)]" : "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"}`}>{meta.status}</span>
        </div>
        <div className="flex items-center gap-2">
          {msg ? <span className={`text-xs font-semibold ${msg.ok ? "text-[var(--color-success)]" : "text-red-600"}`}>{msg.t}</span> : null}
          {entryId ? <a href={`/admin/preview/${listKey}/${savedSlug}`} target="_blank" className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-bold hover:bg-[var(--color-surface-2)]"><Eye size={14} /> Preview</a> : null}
          <button disabled={busy} onClick={() => save("draft")} className="rounded-full border border-[var(--color-ink)] px-4 py-2 text-xs font-bold hover:bg-[var(--color-ink)] hover:text-white disabled:opacity-60">Save draft</button>
          <button disabled={busy} onClick={() => save("published")} className="rounded-full bg-[var(--color-brand)] px-5 py-2 text-xs font-bold text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-60">{busy ? "Saving..." : "Publish"}</button>
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:p-8 lg:grid-cols-[190px_minmax(0,1fr)_300px]">
        {/* palette */}
        <div className="h-fit rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4 lg:sticky lg:top-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Blocks</p>
          <p className="mb-3 text-xs text-[var(--color-text-muted)]">Drag onto the page, or click to add.</p>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {BLOCK_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                draggable
                onDragStart={(e) => { e.dataTransfer.setData("text/plain", `new:${t}`); e.dataTransfer.effectAllowed = "copy"; }}
                onDragEnd={() => setOver(null)}
                onClick={() => insert(t)}
                className="flex cursor-grab items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-left text-xs font-semibold hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                <Plus size={13} /> {BLOCKS[t].label}
              </button>
            ))}
          </div>
        </div>

        {/* canvas */}
        <div className="min-w-0">
          {blocks.length === 0 ? (
            <div onDragOver={(e) => { e.preventDefault(); setOver(0); }} onDrop={(e) => drop(e, 0)} className={`rounded-[var(--radius-md)] border-2 border-dashed p-12 text-center text-sm ${over === 0 ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)]" : "border-[var(--color-border)] text-[var(--color-text-muted)]"}`}>
              Drag a block here to start building.
            </div>
          ) : null}
          {blocks.map((b, i) => {
            const isOpen = open === b.id;
            const def = BLOCKS[b.type];
            if (!def) return null;
            return (
              <div key={b.id}>
                {zone(i)}
                <div data-card className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
                  <div className="flex items-center gap-2 p-3">
                    <span
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData("text/plain", `move:${i}`);
                        e.dataTransfer.effectAllowed = "move";
                        const card = e.currentTarget.closest("[data-card]") as HTMLElement | null;
                        if (card) e.dataTransfer.setDragImage(card, 20, 20);
                      }}
                      onDragEnd={() => setOver(null)}
                      className="cursor-grab rounded-md p-1 text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)]"
                      title="Drag to reorder"
                    >
                      <GripVertical size={17} />
                    </span>
                    <button type="button" onClick={() => setOpen(isOpen ? null : b.id)} className="flex min-w-0 flex-1 items-center gap-3 text-left">
                      <span className="rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand)]">{def.label}</span>
                      <span className="truncate text-sm text-[var(--color-text-muted)]">{str(b.title) || str(b.text) || str(b.heading) || str(b.eyebrow) || str(b.alt)}</span>
                    </button>
                    <button type="button" className={iconBtn} onClick={() => step(i, -1)} disabled={i === 0} title="Move up"><ArrowUp size={14} /></button>
                    <button type="button" className={iconBtn} onClick={() => step(i, 1)} disabled={i === blocks.length - 1} title="Move down"><ArrowDown size={14} /></button>
                    <button type="button" className={iconBtn} onClick={() => dup(i)} title="Duplicate"><Copy size={14} /></button>
                    <button type="button" className={iconBtn} onClick={() => remove(i)} title="Remove"><Trash2 size={14} /></button>
                    <button type="button" className={iconBtn} onClick={() => setOpen(isOpen ? null : b.id)}><ChevronDown size={15} className={isOpen ? "rotate-180" : ""} /></button>
                  </div>
                  {isOpen ? (
                    <div className="flex flex-col gap-3 border-t border-[var(--color-border)] p-4">
                      {def.fields.map((f) => <FieldEditor key={f.k} f={f} v={b[f.k]} set={(val) => patch(b.id, f.k, val)} />)}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
          {blocks.length ? zone(blocks.length) : null}
        </div>

        {/* settings */}
        <div className="flex h-fit flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4 lg:sticky lg:top-24">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Settings</p>
          <div>
            <label className={lbl}>Title</label>
            <input className={inp} value={meta.title} onChange={(e) => { setM("title", e.target.value); if (!slugTouched) setM("slug", slugify(e.target.value)); }} />
          </div>
          <div>
            <label className={lbl}>URL slug</label>
            <div className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
              {prefix}
              <input className={inp} value={meta.slug} onChange={(e) => { setSlugTouched(true); setM("slug", slugify(e.target.value)); }} />
            </div>
          </div>
          <div>
            <label className={lbl}>Short description</label>
            <textarea className={inp} rows={3} value={meta.excerpt} onChange={(e) => setM("excerpt", e.target.value)} />
          </div>
          <div><label className={lbl}>Cover / share image</label><ImageField value={meta.image} onChange={(v) => setM("image", v)} /></div>
          <div><label className={lbl}>Cover image alt text</label><input className={inp} value={meta.imageAlt} onChange={(e) => setM("imageAlt", e.target.value)} /></div>
          {type === "blog" ? (
            <>
              <div><label className={lbl}>Category tag</label><input className={inp} value={meta.tag} onChange={(e) => setM("tag", e.target.value)} /></div>
              <div><label className={lbl}>Author</label><input className={inp} value={meta.author} onChange={(e) => setM("author", e.target.value)} /></div>
            </>
          ) : null}
          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">SEO</p>
          <div><label className={lbl}>SEO title</label><input className={inp} value={meta.seoTitle} onChange={(e) => setM("seoTitle", e.target.value)} /></div>
          <div><label className={lbl}>SEO description</label><textarea className={inp} rows={3} value={meta.seoDescription} onChange={(e) => setM("seoDescription", e.target.value)} /></div>
          <div><label className={lbl}>Canonical URL (optional)</label><input className={inp} value={meta.canonical} onChange={(e) => setM("canonical", e.target.value)} /></div>
          <label className="flex items-center gap-2 text-xs font-semibold"><input type="checkbox" checked={meta.noindex} onChange={(e) => setM("noindex", e.target.checked)} /> Hide from search engines (noindex)</label>
        </div>
      </div>
    </div>
  );
}
