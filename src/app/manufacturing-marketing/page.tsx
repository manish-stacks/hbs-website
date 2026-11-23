import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Check, ChevronRight, Cog, Compass, MapPin, Phone, Plus, Search, Star, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Digital Marketing for Manufacturing Companies & OEMs | HBS",
    description: "Generate high-value B2B industrial leads and export contracts. Specialized manufacturing SEO, technical content, and B2B PPC by Hover Business Services LLP.",
    path: "/manufacturing-marketing",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Industries",
  "href": "/industries"
};

const PAGE = {
  "title": "Digital Marketing for Industrial & Manufacturing Companies",
  "eyebrow": "B2B Industrial Growth & RFQ Funnels",
  "tagline": "High-value B2B inquiry funnels, industrial SEO, and global supplier positioning for precision manufacturers, OEMs, and exporters.",
  "intro": "Modern procurement managers, industrial engineers, and corporate supply chain directors research equipment and OEM partners online long before contacting sales representatives. Hover Business Services LLP builds industrial digital marketing engines that position your manufacturing plant as the premier global supplier, driving high-ticket Requests for Quotes (RFQs) and recurring commercial contracts."
};

type HeroData = { icon: string; journey: string[] };
const HERO: HeroData = {
  "icon": "Cog",
  "journey": [
    "cnc machined parts supplier",
    "Downloads the catalogue",
    "Sends an RFQ"
  ]
};

const STATS: [string, string][] = [
  [
    "₹120Cr+",
    "Commercial RFQ Pipeline Generated"
  ],
  [
    "45+",
    "Countries Reached for Export Clients"
  ],
  [
    "100%",
    "B2B Focused Inquiries"
  ]
];

const BENEFITS = [
  {
    "t": "Generate Direct High-Ticket Requests for Quote (RFQs)",
    "b": "Capture domestic and international procurement buyers searching for specific material grades, tolerances, and batch manufacturing."
  },
  {
    "t": "Technical Industrial SEO & Part Number Targeting",
    "b": "Rank for specific industrial component terms, ASTM/ISO standards, custom fabrication keywords, and technical specifications."
  },
  {
    "t": "Showcase Plant Capabilities & Machinery Fleet",
    "b": "Display your square footage, CNC/VMC axis capabilities, cleanroom certifications, and testing laboratories to instill buyer confidence."
  },
  {
    "t": "Global Export Positioning & Overseas Buyers",
    "b": "Target lucrative export markets across North America, Europe, the Middle East, and Australia seeking reliable alternative supply chains."
  },
  {
    "t": "Account-Based Marketing (ABM) on LinkedIn",
    "b": "Directly target procurement directors and engineering vice presidents at Fortune 500 enterprises with targeted digital campaigns."
  },
  {
    "t": "Digital Technical Product Catalogues & CAD Gates",
    "b": "Gate 2D/3D CAD models, material safety data sheets (MSDS), and technical whitepapers to capture verified buyer contact details."
  }
];

const INCLUDES = [
  "Industrial Technical SEO & Specification Mapping",
  "High-Converting Industrial Website Architecture",
  "B2B Search Marketing (Google Ads for Industrial)",
  "LinkedIn Account-Based Marketing (ABM)",
  "Technical Case Studies & Application Whitepapers",
  "International Export Market Expansion"
];

const PROCESS = [
  {
    "t": "Plant Audit & Manufacturing Scope",
    "b": "We review your manufacturing capacities, minimum order quantities (MOQ), machinery specs, and highest-margin product lines."
  },
  {
    "t": "Technical SEO & Digital Catalogue Setup",
    "b": "We optimize component categories, upload downloadable specification sheets, and implement multi-step RFQ submission forms."
  },
  {
    "t": "B2B Search & Procurement Targeting",
    "b": "We deploy precision search ads and technical content campaigns targeting verified procurement professionals and engineers."
  },
  {
    "t": "RFQ Lead Quality Review & Scaling",
    "b": "We analyze incoming RFQs with your sales engineering team, refining keyword targeting to focus exclusively on high-value contracts."
  }
];

const FAQS = [
  {
    "q": "How do you target corporate procurement managers instead of retail buyers?",
    "a": "We use strict B2B negative keyword lists (excluding terms like \"DIY\", \"home use\", \"cheap\", \"single piece\") and target commercial terms like \"contract manufacturer\", \"OEM supplier\", \"bulk wholesale\", and \"ASTM standard fabrication\"."
  },
  {
    "q": "Can our website accept technical drawings and 3D CAD files safely?",
    "a": "Yes. We build secure, encrypted multi-file upload modules on your RFQ forms supporting .STEP, .DWG, .DXF, and .PDF files with non-disclosure agreement (NDA) acknowledgment prompts."
  },
  {
    "q": "How does SEO work for niche industrial components?",
    "a": "Engineers search for exact part specifications, material grades (e.g., \"SS 316L precision turned parts\"), and machinery tolerances. We build dedicated technical landing pages for each capability to capture these ultra-high-intent queries."
  },
  {
    "q": "Can digital marketing help us find international export buyers?",
    "a": "Yes! International procurement heads actively search Google for reliable offshore contract manufacturers. We optimize your visibility in target countries like the USA, Germany, the UAE, and the UK."
  },
  {
    "q": "How long does it take to start receiving viable manufacturing RFQs?",
    "a": "Targeted Google Search campaigns often produce verified commercial inquiries within 2 to 4 weeks, while organic industrial SEO builds durable compound domain authority over 3 to 6 months."
  },
  {
    "q": "Do you help with LinkedIn marketing for industrial sales teams?",
    "a": "Yes. We run LinkedIn Account-Based Marketing (ABM) targeting supply chain heads, procurement executives, and plant managers at specific target corporations."
  }
];

const RELATED = [
  {
    "label": "Technical SEO",
    "href": "/technical-seo"
  },
  {
    "label": "B2B Lead Generation",
    "href": "/lead-generation"
  },
  {
    "label": "Corporate Services Marketing",
    "href": "/corporate-services-marketing"
  },
  {
    "label": "SEO Audit Services",
    "href": "/seo-audit"
  }
];

const OVERVIEW: string[] | null = [
  "Industrial and B2B manufacturing cycles are complex, high-ticket, and involve multiple technical decision-makers: procurement heads, plant managers, design engineers, and financial controllers. Traditional reliance on annual trade expos and word-of-mouth leaves manufacturers vulnerable to agile, digitally visible competitors.",
  "When global buyers search for custom CNC machining, specialty polymer extrusion, metal fabrication, packaging machinery, or electrical components, your plant needs to appear at the exact moment of commercial specification.",
  "Hover Business Services LLP builds industrial growth pipelines tailored specifically for precision engineering, OEM/ODM suppliers, and industrial exporters. We combine technical SEO, CAD/spec sheet downloads, LinkedIn Account-Based Marketing (ABM), and international export directory positioning."
];

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Manufacturers Need Digital B2B Lead Generation",
  "sub": "Bypass trade show dependency and build a predictable pipeline of high-ticket RFQs.",
  "items": [
    {
      "t": "Generate Direct High-Ticket Requests for Quote (RFQs)",
      "b": "Capture domestic and international procurement buyers searching for specific material grades, tolerances, and batch manufacturing."
    },
    {
      "t": "Technical Industrial SEO & Part Number Targeting",
      "b": "Rank for specific industrial component terms, ASTM/ISO standards, custom fabrication keywords, and technical specifications."
    },
    {
      "t": "Showcase Plant Capabilities & Machinery Fleet",
      "b": "Display your square footage, CNC/VMC axis capabilities, cleanroom certifications, and testing laboratories to instill buyer confidence."
    },
    {
      "t": "Global Export Positioning & Overseas Buyers",
      "b": "Target lucrative export markets across North America, Europe, the Middle East, and Australia seeking reliable alternative supply chains."
    },
    {
      "t": "Account-Based Marketing (ABM) on LinkedIn",
      "b": "Directly target procurement directors and engineering vice presidents at Fortune 500 enterprises with targeted digital campaigns."
    },
    {
      "t": "Digital Technical Product Catalogues & CAD Gates",
      "b": "Gate 2D/3D CAD models, material safety data sheets (MSDS), and technical whitepapers to capture verified buyer contact details."
    }
  ]
};

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = {
  "title": "Our Industrial Marketing Capabilities",
  "sub": "Engineered specifically for heavy engineering, contract manufacturing, and component exporters.",
  "items": [
    {
      "t": "Industrial Technical SEO & Specification Mapping",
      "b": "In-depth SEO optimizing your website for complex engineering parameters, OEM capabilities, and niche industrial search queries.",
      "f": [
        "Material grade keyword targeting",
        "ISO/CE certification schema",
        "Technical part number optimization"
      ]
    },
    {
      "t": "High-Converting Industrial Website Architecture",
      "b": "Prestigious industrial web design engineered to showcase factory virtual tours, equipment lists, and friction-free RFQ quote request forms.",
      "f": [
        "Interactive capacity checklists",
        "Multi-file CAD upload for RFQs",
        "Mobile-responsive industrial design"
      ]
    },
    {
      "t": "B2B Search Marketing (Google Ads for Industrial)",
      "b": "Highly focused Google Search campaigns targeting high-intent commercial buyers while aggressively filtering out DIY retail traffic.",
      "f": [
        "Wholesale & B2B intent keyword filters",
        "High negative keyword suppression",
        "Geo-targeted industrial corridors"
      ]
    },
    {
      "t": "LinkedIn Account-Based Marketing (ABM)",
      "b": "Precision targeting of supply chain managers, procurement executives, and Chief Technology Officers at designated target accounts.",
      "f": [
        "Job title & company size filtering",
        "Sponsored technical case studies",
        "Direct InMail executive outreach"
      ]
    },
    {
      "t": "Technical Case Studies & Application Whitepapers",
      "b": "Engineering-grade case studies detailing how your plant solved tolerance issues, lowered cycle times, and reduced client scrap rates.",
      "f": [
        "Written with engineering comprehension",
        "Before/after quality metrics",
        "Downloadable technical PDF format"
      ]
    },
    {
      "t": "International Export Market Expansion",
      "b": "Strategic digital expansion into high-margin export countries looking for China+1 manufacturing partners in India.",
      "f": [
        "Multi-currency and export freight FAQs",
        "Country-specific landing pages",
        "International search engine indexing"
      ]
    }
  ]
};

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Manufacturing Sectors We Serve",
  "sub": "Tailored for specialized industrial suppliers and contract manufacturers.",
  "items": [
    {
      "t": "Precision CNC Machining & Fabrication",
      "b": "Custom metal fabrication, sheet metal stamping, laser cutting, and precision CNC/VMC turned component suppliers."
    },
    {
      "t": "Plastics, Polymers & Extrusion",
      "b": "Injection molding, blow molding, thermoforming, and specialty polymer manufacturers serving automotive and medical sectors."
    },
    {
      "t": "Industrial Equipment & Heavy Machinery",
      "b": "Manufacturers of packaging machines, conveyor systems, material handling equipment, and automated assembly lines."
    },
    {
      "t": "Chemical, Pharmaceutical & Raw Material Plants",
      "b": "Bulk chemical synthesizers, API manufacturers, packaging film converters, and specialty industrial lubricant suppliers."
    }
  ]
};

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Choose Hover Business Services LLP for Manufacturing?",
  "sub": "B2B marketing specialists who speak the language of engineering.",
  "items": [
    {
      "t": "Technical Comprehension",
      "b": "We understand tolerances, tensile strength, ISO certifications, MOQs, and engineering drawings. We don’t write fluffy marketing jargon."
    },
    {
      "t": "Elimination of Consumer Junk Traffic",
      "b": "We meticulously filter out retail hobbyists and one-off consumers, directing your marketing budget exclusively at commercial buyers."
    },
    {
      "t": "Export Market Proven Track Record",
      "b": "We have helped Indian manufacturers secure recurring multi-million-dollar supply contracts with clients in the US, Germany, and the UK."
    },
    {
      "t": "Commercial RFQ Pipeline Tracking",
      "b": "We track real commercial inquiries, blueprint uploads, and closed contract values to prove measurable bottom-line ROI."
    }
  ]
};

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = null;

const ICONS = [Compass, Users, BadgeCheck, BarChart3, MapPin, Star];
const IndustryIcon = Cog;

/* ============================== Page ============================== */

export default async function ManufacturingMarketingPage() {
  const co = await getCompany();

  return (
    <div className="sx text-[var(--color-ink)]">
      <style>{`
        .sx h1,.sx h2,.sx h3{color:inherit}
        @keyframes sx-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes sx-bar{from{transform:scaleY(.1)}to{transform:scaleY(1)}}
        @keyframes sx-line{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}}
        @keyframes sx-pop{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
        @keyframes sx-card{from{opacity:0;transform:translateY(-24px) rotate(var(--r,0deg))}to{opacity:1;transform:rotate(var(--r,0deg))}}
        @keyframes sx-dash{to{stroke-dashoffset:-12}}
        .sx-rise{animation:sx-rise .7s cubic-bezier(.2,.7,.2,1) both}
        .sx-bar{transform-origin:bottom;animation:sx-bar 1s cubic-bezier(.2,.7,.2,1) both}
        .sx-line{animation:sx-line .45s ease-out both}
        .sx-pop{animation:sx-pop .6s .8s cubic-bezier(.2,.7,.2,1) both}
        .sx-card{transform:rotate(var(--r,0deg));animation:sx-card .8s cubic-bezier(.2,.8,.2,1) both}
        .sx-dash{animation:sx-dash 1.2s linear infinite}
        @media (prefers-reduced-motion:reduce){.sx-rise,.sx-bar,.sx-line,.sx-pop,.sx-card,.sx-dash{animation:none}}
      `}</style>

      <section className="relative overflow-hidden bg-[var(--color-ink)] pb-16 pt-10 text-white md:pb-24 md:pt-14">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--color-brand)] opacity-30 blur-[120px]" />
        <div className="container-max relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="hover:underline">Home</Link><ChevronRight size={13} />
            <Link href={HUB.href} className="hover:underline">{HUB.label}</Link><ChevronRight size={13} />
            <span className="text-white">{PAGE.eyebrow}</span>
          </nav>
          <h1 className="mt-5 font-display font-extrabold" style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.04, letterSpacing: "-0.035em" }}>{PAGE.title}</h1>
          <p className="mt-5 max-w-[54ch] text-lg text-white/70">{PAGE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)] transition-transform hover:-translate-y-0.5">Get a free quote <ArrowRight size={16} /></Link>
            <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold border-white/30 text-white"><Phone size={15} /> {co.phone}</a>
          </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--color-ink)] pb-12 text-white">
        <div className="container-max grid gap-4 sm:grid-cols-3">
          {STATS.map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><p className="font-display text-3xl font-extrabold">{v}</p><p className="mt-1 text-sm text-white/60">{l}</p></div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
        <div className="container-max">
          <h2 className="max-w-[22ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "Why businesses choose this"}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className="flex gap-5 rounded-3xl border border-white/10 bg-white/[.04] p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand)]"><I size={22} /></span>
                  <div><h3 className="font-display text-lg font-bold">{b.t}</h3><p className="mt-1.5 text-sm text-white/60">{b.b}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max max-w-4xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{PAGE.eyebrow}, done properly</h2>
          <p className="mt-6 border-l-4 border-[var(--color-brand)] pl-5 text-lg text-[var(--color-ink)]">{PAGE.intro}</p>
          {OVERVIEW?.map((p, i) => <p key={i} className="mt-5 text-[var(--color-text-muted)]">{p}</p>)}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Scope of work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((x) => (
              <div key={x} className="rounded-2xl border-l-4 border-[var(--color-brand)] bg-[var(--color-surface)] p-5 font-semibold">{x}</div>
            ))}
          </div>
        </div>
      </section>

      {DELIVERABLES && (
        <section className="py-16 md:py-24">
          <div className="container-max">
            <h2 className="max-w-[24ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{DELIVERABLES.title}</h2>
            {DELIVERABLES.sub && <p className="mt-2 text-[var(--color-text-muted)]">{DELIVERABLES.sub}</p>}
            <div className="mt-10 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.items.map((d) => (
                <div key={d.t} className="border-t-2 border-[var(--color-ink)] py-6">
                  <h3 className="font-display text-lg font-bold">{d.t}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{d.b}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{d.f.map((f) => <span key={f} className="rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-medium">{f}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">The process</h2>
          <ol className="mt-10 space-y-3">
            {PROCESS.map((s, i) => (
              <li key={s.t} className="grid items-center gap-4 rounded-3xl border border-[var(--color-border)] p-6 md:grid-cols-[80px_1fr_1.6fr]">
                <span className="font-display text-4xl font-extrabold text-[var(--color-brand)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl font-bold">{s.t}</h3>
                <p className="text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {GALLERY && (
        <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
          <div className="container-max">
            <h2 className="max-w-[22ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{GALLERY.title}</h2>
            {GALLERY.sub && <p className="mt-2 max-w-[60ch] text-white/60">{GALLERY.sub}</p>}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.items.map((g) => (
                <figure key={g.title} className="group overflow-hidden rounded-2xl bg-white/[.04]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={g.image} alt={g.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="p-5">
                    <span className="text-xs font-semibold text-[var(--color-brand)]">{g.tag}</span>
                    <p className="mt-1 font-display font-bold">{g.title}</p>
                    {g.b && <p className="mt-1.5 text-sm text-white/60">{g.b}</p>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {AUDIENCES && (
        <section className="bg-[var(--color-surface)] py-16 md:py-20">
          <div className="container-max">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{AUDIENCES.title}</h2>
            {AUDIENCES.sub && <p className="mt-2 text-[var(--color-text-muted)]">{AUDIENCES.sub}</p>}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AUDIENCES.items.map((a) => (
                <div key={a.t} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-sm)]">
                  <Users size={20} className="text-[var(--color-brand)]" />
                  <h3 className="mt-3 font-display font-bold">{a.t}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{a.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {WHY_HBS && (
        <section className="py-16 md:py-24">
          <div className="container-max grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY_HBS.title}</h2>
              {WHY_HBS.sub && <p className="mt-3 text-[var(--color-text-muted)]">{WHY_HBS.sub}</p>}
            </div>
            <ul className="space-y-4">
              {WHY_HBS.items.map((w) => (
                <li key={w.t} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Check size={15} /></span>
                  <div><h3 className="font-display text-lg font-bold">{w.t}</h3><p className="mt-1 text-[var(--color-text-muted)]">{w.b}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="container-max max-w-4xl">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">FAQs</h2>
          <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[32px] bg-[var(--color-ink)] p-8 text-white md:p-12">
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[var(--color-brand)] opacity-40 blur-[100px]" />
            <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div><h2 className="font-display text-3xl font-extrabold md:text-4xl">Start this week</h2><p className="mt-2 text-white/65">One call. A clear plan. No long contracts.</p></div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold">Book a call <ArrowRight size={16} /></Link>
                <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-12">
        <div className="container-max flex flex-col gap-5 md:flex-row md:items-center">
          <p className="shrink-0 font-display font-bold">Related services</p>
          <div className="flex flex-wrap gap-2">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]">{r.label}<ArrowUpRight size={14} /></Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- hero visual for this page ---------- */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] text-[var(--color-ink)]">
      <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-lg)]">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand)] text-white"><IndustryIcon size={22} /></span>
          <div><p className="text-xs text-[var(--color-text-muted)]">How your customer buys</p><p className="font-display font-bold">{PAGE.eyebrow}</p></div>
        </div>
        <ol className="mt-6 space-y-2">
          {HERO.journey.map((s, i) => (
            <li key={s}>
              <div className={`sx-rise flex items-center gap-3 rounded-2xl p-3.5 text-sm ${i === 2 ? "bg-[var(--color-ink)] font-bold text-white" : "bg-[var(--color-surface)]"}`} style={{ animationDelay: `${0.2 + i * 0.25}s` }}>
                {i === 0 ? <Search size={16} className="shrink-0 text-[var(--color-brand)]" /> : i === 2 ? <Check size={16} className="shrink-0 text-[var(--color-brand)]" /> : <span className="h-4 w-4 shrink-0 rounded-full border-2 border-[var(--color-brand)]" />}
                <span className={i === 0 ? "font-medium italic" : ""}>{i === 0 ? `“${s}”` : s}</span>
              </div>
              {i < 2 && <ArrowDown size={14} className="mx-auto my-1 text-[var(--color-text-muted)]" />}
            </li>
          ))}
        </ol>
        <p className="mt-5 rounded-xl bg-[var(--color-brand-soft)] px-4 py-2.5 text-xs font-semibold text-[var(--color-brand-dark)]">We put your business in front of them at every step.</p>
      </div>
    </div>
  );
}
