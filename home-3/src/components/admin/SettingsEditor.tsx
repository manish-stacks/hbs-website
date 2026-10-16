"use client";

import { useState } from "react";
import { CheckCircle2, ExternalLink, Lightbulb, MapPin, Save } from "lucide-react";
import { FieldEditor, isWide } from "./Fields";
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

  const saveBtn = (
    <button disabled={busy} onClick={save} className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-5 text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(229,35,27,.25)] transition hover:bg-[var(--color-brand-dark)] disabled:opacity-60">
      <Save size={16} /> {busy ? "Saving..." : "Save changes"}
    </button>
  );
  const msgEl = msg ? (
    <p className={`flex items-center gap-1.5 text-xs font-semibold ${msg.ok ? "text-[var(--color-success)]" : "text-red-600"}`}>{msg.ok ? <CheckCircle2 size={14} /> : null}{msg.t}</p>
  ) : null;

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">{label}</h1>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{desc}</p>
        </div>
        <div className="hidden items-center gap-3 sm:flex">{msgEl}{saveBtn}</div>
      </div>

      <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-sm)] sm:p-5">
          <div className="grid gap-x-4 gap-y-3.5 md:grid-cols-2">
            {fields.map((f) => (
              <div key={f.k} className={isWide(f) ? "md:col-span-2" : ""}>
                <FieldEditor f={f} v={data[f.k]} set={(val) => setData((d) => ({ ...d, [f.k]: val }))} />
              </div>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-4 xl:sticky xl:top-20">
          <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-sm)]">
            <p className="flex items-center gap-2 text-sm font-bold"><MapPin size={16} className="text-[var(--color-brand)]" /> Where this appears</p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{where}</p>
            <a href={url} target="_blank" className="mt-3 flex h-9 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] text-sm font-bold transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]">View live page <ExternalLink size={14} /></a>
          </div>
          <div className="rounded-xl bg-[var(--color-ink)] p-4 text-white">
            <p className="flex items-center gap-2 text-sm font-bold"><Lightbulb size={16} className="text-[var(--color-accent)]" /> Quick tips</p>
            <ul className="mt-3 flex flex-col gap-2 text-[13px] leading-relaxed text-white/70">
              <li>Changes go live as soon as you save.</li>
              <li>Keep headlines short for better mobile layout.</li>
              <li>Use the live page link to review your edits.</li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="sticky bottom-0 -mx-4 mt-6 flex items-center justify-between gap-3 border-t border-[var(--color-border)] bg-white/90 px-4 py-3 backdrop-blur sm:hidden">
        <div className="min-w-0 text-left">{msgEl}</div>
        {saveBtn}
      </div>
    </div>
  );
}
