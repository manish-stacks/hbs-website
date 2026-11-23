import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Check, ChevronRight, Eye, Phone, Plus, Quote, Radar, Search, Sparkles, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Answer Engine Optimization Services | AEO Agency India",
    description: "Improve AI search visibility with expert Answer Engine Optimization services from Hover Business Services LLP. Contact us today to get started.",
    path: "/answer-engine-optimization",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Answer Engine Optimization",
  "eyebrow": "Answer Engine Optimization",
  "tagline": "Answer Engine Optimization Services to Improve Your AI Search Visibility"
};

const HERO: { prompt: string; answer: string; sources: string[] } = {
  "prompt": "How long does SEO take to show results?",
  "answer": "Most sites see clear movement in 3 to 6 months, depending on competition and content quality.",
  "sources": [
    "Featured snippet",
    "Voice answer",
    "People also ask"
  ]
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
    "label": "Generative Engine Optimization",
    "href": "/generative-engine-optimization"
  },
  {
    "label": "LLMO Services",
    "href": "/llmo-services"
  },
  {
    "label": "AI SEO Company",
    "href": "/ai-search-optimization"
  },
  {
    "label": "Technical SEO",
    "href": "/technical-seo"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Answer Engine Optimization Agency for the Next Generation of Search",
  "intro": [
    "As a trusted Answer Engine Optimization agency in India, Hover Business Services LLP helps businesses improve their visibility across search engines, voice assistants, and AI-powered platforms. Our AEO services focus on making your website content clear, relevant, and useful so answer engines can better understand your expertise and consider your content when generating responses.",
    "Search behaviour is changing as people increasingly use AI assistants and conversational search tools to find information, compare solutions, and make decisions. Businesses must now optimize their content not only for traditional search rankings but also for AI-generated answers.",
    "At Hover Business Services LLP, we develop Answer Engine Optimization strategies that help brands adapt to this evolving search environment. We focus on improving content visibility across platforms such as Google AI Overviews, ChatGPT, Gemini, Microsoft Copilot, Perplexity AI, and other AI-powered discovery tools.",
    "Unlike traditional SEO, which primarily focuses on improving search engine rankings and organic traffic, AEO aims to make information easier for answer engines to understand, extract, and present in response to relevant questions.",
    "Our approach combines conversational keyword research, semantic SEO, structured data, content optimization, and clear information architecture. We also consider experience, expertise, authoritativeness, and trustworthiness (E-E-A-T) when improving content quality and credibility.",
    "The goal is to help your business become a relevant and reliable source of information when potential customers search for answers related to your products, services, or industry."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* prose */
const S02: Sec = {
  "h": "Help Your Brand Become a Preferred Source in AI Search",
  "intro": [
    "Modern-day users want quick, relevant, and accurate answers. In case you fail to provide them with the answers to their queries, the competing sites might be seen more in search results and automated answers.",
    "Hover Business Services LLP is here to help your company design the AEO strategy based on the questions that your audience asks, the intention behind searches, and the data your audience is seeking.",
    "Our experts will show you how to enhance your content, increase its relevance to topics, and ensure that crucial data is easily understood by search engines."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* steps */
const S03: Sec = {
  "h": "How Our Answer Engine Optimization Services Work",
  "intro": [
    "As an Answer Engine Optimization agency, we focus on improving your website's readiness for AI-driven discovery while maintaining strong organic search fundamentals."
  ],
  "items": [
    {
      "t": "AI Search Behaviour Analysis",
      "b": "This paper explores how your target audience seeks information through conversational questions, artificial intelligence, and answers from search engines. This will allow us to understand how people pose questions and what they seek in their answers."
    },
    {
      "t": "Search Intent and Question Research",
      "b": "We determine the relevant questions asked by users, the long tail keywords, and the conversational search queries that are relevant to your business. These queries are then mapped to appropriate content opportunities."
    },
    {
      "t": "Comprehensive AEO Audit",
      "b": "We analyze your website's content, architecture, interlinks, schema markup, and current presence in search engines. Through this analysis, we will be able to pinpoint any possible problems that can cause search engines not to understand your website properly."
    },
    {
      "t": "Content Structuring for Answer Engines",
      "b": "This is accomplished through descriptive titles, clear explanations, pertinent FAQs, lists, and structured data where applicable. This aids in making your content easier for search engines and AI to process."
    },
    {
      "t": "AEO Content Creation and Optimization",
      "b": "We make sure to create content that answers legitimate questions and provides useful and well-substantiated information. Our strategy includes improvement of the existing pages and creation of the new ones on relevant themes without the purpose to target keywords."
    },
    {
      "t": "Brand Authority and Citation Research",
      "b": "We assess your website's credibility signals, relevant brand mentions, backlinks, and references across the web. These insights help identify ways to strengthen your online authority and establish a more consistent brand presence."
    }
  ],
  "outro": [],
  "table": null
};

/* prose */
const S04: Sec = {
  "h": "Turn AI Search Visibility Into Meaningful Business Opportunities",
  "intro": [
    "AEO that works goes beyond just appearing in an AI-generated response. The content you generate needs to make the customer feel comfortable with your brand and confident about where to go from there in terms of their purchasing decision.",
    "Hover Business Services LLP develops answer-based content in light of your business goals. Based on your website, industry, and current performance, there are ways that we can boost the traffic, increase your visibility, and acquire new customers.",
    "We don't offer any guarantees about rankings and AI mentions."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S05: Sec = {
  "h": "Why Your Business Needs Answer Engine Optimization Services",
  "intro": [
    "Search technology continues to evolve, and users now discover businesses through a wider range of platforms. AEO helps businesses prepare their content for these changing search experiences."
  ],
  "items": [
    {
      "t": "AI Is Reshaping Information Discovery",
      "b": "AI assistants have become popular when it comes to discovering information about topics, making comparisons between products, and getting explanations. Optimization for clarity of information may assist your business in becoming visible."
    },
    {
      "t": "Build Greater Search Visibility",
      "b": "Structured and relevant content makes search engines understand your skills and topics that your website deals with. It helps build the basis for your discoverability through both traditional and AI search engines."
    },
    {
      "t": "Adapt to the Growth of Zero-Click Searches",
      "b": "Many users will find what they require within the search summaries or the AI responses without going on the website at all. AEO is an option which enables the business to customize their content based on this trend while still offering helpful links to further information."
    },
    {
      "t": "Stay Competitive as Search Evolves",
      "b": "Relying solely on keyword rankings might not necessarily cater to all new channels of discovery. Merging SEO basics with answer optimization allows you to adapt to changes in the users' demands."
    },
    {
      "t": "Strengthen Trust Through Useful Content",
      "b": "Accurate information, clear explanations, credible references, and consistent brand details can help users assess your business. These qualities also support the broader content and credibility principles associated with high-quality search visibility."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S06: Sec = {
  "h": "AEO vs. Traditional SEO: Understanding the Difference",
  "intro": [
    "Traditional SEO and Answer Engine Optimization share many foundations, but they emphasize different aspects of online discovery."
  ],
  "items": [
    {
      "t": "Answer Engine Optimization (AEO)",
      "b": "",
      "list": [
        "Focuses on making content suitable for direct answers and AI-generated summaries.",
        "Prioritizes conversational queries and question-based search intent.",
        "Uses clear content structures, relevant FAQs, and appropriate schema markup.",
        "Supports visibility opportunities across AI assistants, voice search, and search answer features.",
        "Emphasizes concise, relevant, and well-supported information.",
        "Adapts content strategies to changing answer-focused search experiences."
      ]
    },
    {
      "t": "Traditional Search Engine Optimization (SEO)",
      "b": "",
      "list": [
        "Focuses on improving organic visibility in search engine results.",
        "Targets relevant keywords, search intent, and website relevance.",
        "Includes technical SEO, on-page optimization, internal linking, and backlink development.",
        "Aims to improve rankings and attract qualified organic visitors.",
        "Addresses crawling, indexing, website performance, and content quality.",
        "Requires ongoing adjustments as search engine systems and user behaviour change.",
        "The best approach: AEO and SEO work together. A technically sound website with useful content provides a strong foundation for both traditional rankings and opportunities to appear in answer-focused search experiences."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S07: Sec = {
  "h": "Our Step-by-Step AEO Implementation Process",
  "intro": [
    "At Hover Business Services LLP, we follow a structured approach to identify opportunities, implement improvements, and assess progress."
  ],
  "items": [
    {
      "t": "Define Your Business Objectives",
      "b": "We begin by understanding your services, target audience, industry, competitors, and expectations. This allows us to align AEO activities with your wider digital marketing goals."
    },
    {
      "t": "Evaluate Your Current Search Presence",
      "b": "We assess your website's existing content, organic visibility, technical health, and answer-focused optimization opportunities. The findings help establish priorities for the next stage."
    },
    {
      "t": "Implement Content and Technical Improvements",
      "b": "We optimize relevant pages, improve content structure, research user questions, and address suitable technical and structured-data requirements. Each change is based on the needs of your website and audience."
    },
    {
      "t": "Monitor Performance and Refine the Strategy",
      "b": "We review available search performance data, relevant referral traffic, content engagement, and AI visibility indicators where reliable measurement is possible. These insights guide ongoing refinements and future optimization priorities."
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S08: Sec = {
  "h": "Build a Stronger Presence Across AI Search Platforms",
  "intro": [
    "There are emerging opportunities through the use of AI search, which would enable individuals to find their way towards you as well as evaluate the information. Preparing your website in such a manner could enable you to adapt to the changes in searching without neglecting the benefits of SEO.",
    "Hover Business Services LLP could provide you with an answer engine optimization strategy through the use of relevant content, good technology, and audience research."
  ],
  "items": [],
  "outro": [
    "Ready to improve your brand's visibility in AI search? Contact Hover Business Services LLP to discuss your website, business objectives, and AEO opportunities."
  ],
  "table": null
};

/* faq */
const S09: Sec = {
  "h": "Frequently Asked Questions",
  "intro": [],
  "items": [
    {
      "t": "What is Answer Engine Optimization (AEO)?",
      "b": "Answer Engine Optimization is the practice of improving content so search engines, AI assistants, and other answer-focused systems can understand and potentially surface it in response to user questions."
    },
    {
      "t": "How is AEO different from SEO?",
      "b": "SEO primarily aims to improve organic search visibility and rankings, while AEO emphasizes making content suitable for direct answers and AI-generated responses. Both approaches can complement each other."
    },
    {
      "t": "Which platforms can AEO support?",
      "b": "AEO strategies can target opportunities across Google AI Overviews, ChatGPT, Gemini, Microsoft Copilot, Perplexity AI, voice assistants, and other answer-focused search experiences. Actual visibility depends on each platform's systems and content selection."
    },
    {
      "t": "Does AEO guarantee that my business will appear in AI answers?",
      "b": "No. No agency can guarantee placement in AI-generated answers. Results depend on factors such as content relevance, source credibility, competition, platform behaviour, and other changing signals."
    },
    {
      "t": "How long does AEO take to show results?",
      "b": "The timeframe varies according to your website's current condition, competition, content quality, and the scope of optimization. AEO requires ongoing monitoring and refinement rather than a guaranteed fixed timeline."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Sparkles, Bot, Quote, Radar, BrainCircuit, Eye];

/* ============================== Page ============================== */

export default async function AnswerEngineOptimizationPage() {
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
      <Prose s={S02} tone="soft" />
      <Steps s={S03} tone="white" v="rail" />
      <Prose s={S04} tone="surface" />
      <Cards s={S05} tone="white" v="split" />
      <Cards s={S06} tone="surface" v="grid" />
      <Steps s={S07} tone="white" v="line" />
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
