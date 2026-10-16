"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, Image as ImageIcon, Plus, Trash2, Upload } from "lucide-react";
import { rows, str, strs, type Field } from "@/lib/blocks";
import { MENU_ICONS } from "@/lib/menuIcons";


export const inp = "w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-[13px] outline-none transition placeholder:text-[var(--color-text-muted)]/60 hover:border-[#d8d0c8] focus:border-[var(--color-brand)] focus:ring-4 focus:ring-[var(--color-brand)]/10";
export const lbl = "mb-1 block text-xs font-semibold text-[var(--color-ink)]";
export const isWide = (f: Field) => f.t !== "text";
export const iconBtn = "flex h-7 w-7 items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-ink)] disabled:opacity-30";
export const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  async function upload(f: File) {
    setBusy(true);
    setErr("");
    const fd = new FormData();
    fd.append("file", f);
    const r = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const j = await r.json().catch(() => ({}));
    setBusy(false);
    if (r.ok) onChange(j.url);
    else setErr(j.error || "Upload failed");
  }
  return (
    <div>
      <div className="flex items-center gap-3 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-2.5">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" style={{ height: 56, width: 80 }} className="shrink-0 rounded-md border border-[var(--color-border)] bg-white object-cover" />
        ) : (
          <span className="flex shrink-0 items-center justify-center rounded-md bg-white text-[var(--color-text-muted)]" style={{ height: 56, width: 80 }}><ImageIcon size={20} /></span>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-[var(--color-text-muted)]">{value ? value.split("/").pop() : "No image selected"}</p>
          <div className="mt-1.5 flex flex-wrap gap-2">
            <label className="flex cursor-pointer items-center gap-1.5 rounded-md bg-[var(--color-ink)] px-3 py-1.5 text-xs font-bold text-white hover:bg-[var(--color-brand)]">
              <Upload size={12} /> {busy ? "Uploading..." : value ? "Replace" : "Upload image"}
              <input type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); e.target.value = ""; }} />
            </label>
            {value ? <button type="button" onClick={() => onChange("")} className="rounded-md border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs font-semibold hover:text-red-600">Remove</button> : null}
          </div>
        </div>
      </div>
      {err ? <p className="mt-1 text-xs text-red-600">{err}</p> : null}
    </div>
  );
}

function Items({ f, v, set }: { f: Field; v: unknown; set: (x: unknown) => void }) {
  const list = rows(v);
  const sub = f.sub ?? [];
  const [q, setQ] = useState("");
  const [page, setPage] = useState(0);
  const PER = 8;
  const upd = (i: number, k: string, val: unknown) => set(list.map((x, j) => (j === i ? { ...x, [k]: val } : x)));
  const mv = (i: number, d: number) => {
    const n = [...list];
    const j = i + d;
    if (j < 0 || j >= n.length) return;
    [n[i], n[j]] = [n[j]!, n[i]!];
    set(n);
  };
  const shown = list.map((it, i) => ({ it, i })).filter(({ it }) => !q.trim() || JSON.stringify(it).toLowerCase().includes(q.trim().toLowerCase()));
  const pages = Math.max(1, Math.ceil(shown.length / PER));
  const cur = Math.min(page, pages - 1);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-[13px] font-bold">{f.label} <span className="ml-1 rounded-full bg-[var(--color-surface-2)] px-2 py-0.5 text-[11px]">{list.length}</span></span>
        {list.length > PER ? <input className={`${inp} !w-40 !py-1`} placeholder="Search..." value={q} onChange={(e) => { setQ(e.target.value); setPage(0); }} /> : null}
      </div>
      {shown.slice(cur * PER, cur * PER + PER).map(({ it, i }) => (
        <div key={i} className="mb-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="flex h-5 min-w-6 items-center justify-center rounded-full bg-white px-2 text-[11px] font-bold shadow-sm">{i + 1}</span>
            <div className="flex">
              <button type="button" className={iconBtn} onClick={() => mv(i, -1)} disabled={i === 0}><ArrowUp size={14} /></button>
              <button type="button" className={iconBtn} onClick={() => mv(i, 1)} disabled={i === list.length - 1}><ArrowDown size={14} /></button>
              <button type="button" className={iconBtn} onClick={() => set(list.filter((_, j) => j !== i))}><Trash2 size={14} /></button>
            </div>
          </div>
          <div className="grid gap-2.5 md:grid-cols-2">
            {sub.map((sf) => <div key={sf.k} className={isWide(sf) ? "md:col-span-2" : ""}><FieldEditor f={sf} v={it[sf.k]} set={(val) => upd(i, sf.k, val)} /></div>)}
          </div>
        </div>
      ))}
      {pages > 1 ? (
        <div className="mb-2 flex items-center justify-center gap-3 text-xs">
          <button type="button" className="font-bold disabled:opacity-30" disabled={cur === 0} onClick={() => setPage(cur - 1)}>Prev</button>
          <span>{cur + 1} / {pages}</span>
          <button type="button" className="font-bold disabled:opacity-30" disabled={cur >= pages - 1} onClick={() => setPage(cur + 1)}>Next</button>
        </div>
      ) : null}
      <button type="button" onClick={() => { set([...list, Object.fromEntries(sub.map((s) => [s.k, s.t === "items" ? [] : ""]))]); setPage(Math.floor(list.length / PER)); setQ(""); }} className="flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-[var(--color-border)] text-xs font-bold text-[var(--color-brand)] transition hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)]"><Plus size={14} /> Add item</button>
    </div>
  );
}

function IconPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const btn = (on: boolean) => `flex h-9 w-9 items-center justify-center rounded-lg border transition ${on ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)] text-[var(--color-brand)]" : "border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand)]"}`;
  return (
    <div className="flex flex-wrap gap-1.5">
      <button type="button" onClick={() => onChange("")} className={`${btn(!value)} !w-auto px-3 text-xs font-bold`}>Auto</button>
      {Object.entries(MENU_ICONS).map(([k, Ic]) => (
        <button key={k} type="button" title={k} onClick={() => onChange(k)} className={btn(value === k)}><Ic size={17} strokeWidth={1.8} /></button>
      ))}
    </div>
  );
}

export function FieldEditor({ f, v, set }: { f: Field; v: unknown; set: (x: unknown) => void }) {
  if (f.t === "items") return <Items f={f} v={v} set={set} />;
  return (
    <div>
      <label className={lbl}>{f.label}</label>
      {f.hint ? <p className="-mt-0.5 mb-1.5 text-[11px] text-[var(--color-text-muted)]">{f.hint}</p> : null}
      {f.t === "text" ? <input className={inp} value={str(v)} onChange={(e) => set(e.target.value)} /> : null}
      {f.t === "area" ? <textarea className={inp} rows={3} value={str(v)} onChange={(e) => set(e.target.value)} /> : null}
      {f.t === "lines" ? <textarea className={inp} rows={3} value={strs(v).join("\n")} onChange={(e) => set(e.target.value.split("\n"))} /> : null}
      {f.t === "image" ? <ImageField value={str(v)} onChange={set} /> : null}
      {f.t === "icon" ? <IconPicker value={str(v)} onChange={set} /> : null}
    </div>
  );
}

