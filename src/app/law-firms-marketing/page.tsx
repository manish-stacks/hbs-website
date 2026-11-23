import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Check, ChevronRight, Compass, MapPin, Phone, Plus, Scale, Search, Star, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Digital Marketing for Law Firms & Lawyers | Legal SEO | HBS",
    description: "Generate high-intent client inquiries for your law practice. Specialized legal SEO, Google Local 3-Pack, reputation management, and Bar-compliant marketing.",
    path: "/law-firms-marketing",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Industries",
  "href": "/industries"
};

const PAGE = {
  "title": "Digital Marketing Services for Law Firms & Attorneys",
  "eyebrow": "Legal Growth & Client Intake Funnels",
  "tagline": "High-intent client acquisition, Local 3-Pack domination, and reputation marketing tailored for law practices and advocates.",
  "intro": "When individuals and corporate executives face legal challenges, they turn to search engines with high commercial urgency. Hover Business Services LLP builds compliant, high-converting digital marketing systems for law firms, solo advocates, and corporate legal practices. We drive qualified client consultations through localized SEO, Bar Council-compliant content, and precision search marketing."
};

type HeroData = { icon: string; journey: string[] };
const HERO: HeroData = {
  "icon": "Scale",
  "journey": [
    "property lawyer in delhi",
    "Reads expertise and reviews",
    "Books a consultation"
  ]
};

const STATS: [string, string][] = [
  [
    "+185%",
    "Average Increase in Legal Inquiries"
  ],
  [
    "100%",
    "Bar Council Guideline Compliant"
  ],
  [
    "#1 Rank",
    "In Local 3-Pack for Core Practice Terms"
  ]
];

const BENEFITS = [
  {
    "t": "Capture Urgent, High-Intent Legal Searches",
    "b": "Position your practice at the very top of Google when potential clients search for legal counsel in your specific jurisdiction."
  },
  {
    "t": "Dominate Google Local 3-Pack & Maps",
    "b": "Over 65% of private legal inquiries originate from local map results. We optimize your Google Business Profile for near-me legal queries."
  },
  {
    "t": "Strict Regulatory & Bar Council Compliance",
    "b": "All content, website copy, and informational guides are crafted to comply with legal ethics rules and non-solicitation guidelines."
  },
  {
    "t": "High-Value Practice Area Targeting",
    "b": "Attract lucrative commercial litigation, corporate advisory, tax consultancy, and real estate retainers rather than low-quality leads."
  },
  {
    "t": "Frictionless & Confidential Client Intake",
    "b": "Streamlined appointment booking, confidential intake forms, and automated consultation scheduling integrated into your calendar."
  },
  {
    "t": "Authoritative Thought Leadership & Digital PR",
    "b": "Publish legal analysis, case commentaries, and whitepapers that earn backlinks and establish your partners as industry experts."
  }
];

const INCLUDES = [
  "Practice Area SEO & Keyword Domination",
  "Google Business Profile & Local 3-Pack",
  "Authority Legal Content & Case Commentaries",
  "High-Converting Law Firm Website Design",
  "Legal Reputation & Review Management",
  "Precision Legal Search Advertising (PPC)"
];

const PROCESS = [
  {
    "t": "Practice Area & Jurisdiction Audit",
    "b": "We analyze your target legal practice areas, partner credentials, local competitors, and prospective client search behaviors."
  },
  {
    "t": "Compliant Content & Technical SEO Blueprint",
    "b": "We architect comprehensive practice area pages, structured FAQ schemas, and optimize your Google Business Profiles."
  },
  {
    "t": "Authority Building & Citation Deployment",
    "b": "We publish in-depth legal commentary and build citations on authoritative legal directories and regional business registries."
  },
  {
    "t": "Client Intake Optimization & Reporting",
    "b": "We track confidential inquiries, phone consultations, and search ranking movements, continuously refining conversion funnels."
  }
];

const FAQS = [
  {
    "q": "Is digital marketing for law firms legal under Bar Council regulations in India?",
    "a": "Yes, when executed ethically. Rule 36 of the Bar Council of India allows advocates to maintain websites providing factual information regarding their practice areas, contact details, and qualifications. Our marketing focuses on educational content and discoverability rather than overt advertisement."
  },
  {
    "q": "How does Local SEO help law firms attract nearby clients?",
    "a": "When prospective clients need an advocate, they search for terms like \"corporate lawyer near me\" or \"property dispute lawyer in [City]\". Local SEO positions your Google Business Profile in the top 3 map results with your phone number and office directions."
  },
  {
    "q": "Can you help us target high-ticket corporate retainers rather than small matters?",
    "a": "Yes. By developing in-depth content around corporate compliance, M&A due diligence, international arbitration, and commercial contracts, we attract business owners, CFOs, and enterprise procurement teams."
  },
  {
    "q": "How do you handle client reviews while maintaining attorney-client privilege?",
    "a": "We implement voluntary, confidential review collection systems that allow satisfied corporate and private clients to share feedback without disclosing confidential matter details."
  },
  {
    "q": "How long does it take for a law firm website to rank on Google?",
    "a": "Local map visibility improvements often emerge within 6 to 8 weeks, while organic rankings for competitive legal practice areas generally compound over 3 to 6 months."
  },
  {
    "q": "Can our website integrate direct appointment scheduling for legal consultations?",
    "a": "Yes. We integrate secure scheduling tools (such as Calendly or custom booking forms) with automated calendar syncing and optional consultation fee payments."
  }
];

const RELATED = [
  {
    "label": "Local SEO Services",
    "href": "/local-seo"
  },
  {
    "label": "Content Writing Services",
    "href": "/content-writing"
  },
  {
    "label": "Corporate Services Marketing",
    "href": "/corporate-services-marketing"
  },
  {
    "label": "Technical SEO",
    "href": "/technical-seo"
  }
];

const OVERVIEW: string[] | null = [
  "Marketing a legal practice requires an entirely different approach than selling consumer products. Prospective legal clients are dealing with stressful, high-stakes situations—corporate mergers, criminal defense, family disputes, intellectual property violations, or personal injury claims. They demand instant reassurance of your discretion, track record, and jurisdictional competence.",
  "Furthermore, legal marketing must strictly adhere to regulatory advertising guidelines (such as Bar Council of India regulations and regional legal advertising standards). Outlandish guarantees or aggressive promotional language violate ethics and erode trust.",
  "Hover Business Services LLP specializes in building authoritative legal marketing engines. We focus on non-promotional educational authority, deep practice-area SEO, Google Business Profile optimization for local client searches, and frictionless, confidential client intake funnels."
];

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Law Firms Need Specialized Legal Marketing",
  "sub": "Capture high-value corporate and private retainers through authority and visibility.",
  "items": [
    {
      "t": "Capture Urgent, High-Intent Legal Searches",
      "b": "Position your practice at the very top of Google when potential clients search for legal counsel in your specific jurisdiction."
    },
    {
      "t": "Dominate Google Local 3-Pack & Maps",
      "b": "Over 65% of private legal inquiries originate from local map results. We optimize your Google Business Profile for near-me legal queries."
    },
    {
      "t": "Strict Regulatory & Bar Council Compliance",
      "b": "All content, website copy, and informational guides are crafted to comply with legal ethics rules and non-solicitation guidelines."
    },
    {
      "t": "High-Value Practice Area Targeting",
      "b": "Attract lucrative commercial litigation, corporate advisory, tax consultancy, and real estate retainers rather than low-quality leads."
    },
    {
      "t": "Frictionless & Confidential Client Intake",
      "b": "Streamlined appointment booking, confidential intake forms, and automated consultation scheduling integrated into your calendar."
    },
    {
      "t": "Authoritative Thought Leadership & Digital PR",
      "b": "Publish legal analysis, case commentaries, and whitepapers that earn backlinks and establish your partners as industry experts."
    }
  ]
};

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = {
  "title": "Our Legal Digital Marketing Capabilities",
  "sub": "A structured, ethical growth system built exclusively for legal professionals.",
  "items": [
    {
      "t": "Practice Area SEO & Keyword Domination",
      "b": "Dedicated search optimization for each specific legal discipline (Corporate Law, IPR, Criminal Defense, Family Law, Arbitration).",
      "f": [
        "Jurisdiction-specific keyword targeting",
        "Semantic legal entity optimization",
        "In-depth case law content structure"
      ]
    },
    {
      "t": "Google Business Profile & Local 3-Pack",
      "b": "Comprehensive optimization of your law office Google Maps presence across key regional metropolitan areas.",
      "f": [
        "Legal category & citation auditing",
        "Review management strategy",
        "Localized geo-targeted signals"
      ]
    },
    {
      "t": "Authority Legal Content & Case Commentaries",
      "b": "Researched legal articles, legislative update summaries, and informative guides that answer common client legal questions.",
      "f": [
        "Law graduate written & reviewed",
        "Bar Council compliant format",
        "FAQ schema markup for rich snippets"
      ]
    },
    {
      "t": "High-Converting Law Firm Website Design",
      "b": "Sleek, prestigious website architecture showcasing attorney credentials, landmark case outcomes, and instant consultation booking.",
      "f": [
        "Fast mobile-first experience",
        "Confidential client intake forms",
        "Secure SSL & data protection standards"
      ]
    },
    {
      "t": "Legal Reputation & Review Management",
      "b": "Cultivate authentic client testimonials and verified reviews across Google, Justdial, Sulekha, and legal directories.",
      "f": [
        "Automated post-case review prompts",
        "Reputation sentiment monitoring",
        "Negative review defense protocols"
      ]
    },
    {
      "t": "Precision Legal Search Advertising (PPC)",
      "b": "Where compliant, high-intent Google Search ad campaigns targeting prospective clients actively seeking immediate representation.",
      "f": [
        "Strict negative keyword lists",
        "Emergency legal query capture",
        "Call-only ad campaigns for rapid contact"
      ]
    }
  ]
};

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Which Legal Practices Benefit Most?",
  "sub": "Engineered for boutique practices, specialized advocates, and full-service law firms.",
  "items": [
    {
      "t": "Corporate & Commercial Law Firms",
      "b": "Firms seeking retainers for M&A advisory, contract drafting, employment disputes, and regulatory compliance."
    },
    {
      "t": "Litigation & Dispute Resolution Specialists",
      "b": "Advocates specializing in civil litigation, commercial arbitration, consumer court matters, and criminal defense."
    },
    {
      "t": "Intellectual Property (IPR) & Patent Attorneys",
      "b": "Practices catering to tech startups, manufacturers, and creative agencies requiring trademark and patent filings."
    },
    {
      "t": "Real Estate & Property Law Counsel",
      "b": "Attorneys handling title verifications, builder dispute resolution, RERA filings, and property acquisitions."
    }
  ]
};

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Choose Hover Business Services LLP for Legal Marketing?",
  "sub": "Uncompromising professionalism, discretion, and compliance.",
  "items": [
    {
      "t": "Strict Ethics & Bar Guideline Adherence",
      "b": "We respect the legal profession’s non-solicitation rules. We focus on educational authority and discoverability, not cheap gimmicks."
    },
    {
      "t": "High-Value Lead Quality Focus",
      "b": "We filter out non-viable inquiries, focusing campaigns exclusively on clients with viable matters and financial capacity."
    },
    {
      "t": "Total Confidentiality & Data Security",
      "b": "Your intake forms and client inquiries are secured with enterprise-grade encryption and strict privacy standards."
    },
    {
      "t": "Transparent Retainer ROI Tracking",
      "b": "Detailed monthly reports demonstrating ranking gains, map view increases, phone inquiries, and scheduled consultations."
    }
  ]
};

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = null;

const ICONS = [Compass, Users, BadgeCheck, BarChart3, MapPin, Star];
const IndustryIcon = Scale;

/* ============================== Page ============================== */

export default async function LawFirmsMarketingPage() {
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

      <section className="relative overflow-hidden pb-14 pt-10 text-center md:pt-14">
        <div className="pointer-events-none absolute left-1/2 top-[55%] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-brand-soft)] blur-3xl" />
        <div className="container-max relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-text-muted)] justify-center">
            <Link href="/" className="hover:underline">Home</Link><ChevronRight size={13} />
            <Link href={HUB.href} className="hover:underline">{HUB.label}</Link><ChevronRight size={13} />
            <span className="text-[var(--color-ink)]">{PAGE.eyebrow}</span>
          </nav>
          <h1 className="mt-5 font-display font-extrabold mx-auto max-w-[20ch]" style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.04, letterSpacing: "-0.035em" }}>{PAGE.title}</h1>
          <p className="mt-5 max-w-[54ch] text-lg text-[var(--color-text-muted)] mx-auto">{PAGE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)] transition-transform hover:-translate-y-0.5">Get a free quote <ArrowRight size={16} /></Link>
            <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold border-[var(--color-ink)]"><Phone size={15} /> {co.phone}</a>
          </div>
          <div className="mt-14 text-left"><HeroVisual /></div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-max">
          <p className="mx-auto max-w-[62ch] text-center font-display text-2xl font-semibold leading-snug md:text-3xl">{PAGE.intro}</p>
          {OVERVIEW && <div className="mx-auto mt-10 grid max-w-5xl gap-6 text-[var(--color-text-muted)] md:grid-cols-3">{OVERVIEW.map((p, i) => <p key={i}>{p}</p>)}</div>}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-max">
          <h2 className="max-w-[20ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "What you get from it"}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className={`rounded-[26px] p-7 ${i === 0 ? "bg-[var(--color-brand)] text-white md:row-span-2 md:flex md:flex-col md:justify-end" : "border border-[var(--color-border)] bg-white"}`}>
                  <I size={i === 0 ? 36 : 22} className={i === 0 ? "" : "text-[var(--color-brand)]"} />
                  <h3 className={`mt-4 font-display font-bold ${i === 0 ? "text-2xl" : "text-lg"}`}>{b.t}</h3>
                  <p className={`mt-2 text-sm ${i === 0 ? "text-white/85" : "text-[var(--color-text-muted)]"}`}>{b.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-max">
          <div className="grid divide-y divide-white/10 rounded-[28px] bg-[var(--color-ink)] px-6 text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map(([v, l]) => (
              <div key={l} className="px-4 py-7 text-center"><p className="font-display text-4xl font-extrabold">{v}</p><p className="mt-1 text-sm text-white/60">{l}</p></div>
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

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Included in every plan</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {INCLUDES.map((x) => (
              <span key={x} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold shadow-[var(--shadow-sm)]"><Check size={16} className="text-[var(--color-brand)]" />{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Step by step</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">A clear process, so you always know what happens next.</p>
          </div>
          <ol className="relative border-l-2 border-[var(--color-border)] pl-8">
            {PROCESS.map((s, i) => (
              <li key={s.t} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white">{i + 1}</span>
                <h3 className="font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-[var(--color-text-muted)]">{s.b}</p>
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

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max">
          <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">Frequently asked</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 md:grid-cols-2">
            {FAQS.map((f) => (
              <details key={f.q} className="group h-fit rounded-2xl border border-[var(--color-border)] bg-white p-5 open:shadow-[var(--shadow-md)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-brand)] px-8 py-14 text-center text-white md:py-16">
            <h2 className="mx-auto max-w-[22ch] font-display text-3xl font-extrabold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>Let&apos;s plan your {PAGE.eyebrow.toLowerCase()} growth</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">Talk to an expert <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
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
