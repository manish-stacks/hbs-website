"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Briefcase, ChevronDown, ExternalLink, FileText, Home, Inbox, LayoutDashboard, Newspaper, Settings, Wrench, X } from "lucide-react";
import { GROUPS, type GroupKey } from "@/lib/settings";

type Icon = typeof Settings;

const CONTENT: { href: string; label: string; Icon: Icon }[] = [
  { href: "/admin/pages", label: "Pages", Icon: FileText },
  { href: "/admin/services", label: "Services", Icon: Wrench },
  { href: "/admin/blog", label: "Blog posts", Icon: Newspaper },
];

const SECTIONS: { title: string; Icon: Icon; keys: GroupKey[] }[] = [
  { title: "Site settings", Icon: Settings, keys: ["general", "seo", "pageSeo", "menu", "footer"] },
  { title: "Home page", Icon: Home, keys: ["hero", "about", "stats", "services", "whyUs", "industries", "reviews", "clients", "team", "faqs", "offices", "contactCta"] },
  { title: "Portfolio & careers", Icon: Briefcase, keys: ["work", "career", "jobs"] },
];

const label = "px-3 pb-1 pt-5 text-[11px] font-bold uppercase tracking-wider text-white/40";

export function AdminNav({ newLeads = 0, open, onClose }: { newLeads?: number; open: boolean; onClose: () => void }) {
  const path = usePathname();
  const [toggled, setToggled] = useState<Record<string, boolean>>({});
  const active = (href: string) => (href === "/admin" ? path === href : path === href || path.startsWith(`${href}/`));
  const isOpen = (title: string, keys: GroupKey[]) => toggled[title] ?? keys.some((k) => path === `/admin/settings/${k}`);

  const row = (on: boolean) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${on ? "bg-[var(--color-brand)] text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`;

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col bg-[var(--color-ink)] text-white transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5">
        <Link href="/admin" className="font-display text-lg font-extrabold">HBS <span className="text-[var(--color-brand)]">Admin</span></Link>
        <button onClick={onClose} className="text-white/70 hover:text-white lg:hidden" aria-label="Close menu"><X size={20} /></button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-6" data-lenis-prevent>
        <div className="pt-4">
          <Link href="/admin" onClick={onClose} className={row(active("/admin"))}><LayoutDashboard size={17} /> Dashboard</Link>
        </div>

        <p className={label}>Content</p>
        <div className="flex flex-col gap-1">
          {CONTENT.map(({ href, label: l, Icon }) => (
            <Link key={href} href={href} onClick={onClose} className={row(active(href))}><Icon size={17} /> {l}</Link>
          ))}
        </div>

        <p className={label}>Inbox</p>
        <Link href="/admin/leads" onClick={onClose} className={row(active("/admin/leads"))}>
          <Inbox size={17} /> Leads & applications
          {newLeads ? <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-[var(--color-brand)]">{newLeads}</span> : null}
        </Link>

        <p className={label}>Website settings</p>
        <div className="flex flex-col gap-1">
          {SECTIONS.map(({ title, Icon, keys }) => {
            const o = isOpen(title, keys);
            return (
              <div key={title}>
                <button type="button" onClick={() => setToggled((s) => ({ ...s, [title]: !o }))} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white" aria-expanded={o}>
                  <Icon size={17} /> {title}
                  <ChevronDown size={15} className={`ml-auto transition-transform ${o ? "rotate-180" : ""}`} />
                </button>
                {o ? (
                  <div className="ml-[22px] mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                    {keys.map((k) => {
                      const href = `/admin/settings/${k}`;
                      const on = path === href;
                      return (
                        <Link key={k} href={href} onClick={onClose} className={`rounded-md px-3 py-1.5 text-[13px] transition-colors ${on ? "bg-white/10 font-semibold text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}>
                          {GROUPS[k].label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </nav>

      <div className="shrink-0 border-t border-white/10 p-3">
        <a href="/" target="_blank" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"><ExternalLink size={16} /> View website</a>
      </div>
    </aside>
  );
}
