"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Images, Upload } from "lucide-react";
import { ListManager } from "./ListManager";
import { inp, lbl } from "./Fields";
import type { Field } from "@/lib/blocks";

type Row = Record<string, unknown>;
const VIDEO = /^video\//;

export function GalleryAdmin({ group, label, desc, url, field, initial, options }: { group: string; label: string; desc: string; url: string; field: Field; initial: Record<string, unknown>; options: string[] }) {
  const [data, setData] = useState(initial);
  const [ver, setVer] = useState(0);
  const [cat, setCat] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);
  const pick = useRef<HTMLInputElement>(null);

  async function bulk(files: File[]) {
    if (!cat) { setMsg({ ok: false, t: "Choose a category first." }); return; }
    setBusy(true);
    const added: Row[] = [];
    const failed: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const f = files[i]!;
      setMsg({ ok: true, t: `Uploading ${i + 1} of ${files.length}...` });
      const fd = new FormData();
      fd.append("file", f);
      const r = await fetch("/api/admin/upload", { method: "POST", body: fd }).catch(() => null);
      const j = r ? await r.json().catch(() => ({})) : {};
      if (r?.ok && j.url) added.push(VIDEO.test(f.type) ? { category: cat, title: "", image: "", video: j.url, alt: "" } : { category: cat, title: "", image: j.url, video: "", alt: "" });
      else failed.push(`${f.name}${j.error ? ` (${j.error})` : ""}`);
    }
    if (added.length) {
      const list = Array.isArray(data[field.k]) ? (data[field.k] as Row[]) : [];
      const body = { ...data, [field.k]: [...list, ...added] };
      const r = await fetch(`/api/admin/settings/${group}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (r.ok) { setData(body); setVer((v) => v + 1); }
      else { setBusy(false); setMsg({ ok: false, t: "Files uploaded but saving failed. Try again." }); return; }
    }
    setBusy(false);
    setMsg({ ok: !failed.length, t: `${added.length} added to "${cat}".${failed.length ? ` Failed: ${failed.join(", ")}` : ""}` });
  }

  return (
    <div>
      <div className="px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-sm)] sm:p-5">
          <h2 className="flex items-center gap-2 font-display text-base font-bold"><Images size={17} /> Quick upload (many photos / videos at once)</h2>
          <p className="mt-1 text-[13px] text-[var(--color-text-muted)]">Choose the category, then select all files together. Captions can be added later from the list below.</p>
          {options.length ? (
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="sm:w-72">
                <label className={lbl}>Category</label>
                <select className={inp} value={cat} onChange={(e) => setCat(e.target.value)} disabled={busy}>
                  <option value="">Choose category...</option>
                  {options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <button type="button" disabled={busy || !cat} onClick={() => pick.current?.click()} className="flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-5 text-[13px] font-bold text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-50">
                <Upload size={14} /> {busy ? "Uploading..." : "Select photos / videos"}
              </button>
              <input ref={pick} type="file" multiple hidden accept="image/*,video/mp4,video/webm" onChange={(e) => { const f = Array.from(e.target.files ?? []); e.target.value = ""; if (f.length) bulk(f); }} />
            </div>
          ) : (
            <p className="mt-3 text-[13px] font-semibold text-red-600">
              No categories yet. <Link href="/admin/settings/galleryCategories" className="underline">Create a category first</Link>.
            </p>
          )}
          {msg ? <p className={`mt-3 text-[13px] font-semibold ${msg.ok ? "text-[var(--color-ink)]" : "text-red-600"}`}>{msg.t}</p> : null}
        </div>
      </div>
      <ListManager key={ver} group={group} label={label} desc={desc} url={url} field={field} initial={data} />
    </div>
  );
}
