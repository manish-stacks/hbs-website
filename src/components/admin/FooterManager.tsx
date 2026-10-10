"use client";

import { useState } from "react";
import { ExternalLink, Save } from "lucide-react";
import { ListTable } from "./ListManager";
import { inp, lbl } from "./Fields";
import { rows, str, type Field } from "@/lib/blocks";

type Row = Record<string, unknown>;

export function FooterManager({ group, label, desc, url, fields, initial }: { group: string; label: string; desc: string; url: string; fields: Field[]; initial: Record<string, unknown> }) {
  const [data, setData] = useState(initial);
  const [about, setAbout] = useState(str(initial.about));
  const [copy, setCopy] = useState(str(initial.copyright));
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);
  const col = fields.find((f) => f.k === "columns")!;
  const legal = fields.find((f) => f.k === "legal")!;
  const card = "rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-sm)] sm:p-5";

  async function put(patch: Record<string, unknown>) {
    const body = { ...data, ...patch };
    const r = await fetch(`/api/admin/settings/${group}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (r.ok) setData(body);
    return r.ok;
  }
  async function saveText() {
    setBusy(true);
    const ok = await put({ about, copyright: copy });
    setBusy(false);
    setMsg({ ok, t: ok ? "Saved. The website is updated." : "Save failed" });
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">{label}</h1>
          <p className="mt-1 text-[13px] text-[var(--color-text-muted)]">{desc}</p>
        </div>
        <a href={url} target="_blank" className="flex h-10 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 text-[13px] font-bold hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]">View page <ExternalLink size={13} /></a>
      </div>

      <div className="flex flex-col gap-6">
        <section className={card}>
          <h2 className="mb-3 font-display text-base font-bold">Footer text</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="md:col-span-2"><label className={lbl}>About text</label><textarea className={inp} rows={3} value={about} onChange={(e) => setAbout(e.target.value)} /></div>
            <div className="md:col-span-2"><label className={lbl}>Copyright text</label><input className={inp} value={copy} onChange={(e) => setCopy(e.target.value)} /></div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-end gap-3">
            {msg ? <span className={`text-xs font-semibold ${msg.ok ? "text-[var(--color-success)]" : "text-red-600"}`}>{msg.t}</span> : null}
            <button disabled={busy} onClick={saveText} className="flex h-10 items-center gap-2 rounded-full bg-[var(--color-brand)] px-5 text-[13px] font-bold text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-60"><Save size={15} /> {busy ? "Saving..." : "Save text"}</button>
          </div>
        </section>

        <ListTable title="Link columns" field={col} list={rows(data.columns) as Row[]} persist={(next) => put({ columns: next })} />
        <ListTable title="Legal links" field={legal} list={rows(data.legal) as Row[]} persist={(next) => put({ legal: next })} />
      </div>
    </div>
  );
}
