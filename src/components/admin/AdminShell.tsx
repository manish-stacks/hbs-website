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
    <div>
      <AdminNav newLeads={newLeads} open={open} onClose={() => setOpen(false)} />
      {open ? <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setOpen(false)} /> : null}
      <div className="min-h-screen lg:pl-[260px]">
        <AdminHeader email={email} onMenu={() => setOpen(true)} />
        {children}
      </div>
    </div>
  );
}
