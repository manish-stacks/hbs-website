import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Pencil, Plus } from "lucide-react";
import { DeleteButton } from "@/components/admin/RowActions";
import { Filters, Pager, statusBadge } from "@/components/admin/ListUI";
import { searchEntries, type EntryType } from "@/lib/content";

export const dynamic = "force-dynamic";
const MAP: Record<string, { type: EntryType; label: string }> = {
  pages: { type: "page", label: "Pages" },
  services: { type: "service", label: "Services" },
  blog: { type: "blog", label: "Blog posts" },
};
const PER = 10;

export default async function EntryList({ params, searchParams }: { params: Promise<{ type: string }>; searchParams: Promise<{ q?: string; status?: string; page?: string }> }) {
  const key = (await params).type;
  const cfg = MAP[key];
  if (!cfg) notFound();
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const { rows, total } = await searchEntries({ types: [cfg.type], q: sp.q, status: sp.status, page, per: PER });

  return (
    <div className="p-5 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-2xl font-extrabold">{cfg.label}</h1>
        <Link href={`/admin/${key}/new`} className="btn btn-brand"><Plus size={16} /> New</Link>
      </div>
      <Filters q={sp.q ?? ""} status={sp.status ?? ""} statuses={["published", "draft"]} placeholder="Search title or slug..." />
      <div className="mt-4 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="bg-[var(--color-surface-2)] text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
            <tr><th className="px-5 py-3">Title</th><th className="px-5 py-3">URL</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Updated</th><th className="px-5 py-3 text-right">Actions</th></tr>
          </thead>
          <tbody>
            {rows.length === 0 ? <tr><td colSpan={5} className="px-5 py-8 text-center text-[var(--color-text-muted)]">No items found.</td></tr> : null}
            {rows.map((e) => {
              const url = e.type === "blog" ? `/blog/${e.slug}` : `/${e.slug}`;
              return (
                <tr key={e.id} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface)]">
                  <td className="px-5 py-3 font-semibold"><Link href={`/admin/${key}/${e.slug}`}>{e.title}</Link></td>
                  <td className="px-5 py-3 text-[var(--color-text-muted)]">{url}</td>
                  <td className="px-5 py-3"><span className={statusBadge(e.status)}>{e.status}</span></td>
                  <td className="px-5 py-3 text-[var(--color-text-muted)]">{new Date(e.updatedAt).toLocaleDateString("en-GB")}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link href={`/admin/${key}/${e.slug}`} title="Edit" className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[var(--color-surface-2)]"><Pencil size={15} /></Link>
                      <a href={url} target="_blank" title="View" className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[var(--color-surface-2)]"><ExternalLink size={15} /></a>
                      <DeleteButton id={e.id} title={e.title} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pager page={page} total={total} per={PER} params={{ q: sp.q, status: sp.status }} />
    </div>
  );
}
