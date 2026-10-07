"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    if (r.ok) {
      router.replace("/admin");
      router.refresh();
      return;
    }
    setError((await r.json().catch(() => ({}))).error || "Login failed");
    setBusy(false);
  }

  const inp = "w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/15";
  return (
    <div className="flex min-h-screen items-center justify-center p-5" style={{ background: "linear-gradient(135deg,#10131a 0%,#2a1215 55%,#b8140e 100%)" }}>
      <form onSubmit={submit} className="w-full max-w-[400px] rounded-[var(--radius-lg)] bg-white p-8 shadow-[var(--shadow-lg)]">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand)] text-white"><Lock size={20} /></span>
        <h1 className="mt-5 font-display text-2xl font-extrabold">Admin login</h1>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">Sign in to manage pages, services and blog posts.</p>
        <div className="mt-6 flex flex-col gap-3">
          <input className={inp} type="email" placeholder="Email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className={inp} type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error ? <p className="mt-3 text-sm font-medium text-red-600">{error}</p> : null}
        <button disabled={busy} className="btn btn-brand mt-6 w-full justify-center disabled:opacity-60">{busy ? "Signing in..." : "Sign in"}</button>
      </form>
    </div>
  );
}
