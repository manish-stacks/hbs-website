import Link from "next/link";
import { ArrowRight, FileText, Inbox, Newspaper, Plus, Wrench } from "lucide-react";
import { statusBadge } from "@/components/admin/ListUI";
import { counts, recentEntries, type EntryType } from "@/lib/content";
import { newLeadCount, searchLeads } from "@/lib/leads";
import { GROUPS, type GroupKey } from "@/lib/settings";

export const dynamic = "force-dynamic";

const route = { page: "pages", service: "services", blog: "blog" } as const;
const stats: { type: EntryType; label: string; Icon: typeof FileText }[] = [
  { type: "page", label: "Pages", Icon: FileText },
  { type: "service", label: "Services", Icon: Wrench },
  { type: "blog", label: "Blog posts", Icon: Newspaper },
];
const shortcuts: GroupKey[] = ["general", "seo", "menu", "footer", "faqs", "reviews", "offices", "team"];
const card = "rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]";

export default async function Dashboard() {
  const [c, recent, newLeads, leads] = await Promise.all([
    counts(),
    recentEntries(6),
    newLeadCount(),
    searchLeads({ per: 5 }).catch(() => ({ rows: [], total: 0 })),
  ]);

  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-extrabold">Dashboard</h1>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">Create and manage everything on your website.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stats.map(({ type, label }) => (
            <Link key={type} href={`/admin/${route[type]}/new`} className="flex h-10 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 text-xs font-bold transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]">
              <Plus size={14} /> New {label.replace(/s$/, "").toLowerCase()}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ type, label, Icon }) => (
          <Link key={type} href={`/admin/${route[type]}`} className={`${card} group p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]`}>
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]"><Icon size={20} /></span>
              <ArrowRight size={16} className="text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-4 font-display text-3xl font-extrabold">{c[type].published + c[type].draft}</p>
            <p className="text-sm font-semibold">{label}</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">{c[type].published} published / {c[type].draft} draft</p>
          </Link>
        ))}
        <Link href="/admin/leads?status=new" className="group rounded-[var(--radius-md)] bg-[var(--color-ink)] p-5 text-white shadow-[var(--shadow-sm)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand)] text-white"><Inbox size={20} /></span>
            <ArrowRight size={16} className="text-white/60 transition-transform group-hover:translate-x-1" />
          </div>
          <p className="mt-4 font-display text-3xl font-extrabold">{newLeads}</p>
          <p className="text-sm font-semibold">New leads</p>
          <p className="mt-1 text-xs text-white/60">{leads.total} total enquiries</p>
        </Link>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <section className={card}>
          <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
            <h2 className="font-display text-base font-bold">Recently edited</h2>
            <Link href="/admin/pages" className="text-xs font-bold text-[var(--color-brand)]">View all</Link>
          </div>
          {recent.length === 0 ? <p className="p-6 text-sm text-[var(--color-text-muted)]">Nothing yet. Run the seed script or create your first page.</p> : null}
          {recent.map((e) => (
            <Link key={e.id} href={`/admin/${route[e.type]}/${e.slug}`} className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] px-5 py-3 last:border-0 hover:bg-[var(--color-surface)]">
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{e.title}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{e.type === "blog" ? `/blog/${e.slug}` : `/${e.slug}`}</span>
              </span>
              <span className={statusBadge(e.status)}>{e.status}</span>
            </Link>
          ))}
        </section>

        <section className={card}>
          <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
            <h2 className="font-display text-base font-bold">Latest leads</h2>
            <Link href="/admin/leads" className="text-xs font-bold text-[var(--color-brand)]">View all</Link>
          </div>
          {leads.rows.length === 0 ? <p className="p-6 text-sm text-[var(--color-text-muted)]">No enquiries yet.</p> : null}
          {leads.rows.map((l) => (
            <Link key={l.id} href="/admin/leads" className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] px-5 py-3 last:border-0 hover:bg-[var(--color-surface)]">
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{l.name}</span>
                <span className="block truncate text-xs text-[var(--color-text-muted)]">{l.subject || l.email}</span>
              </span>
              <span className={statusBadge(l.status)}>{l.status}</span>
            </Link>
          ))}
        </section>
      </div>

      <section className={`${card} mt-6 p-5`}>
        <h2 className="font-display text-base font-bold">Quick settings</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map((k) => (
            <Link key={k} href={`/admin/settings/${k}`} className="rounded-xl border border-[var(--color-border)] px-4 py-3 transition-colors hover:border-[var(--color-brand)]">
              <span className="block text-sm font-semibold">{GROUPS[k].label}</span>
              <span className="mt-0.5 block truncate text-xs text-[var(--color-text-muted)]">{GROUPS[k].desc}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
