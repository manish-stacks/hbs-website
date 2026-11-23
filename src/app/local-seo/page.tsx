import Link from "next/link";
import {
  ArrowRight, ArrowUp, ArrowUpRight, BarChart3, Check, ChevronRight, Gauge, Link2, MapPin, Phone, Plus, Search, TrendingUp, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Local SEO Services in India | Hover Business Services",
    description: "Improve local rankings, Google Maps visibility, and customer enquiries with local SEO services in India from Hover Business Services LLP. Contact us today!",
    path: "/local-seo",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Local SEO Services in India",
  "eyebrow": "Local SEO & Maps",
  "tagline": "Want to connect with more customers in your service areas? Our local SEO services in India help businesses improve their presence in local search results, Google Maps, and relevant AI-powered search platforms. We focus on helping potential customers discover your business when they search for nearby products or services, encouraging more calls, website visits, enquiries, and store visits."
};

const HERO: { keyword: string; from: number; map?: boolean; vitals?: boolean } = {
  "keyword": "dentist near me",
  "from": 9,
  "map": true
};

const STATS: [string, string][] = [
  [
    "1,500+",
    "Completed Projects"
  ],
  [
    "80+",
    "In-House Specialists"
  ],
  [
    "98%",
    "Client Retention"
  ]
];

const RELATED = [
  {
    "label": "SEO Services",
    "href": "/seo-services"
  },
  {
    "label": "Small Business SEO",
    "href": "/small-business-seo"
  },
  {
    "label": "SEO Audit",
    "href": "/seo-audit"
  },
  {
    "label": "Contact Us",
    "href": "/contact-us"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Local SEO Solutions to Strengthen Your Local Presence",
  "intro": [
    "Low ratings of your maps, incorrect business listings, and low visibility in the local area could prevent potential customers from finding your business. Hover Business Services LLP will help you create personalized local SEO campaigns according to your goals, geographical locations, and competition.",
    "We will consider several aspects of your current website such as technical SEO, local keywords, website content, internal links, metadata, and website recommendations. Local landing pages, structure data, and conversational searches will also be reviewed in order to provide search engines with more information about your business and services provided.",
    "Taking into account changes in search engine behavior, we will analyze the representation of your brand on the right platforms."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* prose */
const S02: Sec = {
  "h": "Build Stronger Local Signals for Search and AI Discovery",
  "intro": [
    "Visibility in local search is not only related to search engine rankings. Proper business details, content, reviews, and listing can help your company to increase its local visibility.",
    "We may perform the following local SEO services: Google Business Profile optimization, directory management, NAP check, duplicate listing check, reviews analysis, and Bing Places optimization. In addition, we can track the KPIs to measure the results of our efforts."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "Measure the Progress of Your Local SEO Campaign",
  "intro": [
    "Local SEO performance should be evaluated through meaningful business indicators rather than rankings alone. We help businesses monitor relevant metrics throughout their campaigns."
  ],
  "items": [
    {
      "t": "Local Search Visibility",
      "b": "Track how your website and business profile appear for relevant local queries and target service areas."
    },
    {
      "t": "Google Maps Performance",
      "b": "Review map visibility, profile views, and customer interactions to identify areas for improvement."
    },
    {
      "t": "Customer Enquiries and Engagement",
      "b": "Monitor relevant actions such as calls, website clicks, direction requests, form submissions, and qualified leads. Actual results depend on your industry, location, competition, website condition, and campaign scope."
    }
  ],
  "outro": [],
  "table": null
};

/* audience */
const S04: Sec = {
  "h": "Local SEO Strategies for Different Industries",
  "intro": [
    "Every industry has different customer expectations and local search patterns. Our strategies can be adapted to the needs of businesses serving specific communities, cities, or regional markets."
  ],
  "items": [
    {
      "t": "Home Services",
      "b": "Help potential customers discover plumbers, electricians, cleaning companies, contractors, and other service providers in their target areas."
    },
    {
      "t": "Healthcare",
      "b": "Improve the local discoverability of healthcare providers through accurate business profiles, relevant service information, and location-focused content."
    },
    {
      "t": "Real Estate",
      "b": "Support property businesses in reaching buyers, sellers, landlords, and tenants searching within particular neighbourhoods and markets."
    },
    {
      "t": "Law Firms",
      "b": "Strengthen local search presence for legal practices seeking relevant enquiries from people searching for legal assistance in their service areas."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S05: Sec = {
  "h": "Our Local SEO Services",
  "intro": [
    "Choosing the right local SEO company involves understanding which activities will address your business's current visibility challenges. Our services focus on improving the signals that help customers find and evaluate your business online."
  ],
  "items": [
    {
      "t": "Local SEO Audit and Opportunity Analysis",
      "b": "We review your website, local search presence, competitors, and business listings to identify technical issues and missed ranking opportunities. The findings help establish a practical roadmap for ongoing optimization."
    },
    {
      "t": "Google Business Profile Optimization",
      "b": "We review your Google Business Profile, including business categories, service details, descriptions, photos, posts, and other relevant information. A complete and accurate profile helps customers understand your business and take appropriate action."
    },
    {
      "t": "Local Citations and Business Listing Management",
      "b": "We check business listings across relevant directories and assess name, address, and phone number consistency. Where needed, we identify duplicate listings and recommend corrections to reduce confusion and maintain accurate business information."
    },
    {
      "t": "Location-Based Website Optimization",
      "b": "We optimize relevant landing pages, title tags, meta descriptions, headings, internal links, and local content around appropriate search intent. For businesses serving multiple locations, we can help plan useful location pages that provide genuinely relevant information."
    },
    {
      "t": "Customer Reviews and Reputation Management",
      "b": "Customer feedback can influence how people evaluate a local business. We help businesses establish review-management processes, monitor feedback, and respond appropriately while following the relevant platform's policies."
    },
    {
      "t": "Local AI and Voice Search Optimization",
      "b": "We assess whether your website communicates important business information clearly and answers common customer questions. Relevant structured data, concise service information, and conversational content can support discovery across modern search experiences."
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S06: Sec = {
  "h": "A Clear Process for Improving Local Search Visibility",
  "intro": [
    "Our local SEO workflow is organized into stages so that priorities, implementation, and performance can be reviewed systematically."
  ],
  "items": [
    {
      "t": "Phase 1: Business Discovery and Initial Audit",
      "b": "We begin by understanding your business model, target audience, service locations, and current online presence.",
      "list": [
        "Business and competitor analysis",
        "Local keyword research and search intent mapping",
        "Website and technical SEO review",
        "Google Business Profile assessment",
        "Business listing and NAP consistency checks",
        "Initial performance benchmarking"
      ]
    },
    {
      "t": "Phase 2: Website and Local Profile Optimization",
      "b": "After identifying priority issues, we work on relevant website and business profile improvements.",
      "list": [
        "Location page and service page optimization",
        "Title, meta description, and heading improvements",
        "Local content updates",
        "Google Business Profile enhancements",
        "Structured data review and implementation where appropriate",
        "Citation corrections and duplicate listing recommendations"
      ]
    },
    {
      "t": "Phase 3: Performance Monitoring and Continued Improvement",
      "b": "Local SEO requires ongoing evaluation as competitors, search behavior, and business needs change.",
      "list": [
        "Local keyword and search visibility tracking",
        "Google Business Profile performance reviews",
        "Monitoring calls, clicks, and other agreed conversions",
        "Content and competitor gap assessments",
        "Review and listing management recommendations",
        "Periodic reporting and strategy refinement"
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* audience */
const S07: Sec = {
  "h": "Local SEO Expertise Across Different Business Categories",
  "intro": [
    "Our local SEO strategies can be tailored to different business models and customer journeys."
  ],
  "items": [
    {
      "t": "Real Estate",
      "b": "Improve location-based discoverability for property services and local real estate businesses."
    },
    {
      "t": "Healthcare and Dental Clinics",
      "b": "Help patients find relevant providers through accurate listings and useful location-focused information."
    },
    {
      "t": "B2B Companies",
      "b": "Support businesses that want to reach organizations searching for local suppliers or professional services."
    },
    {
      "t": "Automotive Businesses",
      "b": "Improve online discovery for repair shops, dealerships, and vehicle service providers."
    },
    {
      "t": "Law Firms",
      "b": "Strengthen local visibility for legal practices targeting relevant service areas."
    },
    {
      "t": "Home and Professional Services",
      "b": "Help service providers reach customers looking for nearby expertise and dependable solutions."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S08: Sec = {
  "h": "Common Local SEO Problems We Help Address",
  "intro": [
    "Local search performance can suffer when important business information is incomplete, inconsistent, or difficult to find. We help identify and address issues such as:"
  ],
  "items": [
    {
      "t": "",
      "b": "Limited Google Maps visibility"
    },
    {
      "t": "",
      "b": "Low local search rankings"
    },
    {
      "t": "",
      "b": "Incomplete or poorly optimized business profiles"
    },
    {
      "t": "",
      "b": "Inconsistent business details across directories"
    },
    {
      "t": "",
      "b": "Duplicate or outdated listings"
    },
    {
      "t": "",
      "b": "Weak location-specific website content"
    },
    {
      "t": "",
      "b": "Limited customer reviews or review-management processes"
    },
    {
      "t": "",
      "b": "Low engagement from relevant local searches"
    },
    {
      "t": "Turn Local Searches Into Better Customer Connections",
      "b": "If your business information is right and your website meets the requirements of the customers, they will be able to make decisions based on proper knowledge. Local SEO combines website optimization, business listings optimization, local content creation, and reputation management to help you get discovered locally."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S09: Sec = {
  "h": "Understanding Local SEO Services, Benefits, and Costs",
  "intro": [
    "Before investing in local SEO, it helps to understand what the process involves, which businesses can benefit, and what influences campaign pricing."
  ],
  "items": [
    {
      "t": "What Are Local SEO Services?",
      "b": "Local SEO services are services that assist businesses in increasing their visibility while searching for particular products or services in a particular geographic location. Local SEO services in India may include optimization of Google Business Profile, local keyword research, location page optimization, citation management, review management, and technical website optimization."
    },
    {
      "t": "How Does Local SEO Work?",
      "b": "Local SEO involves creating the right website content, providing accurate business information, building local listings, among other SEO practices. The exact practices involved will be determined by the geographical location of the business, among other factors."
    },
    {
      "t": "Which Businesses Benefit From Local SEO?",
      "b": "Local SEO will help the business serving their customers from certain locations, such as clinics, restaurants, law firms, real estate businesses, retail stores, repair companies, and professional businesses. It will even help multi-location businesses to increase their visibility in different markets."
    },
    {
      "t": "How Much Do Local SEO Services Cost in India?",
      "b": "Pricing depends on many factors such as location, level of competition, current state of your site, services you want to have and scale of campaign. It may be necessary for local businesses to follow a different strategy if compared to businesses that manage several locations or are facing high levels of competition."
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S10: Sec = {
  "h": "Improve Your Local Visibility With a Tailored SEO Strategy",
  "intro": [
    "Bring in more targeted customers to know about your business by means of local SEO services in India. Hover Business Services LLP can help you analyze your online visibility and help you in improving the same according to your business needs.",
    "Contact our team to discuss your local SEO requirements and explore a strategy tailored to your business."
  ],
  "items": [],
  "outro": [],
  "table": null
};

const ICONS = [TrendingUp, Search, MapPin, Gauge, Link2, BarChart3];

/* ============================== Page ============================== */

export default async function LocalSeoPage() {
  const co = await getCompany();

  return (
    <div className="sx text-[var(--color-ink)]">
      <style>{`
        .sx h1,.sx h2,.sx h3{color:inherit}
        @keyframes sx-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes sx-bar{from{transform:scaleY(.1)}to{transform:scaleY(1)}}
        @keyframes sx-pop{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
        .sx-rise{animation:sx-rise .7s cubic-bezier(.2,.7,.2,1) both}
        .sx-bar{transform-origin:bottom;animation:sx-bar 1s cubic-bezier(.2,.7,.2,1) both}
        .sx-pop{animation:sx-pop .6s .8s cubic-bezier(.2,.7,.2,1) both}
        @media (prefers-reduced-motion:reduce){.sx-rise,.sx-bar,.sx-pop{animation:none}}
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

      <section className="pb-6">
        <div className="container-max">
          <div className="grid divide-y divide-white/10 rounded-[28px] bg-[var(--color-ink)] px-6 text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map(([v, l]) => (
              <div key={l} className="px-4 py-7 text-center"><p className="font-display text-4xl font-extrabold">{v}</p><p className="mt-1 text-sm text-white/60">{l}</p></div>
            ))}
          </div>
        </div>
      </section>
      <Lead s={S01} tone="white" />
      <Prose s={S02} tone="surface" />
      <Cards s={S03} tone="white" v="bento" />
      <Audience s={S04} tone="surface" />
      <Cards s={S05} tone="soft" v="rows" />
      <Steps s={S06} tone="white" v="rail" />
      <Audience s={S07} tone="surface" />
      <Cards s={S08} tone="ink" v="split" />
      <Cards s={S09} tone="white" v="grid" />
      <Cta s={S10} phone={co.phone} />

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
    <div className="relative mx-auto w-full max-w-[480px] rounded-[28px] border border-[var(--color-border)] bg-white p-5 text-[var(--color-ink)] shadow-[var(--shadow-lg)]">
      <div className="flex items-center gap-3 rounded-full border border-[var(--color-border)] px-4 py-2.5">
        <Search size={16} className="text-[var(--color-text-muted)]" />
        <span className="text-sm font-medium">{HERO.keyword}</span>
      </div>
      <ol className="mt-4 space-y-2">
        {["Your website", "competitor-one.com", "competitor-two.in", "directory-listing.com"].map((r, i) => (
          <li key={r} className={`sx-rise flex items-center gap-3 rounded-xl p-3 ${i === 0 ? "bg-[var(--color-brand-soft)] ring-1 ring-[var(--color-brand)]/30" : "bg-[var(--color-surface)]"}`} style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-display text-sm font-extrabold ${i === 0 ? "bg-[var(--color-brand)] text-white" : "bg-white"}`}>{i + 1}</span>
            <div className="min-w-0 flex-1">
              <p className={`truncate text-sm font-semibold ${i === 0 ? "text-[var(--color-brand-dark)]" : ""}`}>{r}</p>
              <span className="mt-1 block h-1.5 rounded-full bg-black/10" style={{ width: `${90 - i * 15}%` }} />
            </div>
            {i === 0 && <span className="inline-flex items-center gap-0.5 rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-[var(--color-success)]"><ArrowUp size={11} />{HERO.from - 1}</span>}
          </li>
        ))}
      </ol>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl border border-[var(--color-border)] p-3">
          <p className="text-[11px] text-[var(--color-text-muted)]">Position</p>
          <p className="font-display text-xl font-extrabold">#{HERO.from} → #1</p>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] p-3">
          <p className="flex items-center gap-1 text-[11px] text-[var(--color-text-muted)]">{HERO.map ? <MapPin size={11} /> : <Gauge size={11} />}{HERO.map ? "Map pack" : HERO.vitals ? "Health score" : "Organic clicks"}</p>
          <p className="font-display text-xl font-extrabold">{HERO.map ? "Top 3" : HERO.vitals ? "96/100" : "+212%"}</p>
        </div>
      </div>
    </div>
  );
}

/* ============================ Section blocks ============================ */

type Item = { t: string; b: string; list?: string[] };
type Sec = { h: string; intro: string[]; items: Item[]; outro: string[]; table?: { head: string[]; rows: string[][] } | null };
type Tone = "white" | "surface" | "ink" | "soft";

const TONE: Record<Tone, string> = {
  white: "bg-white",
  surface: "bg-[var(--color-surface)]",
  ink: "bg-[var(--color-ink)] text-white",
  soft: "bg-[var(--color-brand-soft)]",
};
const muted = (t: Tone) => (t === "ink" ? "text-white/65" : "text-[var(--color-text-muted)]");

function Head({ s, tone, center = false }: { s: Sec; tone: Tone; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{s.h}</h2>
      {s.intro.map((p, i) => <p key={i} className={`mt-4 text-lg leading-relaxed ${muted(tone)}`}>{p}</p>)}
    </div>
  );
}
function Outro({ s, tone }: { s: Sec; tone: Tone }) {
  if (!s.outro.length) return null;
  return <div className="mt-8 max-w-3xl space-y-3">{s.outro.map((p, i) => <p key={i} className={muted(tone)}>{p}</p>)}</div>;
}
function ItemList({ list, tone }: { list?: string[]; tone: Tone }) {
  if (!list?.length) return null;
  return (
    <ul className="mt-4 space-y-2">
      {list.map((l, i) => (
        <li key={i} className={`flex gap-2 text-sm ${muted(tone)}`}><Check size={15} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />{l}</li>
      ))}
    </ul>
  );
}

/* Lead: heading left, copy right */
function Lead({ s, tone }: { s: Sec; tone: Tone }) {
  return (
    <section className={`py-16 md:py-24 ${TONE[tone]}`}>
      <div className="container-max grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl lg:sticky lg:top-28 lg:self-start">{s.h}</h2>
        <div className="space-y-5 text-lg leading-relaxed">
          {s.intro.map((p, i) => <p key={i} className={i === 0 ? "" : muted(tone)}>{p}</p>)}
          {s.items.length > 0 && (
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {s.items.map((it, i) => (
                <li key={i} className="flex gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4 text-base text-[var(--color-ink)]"><Check size={18} className="mt-0.5 shrink-0 text-[var(--color-brand)]" /><span>{it.t && <b className="block">{it.t}</b>}<span className="text-sm text-[var(--color-text-muted)]">{it.b}</span></span></li>
              ))}
            </ul>
          )}
          {s.outro.map((p, i) => <p key={i} className={muted(tone)}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

/* Prose: centred reading column */
function Prose({ s, tone }: { s: Sec; tone: Tone }) {
  return (
    <section className={`py-16 md:py-20 ${TONE[tone]}`}>
      <div className="container-max">
        <div className="mx-auto max-w-3xl">
          <span className="block h-1 w-14 rounded-full bg-[var(--color-brand)]" />
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{s.h}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            {[...s.intro, ...s.outro].map((p, i) => <p key={i} className={i === 0 ? "" : muted(tone)}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Cards: four looks */
function Cards({ s, tone, v }: { s: Sec; tone: Tone; v: "grid" | "bento" | "rows" | "split" }) {
  const dark = tone === "ink";
  return (
    <section className={`py-16 md:py-24 ${TONE[tone]}`}>
      <div className="container-max">
        <Head s={s} tone={tone} />
        {v === "grid" && (
          <div className={`mt-10 grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-3 ${dark ? "bg-white/10" : "border border-[var(--color-border)] bg-[var(--color-border)]"}`}>
            {s.items.map((it, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className={`p-7 ${dark ? "bg-[var(--color-ink)]" : "bg-white"}`}>
                  <I size={24} className="text-[var(--color-brand)]" />
                  {it.t && <h3 className="mt-4 font-display text-lg font-bold">{it.t}</h3>}
                  <p className={`mt-2 text-sm leading-relaxed ${muted(tone)}`}>{it.b}</p>
                  <ItemList list={it.list} tone={tone} />
                </div>
              );
            })}
          </div>
        )}
        {v === "bento" && (
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {s.items.map((it, i) => {
              const I = ICONS[i % ICONS.length]!;
              const hero = i === 0;
              return (
                <div key={i} className={`rounded-[26px] p-7 ${hero ? "bg-[var(--color-brand)] text-white lg:row-span-2" : dark ? "border border-white/10 bg-white/[.04]" : "border border-[var(--color-border)] bg-white"}`}>
                  <I size={hero ? 34 : 22} className={hero ? "" : "text-[var(--color-brand)]"} />
                  {it.t && <h3 className={`mt-4 font-display font-bold ${hero ? "text-2xl" : "text-lg"}`}>{it.t}</h3>}
                  <p className={`mt-2 text-sm leading-relaxed ${hero ? "text-white/85" : muted(tone)}`}>{it.b}</p>
                  {it.list?.length ? <ItemList list={it.list} tone={hero ? "ink" : tone} /> : null}
                </div>
              );
            })}
          </div>
        )}
        {v === "rows" && (
          <div className={`mt-10 divide-y border-y ${dark ? "divide-white/10 border-white/10" : "divide-[var(--color-border)] border-[var(--color-border)]"}`}>
            {s.items.map((it, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className="grid gap-3 py-6 md:grid-cols-[56px_.9fr_1.4fr] md:items-start">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full ${dark ? "bg-white/10" : "bg-[var(--color-surface-2)]"}`}><I size={20} /></span>
                  <h3 className="font-display text-xl font-bold md:pt-2.5">{it.t}</h3>
                  <div className="md:pt-2.5"><p className={muted(tone)}>{it.b}</p><ItemList list={it.list} tone={tone} /></div>
                </div>
              );
            })}
          </div>
        )}
        {v === "split" && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {s.items.map((it, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className={`flex gap-5 rounded-3xl p-6 ${dark ? "border border-white/10 bg-white/[.04]" : "bg-white shadow-[var(--shadow-sm)]"}`}>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand)] text-white"><I size={22} /></span>
                  <div>{it.t && <h3 className="font-display text-lg font-bold">{it.t}</h3>}<p className={`mt-1.5 text-sm leading-relaxed ${muted(tone)}`}>{it.b}</p><ItemList list={it.list} tone={tone} /></div>
                </div>
              );
            })}
          </div>
        )}
        <Outro s={s} tone={tone} />
      </div>
    </section>
  );
}

/* Checklist: untitled bullet points */
function Checklist({ s, tone }: { s: Sec; tone: Tone }) {
  return (
    <section className={`py-16 md:py-20 ${TONE[tone]}`}>
      <div className="container-max grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <Head s={s} tone={tone} />
        <div>
          <ul className="grid gap-3">
            {s.items.map((it, i) => (
              <li key={i} className={`flex items-start gap-3 rounded-2xl p-4 ${tone === "ink" ? "border border-white/10 bg-white/[.04]" : "bg-white shadow-[var(--shadow-sm)]"}`}>
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Check size={14} /></span>{it.b}
              </li>
            ))}
          </ul>
          <Outro s={s} tone={tone} />
        </div>
      </div>
    </section>
  );
}

/* Steps: numbered sequence */
function Steps({ s, tone, v }: { s: Sec; tone: Tone; v: "line" | "rail" }) {
  if (v === "rail")
    return (
      <section className={`py-16 md:py-24 ${TONE[tone]}`}>
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start"><Head s={s} tone={tone} /></div>
          <div>
            <ol className={`relative border-l-2 pl-8 ${tone === "ink" ? "border-white/15" : "border-[var(--color-border)]"}`}>
              {s.items.map((it, i) => (
                <li key={i} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white">{i + 1}</span>
                  <h3 className="font-display text-xl font-bold">{it.t}</h3>
                  <p className={`mt-2 ${muted(tone)}`}>{it.b}</p>
                  <ItemList list={it.list} tone={tone} />
                </li>
              ))}
            </ol>
            <Outro s={s} tone={tone} />
          </div>
        </div>
      </section>
    );
  return (
    <section className={`py-16 md:py-24 ${TONE[tone]}`}>
      <div className="container-max">
        <Head s={s} tone={tone} />
        <ol className="relative mt-12 grid gap-8" style={{ gridTemplateColumns: `repeat(auto-fit,minmax(${s.items.length > 4 ? 180 : 220}px,1fr))` }}>
          <span className={`absolute left-0 right-0 top-[22px] hidden h-0.5 md:block ${tone === "ink" ? "bg-white/15" : "bg-[var(--color-border)]"}`} />
          {s.items.map((it, i) => (
            <li key={i} className="relative">
              <span className={`relative flex h-11 w-11 items-center justify-center rounded-full font-display font-extrabold ${i === s.items.length - 1 ? "bg-[var(--color-brand)] text-white" : tone === "ink" ? "border-2 border-white bg-[var(--color-ink)]" : "border-2 border-[var(--color-ink)] bg-white"}`}>{i + 1}</span>
              <h3 className="mt-5 font-display text-lg font-bold">{it.t}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${muted(tone)}`}>{it.b}</p>
              <ItemList list={it.list} tone={tone} />
            </li>
          ))}
        </ol>
        <Outro s={s} tone={tone} />
      </div>
    </section>
  );
}

/* Plans: package cards */
function Plans({ s, tone }: { s: Sec; tone: Tone }) {
  const mid = s.items.length >= 3 ? 1 : -1;
  return (
    <section className={`py-16 md:py-24 ${TONE[tone]}`}>
      <div className="container-max">
        <Head s={s} tone={tone} center />
        <div className="mt-12 grid items-stretch gap-5" style={{ gridTemplateColumns: `repeat(auto-fit,minmax(240px,1fr))` }}>
          {s.items.map((it, i) => (
            <div key={i} className={`relative flex flex-col rounded-[28px] p-7 ${i === mid ? "bg-[var(--color-ink)] text-white shadow-[var(--shadow-lg)] lg:-translate-y-3" : "border border-[var(--color-border)] bg-white text-[var(--color-ink)]"}`}>
              {i === mid && <span className="absolute -top-3 left-7 rounded-full bg-[var(--color-brand)] px-3 py-1 text-xs font-bold text-white">Popular</span>}
              <h3 className="font-display text-xl font-extrabold">{it.t}</h3>
              {it.b && <p className={`mt-3 text-sm leading-relaxed ${i === mid ? "text-white/70" : "text-[var(--color-text-muted)]"}`}>{it.b}</p>}
              <ItemList list={it.list} tone={i === mid ? "ink" : "white"} />
              <Link href="/contact-us" className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold ${i === mid ? "bg-[var(--color-brand)] text-white" : "border border-[var(--color-ink)]"}`} style={{ marginTop: "1.75rem" }}>Get a quote <ArrowRight size={15} /></Link>
            </div>
          ))}
        </div>
        <Outro s={s} tone={tone} />
      </div>
    </section>
  );
}

/* Table: comparisons */
function Table({ s, tone }: { s: Sec; tone: Tone }) {
  const t = s.table!;
  return (
    <section className={`py-16 md:py-24 ${TONE[tone]}`}>
      <div className="container-max">
        <Head s={s} tone={tone} />
        <div className="mt-10 overflow-x-auto rounded-3xl border border-[var(--color-border)] bg-white text-[var(--color-ink)]">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead><tr className="bg-[var(--color-ink)] text-white">{t.head.map((c, i) => <th key={i} className="px-5 py-4 font-display font-bold">{c}</th>)}</tr></thead>
            <tbody>
              {t.rows.map((r, i) => (
                <tr key={i} className="border-t border-[var(--color-border)] even:bg-[var(--color-surface)]">
                  {r.map((c, j) => <td key={j} className={`px-5 py-4 align-top ${j === 0 ? "font-semibold" : "text-[var(--color-text-muted)]"}`}>{c === "✓" || /^yes$/i.test(c) ? <Check size={16} className="text-[var(--color-success)]" /> : c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {s.items.length > 0 && <div className="mt-8 grid gap-4 md:grid-cols-2">{s.items.map((it, i) => <div key={i} className="rounded-2xl border border-[var(--color-border)] bg-white p-5 text-[var(--color-ink)]"><h3 className="font-display font-bold">{it.t}</h3><p className="mt-1 text-sm text-[var(--color-text-muted)]">{it.b}</p><ItemList list={it.list} tone="white" /></div>)}</div>}
        <Outro s={s} tone={tone} />
      </div>
    </section>
  );
}

/* Audience: who it is for */
function Audience({ s, tone }: { s: Sec; tone: Tone }) {
  return (
    <section className={`py-16 md:py-20 ${TONE[tone]}`}>
      <div className="container-max">
        <Head s={s} tone={tone} />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((it, i) => (
            <div key={i} className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]"><Users size={18} /></span>
              {it.t && <h3 className="mt-4 font-display font-bold">{it.t}</h3>}
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">{it.b}</p>
              <ItemList list={it.list} tone="white" />
            </div>
          ))}
        </div>
        <Outro s={s} tone={tone} />
      </div>
    </section>
  );
}

/* Why us: dark split with checks */
function WhyUs({ s }: { s: Sec }) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] py-16 text-white md:py-24">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--color-brand)] opacity-25 blur-[120px]" />
      <div className="container-max relative grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start"><Head s={s} tone="ink" /></div>
        <div>
          <ul className="space-y-6">
            {s.items.map((it, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]"><Check size={16} /></span>
                <div>{it.t && <h3 className="font-display text-lg font-bold">{it.t}</h3>}<p className="mt-1 text-white/65">{it.b}</p><ItemList list={it.list} tone="ink" /></div>
              </li>
            ))}
          </ul>
          <Outro s={s} tone="ink" />
        </div>
      </div>
    </section>
  );
}

/* FAQ */
function Faq({ s, phone }: { s: Sec; phone: string }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-max grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{s.h}</h2>
          {s.intro.map((p, i) => <p key={i} className="mt-3 text-[var(--color-text-muted)]">{p}</p>)}
          <div className="mt-8 rounded-3xl bg-[var(--color-surface)] p-6">
            <p className="font-display font-bold">Still have a question?</p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">Talk to a specialist directly.</p>
            <a href={`tel:${phone}`} className="mt-4 inline-flex items-center gap-2 font-display text-lg font-bold text-[var(--color-brand)]"><Phone size={17} /> {phone}</a>
          </div>
        </div>
        <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {s.items.map((f, i) => (
            <details key={i} className="group py-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">{f.t}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{f.b}</p>
              <ItemList list={f.list} tone="white" />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Closing call to action */
function Cta({ s, phone }: { s: Sec; phone: string }) {
  return (
    <section className="py-16">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-brand)] px-8 py-14 text-white md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <h2 className="max-w-[22ch] font-display text-3xl font-extrabold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>{s.h}</h2>
              {[...s.intro, ...s.outro].map((p, i) => <p key={i} className="mt-4 max-w-[60ch] text-white/85">{p}</p>)}
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">Contact us <ArrowRight size={16} /></Link>
              <a href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold"><Phone size={15} /> {phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
