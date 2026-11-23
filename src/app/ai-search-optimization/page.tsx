import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Check, ChevronRight, Eye, Phone, Plus, Quote, Radar, Search, Sparkles, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "AI-Powered SEO Company | AI SEO Services India | Hover Business Services LLP",
    description: "Get better AI search visibility with trusted AI SEO services from Hover Business Services LLP. Improve rankings and grow your business online.",
    path: "/ai-search-optimization",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "AI SEO Company – Smarter Strategies for Search Visibility and Business Growth",
  "eyebrow": "Next-Gen Search Intelligence",
  "tagline": "Hover Business Services LLP helps businesses strengthen their online presence through AI-driven SEO strategies designed to improve search visibility, attract relevant visitors, and support sustainable growth. By combining artificial intelligence with proven search engine optimization techniques, we develop strategies around your business goals, target audience, and industry competition."
};

const HERO: { prompt: string; answer: string; sources: string[] } = {
  "prompt": "best way to improve website traffic in 2026",
  "answer": "Focus on helpful content, technical health and being cited in AI answers. Specialists like Hover Business Services publish clear guides on this.",
  "sources": [
    "AI Overview",
    "Perplexity",
    "Copilot"
  ]
};

const STATS: [string, string][] = [
  [
    "1,500+",
    "Successful SEO campaigns"
  ],
  [
    "+180%",
    "Average organic traffic growth"
  ],
  [
    "94%",
    "Client retention rate"
  ]
];

const RELATED = [
  {
    "label": "Generative Engine Optimization",
    "href": "/generative-engine-optimization"
  },
  {
    "label": "Answer Engine Optimization",
    "href": "/answer-engine-optimization"
  },
  {
    "label": "Technical SEO",
    "href": "/technical-seo"
  },
  {
    "label": "Local SEO Services",
    "href": "/local-seo"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "AI SEO Agency for Google and AI-Powered Search Platforms",
  "intro": [
    "Our approach brings together keyword research, search intent analysis, content optimization, technical SEO, and performance monitoring. We also consider how customers discover businesses through AI-powered platforms such as ChatGPT, Google Gemini, Perplexity, and Google AI Overviews. The objective is to build a stronger digital presence across traditional search results and emerging AI search experiences while keeping content useful, accurate, and relevant to your audience.",
    "The search pattern continues to shift as people make use of both the conventional search engines and the conversational AI to search for information. Companies require an SEO approach that will take into consideration all these forms of discovery without ignoring the basics of website optimization.",
    "Here at Hover Business Services LLP, we make use of both AI and human knowledge to look for keywords, analyze customers' questions, study our competitors, and enhance our website content. Through NLP, we can study the way people ask their queries, while using semantic analysis to determine the connections between topics and services, and related searches.",
    "Our AI SEO solutions can range from website page optimization, creation of relevant content, better internal linking, technical issues assessment, to evaluation of how well your brand is mentioned in AI-generated results."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* prose */
const S02: Sec = {
  "h": "Search Intent and Conversational Keyword Optimization",
  "intro": [
    "SEO depends on the comprehension of what motivates the searcher. There are those who need to gain knowledge about a particular topic, while there are those who would want to compare service providers and make a decision to buy.",
    "Keywords are organized by informational, commercial, transactional, and navigational intent. We also explore longer keywords used by customers when making inquiries from AI services about a product or service.",
    "This strategy will ensure that we develop content that addresses real customer problems throughout their buying journey. The AI platforms have their own algorithm for generating results. However, appropriate content will ensure that it is discoverable."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "AI SEO Services Offered by Hover Business Services LLP",
  "intro": [],
  "items": [
    {
      "t": "AI-Assisted Keyword Research",
      "b": "With the help of research instruments and AI-powered analysis, we discover search terms, topics related to your products or services, gaps in your competitors' content, and other opportunities associated with your business. We assess each discovered opportunity depending on its search intent, relevance for the business, and potential value."
    },
    {
      "t": "AI-Powered Content Strategy",
      "b": "Our team develops content plans around customer questions, industry topics, and your business objectives. This may include service pages, blog articles, supporting guides, comparison pages, and FAQs. AI-assisted research can help organize ideas, but content should be reviewed for accuracy, originality, clarity, and usefulness before publication."
    },
    {
      "t": "On-Page SEO Optimization",
      "b": "We improve important on-page elements to help search engines and visitors understand your content. Activities may include title and meta description optimization, heading structure, internal links, image alt text, keyword placement, and content refinement."
    },
    {
      "t": "Technical SEO and Website Performance",
      "b": "Technical SEO helps search engines access and interpret website pages effectively. Depending on the audit findings, our work may cover crawlability, indexation, mobile usability, page performance, structured data, broken links, and duplicate content issues."
    },
    {
      "t": "AI Search Visibility Optimization",
      "b": "The evaluation process looks at the possibilities to enhance the representation of your brand and content on the chosen AI-powered search experiences. It can include enriching topicality, factual correctness, answering questions and credible mentions of your company. AI-generated citations and recommendations cannot be guaranteed, so visibility should be evaluated through ongoing monitoring rather than promised rankings."
    },
    {
      "t": "Competitor and Market Analysis",
      "b": "We study competing websites, their content strategies, keyword coverage, and relevant search visibility. These findings help identify gaps your business can address through more useful content, stronger website structure, and a clearer presentation of your services."
    },
    {
      "t": "SEO Performance Analysis and Reporting",
      "b": "We measure the performance indicators that we agree on, including organic traffic, keyword visibility, landing page performance, inquiries, and conversions if it's possible to track. In cases when the campaign includes AI search tracking, we can also evaluate selected prompts, brand mentions, and citations. The results help us understand what deserves more of our attention."
    }
  ],
  "outro": [],
  "table": null
};

/* plans */
const S04: Sec = {
  "h": "AI SEO Packages for Different Business Goals",
  "intro": [
    "Hover Business Services LLP can structure an AI SEO campaign around your market, website condition, competition, and growth priorities. The following are suggested package structures that can be customized according to the services you offer."
  ],
  "items": [
    {
      "t": "Starter Plan – AI SEO Essentials",
      "b": "Focus areas:",
      "list": [
        "Suitable for: Startups, local businesses, and smaller websites.",
        "Initial SEO and website audit.",
        "Keyword and search intent research.",
        "Essential on-page optimization.",
        "Local SEO and business listing review, where relevant.",
        "Initial content recommendations.",
        "Basic performance reporting.",
        "Primary objective: Establish a stronger SEO foundation and identify opportunities for improved search visibility."
      ]
    },
    {
      "t": "Growth Plan – AI SEO Expansion",
      "b": "Focus areas:",
      "list": [
        "Suitable for: Growing businesses targeting regional or national customers.",
        "All relevant Starter Plan activities.",
        "Expanded keyword and competitor research.",
        "Ongoing content optimization.",
        "Technical SEO improvements.",
        "Content planning for conversational queries.",
        "Internal linking and authority-building activities.",
        "Regular performance analysis.",
        "Primary objective: Expand relevant search coverage and improve the quality of organic traffic opportunities."
      ]
    },
    {
      "t": "Professional Plan – Advanced SEO and AI Visibility",
      "b": "Focus areas:",
      "after": "Package pricing, deliverables, reporting frequency, and campaign timelines should be confirmed according to the actual scope of work.",
      "list": [
        "Suitable for: Established businesses, larger websites, and competitive industries.",
        "Comprehensive technical and content audits.",
        "Advanced keyword and market analysis.",
        "Large-scale content optimization.",
        "Conversion-focused website recommendations.",
        "Relevant digital PR and authority-building activities.",
        "Selected AI search visibility assessments.",
        "Customized reporting and strategic reviews.",
        "Primary objective: Coordinate advanced SEO activities with a broader strategy for digital visibility and business growth."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S05: Sec = {
  "h": "Our AI SEO Implementation Process",
  "intro": [],
  "items": [
    {
      "t": "Understand Your Business Goals",
      "b": "We begin by learning about your products or services, target customers, competitors, and business objectives. This helps establish meaningful priorities for the SEO campaign."
    },
    {
      "t": "Conduct an SEO Audit and Market Review",
      "b": "We examine your website's existing performance, content, technical health, keyword coverage, and competitor landscape. The findings help identify problems and potential growth opportunities."
    },
    {
      "t": "Develop a Customized SEO Strategy",
      "b": "Using the audit findings and keyword research, we create an action plan covering content improvements, technical priorities, relevant search terms, and performance indicators."
    },
    {
      "t": "Implement Content and Technical Improvements",
      "b": "Our team works on the agreed optimization activities, which may include page updates, content development, internal linking, technical corrections, and structured data implementation where appropriate."
    },
    {
      "t": "Monitor Performance and Refine the Strategy",
      "b": "We review available data, assess progress against the campaign objectives, and adjust the plan based on performance. Ongoing analysis helps keep the strategy aligned with changes in competition, search behaviour, and business requirements."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S06: Sec = {
  "h": "Why Businesses Need AI SEO Services",
  "intro": [
    "AI Search optimization services can help businesses make better use of research, identify content opportunities, and organize optimization activities more efficiently. When combined with experienced human review, these capabilities can support a more focused SEO strategy."
  ],
  "items": [
    {
      "t": "More Efficient Research and Analysis",
      "b": "AI-assisted tools can help process keyword lists, organize competitor findings, and identify patterns across large amounts of data. This allows specialists to spend more time evaluating opportunities and planning improvements."
    },
    {
      "t": "Better Understanding of Search Intent",
      "b": "Analyzing the questions and needs behind searches can help businesses develop content that answers relevant customer concerns instead of focusing only on individual keywords."
    },
    {
      "t": "More Relevant Content Planning",
      "b": "AI-assisted research can highlight related topics, missing information, and frequently asked questions. Human review ensures the resulting content remains accurate, useful, and aligned with the brand."
    },
    {
      "t": "Clearer Performance Insights",
      "b": "Combining website analytics with search performance data helps businesses understand which pages attract visitors, where opportunities exist, and which activities may support enquiries or conversions."
    },
    {
      "t": "Support for Evolving Search Experiences",
      "b": "Traditional search engines and AI-powered platforms offer different ways for people to discover information. An integrated strategy helps businesses maintain SEO fundamentals while assessing relevant opportunities in AI-assisted search."
    }
  ],
  "outro": [],
  "table": null
};

/* prose */
const S07: Sec = {
  "h": "How AI SEO Supports the Customer Journey",
  "intro": [
    "Customers do not make all their decisions based on the results of one search only; they usually start with studying the problem, looking for potential solutions, analyzing providers, and only then try to find an appropriate business.",
    "It is important for an effective SEO strategy to take into account these stages while creating website content. Informational articles can serve to solve the problems faced in the beginning, and service pages can be used to learn about the offered solutions. Comparison and FAQ pages can be helpful in evaluating the offers and making a choice.",
    "The use of AI-based research can assist in identifying these questions, which will allow Hover Business Services LLP to build up its content according to the needs of the potential customers and establish internal connections between the pages.",
    "The goal is not simply to attract more visitors. It is to help the right audience find relevant information and take an appropriate next step."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* prose */
const S08: Sec = {
  "h": "Responsible AI SEO: Quality Before Automation",
  "intro": [
    "The use of artificial intelligence is possible in conducting SEO research and analysis, but the algorithm should not take the place of editorial and optimization decisions. The excessive production of irrelevant, repetitive or false content is detrimental to the effectiveness and reliability of the site.",
    "Our methodology focuses on providing unique conclusions and factual information, written in a clear manner, with proper internal linking and valuable for users. Any content written through the use of an AI tool needs to be reviewed by an expert in the field and the company.",
    "Furthermore, we base our performance assessment on existing data rather than any ranking promises or suggestions of AI."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* whyus */
const S09: Sec = {
  "h": "Choose Hover Business Services LLP for Your AI SEO Strategy",
  "intro": [
    "Hover Business Services LLP offers an integrated digital marketing solution that includes SEO, paid advertising, social media marketing, website development, application, and branding. Having 80+ expert staff and working experience of over 1,500 clients, we will be able to facilitate a coordination of SEO processes in relation to overall digital marketing goals.",
    "Our strategy includes an assessment of your business, identification of the key areas and the most suitable ones for the implementation of certain actions, as well as monitoring the process based on specific performance indicators."
  ],
  "items": [
    {
      "t": "Ready to strengthen your online presence?",
      "b": "Talk to our team to discuss your business objectives and explore an AI SEO strategy tailored to your requirements."
    }
  ],
  "outro": [],
  "table": null
};

/* faq */
const S10: Sec = {
  "h": "Frequently Asked Questions About AI SEO Services",
  "intro": [],
  "items": [
    {
      "t": "What is AI SEO?",
      "b": "AI SEO uses artificial intelligence and related analytical tools to support activities such as keyword research, content planning, competitor analysis, and website optimization. Human expertise remains important for strategy, accuracy, and quality control."
    },
    {
      "t": "How is AI SEO different from traditional SEO?",
      "b": "Traditional SEO focuses on improving a website's visibility in search engines through relevant content, technical improvements, and authority-building activities. AI SEO uses AI-assisted methods to support these tasks and may also include evaluating visibility across AI-powered search experiences."
    },
    {
      "t": "Can AI SEO improve Google rankings?",
      "b": "AI-assisted tools can help identify optimization opportunities, but rankings depend on many factors, including content relevance, competition, website quality, and search engine systems. No specific ranking position can be guaranteed."
    },
    {
      "t": "Does AI SEO help with ChatGPT and Google AI Overviews?",
      "b": "AI SEO can include work intended to improve the clarity, usefulness, and discoverability of your website content. These improvements may support visibility in AI-powered search experiences, but inclusion in generated answers is not guaranteed."
    },
    {
      "t": "How long does an AI SEO campaign take?",
      "b": "The timeline depends on your website's current condition, industry competition, content requirements, and campaign scope. SEO improvements generally require ongoing implementation and monitoring, rather than a one-time change."
    },
    {
      "t": "Is AI-generated content suitable for SEO?",
      "b": "AI can assist with research, outlining, and drafting, but content should be reviewed for accuracy, originality, relevance, and usefulness. The focus should be on satisfying users' needs rather than producing content simply to increase page count."
    },
    {
      "t": "How can I get started with Hover Business Services LLP?",
      "b": "Contact our team to discuss your website, target audience, competition, and business goals. We can help identify the SEO priorities and service scope that best match your requirements."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Sparkles, Bot, Quote, Radar, BrainCircuit, Eye];

/* ============================== Page ============================== */

export default async function AiSearchOptimizationPage() {
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
      <Plans s={S04} tone="surface" />
      <Steps s={S05} tone="soft" v="rail" />
      <Cards s={S06} tone="white" v="rows" />
      <Prose s={S07} tone="surface" />
      <Prose s={S08} tone="white" />
      <WhyUs s={S09} />
      <Faq s={S10} phone={co.phone} />
      <Cta s={{ h: "Ready to get started?", intro: ["Tell us about your business and goals. We will reply with a clear plan and quote."], items: [], outro: [] }} phone={co.phone} />

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
