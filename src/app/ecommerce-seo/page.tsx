import Link from "next/link";
import {
  ArrowRight, ArrowUp, ArrowUpRight, BarChart3, Check, ChevronRight, Gauge, Link2, MapPin, Phone, Plus, Search, TrendingUp, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Ecommerce SEO Services in India | Hover Business Services",
    description: "Grow your online store with ecommerce SEO services from Hover Business Services LLP. Improve product visibility and attract relevant buyers. Contact us!",
    path: "/ecommerce-seo",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Ecommerce SEO Services",
  "eyebrow": "Ecommerce Growth",
  "tagline": "Want to attract more shoppers and increase sales through organic search? Our ecommerce SEO services help online stores improve search visibility, reach potential buyers, and make it easier for customers to discover their products. From product page optimization to technical SEO, we develop strategies around your store's platform, target audience, and business objectives."
};

const HERO: { keyword: string; from: number; map?: boolean; vitals?: boolean } = {
  "keyword": "buy cotton bedsheets online",
  "from": 24
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
    "label": "Content Marketing",
    "href": "/content-writing"
  },
  {
    "label": "Link Building",
    "href": "/link-building"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Ecommerce SEO Company Focused on Visibility and Sales Growth",
  "intro": [
    "Running an online store means competing with numerous brands for the attention of potential buyers. Even with quality products, your business may struggle to attract customers if your pages do not appear for relevant searches.",
    "Hover Business Services LLP offers ecommerce SEO solutions designed to improve product discoverability, strengthen category page rankings, and attract visitors with genuine purchase intent. Our process begins with an assessment of your website, product range, competitors, and existing search performance.",
    "We focus on essential areas such as keyword research, product and category page optimization, website architecture, mobile usability, page speed, and technical SEO. We also consider structured data and emerging AI-powered search experiences to help search platforms understand your products and present relevant information.",
    "Whether you operate a growing online store or manage a large ecommerce website, our approach is tailored to your requirements. The objective is to build a stronger organic presence that supports qualified traffic, better shopping experiences, and sustainable business growth."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* prose */
const S02: Sec = {
  "h": "Why Ecommerce SEO Matters for Online Businesses",
  "intro": [
    "Consumers often search online to look for comparisons, alternatives, and shopping destinations that fulfill their requirements. The more challenging it is to find your site, the more likely it is that your sales will be going to rival companies.",
    "An efficient ecommerce SEO plan will help you get your products noticed by the right people and at the right point in the buying cycle. This will also optimize the structure of your shop, making it easy for consumers to navigate through categories and learn about your products.",
    "The ecommerce SEO strategy used by us involves linking up the search demand with relevant product information and good user experience. We do not focus merely on rankings but think about the business outcomes of organic visibility."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "Ecommerce SEO Performance: What We Track",
  "intro": [
    "Every store has different targets, so campaign reporting should reflect its priorities. We can monitor relevant performance indicators such as:"
  ],
  "items": [
    {
      "t": "Organic Website Traffic",
      "b": "Measure visits from unpaid search results and identify which pages attract relevant shoppers."
    },
    {
      "t": "Product and Category Rankings",
      "b": "Track visibility for priority keywords related to your products and collections."
    },
    {
      "t": "Organic Conversions",
      "b": "Review purchases, enquiries, and other agreed conversion actions attributed to organic search."
    },
    {
      "t": "Product Page Engagement",
      "b": "Assess relevant engagement indicators to identify opportunities for better content and usability."
    },
    {
      "t": "Revenue Contribution",
      "b": "Where suitable tracking is available, evaluate the contribution of organic search to ecommerce sales."
    }
  ],
  "outro": [
    "Actual results vary according to the store's condition, competition, product demand, and implementation."
  ],
  "table": null
};

/* audience */
const S04: Sec = {
  "h": "Ecommerce SEO Strategies for Different Industries",
  "intro": [
    "Different product categories require different approaches to keyword targeting, content, and customer intent. Our strategies can be adapted to a range of ecommerce sectors."
  ],
  "items": [
    {
      "t": "Fashion and Apparel",
      "b": "Optimize product descriptions, category pages, and relevant search terms to help shoppers discover clothing, footwear, and accessories."
    },
    {
      "t": "Health and Wellness",
      "b": "Improve product information, website organization, and relevant organic visibility for wellness and personal care stores."
    },
    {
      "t": "Beauty and Cosmetics",
      "b": "Support product discovery through detailed descriptions, category optimization, useful content, and structured product information."
    },
    {
      "t": "Food and Beverage",
      "b": "Help online food retailers improve the visibility of product categories, specialty items, and relevant purchase-focused searches."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S05: Sec = {
  "h": "Ecommerce SEO Services to Improve Your Store's Performance",
  "intro": [
    "Our ecommerce SEO services address the areas that influence product discoverability, website usability, and organic search performance."
  ],
  "items": [
    {
      "t": "Ecommerce SEO Audit and Competitor Analysis",
      "b": "We review your website's technical condition, current rankings, product pages, category structure, and competitor landscape. This assessment helps identify optimization gaps and establish priorities for your campaign."
    },
    {
      "t": "Product and Category Page Optimization",
      "b": "Product and category pages are central to ecommerce SEO. We refine page titles, meta descriptions, headings, product descriptions, internal links, and relevant keywords to improve relevance and help shoppers find the information they need."
    },
    {
      "t": "Technical SEO and Website Architecture",
      "b": "Technical issues can affect how search engines crawl, index, and understand your store. We assess areas such as duplicate URLs, crawlability, indexation, canonical tags, broken links, redirects, XML sitemaps, and website navigation."
    },
    {
      "t": "Ecommerce Keyword Research",
      "b": "We research the terms customers use when searching for products, comparing options, and preparing to buy. Keywords are mapped to suitable product pages, category pages, and supporting content to reduce overlap and strengthen search relevance."
    },
    {
      "t": "Website Speed and Mobile Optimization",
      "b": "A responsive, efficient website makes shopping easier across devices. We identify opportunities to improve loading performance, mobile usability, navigation, and page experience while considering the technical requirements of your ecommerce platform."
    },
    {
      "t": "Structured Data and Product Search Enhancements",
      "b": "Relevant structured data can help search engines interpret product details, prices, availability, and review information when supported by the page and applicable guidelines. We review implementation opportunities to improve the accuracy and clarity of your product information."
    },
    {
      "t": "Content Development and Organic Authority",
      "b": "Useful buying guides, product comparisons, category introductions, and frequently asked questions can help customers make informed decisions. We plan supporting content around search intent and relevant topics while identifying appropriate opportunities to build your website's authority."
    }
  ],
  "outro": [],
  "table": null
};

/* checklist */
const S06: Sec = {
  "h": "Ecommerce SEO Solutions for Popular Platforms",
  "intro": [
    "Every ecommerce platform has its own structure and technical requirements. Our optimization approach considers the platform you use, the size of your catalogue, and the way your products are organized.",
    "We can assess ecommerce websites built with platforms and technologies such as:"
  ],
  "items": [
    {
      "t": "",
      "b": "Shopify"
    },
    {
      "t": "",
      "b": "WooCommerce"
    },
    {
      "t": "",
      "b": "Magento and Adobe Commerce"
    },
    {
      "t": "",
      "b": "BigCommerce"
    },
    {
      "t": "",
      "b": "OpenCart"
    },
    {
      "t": "",
      "b": "Wix"
    },
    {
      "t": "",
      "b": "PrestaShop"
    },
    {
      "t": "",
      "b": "Custom-built ecommerce websites"
    }
  ],
  "outro": [
    "The scope of support depends on the platform, available access, and specific implementation requirements."
  ],
  "table": null
};

/* cards */
const S07: Sec = {
  "h": "Platform-Specific Ecommerce SEO Services",
  "intro": [],
  "items": [
    {
      "t": "Shopify SEO Services",
      "b": "It is necessary for the Shopify stores to have organized collections, proper optimized product pages, proper navigation, and correct technical settings. The approach of our SEO services for Shopify includes optimization of products and collections, metadata optimization, proper internal linking, duplicate URLs, performance optimization, and structured data. Furthermore, we look into the theme of the store and also the apps used by them. Grow your Shopify store with a focused SEO strategy tailored to your products and customers."
    },
    {
      "t": "WooCommerce SEO Services",
      "b": "WooCommerce offers ecommerce capabilities along with WordPress, allowing businesses the freedom to have control over their website architecture and content. Some of the WooCommerce SEO services that we offer include product category optimization, URL structure review, technical audit, schema analysis, content optimization, and internal link building. Additionally, we look at other problems related to plugins, website performance, and indexation. Improve your WooCommerce store's organic discoverability with practical, data-informed optimization."
    },
    {
      "t": "Magento and Adobe Commerce SEO",
      "b": "Magento and Adobe Commerce allow building large product catalogs and sophisticated online stores. Such websites should be managed with consideration for efficient crawling, faceted search, canonicalization, indexing, and page speed. In our Magento SEO strategy, we pay attention to such factors as site audit, categories and products' optimization, URL structure, metadata, internal linking, and scalable content management. Everything depends on the store configuration and goals. Build a stronger organic foundation for your Magento or Adobe Commerce store."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S08: Sec = {
  "h": "A Smarter Ecommerce SEO Framework for Sustainable Growth",
  "intro": [
    "A successful ecommerce SEO campaign combines research, technical improvements, useful content, and ongoing performance analysis. Our workflow can include the following stages."
  ],
  "items": [
    {
      "t": "Search and Market Research",
      "b": "We assess customer search behavior, product demand, competitor visibility, and keyword opportunities to develop a strategy aligned with your business objectives."
    },
    {
      "t": "Technical SEO and Crawl Management",
      "b": "We identify issues that may affect crawling, indexing, site structure, and the accessibility of important product and category pages."
    },
    {
      "t": "Product Catalogue and Category Optimization",
      "b": "We improve page-level relevance, product information, category organization, internal linking, and keyword targeting across priority sections of your store."
    },
    {
      "t": "Content and Structured Data Improvements",
      "b": "We review product descriptions, buying guides, supporting content, and relevant structured data to improve information quality and search engine understanding."
    },
    {
      "t": "User Experience and Performance",
      "b": "We identify opportunities to improve mobile usability, navigation, page speed, and the shopping journey."
    },
    {
      "t": "Authority Development and Ongoing Monitoring",
      "b": "Where appropriate, we identify relevant digital PR and link-building opportunities, track agreed performance metrics, and refine the strategy using campaign data."
    }
  ],
  "outro": [],
  "table": null
};

/* prose */
const S09: Sec = {
  "h": "Prepare Your Online Store for Changing Search Behaviour",
  "intro": [
    "Product discovery continues to grow in complexity as consumers rely on traditional search engines, image-based search engines, conversation-based searches, and even AI-based platforms. E-commerce businesses can be ready for this process through the provision of accurate information about products and creation of relevant content.",
    "In this article, we analyze the possible approaches which include descriptive content for products, structured data, proper categorization, and answering questions of customers. All of these improvements may help in achieving better discoverability, but visibility on separate AI platforms is not guaranteed."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* faq */
const S10: Sec = {
  "h": "Ecommerce SEO: Common Questions Answered",
  "intro": [],
  "items": [
    {
      "t": "What Is Ecommerce SEO?",
      "b": "Ecommerce SEO is the process of improving an online store's visibility in organic search results. It involves product and category page optimization, keyword research, technical SEO, site architecture, content development, structured data, and performance improvements."
    },
    {
      "t": "How Does Ecommerce SEO Work?",
      "b": "Ecommerce SEO helps search engines discover and understand your store's pages and assess their relevance to customer searches. A campaign may include technical fixes, content optimization, keyword mapping, internal linking, and ongoing performance monitoring."
    },
    {
      "t": "Why Is Ecommerce SEO Important?",
      "b": "Ecommerce SEO can help customers discover your products without relying entirely on paid advertising. It can support relevant organic traffic, product visibility, and purchase opportunities when combined with competitive products and a good shopping experience."
    },
    {
      "t": "Which Businesses Can Benefit From Ecommerce SEO?",
      "b": "Online retailers selling clothing, electronics, beauty products, home goods, food, fitness products, and many other items can benefit from ecommerce SEO. The right approach depends on catalogue size, competition, target markets, and business objectives."
    },
    {
      "t": "How Much Do Ecommerce SEO Services Cost in India?",
      "b": "Pricing depends on factors such as website size, platform, number of products, technical complexity, competition, and the scope of ongoing work. An initial website assessment can help determine suitable priorities and a realistic campaign budget."
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S11: Sec = {
  "h": "Turn Organic Search Opportunities Into Ecommerce Growth",
  "intro": [
    "Your products deserve to be found by customers who are actively searching for them. Hover Business Services LLP can help you identify search opportunities, improve your website's organic visibility, and build an ecommerce SEO strategy around your business goals.",
    "Contact our team today to discuss your online store and explore an SEO strategy suited to your requirements."
  ],
  "items": [],
  "outro": [],
  "table": null
};

const ICONS = [TrendingUp, Search, MapPin, Gauge, Link2, BarChart3];

/* ============================== Page ============================== */

export default async function EcommerceSeoPage() {
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

      <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="container-max grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative order-2 py-6 lg:order-1">
            <div className="absolute inset-y-0 -left-[30vw] right-10 rounded-r-[48px] bg-[var(--color-brand)]" />
            <div className="relative"><HeroVisual /></div>
          </div>
          <div className="order-1 lg:order-2">
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
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-6 text-white">
        <div className="container-max flex flex-wrap items-center justify-between gap-6">
          {STATS.map(([v, l]) => (
            <p key={l} className="text-sm text-white/70"><span className="mr-2 font-display text-2xl font-extrabold text-white">{v}</span>{l}</p>
          ))}
        </div>
      </section>
      <Lead s={S01} tone="white" />
      <Prose s={S02} tone="soft" />
      <Cards s={S03} tone="white" v="rows" />
      <Audience s={S04} tone="surface" />
      <Cards s={S05} tone="ink" v="split" />
      <Checklist s={S06} tone="white" />
      <Cards s={S07} tone="surface" v="grid" />
      <Cards s={S08} tone="white" v="bento" />
      <Prose s={S09} tone="soft" />
      <Faq s={S10} phone={co.phone} />
      <Cta s={S11} phone={co.phone} />

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
