"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FieldEditor } from "./Fields";
import type { Field } from "@/lib/blocks";

export function SettingsEditor({ group, label, desc, where, url, fields, initial }: { group: string; label: string; desc: string; where: string; url: string; fields: Field[]; initial: Record<string, unknown> }) {
  const [data, setData] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);

  async function save() {
    setBusy(true);
    setMsg(null);
    const r = await fetch(`/api/admin/settings/${group}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setBusy(false);
    setMsg(r.ok ? { ok: true, t: "Saved. The website is updated." } : { ok: false, t: (await r.json().catch(() => ({}))).error || "Save failed" });
  }

  return (
    <div className="p-5 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-extrabold">{label}</h1>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{desc}</p>
        </div>
        <div className="flex items-center gap-3">
          {msg ? <span className={`text-xs font-semibold ${msg.ok ? "text-[var(--color-success)]" : "text-red-600"}`}>{msg.t}</span> : null}
          <button disabled={busy} onClick={save} className="rounded-full bg-[var(--color-brand)] px-6 py-2.5 text-sm font-bold text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-60">{busy ? "Saving..." : "Save changes"}</button>
        </div>
      </div>
      <div className="mt-5 flex max-w-[860px] flex-wrap items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-brand-soft)] px-4 py-3 text-sm">
        <p><b>Where this appears:</b> {where}</p>
        <a href={url} target="_blank" className="flex shrink-0 items-center gap-1.5 font-bold text-[var(--color-brand)]">View page <ExternalLink size={14} /></a>
      </div>
      <div className="mt-4 flex max-w-[860px] flex-col gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-5 sm:p-6">
        {fields.map((f) => <FieldEditor key={f.k} f={f} v={data[f.k]} set={(val) => setData((d) => ({ ...d, [f.k]: val }))} />)}
      </div>
    </div>
  );
}
