import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, FileText, Pencil, Plus } from "lucide-react";
import { DeleteButton } from "@/components/admin/RowActions";
import { Filters, Pager, PageHead, card, statusBadge } from "@/components/admin/ListUI";
import { searchEntries, type EntryType } from "@/lib/content";

export const dynamic = "force-dynamic";
const MAP: Record<string, { type: EntryType; label: string; desc: string }> = {
  pages: { type: "page", label: "Pages", desc: "Build and manage the pages of your website." },
  services: { type: "service", label: "Services", desc: "Manage the services you offer." },
  blog: { type: "blog", label: "Blog posts", desc: "Write and publish articles." },
};
const PER = 10;

export default async function EntryList({ params, searchParams }: { params: Promise<{ type: string }>; searchParams: Promise<{ q?: string; status?: string; page?: string }> }) {
  const key = (await params).type;
  const cfg = MAP[key];
  if (!cfg) notFound();
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const { rows, total } = await searchEntries({ types: [cfg.type], q: sp.q, status: sp.status, page, per: PER });
  const urlOf = (e: (typeof rows)[number]) => (e.type === "blog" ? `/blog/${e.slug}` : `/${e.slug}`);
  const iconCls = "flex h-9 w-9 items-center justify-center rounded-lg transition hover:bg-[var(--color-surface-2)]";

  return (
    <div className="p-4 sm:p-8">
      <PageHead title={cfg.label} desc={cfg.desc}>
        <Link href={`/admin/${key}/new`} className="btn btn-brand"><Plus size={16} /> New</Link>
      </PageHead>
      <Filters q={sp.q ?? ""} status={sp.status ?? ""} statuses={["published", "draft"]} placeholder="Search title or slug..." />

      {rows.length === 0 ? (
        <div className={`${card} flex flex-col items-center gap-2 px-6 py-14 text-center`}>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]"><FileText size={22} /></span>
          <p className="font-display text-base font-bold">No items found</p>
          <p className="text-sm text-[var(--color-text-muted)]">Try a different search or create a new one.</p>
        </div>
      ) : (
        <>
          <div className={`${card} hidden overflow-hidden md:block`}>
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--color-surface-2)] text-xs font-semibold text-[var(--color-text-muted)]">
                <tr><th className="px-5 py-3">Title</th><th className="px-5 py-3">URL</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Updated</th><th className="px-5 py-3 text-right">Actions</th></tr>
              </thead>
              <tbody>
                {rows.map((e) => (
                  <tr key={e.id} className="border-t border-[var(--color-border)] transition hover:bg-[var(--color-surface)]">
                    <td className="max-w-[280px] px-5 py-3.5 font-semibold"><Link href={`/admin/${key}/${e.slug}`} className="block truncate hover:text-[var(--color-brand)]">{e.title}</Link></td>
                    <td className="max-w-[220px] truncate px-5 py-3.5 text-[var(--color-text-muted)]">{urlOf(e)}</td>
                    <td className="px-5 py-3.5"><span className={statusBadge(e.status)}>{e.status}</span></td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-[var(--color-text-muted)]">{new Date(e.updatedAt).toLocaleDateString("en-GB")}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-0.5">
                        <Link href={`/admin/${key}/${e.slug}`} title="Edit" className={iconCls}><Pencil size={15} /></Link>
                        <a href={urlOf(e)} target="_blank" title="View" className={iconCls}><ExternalLink size={15} /></a>
                        <DeleteButton id={e.id} title={e.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3 md:hidden">
            {rows.map((e) => (
              <div key={e.id} className={`${card} p-4`}>
                <div className="flex items-start justify-between gap-3">
                  <Link href={`/admin/${key}/${e.slug}`} className="min-w-0 font-semibold">{e.title}</Link>
                  <span className={statusBadge(e.status)}>{e.status}</span>
                </div>
                <p className="mt-1 truncate text-xs text-[var(--color-text-muted)]">{urlOf(e)}</p>
                <div className="mt-3 flex items-center justify-between border-t border-[var(--color-border)] pt-3">
                  <span className="text-xs text-[var(--color-text-muted)]">{new Date(e.updatedAt).toLocaleDateString("en-GB")}</span>
                  <div className="flex items-center gap-0.5">
                    <Link href={`/admin/${key}/${e.slug}`} title="Edit" className={iconCls}><Pencil size={15} /></Link>
                    <a href={urlOf(e)} target="_blank" title="View" className={iconCls}><ExternalLink size={15} /></a>
                    <DeleteButton id={e.id} title={e.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <Pager page={page} total={total} per={PER} params={{ q: sp.q, status: sp.status }} />
    </div>
  );
}
