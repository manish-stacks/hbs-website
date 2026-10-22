"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Code,
  Mail,
  Megaphone,
  Menu,
  PenTool,
  Phone,
  Search,
  Smartphone,
  X,
} from "lucide-react";
import type { ComponentType } from "react";
import type { Company, MenuItem } from "@/lib/settings";
import { MENU_ICONS } from "@/lib/menuIcons";
import { TopBar } from "./TopBar";

const groupIcons: Record<
  string,
  ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
> = {
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

type NavGroup = {
  heading: string;
  icon?: string;
  links: { label: string; href: string }[];
};

function DropGroup({
  g,
  onClose,
}: {
  g: NavGroup;
  onClose?: () => void;
}) {
  const Icon =
    (g.icon && MENU_ICONS[g.icon]) || groupIcons[g.heading] || Search;

  return (
    <div className="group/g">
      <div className="mb-3 flex items-center gap-2.5 border-b border-[var(--color-border)] pb-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand)] transition-transform duration-300 group-hover/g:scale-110">
          <Icon size={18} strokeWidth={1.8} />
        </span>
        <p className="text-[14px] font-bold leading-tight text-[var(--color-ink)]">
          {g.heading}
        </p>
      </div>
      <ul className="flex flex-col gap-0.5">
        {g.links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              onClick={onClose}
              className="group/l flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[13.5px] leading-snug text-[#4a5468] transition-colors duration-150 hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand)]"
            >
              <ChevronRight
                size={11}
                strokeWidth={3}
                className="shrink-0 text-[var(--color-brand)] opacity-60 transition-all group-hover/l:translate-x-0.5 group-hover/l:opacity-100"
              />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header({
  company,
  nav,
}: {
  company: Company;
  nav: MenuItem[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setMobileSub(null);
    setActiveDropdown(null);
  };

  useEffect(() => {
    closeAll();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0" : "max-h-11"
        }`}
      >
        <TopBar company={company} />
      </div>

      {/* main bar */}
      <div
        className={`border-b bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled
            ? "border-[var(--color-border)] shadow-[0_4px_24px_rgba(11,21,38,.07)]"
            : "border-transparent"
        }`}
      >
        <div className="container-max flex h-[70px] items-center justify-between gap-6">
          <Link
            href="/"
            onClick={closeAll}
            className="flex shrink-0 items-center"
            aria-label={`${company.name} home`}
          >
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
            {nav.map((item) => {
              const hasDropdown = Boolean(item.groups?.length);
              const isCurrent =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className={`relative flex h-[70px] items-center ${
                    item.groups && item.groups.length > 1 ? "" : "relative"
                  }`}
                  onMouseEnter={() => {
                    if (hasDropdown) setActiveDropdown(item.label);
                  }}
                  onMouseLeave={() => {
                    if (hasDropdown) setActiveDropdown(null);
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className={`relative flex items-center gap-1 whitespace-nowrap px-3 py-2 text-[15px] font-semibold transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-[var(--color-brand)] after:transition-transform after:duration-300 hover:text-[var(--color-brand)] hover:after:scale-x-100 xl:px-3.5 ${
                      isCurrent
                        ? "text-[var(--color-brand)] after:scale-x-100"
                        : "text-[var(--color-ink)] after:scale-x-0"
                    }`}
                  >
                    {item.label}
                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[var(--color-brand)]" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {hasDropdown && isOpen && (
                    <>
                      {item.groups!.length > 1 ? (
                        <div className="fixed inset-x-0 top-[70px] z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                          <div className="border-t-2 border-[var(--color-brand)] bg-white shadow-[0_24px_50px_rgba(16,19,26,.14)]">
                            <div className="container-max py-6">
                              <div
                                className="grid gap-x-6"
                                style={{
                                  gridTemplateColumns: `repeat(${item.groups!.length}, minmax(0, 1fr))`,
                                }}
                              >
                                {item.groups!.map((g) => (
                                  <DropGroup
                                    key={g.heading}
                                    g={g}
                                    onClose={closeAll}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="border-t border-[var(--color-border)] bg-[#f8f9fb]">
                              <div className="container-max flex items-center justify-between gap-4 py-3 text-[13px]">
                                <span className="text-[#4a5468]">
                                  Not sure where to start? Our team will suggest
                                  the right plan for your business.
                                </span>
                                <span className="flex items-center gap-5 font-semibold">
                                  <Link
                                    href="/free-website-audit"
                                    onClick={closeAll}
                                    className="text-[var(--color-brand)] hover:underline"
                                  >
                                    Free Website Audit
                                  </Link>
                                  <Link
                                    href="/contact-us"
                                    onClick={closeAll}
                                    className="inline-flex items-center gap-1 text-[var(--color-ink)] hover:text-[var(--color-brand)]"
                                  >
                                    Talk to an expert <ArrowRight size={14} />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute left-1/2 top-full z-50 w-[280px] -translate-x-1/2 animate-in fade-in slide-in-from-top-1 duration-200">
                          <div className="rounded-b-2xl border-t-2 border-[var(--color-brand)] bg-white p-5 shadow-[0_24px_50px_rgba(16,19,26,.14)]">
                            <DropGroup
                              g={item.groups![0]!}
                              onClose={closeAll}
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/free-website-audit"
              onClick={closeAll}
              className="group hidden items-center gap-3 whitespace-nowrap rounded-full bg-[var(--color-ink)] py-1.5 pl-5 pr-1.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(10,14,23,.6)] transition-transform hover:-translate-y-0.5 xl:inline-flex"
            >
              Free Website Audit
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight size={16} />
              </span>
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
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-max py-6">
          {nav.map((item) => (
            <div
              key={item.label}
              className="border-b border-[var(--color-border)]"
            >
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={closeAll}
                  className="flex-1 py-4 font-display text-lg font-bold"
                >
                  {item.label}
                </Link>
                {item.groups?.length ? (
                  <button
                    onClick={() =>
                      setMobileSub(
                        mobileSub === item.label ? null : item.label
                      )
                    }
                    aria-label={`Toggle ${item.label}`}
                    className="p-2"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileSub === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : null}
              </div>

              {item.groups?.length ? (
                <div
                  className="grid transition-all duration-300"
                  style={{
                    gridTemplateRows:
                      mobileSub === item.label ? "1fr" : "0fr",
                  }}
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
                                <Link
                                  href={href}
                                  onClick={closeAll}
                                  className="text-[var(--fs-sm)] text-[var(--color-text-muted)] hover:text-[var(--color-brand)]"
                                >
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

          <Link
            href="/free-website-audit"
            onClick={closeAll}
            className="btn btn-brand mt-6 w-full text-center"
          >
            Free Website Audit <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact-us"
            onClick={closeAll}
            className="btn btn-accent mt-3 w-full text-center"
          >
            Get free proposal <ArrowRight size={16} />
          </Link>
          <a
            href={`tel:${company.phone}`}
            onClick={closeAll}
            className="btn btn-ghost mt-3 w-full text-center"
          >
            <Phone size={16} /> {company.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
