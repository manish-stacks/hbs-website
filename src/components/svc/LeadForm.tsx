"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const field =
  "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-[14px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--a)] focus:bg-white focus:ring-4 focus:ring-[var(--a)]/10";

export function LeadForm({ service, title }: { service: string; title: string }) {
  const path = usePathname();
  const [f, setF] = useState({ name: "", email: "", phone: "", message: "", budget: "" });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setErr("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: f.name, email: f.email, phone: f.phone, message: `${f.message || `Interested in ${service}.`}${f.budget ? `\n\nMonthly budget: ${f.budget}` : ""}`, subject: `${service} enquiry`, source: path }),
      });
      if (r.ok) setDone(true);
      else setErr(((await r.json().catch(() => ({}))) as { error?: string }).error || "Something went wrong. Please try again.");
    } catch {
      setErr("Connection failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (done)
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
        <CheckCircle2 size={48} className="text-emerald-500" />
        <p className="mt-4 font-display text-xl font-extrabold text-slate-900">Thank you!</p>
        <p className="mt-2 max-w-[28ch] text-sm text-slate-500">We have received your details and will get back to you shortly.</p>
      </div>
    );

  return (
    <form onSubmit={submit} className="space-y-3">
      <p className="font-display text-xl font-extrabold text-slate-900">{title}</p>
      <p className="pb-1 text-[13px] text-slate-500">Tell us a little and we will reply with a free, no-obligation plan.</p>
      <input className={field} placeholder="Your name" value={f.name} onChange={set("name")} required autoComplete="name" />
      <input className={field} type="email" placeholder="Email address" value={f.email} onChange={set("email")} required autoComplete="email" />
      <input className={field} type="tel" placeholder="Phone number" value={f.phone} onChange={set("phone")} required autoComplete="tel" />
      <select className={field} value={f.budget} onChange={set("budget")} aria-label="Monthly budget">
        <option value="">Monthly budget (optional)</option>
        <option>Below ₹25,000</option><option>₹25,000 - ₹75,000</option><option>₹75,000 - ₹2,00,000</option><option>Above ₹2,00,000</option>
      </select>
      <textarea className={`${field} h-24 resize-none py-3`} placeholder="Your website / what you need (optional)" value={f.message} onChange={set("message")} />
      {err ? <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-[13px] font-medium text-red-600">{err}</p> : null}
      <button
        type="submit"
        disabled={busy}
        className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--a)] text-[14px] font-bold text-white shadow-[0_12px_28px_-10px_var(--a)] transition hover:-translate-y-0.5 disabled:opacity-60"
      >
        {busy ? <><Loader2 size={17} className="animate-spin" /> Sending...</> : <>Get free proposal <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></>}
      </button>
    </form>
  );
}
