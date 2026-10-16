"use client";

import { useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle, Phone, Search, ShieldCheck, XCircle } from "lucide-react";

type Check = { id: string; group: string; label: string; status: "pass" | "warn" | "fail"; detail: string };
type Result = { url: string; score: number; checks: Check[] };
type Tab = "all" | "issues" | "passed";

const icon = {
  pass: <CheckCircle2 size={18} className="text-[var(--color-success)]" />,
  warn: <AlertTriangle size={18} className="text-[var(--color-star)]" />,
  fail: <XCircle size={18} className="text-[var(--color-brand)]" />,
};

export function AuditTool({ phone = "", whatsapp = "" }: { phone?: string; whatsapp?: string }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<Result | null>(null);
  const [tab, setTab] = useState<Tab>("all");
  const [lead, setLead] = useState({ name: "", email: "", phone: "", note: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [leadErr, setLeadErr] = useState("");

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setData(null);
    setSent(false);
    setTab("all");
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

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    if (!data) return;
    setSending(true);
    setLeadErr("");
    const host = data.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const issues = data.checks.filter((c) => c.status !== "pass").slice(0, 15).map((c) => `- ${c.label}: ${c.detail}`).join("\n");
    const message = `Website audit support request\nWebsite: ${data.url}\nScore: ${data.score}/100\n\nIssues found:\n${issues || "None"}${lead.note ? `\n\nNote from visitor:\n${lead.note}` : ""}`;
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: lead.name, email: lead.email, phone: lead.phone, subject: `Website audit: ${host} (${data.score}/100)`, message, source: "/free-website-audit" }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok) setSent(true);
      else setLeadErr(j.error ?? "Could not send. Please try again.");
    } catch {
      setLeadErr("Network error. Please try again.");
    }
    setSending(false);
  }

  const groups = data ? [...new Set(data.checks.map((c) => c.group))] : [];
  const count = (s: "pass" | "warn" | "fail") => data?.checks.filter((c) => c.status === s).length ?? 0;
  const issues = count("warn") + count("fail");
  const tone = !data ? "" : data.score >= 80 ? "var(--color-success)" : data.score >= 55 ? "var(--color-star)" : "var(--color-brand)";
  const verdict = !data ? "" : data.score >= 80 ? "Strong foundation" : data.score >= 55 ? "Room to improve" : "Needs attention";
  const shown = (data?.checks ?? []).filter((c) => (tab === "all" ? true : tab === "issues" ? c.status !== "pass" : c.status === "pass"));
  const tabs: [Tab, string, number][] = [["all", "All", data?.checks.length ?? 0], ["issues", "Issues", issues], ["passed", "Passed", count("pass")]];

  return (
    <div>
      <div className="mx-auto max-w-[820px]">
        <form onSubmit={run} className="flex flex-col gap-3 rounded-[28px] border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-lg)] sm:flex-row sm:items-center">
          <label className="flex flex-1 items-center gap-3 px-4">
            <Search size={20} className="shrink-0 text-[var(--color-brand)]" />
            <input value={url} onChange={(e) => setUrl(e.target.value)} required inputMode="url" placeholder="Enter your website, e.g. yourwebsite.com" aria-label="Website URL" className="h-14 w-full bg-transparent text-[var(--fs-lg)] outline-none placeholder:text-[var(--color-text-muted)]/70" />
          </label>
          <button disabled={loading} className="btn btn-brand !py-4 justify-center disabled:opacity-60">
            {loading ? <><Loader2 size={18} className="animate-spin" /> Analysing...</> : <>Audit my website <ArrowRight size={17} /></>}
          </button>
        </form>
        <p className="mt-3 text-center text-[var(--fs-xs)] text-[var(--color-text-muted)]">Free, instant and no sign-up. We analyse your public homepage only.</p>
        {error ? <p role="alert" className="mt-5 rounded-[var(--radius-md)] bg-[var(--color-brand-soft)] p-4 text-center text-[var(--fs-sm)] font-medium text-[var(--color-brand-dark)]">{error}</p> : null}
      </div>

      {data ? (
        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_390px]">
          {/* summary */}
          <div className="flex flex-col gap-5 rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-6 text-white sm:p-8 lg:col-start-1 lg:row-start-1">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="relative h-36 w-36 shrink-0">
                <svg viewBox="0 0 120 120" className="-rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="10" />
                  <circle cx="60" cy="60" r="52" fill="none" stroke={tone} strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(data.score / 100) * 326.7} 326.7`} />
                </svg>
                <span className="absolute inset-0 flex flex-col items-center justify-center font-display text-4xl font-extrabold">{data.score}<span className="text-[11px] font-medium text-white/50">out of 100</span></span>
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <p className="text-xs font-bold" style={{ color: tone }}>{verdict}</p>
                <h2 className="mt-1 break-all text-white" style={{ fontSize: "var(--fs-xl)" }}>{data.url.replace(/^https?:\/\//, "")}</h2>
                <p className="mt-2 text-[var(--fs-sm)] text-white/65">{issues ? `${issues} item${issues > 1 ? "s" : ""} can be improved to help you rank and convert better.` : "Everything we checked looks good."}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">{count("pass")} passed</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">{count("warn")} warnings</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">{count("fail")} failed</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
              {groups.map((g) => {
                const list = data.checks.filter((c) => c.group === g);
                const pct = Math.round((list.filter((c) => c.status === "pass").length / list.length) * 100);
                return (
                  <div key={g}>
                    <div className="flex justify-between text-xs"><span className="font-semibold">{g}</span><span className="text-white/60">{pct}%</span></div>
                    <div className="mt-1.5 h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct >= 80 ? "var(--color-success)" : pct >= 50 ? "var(--color-star)" : "var(--color-brand)" }} /></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* lead form */}
          <aside className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-md)] lg:sticky lg:top-28">
              {sent ? (
                <div className="py-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-[var(--color-success)]"><CheckCircle2 size={28} /></span>
                  <h3 className="mt-4 font-display text-xl font-bold">Request received</h3>
                  <p className="mt-2 text-[var(--fs-sm)] text-[var(--color-text-muted)]">Our team will review your report and contact you shortly with a fix plan.</p>
                </div>
              ) : (
                <form onSubmit={submitLead} className="flex flex-col gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]"><ShieldCheck size={22} /></span>
                  <h3 className="font-display text-xl font-bold">{issues ? "Get these issues fixed by experts" : "Want to grow even further?"}</h3>
                  <p className="text-[var(--fs-sm)] text-[var(--color-text-muted)]">Share your details and we will send a free, prioritised action plan for your site.</p>
                  <input className="field" placeholder="Your name" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} required />
                  <input className="field" type="email" placeholder="Email address" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} required />
                  <input className="field" type="tel" placeholder="Phone number" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} required />
                  <textarea className="field" rows={3} placeholder="Anything we should know? (optional)" value={lead.note} onChange={(e) => setLead({ ...lead, note: e.target.value })} />
                  {leadErr ? <p className="text-sm font-medium text-red-600">{leadErr}</p> : null}
                  <button disabled={sending} className="btn btn-brand justify-center disabled:opacity-60">{sending ? "Sending..." : <>Get my free action plan <ArrowRight size={17} /></>}</button>
                  <p className="text-center text-[11px] text-[var(--color-text-muted)]">Your report details are attached automatically. No spam.</p>
                </form>
              )}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[var(--color-border)] pt-4 text-sm font-semibold">
                {phone ? <a href={`tel:${phone}`} className="flex items-center gap-1.5 hover:text-[var(--color-brand)]"><Phone size={14} /> Call us</a> : null}
                {whatsapp ? <a href={whatsapp.startsWith("http") ? whatsapp : `https://wa.me/${whatsapp.replace(/\D/g, "")}`} target="_blank" className="flex items-center gap-1.5 hover:text-[var(--color-brand)]"><MessageCircle size={14} /> WhatsApp</a> : null}
                <a href="/contact-us" className="flex items-center gap-1.5 hover:text-[var(--color-brand)]"><Mail size={14} /> Contact</a>
              </div>
            </div>
          </aside>

          {/* details */}
          <div className="lg:col-start-1 lg:row-start-2">
            <div className="mb-4 flex flex-wrap gap-2">
              {tabs.map(([k, l, n]) => (
                <button key={k} type="button" onClick={() => setTab(k)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${tab === k ? "bg-[var(--color-ink)] text-white" : "border border-[var(--color-border)] bg-white hover:border-[var(--color-brand)]"}`}>{l} <span className="opacity-60">{n}</span></button>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {groups.map((g) => {
                const list = shown.filter((c) => c.group === g);
                if (!list.length) return null;
                return (
                  <div key={g} className="card p-6">
                    <h3 className="font-display text-[var(--fs-lg)] font-bold">{g}</h3>
                    <ul className="mt-4 flex flex-col gap-4">
                      {list.map((c) => (
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
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
