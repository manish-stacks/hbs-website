import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight, ArrowUpRight, Phone, HeartPulse, Briefcase, GraduationCap, Factory, Store,
  Stethoscope, Smile, Dumbbell, Pill, Scale, Calculator, Shield, Compass, Handshake, FileText, Building,
  School, Landmark, BookOpen, Hotel, Plane, UtensilsCrossed, CalendarDays, Building2, HardHat, Cog, Sofa,
  Wrench, Warehouse, ShoppingBag, ShoppingCart, Shirt, Gem, Lamp, Check,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Industries We Serve | Hover Business Services LLP",
    description: "Digital marketing for healthcare, professional services, education, real estate and retail businesses.",
    path: "/industries",
  });

/* ---------------- Page content (edit here) ---------------- */

type Ind = { label: string; href: string; focus: string; icon: LucideIcon };
type Sector = { id: string; title: string; sub: string; icon: LucideIcon; tone: string; goal: string; channels: string; items: Ind[] };

const SECTORS: Sector[] = [
  {
    id: "healthcare", title: "Healthcare & Wellness", sub: "Trust-led marketing for care providers.", icon: HeartPulse, tone: "#e5231b",
    goal: "Booked appointments", channels: "Local SEO, Google Ads, reviews",
    items: [
      { label: "Hospitals", href: "/hospitals-marketing", focus: "Patient trust, local search and appointment bookings", icon: Stethoscope },
      { label: "Dental Clinics", href: "/dental-clinics-marketing", focus: "Local rankings, reviews and booked consultations", icon: Smile },
      { label: "Fitness & Wellness", href: "/fitness-wellness-marketing", focus: "Memberships, trials and community engagement", icon: Dumbbell },
      { label: "Pharmaceuticals", href: "/pharmaceuticals-marketing", focus: "Compliant content, B2B reach and brand authority", icon: Pill },
    ],
  },
  {
    id: "professional", title: "Professional Services", sub: "Credibility and steady client enquiries.", icon: Briefcase, tone: "#10131a",
    goal: "Qualified enquiries", channels: "SEO, content, LinkedIn",
    items: [
      { label: "Law Firms", href: "/law-firms-marketing", focus: "High-intent enquiries and a credible online profile", icon: Scale },
      { label: "Accounting & Finance", href: "/accounting-finance-marketing", focus: "Trust, local visibility and steady client enquiries", icon: Calculator },
      { label: "Insurance", href: "/insurance-marketing", focus: "Quote requests and long-term policyholder trust", icon: Shield },
      { label: "Consulting", href: "/consulting-marketing", focus: "Thought leadership and qualified inbound leads", icon: Compass },
      { label: "Business Services", href: "/business-services-marketing", focus: "B2B lead generation and clear positioning", icon: Handshake },
      { label: "Tax Consultants", href: "/tax-consultants-marketing", focus: "Seasonal demand, local search and client trust", icon: FileText },
      { label: "Corporate Services", href: "/corporate-services-marketing", focus: "Compliance-led credibility and consistent enquiries", icon: Building },
    ],
  },
  {
    id: "education", title: "Education & Hospitality", sub: "Admissions, bookings and reputation.", icon: GraduationCap, tone: "#b98a2f",
    goal: "Admissions & bookings", channels: "Meta ads, Google Maps, reviews",
    items: [
      { label: "Schools", href: "/schools-marketing", focus: "Admission enquiries and parent trust", icon: School },
      { label: "Colleges & Universities", href: "/colleges-universities-marketing", focus: "Application growth and programme visibility", icon: Landmark },
      { label: "Coaching Institutes", href: "/coaching-institutes-marketing", focus: "Enrolments, results proof and local reach", icon: BookOpen },
      { label: "Hotels & Resorts", href: "/hotels-resorts-marketing", focus: "Direct bookings and strong review profiles", icon: Hotel },
      { label: "Travel & Tourism", href: "/travel-tourism-marketing", focus: "Seasonal campaigns and booking enquiries", icon: Plane },
      { label: "Restaurants & Cafes", href: "/restaurants-cafes-marketing", focus: "Local discovery, reviews and online orders", icon: UtensilsCrossed },
      { label: "Event Management", href: "/event-management-marketing", focus: "Portfolio showcase and enquiry-driven leads", icon: CalendarDays },
    ],
  },
  {
    id: "industrial", title: "Real Estate & Industrial", sub: "Project leads and B2B visibility.", icon: Factory, tone: "#b8140e",
    goal: "Project & B2B leads", channels: "Google Ads, SEO, catalogues",
    items: [
      { label: "Real Estate", href: "/real-estate-marketing", focus: "Property leads, project launches and local trust", icon: Building2 },
      { label: "Construction", href: "/construction-marketing", focus: "Project enquiries and a professional portfolio", icon: HardHat },
      { label: "Manufacturing", href: "/manufacturing-marketing", focus: "B2B visibility, catalogues and export leads", icon: Cog },
      { label: "Interior Design", href: "/interior-design-marketing", focus: "Visual portfolios and design consultations", icon: Sofa },
      { label: "Industrial Equipment", href: "/industrial-equipment-marketing", focus: "Technical content and B2B quotations", icon: Wrench },
      { label: "Warehousing & Logistics", href: "/warehousing-logistics-marketing", focus: "B2B lead generation and service-area visibility", icon: Warehouse },
    ],
  },
  {
    id: "retail", title: "Retail & Lifestyle", sub: "Sales and brand growth for product businesses.", icon: Store, tone: "#27272a",
    goal: "Sales & repeat buyers", channels: "Shopping ads, Instagram, SEO",
    items: [
      { label: "Ecommerce", href: "/ecommerce-marketing", focus: "Traffic, conversion and repeat purchases", icon: ShoppingCart },
      { label: "Retail Stores", href: "/retail-stores-marketing", focus: "Footfall, local search and online sales", icon: ShoppingBag },
      { label: "Fashion & Apparel", href: "/fashion-apparel-marketing", focus: "Visual social growth and seasonal campaigns", icon: Shirt },
      { label: "Jewellery", href: "/jewellery-marketing", focus: "Trust, premium branding and showroom visits", icon: Gem },
      { label: "Home Decor", href: "/home-decor-marketing", focus: "Visual storytelling and online orders", icon: Lamp },
      { label: "Furniture", href: "/furniture-marketing", focus: "Product visibility, showroom visits and enquiries", icon: Sofa },
    ],
  },
];

const APPROACH = [
  { t: "Learn how your buyers decide", b: "A patient picks a clinic differently from a factory picking a supplier. We map that journey first." },
  { t: "Use the language of your industry", b: "Content and ads written with the terms, rules and proof points your customers expect." },
  { t: "Pick channels that fit", b: "Maps and reviews for local services, LinkedIn and SEO for B2B, Instagram for lifestyle brands." },
  { t: "Measure what matters to you", b: "Appointments, admissions, quotations or orders, tracked and reported every month." },
];

/* ---------------- Page ---------------- */

export default async function IndustriesPage() {
  const co = await getCompany();
  const all = SECTORS.flatMap((s) => s.items.map((i) => ({ ...i, sector: s.id })));

  return (
    <div className="ind text-[var(--color-ink)]">
      <style>{`
        .ind h1,.ind h2,.ind h3{color:inherit}
        @keyframes ind-in{from{opacity:0;transform:translateY(.4em)}to{opacity:1;transform:none}}
        .ind-word{animation:ind-in .5s cubic-bezier(.2,.7,.2,1) both}
        @media (prefers-reduced-motion:reduce){.ind-word{animation:none}}
      `}</style>

      {/* HERO — industry wall */}
      <section className="border-b border-[var(--color-border)] pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="container-max">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-display text-lg font-bold text-[var(--color-brand)]">Industries we serve</p>
              <h1 className="mt-3 max-w-[18ch] font-display font-extrabold" style={{ fontSize: "clamp(2.6rem,5.8vw,4.8rem)", lineHeight: 1.02, letterSpacing: "-0.035em" }}>
                Marketing shaped around how your customers buy.
              </h1>
            </div>
            <div className="flex gap-8">
              <div><p className="font-display text-5xl font-extrabold">{all.length}</p><p className="text-sm text-[var(--color-text-muted)]">industries</p></div>
              <div><p className="font-display text-5xl font-extrabold">{SECTORS.length}</p><p className="text-sm text-[var(--color-text-muted)]">sectors</p></div>
            </div>
          </div>

          <p className="mt-10 text-sm text-[var(--color-text-muted)]">Find yours:</p>
          <div className="mt-3 flex flex-wrap gap-x-1 gap-y-1 font-display font-bold" style={{ fontSize: "clamp(1.25rem,2.4vw,2rem)", lineHeight: 1.25 }}>
            {all.map((it, i) => (
              <Link
                key={it.href}
                href={it.href}
                className="ind-word group inline-flex items-center gap-1 rounded-xl px-2 text-[var(--color-ink)]/45 transition-colors hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand)]"
                style={{ animationDelay: `${i * 0.025}s` }}
              >
                {it.label}
                <ArrowUpRight className="h-[.7em] w-[.7em] opacity-0 transition-opacity group-hover:opacity-100" />
                {i < all.length - 1 && <span className="ml-1 text-[var(--color-border)]">/</span>}
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {SECTORS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--color-ink)]">
                <s.icon size={15} style={{ color: s.tone }} /> {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-14 md:py-20">
        <div className="container-max space-y-6">
          {SECTORS.map((s, si) => (
            <div key={s.id} id={s.id} className="scroll-mt-28 overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-white">
              <div className="grid lg:grid-cols-[340px_1fr]">
                <div className="relative overflow-hidden p-8 text-white md:p-10" style={{ background: s.tone }}>
                  <s.icon className="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 opacity-10" strokeWidth={1.2} />
                  <s.icon size={30} />
                  <h2 className="mt-6 font-display text-3xl font-extrabold">{s.title}</h2>
                  <p className="mt-2 text-white/75">{s.sub}</p>
                  <dl className="relative mt-8 space-y-4 text-sm">
                    <div><dt className="text-white/60">Main goal</dt><dd className="font-semibold">{s.goal}</dd></div>
                    <div><dt className="text-white/60">Channels that work</dt><dd className="font-semibold">{s.channels}</dd></div>
                  </dl>
                </div>
                <div className={`grid gap-px bg-[var(--color-border)] sm:grid-cols-2 ${si % 2 ? "xl:grid-cols-3" : "xl:grid-cols-2"}`}>
                  {s.items.map((it) => (
                    <Link key={it.href} href={it.href} className="group flex flex-col bg-white p-6 transition-colors hover:bg-[var(--color-surface)]">
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface-2)] transition-colors group-hover:bg-[var(--color-brand)] group-hover:text-white">
                          <it.icon size={20} />
                        </span>
                        <ArrowUpRight size={17} className="text-[var(--color-text-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-bold">{it.label}</h3>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{it.focus}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
        <div className="container-max grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Same team. Different playbook for every industry.</h2>
            <p className="mt-5 text-white/65">We don&apos;t copy-paste campaigns. Every plan starts with how people in your market search, compare and decide.</p>
          </div>
          <ol className="space-y-px overflow-hidden rounded-3xl bg-white/10">
            {APPROACH.map((a, i) => (
              <li key={a.t} className="flex gap-5 bg-[var(--color-ink)] p-6">
                <span className="font-display text-2xl font-extrabold text-[var(--color-brand)]">{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-bold">{a.t}</h3>
                  <p className="mt-1 text-sm text-white/60">{a.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <div className="grid items-center gap-8 rounded-[32px] border-2 border-[var(--color-ink)] p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-4xl">Don&apos;t see your industry?</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">We have worked with businesses well beyond this list. Tell us what you sell and who buys it.</p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                {["Free market audit", "Competitor check", "Channel plan"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5"><Check size={15} className="text-[var(--color-brand)]" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-4 text-sm font-bold text-white">Talk to an expert <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-7 py-4 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
