"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlignLeft, ArrowDown, ArrowLeft, ArrowUp, CircleHelp, Copy, Eye, GripVertical, Heading, Image as ImageIcon, Columns2, Hash, ListOrdered, LayoutGrid, LayoutTemplate, ListChecks, Monitor, MousePointerClick, Plus, Redo2, Smartphone, Tablet, Trash2, Undo2, X } from "lucide-react";
import type { ComponentType } from "react";
import { FieldEditor, ImageField, iconBtn, inp, lbl, slugify } from "./Fields";
import { BlockPreview } from "./BlockPreview";
import { BLOCKS, BLOCK_TYPES, newBlock, uid, type Block, type BlockType } from "@/lib/blocks";
import type { EntryType } from "@/lib/content";

type Meta = { title: string; slug: string; excerpt: string; image: string; imageAlt: string; noindex: boolean; canonical: string; author: string; tag: string; status: "draft" | "published"; seoTitle: string; seoDescription: string };

const INFO: Record<BlockType, { Icon: ComponentType<{ size?: number }>; desc: string }> = {
  hero: { Icon: LayoutTemplate, desc: "Big top banner with title and tagline" },
  heading: { Icon: Heading, desc: "A centred section title" },
  text: { Icon: AlignLeft, desc: "Paragraphs with an optional heading" },
  split: { Icon: Columns2, desc: "Text beside a picture, with bullets and button" },
  steps: { Icon: ListOrdered, desc: "Numbered process: how it works" },
  stats: { Icon: Hash, desc: "Big numbers: clients, years, results" },
  image: { Icon: ImageIcon, desc: "A single picture with caption" },
  features: { Icon: LayoutGrid, desc: "Cards: benefits, services, steps" },
  checklist: { Icon: ListChecks, desc: "A tick list of what is included" },
  faq: { Icon: CircleHelp, desc: "Questions and answers (helps SEO)" },
  cta: { Icon: MousePointerClick, desc: "Colour banner with a button" },
  article: { Icon: AlignLeft, desc: "Long-form article content" },
};
const WIDTH = { desktop: "100%", tablet: "768px", mobile: "390px" } as const;
const count = (n: number, max: number) => <span className={`ml-1 font-normal ${n > max ? "text-red-600" : "text-[var(--color-text-muted)]"}`}>{n}/{max}</span>;

export function Builder({ id, type, initial }: { id: number | null; type: EntryType; initial: { meta: Meta; blocks: Block[] } }) {
  const router = useRouter();
  const [meta, setMeta] = useState(initial.meta);
  const [blocks, setBlocks] = useState(initial.blocks);
  const [sel, setSel] = useState<string | null>(null);
  const [tab, setTab] = useState<"block" | "page">("block");
  const [device, setDevice] = useState<keyof typeof WIDTH>("desktop");
  const [picker, setPicker] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);
  const [dirty, setDirty] = useState(false);
  const [slugTouched, setSlugTouched] = useState(!!id);
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [entryId, setEntryId] = useState(id);
  const [savedSlug, setSavedSlug] = useState(initial.meta.slug);
  const past = useRef<Block[][]>([]);
  const future = useRef<Block[][]>([]);
  const last = useRef({ k: "", t: 0 });

  const prefix = type === "blog" ? "/blog/" : "/";
  const listKey = type === "page" ? "pages" : type === "service" ? "services" : "blog";
  const setM = (k: keyof Meta, v: string | boolean) => { setMeta((m) => ({ ...m, [k]: v })); setDirty(true); };
  const cur = blocks.find((b) => b.id === sel) ?? null;

  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => { if (dirty) e.preventDefault(); };
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  function commit(next: Block[], key = "") {
    const now = Date.now();
    if (!(key && last.current.k === key && now - last.current.t < 1200)) {
      past.current.push(blocks);
      if (past.current.length > 60) past.current.shift();
    }
    last.current = { k: key, t: now };
    future.current = [];
    setBlocks(next);
    setDirty(true);
  }
  const undo = () => { const p = past.current.pop(); if (!p) return; future.current.push(blocks); last.current = { k: "", t: 0 }; setBlocks(p); setDirty(true); };
  const redo = () => { const n = future.current.pop(); if (!n) return; past.current.push(blocks); last.current = { k: "", t: 0 }; setBlocks(n); setDirty(true); };

  function insert(t: BlockType, at = blocks.length) {
    const b = newBlock(t);
    commit([...blocks.slice(0, at), b, ...blocks.slice(at)]);
    setSel(b.id); setTab("block"); setPicker(null);
  }
  function move(from: number, to: number) {
    const n = [...blocks];
    const [x] = n.splice(from, 1);
    n.splice(to > from ? to - 1 : to, 0, x!);
    commit(n);
  }
  const step = (i: number, d: number) => move(i, d > 0 ? i + 2 : i - 1);
  const patch = (bid: string, k: string, v: unknown) => commit(blocks.map((b) => (b.id === bid ? { ...b, [k]: v } : b)), `${bid}:${k}`);
  const dup = (i: number) => { const c = { ...structuredClone(blocks[i]!), id: uid() }; commit([...blocks.slice(0, i + 1), c, ...blocks.slice(i + 1)]); setSel(c.id); };
  const remove = (i: number) => { if (!confirm("Remove this block?")) return; commit(blocks.filter((_, j) => j !== i)); setSel(null); };
  function drop(e: React.DragEvent, at: number) {
    e.preventDefault(); setOver(null);
    const d = e.dataTransfer.getData("text/plain");
    if (d.startsWith("move:")) move(Number(d.slice(5)), at);
  }

  async function save(status: "draft" | "published") {
    setBusy(true); setMsg(null);
    const r = await fetch(entryId ? `/api/admin/entries/${entryId}` : "/api/admin/entries", {
      method: entryId ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...meta, status, type, blocks }),
    });
    const j = await r.json().catch(() => ({}));
    setBusy(false);
    if (!r.ok) { setMsg({ ok: false, t: j.error || "Save failed" }); if (/slug|title/i.test(j.error || "")) setTab("page"); return; }
    const finalSlug = slugify(meta.slug || meta.title);
    setMeta((m) => ({ ...m, status, slug: finalSlug }));
    setSavedSlug(finalSlug); setDirty(false);
    setMsg({ ok: true, t: status === "published" ? "Published" : "Saved as draft" });
    if (!entryId) setEntryId(j.id);
    if (finalSlug !== initial.meta.slug || !entryId) router.replace(`/admin/${listKey}/${finalSlug}`);
  }

  const gap = (i: number) => (
    <div
      onDragOver={(e) => { e.preventDefault(); setOver(i); }} onDragLeave={() => setOver((o) => (o === i ? null : o))} onDrop={(e) => drop(e, i)}
      className={`group/g relative flex items-center justify-center transition-all ${over === i ? "h-14 bg-[var(--color-brand-soft)]" : "h-2.5 hover:h-9"}`}
    >
      <button type="button" onClick={() => setPicker(i)} className="hidden items-center gap-1 rounded-full bg-[var(--color-brand)] px-3 py-1 text-[11px] font-bold text-white shadow group-hover/g:flex"><Plus size={12} /> Add block here</button>
    </div>
  );
  const tb = "flex h-7 w-7 items-center justify-center rounded-md text-white hover:bg-white/25 disabled:opacity-30";
  const tabBtn = (k: "block" | "page", t: string) => <button type="button" onClick={() => setTab(k)} className={`flex-1 border-b-2 py-2.5 text-xs font-bold ${tab === k ? "border-[var(--color-brand)] text-[var(--color-brand)]" : "border-transparent text-[var(--color-text-muted)]"}`}>{t}</button>;

  return (
    <div>
      <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] bg-white/95 px-5 py-3 backdrop-blur sm:px-8">
        <div className="flex items-center gap-3">
          <Link href={`/admin/${listKey}`} className={iconBtn}><ArrowLeft size={16} /></Link>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand)]">{type}</p>
            <p className="max-w-[220px] truncate text-sm font-bold">{meta.title || "Untitled"}</p>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${meta.status === "published" ? "bg-green-50 text-[var(--color-success)]" : "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"}`}>{meta.status}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={iconBtn} onClick={undo} title="Undo" disabled={!past.current.length}><Undo2 size={16} /></button>
          <button type="button" className={iconBtn} onClick={redo} title="Redo" disabled={!future.current.length}><Redo2 size={16} /></button>
          <div className="hidden rounded-full border border-[var(--color-border)] p-0.5 md:flex">
            {([["desktop", Monitor], ["tablet", Tablet], ["mobile", Smartphone]] as const).map(([k, Ic]) => (
              <button key={k} type="button" title={k} onClick={() => setDevice(k)} className={`flex h-7 w-8 items-center justify-center rounded-full ${device === k ? "bg-[var(--color-ink)] text-white" : "text-[var(--color-text-muted)]"}`}><Ic size={14} /></button>
            ))}
          </div>
          {msg ? <span className={`text-xs font-semibold ${msg.ok ? "text-[var(--color-success)]" : "text-red-600"}`}>{msg.t}</span> : dirty ? <span className="text-xs font-semibold text-[var(--color-accent)]">Unsaved changes</span> : null}
          {entryId ? <a href={`/admin/preview/${listKey}/${savedSlug}`} target="_blank" className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 py-2 text-xs font-bold hover:bg-[var(--color-surface-2)]"><Eye size={14} /> Live preview</a> : null}
          <button disabled={busy} onClick={() => save("draft")} className="rounded-full border border-[var(--color-ink)] px-4 py-2 text-xs font-bold hover:bg-[var(--color-ink)] hover:text-white disabled:opacity-60">Save draft</button>
          <button disabled={busy} onClick={() => save("published")} className="rounded-full bg-[var(--color-brand)] px-5 py-2 text-xs font-bold text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-60">{busy ? "Saving..." : "Publish"}</button>
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* canvas */}
        <div className="min-w-0 rounded-[var(--radius-md)] bg-[var(--color-surface-2)] p-3 sm:p-5">
          <div className="mx-auto transition-all duration-300" style={{ maxWidth: WIDTH[device] }}>
            <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
              {blocks.length === 0 ? (
                <div className="p-14 text-center">
                  <p className="font-bold">This page is empty</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Add your first block to start building.</p>
                  <button type="button" onClick={() => setPicker(0)} className="mt-4 rounded-full bg-[var(--color-brand)] px-5 py-2 text-xs font-bold text-white">+ Add block</button>
                </div>
              ) : null}
              {blocks.map((b, i) => {
                const on = sel === b.id;
                return (
                  <Fragment key={b.id}>
                    {gap(i)}
                    <div
                      onClick={() => { setSel(b.id); setTab("block"); }}
                      className={`group relative cursor-pointer ring-2 ring-inset transition ${on ? "ring-[var(--color-brand)]" : "ring-transparent hover:ring-[var(--color-brand)]/40"}`}
                    >
                      <div className={`absolute left-2 top-2 z-10 rounded-md bg-[var(--color-brand)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${on ? "" : "hidden group-hover:block"}`}>{BLOCKS[b.type]?.label}</div>
                      <div className={`absolute right-2 top-2 z-10 items-center gap-0.5 rounded-lg bg-[var(--color-ink)]/90 p-0.5 ${on ? "flex" : "hidden group-hover:flex"}`} onClick={(e) => e.stopPropagation()}>
                        <span draggable onDragStart={(e) => { e.dataTransfer.setData("text/plain", `move:${i}`); e.dataTransfer.effectAllowed = "move"; }} onDragEnd={() => setOver(null)} className={`${tb} cursor-grab`} title="Drag to move"><GripVertical size={14} /></span>
                        <button type="button" className={tb} onClick={() => step(i, -1)} disabled={i === 0} title="Move up"><ArrowUp size={14} /></button>
                        <button type="button" className={tb} onClick={() => step(i, 1)} disabled={i === blocks.length - 1} title="Move down"><ArrowDown size={14} /></button>
                        <button type="button" className={tb} onClick={() => dup(i)} title="Duplicate"><Copy size={14} /></button>
                        <button type="button" className={tb} onClick={() => remove(i)} title="Delete"><Trash2 size={14} /></button>
                      </div>
                      <BlockPreview b={b} />
                    </div>
                  </Fragment>
                );
              })}
              {blocks.length ? gap(blocks.length) : null}
            </div>
            {blocks.length ? <button type="button" onClick={() => setPicker(blocks.length)} className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-[var(--color-border)] bg-white py-3 text-xs font-bold text-[var(--color-brand)] hover:border-[var(--color-brand)]"><Plus size={14} /> Add block</button> : null}
          </div>
        </div>

        {/* side panel */}
        <div className="h-fit rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white lg:sticky lg:top-24">
          <div className="flex border-b border-[var(--color-border)]">{tabBtn("block", cur ? `Edit: ${BLOCKS[cur.type]?.label}` : "Edit block")}{tabBtn("page", "Page & SEO")}</div>
          <div className="flex max-h-[calc(100vh-11rem)] flex-col gap-3 overflow-y-auto p-4" data-lenis-prevent>
            {tab === "block" ? (
              cur && BLOCKS[cur.type] ? (
                <>
                  <button type="button" onClick={() => setSel(null)} className="flex items-center gap-1 self-end text-[11px] font-bold text-[var(--color-text-muted)]"><X size={12} /> Close</button>
                  {BLOCKS[cur.type].fields.map((f) => <FieldEditor key={f.k} f={f} v={cur[f.k]} set={(val) => patch(cur.id, f.k, val)} />)}
                </>
              ) : (
                <ol className="list-decimal space-y-2 pl-5 text-[13px] text-[var(--color-text-muted)]">
                  <li><b className="text-[var(--color-ink)]">Click any block</b> on the page to edit its text and images here.</li>
                  <li>Hover between blocks and press <b className="text-[var(--color-ink)]">+ Add block here</b>.</li>
                  <li>Use the small toolbar on a block to <b className="text-[var(--color-ink)]">move, copy or delete</b> it.</li>
                  <li>Set the title, URL and SEO in the <b className="text-[var(--color-ink)]">Page &amp; SEO</b> tab.</li>
                  <li>Press <b className="text-[var(--color-ink)]">Save draft</b> or <b className="text-[var(--color-ink)]">Publish</b>.</li>
                </ol>
              )
            ) : (
              <>
                <div>
                  <label className={lbl}>Page title</label>
                  <input className={inp} value={meta.title} onChange={(e) => { setM("title", e.target.value); if (!slugTouched) setM("slug", slugify(e.target.value)); }} />
                </div>
                <div>
                  <label className={lbl}>URL slug</label>
                  <div className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">{prefix}<input className={inp} value={meta.slug} onChange={(e) => { setSlugTouched(true); setM("slug", slugify(e.target.value)); }} /></div>
                </div>
                <div><label className={lbl}>Short description</label><textarea className={inp} rows={3} value={meta.excerpt} onChange={(e) => setM("excerpt", e.target.value)} /></div>
                <div><label className={lbl}>Cover / share image</label><ImageField value={meta.image} onChange={(v) => setM("image", v)} /></div>
                <div><label className={lbl}>Cover image alt text</label><input className={inp} value={meta.imageAlt} onChange={(e) => setM("imageAlt", e.target.value)} /></div>
                {type === "blog" ? (
                  <>
                    <div><label className={lbl}>Category tag</label><input className={inp} value={meta.tag} onChange={(e) => setM("tag", e.target.value)} /></div>
                    <div><label className={lbl}>Author</label><input className={inp} value={meta.author} onChange={(e) => setM("author", e.target.value)} /></div>
                  </>
                ) : null}
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Search engine preview</p>
                <div className="rounded-lg border border-[var(--color-border)] p-3">
                  <p className="truncate text-[12px] text-green-700">{meta.canonical || `${prefix}${meta.slug}`}</p>
                  <p className="line-clamp-1 text-[16px] text-blue-700">{meta.seoTitle || meta.title || "Untitled"}</p>
                  <p className="line-clamp-2 text-[12.5px] text-gray-600">{meta.seoDescription || meta.excerpt || "No description yet."}</p>
                </div>
                <div><label className={lbl}>SEO title{count((meta.seoTitle || meta.title).length, 60)}</label><input className={inp} value={meta.seoTitle} onChange={(e) => setM("seoTitle", e.target.value)} /></div>
                <div><label className={lbl}>SEO description{count((meta.seoDescription || meta.excerpt).length, 160)}</label><textarea className={inp} rows={3} value={meta.seoDescription} onChange={(e) => setM("seoDescription", e.target.value)} /></div>
                <div>
                  <label className={lbl}>Canonical URL (optional)</label>
                  <p className="-mt-0.5 mb-1 text-[11px] text-[var(--color-text-muted)]">Leave empty to use this page&apos;s own URL.</p>
                  <input className={inp} placeholder="https://..." value={meta.canonical} onChange={(e) => setM("canonical", e.target.value)} />
                </div>
                <label className="flex items-center gap-2 text-xs font-semibold"><input type="checkbox" checked={meta.noindex} onChange={(e) => setM("noindex", e.target.checked)} /> Hide from search engines (noindex)</label>
              </>
            )}
          </div>
        </div>
      </div>

      {picker !== null ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]" onMouseDown={(e) => e.target === e.currentTarget && setPicker(null)}>
          <div className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-[var(--shadow-lg)]">
            <div className="mb-3 flex items-center justify-between"><p className="font-bold">Choose a block to add</p><button type="button" className={iconBtn} onClick={() => setPicker(null)}><X size={16} /></button></div>
            <div className="grid gap-2 sm:grid-cols-2">
              {BLOCK_TYPES.map((t) => {
                const { Icon, desc } = INFO[t];
                return (
                  <button key={t} type="button" onClick={() => insert(t, picker)} className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] p-3 text-left transition hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-[var(--color-brand)]"><Icon size={18} /></span>
                    <span><span className="block text-[13px] font-bold">{BLOCKS[t].label}</span><span className="text-[12px] text-[var(--color-text-muted)]">{desc}</span></span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
