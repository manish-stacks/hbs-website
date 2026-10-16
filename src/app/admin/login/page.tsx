"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight, ArrowUpRight, BarChart3, CheckCircle2, Eye, EyeOff, FileText,
  LayoutDashboard, Loader2, LockKeyhole, Mail, ShieldCheck,
} from "lucide-react";

const BARS = [38, 55, 44, 70, 58, 82, 96, 66, 80, 92];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        router.replace("/admin");
        router.refresh();
        return;
      }
      const data = await response.json().catch(() => ({}));
      setError(data.error || "Invalid email or password.");
    } catch {
      setError("Connection failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 text-[14px] text-slate-900 " +
    "placeholder:text-slate-400 outline-none transition-all " +
    "focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10";

  return (
    <main className="relative flex h-[100dvh] items-center justify-center overflow-hidden bg-[#0a0e17] p-4 sm:p-6">
      {/* Backdrop */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-red-600/30 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[520px] w-[520px] rounded-full bg-violet-600/30 blur-[150px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Card */}
      <div className="relative grid h-full max-h-[640px] w-full max-w-[1020px] overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_40px_120px_-20px_rgba(0,0,0,.7)] md:grid-cols-[1.05fr_1fr]">
        {/* Left: brand */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1a1124] via-[#14161C] to-[#2a0d14] p-9 text-white md:flex">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/30 blur-[90px]" />

          <div className="relative flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-pink-600 shadow-lg shadow-red-600/30">
              <LayoutDashboard size={22} strokeWidth={2.2} />
            </span>
            <div>
              <p className="text-lg font-extrabold leading-none tracking-tight">
                HBS<span className="text-red-500"> Admin</span>
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">Management Workspace</p>
            </div>
          </div>

          <div className="relative">
            <h1 className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.035em] xl:text-[40px]">
              Everything you need.
              <br />
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">One workspace.</span>
            </h1>
            <p className="mt-4 max-w-[34ch] text-[14px] leading-6 text-slate-400">
              Manage pages, content and leads, and keep an eye on performance from a single dashboard.
            </p>

            {/* Mini preview */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-400">Website activity</p>
                  <p className="mt-0.5 text-2xl font-bold">24.8k</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                  <ArrowUpRight size={12} /> +8.2%
                </span>
              </div>
              <div className="mt-3 flex h-12 items-end gap-1.5">
                {BARS.map((h, i) => (
                  <span key={i} className={`flex-1 rounded-t-sm ${i === BARS.length - 1 ? "bg-red-500" : "bg-red-500/30"}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <p className="mt-2 text-[10px] text-slate-500">Preview for illustration</p>
          </div>

          <ul className="relative flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
            {[
              [CheckCircle2, "Page management"],
              [FileText, "Content & SEO"],
              [BarChart3, "Lead tracking"],
            ].map(([I, t]) => {
              const Icon = I as typeof CheckCircle2;
              return (
                <li key={t as string} className="flex items-center gap-2">
                  <Icon size={14} className="text-red-500" /> {t as string}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Right: form */}
        <section className="flex flex-col justify-center overflow-y-auto px-6 py-8 sm:px-10">
          <div className="mx-auto w-full max-w-[380px]">
            {/* Mobile brand */}
            <div className="mb-6 flex items-center gap-2 md:hidden">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white">
                <LayoutDashboard size={19} />
              </span>
              <span className="text-lg font-extrabold text-slate-900">
                HBS <span className="text-red-600">Admin</span>
              </span>
            </div>

            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-red-600">
              <LockKeyhole size={22} strokeWidth={1.9} />
            </span>

            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">Admin access</p>
            <h2 className="mt-1.5 text-[32px] font-extrabold tracking-[-0.04em] text-[#191B20]">
              Welcome back<span className="text-red-600">.</span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Sign in to manage your website.</p>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="admin-email" className="mb-1.5 block text-[13px] font-semibold text-slate-700">Email address</label>
                <div className="relative">
                  <Mail size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="admin-email"
                    type="email"
                    placeholder="admin@company.com"
                    autoComplete="username"
                    autoCapitalize="none"
                    spellCheck={false}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputClass} pl-11 pr-4`}
                    required
                    disabled={busy}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="admin-password" className="mb-1.5 block text-[13px] font-semibold text-slate-700">Password</label>
                <div className="relative">
                  <LockKeyhole size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${inputClass} pl-11 pr-12`}
                    required
                    disabled={busy}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <div role="alert" className="rounded-xl border border-red-100 bg-red-50 px-4 py-2.5 text-[13px] font-medium text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={busy}
                className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-5 text-[14px] font-bold text-white shadow-[0_10px_26px_-8px_rgba(220,38,38,0.55)] transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {busy ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Signing in...
                  </>
                ) : (
                  <>
                    Sign in to dashboard
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-5 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck size={14} className="text-emerald-600" />
              Restricted to authorized administrators
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
