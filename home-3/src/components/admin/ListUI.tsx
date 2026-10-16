import Link from "next/link";
import { Search } from "lucide-react";

type Params = Record<string, string | undefined>;
const qs = (p: Params) => {
  const u = new URLSearchParams();
  for (const [k, v] of Object.entries(p)) if (v) u.set(k, v);
  const s = u.toString();
  return s ? `?${s}` : "";
};

export const card = "rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]";
const ctl = "h-10 rounded-xl border border-[var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[var(--color-brand)] focus:ring-4 focus:ring-[var(--color-brand)]/10";

export function PageHead({ title, desc, children }: { title: string; desc?: string; children?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div className="min-w-0">
        <h1 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h1>
        {desc ? <p className="mt-1 text-sm text-[var(--color-text-muted)]">{desc}</p> : null}
      </div>
      {children ? <div className="flex flex-wrap gap-2">{children}</div> : null}
    </div>
  );
}

/** GET-form search bar + status filter (works without client JS). */
export function Filters({ q, status, statuses, placeholder = "Search...", extra }: { q: string; status: string; statuses: string[]; placeholder?: string; extra?: { name: string; value: string; label: string; options: [string, string][] } }) {
  return (
    <form className={`${card} mb-4 grid gap-2 p-3 sm:flex sm:flex-wrap sm:items-center`}>
      <div className="relative min-w-[220px] flex-1">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
        <input name="q" defaultValue={q} placeholder={placeholder} className={`${ctl} w-full pl-9`} />
      </div>
      {extra ? (
        <select name={extra.name} defaultValue={extra.value} className={ctl}>
          <option value="">{extra.label}</option>
          {extra.options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
      ) : null}
      <select name="status" defaultValue={status} className={`${ctl} capitalize`}>
        <option value="">All statuses</option>
        {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <button className="h-10 rounded-xl bg-[var(--color-ink)] px-5 text-sm font-bold text-white transition hover:bg-[var(--color-brand)]">Filter</button>
      {q || status || extra?.value ? <Link href="?" className="px-1 text-center text-sm font-semibold text-[var(--color-brand)]">Reset</Link> : null}
    </form>
  );
}

export function Pager({ page, total, per, params }: { page: number; total: number; per: number; params: Params }) {
  const pages = Math.max(1, Math.ceil(total / per));
  const link = (n: number) => `${qs({ ...params, page: n > 1 ? String(n) : undefined }) || "?"}`;
  const btn = "rounded-xl border border-[var(--color-border)] bg-white px-4 py-2 font-semibold transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]";
  return (
    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--color-text-muted)]">
      <span>{total} result{total === 1 ? "" : "s"}</span>
      <div className="flex items-center gap-2">
        {page > 1 ? <Link href={link(page - 1)} className={btn}>Previous</Link> : null}
        <span className="px-1 font-semibold text-[var(--color-ink)]">Page {page} of {pages}</span>
        {page < pages ? <Link href={link(page + 1)} className={btn}>Next</Link> : null}
      </div>
    </div>
  );
}

export const statusBadge = (s: string) =>
  `inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold capitalize ${s === "published" || s === "done" ? "bg-green-50 text-[var(--color-success)]" : s === "new" ? "bg-[var(--color-brand-soft)] text-[var(--color-brand)]" : "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"}`;
