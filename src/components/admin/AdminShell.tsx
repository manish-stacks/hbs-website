"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AdminHeader } from "./AdminHeader";
import { AdminNav } from "./AdminNav";

export function AdminShell({ children, email, newLeads }: { children: React.ReactNode; email: string; newLeads: number }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);

  return (
    <div className="bg-[var(--color-surface)] bg-[radial-gradient(circle_at_85%_0%,rgba(229,35,27,.07),transparent_38%),radial-gradient(circle_at_0%_100%,rgba(124,58,237,.06),transparent_40%)] bg-fixed">
      <AdminNav newLeads={newLeads} open={open} onClose={() => setOpen(false)} />
      {open ? <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden" onClick={() => setOpen(false)} /> : null}
      <div className="min-h-screen lg:pl-[260px]">
        <div className="sticky top-0 z-30"><AdminHeader email={email} onMenu={() => setOpen(true)} /></div>
        <main className="mx-auto w-full">{children}</main>
      </div>
    </div>
  );
}
