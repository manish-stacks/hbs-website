import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, CalendarCheck, Check, ChevronRight, Headphones, Package, Phone, Plus, Users, Wallet,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Ecommerce SEO Packages to Grow Online Sales | Hover Business Services LLP",
    description: "Explore Ecommerce SEO Packages from Hover Business Services LLP. Improve product rankings, attract targeted traffic and grow online sales. Get a quote!",
    path: "/ecommerce-seo-packages",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Ecommerce SEO Packages",
  "eyebrow": "Packages",
  "tagline": "Running an online store requires more than attractive product images and competitive prices. Your products need to appear in front of the right customers when they search on Google and other digital platforms. Our Ecommerce SEO Packages are designed to improve product visibility, strengthen category page performance, attract high-intent visitors and increase online sales."
};

const HERO: { plans: string[] } = {
  "plans": [
    "Ideal For",
    "Keyword Research",
    "Product Page SEO"
  ]
};

const STATS: [string, string][] = [
  [
    "5+",
    "Years in business"
  ],
  [
    "3200+",
    "Happy clients"
  ],
  [
    "24/7",
    "Support available"
  ]
];

const RELATED = [
  {
    "label": "SEO Packages",
    "href": "/seo-packages"
  },
  {
    "label": "Local SEO Packages",
    "href": "/local-seo-packages"
  },
  {
    "label": "PPC Packages",
    "href": "/ppc-packages"
  },
  {
    "label": "Social Media Packages",
    "href": "/social-media-packages"
  }
];

const INCLUDES = [
  "Category and product optimisation",
  "Technical fixes",
  "Sales-linked reporting",
  "Dedicated account manager",
  "Clear monthly reporting",
  "No hidden fees"
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Ecommerce SEO Packages to Increase Traffic, Rankings & Online Sales",
  "intro": [
    "At Hover Business Services LLP, we understand that every ecommerce business has different growth objectives. Whether you operate a small online shop or manage a large ecommerce website, our SEO strategies focus on improving organic traffic, enhancing website performance and creating better shopping experiences. From product page optimization to technical SEO, we help your online store build a stronger search presence and achieve sustainable growth."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* checklist */
const S02: Sec = {
  "h": "Affordable Ecommerce SEO Packages for Every Online Business",
  "intro": [
    "The right SEO strategy could go a long way in determining how well your ecommerce will do. Our inexpensive packages address the elements that affect your search engine visibility, customer interaction, and conversion rate.",
    "Our Ecommerce SEO Packages have been put together in such a way that they serve businesses depending on their level of development. Rather than taking a cookie-cutter approach to our packages, we first analyze your website size, product categories, competition, and business goals.",
    "Our ecommerce SEO approach focuses on:"
  ],
  "items": [
    {
      "t": "",
      "b": "Improving product and category page rankings."
    },
    {
      "t": "",
      "b": "Increasing relevant organic website traffic."
    },
    {
      "t": "",
      "b": "Optimizing product titles, descriptions and images."
    },
    {
      "t": "",
      "b": "Improving website navigation and internal linking."
    },
    {
      "t": "",
      "b": "Fixing technical SEO and indexing issues."
    },
    {
      "t": "",
      "b": "Strengthening website authority through quality link building."
    },
    {
      "t": "",
      "b": "Improving mobile usability and shopping experience."
    },
    {
      "t": "",
      "b": "Increasing qualified leads, enquiries and online purchases."
    }
  ],
  "outro": [
    "The objective is simple: help potential customers discover your products and make purchasing decisions with confidence."
  ],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "What Makes Our Ecommerce SEO Services Effective?",
  "intro": [
    "Ecommerce websites have unique SEO requirements. A regular business website may contain a limited number of service pages, while an online store can have hundreds or thousands of product URLs. Managing these pages requires a structured approach.",
    "Our ecommerce SEO strategies cover important optimization areas."
  ],
  "items": [
    {
      "t": "Product Page SEO Optimization",
      "b": "Product pages play a major role in attracting customers who are ready to purchase. We optimize product titles, descriptions, headings, images, URLs and relevant keywords to improve their search performance. We also focus on unique product content, structured data opportunities and clear product information to help search engines understand your offerings."
    },
    {
      "t": "Category Page Optimization",
      "b": "Category pages help customers explore related products. We improve category descriptions, heading structures, keyword placement, internal links and page organization to make these pages more relevant to search queries. A well-optimized category structure also makes it easier for search engines to discover and understand your products."
    },
    {
      "t": "Technical Ecommerce SEO",
      "b": "Technical problems can prevent search engines from properly crawling and indexing your website. Our team reviews website speed, mobile responsiveness, XML sitemaps, robots.txt, canonical tags, duplicate URLs, redirects and indexing issues. We also evaluate Core Web Vitals and other performance factors to identify opportunities for a smoother browsing experience."
    },
    {
      "t": "Keyword Research and Search Intent",
      "b": "Targeting the right keywords is essential for ecommerce growth. We research transactional, commercial and informational search terms relevant to your products. This helps your website attract visitors who are actively researching products or looking to make a purchase."
    },
    {
      "t": "Ecommerce Link Building",
      "b": "Building website authority requires relevant and trustworthy backlinks. Our off-page SEO strategies focus on quality link opportunities, relevant content placements and brand mentions that support your website's organic visibility."
    }
  ],
  "outro": [],
  "table": null
};

/* table */
const S04: Sec = {
  "h": "Choose the Right Ecommerce SEO Plan for Your Business",
  "intro": [
    "Every online store has different requirements. The following service structure can help you identify the level of SEO support your business may need."
  ],
  "items": [],
  "outro": [
    "Pricing: Get a customized quotation based on your website size, product inventory, competition and SEO objectives.",
    "Our team can help you select the most suitable plan according to your current requirements and expected growth."
  ],
  "table": {
    "head": [
      "SEO Plans",
      "Starter",
      "Growth",
      "Professional",
      "Enterprise"
    ],
    "rows": [
      [
        "Ideal For",
        "Small stores",
        "Growing stores",
        "Established stores",
        "Large ecommerce brands"
      ],
      [
        "Keyword Research",
        "Basic",
        "Detailed",
        "Advanced",
        "Extensive"
      ],
      [
        "Product Page SEO",
        "Selected pages",
        "Multiple pages",
        "Large-scale",
        "Comprehensive"
      ],
      [
        "Category Optimization",
        "Basic",
        "Standard",
        "Advanced",
        "Extensive"
      ],
      [
        "Technical SEO Audit",
        "Basic",
        "Detailed",
        "Advanced",
        "In-depth"
      ],
      [
        "Competitor Analysis",
        "Basic",
        "Detailed",
        "Advanced",
        "Comprehensive"
      ],
      [
        "Link Building",
        "Foundational",
        "Regular",
        "Strategic",
        "Customized"
      ],
      [
        "Reporting",
        "Monthly",
        "Monthly",
        "Monthly",
        "Customized"
      ]
    ]
  }
};

/* cards */
const S05: Sec = {
  "h": "Ecommerce SEO Packages That Address Real Business Challenges",
  "intro": [
    "An online store can face several challenges even when it offers excellent products. Low product visibility, duplicate content, poor category organization and slow-loading pages can affect organic performance.",
    "Our Ecommerce SEO Packages address these common issues through practical optimization.",
    "Some of the major challenges we help businesses overcome include:"
  ],
  "items": [
    {
      "t": "Low organic traffic",
      "b": "Improve keyword targeting and search visibility to attract relevant visitors."
    },
    {
      "t": "Poor product rankings",
      "b": "Optimize product information and page relevance for better search performance."
    },
    {
      "t": "Duplicate product content",
      "b": "Identify duplicate URLs and improve content uniqueness."
    },
    {
      "t": "Website indexing problems",
      "b": "Resolve crawling, sitemap and indexing issues."
    },
    {
      "t": "High competition",
      "b": "Develop targeted strategies to compete for valuable commercial keywords."
    },
    {
      "t": "Low conversions",
      "b": "Improve page experience, navigation and content clarity to support purchasing decisions."
    }
  ],
  "outro": [
    "Our approach combines technical improvements, content optimization and continuous performance analysis."
  ],
  "table": null
};

/* steps */
const S06: Sec = {
  "h": "How Our Ecommerce SEO Process Works",
  "intro": [
    "A successful SEO campaign requires proper planning, implementation and regular evaluation. We follow a structured process to keep optimization activities aligned with your business goals."
  ],
  "items": [
    {
      "t": "Website Audit and Business Discovery",
      "b": "It all starts with comprehending your ecommerce business, its product range, customer base, and growth goals. Our team analyzes your website to determine its problems, lack of content, and areas that need improvement."
    },
    {
      "t": "Ecommerce Keyword Research",
      "b": "We identify relevant keywords based on search volume, competition and user intent. Our research covers product-related terms, category keywords, long-tail searches and informational queries that can attract potential buyers."
    },
    {
      "t": "Customized SEO Strategy",
      "b": "Based on the audit and keyword research, we prepare a customized strategy. It includes technical SEO priorities, product page improvements, category optimization, content planning and link-building activities."
    },
    {
      "t": "On-Page and Technical Optimization",
      "b": "Our team works on page titles, meta descriptions, product content, internal links, image optimization, schema opportunities and website architecture. We also address technical issues that may affect crawling, indexing and user experience."
    },
    {
      "t": "Content Marketing and Authority Building",
      "b": "Relevant content helps answer customer questions and build topical relevance. We develop content opportunities around product categories, buying guides and informational searches while pursuing relevant backlink opportunities."
    },
    {
      "t": "Monitoring and Performance Reporting",
      "b": "The SEO performance is checked on a regular basis using appropriate analytics and search performance tools. We check for keyword visibility, organic traffic, landing page performance and conversion trends."
    }
  ],
  "outro": [],
  "table": null
};

/* whyus */
const S07: Sec = {
  "h": "Why Choose Hover Business Services LLP for Ecommerce SEO?",
  "intro": [
    "Selecting an SEO partner is an important business decision. You need a team that understands ecommerce challenges and focuses on meaningful performance improvements rather than rankings alone.",
    "At Hover Business Services LLP, our approach is built around the needs of your online business."
  ],
  "items": [
    {
      "t": "Customized SEO Strategies",
      "b": "We develop campaigns according to your products, industry, competitors and growth priorities."
    },
    {
      "t": "Complete Ecommerce Optimization",
      "b": "From technical SEO to product descriptions, category pages and authority building, we address important aspects of organic search performance."
    },
    {
      "t": "Focus on Qualified Traffic",
      "b": "We prioritize relevant search terms that connect your products with customers who have genuine buying interest."
    },
    {
      "t": "Transparent Reporting",
      "b": "Regular performance updates help you understand campaign activities, progress and areas requiring further attention."
    },
    {
      "t": "Long-Term Growth Approach",
      "b": "We focus on sustainable optimization practices that support your online store as search trends and customer expectations evolve."
    }
  ],
  "outro": [
    "Our objective is to help your ecommerce business establish a stronger online presence and create more opportunities for sales."
  ],
  "table": null
};

/* checklist */
const S08: Sec = {
  "h": "SEO Tools and Technologies We Use",
  "intro": [
    "Effective optimization requires reliable data, detailed analysis and continuous monitoring. Our SEO workflow can incorporate industry-recognized tools such as:"
  ],
  "items": [
    {
      "t": "",
      "b": "Google Analytics 4"
    },
    {
      "t": "",
      "b": "Google Search Console"
    },
    {
      "t": "",
      "b": "Ahrefs"
    },
    {
      "t": "",
      "b": "SEMrush"
    },
    {
      "t": "",
      "b": "Screaming Frog"
    },
    {
      "t": "",
      "b": "Moz"
    },
    {
      "t": "",
      "b": "Google PageSpeed Insights"
    }
  ],
  "outro": [
    "These tools help analyze website performance, identify technical problems, research keywords, monitor backlinks and discover new optimization opportunities."
  ],
  "table": null
};

/* cta */
const S09: Sec = {
  "h": "Grow Your Online Store with the Right Ecommerce SEO Strategy",
  "intro": [
    "Your ecommerce website needs to be visible to people actively seeking out your products. An effective ecommerce SEO strategy will allow you to achieve greater organic visibility, product discovery, and growth.",
    "At Hover Business Services LLP, we work on creating an ecommerce SEO strategy that meets the actual needs of your website. Whatever your objectives, whether it is better product ranking, qualified traffic generation, or market expansion, our team can help you achieve them.",
    "Ready to improve your online store's search visibility?",
    "Contact Hover Business Services LLP today to discuss your requirements and get a customized proposal for our Ecommerce SEO Packages.",
    "Get Started Today | Request Your Free SEO Consultation"
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* faq */
const S10: Sec = {
  "h": "Frequently Asked Questions About Ecommerce SEO Packages",
  "intro": [],
  "items": [
    {
      "t": "What are Ecommerce SEO Packages?",
      "b": "Ecommerce SEO Packages are structured optimization services designed to improve the organic visibility of online stores. They typically include keyword research, product page SEO, category optimization, technical SEO, content improvements and link building."
    },
    {
      "t": "How much do ecommerce SEO services cost?",
      "b": "The cost depends on website size, product inventory, competition, target locations and campaign requirements. A small online store may require fewer resources than a large ecommerce platform. Contact our team for a customized quotation."
    },
    {
      "t": "How long does ecommerce SEO take to show results?",
      "b": "SEO is a long-term process. Initial improvements may become visible within a few months, while competitive keywords and substantial organic growth can take longer. Results depend on website condition, competition and implementation."
    },
    {
      "t": "Can SEO improve ecommerce sales?",
      "b": "Yes. Ecommerce SEO can attract users searching for relevant products, improve product discovery and create better shopping experiences. These improvements can contribute to increased sales, although actual conversions also depend on pricing, product quality and website usability."
    },
    {
      "t": "Do you provide SEO for Shopify and WooCommerce websites?",
      "b": "Ecommerce SEO strategies can be adapted to platforms such as Shopify, WooCommerce, Magento and other ecommerce systems. The specific implementation depends on your website's platform and technical structure."
    },
    {
      "t": "How do I choose the right ecommerce SEO plan?",
      "b": "Consider your website size, number of products, target keywords, competition and growth objectives. A website audit can help identify the level of optimization your store needs."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Package, BadgeCheck, Wallet, CalendarCheck, BarChart3, Headphones];

/* ============================== Page ============================== */

export default async function EcommerceSeoPackagesPage() {
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
      <Checklist s={S02} tone="soft" />
      <Cards s={S03} tone="white" v="rows" />
      <Table s={S04} tone="surface" />
      <Cards s={S05} tone="ink" v="split" />
      <Steps s={S06} tone="white" v="line" />
      <WhyUs s={S07} />
      <Checklist s={S08} tone="surface" />
      <Cta s={S09} phone={co.phone} />
      <Faq s={S10} phone={co.phone} />

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
    <div className="relative mx-auto grid w-full max-w-[520px] grid-cols-3 items-end gap-3 text-[var(--color-ink)]">
      {HERO.plans.map((p, i) => (
        <div key={p} className={`sx-rise rounded-[22px] border p-4 shadow-[var(--shadow-md)] ${i === 1 ? "border-[var(--color-brand)] bg-[var(--color-brand)] pb-8 pt-6 text-white" : "border-[var(--color-border)] bg-white"}`} style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
          {i === 1 && <span className="mb-2 inline-block rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold">Most chosen</span>}
          <p className="font-display text-sm font-extrabold leading-tight">{p}</p>
          <p className={`mt-2 text-[11px] ${i === 1 ? "text-white/75" : "text-[var(--color-text-muted)]"}`}>Custom quote</p>
          <ul className="mt-3 space-y-1.5">
            {INCLUDES.slice(0, 2 + i).map((f) => (
              <li key={f} className="flex gap-1 text-[10px] leading-tight"><Check size={11} className="mt-px shrink-0" />{f}</li>
            ))}
          </ul>
        </div>
      ))}
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
