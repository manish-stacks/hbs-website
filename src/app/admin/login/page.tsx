
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  Loader2,
} from "lucide-react";

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
        headers: {
          "Content-Type": "application/json",
        },
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
    "w-full h-[52px] rounded-xl border border-slate-200 " +
    "bg-white text-[14px] text-slate-900 " +
    "placeholder:text-slate-400 outline-none transition-all " +
    "focus:border-red-500 focus:ring-4 focus:ring-red-500/10";

  return (
    <main className="min-h-screen bg-[#F8F9FB] lg:grid lg:grid-cols-[1fr_1fr]">

      {/* LEFT BRANDING PANEL */}
      <section className="relative hidden min-h-screen overflow-hidden bg-[#14161C] text-white lg:flex lg:flex-col">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-44 -top-40 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[130px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 flex h-full flex-1 flex-col px-10 py-10 xl:px-16 xl:py-12">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 shadow-lg shadow-red-600/20">
              <LayoutDashboard size={23} strokeWidth={2.2} />
            </div>

            <div>
              <div className="text-xl font-extrabold tracking-tight">
                HBS<span className="text-red-500"> Admin</span>
              </div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
                Management Workspace
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="my-auto max-w-[570px] py-12">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-400">
              <Sparkles size={14} />
              Your Digital Command Center
            </div>

            <h1 className="max-w-[520px] text-[40px] font-extrabold leading-[1.13] tracking-[-0.04em] xl:text-[52px]">
              Everything you need.
              <br />
              <span className="text-red-500">
                One workspace.
              </span>
            </h1>

            <p className="mt-6 max-w-[430px] text-[15px] leading-7 text-slate-400">
              Take full control of your website, manage content,
              monitor performance, and grow your business
              from one powerful dashboard.
            </p>

            {/* Dashboard Preview */}
            <div className="relative mt-10 max-w-[520px] rounded-2xl border border-white/10 bg-[#22252D] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.3)] xl:p-5">

              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/15 text-red-400">
                    <BarChart3 size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Dashboard Overview
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Your business at a glance
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  All systems active
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-white/5 bg-white/[0.045] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Total Leads
                    </span>
                    <Globe2 size={15} className="text-slate-500" />
                  </div>
                  <div className="text-2xl font-bold">1,284</div>
                  <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-400">
                    <ArrowUpRight size={12} />
                    +12.8% this month
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.045] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Page Views
                    </span>
                    <BarChart3 size={15} className="text-slate-500" />
                  </div>
                  <div className="text-2xl font-bold">24.8k</div>
                  <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-400">
                    <ArrowUpRight size={12} />
                    +8.2% this month
                  </div>
                </div>
              </div>

              {/* Mini activity chart */}
              <div className="mt-3 rounded-xl border border-white/5 bg-white/[0.045] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold">
                      Website Activity
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Last 7 days
                    </p>
                  </div>
                  <ArrowUpRight size={15} className="text-slate-500" />
                </div>

                <div className="flex h-20 items-end justify-between gap-2">
                  {[35, 55, 43, 75, 59, 85, 100, 68, 83, 95, 72, 100].map(
                    (height, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t-sm ${
                          index === 11 ? "bg-red-500" : "bg-red-500/30"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Floating activity */}
              <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-xl border border-white/10 bg-[#30343D] px-3 py-3 shadow-2xl xl:flex">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15">
                  <CheckCircle2 size={17} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold">
                    Website is live
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Everything running smoothly
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-3 text-[10px] text-slate-500">
              Dashboard preview for illustration
            </p>

            {/* Features */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-red-500" />
                Page Management
              </span>
              <span className="flex items-center gap-2">
                <FileText size={15} className="text-red-500" />
                Content & SEO
              </span>
              <span className="flex items-center gap-2">
                <BarChart3 size={15} className="text-red-500" />
                Lead Tracking
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6 text-[11px] text-slate-500">
            <span>© {new Date().getFullYear()} HBS. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} />
              Secure Admin Portal
            </span>
          </div>
        </div>
      </section>

      {/* RIGHT LOGIN SECTION */}
      <section className="flex min-h-screen flex-col bg-[#FAFAFC]">

        {/* Mobile Brand */}
        <div className="flex items-center gap-2 px-6 py-6 lg:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white">
            <LayoutDashboard size={20} />
          </div>
          <span className="text-lg font-extrabold text-slate-900">
            HBS <span className="text-red-600">Admin</span>
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8">

          <div className="w-full max-w-[410px]">

            {/* Security Icon */}
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-red-600">
              <LockKeyhole size={26} strokeWidth={1.8} />
            </div>

            {/* Heading */}
            <div className="mb-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                Admin Access
              </p>
              <h2 className="text-[34px] font-extrabold tracking-[-0.04em] text-[#191B20] sm:text-[38px]">
                Welcome back<span className="text-red-600">.</span>
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your credentials to access your
                management dashboard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="admin-email"
                  className="mb-2 block text-[13px] font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="admin-email"
                    type="email"
                    placeholder="admin@company.com"
                    autoComplete="username"
                    autoCapitalize="none"
                    spellCheck={false}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputClass} pl-12 pr-4`}
                    required
                    disabled={busy}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="admin-password"
                  className="mb-2 block text-[13px] font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${inputClass} pl-12 pr-12`}
                    required
                    disabled={busy}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-600"
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={busy}
                className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#DC2626] px-5 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(220,38,38,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-[0_12px_30px_rgba(220,38,38,0.25)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {busy ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in to dashboard
                    <ArrowRight
                      size={19}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            {/* Security notice */}
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-emerald-600"
              />

              <div>
                <p className="text-xs font-semibold text-slate-800">
                  Secure Administrator Login
                </p>
                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                  This area is restricted to authorized
                  administrators only.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center px-5 pb-7 text-[11px] text-slate-400">
          © {new Date().getFullYear()} HBS · Admin Management System
        </div>
      </section>
    </main>
  );
}
