"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut, Menu, Plus, Search } from "lucide-react";
import { GROUPS, type GroupKey } from "@/lib/settings";

const names: Record<string, string> = { pages: "Pages", services: "Services", blog: "Blog posts", leads: "Contact leads", settings: "Settings", search: "Search", new: "New", preview: "Preview" };

export function AdminHeader({ email, onMenu }: { email: string; onMenu: () => void }) {
  const path = usePathname();
  const router = useRouter();
  const [q, setQ] = useState("");

  const parts = path.split("/").filter(Boolean).slice(1);
  const crumbs = parts.map((p, i) => (parts[i - 1] === "settings" && GROUPS[p as GroupKey] ? GROUPS[p as GroupKey].label : names[p] ?? p));
  const trail = crumbs.length ? crumbs : ["Dashboard"];

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <header className="flex h-16 items-center gap-3 border-b border-[var(--color-border)] bg-white px-4 sm:px-6">
      <button onClick={onMenu} className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[var(--color-surface-2)] lg:hidden" aria-label="Open menu"><Menu size={20} /></button>

      <nav aria-label="Breadcrumb" className="hidden min-w-0 items-center gap-2 text-sm sm:flex">
        <span className="text-[var(--color-text-muted)]">Admin</span>
        {trail.map((c, i) => (
          <span key={i} className="flex min-w-0 items-center gap-2">
            <span className="text-[var(--color-border)]">/</span>
            <span className={`max-w-[180px] truncate ${i === trail.length - 1 ? "font-bold" : "text-[var(--color-text-muted)]"}`}>{c}</span>
          </span>
        ))}
      </nav>

      <form onSubmit={(e) => { e.preventDefault(); if (q.trim()) router.push(`/admin/search?q=${encodeURIComponent(q.trim())}`); }} className="relative mx-auto w-full max-w-[420px] flex-1">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search pages, services, posts..." className="h-10 w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] pl-10 pr-4 text-sm outline-none transition focus:border-[var(--color-brand)] focus:bg-white" />
      </form>

      <div className="ml-auto flex shrink-0 items-center gap-3">
        <Link href="/admin/pages/new" className="hidden h-10 items-center gap-1.5 rounded-full bg-[var(--color-brand)] px-4 text-xs font-bold text-white transition-colors hover:bg-[var(--color-brand-dark)] sm:flex"><Plus size={15} /> New page</Link>
        <span className="hidden h-6 w-px bg-[var(--color-border)] md:block" />
        <div className="hidden items-center gap-2.5 md:flex">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-ink)] text-sm font-bold uppercase text-white">{email.charAt(0) || "A"}</span>
          <span className="max-w-[160px] truncate text-sm font-medium">{email}</span>
        </div>
        <button onClick={logout} title="Log out" aria-label="Log out" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"><LogOut size={16} /></button>
      </div>
    </header>
  );
}
