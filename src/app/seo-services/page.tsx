import Link from "next/link";
import {
  ArrowRight, ArrowUp, ArrowUpRight, BarChart3, Check, ChevronRight, Gauge, Link2, MapPin, Phone, Plus, Search, TrendingUp, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "SEO Services in India | Hover Business Services LLP",
    description: "Grow your online visibility with expert SEO services from Hover Business Services LLP. Contact us today to improve rankings and attract relevant traffic.",
    path: "/seo-services",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "SEO Services",
  "eyebrow": "SEO & Organic Growth",
  "tagline": "Hover Business Services LLP provides SEO services designed to help businesses improve online visibility, attract relevant visitors, and build a stronger digital presence. Our approach combines keyword research, content optimization, technical SEO, and AI search optimization to support your business goals."
};

const HERO: { keyword: string; from: number; map?: boolean; vitals?: boolean } = {
  "keyword": "digital marketing agency delhi",
  "from": 18
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
    "label": "Local SEO",
    "href": "/local-seo"
  },
  {
    "label": "Ecommerce SEO",
    "href": "/ecommerce-seo"
  },
  {
    "label": "SEO Audit",
    "href": "/seo-audit"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Best SEO Services in India for Search Engines & AI Platforms",
  "intro": [
    "As search behaviour evolves, businesses need a strategy that covers traditional search engine results as well as emerging AI-powered discovery platforms. We focus on making your website easier to find, understand, and navigate while improving the relevance of your content for your target audience.",
    "Our SEO strategies are built around your industry, competition, website performance, and growth objectives. From improving keyword visibility to identifying technical issues and strengthening website authority, we help you establish a solid foundation for sustainable organic growth."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* prose */
const S02: Sec = {
  "h": "SEO Company in India for Sustainable Online Growth",
  "intro": [
    "However, there is more to a website than an attractive appearance for it to be successful in the search engine. The search engine takes into account many aspects which include relevance of content, accessibility, user experience and website credibility. Without a strategic plan, businesses find it difficult to reach their target audience.",
    "At Hover Business Services LLP, we design custom SEO plans for our clients who are interested in improving their search performance in India and beyond. We start by understanding your business, studying your competitors and determining what keywords work best for your customers.",
    "Some of the SEO services that we offer include on-page optimization, technical optimization, content planning, internal links, structuring of data and suitable ways of building credibility for your website. Also included are possibilities of increasing your website's visibility in search via AI-based search engines.",
    "Our measures of success include indicators such as organic traffic, performance of key phrases, engagement levels and inquiries/ conversions if possible."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* prose */
const S03: Sec = {
  "h": "Proven SEO Strategies That Drive Growth",
  "intro": [
    "We deliver customized search engine optimization services designed to improve search visibility and measurable performance. Our affordable SEO services help businesses attract high-intent organic traffic, rank for high-value keywords, and strengthen visibility across traditional search engines and LLM-powered search platforms.",
    "Explore our client success stories to see how our SEO strategies deliver real, measurable results."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "SEO Strategies That Support Measurable Growth",
  "intro": [
    "Effective SEO connects website improvements with real business objectives. Better visibility can help potential customers discover your products, services, and expertise when they search for relevant information.",
    "Our optimization process focuses on opportunities such as:"
  ],
  "items": [
    {
      "t": "Organic visibility",
      "b": "Improve your website's eligibility to appear for relevant search queries."
    },
    {
      "t": "Qualified website traffic",
      "b": "Attract visitors whose search intent aligns with your offerings."
    },
    {
      "t": "Content performance",
      "b": "Develop useful pages that answer customer questions and address their needs."
    },
    {
      "t": "Technical health",
      "b": "Identify issues affecting crawling, indexing, and website performance."
    },
    {
      "t": "Lead generation",
      "b": "Improve the user journey so visitors can find relevant information and take appropriate action."
    },
    {
      "t": "Long-term growth",
      "b": "Build a stronger organic presence through consistent optimization and performance analysis."
    }
  ],
  "outro": [
    "Actual results depend on competition, website condition, implementation, and other search-related factors. We use available performance data to identify progress and areas that need further attention."
  ],
  "table": null
};

/* prose */
const S05: Sec = {
  "h": "AI-Powered SEO Services for Modern Businesses",
  "intro": [
    "AI-generated summaries and conversational discovery are becoming more common in search engine technology. Companies need to be ready for such developments through solid SEO strategies and quality content creation.",
    "Our AI-oriented SEO strategy looks at the way in which your website conveys information both to visitors and to search algorithms. Through the analysis of content organization, topic coverage, semantic relevance, and technical aspects, we will be able to find out what can be improved.",
    "Instead of considering AI optimization an alternative to SEO, we are integrating appropriate techniques into a comprehensive search strategy."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S06: Sec = {
  "h": "Explore Our SEO Services",
  "intro": [],
  "items": [
    {
      "t": "National SEO Services",
      "b": "National SEO works well for companies who seek clients in various cities, states, or regions. We specialize in research on appropriate keywords, creation of content, optimization techniques, and building up website authority."
    },
    {
      "t": "Local SEO Services",
      "b": "SEO for local areas allows companies to increase their visibility in location-based search queries. The strategies employed by us can include optimizing web pages for specific locations, ensuring consistency of business information, keyword research on a local level, improvement of Google Business Profiles, and local authority signals. These strategies allow companies to gain more visibility among the people searching for local products/services online."
    },
    {
      "t": "AI SEO Services",
      "b": "AI SEO is about optimizing website content and underlying technology for future AI-driven search. This can vary according to your particular requirements but may involve semantic content optimization, structured content, question-related content, and tracking any AI visibility signals that are available."
    },
    {
      "t": "E-commerce SEO Services",
      "b": "E-commerce SEO helps online stores improve the discoverability of product and category pages. We assess product descriptions, category structure, internal links, metadata, technical issues, and relevant search opportunities to support organic product discovery."
    },
    {
      "t": "Small Business SEO",
      "b": "Small businesses often need to compete with established brands while working within limited resources. Our approach prioritizes high-value keywords, useful website content, technical improvements, and location or niche-specific opportunities based on your business goals."
    }
  ],
  "outro": [],
  "table": null
};

/* checklist */
const S07: Sec = {
  "h": "Platform-Specific SEO Optimization",
  "intro": [
    "Different website platforms have different technical requirements and customization options. Our SEO approach considers the platform your website uses and the improvements it supports.",
    "Depending on your website, optimization may cover:"
  ],
  "items": [
    {
      "t": "",
      "b": "WordPress"
    },
    {
      "t": "",
      "b": "Shopify"
    },
    {
      "t": "",
      "b": "Magento"
    },
    {
      "t": "",
      "b": "BigCommerce"
    },
    {
      "t": "",
      "b": "Wix"
    },
    {
      "t": "",
      "b": "Joomla"
    },
    {
      "t": "",
      "b": "OpenCart"
    },
    {
      "t": "",
      "b": "Laravel-based websites"
    },
    {
      "t": "",
      "b": "Angular applications"
    },
    {
      "t": "",
      "b": "Other custom-built websites"
    }
  ],
  "outro": [
    "Our recommendations may include improving metadata, page structure, internal links, loading performance, indexing controls, structured data, and content accessibility. The exact work depends on your website's architecture and technical requirements."
  ],
  "table": null
};

/* cards */
const S08: Sec = {
  "h": "Our SEO Approach for Long-Term Performance",
  "intro": [
    "We follow a structured process to identify opportunities, prioritize improvements, and evaluate progress."
  ],
  "items": [
    {
      "t": "Business and Market Research",
      "b": "The first step starts with comprehending your products/services, target market, business goals, and the competitive landscape. With these, we can pinpoint SEO opportunities and create a list of priorities for the SEO strategy."
    },
    {
      "t": "Keyword Research and Search Intent Mapping",
      "b": "The process involves researching keywords, associated subjects, and user searches. Then, we align the search intent with specific pages to ensure relevance in content and avoid redundancy among similar pages."
    },
    {
      "t": "Website and Competitor Audit",
      "b": "These include technical health, indexation, content quality, site architecture, internal links, and other authority metrics. The study of competitors will help you find areas where you might improve your optimization strategy."
    },
    {
      "t": "On-Page and Content Optimization",
      "b": "Page title, meta description, headings, page content structure, internal linking, and other on-page elements get optimized. Our content suggestions ensure accuracy, relevance, readability, and adherence to user intent."
    },
    {
      "t": "Technical SEO Improvements",
      "b": "These include potential issues with crawling, indexing, performance, mobile usability, and search engine understanding. Based on the website, some of the recommended solutions may include adding structured data, canonicalization, or redirect changes among others."
    },
    {
      "t": "Authority Building and AI Search Optimization",
      "b": "We recognize the right ways of enhancing the credibility of your website by providing useful information, proper third-party citations, and link building methods. We also evaluate the visibility of your brand through AI-based search experiences when required."
    },
    {
      "t": "Performance Monitoring and Reporting",
      "b": "We analyze data generated by tools like Google Search Console and website analysis tools. Traffic, keywords, engagement levels, and conversion rates enable us to measure our progress and develop the next phase."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S09: Sec = {
  "h": "Two Additional Ways SEO Can Support Your Business",
  "intro": [],
  "items": [
    {
      "t": "Turn Search Intent Into Better Customer Experiences",
      "b": "SEO should serve the purpose of guiding the visitor towards an answer rather than directing him towards the website itself. If your pages actually answer customers' questions and explain further actions, then your visitors will be able to learn more about your services/products and determine if they are suitable for them. Search intent, content structuring, page relevancy and navigation are some of the factors we take into account to determine possible improvements in the visitor experience."
    },
    {
      "t": "Prepare Your Website for the Next Phase of Search",
      "b": "Technological advancement in search keeps coming up with novel methods through which users can seek information and compare companies. Having an effective website with relevant and well-organized information makes for an ideal starting point to respond to these advancements. The strategy we employ integrates proven SEO techniques with advancements in AI-based search technology. We analyze all the opportunities that come up and focus on those most appropriate for your company."
    }
  ],
  "outro": [],
  "table": null
};

/* checklist */
const S10: Sec = {
  "h": "What Our SEO Services Cover",
  "intro": [
    "Our SEO campaigns can include a combination of the following activities, depending on the agreed scope."
  ],
  "items": [
    {
      "t": "",
      "b": "Business and website analysis"
    },
    {
      "t": "",
      "b": "Keyword research and search intent mapping"
    },
    {
      "t": "",
      "b": "Competitor research"
    },
    {
      "t": "",
      "b": "Content strategy and optimization"
    },
    {
      "t": "",
      "b": "User experience and page structure recommendations"
    },
    {
      "t": "",
      "b": "Technical SEO audits and fixes"
    },
    {
      "t": "",
      "b": "Local SEO improvements"
    },
    {
      "t": "",
      "b": "Structured data implementation"
    },
    {
      "t": "",
      "b": "AI search optimization"
    },
    {
      "t": "",
      "b": "Relevant authority-building activities"
    },
    {
      "t": "",
      "b": "Organic performance tracking and reporting"
    }
  ],
  "outro": [
    "Not every website requires the same combination of services. We prioritize tasks according to their potential value, technical feasibility, and relevance to your business goals."
  ],
  "table": null
};

/* faq */
const S11: Sec = {
  "h": "Frequently Asked Questions About SEO Services",
  "intro": [],
  "items": [
    {
      "t": "What are SEO services?",
      "b": "SEO services involve improving a website's technical structure, content, relevance, and online authority to support its visibility in organic search results. These activities can include keyword research, on-page optimization, technical SEO, content development, local SEO, and performance monitoring."
    },
    {
      "t": "How do SEO services work?",
      "b": "SEO begins with understanding your business and identifying how your target audience searches for relevant products or services. The process then involves auditing your website, researching keywords, improving content and technical elements, addressing relevant authority gaps, and monitoring performance over time."
    },
    {
      "t": "Which businesses can benefit from SEO?",
      "b": "Businesses of different sizes and industries can benefit from SEO, including local service providers, professional firms, online retailers, technology companies, manufacturers, and national brands. The strategy should reflect each business's audience, competition, and objectives."
    },
    {
      "t": "What types of SEO services are available?",
      "b": "Common types include local SEO, national SEO, e-commerce SEO, technical SEO, on-page SEO, off-page SEO, and AI-focused search optimization. A campaign may combine several approaches depending on the website's needs."
    },
    {
      "t": "How much do SEO services cost in India?",
      "b": "SEO costs vary according to competition, website size, target locations, technical requirements, and the scope of ongoing work. A customized proposal should outline the deliverables and reporting expectations before a campaign begins."
    },
    {
      "t": "Can SEO improve visibility on AI-powered search platforms?",
      "b": "SEO can support AI search readiness through useful content, clear website structure, technical accessibility, and credible information. However, traditional search rankings do not guarantee inclusion in AI-generated responses."
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S12: Sec = {
  "h": "Ready to Improve Your Website's Search Visibility?",
  "intro": [
    "A consistent SEO strategy can help your business reach relevant audiences, strengthen its online presence, and identify new opportunities for growth.",
    "Hover Business Services LLP can help you assess your website, prioritize optimization opportunities, and develop an SEO plan suited to your business goals."
  ],
  "items": [],
  "outro": [
    "Contact our team today to discuss your SEO requirements and take the next step toward stronger online visibility."
  ],
  "table": null
};

const ICONS = [TrendingUp, Search, MapPin, Gauge, Link2, BarChart3];

/* ============================== Page ============================== */

export default async function SeoServicesPage() {
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
      <Prose s={S02} tone="surface" />
      <Prose s={S03} tone="white" />
      <Cards s={S04} tone="soft" v="grid" />
      <Prose s={S05} tone="white" />
      <Cards s={S06} tone="ink" v="bento" />
      <Checklist s={S07} tone="white" />
      <Cards s={S08} tone="surface" v="rows" />
      <Cards s={S09} tone="white" v="split" />
      <Checklist s={S10} tone="soft" />
      <Faq s={S11} phone={co.phone} />
      <Cta s={S12} phone={co.phone} />

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
