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
    <div className="bg-[var(--color-surface)]">
      <AdminNav newLeads={newLeads} open={open} onClose={() => setOpen(false)} />
      {open ? <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden" onClick={() => setOpen(false)} /> : null}
      <div className="min-h-screen lg:pl-[260px]">
        <div className="sticky top-0 z-30"><AdminHeader email={email} onMenu={() => setOpen(true)} /></div>
        <main className="mx-auto w-full">{children}</main>
      </div>
    </div>
  );
}
