import Link from "next/link";
import {
  ArrowRight, ArrowUp, ArrowUpRight, BarChart3, Check, ChevronRight, Gauge, Link2, MapPin, Phone, Plus, Search, TrendingUp, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "SEO Audit Services in India | Hover Business Services",
    description: "Find technical SEO issues, improve website health, and uncover ranking opportunities with SEO audit services from Hover Business Services LLP. Contact us!",
    path: "/seo-audit",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "SEO Audit Services",
  "eyebrow": "SEO Audits & Diagnostics",
  "tagline": "Identify SEO Problems and Find New Growth Opportunities"
};

const HERO: { keyword: string; from: number; map?: boolean; vitals?: boolean } = {
  "keyword": "site health score",
  "from": 42,
  "vitals": true
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
    "label": "Technical SEO",
    "href": "/technical-seo"
  },
  {
    "label": "SEO Services",
    "href": "/seo-services"
  },
  {
    "label": "Local SEO",
    "href": "/local-seo"
  },
  {
    "label": "Link Building",
    "href": "/link-building"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Professional SEO Audit Services to Improve Website Performance",
  "intro": [
    "Our SEO audit services help identify website issues affecting rankings, organic traffic, and customer enquiries. Hover Business Services LLP analyses technical SEO, content, backlinks, and website performance to recommend practical improvements that strengthen search visibility and uncover ranking opportunities.",
    "SEO analysis is required to keep up the performance of a site. Old contents, indexing issues, broken links, and poor targeting can prevent a website from bringing in relevant visitors.",
    "At Hover Business Services LLP, we analyze your website for SEO issues and give recommendations according to your business goals. We take into account the guidelines of the search engines, user experience, keyword performance, and the actions of competitors.",
    "By conducting SEO analysis and optimizing the content, we want you to understand the state of your website and make decisions on how to improve your organic search performance."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Common SEO Problems That May Affect Your Website",
  "intro": [
    "Understanding what is holding your website back is an important step towards improving its performance. Our audit process can help identify issues such as:"
  ],
  "items": [
    {
      "t": "Poor keyword rankings",
      "b": "Pages may lack relevant keywords, useful content, or clear on-page optimisation."
    },
    {
      "t": "Declining organic traffic",
      "b": "Search updates, technical errors, outdated content, or changing competition may contribute to traffic losses."
    },
    {
      "t": "Crawlability and indexing errors",
      "b": "Search engines may struggle to access or index important pages."
    },
    {
      "t": "Weak on-page SEO",
      "b": "Missing metadata, unclear headings, and poor internal linking can limit page relevance."
    },
    {
      "t": "Low conversion rates",
      "b": "Visitors may leave without enquiring because of unclear content, navigation problems, or a poor user experience."
    },
    {
      "t": "Backlink quality concerns",
      "b": "Unnatural or irrelevant links may require closer investigation."
    },
    {
      "t": "Content gaps",
      "b": "Your website may not adequately address the questions and search intent of your target audience."
    }
  ],
  "outro": [
    "Identifying these problems helps establish a clear direction for further SEO improvements."
  ],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "Comprehensive SEO Audit Solutions for Every Website",
  "intro": [
    "Different websites face different optimisation challenges. Our SEO audit services can be tailored to your website structure, platform, industry, and marketing goals."
  ],
  "items": [
    {
      "t": "Technical SEO Audit",
      "b": "A technical SEO audit examines the website elements that affect crawling, rendering, and indexing. We review page speed, HTTP status codes, robots.txt directives, XML sitemaps, canonical tags, redirects, and other technical signals. The findings help identify technical barriers that may prevent search engines from accessing important pages."
    },
    {
      "t": "On-Page SEO Audit",
      "b": "Our on-page SEO audit reviews page titles, meta descriptions, heading structure, keyword placement, image alt text, and internal links. We also consider whether page content matches the intent behind relevant search queries. These recommendations help improve page relevance, content structure, and search engine understanding."
    },
    {
      "t": "Off-Page SEO and Backlink Audit",
      "b": "A backlink audit evaluates links pointing to your website and considers their relevance, quality, and potential risks. We also review competitor backlink profiles to identify possible opportunities for earning relevant links. The objective is to understand your website's external link profile and develop appropriate recommendations for strengthening its authority."
    },
    {
      "t": "Content SEO Audit",
      "b": "Content performance depends on relevance, usefulness, accuracy, and alignment with search intent. Our content SEO audit identifies outdated information, overlapping pages, keyword gaps, thin content, and opportunities to improve existing website copy. The review can help you prioritise content updates and develop pages that better address your audience's needs."
    },
    {
      "t": "Ecommerce SEO Audit",
      "b": "An ecommerce SEO audit focuses on the structure and optimisation of online stores. We assess product pages, category pages, filters, navigation, duplicate URLs, and relevant structured data. These checks help identify obstacles that may affect product discoverability and organic search performance."
    },
    {
      "t": "Complete Website SEO Audit",
      "b": "A comprehensive website SEO audit combines technical, on-page, off-page, and content analysis. It provides a broader view of your website's current SEO condition and highlights the areas requiring attention."
    },
    {
      "t": "Mobile SEO Audit",
      "b": "Mobile usability is important for visitors who browse and interact with your website on smartphones and tablets. We assess responsive layouts, mobile page speed, navigation, and content accessibility to identify potential usability concerns."
    },
    {
      "t": "Competitor SEO Audit",
      "b": "Competitor analysis helps reveal how competing websites approach keyword targeting, content development, site structure, and backlink acquisition. We use these findings to identify content gaps and potential opportunities for your own SEO strategy."
    },
    {
      "t": "Local SEO Audit",
      "b": "For businesses serving specific locations, a local SEO audit examines Google Business Profile information, business listings, citations, location pages, and review signals. It helps identify inconsistencies and opportunities to improve local search visibility."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "Convert SEO Insights Into Actionable Improvements",
  "intro": [
    "An audit is more useful when its findings lead to clear next steps. Our process focuses on identifying issues, explaining their potential impact, and organising recommendations by priority."
  ],
  "items": [
    {
      "t": "Experienced SEO Analysis",
      "b": "We review the website's structure, content, and technical signals to identify areas that may require improvement. The analysis is adapted to the website's size, industry, and existing SEO setup."
    },
    {
      "t": "Data-Based Audit Reports",
      "b": "Where data is available, we examine organic search performance, keyword visibility, indexing information, website traffic, and landing-page engagement. This helps support recommendations with relevant evidence rather than assumptions."
    },
    {
      "t": "SEO Tools and Website Diagnostics",
      "b": "SEO tools can help uncover technical errors, backlink concerns, keyword opportunities, and content gaps. Tool selection depends on the website and project requirements."
    },
    {
      "t": "Customised Audit Recommendations",
      "b": "Every website has different priorities. We tailor our recommendations to the issues identified, available resources, competition, and business objectives."
    },
    {
      "t": "Prioritised Fixes and Recommendations",
      "b": "The audit report outlines the findings and suggests which issues should be addressed first. This helps your marketing and development teams organise implementation and track progress."
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S05: Sec = {
  "h": "Our Step-by-Step Website SEO Audit Process",
  "intro": [
    "At Hover Business Services LLP, we use a structured process to assess website health and identify practical optimisation opportunities."
  ],
  "items": [
    {
      "t": "Website and Business Analysis",
      "b": "We review your website, business goals, target audience, and current search visibility to understand the context behind its performance."
    },
    {
      "t": "Technical SEO Assessment",
      "b": "We examine crawl errors, indexing status, redirects, site architecture, mobile performance, and other relevant technical factors."
    },
    {
      "t": "On-Page and Content Review",
      "b": "We assess metadata, headings, keyword targeting, internal links, content quality, and search intent alignment across important pages."
    },
    {
      "t": "Backlink and Competitor Analysis",
      "b": "We evaluate your backlink profile and compare relevant competitors to identify potential strengths, weaknesses, and content opportunities."
    },
    {
      "t": "SEO Audit Report",
      "b": "We organise the findings into a report that explains the main issues, supporting observations, and recommended improvements."
    },
    {
      "t": "Action Plan and Follow-Up",
      "b": "We prepare a prioritised roadmap for addressing the identified issues. Follow-up checks can help verify completed fixes and monitor changes in website performance."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S06: Sec = {
  "h": "SEO Audit Tools for Accurate Website Analysis",
  "intro": [
    "A combination of analytical tools can provide a more complete view of website health. Depending on access and project requirements, an SEO audit may use:"
  ],
  "items": [
    {
      "t": "Google Search Console",
      "b": "Review search impressions, clicks, indexing information, and search performance."
    },
    {
      "t": "Google Analytics",
      "b": "Understand website traffic patterns and available engagement or conversion data."
    },
    {
      "t": "Screaming Frog SEO Spider",
      "b": "Crawl website URLs to identify broken links, missing metadata, redirects, and other technical issues."
    },
    {
      "t": "Semrush",
      "b": "Research keyword opportunities, competitor visibility, and backlink information."
    },
    {
      "t": "Ahrefs",
      "b": "Examine backlink profiles, competing pages, and organic keyword opportunities."
    },
    {
      "t": "PageSpeed Insights",
      "b": "Assess page performance and Core Web Vitals data."
    }
  ],
  "outro": [
    "Tool data should be interpreted in context. No single tool can identify every SEO problem, and recommendations should be checked against the website itself."
  ],
  "table": null
};

/* cards */
const S07: Sec = {
  "h": "What Can You Gain From SEO Audit Services?",
  "intro": [
    "A structured SEO audit provides a clearer understanding of your website's strengths and weaknesses. Depending on the findings and the implementation of recommended changes, it can support:"
  ],
  "items": [
    {
      "t": "Improved keyword targeting",
      "b": "Identify relevant search terms and content gaps."
    },
    {
      "t": "Better technical health",
      "b": "Discover crawlability, indexing, redirect, and website performance issues."
    },
    {
      "t": "Stronger organic visibility",
      "b": "Address factors that may limit the discoverability of important pages."
    },
    {
      "t": "More relevant website traffic",
      "b": "Align content with user intent and appropriate search queries."
    },
    {
      "t": "Improved user experience",
      "b": "Identify navigation, mobile usability, and page performance concerns."
    },
    {
      "t": "Conversion opportunities",
      "b": "Review landing pages and user journeys for potential barriers to enquiries."
    },
    {
      "t": "A clearer SEO roadmap",
      "b": "Organise optimisation tasks according to priority and available resources."
    }
  ],
  "outro": [
    "Results depend on the issues found, the quality of implementation, competition, and other ranking factors. An audit cannot guarantee specific rankings, traffic growth, or leads."
  ],
  "table": null
};

/* cta */
const S08: Sec = {
  "h": "Make Better SEO Decisions With a Detailed Website Audit",
  "intro": [
    "It will be easier to work on the optimization of your website if you know where you should pay attention. An in-depth SEO audit services can help to uncover problems such as technical problems, content problems, and other factors that might impact the performance of your website in search engines.",
    "The services offered by Hover Business Services LLP can assist companies to determine and take action on improving these aspects according to their website's needs."
  ],
  "items": [],
  "outro": [
    "Ready to Improve Your Website's SEO Performance? Take the next step towards understanding your website's search performance. Contact Hover Business Services LLP to discuss your SEO audit requirements and request a proposal tailored to your business goals."
  ],
  "table": null
};

/* faq */
const S09: Sec = {
  "h": "Frequently Asked Questions",
  "intro": [],
  "items": [
    {
      "t": "Can an SEO audit help improve my website rankings immediately?",
      "b": "An SEO audit identifies issues affecting your rankings. Improvements may take time, depending on the problems found and how quickly they are fixed."
    },
    {
      "t": "How frequently should I conduct an SEO audit?",
      "b": "It is generally helpful to audit your website every 3–6 months or after major website updates or noticeable changes in traffic."
    },
    {
      "t": "Are SEO audit services useful for small businesses?",
      "b": "Yes. An SEO audit helps small businesses identify website issues, improve search visibility, and find opportunities to attract relevant visitors."
    },
    {
      "t": "What is the cost of an SEO audit?",
      "b": "The cost depends on your website's size, complexity, and the depth of analysis required. A customized audit can match your business needs and budget."
    },
    {
      "t": "Are SEO audit services worth the investment?",
      "b": "Yes. An SEO audit can reveal technical errors, content gaps, and optimisation opportunities that support better website performance and long-term SEO growth."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [TrendingUp, Search, MapPin, Gauge, Link2, BarChart3];

/* ============================== Page ============================== */

export default async function SeoAuditPage() {
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
      <Cards s={S02} tone="surface" v="bento" />
      <Cards s={S03} tone="white" v="rows" />
      <Cards s={S04} tone="soft" v="split" />
      <Steps s={S05} tone="white" v="rail" />
      <Cards s={S06} tone="ink" v="grid" />
      <Cards s={S07} tone="white" v="bento" />
      <Cta s={S08} phone={co.phone} />
      <Faq s={S09} phone={co.phone} />

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
