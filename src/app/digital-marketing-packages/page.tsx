import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, CalendarCheck, Check, ChevronRight, Headphones, Package, Phone, Plus, Users, Wallet,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Digital Marketing Packages for Business Growth | Hover Business Services LLP",
    description: "Explore Digital Marketing Packages for SEO, PPC, social media and content marketing. Contact Hover Business Services LLP for a customized plan.",
    path: "/digital-marketing-packages",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Digital Marketing Packages",
  "eyebrow": "Packages",
  "tagline": "Growing a business online requires more than running advertisements or publishing occasional social media posts. You need a digital marketing strategy that connects your brand with the right audience, builds trust, and encourages potential customers to take action. The right combination of search engine optimisation, paid advertising, social media, and content marketing can help create a stronger online presence."
};

const HERO: { plans: string[] } = {
  "plans": [
    "Starter",
    "Growth",
    "Premium"
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
    "label": "Ecommerce SEO Packages",
    "href": "/ecommerce-seo-packages"
  },
  {
    "label": "PPC Packages",
    "href": "/ppc-packages"
  }
];

const INCLUDES = [
  "Integrated channel plan",
  "Dedicated account manager",
  "Single monthly report",
  "Dedicated account manager",
  "Clear monthly reporting",
  "No hidden fees"
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Digital Marketing Packages Designed to Grow Your Business",
  "intro": [
    "At Hover Business Services LLP, we provide innovative digital marketing services that are specifically customized for diverse business needs and budgets. As a new enterprise trying to create awareness about your brand, a service organization seeking qualified leads or an existing organization that wants to grow, our aim is to integrate various forms of marketing.",
    "Take a look at our Digital Marketing Packages to find out what combination will work best for your business."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* checklist */
const S02: Sec = {
  "h": "Why Does Your Business Need Digital Marketing?",
  "intro": [
    "Your potential customers use search engines, social media platforms, and online resources to research products and services before making decisions. If your business is difficult to find online, you may miss opportunities to connect with people actively looking for what you offer.",
    "A well-planned digital marketing strategy helps your business:"
  ],
  "items": [
    {
      "t": "",
      "b": "Improve visibility across search engines and social platforms."
    },
    {
      "t": "",
      "b": "Reach relevant audiences through targeted campaigns."
    },
    {
      "t": "",
      "b": "Generate website enquiries and potential leads."
    },
    {
      "t": "",
      "b": "Build brand awareness and customer confidence."
    },
    {
      "t": "",
      "b": "Promote products and services to interested customers."
    },
    {
      "t": "",
      "b": "Understand marketing performance through measurable data."
    },
    {
      "t": "",
      "b": "Create a consistent online presence across multiple channels."
    }
  ],
  "outro": [
    "Instead of depending on a single marketing activity, an integrated strategy allows different channels to support your wider business objectives."
  ],
  "table": null
};

/* audience */
const S03: Sec = {
  "h": "Who Can Benefit from Digital Marketing Packages?",
  "intro": [
    "Digital Marketing Packages are useful for businesses at different stages of development. The strategy, channels, and budget should depend on your specific requirements."
  ],
  "items": [
    {
      "t": "Startups and Small Businesses",
      "b": "New businesses often need to establish their online identity and reach their first group of customers. SEO, local search optimisation, social media management, and targeted advertising can help build initial visibility."
    },
    {
      "t": "Growing Businesses and Service Providers",
      "b": "Companies that depend on customer enquiries need a consistent approach to lead generation. Search marketing, landing page optimisation, and paid advertising can help attract relevant prospects."
    },
    {
      "t": "Ecommerce and Retail Businesses",
      "b": "Online stores need to attract shoppers, promote products, and improve the buying experience. Ecommerce SEO, shopping campaigns, remarketing, and conversion rate optimisation can support these goals."
    },
    {
      "t": "Large and Multi-Location Businesses",
      "b": "Businesses operating across multiple locations may require local SEO, location-specific landing pages, coordinated advertising, and consistent brand communication."
    },
    {
      "t": "B2B and Technology Companies",
      "b": "B2B organisations and SaaS businesses can use content marketing, LinkedIn campaigns, search engine optimisation, and lead nurturing to reach decision-makers."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "What Is Included in Our Digital Marketing Services?",
  "intro": [
    "Our services can be combined according to your marketing objectives. Each channel has a different role, but they work best when supported by a clear strategy."
  ],
  "items": [
    {
      "t": "Search Engine Optimisation (SEO)",
      "b": "SEO helps improve your website's visibility in organic search results. It focuses on making your website easier for search engines and users to understand. Our SEO activities may include:",
      "list": [
        "Technical SEO audits.",
        "Keyword research and mapping.",
        "On-page SEO optimisation.",
        "Website content optimisation.",
        "Internal linking improvements.",
        "Backlink analysis and link-building activities.",
        "Website performance and crawlability checks."
      ]
    },
    {
      "t": "Local SEO and Google Business Profile",
      "b": "Local SEO helps businesses reach customers searching for services in specific areas. It is particularly useful for local service providers, clinics, retailers, and businesses with physical locations. Activities may include Google Business Profile optimisation, local keyword targeting, business directory listings, local citations, review monitoring, and location-based website content."
    },
    {
      "t": "Pay-Per-Click Advertising (PPC)",
      "b": "PPC advertising can help businesses reach targeted audiences through paid search and social campaigns. Campaigns can be planned around specific services, products, locations, and customer interests. Our PPC services may include:",
      "list": [
        "Google Ads campaign setup.",
        "Keyword and audience research.",
        "Ad copy and creative planning.",
        "Campaign structure and budget management.",
        "Remarketing strategies.",
        "Conversion tracking.",
        "Performance monitoring and optimisation."
      ]
    },
    {
      "t": "Social Media Marketing",
      "b": "Social media marketing helps businesses communicate with their audience, share updates, and develop a recognisable brand identity. Depending on your requirements, activities can include Facebook and Instagram management, LinkedIn marketing, content calendars, graphic creatives, reels planning, post scheduling, and paid social campaign support."
    },
    {
      "t": "Content Marketing",
      "b": "Useful content can answer customer questions, explain your services, and support organic search visibility. A consistent content strategy also helps establish your brand as a useful source of information. Content marketing services may include blog writing, website content, landing pages, service descriptions, social media content, topic research, and content optimisation."
    },
    {
      "t": "Conversion Rate Optimisation (CRO)",
      "b": "Getting website visitors is only one part of digital marketing. Your website should also make it easy for visitors to understand your offer and contact your business. CRO activities may include landing page reviews, call-to-action improvements, form optimisation, user experience analysis, and conversion tracking."
    },
    {
      "t": "AI Search Optimisation (AEO and GEO)",
      "b": "Search behaviour continues to evolve as people use AI-powered platforms to discover information and compare solutions. Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) focus on making website information clear, useful, well-structured, and easier for search systems to interpret. Relevant activities may include structured content, entity optimisation, clear question-based answers, schema implementation where appropriate, and authoritative content development. Visibility or citations on AI platforms cannot be guaranteed."
    },
    {
      "t": "Analytics and Performance Reporting",
      "b": "Tracking helps businesses understand how their marketing activities are performing. Reports can cover organic traffic, keyword visibility, website enquiries, paid campaign performance, social engagement, and conversions where suitable tracking is available."
    }
  ],
  "outro": [],
  "table": null
};

/* plans */
const S05: Sec = {
  "h": "Choose the Right Digital Marketing Plan",
  "intro": [
    "Different businesses require different levels of marketing support. We recommend selecting a plan based on your current stage, target audience, competition, and growth objectives."
  ],
  "items": [
    {
      "t": "Starter Package",
      "b": "A practical starting point for businesses that want to establish their digital presence.",
      "list": [
        "Basic website and marketing audit.",
        "Keyword research.",
        "Essential SEO activities.",
        "Local SEO support, where relevant.",
        "Social media content planning.",
        "Basic performance reporting."
      ]
    },
    {
      "t": "Growth Package",
      "b": "Suitable for businesses looking to expand their reach and strengthen their online marketing activities.",
      "list": [
        "Expanded SEO strategy.",
        "On-page and technical SEO.",
        "Local SEO optimisation.",
        "Social media account management.",
        "Blog and website content support.",
        "PPC campaign management.",
        "Monthly performance reporting."
      ]
    },
    {
      "t": "Premium Package",
      "b": "Designed for businesses that need a broader digital marketing approach across multiple channels.",
      "list": [
        "Advanced SEO planning.",
        "Ecommerce or multi-location SEO support.",
        "PPC and paid social campaign management.",
        "Content marketing strategy.",
        "Conversion rate optimisation support.",
        "Remarketing campaign planning.",
        "Advanced performance analysis."
      ]
    },
    {
      "t": "Custom Enterprise Package",
      "b": "Larger organisations may need customised strategies based on multiple locations, products, markets, and marketing channels.",
      "after": "The final deliverables, campaign frequency, and pricing depend on the selected services and project scope. Advertising budgets are generally separate from management fees.",
      "list": [
        "Multi-channel marketing strategy.",
        "Advanced SEO and content planning.",
        "Coordinated advertising campaigns.",
        "Local and international targeting.",
        "Analytics and conversion tracking.",
        "Ongoing strategy reviews."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S06: Sec = {
  "h": "Our Digital Marketing Process",
  "intro": [
    "A structured process helps keep marketing activities organised and aligned with business priorities."
  ],
  "items": [
    {
      "t": "Business Discovery",
      "b": "We understand your services, target audience, competitors, existing online presence, and marketing expectations."
    },
    {
      "t": "Research and Strategy",
      "b": "We identify relevant keywords, audience segments, marketing channels, and opportunities to develop a practical strategy."
    },
    {
      "t": "Campaign Planning and Execution",
      "b": "The selected activities are implemented across SEO, PPC, social media, content, and other agreed channels."
    },
    {
      "t": "Monitoring and Optimisation",
      "b": "Campaigns and website performance are reviewed to identify areas that may need improvement."
    },
    {
      "t": "Reporting and Recommendations",
      "b": "Performance information is shared through regular reports, along with recommendations for the next stage of marketing."
    }
  ],
  "outro": [],
  "table": null
};

/* checklist */
const S07: Sec = {
  "h": "How Do We Measure Digital Marketing Performance?",
  "intro": [
    "Marketing performance should be evaluated using metrics connected to your business goals. Depending on the selected channels, we can monitor:"
  ],
  "items": [
    {
      "t": "",
      "b": "Organic website traffic and search visibility."
    },
    {
      "t": "",
      "b": "Keyword rankings and search impressions."
    },
    {
      "t": "",
      "b": "Website enquiries and form submissions."
    },
    {
      "t": "",
      "b": "Paid advertising clicks and conversions."
    },
    {
      "t": "",
      "b": "Cost per lead and advertising return."
    },
    {
      "t": "",
      "b": "Social media reach and engagement."
    },
    {
      "t": "",
      "b": "Landing page conversion rates."
    },
    {
      "t": "",
      "b": "Local search and Google Business Profile activity."
    }
  ],
  "outro": [
    "These measurements help identify opportunities and guide future marketing decisions. Results depend on factors such as competition, industry, budget, website quality, and campaign duration."
  ],
  "table": null
};

/* whyus */
const S08: Sec = {
  "h": "Why Choose Hover Business Services LLP?",
  "intro": [
    "Choosing a digital marketing partner is an important business decision. You need a team that understands your objectives and can coordinate different marketing activities with a clear direction.",
    "Hover Business Services LLP focuses on practical, flexible digital marketing solutions that can be aligned with your business requirements."
  ],
  "items": [
    {
      "t": "Integrated marketing approach",
      "b": "Combine SEO, PPC, social media, and content marketing under a coordinated strategy."
    },
    {
      "t": "Flexible service options",
      "b": "Select services according to your goals and available budget."
    },
    {
      "t": "Business-focused planning",
      "b": "Prioritise relevant audiences, products, services, and locations."
    },
    {
      "t": "Performance monitoring",
      "b": "Review important metrics to understand campaign progress."
    },
    {
      "t": "Content-focused execution",
      "b": "Develop useful content that communicates your brand message."
    },
    {
      "t": "Ongoing optimisation",
      "b": "Use performance insights to identify areas for improvement."
    }
  ],
  "outro": [
    "Our aim is to help businesses make informed marketing decisions and build a more consistent online presence."
  ],
  "table": null
};

/* cta */
const S09: Sec = {
  "h": "Take the Next Step Towards Better Digital Marketing",
  "intro": [
    "An effective presence in the online world can be created through proper planning, appropriate content, and correct marketing mix. If your goal is to increase your website visibility, generate quality leads, promote your product range, or build up your brand awareness, then the right strategy can definitely work wonders for you.",
    "Learn more about Digital Marketing Packages provided by Hover Business Services LLP and get a plan according to your needs.",
    "Please feel free to contact us regarding your requirements and get a customized digital marketing proposal."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* faq */
const S10: Sec = {
  "h": "Frequently Asked Questions",
  "intro": [],
  "items": [
    {
      "t": "What are Digital Marketing Packages?",
      "b": "Digital marketing packages are service plans that combine activities such as SEO, PPC advertising, social media management, content marketing, and performance reporting. The services included depend on the selected plan."
    },
    {
      "t": "How much do digital marketing packages cost?",
      "b": "Pricing depends on the number of marketing channels, competition, campaign requirements, content volume, and project scope. A customised quotation can be prepared after understanding your business needs."
    },
    {
      "t": "How long does digital marketing take to show results?",
      "b": "Paid advertising may generate traffic or enquiries soon after campaigns become active. SEO and content marketing generally require consistent work over a longer period. Actual timelines vary by industry, competition, budget, and website condition."
    },
    {
      "t": "Can I choose only SEO or PPC services?",
      "b": "Yes. You can discuss individual services or combine multiple channels depending on your marketing priorities and budget."
    },
    {
      "t": "Are digital marketing packages suitable for small businesses?",
      "b": "Yes. Small businesses can start with essential services such as local SEO, social media management, and targeted advertising, then expand their marketing activities as their requirements grow."
    },
    {
      "t": "Do you provide customized digital marketing plans?",
      "b": "Yes. Service combinations can be discussed according to your business type, target market, marketing objectives, and available budget."
    },
    {
      "t": "How do I track the performance of my campaigns?",
      "b": "Performance can be monitored through website analytics, search data, advertising dashboards, conversion tracking, and social media insights. Reporting depends on the services included in your plan."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Package, BadgeCheck, Wallet, CalendarCheck, BarChart3, Headphones];

/* ============================== Page ============================== */

export default async function DigitalMarketingPackagesPage() {
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
      <Checklist s={S02} tone="surface" />
      <Audience s={S03} tone="white" />
      <Cards s={S04} tone="soft" v="bento" />
      <Plans s={S05} tone="surface" />
      <Steps s={S06} tone="white" v="rail" />
      <Checklist s={S07} tone="ink" />
      <WhyUs s={S08} />
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

type Item = { t: string; b: string; list?: string[]; after?: string };
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
function ItemList({ list, after, tone }: { list?: string[]; after?: string; tone: Tone }) {
  if (!list?.length) return null;
  return (
    <>
    <ul className="mt-4 space-y-2">
      {list.map((l, i) => (
        <li key={i} className={`flex gap-2 text-sm ${muted(tone)}`}><Check size={15} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />{l}</li>
      ))}
    </ul>
    {after ? <p className={`mt-4 text-sm leading-relaxed ${muted(tone)}`}>{after}</p> : null}
    </>
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
                  <ItemList list={it.list} after={it.after} tone={tone} />
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
                  {it.list?.length ? <ItemList list={it.list} after={it.after} tone={hero ? "ink" : tone} /> : null}
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
                  <div className="md:pt-2.5"><p className={muted(tone)}>{it.b}</p><ItemList list={it.list} after={it.after} tone={tone} /></div>
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
                  <div>{it.t && <h3 className="font-display text-lg font-bold">{it.t}</h3>}<p className={`mt-1.5 text-sm leading-relaxed ${muted(tone)}`}>{it.b}</p><ItemList list={it.list} after={it.after} tone={tone} /></div>
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
                  <ItemList list={it.list} after={it.after} tone={tone} />
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
              <ItemList list={it.list} after={it.after} tone={tone} />
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
              <ItemList list={it.list} after={it.after} tone={i === mid ? "ink" : "white"} />
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
        {s.items.length > 0 && <div className="mt-8 grid gap-4 md:grid-cols-2">{s.items.map((it, i) => <div key={i} className="rounded-2xl border border-[var(--color-border)] bg-white p-5 text-[var(--color-ink)]"><h3 className="font-display font-bold">{it.t}</h3><p className="mt-1 text-sm text-[var(--color-text-muted)]">{it.b}</p><ItemList list={it.list} after={it.after} tone="white" /></div>)}</div>}
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
              <ItemList list={it.list} after={it.after} tone="white" />
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
                <div>{it.t && <h3 className="font-display text-lg font-bold">{it.t}</h3>}<p className="mt-1 text-white/65">{it.b}</p><ItemList list={it.list} after={it.after} tone="ink" /></div>
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
              <ItemList list={f.list} after={f.after} tone="white" />
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
