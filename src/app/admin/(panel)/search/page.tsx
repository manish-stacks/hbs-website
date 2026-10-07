import Link from "next/link";
import { Filters, Pager, statusBadge } from "@/components/admin/ListUI";
import { searchEntries } from "@/lib/content";

export const dynamic = "force-dynamic";
const PER = 10;
const key = { page: "pages", service: "services", blog: "blog" } as const;

export default async function SearchAll({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; page?: string }> }) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const { rows, total } = await searchEntries({ q: sp.q, status: sp.status, page, per: PER });
  return (
    <div className="p-5 sm:p-8">
      <h1 className="font-display text-2xl font-extrabold">Search results</h1>
      <Filters q={sp.q ?? ""} status={sp.status ?? ""} statuses={["published", "draft"]} />
      <div className="mt-4 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white">
        {rows.length === 0 ? <p className="p-8 text-center text-sm text-[var(--color-text-muted)]">Nothing found.</p> : null}
        {rows.map((e) => (
          <Link key={e.id} href={`/admin/${key[e.type]}/${e.slug}`} className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] px-5 py-3 last:border-0 hover:bg-[var(--color-surface)]">
            <span className="min-w-0"><span className="block truncate text-sm font-semibold">{e.title}</span><span className="text-xs capitalize text-[var(--color-text-muted)]">{e.type} / {e.slug}</span></span>
            <span className={statusBadge(e.status)}>{e.status}</span>
          </Link>
        ))}
      </div>
      <Pager page={page} total={total} per={PER} params={{ q: sp.q, status: sp.status }} />
    </div>
  );
}
