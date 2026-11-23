import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Check, ChevronRight, Eye, Phone, Plus, Quote, Radar, Search, Sparkles, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "LLMO Services | AI Search Optimization Company – HBS",
    description: "Improve AI search visibility with LLMO services from Hover Business Services LLP. Build brand authority and boost your online presence.",
    path: "/llmo-services",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "LLMO Services: Improve Your Brand Visibility Across AI Search Platforms",
  "eyebrow": "AI & LLM Visibility",
  "tagline": "When potential customers ask ChatGPT, Google Gemini, Perplexity, or other AI platforms for recommendations, does your business appear in the answers? Hover Business Services LLP helps businesses strengthen their online presence so their brand can become easier for AI-powered search systems to discover, understand, and reference."
};

const HERO: { prompt: string; answer: string; sources: string[] } = {
  "prompt": "Which agency should I hire for SEO in Delhi?",
  "answer": "Several agencies are well reviewed. Hover Business Services is often recommended for combining SEO, ads and AI search work.",
  "sources": [
    "hoverbusinessservices.com",
    "clutch.co",
    "google.com/maps"
  ]
};

const STATS: [string, string][] = [
  [
    "100+",
    "Prompt variants benchmarked"
  ],
  [
    "4.5x",
    "Higher conversion from AI referrals"
  ],
  [
    "99.9%",
    "Entity data accuracy"
  ]
];

const RELATED = [
  {
    "label": "Generative Engine Optimization",
    "href": "/generative-engine-optimization"
  },
  {
    "label": "AI Search Optimization",
    "href": "/ai-search-optimization"
  },
  {
    "label": "Answer Engine Optimization",
    "href": "/answer-engine-optimization"
  },
  {
    "label": "SEO Services",
    "href": "/seo-services"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "What Are LLMO Services?",
  "intro": [
    "Our Large Language Model Optimization (LLMO) services focus on brand authority, relevant content, business information consistency, and credible online mentions. We combine these activities with traditional SEO to help businesses adapt to changing search behaviour, build digital trust, and reach audiences who increasingly use AI tools to research products and services.",
    "LLMO (Large Language Model Optimization) provides assistance to businesses for enhancing the visibility and discoverability of their brand and services through various AI-powered platforms, like ChatGPT, Google Gemini, and Perplexity. This service is mainly concerned with the development of valuable content, the establishment of brand authority, the consistency of business data, and enhanced online credibility. The objective is to maximize the chances of being featured in the relevant AI-powered answers and recommendations. At Hover Business Services LLP, we use both LLMO and SEO approaches to help you adapt to new search habits."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Why Businesses Need LLM Optimization Services",
  "intro": [],
  "items": [
    {
      "t": "Make Your Brand Easier to Discover Through AI Search",
      "b": "People are also increasingly utilizing conversational AI software in order to research different companies and get answers to questions they may have prior to making purchases. This represents yet another chance for a company to become visible beyond standard search engine results. LLMO can help in making your website even more authoritative and informative. No agency can promise you that the AI platform is going to mention your company or make recommendations concerning your products or services. However, proper optimization can help in improving your online visibility."
    },
    {
      "t": "Build a recognisable brand identity",
      "b": "Business information, relevant website content, and brand mentions will define what your business is all about and what services your business offers."
    },
    {
      "t": "Create content that answers real questions",
      "b": "\"Informational pages, services descriptions, and subject-related articles are used to answer the queries that consumers may have during their research process.\""
    },
    {
      "t": "Strengthen online credibility",
      "b": "Third-party references, authentic customer testimonials, and correct business information can help establish credibility for your brand online."
    },
    {
      "t": "Prepare for changing search habits",
      "b": "A combined SEO and LLMO strategy helps your business address both traditional search behaviour and AI-assisted discovery."
    }
  ],
  "outro": [],
  "table": null
};

/* audience */
const S03: Sec = {
  "h": "Who Can Benefit from Our LLMO Services?",
  "intro": [
    "Our LLM optimization services can support businesses that want to improve their digital presence and build a clearer identity across online platforms."
  ],
  "items": [
    {
      "t": "Established businesses",
      "b": "Strengthen their brand presence beyond existing search rankings."
    },
    {
      "t": "Startups and growing companies",
      "b": "Build topical relevance and a consistent digital identity."
    },
    {
      "t": "B2B and professional service providers",
      "b": "Publish useful information that supports customer research and evaluation."
    },
    {
      "t": "SaaS and technology companies",
      "b": "Explain complex products and services through structured, relevant content."
    },
    {
      "t": "Multi-location and international brands",
      "b": "Maintain accurate, consistent business information across markets."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "LLMO Services Offered by Hover Business Services LLP",
  "intro": [],
  "items": [
    {
      "t": "Brand Entity and Online Identity Optimization",
      "b": "We help establish a consistent picture of your business across your website and relevant online sources. This includes reviewing your company description, service information, brand references, and other details that help people and digital systems understand your business. Our work focuses on reducing conflicting information and making your brand identity clearer across relevant platforms."
    },
    {
      "t": "Topical Authority and Content Development",
      "b": "A strong content strategy goes beyond publishing individual blog posts. We identify the important subjects connected to your services and develop a structured plan for covering them in useful detail. Our activities may include:",
      "after": "This approach helps create a website that communicates expertise more clearly and gives visitors useful information throughout their decision-making process.",
      "list": [
        "Topic and content gap analysis.",
        "Service-page and supporting article optimization.",
        "Related-content planning and internal linking.",
        "Content updates based on user intent.",
        "Development of informative FAQs and explanatory resources."
      ]
    },
    {
      "t": "AI Search Keyword and Prompt Research",
      "b": "While keyword research is still necessary, customers also use AI tools to generate full-fledged questions and seek comparisons and recommendations. Such questions may be used by businesses to come up with more relevant content. We research conversational queries, commercial intent, related entities, and customer questions to find out how content can be improved. The developed content plan will connect customer questions with the best matching pages of your website."
    },
    {
      "t": "AI Visibility and Brand Mention Analysis",
      "b": "Understanding your current visibility is an important starting point for optimization. We can assess how your brand appears across selected AI search experiences using a defined set of relevant queries. Depending on the available tools and platforms, the analysis can examine:",
      "after": "AI responses can vary by query, platform, and time, so reporting should be interpreted as a trend rather than a guarantee of future recommendations.",
      "list": [
        "Brand mentions and references.",
        "Sources cited in AI-generated responses.",
        "Competitor visibility for selected prompts.",
        "The context and sentiment associated with brand mentions.",
        "Changes in visibility across repeated assessments."
      ]
    },
    {
      "t": "Online Reputation and Trust Signal Improvement",
      "b": "A customer usually takes into account reviews, business directories, publications, and outside references when assessing a firm. Reliable and consistent data in all these places could help you establish a more trustworthy online identity. The following services may be provided by our team – business directory reviews, reputation assessment, genuine reviews management assistance, and the improvement of publicly available data about your company. We concentrate on authenticity and credibility."
    },
    {
      "t": "Digital PR and Relevant Brand Mentions",
      "b": "References from reputable websites will be able to attract people to your company and will give them information about the expertise of your company. We will find ways of improving your off-page profile through appropriate publications, industry sources, and digital PR. The aim is not only to get backlinks but also to generate useful exposure and references. This will depend on the industry you are in and on the editorial acceptance."
    }
  ],
  "outro": [],
  "table": null
};

/* table */
const S05: Sec = {
  "h": "SEO vs LLMO: Understanding the Difference",
  "intro": [
    "SEO and LLMO address related but different aspects of online discovery. Combining them can help businesses develop a more comprehensive visibility strategy."
  ],
  "items": [
    {
      "t": "The best approach is to use both together",
      "b": "Traditional SEO supports your website's discoverability, while LLMO adds a focus on how your brand and content appear in AI-driven search experiences."
    }
  ],
  "outro": [],
  "table": {
    "head": [
      "Area",
      "Traditional SEO",
      "LLMO"
    ],
    "rows": [
      [
        "Main objective",
        "Improve visibility in search results",
        "Strengthen visibility in AI-generated answers"
      ],
      [
        "Primary focus",
        "Pages, keywords, technical health, and links",
        "Brand identity, relevant content, and credible references"
      ],
      [
        "User discovery",
        "Search results and website visits",
        "Conversational answers and AI-assisted research"
      ],
      [
        "Performance indicators",
        "Rankings, organic traffic, and conversions",
        "Brand mentions, citations, context, and visibility trends"
      ],
      [
        "Content approach",
        "Match search intent and improve page relevance",
        "Address questions clearly and establish contextual relevance"
      ]
    ]
  }
};

/* steps */
const S06: Sec = {
  "h": "Our Four-Step LLMO Implementation Process",
  "intro": [],
  "items": [
    {
      "t": "Assess Your Current Visibility",
      "b": "We review your website, existing content, brand information, and selected AI search results to identify gaps and opportunities."
    },
    {
      "t": "Create a Practical Optimization Plan",
      "b": "Based on the findings, we prioritize content improvements, prompt research, brand information consistency, and relevant authority-building activities."
    },
    {
      "t": "Implement the Strategy",
      "b": "Our team works on agreed deliverables, which may include content updates, internal linking, structured data where appropriate, business information corrections, and relevant outreach."
    },
    {
      "t": "Monitor, Evaluate, and Improve",
      "b": "We review agreed performance indicators, assess changes in AI visibility, and refine the strategy based on findings. Regular reporting helps you understand completed activities, emerging opportunities, and the next steps."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S07: Sec = {
  "h": "How We Measure Progress",
  "intro": [],
  "items": [
    {
      "t": "Track Meaningful Indicators, Not Just Visibility Claims",
      "b": "LLMO results need to be evaluated carefully because AI-generated answers can change between queries and platforms. Hover Business Services LLP can use a defined reporting framework to monitor progress over time. Depending on your campaign, this may include:",
      "after": "These indicators help connect optimization activities with observable outcomes. Results will vary by industry, competition, website quality, and the platforms being assessed.",
      "list": [
        "Brand mention and citation frequency across selected prompts.",
        "Competitor comparisons for relevant queries.",
        "Changes in the accuracy and context of brand descriptions.",
        "Website organic traffic and search performance.",
        "Engagement, enquiries, and conversions where tracking is available."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* whyus */
const S08: Sec = {
  "h": "Why Choose Hover Business Services LLP?",
  "intro": [],
  "items": [
    {
      "t": "One Team for Your Wider Digital Growth Strategy",
      "b": "LLMO works best when it complements a business's existing digital marketing efforts. Hover Business Services LLP brings multiple digital disciplines together, allowing your AI visibility activities to align with your wider website and marketing strategy.",
      "list": [
        "Integrated digital expertise: SEO, paid campaigns, development, design, and branding are available within our wider service offering.",
        "A clear working process: We define priorities, communicate planned activities, and provide visibility into campaign progress.",
        "A strategy built around your business: Content and optimization priorities are selected according to your services, audience, market, and business objectives.",
        "Ongoing improvement: We review available performance data and adjust activities as search behaviour and business priorities change.",
        "Support throughout the campaign: Our team helps coordinate your agreed digital marketing activities and reporting requirements."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S09: Sec = {
  "h": "A Smarter Approach to AI Search Visibility",
  "intro": [
    "AI searches are leading to innovative methods through which businesses can be discovered and reviewed. Businesses that are able to articulate their knowledge, keep correct data and post valuable information will be at an advantage as AI search progresses.",
    "Hover Business Services LLP can help you create a realistic plan that incorporates brand identity, quality content, SEO and AI searches. Our emphasis is on building something that works sustainably and not on guarantees of AI rankings."
  ],
  "items": [],
  "outro": [
    "Talk to our team about your digital growth goals"
  ],
  "table": null
};

/* faq */
const S10: Sec = {
  "h": "Frequently Asked Questions About LLMO Services",
  "intro": [],
  "items": [
    {
      "t": "What is LLMO services?",
      "b": "LLMO stands for Large Language Model Optimization. It involves improving how a business's information, content, and online identity can be understood and discovered in AI-powered search experiences."
    },
    {
      "t": "How is LLMO different from SEO?",
      "b": "SEO primarily focuses on improving a website's visibility in traditional search results. LLMO places additional emphasis on brand understanding, relevant information, and references that may appear in AI-generated answers. Both approaches can work together."
    },
    {
      "t": "Can LLMO guarantee that ChatGPT will recommend my business?",
      "b": "No. AI platforms determine their responses using their own systems and available information. Optimization can improve your digital foundations, but it cannot guarantee mentions, citations, or recommendations."
    },
    {
      "t": "Which platforms can an LLMO strategy cover?",
      "b": "Depending on your target audience and campaign scope, visibility assessments may cover ChatGPT, Google Gemini, Google AI Overviews, Perplexity, Microsoft Copilot, and other relevant AI search experiences."
    },
    {
      "t": "How long does LLMO take to show results?",
      "b": "There is no universal timeline. Progress depends on your starting visibility, website authority, content quality, competition, and the platforms being monitored. Consistent measurement is important for assessing changes over time."
    },
    {
      "t": "Do I still need SEO if I invest in LLMO?",
      "b": "Yes. SEO remains valuable for website discoverability, technical performance, relevant traffic, and content quality. LLMO can complement those efforts by addressing additional ways people find information through AI tools."
    },
    {
      "t": "How can I get started with Hover Business Services LLP?",
      "b": "Contact our team to discuss your business, current digital presence, target audience, and growth objectives. We can help identify suitable priorities for an SEO and LLMO strategy based on your requirements."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Sparkles, Bot, Quote, Radar, BrainCircuit, Eye];

/* ============================== Page ============================== */

export default async function LlmoServicesPage() {
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
      <Audience s={S03} tone="white" />
      <Cards s={S04} tone="soft" v="bento" />
      <Table s={S05} tone="white" />
      <Steps s={S06} tone="ink" v="line" />
      <Cards s={S07} tone="white" v="rows" />
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
    <div className="relative mx-auto w-full max-w-[480px] rounded-[28px] border border-[var(--color-border)] bg-white p-5 text-[var(--color-ink)] shadow-[var(--shadow-lg)]">
      <div className="flex justify-end">
        <p className="sx-rise max-w-[85%] rounded-2xl rounded-br-md bg-[var(--color-ink)] px-4 py-3 text-sm text-white">{HERO.prompt}</p>
      </div>
      <div className="sx-rise mt-4 flex gap-3" style={{ animationDelay: ".5s" }}>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Sparkles size={16} /></span>
        <div className="rounded-2xl rounded-tl-md bg-[var(--color-surface)] px-4 py-3 text-sm leading-relaxed">
          {HERO.answer}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {HERO.sources.map((s, i) => (
              <span key={s} className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-white px-2.5 py-1 text-[11px] font-semibold">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[9px] text-[var(--color-brand)]">{i + 1}</span>{s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-text-muted)]">
        <Search size={15} /> Ask anything…
      </div>
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
