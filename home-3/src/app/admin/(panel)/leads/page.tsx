import { Filters, Pager, PageHead, card, statusBadge } from "@/components/admin/ListUI";
import { LeadActions } from "@/components/admin/LeadActions";
import { Inbox } from "lucide-react";
import { searchLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";
const PER = 10;

export default async function Leads({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; type?: string; page?: string }> }) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  let data: Awaited<ReturnType<typeof searchLeads>> = { rows: [], total: 0 };
  try { data = await searchLeads({ q: sp.q, status: sp.status, type: sp.type, page, per: PER }); } catch (e) { console.error(e); }
  return (
    <div className="p-4 sm:p-8">
      <PageHead title="Leads & applications" desc="Contact form enquiries and job applications." />
      <Filters q={sp.q ?? ""} status={sp.status ?? ""} statuses={["new", "read", "done"]} placeholder="Search name, email, phone, message..." extra={{ name: "type", value: sp.type ?? "", label: "All types", options: [["contact", "Contact form"], ["career", "Job applications"]] }} />
      <div className="flex flex-col gap-3">
        {data.rows.length === 0 ? (
          <div className={`${card} flex flex-col items-center gap-2 px-6 py-14 text-center`}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]"><Inbox size={22} /></span>
            <p className="font-display text-base font-bold">No leads found</p>
          </div>
        ) : null}
        {data.rows.map((l) => (
          <details key={l.id} className={`${card} group p-4 open:shadow-[var(--shadow-md)] sm:p-5`}>
            <summary className="flex cursor-pointer list-none flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-sm font-bold uppercase text-white">{l.name.charAt(0) || "?"}</span>
              <span className="min-w-0 flex-1 basis-40">
                <span className="block truncate font-semibold">{l.name}</span>
                <span className="block truncate text-sm text-[var(--color-text-muted)]">{l.subject || l.email}</span>
              </span>
              {l.source === "/career" ? <span className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-1 text-[11px] font-bold">Job application</span> : null}
              <span className={statusBadge(l.status)}>{l.status}</span>
              <span className="w-full text-xs text-[var(--color-text-muted)] sm:ml-auto sm:w-auto">{new Date(l.created_at).toLocaleString("en-GB")}</span>
            </summary>
            <div className="mt-4 grid gap-4 border-t border-[var(--color-border)] pt-4 text-sm">
              <div className="grid gap-3 sm:grid-cols-3">
                <p><span className="block text-xs text-[var(--color-text-muted)]">Email</span><a className="break-all font-semibold text-[var(--color-brand)]" href={`mailto:${l.email}`}>{l.email}</a></p>
                <p><span className="block text-xs text-[var(--color-text-muted)]">Phone</span><a className="font-semibold text-[var(--color-brand)]" href={`tel:${l.phone}`}>{l.phone || "-"}</a></p>
                <p><span className="block text-xs text-[var(--color-text-muted)]">Page</span><span className="font-semibold">{l.source || "-"}</span></p>
              </div>
              <p className="whitespace-pre-wrap rounded-xl bg-[var(--color-surface)] p-4 leading-relaxed">{l.message}</p>
              <LeadActions id={l.id} status={l.status} />
            </div>
          </details>
        ))}
      </div>
      <Pager page={page} total={data.total} per={PER} params={{ q: sp.q, status: sp.status, type: sp.type }} />
    </div>
  );
}
