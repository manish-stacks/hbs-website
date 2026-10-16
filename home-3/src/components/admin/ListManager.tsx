"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ExternalLink, Image as ImageIcon, Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { FieldEditor, iconBtn, inp, isWide } from "./Fields";
import { rows, str, type Field } from "@/lib/blocks";

type Row = Record<string, unknown>;
const PER = 10;
const FILTER_KEYS = ["sector", "team", "type", "country", "role"];
const SKIP = /^(alt|facebook|twitter|instagram)$/;

type Persist = (next: Row[], ok: string) => Promise<boolean>;

export function ListTable({ field, list, persist, title }: { field: Field; list: Row[]; persist: Persist; title?: string }) {
  const sub = field.sub ?? [];
  const [q, setQ] = useState("");
  const [flt, setFlt] = useState("");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState<{ i: number; draft: Row } | null>(null);
  const [del, setDel] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const run: Persist = async (n, ok) => { setBusy(true); const r = await persist(n, ok); setBusy(false); setMsg({ ok: r, t: r ? ok : "Save failed" }); return r; };
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);

  const img = sub.find((s) => s.t === "image");
  const cols = sub.filter((s) => (s.t === "text" || s.t === "area") && !SKIP.test(s.k)).slice(0, 3);
  const fk = sub.find((s) => s.t === "text" && FILTER_KEYS.includes(s.k));
  const opts = useMemo(() => (fk ? [...new Set(list.map((x) => str(x[fk.k])).filter(Boolean))] : []), [list, fk]);
  const nested = sub.filter((x) => x.t === "items");
  const singular = field.label.replace(/ies$/, "y").replace(/s$/, "");

  const view = list
    .map((it, i) => ({ it, i }))
    .filter(({ it }) => (!q.trim() || JSON.stringify(it).toLowerCase().includes(q.trim().toLowerCase())) && (!flt || !fk || str(it[fk.k]) === flt));
  const pages = Math.max(1, Math.ceil(view.length / PER));
  const cur = Math.min(page, pages);
  const slice = view.slice((cur - 1) * PER, cur * PER);
  const filtered = !!(q.trim() || flt);

  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(null), 3000);
    return () => clearTimeout(t);
  }, [msg]);
  useEffect(() => {
    if (!modal && del === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setModal(null); setDel(null); } };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [modal, del]);

  const blank = (): Row => Object.fromEntries(sub.map((s) => [s.k, s.t === "items" ? [] : ""]));
  async function saveModal() {
    if (!modal) return;
    const next = modal.i < 0 ? [...list, modal.draft] : list.map((x, j) => (j === modal.i ? modal.draft : x));
    if (await run(next, modal.i < 0 ? "Added." : "Updated.")) {
      if (modal.i < 0) setPage(9999);
      setModal(null);
    }
  }
  async function remove() {
    if (del === null) return;
    if (await run(list.filter((_, j) => j !== del), "Deleted.")) setDel(null);
  }
  function move(i: number, d: number) {
    const n = [...list];
    const j = i + d;
    if (j < 0 || j >= n.length) return;
    [n[i], n[j]] = [n[j]!, n[i]!];
    run(n, "Order saved.");
  }

  const thumb = (it: Row) => {
    const v = img ? str(it[img.k]) : "";
    return v ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={v} alt="" style={{ height: 40, width: 56 }} className="shrink-0 rounded-md border border-[var(--color-border)] bg-white object-cover" />
    ) : (
      <span style={{ height: 40, width: 56 }} className="flex shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-2)] text-[var(--color-text-muted)]"><ImageIcon size={16} /></span>
    );
  };
  const actions = (i: number) => (
    <div className="flex items-center justify-end gap-0.5">
      {!filtered ? (
        <>
          <button type="button" className={iconBtn} disabled={busy || i === 0} onClick={() => move(i, -1)} title="Move up"><ArrowUp size={14} /></button>
          <button type="button" className={iconBtn} disabled={busy || i === list.length - 1} onClick={() => move(i, 1)} title="Move down"><ArrowDown size={14} /></button>
        </>
      ) : null}
      <button type="button" className={iconBtn} onClick={() => setModal({ i, draft: { ...list[i]! } })} title="Edit"><Pencil size={14} /></button>
      <button type="button" className={`${iconBtn} hover:!text-red-600`} onClick={() => setDel(i)} title="Delete"><Trash2 size={14} /></button>
    </div>
  );
  const card = "rounded-xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]";

  return (
    <div>
      {title ? <h2 className="mb-2 font-display text-base font-bold">{title} <span className="ml-1 rounded-full bg-[var(--color-surface-2)] px-2 py-0.5 text-[11px]">{list.length}</span></h2> : null}
      <div className={`${card} mb-3 grid gap-2 p-3 sm:flex sm:items-center`}>
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
          <input className={`${inp} !pl-9`} placeholder={`Search ${field.label.toLowerCase()}...`} value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} />
        </div>
        {fk && opts.length > 1 && opts.length <= 12 ? (
          <select className={`${inp} sm:!w-48`} value={flt} onChange={(e) => { setFlt(e.target.value); setPage(1); }}>
            <option value="">All {fk.label.toLowerCase()}</option>
            {opts.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        ) : null}
        <button onClick={() => setModal({ i: -1, draft: blank() })} className="flex h-9 items-center justify-center gap-1.5 rounded-full bg-[var(--color-brand)] px-4 text-[13px] font-bold text-white hover:bg-[var(--color-brand-dark)]"><Plus size={14} /> Add {singular.toLowerCase()}</button>
        {filtered ? <button className="text-[13px] font-semibold text-[var(--color-brand)]" onClick={() => { setQ(""); setFlt(""); setPage(1); }}>Reset</button> : null}
      </div>

      {slice.length === 0 ? (
        <div className={`${card} px-6 py-12 text-center text-sm text-[var(--color-text-muted)]`}>No items found.</div>
      ) : (
        <>
          <div className={`${card} hidden overflow-hidden md:block`}>
            <table className="w-full text-left text-[13px]">
              <thead className="bg-[var(--color-surface-2)] text-xs font-semibold text-[var(--color-text-muted)]">
                <tr>
                  <th className="w-12 px-4 py-2.5">#</th>
                  {img ? <th className="w-20 px-2 py-2.5">Image</th> : null}
                  {cols.map((c) => <th key={c.k} className="px-4 py-2.5">{c.label}</th>)}
                  {nested.map((c) => <th key={c.k} className="px-4 py-2.5">{c.label}</th>)}
                  <th className="px-4 py-2.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {slice.map(({ it, i }) => (
                  <tr key={i} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface)]">
                    <td className="px-4 py-2.5 text-[var(--color-text-muted)]">{i + 1}</td>
                    {img ? <td className="px-2 py-2">{thumb(it)}</td> : null}
                    {cols.map((c, ci) => (
                      <td key={c.k} className={`max-w-[320px] px-4 py-2.5 ${ci === 0 ? "font-semibold" : "text-[var(--color-text-muted)]"}`}><span className="line-clamp-2">{str(it[c.k]) || "-"}</span></td>
                    ))}
                    {nested.map((c) => <td key={c.k} className="px-4 py-2.5"><span className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-0.5 text-xs font-bold">{rows(it[c.k]).length}</span></td>)}
                    <td className="px-4 py-2.5">{actions(i)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-2 md:hidden">
            {slice.map(({ it, i }) => (
              <div key={i} className={`${card} p-3`}>
                <div className="flex items-start gap-3">
                  {img ? thumb(it) : null}
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-semibold">{str(it[cols[0]?.k ?? ""]) || "-"}</p>
                    {cols.slice(1).map((c) => <p key={c.k} className="line-clamp-1 text-xs text-[var(--color-text-muted)]">{str(it[c.k])}</p>)}
                    {nested.map((c) => <p key={c.k} className="text-xs text-[var(--color-text-muted)]">{c.label}: {rows(it[c.k]).length}</p>)}
                  </div>
                </div>
                <div className="mt-2 border-t border-[var(--color-border)] pt-2">{actions(i)}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[13px] text-[var(--color-text-muted)]">
        <span>{view.length} item{view.length === 1 ? "" : "s"}</span>
        <div className="flex items-center gap-2">
          <button disabled={cur <= 1} onClick={() => setPage(cur - 1)} className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-1.5 font-semibold disabled:opacity-40">Previous</button>
          <span className="font-semibold text-[var(--color-ink)]">Page {cur} of {pages}</span>
          <button disabled={cur >= pages} onClick={() => setPage(cur + 1)} className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-1.5 font-semibold disabled:opacity-40">Next</button>
        </div>
      </div>

      {modal ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 backdrop-blur-[2px] sm:items-center sm:p-4" onMouseDown={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-[var(--shadow-lg)] sm:rounded-2xl">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
              <h2 className="font-display text-base font-bold">{modal.i < 0 ? `Add ${singular.toLowerCase()}` : `Edit ${singular.toLowerCase()}`}</h2>
              <button onClick={() => setModal(null)} className={iconBtn} aria-label="Close"><X size={16} /></button>
            </div>
            <div className="grid gap-x-4 gap-y-3 overflow-y-auto p-6 md:grid-cols-2">
              {sub.map((sf) => (
                <div key={sf.k} className={isWide(sf) ? "md:col-span-2" : ""}>
                  <FieldEditor f={sf} v={modal.draft[sf.k]} set={(val) => setModal((m) => (m ? { ...m, draft: { ...m.draft, [sf.k]: val } } : m))} />
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4">
              <button onClick={() => setModal(null)} className="h-11 rounded-full border border-[var(--color-border)] bg-white px-6 text-sm font-bold">Cancel</button>
              <button disabled={busy} onClick={saveModal} className="h-11 rounded-full bg-[var(--color-brand)] px-7 text-sm font-bold text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-60">{busy ? "Saving..." : modal.i < 0 ? "Add" : "Update"}</button>
            </div>
          </div>
        </div>
      ) : null}

      {del !== null ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4" onMouseDown={(e) => e.target === e.currentTarget && setDel(null)}>
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[var(--shadow-lg)]">
            <h2 className="font-display text-base font-bold">Delete this {singular.toLowerCase()}?</h2>
            <p className="mt-1 line-clamp-2 text-[13px] text-[var(--color-text-muted)]">{str(list[del]?.[cols[0]?.k ?? ""]) || "This item"} will be removed from the website.</p>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setDel(null)} className="h-11 rounded-full border border-[var(--color-border)] px-6 text-sm font-bold">Cancel</button>
              <button disabled={busy} onClick={remove} className="h-11 rounded-full bg-red-600 px-6 text-sm font-bold text-white hover:bg-red-700 disabled:opacity-60">{busy ? "Deleting..." : "Delete"}</button>
            </div>
          </div>
        </div>
      ) : null}

      {msg ? <div className={`fixed bottom-4 right-4 z-[70] rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg ${msg.ok ? "bg-[var(--color-ink)]" : "bg-red-600"}`}>{msg.t}</div> : null}
    </div>
  );
}

export function ListManager({ group, label, desc, url, field, initial }: { group: string; label: string; desc: string; url: string; field: Field; initial: Record<string, unknown> }) {
  const [data, setData] = useState(initial);
  async function persist(next: Row[]) {
    const body = { ...data, [field.k]: next };
    const r = await fetch(`/api/admin/settings/${group}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (r.ok) setData(body);
    return r.ok;
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
      <ListTable field={field} list={rows(data[field.k]) as Row[]} persist={persist} />
    </div>
  );
}
