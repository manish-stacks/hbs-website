import Link from "next/link";
import {
  ArrowRight, ArrowUp, ArrowUpRight, BarChart3, Check, ChevronRight, Gauge, Link2, MapPin, Phone, Plus, Search, TrendingUp, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Small Business SEO Services | Hover Business Services",
    description: "Grow your online visibility with small business SEO services from Hover Business Services LLP. Attract relevant traffic and enquiries. Contact us today!",
    path: "/small-business-seo",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Small Business SEO Services",
  "eyebrow": "Small Business SEO",
  "tagline": "Our small business SEO services help businesses improve online visibility, reach potential customers, and attract relevant organic traffic. At Hover Business Services LLP, we develop SEO strategies based on your business goals, target audience, industry, and budget. From keyword research and on-page SEO to local search optimisation and technical improvements, our approach focuses on building a stronger online presence and generating meaningful business enquiries."
};

const HERO: { keyword: string; from: number; map?: boolean; vitals?: boolean } = {
  "keyword": "ca firm in pitampura",
  "from": 14,
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
    "label": "Local SEO",
    "href": "/local-seo"
  },
  {
    "label": "SEO Services",
    "href": "/seo-services"
  },
  {
    "label": "Content Writing",
    "href": "/content-writing"
  },
  {
    "label": "Contact Us",
    "href": "/contact-us"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Affordable SEO Services for Small Businesses to Generate More Leads",
  "intro": [
    "Small businesses need a practical way to compete online without spending beyond their marketing budget. Our small business SEO services focus on improving search engine rankings, attracting relevant visitors, and helping potential customers discover your products or services.",
    "At Hover Business Services LLP, we understand that every business has different priorities. We create tailored SEO campaigns that may include website optimisation, content development, local SEO, keyword targeting, and technical SEO improvements. These activities help establish a solid foundation for sustainable organic growth.",
    "Our approach focuses on more than website traffic. We consider user intent, conversion opportunities, and the search terms potential customers use when looking for a business like yours. By aligning SEO activities with your commercial goals, we aim to help turn online visibility into valuable enquiries."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "What Can Small Business SEO Help You Improve?",
  "intro": [
    "A well-planned SEO campaign can address several important areas of your online presence. The actual outcomes depend on your website, competition, industry, and implementation."
  ],
  "items": [
    {
      "t": "Organic search visibility",
      "b": "Improve the opportunity for relevant pages to appear for target search queries."
    },
    {
      "t": "Keyword rankings",
      "b": "Optimise website pages around relevant commercial and informational keywords."
    },
    {
      "t": "Website traffic",
      "b": "Attract visitors who are actively searching for your products or services."
    },
    {
      "t": "Lead generation",
      "b": "Make it easier for potential customers to find contact details, request quotations, or enquire about services."
    },
    {
      "t": "Local search performance",
      "b": "Strengthen visibility for location-based searches and Google Maps results."
    },
    {
      "t": "User experience",
      "b": "Improve navigation, mobile usability, content clarity, and page performance."
    },
    {
      "t": "Build a Stronger Online Presence Without Overspending",
      "b": "Small Business SEO Services can make progress with a focused SEO strategy rather than trying to target every keyword at once. Prioritising relevant search terms, improving important landing pages, and addressing technical problems can help make better use of available resources."
    },
    {
      "t": "Get an SEO Strategy Aligned With Your Business Goals",
      "b": "Our team considers your target market, website condition, competitors, and growth priorities when planning SEO activities. This allows the campaign to focus on practical improvements instead of using the same checklist for every business."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "How Our SEO Approach Supports Small Business Growth",
  "intro": [
    "At Hover Business Services LLP, we organise SEO activities around clear business objectives and measurable indicators. Our process can be adapted to your website's current performance and the level of support you require."
  ],
  "items": [
    {
      "t": "Understand Your Business Objectives",
      "b": "We begin by learning about your products or services, target audience, service areas, and competitors. This helps identify the search opportunities most relevant to your business."
    },
    {
      "t": "Develop a Tailored SEO Strategy",
      "b": "Based on the initial assessment, we identify target keywords, content opportunities, technical concerns, and relevant optimisation priorities. The strategy considers search intent and the pages most likely to support your business goals."
    },
    {
      "t": "Implement On-Page and Technical Improvements",
      "b": "We review page titles, meta descriptions, headings, internal links, website structure, mobile usability, and loading performance. Where relevant, we also identify content gaps and opportunities to improve existing landing pages."
    },
    {
      "t": "Monitor Performance and Refine the Campaign",
      "b": "SEO requires regular evaluation. We review available data such as organic clicks, impressions, keyword movement, landing-page performance, and conversions to identify areas that need further attention."
    }
  ],
  "outro": [],
  "table": null
};

/* audience */
const S04: Sec = {
  "h": "SEO Solutions for Different Small Business Industries",
  "intro": [
    "Businesses in different sectors require different keyword strategies and content approaches. Our SEO planning can be adapted to the needs of your industry."
  ],
  "items": [
    {
      "t": "Ecommerce Businesses",
      "b": "Ecommerce SEO revolves around product pages, category pages, product descriptions, technical SEO, and transactional keywords. The purpose is to get people to find products using natural search."
    },
    {
      "t": "Healthcare and Professional Practices",
      "b": "Healthcare providers and professional practices can benefit from clear service information, relevant local keywords, useful website content, and an accessible mobile experience. Content should be accurate and appropriate for the industry."
    },
    {
      "t": "Real Estate Businesses",
      "b": "Real estate SEO can target location-specific property searches, neighbourhood information, property categories, and relevant buyer or seller queries. A clear website structure helps visitors explore available information."
    },
    {
      "t": "Law Firms and Professional Services",
      "b": "Professional service websites can target practice-area keywords, location-based searches, and questions potential clients commonly ask. Informative content and clear contact pathways can support relevant enquiries. These are examples of industries that may benefit from SEO; campaign scope and results depend on individual requirements."
    }
  ],
  "outro": [],
  "table": null
};

/* prose */
const S05: Sec = {
  "h": "Make Local Searches Work Harder for Your Business",
  "intro": [
    "For businesses serving a particular city or neighbourhood, local SEO for small businesses can be an important part of the overall strategy. Potential customers often search for nearby providers when they need a product or service.",
    "Local optimisation may include Google Business Profile improvements, consistent business information, location-specific landing pages, customer review management, and locally relevant content. These activities can help strengthen local search visibility when implemented appropriately.",
    "At Hover Business Services LLP, local SEO can be integrated with broader website optimisation to support a consistent online presence across search results and business listings."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* checklist */
const S06: Sec = {
  "h": "Why Invest in Small Business SEO?",
  "intro": [
    "SEO can help businesses build an online presence that continues to develop over time. Unlike campaigns that depend entirely on paid advertising, organic search optimisation focuses on improving the website's ability to attract relevant visitors through unpaid search results.",
    "A well-planned campaign may include:"
  ],
  "items": [
    {
      "t": "",
      "b": "Keyword research and competitor analysis"
    },
    {
      "t": "",
      "b": "On-page SEO and content optimisation"
    },
    {
      "t": "",
      "b": "Technical SEO audits"
    },
    {
      "t": "",
      "b": "Local SEO and Google Business Profile optimisation"
    },
    {
      "t": "",
      "b": "Relevant content creation"
    },
    {
      "t": "",
      "b": "Internal linking and website structure improvements"
    },
    {
      "t": "",
      "b": "Organic traffic and conversion tracking"
    }
  ],
  "outro": [
    "The right combination depends on your current website and business priorities. SEO is an ongoing process, and rankings, traffic, and enquiries cannot be guaranteed."
  ],
  "table": null
};

/* faq */
const S07: Sec = {
  "h": "Frequently Asked Questions",
  "intro": [],
  "items": [
    {
      "t": "What are small business SEO services?",
      "b": "Small business SEO services help improve a website's visibility in organic search results. They commonly include keyword research, on-page optimisation, technical SEO, content improvements, local SEO, and performance monitoring."
    },
    {
      "t": "Are affordable SEO services suitable for small businesses?",
      "b": "Yes. A focused campaign can prioritise the most relevant keywords and website improvements within an agreed budget. The scope should reflect your competition, goals, and available resources."
    },
    {
      "t": "How long does small business SEO take to show results?",
      "b": "The timeline varies according to website condition, competition, content quality, and implementation. SEO improvements generally require time to be discovered and evaluated by search engines, so consistent monitoring is important."
    },
    {
      "t": "Can SEO help generate more business enquiries?",
      "b": "SEO can bring relevant visitors to your website and improve the pages they use to evaluate your business. Enquiry growth also depends on your services, pricing, competition, website experience, and conversion process."
    },
    {
      "t": "Is local SEO important for small businesses?",
      "b": "Local SEO is particularly useful for businesses serving specific geographic areas. Optimising location information, business listings, and relevant website pages can help potential customers discover nearby services."
    },
    {
      "t": "What does a small business SEO campaign include?",
      "b": "Depending on the agreed scope, a campaign may include a website audit, keyword research, on-page optimisation, technical fixes, content recommendations, local SEO, and regular performance reporting."
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S08: Sec = {
  "h": "Ready to Improve Your Small Business's Online Visibility?",
  "intro": [
    "Build a stronger search presence with an SEO strategy tailored to your business goals and budget. Hover Business Services LLP can help you identify relevant optimisation opportunities and plan practical next steps.",
    "Contact our team to discuss SEO services for your small business and request a tailored proposal."
  ],
  "items": [],
  "outro": [],
  "table": null
};

const ICONS = [TrendingUp, Search, MapPin, Gauge, Link2, BarChart3];

/* ============================== Page ============================== */

export default async function SmallBusinessSeoPage() {
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

      <section className="relative overflow-hidden bg-[var(--color-surface)] pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(#e5d9d0 1px,transparent 1px)", backgroundSize: "22px 22px" }} />
        <div className="container-max relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
            <Link href="/" className="hover:underline">Home</Link><ChevronRight size={13} />
            <Link href={HUB.href} className="hover:underline">{HUB.label}</Link><ChevronRight size={13} />
            <span className="text-[var(--color-ink)]">{PAGE.eyebrow}</span>
          </nav>
          <h1 className="mt-5 font-display font-extrabold" style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.04, letterSpacing: "-0.035em" }}>{PAGE.title}</h1>
          <p className="mt-5 max-w-[54ch] text-lg text-[var(--color-text-muted)]">{PAGE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)] transition-transform hover:-translate-y-0.5">Get a free quote <ArrowRight size={16} /></Link>
            <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold border-[var(--color-ink)]"><Phone size={15} /> {co.phone}</a>
          </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-white py-8">
        <div className="container-max grid gap-6 sm:grid-cols-3">
          {STATS.map(([v, l]) => (
            <div key={l} className="flex items-baseline gap-3"><span className="font-display text-4xl font-extrabold text-[var(--color-brand)]">{v}</span><span className="text-sm text-[var(--color-text-muted)]">{l}</span></div>
          ))}
        </div>
      </section>
      <Lead s={S01} tone="white" />
      <Cards s={S02} tone="surface" v="grid" />
      <Cards s={S03} tone="white" v="bento" />
      <Audience s={S04} tone="surface" />
      <Prose s={S05} tone="soft" />
      <Checklist s={S06} tone="white" />
      <Faq s={S07} phone={co.phone} />
      <Cta s={S08} phone={co.phone} />

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
