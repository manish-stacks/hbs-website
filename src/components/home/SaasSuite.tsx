"use client";

import Link from "next/link";
import { ArrowUpRight, BarChart3, Bot, Mail, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";

const items = [
  {
    icon: MapPin, name: "GMB Pro", href: "/products/gmb-posting",
    desc: "Google Business posts, reviews aur rank tracking — AI se auto-manage. Local search me #1 aao.",
    tags: ["Auto posting", "Review replies", "Rank tracker"],
    color: "#e5231b", glow: "rgba(229,35,27,.14)", span: "lg:col-span-2",
  },
  {
    icon: Mail, name: "Email Marketing", href: "/products/email-marketing",
    desc: "Campaigns, journeys aur deliverability ek dashboard me.",
    tags: ["Automation", "A/B test"],
    color: "#6d4aff", glow: "rgba(109,74,255,.14)", span: "",
  },
  {
    icon: MessageCircle, name: "WhatsApp Marketing", href: "/products/whatsapp-marketing",
    desc: "Bulk broadcast, chatbots aur click-to-chat funnels.",
    tags: ["Broadcast", "Chatbot"],
    color: "#12925a", glow: "rgba(18,146,90,.14)", span: "",
  },
  {
    icon: BarChart3, name: "ERP System", href: "/contact-us",
    desc: "CRM, billing, inventory, HR aur reports — poora business ek jagah se control.",
    tags: ["CRM", "Invoicing", "Inventory", "HR"],
    color: "#19c3e6", glow: "rgba(25,195,230,.16)", span: "",
  },
  {
    icon: Bot, name: "AI Automation", href: "/contact-us",
    desc: "Har product ke andar AI agents jo repetitive kaam khud karte hain — lead reply se lekar reporting tak.",
    tags: ["AI agents", "Workflows", "Custom"],
    color: "#b98a2f", glow: "rgba(185,138,47,.16)", span: "lg:col-span-2",
  },
];

export function SaasSuite() {
  return (
    <section className="section-space relative overflow-hidden bg-[var(--color-surface)]">
      <div className="grid-lines-light pointer-events-none absolute inset-0" />
      <div className="container-max relative">
        <SectionHead
          pill="The HBS suite"
          title={<>Ek suite, <span className="text-gradient-ai">poora business</span></>}
          sub="Hamare in-house SaaS products — marketing se operations tak, sab AI automation ke saath connected."
        />

        <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className={`bento group flex flex-col p-6 sm:p-7 ${p.span}`}
              style={{ ["--glow" as string]: p.glow }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: `${p.color}18`, color: p.color }}
                >
                  <p.icon size={22} />
                </span>
                <ArrowUpRight size={20} className="text-[var(--color-text-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]" />
              </div>
              <h3 className="mt-6 font-display text-[var(--fs-xl)] font-extrabold">{p.name}</h3>
              <p className="mt-2 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-[11px] font-semibold text-[var(--color-ink)]">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
