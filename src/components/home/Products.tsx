import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Mail,
  MapPin,
  MessageCircle,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { products } from "@/data/products";

const meta: Record<
  string,
  { icon: LucideIcon; color: string; glow: string }
> = {
  "email-marketing": {
    icon: Mail,
    color: "#6d4aff",
    glow: "rgba(109,74,255,.10)",
  },
  "gmb-posting": {
    icon: MapPin,
    color: "#e5231b",
    glow: "rgba(229,35,27,.09)",
  },
  "whatsapp-marketing": {
    icon: MessageCircle,
    color: "#12925a",
    glow: "rgba(18,146,90,.10)",
  },
  "hover-crm": {
    icon: Users,
    color: "#b98a2f",
    glow: "rgba(185,138,47,.11)",
  },
};

const fallback = {
  icon: Bot,
  color: "#171a21",
  glow: "rgba(16,19,26,.08)",
};

export function Products() {
  return (
    <section className="section-space relative overflow-hidden bg-white">
      <div className="grid-lines-light pointer-events-none absolute inset-0" />

      <div className="container-max relative">
        <SectionHead
          pill="Our own products"
          title="SaaS we built, and run our own agency on"
          sub="Not resold software. These are platforms our team built, uses daily, and licenses to clients across India."
        />

        <Reveal stagger className="mt-9 grid gap-4 md:grid-cols-2">
          {products.map((p) => {
            const m = meta[p.slug] ?? fallback;
            const Icon = m.icon;

            return (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/[0.12] hover:shadow-[0_14px_40px_rgba(16,19,26,.08)] sm:p-6"
                style={
                  {
                    "--accent": m.color,
                  } as React.CSSProperties
                }
              >
                {/* subtle hover glow */}
                <span
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: m.glow }}
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: m.color,
                      boxShadow: `0 8px 20px ${m.color}25`,
                    }}
                  >
                    <Icon size={20} />
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-[#fafafa] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        p.status === "Live"
                          ? "bg-[var(--color-success)]"
                          : "bg-[var(--color-accent)]"
                      }`}
                    />
                    {p.status}
                  </span>
                </div>

                <div className="relative mt-5">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: m.color }}
                  >
                    {p.category}
                  </p>

                  <h3 className="mt-1 font-display text-xl font-extrabold tracking-tight text-[var(--color-ink)]">
                    {p.name}
                  </h3>

                  <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-[var(--color-text-muted)]">
                    {p.tagline}
                  </p>
                </div>

                <div className="relative mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[10px] text-[var(--color-text-muted)]">
                      From
                    </span>
                    <strong className="text-base font-extrabold text-[var(--color-ink)]">
                      {p.pricing[0]!.price}
                    </strong>
                  </div>

                  <span
                    className="inline-flex items-center gap-1 text-xs font-bold transition-all duration-300 group-hover:gap-2"
                    style={{ color: m.color }}
                  >
                    View product
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </Reveal>

        {/* Compact CTA */}
        <Reveal className="mt-4">
          <div className="relative overflow-hidden rounded-2xl bg-[var(--color-ink)] px-5 py-5 sm:px-6">
            <div
              className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full blur-[70px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(229,35,27,.38), transparent 70%)",
              }}
            />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Bot size={19} />
                </span>

                <div>
                  <h3 className="text-base font-extrabold text-white">
                    Need a custom ERP or AI automation?
                  </h3>
                  <p className="mt-0.5 text-xs text-white/55">
                    We build workflows around your business.
                  </p>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="btn btn-brand group shrink-0"
              >
                Talk to us
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
