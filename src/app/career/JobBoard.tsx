"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowRight, Briefcase, Check, Clock, MapPin, Plus, Send } from "lucide-react";

type Opening = { role: string; team: string; type: string; location: string; exp: string; points: string[] };

const field =
  "w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--color-ink)] focus:ring-4 focus:ring-[var(--color-ink)]/5";

export function JobBoard({ openings }: { openings: Opening[] }) {
  const router = useRouter();
  const teams = ["All", ...Array.from(new Set(openings.map((o) => o.team).filter(Boolean)))];
  const [team, setTeam] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const [role, setRole] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const list = useMemo(() => openings.filter((o) => team === "All" || o.team === team), [team, openings]);

  function apply(r: string) {
    setRole(r);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setErr("");
    const body = Object.fromEntries(new FormData(e.currentTarget));
    const r = await fetch("/api/career", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (r.ok) return router.push("/thank-you");
    setErr((await r.json().catch(() => ({}))).error || "Your application could not be sent. Check your connection and try again.");
    setBusy(false);
  }

  return (
    <>
      <section id="openings" className="scroll-mt-28 py-16 md:py-24">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              {openings.length} open {openings.length === 1 ? "role" : "roles"}
            </h2>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter roles by team">
              {teams.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={team === t}
                  onClick={() => setTeam(t)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${team === t ? "bg-[var(--color-ink)] text-white" : "bg-[var(--color-surface-2)] text-[var(--color-ink)] hover:bg-[var(--color-border)]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {list.length === 0 ? (
            <p className="mt-10 text-[var(--color-text-muted)]">No open roles in this team right now. Send an open application below.</p>
          ) : (
            <ul className="mt-10 grid gap-4 lg:grid-cols-2">
              {list.map((o) => {
                const isOpen = open === o.role;
                return (
                  <li key={o.role} className={`flex flex-col rounded-[28px] border p-6 transition-colors md:p-7 ${isOpen ? "border-[var(--color-ink)] bg-white shadow-[var(--shadow-md)]" : "border-[var(--color-border)] bg-white hover:border-[var(--color-ink)]"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-xs font-bold text-[var(--color-brand-dark)]">{o.team}</span>
                        <h3 className="mt-3 font-display text-2xl font-bold">{o.role}</h3>
                      </div>
                      <button
                        onClick={() => setOpen(isOpen ? null : o.role)}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? `Hide details for ${o.role}` : `Show details for ${o.role}`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] transition hover:border-[var(--color-ink)]"
                      >
                        <Plus size={18} className={`transition-transform ${isOpen ? "rotate-45" : ""}`} />
                      </button>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-text-muted)]">
                      <span className="inline-flex items-center gap-1.5"><MapPin size={14} />{o.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock size={14} />{o.type}</span>
                      <span className="inline-flex items-center gap-1.5"><Briefcase size={14} />{o.exp}</span>
                    </div>
                    <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                      <div className="overflow-hidden">
                        <ul className="mt-5 space-y-2 border-t border-[var(--color-border)] pt-5">
                          {o.points.map((p) => (
                            <li key={p} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button onClick={() => apply(o.role)} className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">
                      Apply for this role <ArrowRight size={15} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <section id="apply" className="scroll-mt-28 bg-[var(--color-ink)] py-16 text-white md:py-24">
        <div className="container-max grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Apply in two minutes</h2>
            <p className="mt-4 text-lg text-white/65">Fill in the form, then attach your CV in the email that opens. We reply to every application.</p>
            <ul className="mt-8 space-y-3 text-white/80">
              {["No cover letter needed", "Links to real work count more than a long CV", "Open applications are welcome too"].map((t) => (
                <li key={t} className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />{t}</li>
              ))}
            </ul>
          </div>
          <form onSubmit={submit} className="grid gap-4 rounded-[32px] bg-white p-6 text-[var(--color-ink)] sm:grid-cols-2 sm:p-8">
            <input name="name" required placeholder="Full name" aria-label="Full name" className={field} />
            <input name="phone" required type="tel" placeholder="Phone number" aria-label="Phone number" className={field} />
            <input name="email" required type="email" placeholder="Email address" aria-label="Email address" className={field} />
            <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required aria-label="Role" className={field}>
              <option value="">Select a role</option>
              {openings.map((o) => <option key={o.role}>{o.role}</option>)}
              <option>Open application</option>
            </select>
            <input name="exp" placeholder="Total experience (e.g. 2 years)" aria-label="Experience" className={field} />
            <input name="link" placeholder="Portfolio or LinkedIn link" aria-label="Portfolio or LinkedIn" className={field} />
            <textarea name="msg" rows={4} placeholder="Why would you like to join us?" aria-label="Message" className={`${field} sm:col-span-2`} />
            {err ? <p className="text-sm font-medium text-red-600 sm:col-span-2">{err}</p> : null}
            <button disabled={busy} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-4 text-sm font-bold text-white transition disabled:opacity-60 sm:col-span-2">
              {busy ? "Sending…" : "Send application"} <Send size={16} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
