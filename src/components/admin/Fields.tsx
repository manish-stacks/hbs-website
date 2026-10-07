"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, Plus, Trash2, X } from "lucide-react";
import { rows, str, strs, type Field } from "@/lib/blocks";


export const inp = "w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-sm outline-none transition focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/15";
export const lbl = "mb-1 block text-xs font-semibold text-[var(--color-text-muted)]";
export const iconBtn = "flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)] disabled:opacity-30";
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
      {value ? (
        <div className="relative mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="" className="h-28 w-full rounded-lg border border-[var(--color-border)] object-cover" />
          <button type="button" onClick={() => onChange("")} className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow"><X size={13} /></button>
        </div>
      ) : null}
      <div className="flex gap-2">
        <input className={inp} value={value} onChange={(e) => onChange(e.target.value)} placeholder="Image URL or upload" />
        <label className="flex shrink-0 cursor-pointer items-center rounded-lg bg-[var(--color-ink)] px-3 text-xs font-bold text-white hover:bg-[var(--color-brand)]">
          {busy ? "Uploading..." : "Upload"}
          <input type="file" accept="image/*" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
        </label>
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
        <span className={lbl}>{f.label} ({list.length})</span>
        {list.length > PER ? <input className={`${inp} !w-40 !py-1`} placeholder="Search..." value={q} onChange={(e) => { setQ(e.target.value); setPage(0); }} /> : null}
      </div>
      {shown.slice(cur * PER, cur * PER + PER).map(({ it, i }) => (
        <div key={i} className="mb-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--color-text-muted)]">#{i + 1}</span>
            <div className="flex">
              <button type="button" className={iconBtn} onClick={() => mv(i, -1)} disabled={i === 0}><ArrowUp size={14} /></button>
              <button type="button" className={iconBtn} onClick={() => mv(i, 1)} disabled={i === list.length - 1}><ArrowDown size={14} /></button>
              <button type="button" className={iconBtn} onClick={() => set(list.filter((_, j) => j !== i))}><Trash2 size={14} /></button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {sub.map((sf) => <FieldEditor key={sf.k} f={sf} v={it[sf.k]} set={(val) => upd(i, sf.k, val)} />)}
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
      <button type="button" onClick={() => { set([...list, Object.fromEntries(sub.map((s) => [s.k, s.t === "items" ? [] : ""]))]); setPage(Math.floor(list.length / PER)); setQ(""); }} className="flex items-center gap-1 text-xs font-bold text-[var(--color-brand)]"><Plus size={14} /> Add item</button>
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
      {f.t === "area" ? <textarea className={inp} rows={4} value={str(v)} onChange={(e) => set(e.target.value)} /> : null}
      {f.t === "lines" ? <textarea className={inp} rows={5} value={strs(v).join("\n")} onChange={(e) => set(e.target.value.split("\n"))} /> : null}
      {f.t === "image" ? <ImageField value={str(v)} onChange={set} /> : null}
    </div>
  );
}

