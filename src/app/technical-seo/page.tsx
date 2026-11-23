import Link from "next/link";
import {
  ArrowRight, ArrowUp, ArrowUpRight, BarChart3, Check, ChevronRight, Gauge, Link2, MapPin, Phone, Plus, Search, TrendingUp, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Technical SEO Services in India | Hover Business Services",
    description: "Improve website speed, crawlability, and indexing with technical SEO services from Hover Business Services LLP. Contact our team today.",
    path: "/technical-seo",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Technical SEO Services",
  "eyebrow": "Technical SEO",
  "tagline": "Technical SEO Services: Improve Website Health, Speed and Search Visibility"
};

const HERO: { keyword: string; from: number; map?: boolean; vitals?: boolean } = {
  "keyword": "core web vitals passed",
  "from": 31,
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
    "label": "SEO Audit",
    "href": "/seo-audit"
  },
  {
    "label": "SEO Services",
    "href": "/seo-services"
  },
  {
    "label": "AI Search Optimization",
    "href": "/ai-search-optimization"
  },
  {
    "label": "Ecommerce SEO",
    "href": "/ecommerce-seo"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Why Technical SEO Matters for Organic Growth",
  "intro": [
    "Technical SEO helps search engines crawl, understand, and index your website. At Hover Business Services LLP, we identify technical issues, improve website performance, and help strengthen your website's search visibility.",
    "A technically sound website supports a better experience for visitors and gives search engines clearer signals about your content. Addressing technical issues can help your existing SEO efforts work more effectively."
  ],
  "items": [
    {
      "t": "Website Speed and Core Web Vitals",
      "b": "Slow-loading pages can frustrate visitors and contribute to poor engagement. We assess loading performance, responsiveness, and layout stability to identify improvements across desktop and mobile devices."
    },
    {
      "t": "Crawlability and Indexing",
      "b": "Search engines need to discover and process your important pages before they can appear in search results. Incorrect robots.txt rules, broken links, and unsuitable indexing directives can create unnecessary barriers."
    },
    {
      "t": "Website Structure and Internal Links",
      "b": "A logical site hierarchy helps visitors navigate your website and helps search engines understand the relationship between pages. A well-planned internal linking structure can also direct attention towards important content."
    },
    {
      "t": "Website Redesigns and Migrations",
      "b": "Changing your domain, URL structure, CMS, or website design can affect organic visibility if the transition is not managed carefully. Redirect mapping, metadata checks, canonical tags, and post-launch monitoring help reduce avoidable risks."
    },
    {
      "t": "JavaScript Rendering",
      "b": "Websites built with JavaScript frameworks may require additional checks to confirm that important content and links are available to search engines. Rendering analysis helps uncover issues that may not be obvious during a normal browser visit."
    },
    {
      "t": "International Website Configuration",
      "b": "Websites targeting multiple countries or languages need consistent signals. Incorrect hreflang annotations, conflicting canonical tags, and duplicated regional pages can make it harder for search engines to select the appropriate version."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Technical SEO Services Designed Around Your Website",
  "intro": [
    "Our technical SEO services focus on identifying problems, recommending practical solutions, and supporting implementation where agreed. The exact scope depends on your platform, website size, and current technical condition."
  ],
  "items": [
    {
      "t": "Comprehensive Technical SEO Audit",
      "b": "We examine your website to identify technical barriers and organise findings according to their potential impact and implementation priority.",
      "list": [
        "Website crawling and error identification",
        "Indexing and coverage review",
        "Technical issue assessment",
        "Actionable recommendations and implementation priorities"
      ]
    },
    {
      "t": "Core Web Vitals and Page Speed Optimisation",
      "b": "We review page performance and identify opportunities to improve loading speed, interaction responsiveness, and visual stability.",
      "list": [
        "Image and resource optimisation recommendations",
        "CSS and JavaScript efficiency checks",
        "Mobile performance analysis",
        "Core Web Vitals assessment"
      ]
    },
    {
      "t": "Crawlability and Indexation Management",
      "b": "We check whether search engines can access the pages that matter to your business and identify unnecessary crawling or indexing issues.",
      "list": [
        "Robots.txt and XML sitemap review",
        "Indexation directive checks",
        "Duplicate and low-value URL assessment",
        "Orphan-page identification"
      ]
    },
    {
      "t": "Website Architecture and Internal Linking",
      "b": "We evaluate how pages are organised and connected to help users and search engines navigate your website more efficiently.",
      "list": [
        "URL structure assessment",
        "Internal linking recommendations",
        "Website hierarchy review",
        "Identification of important pages with limited internal links"
      ]
    },
    {
      "t": "Schema Markup and Structured Data",
      "b": "Structured data can help search engines interpret specific information on your pages and may make eligible content suitable for enhanced search results.",
      "list": [
        "Relevant schema type assessment",
        "JSON-LD implementation guidance",
        "Structured data validation",
        "Review of eligible rich-result opportunities"
      ]
    },
    {
      "t": "JavaScript and Rendering Analysis",
      "b": "For dynamic websites, we investigate whether search engines can access important content and links after rendering.",
      "list": [
        "Rendering and indexation checks",
        "Single-page application assessment",
        "Server-side rendering and pre-rendering recommendations",
        "JavaScript-related SEO issue identification"
      ]
    },
    {
      "t": "Redirects, Canonical Tags and Website Migrations",
      "b": "We review URL signals to help prevent duplicate-page confusion and preserve useful pathways when your website changes.",
      "list": [
        "Redirect mapping and testing",
        "Canonical tag validation",
        "Broken URL and redirect-chain checks",
        "Pre-launch and post-launch migration reviews"
      ]
    },
    {
      "t": "HTTPS, Server Health and Log Analysis",
      "b": "Technical reliability is another important part of website optimisation. We review relevant server and security signals to identify issues that may interfere with crawling or access.",
      "list": [
        "HTTPS and mixed-content checks",
        "HTTP status-code analysis",
        "Server response assessment",
        "Log-file analysis where access is available"
      ]
    },
    {
      "t": "Mobile and International SEO",
      "b": "We review mobile usability signals and international configurations to help your website serve its intended audiences effectively.",
      "list": [
        "Mobile-first indexing readiness checks",
        "Hreflang implementation review",
        "Regional URL and canonical consistency",
        "International website structure assessment"
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* prose */
const S03: Sec = {
  "h": "Prepare Your Website for Traditional and AI-Powered Search",
  "intro": [
    "Search experiences continue to evolve, but accessible content and a clear website structure remain important foundations. Technical SEO can help search systems discover relevant pages, interpret their content, and process structured information.",
    "Our approach considers crawlability, internal links, structured data, rendering, and page quality as part of the broader search optimisation process. These improvements can support discoverability, although they do not guarantee rankings or inclusion in AI-generated answers."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* audience */
const S04: Sec = {
  "h": "Which Businesses Can Benefit from Technical SEO?",
  "intro": [
    "Technical SEO can be useful for different types of websites, especially when technical complexity or growth creates new challenges."
  ],
  "items": [
    {
      "t": "Large and enterprise websites",
      "b": "Manage extensive URL structures and indexing concerns."
    },
    {
      "t": "Ecommerce stores and marketplaces",
      "b": "Address duplicate product URLs, faceted navigation, and pagination."
    },
    {
      "t": "SaaS and technology companies",
      "b": "Maintain a clear structure as product pages and resource libraries expand."
    },
    {
      "t": "Businesses after a redesign",
      "b": "Investigate organic traffic changes following a website launch or migration."
    },
    {
      "t": "JavaScript-based websites",
      "b": "Check rendering and indexing across dynamic pages."
    },
    {
      "t": "Websites with stagnant organic visibility",
      "b": "Identify technical issues that may limit the effectiveness of content and link-building efforts."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S05: Sec = {
  "h": "Technical SEO Support Across Different Platforms",
  "intro": [
    "Every CMS and development framework has its own technical requirements. Our assessment can be tailored to the platform used by your business, subject to access and project scope.",
    "Potential platforms and technologies include:"
  ],
  "items": [
    {
      "t": "CMS platforms",
      "b": "WordPress, Webflow, Wix, Drupal, Joomla, and Squarespace."
    },
    {
      "t": "Ecommerce platforms",
      "b": "Shopify, WooCommerce, Magento, BigCommerce, and PrestaShop."
    },
    {
      "t": "JavaScript frameworks",
      "b": "React, Next.js, Vue, Nuxt, and Angular."
    },
    {
      "t": "Enterprise and custom environments",
      "b": "Headless CMS platforms, single-page applications, and custom-built websites."
    }
  ],
  "outro": [
    "Confirm your team's actual platform capabilities before publishing this list as a guaranteed service offering."
  ],
  "table": null
};

/* steps */
const S06: Sec = {
  "h": "A Practical Technical SEO Process",
  "intro": [
    "At Hover Business Services LLP, a structured workflow can help teams understand what needs attention and how progress will be assessed."
  ],
  "items": [
    {
      "t": "Website assessment",
      "b": "Review crawling, indexing, speed, site structure, and other relevant technical factors."
    },
    {
      "t": "Prioritise the findings",
      "b": "Group issues by severity, scope, dependencies, and potential business impact."
    },
    {
      "t": "Plan the fixes",
      "b": "Prepare recommendations that your marketing and development teams can act on."
    },
    {
      "t": "Support implementation",
      "b": "Coordinate agreed changes with the relevant team or developer."
    },
    {
      "t": "Validate and monitor",
      "b": "Re-crawl affected pages, verify fixes, and monitor available performance data."
    }
  ],
  "outro": [],
  "table": null
};

/* plans */
const S07: Sec = {
  "h": "Flexible Technical SEO Engagements",
  "intro": [
    "The right level of support depends on your website's needs. Common engagement options include:"
  ],
  "items": [
    {
      "t": "Technical SEO Audit",
      "b": "A diagnostic review with a prioritised recommendations document."
    },
    {
      "t": "Audit and Implementation Support",
      "b": "Assessment followed by assistance with agreed fixes and validation."
    },
    {
      "t": "Ongoing Technical SEO",
      "b": "Regular monitoring, issue reviews, and continued optimisation."
    },
    {
      "t": "Migration and Complex Website Support",
      "b": "Planning and checks for redesigns, replatforming, URL changes, and technically complex websites."
    }
  ],
  "outro": [
    "The final scope, deliverables, timelines, and pricing should be confirmed after reviewing your requirements."
  ],
  "table": null
};

/* checklist */
const S08: Sec = {
  "h": "Measure Technical Improvements with Clear Reporting",
  "intro": [
    "Technical work should be reviewed against meaningful indicators rather than assumptions. Depending on the project, reporting may include:"
  ],
  "items": [
    {
      "t": "",
      "b": "Google Search Console indexing and coverage data"
    },
    {
      "t": "",
      "b": "Organic impressions, clicks, and landing-page trends"
    },
    {
      "t": "",
      "b": "Core Web Vitals and page performance"
    },
    {
      "t": "",
      "b": "Crawl errors and HTTP status codes"
    },
    {
      "t": "",
      "b": "Structured data validation"
    },
    {
      "t": "",
      "b": "Progress against agreed technical fixes"
    }
  ],
  "outro": [
    "These indicators help teams understand what has changed and identify issues that require further attention. Organic results may also depend on content quality, competition, authority, and other factors beyond technical SEO."
  ],
  "table": null
};

/* faq */
const S09: Sec = {
  "h": "Frequently Asked Questions",
  "intro": [],
  "items": [
    {
      "t": "What are technical SEO services?",
      "b": "Technical SEO services improve the technical elements of a website so search engines can discover, crawl, render, and index its important pages. Common areas include site speed, indexing, internal links, structured data, and website security."
    },
    {
      "t": "Do technical SEO services include fixing the issues?",
      "b": "The scope varies by engagement. Some projects cover an audit and recommendations, while others include implementation assistance, testing, and ongoing monitoring. Confirm the deliverables before work begins."
    },
    {
      "t": "Which website platforms can be assessed?",
      "b": "Many common CMS, ecommerce, JavaScript, and custom-built platforms can be assessed. The available implementation options depend on the technology, access permissions, and project requirements."
    },
    {
      "t": "Can technical SEO help after a website migration?",
      "b": "Yes. A technical review can identify problems with redirects, metadata, canonical tags, internal links, and indexing after a migration. Careful planning and monitoring can reduce avoidable risks, but no provider can guarantee that every ranking will remain unchanged."
    },
    {
      "t": "How long does technical SEO take to show results?",
      "b": "The timeline depends on the issue, website size, implementation speed, and how quickly search engines recrawl affected pages. Some fixes may be reflected relatively quickly, while broader structural changes can take longer."
    },
    {
      "t": "Is technical SEO relevant to AI search?",
      "b": "Yes. Crawlable pages, accessible content, clear site structure, and suitable structured data can help search systems interpret website information. These elements do not guarantee that a website will appear in AI-generated responses."
    },
    {
      "t": "Is technical SEO a one-time task?",
      "b": "A one-time audit may be suitable for a smaller website with limited issues. Websites that publish frequently, release code changes, or manage large inventories may benefit from recurring technical checks."
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S10: Sec = {
  "h": "Find and Resolve the Technical Issues Holding Your Website Back",
  "intro": [
    "A website needs more than useful content to perform well in organic search. Technical barriers can affect how search engines access and interpret important pages.",
    "Hover Business Services LLP can help you assess your website's technical condition and identify practical areas for improvement. Start with a review of your website's needs and determine which fixes deserve priority."
  ],
  "items": [],
  "outro": [
    "Get in touch with our team to discuss your technical SEO requirements and plan your next steps."
  ],
  "table": null
};

const ICONS = [TrendingUp, Search, MapPin, Gauge, Link2, BarChart3];

/* ============================== Page ============================== */

export default async function TechnicalSeoPage() {
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
      <Lead s={S01} tone="white" />
      <Cards s={S02} tone="soft" v="split" />
      <Prose s={S03} tone="white" />
      <Audience s={S04} tone="surface" />
      <Cards s={S05} tone="ink" v="grid" />
      <Steps s={S06} tone="white" v="rail" />
      <Plans s={S07} tone="surface" />
      <Checklist s={S08} tone="white" />
      <Faq s={S09} phone={co.phone} />
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
