"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowRight, Briefcase, ChevronDown, Clock, MapPin, Send } from "lucide-react";

type Opening = { role: string; team: string; type: string; location: string; exp: string; points: string[] };
const field = "w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--fs-sm)] outline-none transition focus:border-[var(--color-ink)]";

export function CareerBoard({ openings }: { openings: Opening[] }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const teams = ["All", ...Array.from(new Set(openings.map((o) => o.team)))];
  const [team, setTeam] = useState("All");
  const [openRole, setOpenRole] = useState<string | null>(null);
  const [role, setRole] = useState("");
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
    setErr((await r.json().catch(() => ({}))).error || "Could not send. Please try again.");
    setBusy(false);
  }

  return (
    <>
      <section id="openings" className="section-space bg-[var(--color-surface)]">
        <div className="container-max">
          <div className="mx-auto max-w-[56ch] text-center">
            <span className="pill">Open roles</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>{openings.length} positions open right now</h2>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter roles by team">
            {teams.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={team === t}
                onClick={() => setTeam(t)}
                className={`rounded-full border px-5 py-2 text-[var(--fs-xs)] font-semibold transition sm:text-[var(--fs-sm)] ${team === t ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white!" : "border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-ink)]"}`}
              >
                {t}
              </button>
            ))}
          </div>

          <ul className="mx-auto mt-10 flex max-w-[900px] flex-col gap-4">
            {list.map((o) => {
              const isOpen = openRole === o.role;
              return (
                <li key={o.role} className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-brand)] bg-white shadow-[var(--shadow-sm)]">
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <button onClick={() => setOpenRole(isOpen ? null : o.role)} aria-expanded={isOpen} className="flex flex-1 items-start justify-between gap-4 text-left">
                      <span>
                        <span className="block font-display text-[var(--fs-lg)] font-bold">{o.role}</span>
                        <span className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-[var(--fs-xs)] text-[var(--color-text-muted)]">
                          <span className="inline-flex items-center gap-1.5"><Briefcase size={13} className="text-[var(--color-brand)]" />{o.team}</span>
                          <span className="inline-flex items-center gap-1.5"><MapPin size={13} className="text-[var(--color-brand)]" />{o.location}</span>
                          <span className="inline-flex items-center gap-1.5"><Clock size={13} className="text-[var(--color-brand)]" />{o.type} · {o.exp}</span>
                        </span>
                      </span>
                      <ChevronDown size={18} className={`mt-1 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <button onClick={() => apply(o.role)} className="btn btn-brand shrink-0">Apply now <ArrowRight size={16} /></button>
                  </div>
                  <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">What you will do</p>
                        <ul className="mt-3 flex flex-col gap-2 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                          {o.points.map((p) => (
                            <li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="apply" className="section-space scroll-mt-28">
        <div className="container-max">
          <div className="mx-auto max-w-[56ch] text-center">
            <span className="pill">Apply</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>Tell us about yourself</h2>
            <p className="mt-3 text-[var(--fs-sm)] text-[var(--color-text-muted)]">Fill in the form and attach your CV in the email that opens. We reply to every application.</p>
          </div>
          <form onSubmit={submit} className="card mx-auto mt-10 grid max-w-[760px] gap-4 p-6 sm:grid-cols-2 sm:p-8">
            <input name="name" required placeholder="Full name" aria-label="Full name" className={field} />
            <input name="phone" required type="tel" placeholder="Phone number" aria-label="Phone number" className={field} />
            <input name="email" required type="email" placeholder="Email address" aria-label="Email address" className={field} />
            <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required aria-label="Role" className={field}>
              <option value="">Select a role</option>
              {openings.map((o) => <option key={o.role}>{o.role}</option>)}
              <option>Open application</option>
            </select>
            <input name="exp" placeholder="Total experience (e.g. 2 years)" aria-label="Experience" className={field} />
            <input name="link" placeholder="Portfolio or LinkedIn link" aria-label="Portfolio or LinkedIn" className={`${field} sm:col-span-2`} />
            <textarea name="msg" rows={4} placeholder="Why would you like to join us?" aria-label="Message" className={`${field} sm:col-span-2`} />
            {err ? <p className="text-sm font-medium text-red-600 sm:col-span-2">{err}</p> : null}
            <button disabled={busy} className="btn btn-brand justify-center disabled:opacity-60 sm:col-span-2">{busy ? "Sending..." : "Submit application"} <Send size={16} /></button>
          </form>
        </div>
      </section>
    </>
  );
}
