import { Filters, Pager, statusBadge } from "@/components/admin/ListUI";
import { LeadActions } from "@/components/admin/LeadActions";
import { searchLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";
const PER = 10;

export default async function Leads({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; type?: string; page?: string }> }) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  let data: Awaited<ReturnType<typeof searchLeads>> = { rows: [], total: 0 };
  try { data = await searchLeads({ q: sp.q, status: sp.status, type: sp.type, page, per: PER }); } catch (e) { console.error(e); }
  return (
    <div className="p-5 sm:p-8">
      <h1 className="font-display text-2xl font-extrabold">Contact leads &amp; job applications</h1>
      <Filters q={sp.q ?? ""} status={sp.status ?? ""} statuses={["new", "read", "done"]} placeholder="Search name, email, phone, message..." extra={{ name: "type", value: sp.type ?? "", label: "All types", options: [["contact", "Contact form"], ["career", "Job applications"]] }} />
      <div className="mt-4 flex flex-col gap-3">
        {data.rows.length === 0 ? <p className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-8 text-center text-sm text-[var(--color-text-muted)]">No leads found.</p> : null}
        {data.rows.map((l) => (
          <details key={l.id} className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4 open:shadow-[var(--shadow-md)]">
            <summary className="flex cursor-pointer flex-wrap items-center gap-3">
              <span className={statusBadge(l.status)}>{l.status}</span>
              <span className="font-semibold">{l.name}</span>
              <span className="text-sm text-[var(--color-text-muted)]">{l.subject || l.email}</span>
              {l.source === "/career" ? <span className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-0.5 text-[11px] font-bold">Job application</span> : null}
              <span className="ml-auto text-xs text-[var(--color-text-muted)]">{new Date(l.created_at).toLocaleString("en-GB")}</span>
            </summary>
            <div className="mt-4 grid gap-1 text-sm">
              <p><b>Email:</b> <a className="text-[var(--color-brand)]" href={`mailto:${l.email}`}>{l.email}</a></p>
              <p><b>Phone:</b> <a className="text-[var(--color-brand)]" href={`tel:${l.phone}`}>{l.phone}</a></p>
              <p><b>Page:</b> {l.source || "-"}</p>
              <p className="mt-2 whitespace-pre-wrap rounded-lg bg-[var(--color-surface)] p-3">{l.message}</p>
            </div>
            <div className="mt-4"><LeadActions id={l.id} status={l.status} /></div>
          </details>
        ))}
      </div>
      <Pager page={page} total={data.total} per={PER} params={{ q: sp.q, status: sp.status, type: sp.type }} />
    </div>
  );
}
