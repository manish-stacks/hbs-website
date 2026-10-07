import Link from "next/link";
import { Search } from "lucide-react";

type Params = Record<string, string | undefined>;
const qs = (p: Params) => {
  const u = new URLSearchParams();
  for (const [k, v] of Object.entries(p)) if (v) u.set(k, v);
  const s = u.toString();
  return s ? `?${s}` : "";
};

/** GET-form search bar + status filter (works without client JS). */
export function Filters({ q, status, statuses, placeholder = "Search...", extra }: { q: string; status: string; statuses: string[]; placeholder?: string; extra?: { name: string; value: string; label: string; options: [string, string][] } }) {
  return (
    <form className="mt-5 flex flex-wrap items-center gap-2">
      <div className="relative min-w-[220px] flex-1">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
        <input name="q" defaultValue={q} placeholder={placeholder} className="w-full rounded-lg border border-[var(--color-border)] bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-[var(--color-brand)]" />
      </div>
      {extra ? (
        <select name={extra.name} defaultValue={extra.value} className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-sm outline-none">
          <option value="">{extra.label}</option>
          {extra.options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
      ) : null}
      <select name="status" defaultValue={status} className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-sm capitalize outline-none">
        <option value="">All statuses</option>
        {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <button className="rounded-lg bg-[var(--color-ink)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--color-brand)]">Filter</button>
      {q || status || extra?.value ? <Link href="?" className="text-sm font-semibold text-[var(--color-brand)]">Reset</Link> : null}
    </form>
  );
}

export function Pager({ page, total, per, params }: { page: number; total: number; per: number; params: Params }) {
  const pages = Math.max(1, Math.ceil(total / per));
  const link = (n: number) => `${qs({ ...params, page: n > 1 ? String(n) : undefined }) || "?"}`;
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--color-text-muted)]">
      <span>{total} result{total === 1 ? "" : "s"}</span>
      <div className="flex items-center gap-2">
        {page > 1 ? <Link href={link(page - 1)} className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-1.5 font-semibold hover:border-[var(--color-brand)]">Previous</Link> : null}
        <span className="font-semibold text-[var(--color-ink)]">Page {page} of {pages}</span>
        {page < pages ? <Link href={link(page + 1)} className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-1.5 font-semibold hover:border-[var(--color-brand)]">Next</Link> : null}
      </div>
    </div>
  );
}

export const statusBadge = (s: string) =>
  `rounded-full px-3 py-1 text-xs font-bold capitalize ${s === "published" || s === "done" ? "bg-green-50 text-[var(--color-success)]" : s === "new" ? "bg-[var(--color-brand-soft)] text-[var(--color-brand)]" : "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"}`;
