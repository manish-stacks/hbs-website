import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, CalendarCheck, Check, ChevronRight, Headphones, Package, Phone, Plus, Users, Wallet,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "PPC Packages for Better Leads & Sales | Hover Business Services LLP",
    description: "Explore PPC Packages from Hover Business Services LLP. Improve ad performance, generate quality leads and grow sales with customized PPC solutions.",
    path: "/ppc-packages",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "PPC Packages",
  "eyebrow": "Packages",
  "tagline": "Running paid advertising campaigns can help your business reach potential customers quickly, but getting consistent results requires the right strategy, targeting and optimization. Our PPC Packages are designed to help businesses generate quality leads, increase website traffic, improve conversions and make better use of their advertising budgets."
};

const HERO: { plans: string[] } = {
  "plans": [
    "Starter PPC",
    "Growth PPC",
    "Professional PPC"
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
    "label": "Social Media Packages",
    "href": "/social-media-packages"
  }
];

const INCLUDES = [
  "Campaign build and management",
  "Ad testing",
  "Monthly reporting",
  "Dedicated account manager",
  "Clear monthly reporting",
  "No hidden fees"
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "PPC Packages to Maximize Your Advertising Performance and ROI",
  "intro": [
    "Understanding the importance of varied advertising requirements in each business, Hover Business Services LLP specializes in PPC advertising tailored to the specific needs of your firm. While a small firm starting out with its first Google AdWords campaign will need one thing, a larger firm that already handles several campaigns will require something else.",
    "This is why we specialize in developing customized solutions for all your PPC advertising. From keyword research and creation of PPC campaigns to ad copywriting and tracking performance, we handle all the basics of paid advertising to help you grow your business."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* checklist */
const S02: Sec = {
  "h": "Affordable PPC Packages for Businesses of Every Size",
  "intro": [
    "Choosing the right PPC packages plan is important for achieving better advertising results. A suitable package should match your campaign objectives, monthly advertising budget, target audience and business requirements.",
    "Our PPC solutions are structured to support businesses at different stages of their advertising journey.",
    "We focus on the following services:"
  ],
  "items": [
    {
      "t": "",
      "b": "Google Ads campaign setup and management."
    },
    {
      "t": "",
      "b": "Search and display advertising."
    },
    {
      "t": "",
      "b": "Keyword research and competitor analysis."
    },
    {
      "t": "",
      "b": "Ad copywriting and creative recommendations."
    },
    {
      "t": "",
      "b": "Audience and location targeting."
    },
    {
      "t": "",
      "b": "Landing page performance analysis."
    },
    {
      "t": "",
      "b": "Conversion tracking and analytics setup."
    },
    {
      "t": "",
      "b": "Remarketing and retargeting campaigns."
    },
    {
      "t": "",
      "b": "Bid management and budget optimization."
    },
    {
      "t": "",
      "b": "Regular campaign performance reporting."
    }
  ],
  "outro": [
    "Our objective is to help businesses attract relevant visitors, reduce unnecessary advertising expenses and improve the overall effectiveness of paid campaigns."
  ],
  "table": null
};

/* plans */
const S03: Sec = {
  "h": "Explore Our PPC Management Plans",
  "intro": [
    "Different advertising goals require different levels of campaign management. Here are four suggested PPC service tiers that can be customized according to your requirements."
  ],
  "items": [
    {
      "t": "Starter PPC Packages",
      "b": "For Beginners: Ideal for startups, local businesses and small companies launching their first paid advertising campaigns. Key inclusions:",
      "list": [
        "Google Search Ads campaign setup.",
        "Basic keyword research.",
        "Ad copy creation.",
        "Location and device targeting.",
        "Basic conversion tracking.",
        "Monthly campaign performance report.",
        "Budget and bidding recommendations."
      ]
    },
    {
      "t": "Growth PPC Package",
      "b": "For Growing Businesses: Suitable for businesses already running paid advertisements and looking to improve lead quality, traffic and campaign performance. Key inclusions:",
      "list": [
        "Google Search and Display Ads.",
        "Advanced keyword research.",
        "Negative keyword management.",
        "Audience segmentation.",
        "Remarketing campaign setup.",
        "Conversion tracking and GA4 integration.",
        "Regular bid and budget optimization.",
        "Bi-weekly performance reviews."
      ]
    },
    {
      "t": "Professional PPC Package",
      "b": "For Established Brands: Designed for businesses managing multiple campaigns and looking to improve conversion rates while expanding their advertising reach. Key inclusions:",
      "list": [
        "Multi-campaign management.",
        "Google Search, Display and remarketing.",
        "Advanced audience targeting.",
        "Competitor advertising analysis.",
        "A/B testing of ad creatives.",
        "Landing page recommendations.",
        "Advanced conversion tracking.",
        "Detailed performance reporting."
      ]
    },
    {
      "t": "Enterprise PPC Package",
      "b": "For Large Businesses: A customized solution for enterprises, ecommerce platforms and businesses managing large advertising budgets across multiple locations or markets. Key inclusions:",
      "after": "Package inclusions and pricing can be customized according to campaign complexity, advertising platforms and business objectives. Advertising spend is separate from management fees.",
      "list": [
        "Multi-platform campaign management.",
        "Advanced campaign segmentation.",
        "Ecommerce and lead generation tracking.",
        "Conversion value optimization.",
        "Advanced remarketing strategies.",
        "Custom reporting and analytics.",
        "Campaign scaling and budget planning.",
        "Dedicated account coordination."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* table */
const S04: Sec = {
  "h": "Complete PPC Packages Feature Comparison",
  "intro": [
    "Compare the key features of our PPC management plans to understand which level of support suits your business."
  ],
  "items": [],
  "outro": [],
  "table": {
    "head": [
      "Features",
      "Starter",
      "Growth",
      "Professional",
      "Enterprise"
    ],
    "rows": [
      [
        "Google Search Ads",
        "✓",
        "✓",
        "✓",
        "✓"
      ],
      [
        "Display Advertising",
        "—",
        "✓",
        "✓",
        "✓"
      ],
      [
        "Remarketing",
        "—",
        "✓",
        "✓",
        "✓"
      ],
      [
        "Keyword Research",
        "Basic",
        "Advanced",
        "Advanced",
        "Comprehensive"
      ],
      [
        "Negative Keywords",
        "Basic",
        "✓",
        "✓",
        "✓"
      ],
      [
        "Audience Targeting",
        "Basic",
        "Advanced",
        "Advanced",
        "Custom"
      ],
      [
        "Conversion Tracking",
        "Basic",
        "✓",
        "Advanced",
        "Advanced"
      ],
      [
        "A/B Testing",
        "—",
        "Basic",
        "✓",
        "✓"
      ],
      [
        "Landing Page Analysis",
        "—",
        "Basic",
        "✓",
        "✓"
      ],
      [
        "Performance Reporting",
        "Monthly",
        "Monthly",
        "Detailed",
        "Customized"
      ],
      [
        "Campaign Optimization",
        "Regular",
        "Frequent",
        "Advanced",
        "Ongoing"
      ]
    ]
  }
};

/* cards */
const S05: Sec = {
  "h": "PPC Advertising Services Included in Our Packages",
  "intro": [
    "An effective paid advertising campaign involves several interconnected activities. We focus on the elements that influence campaign performance and help businesses reach their marketing goals."
  ],
  "items": [
    {
      "t": "Google Ads Management",
      "b": "Google Ads allows businesses to reach customers when they search for relevant products and services. We help structure campaigns, identify valuable search terms, create relevant advertisements and optimize bidding strategies."
    },
    {
      "t": "Keyword Research and Competitor Analysis",
      "b": "Selecting the right keywords helps prevent unnecessary clicks and improves audience relevance. We research commercial and transactional keywords, analyze competitor advertising strategies and identify negative keywords to improve campaign targeting."
    },
    {
      "t": "Ad Copywriting and Creative Optimization",
      "b": "Your advertisement needs to communicate value quickly. We focus on clear headlines, relevant descriptions, compelling calls to action and suitable ad extensions to encourage users to engage with your business."
    },
    {
      "t": "Social Media PPC Advertising",
      "b": "Paid campaigns on platforms such as Meta Ads, Facebook and Instagram can help businesses reach specific audience groups. Campaign strategies can include lead generation, website traffic, brand awareness and product promotion."
    },
    {
      "t": "Conversion Tracking and Analytics",
      "b": "Clicks alone do not determine advertising success. We focus on tracking meaningful actions such as phone calls, form submissions, purchases and other conversion events. Google Analytics 4 and Google Tag Manager can support campaign measurement and reporting."
    },
    {
      "t": "Remarketing Campaigns",
      "b": "Not every visitor converts during their first website visit. Remarketing helps businesses reconnect with eligible previous visitors through relevant advertisements, encouraging them to return and complete an action."
    }
  ],
  "outro": [],
  "table": null
};

/* whyus */
const S06: Sec = {
  "h": "Why Choose Hover Business Services LLP for PPC Management?",
  "intro": [
    "Selecting the right PPC partner can influence how effectively your advertising budget is utilized. Hover Business Services LLP focuses on developing paid advertising strategies around your business objectives rather than following generic campaign practices.",
    "Here are some important reasons to consider our PPC solutions:"
  ],
  "items": [
    {
      "t": "Customized Campaign Strategies",
      "b": "Campaign planning based on your industry, audience, competition and business goals."
    },
    {
      "t": "Budget-Focused Optimization",
      "b": "Strategic budget allocation to improve campaign efficiency and reduce irrelevant spending."
    },
    {
      "t": "Performance Monitoring",
      "b": "Regular evaluation of clicks, impressions, conversions and cost per acquisition."
    },
    {
      "t": "Multi-Platform Advertising",
      "b": "Campaign opportunities across Google Ads and relevant social media advertising platforms."
    },
    {
      "t": "Transparent Reporting",
      "b": "Understand campaign activities and performance through structured reporting."
    },
    {
      "t": "Scalable Solutions",
      "b": "Adjust campaign strategies as your business requirements and advertising goals change."
    }
  ],
  "outro": [
    "We aim to build advertising campaigns that support better decision-making, qualified traffic and sustainable business development."
  ],
  "table": null
};

/* steps */
const S07: Sec = {
  "h": "How Our PPC Management Process Works",
  "intro": [
    "A structured campaign management process helps maintain consistency and improve advertising performance."
  ],
  "items": [
    {
      "t": "Business Discovery and Consultation",
      "b": "We begin by understanding your products, services, target customers, advertising goals and current marketing challenges."
    },
    {
      "t": "PPC Audit and Research",
      "b": "Our team reviews existing campaigns, competitors, keywords, audience targeting and landing pages to identify improvement opportunities."
    },
    {
      "t": "Campaign Strategy and Setup",
      "b": "We develop a campaign structure based on your objectives. This includes selecting suitable advertising platforms, creating ad groups, defining targeting parameters and preparing advertisements."
    },
    {
      "t": "Conversion Tracking Implementation",
      "b": "We evaluate tracking requirements and configure suitable measurement solutions using tools such as Google Analytics 4 and Google Tag Manager, subject to platform access and technical requirements."
    },
    {
      "t": "Campaign Launch and Optimization",
      "b": "Once approved, campaigns are launched and monitored. We review search terms, bidding strategies, audience performance and advertisement effectiveness to identify optimization opportunities."
    },
    {
      "t": "Reporting and Continuous Improvement",
      "b": "Regular reporting helps evaluate campaign performance and plan future improvements. We use campaign insights to refine targeting, optimize budgets and identify opportunities for growth."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S08: Sec = {
  "h": "What Is Included in Every PPC Package?",
  "intro": [
    "Regardless of the selected plan, effective campaign management should include essential practices that support transparency and performance."
  ],
  "items": [
    {
      "t": "Initial Campaign Review",
      "b": "Understand your current advertising position and identify opportunities."
    },
    {
      "t": "Account Transparency",
      "b": "Maintain clarity regarding campaign structure, advertising expenses and performance."
    },
    {
      "t": "Performance Monitoring",
      "b": "Review important campaign metrics and identify optimization opportunities."
    },
    {
      "t": "Flexible Campaign Management",
      "b": "Adapt campaigns according to changing business requirements."
    },
    {
      "t": "Conversion-Focused Approach",
      "b": "Prioritize meaningful business actions instead of focusing only on clicks."
    },
    {
      "t": "Industries That Can Benefit from Our PPC Services",
      "b": "Paid advertising can support businesses across multiple industries when campaigns are planned around relevant audiences and conversion goals. Some industries that can benefit include:",
      "after": "Our advertising strategies can be adapted to different business models, target markets and customer acquisition objectives.",
      "list": [
        "Healthcare: Generate appointment enquiries and improve service visibility.",
        "Real Estate: Reach property buyers, investors and potential tenants.",
        "Education: Attract student enquiries for courses and admission programmes.",
        "Ecommerce: Promote products, increase shopping traffic and generate online purchases.",
        "IT and Software: Generate qualified B2B enquiries and product demonstrations.",
        "Home Services: Connect with customers looking for local professional services."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S09: Sec = {
  "h": "Ready to Grow Your Business with the Right PPC Strategy?",
  "intro": [
    "The advertising budget must be used to make tangible achievements in business. Whatever it is that you desire to achieve, whether you want more inquiries, better online sales, or more presence of your brand online, an effective campaign will enable you to do so.",
    "Hover Business Services LLP specializes in developing custom advertising solutions that meet your marketing needs and business needs.",
    "Visit our PPC packages and discover which option would suit your business. Contact us today and let us know your advertising objectives and discover the range of services offered and receive a custom proposal.",
    "Get Started Today!",
    "Request Your PPC Consultation and Take the Next Step Towards Better Advertising Performance."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* faq */
const S10: Sec = {
  "h": "Frequently Asked Questions About PPC Packages",
  "intro": [],
  "items": [
    {
      "t": "What are PPC Packages?",
      "b": "PPC Packages are paid advertising management solutions that include services such as campaign setup, keyword research, advertisement creation, audience targeting, conversion tracking and campaign optimization. They help businesses manage their paid advertising activities more effectively."
    },
    {
      "t": "How much do PPC management packages cost?",
      "b": "PPC management costs depend on campaign complexity, advertising platforms, target locations, competition and required services. Advertising spend is generally separate from management fees. Contact our team for a customized quotation."
    },
    {
      "t": "Do PPC Packages include Google Ads management?",
      "b": "Yes. Google Ads management can include keyword research, search campaign setup, ad creation, bidding optimization, conversion tracking and performance monitoring. Additional advertising platforms can also be included depending on your selected requirements."
    },
    {
      "t": "Is the advertising budget included in the PPC management fee?",
      "b": "No. The advertising budget is separate from the PPC management fee. You pay the advertising platform directly, giving you greater visibility and control over your spending."
    },
    {
      "t": "How long does it take to see PPC results?",
      "b": "Paid advertising can start generating clicks soon after campaigns become active. However, meaningful performance improvements require testing, conversion data and regular optimization. Results depend on your industry, competition, budget and landing page experience."
    },
    {
      "t": "Can I change my PPC package later?",
      "b": "Yes. Your campaign requirements may change as your business grows. Package scope can be reviewed and adjusted according to your advertising goals, budget and performance requirements."
    },
    {
      "t": "Which advertising platforms do you support?",
      "b": "Depending on your campaign objectives, PPC strategies can include Google Ads, Microsoft Advertising, Facebook Ads, Instagram Ads and other relevant paid advertising platforms."
    },
    {
      "t": "How do you measure PPC campaign success?",
      "b": "We evaluate metrics such as impressions, clicks, click-through rate (CTR), cost per click (CPC), conversion rate, cost per acquisition (CPA) and return on ad spend (ROAS), wherever relevant tracking data is available."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Package, BadgeCheck, Wallet, CalendarCheck, BarChart3, Headphones];

/* ============================== Page ============================== */

export default async function PpcPackagesPage() {
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
      <Checklist s={S02} tone="soft" />
      <Plans s={S03} tone="surface" />
      <Table s={S04} tone="white" />
      <Cards s={S05} tone="ink" v="split" />
      <WhyUs s={S06} />
      <Steps s={S07} tone="white" v="rail" />
      <Cards s={S08} tone="surface" v="grid" />
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
