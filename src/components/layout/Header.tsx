"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, ChevronRight, Code, Mail, Megaphone, Menu, PenTool, Phone, Search, Smartphone, X } from "lucide-react";
import type { ComponentType } from "react";
import type { Company, MenuItem } from "@/lib/settings";
import { MENU_ICONS } from "@/lib/menuIcons";

const groupIcons: Record<string, ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  "SEO Services": Search,
  "Paid & Social": Megaphone,
  "Web Design & Development": Code,
  "Apps & Software": Smartphone,
  "Creative Communication": PenTool,
  "Email Marketing": Mail,
  "GMB Management": Phone,
  "WhatsApp Marketing": Smartphone,
  "AI Automation": Code,
  "Performance Marketing": Megaphone,
  "Digital Marketing": Search,
  "Social Media": Smartphone,
  "Web & App Development": Code,
  "Lead Generation": Megaphone,
};

type NavGroup = { heading: string; icon?: string; links: { label: string; href: string }[] };

function DropGroup({ g }: { g: NavGroup }) {
  const Icon = (g.icon && MENU_ICONS[g.icon]) || groupIcons[g.heading] || Search;
  return (
    <div>
      <Icon size={40} strokeWidth={1.4} className="text-[var(--color-brand)]" />
      <p className="mb-3 mt-5 text-[15px] font-bold text-[var(--color-ink)]">{g.heading}</p>
      <ul className="flex flex-col gap-2.5">
        {g.links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="group/l flex items-start gap-2 text-[14px] text-[#4a5468] transition-colors hover:text-[var(--color-brand)]"
            >
              <ChevronRight size={12} strokeWidth={3} className="mt-[5px] shrink-0 text-[var(--color-brand)]" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header({ company, nav }: { company: Company; nav: MenuItem[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* top bar */}
      <div className="hidden bg-[var(--color-ink)] text-white md:block">
        <div className="container-max flex h-10 items-center justify-between text-[var(--fs-xs)]">
          <div className="flex items-center gap-5">
            <a href={`tel:${company.phone}`} className="flex items-center gap-1.5 hover:text-[#ff8a84]">
              <Phone size={13} /> {company.phone}
            </a>
            <a href={`tel:${company.phoneNz}`} className="hidden hover:text-[#ff8a84] lg:inline">
              NZ {company.phoneNz}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-[#ff8a84]">
              <Mail size={13} /> {company.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href={company.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#ff8a84]">
              WhatsApp
            </a>
            <a href={company.pay} target="_blank" rel="noreferrer" className="hover:text-[#ff8a84]">
              Pay Now
            </a>
            <a href={company.crm} target="_blank" rel="noreferrer" className="hover:text-[#ff8a84]">
              Client Login
            </a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`border-b bg-white transition-shadow duration-300 ${
          scrolled ? "border-[var(--color-border)] shadow-[0_4px_24px_rgba(11,21,38,.07)]" : "border-transparent"
        }`}
      >
        <div className="container-max flex h-[70px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center" aria-label={`${company.name} home`}>
            <Image
              src={company.logo || "/icon.svg"}
              alt={company.logoAlt || company.name}
              width={190}
              height={46}
              priority
              className="h-14! w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className={`group flex h-[70px] items-center ${item.groups && item.groups.length < 2 ? "relative" : ""}`}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[var(--fs-sm)] font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
                >
                  {item.label}
                  {item.groups?.length ? (
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  ) : null}
                </Link>

                {item.groups?.length ? (
                  (item.groups?.length ?? 0) > 1 ? (
                    <div className="invisible absolute inset-x-0 top-full z-10 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="border-t-2 border-[var(--color-brand)] bg-white shadow-[0_24px_50px_rgba(16,19,26,.12)]">
                        <div className="container-max flex justify-center py-7">
                          {item.groups.map((g) => (
                            <div key={g.heading} className="w-[260px] border-l border-[var(--color-border)] px-8 first:border-l-0">
                              <DropGroup g={g} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="invisible absolute left-1/2 top-full z-10 w-[300px] -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="border-t-2 border-[var(--color-brand)] bg-white p-6 shadow-[0_24px_50px_rgba(16,19,26,.12)]">
                        <DropGroup g={item.groups![0]!} />
                      </div>
                    </div>
                  )
                ) : null}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/free-website-audit" className="btn btn-accent hidden sm:inline-flex">
              Free Website Audit <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--color-border)] lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[70px] overflow-y-auto bg-white transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-max py-6">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-[var(--color-border)]">
              <div className="flex items-center justify-between">
                <Link href={item.href} className="flex-1 py-4 font-display text-lg font-bold">
                  {item.label}
                </Link>
                {item.groups?.length ? (
                  <button
                    onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                    aria-label={`Toggle ${item.label}`}
                    className="p-2"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${mobileSub === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : null}
              </div>

              {item.groups?.length ? (
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: mobileSub === item.label ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-4 pl-1">
                      {item.groups.map((g) => (
                        <div key={g.heading} className="mb-4">
                          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                            {g.heading}
                          </p>
                          <ul className="mt-2 flex flex-col gap-2">
                            {g.links.map(({ label, href }) => (
                              <li key={label}>
                                <Link href={href} className="text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                                  {label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}

          <Link href="/contact-us" className="btn btn-accent mt-6 w-full">
            Get free proposal <ArrowRight size={16} />
          </Link>
          <a href={`tel:${company.phone}`} className="btn btn-ghost mt-3 w-full">
            <Phone size={16} /> {company.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
