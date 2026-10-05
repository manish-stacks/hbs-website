"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2, Search, XCircle } from "lucide-react";

type Check = { id: string; group: string; label: string; status: "pass" | "warn" | "fail"; detail: string };
type Result = { url: string; score: number; checks: Check[] };

const icon = {
  pass: <CheckCircle2 size={18} className="text-[var(--color-success)]" />,
  warn: <AlertTriangle size={18} className="text-[var(--color-star)]" />,
  fail: <XCircle size={18} className="text-[var(--color-brand)]" />,
};

export function AuditTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<Result | null>(null);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setData(null);
    try {
      const r = await fetch("/api/audit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }) });
      const j = await r.json();
      if (!r.ok) setError(j.error ?? "Something went wrong.");
      else setData(j);
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  }

  const groups = data ? [...new Set(data.checks.map((c) => c.group))] : [];
  const fails = data?.checks.filter((c) => c.status !== "pass").length ?? 0;
  const tone = !data ? "" : data.score >= 80 ? "var(--color-success)" : data.score >= 55 ? "var(--color-star)" : "var(--color-brand)";
  const verdict = !data ? "" : data.score >= 80 ? "Strong foundation" : data.score >= 55 ? "Room to improve" : "Needs attention";

  return (
    <div className="mx-auto max-w-[860px]">
      <form onSubmit={run} className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-md)] sm:flex-row">
        <label className="flex flex-1 items-center gap-3 px-4">
          <Search size={18} className="text-[var(--color-brand)]" />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            inputMode="url"
            placeholder="yourwebsite.com"
            aria-label="Website URL"
            className="h-12 w-full bg-transparent text-[var(--fs-base)] outline-none placeholder:text-[var(--color-text-muted)]"
          />
        </label>
        <button disabled={loading} className="btn btn-brand justify-center disabled:opacity-60">
          {loading ? <><Loader2 size={17} className="animate-spin" /> Analysing…</> : <>Audit my website <ArrowRight size={17} /></>}
        </button>
      </form>
      <p className="mt-3 text-center text-[var(--fs-xs)] text-[var(--color-text-muted)]">Free, instant and no sign-up. We analyse your public homepage only.</p>

      {error ? <p role="alert" className="mt-6 rounded-[var(--radius-md)] bg-[var(--color-brand-soft)] p-4 text-center text-[var(--fs-sm)] font-medium text-[var(--color-brand-dark)]">{error}</p> : null}

      {data ? (
        <div className="mt-10">
          <div className="flex flex-col items-center gap-6 rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-8 text-white sm:flex-row sm:p-10">
            <div className="relative h-32 w-32 shrink-0">
              <svg viewBox="0 0 120 120" className="-rotate-90">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="10" />
                <circle cx="60" cy="60" r="52" fill="none" stroke={tone} strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(data.score / 100) * 326.7} 326.7`} />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-display text-4xl font-extrabold">{data.score}</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">{verdict}</p>
              <h2 className="mt-1 break-all text-white" style={{ fontSize: "var(--fs-xl)" }}>{data.url.replace(/^https?:\/\//, "")}</h2>
              <p className="mt-2 text-[var(--fs-sm)] text-white/65">{fails ? `${fails} item${fails > 1 ? "s" : ""} can be improved to help you rank and convert better.` : "Everything we checked looks good."}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {groups.map((g) => (
              <div key={g} className="card p-6">
                <h3 className="font-display text-[var(--fs-lg)] font-bold">{g}</h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {data.checks.filter((c) => c.group === g).map((c) => (
                    <li key={c.id} className="flex gap-3">
                      <span className="mt-0.5 shrink-0">{icon[c.status]}</span>
                      <div>
                        <p className="text-[var(--fs-sm)] font-semibold">{c.label}</p>
                        <p className="text-[var(--fs-xs)] leading-relaxed text-[var(--color-text-muted)]">{c.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-[var(--fs-lg)] font-bold">Want these fixed by experts?</h3>
              <p className="mt-1 text-[var(--fs-sm)] text-[var(--color-text-muted)]">Our team will review this report and send a prioritised action plan.</p>
            </div>
            <Link href="/contact-us" className="btn btn-brand shrink-0">Get my action plan <ArrowRight size={17} /></Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
