import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Check, ChevronRight, Eye, Phone, Plus, Quote, Radar, Search, Sparkles, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Generative Engine Optimization Services | GEO Agency India",
    description: "Boost your brand's visibility in AI search with expert Generative Engine Optimization services from Hover Business Services LLP. Contact us today to grow your online reach!",
    path: "/generative-engine-optimization",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Generative Engine Optimization Services",
  "eyebrow": "AI Search & Discovery",
  "tagline": "People are changing the way they search for information. Instead of browsing multiple websites, they increasingly ask AI platforms such as ChatGPT, Google Gemini, Perplexity, and Google AI Overviews for answers, comparisons, and business recommendations. Generative Engine Optimization (GEO) helps businesses prepare for this change by improving how their brand and content are presented across the web."
};

const HERO: { prompt: string; answer: string; sources: string[] } = {
  "prompt": "Compare top digital agencies for small businesses",
  "answer": "Agencies worth comparing include Hover Business Services, known for transparent monthly reporting and fixed packages.",
  "sources": [
    "ChatGPT",
    "Gemini",
    "Claude"
  ]
};

const STATS: [string, string][] = [
  [
    "60%+",
    "Zero-click search share"
  ],
  [
    "4.2x",
    "Higher intent from AI citations"
  ],
  [
    "100%",
    "Entity & Schema compliance"
  ]
];

const RELATED = [
  {
    "label": "AI Search Optimization",
    "href": "/ai-search-optimization"
  },
  {
    "label": "Answer Engine Optimization",
    "href": "/answer-engine-optimization"
  },
  {
    "label": "LLMO Services",
    "href": "/llmo-services"
  },
  {
    "label": "Technical SEO",
    "href": "/technical-seo"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "GEO Services for AI-Powered Search Platforms",
  "intro": [
    "At Hover Business Services LLP, we focus on strengthening your digital presence through relevant content, clear brand information, topical authority, and credible online references. Our GEO approach works alongside traditional SEO to help your business become easier to understand and discover across different search experiences. Although no agency can guarantee that an AI platform will mention or recommend a particular brand, a well-planned strategy can improve the quality and consistency of your online presence.",
    "AI-powered search experiences are becoming another way for customers to research businesses before making decisions. Your website needs to provide clear answers, useful information, and reliable details about your products or services.",
    "Hover Business Services LLP helps businesses identify opportunities to improve their content and online brand presence. We study customer questions, review existing website pages, and assess relevant online sources to develop a practical optimization plan.",
    "Our approach may include content improvements, brand entity optimization, structured data, internal linking, reputation analysis, and monitoring of selected AI-generated responses. These activities support a stronger digital foundation while complementing your existing SEO strategy."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "AI Platforms Covered by Our GEO Strategy",
  "intro": [],
  "items": [
    {
      "t": "ChatGPT",
      "b": "We focus on developing useful, well-organized content and strengthening relevant brand information that may help AI systems understand your business."
    },
    {
      "t": "Google AI Overviews",
      "b": "We review content quality, page structure, search relevance, and technical SEO to support the discoverability of useful website information."
    },
    {
      "t": "Google Gemini",
      "b": "We work on clear business descriptions, relevant topic coverage, and consistent information across appropriate online sources."
    },
    {
      "t": "Perplexity",
      "b": "We assess opportunities to create informative content and strengthen credible references that may be relevant to source-based AI answers."
    },
    {
      "t": "Microsoft Copilot",
      "b": "We consider traditional search visibility, website quality, and reliable business information when assessing opportunities across Microsoft's AI-powered search experiences."
    },
    {
      "t": "Emerging AI platforms",
      "b": "As customer search habits change, we can review additional AI assistants and answer engines where they are relevant to your target audience."
    }
  ],
  "outro": [
    "Platform behaviour and information sources vary, so these activities do not guarantee placement in AI-generated responses."
  ],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "Why Generative Engine Optimization Matters for Businesses",
  "intro": [],
  "items": [
    {
      "t": "Reach Customers Beyond Traditional Search Results",
      "b": "Search visibility is no longer limited to a position on a search engine results page. Potential customers may discover businesses through AI-generated explanations, product comparisons, and service recommendations. GEO helps businesses prepare for these discovery methods by improving the information available about their brand and making their website content more useful for relevant questions.",
      "list": [
        "Improve brand discoverability: Build a consistent online identity that clearly communicates your business, services, and areas of expertise.",
        "Answer customer questions: Develop content that addresses common concerns, explains solutions, and helps visitors make informed decisions.",
        "Strengthen digital credibility: Maintain accurate business information and pursue relevant references from credible websites and industry sources.",
        "Support changing search behaviour: Combine established SEO practices with activities designed to assess visibility across AI-powered search experiences.",
        "Understand your online reputation: Review how your brand is described across available sources and identify inaccurate or inconsistent information that needs attention."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "GEO Services Offered by Hover Business Services LLP",
  "intro": [],
  "items": [
    {
      "t": "Brand Entity Optimization",
      "b": "Brand entity optimization can help give you a clear identity as a brand. We assess the information related to your company, your website information, your services, as well as any information that may be available outside of your company and is relevant. The purpose is to allow people and technology to understand who you are, what you do, and what subjects are relevant to your brand."
    },
    {
      "t": "Content Optimization for AI Search",
      "b": "It is crucial to have relevant content if clients seek answers rather than keywords. We examine existing content and find ways to make it more comprehensive, relevant, structured and clear. The process involves updates of service pages, creation of informative articles, organization of FAQs, improvement of internal linking and addressing customers' questions. Recommendations for content will be provided based on your industry, target audience and goals."
    },
    {
      "t": "Topical Authority Development",
      "b": "A website is able to convey its expertise better if the associated topics are discussed in an organized manner. Relevant topics associated with your services are identified and content that will support them is planned. Topic clusters, how-to guides, associated blog posts, and linking between related pages can be part of it. An organized content structure allows visitors to navigate information and provides more clarity to search systems about your website."
    },
    {
      "t": "AI Visibility and Citation Monitoring",
      "b": "Knowing where you currently stand is essential to making improvements. It will be possible to determine how your brand stands with regards to AI channels that we will be targeting using customer queries and prompts. The process will vary based on the campaign and tools at our disposal. It may involve measuring brand mentions, source citations, competition as well as factual information in response generation."
    },
    {
      "t": "Online Reputation and Review Optimization",
      "b": "Third-party information and reviews may affect the perception that customers have of the firm. Our team evaluates all available online information about your business to help uncover any incorrect information that might need updating. The process we use is based on proper business information, real customer reviews, and reputation management."
    },
    {
      "t": "Digital PR and Brand Mentions",
      "b": "Relevant mentions from credible publications, industry websites, and other appropriate sources can help people learn about your business. We identify opportunities to strengthen your online presence through useful content, relevant outreach, and digital PR activities. The focus is on meaningful references and genuine credibility rather than collecting links without considering their relevance."
    },
    {
      "t": "Structured Data and Technical SEO",
      "b": "Structured data can help search engines interpret certain types of website information. We review technical SEO elements and recommend suitable schema markup where appropriate. Other activities may include reviewing indexation, crawlability, page structure, broken links, and mobile usability. These improvements support the technical foundation of your website, although structured data does not guarantee inclusion in AI-generated answers."
    }
  ],
  "outro": [],
  "table": null
};

/* plans */
const S05: Sec = {
  "h": "GEO Packages for Different Business Requirements",
  "intro": [
    "Every business has different goals, levels of competition, and website requirements. The following package structure can help organize GEO services according to your needs."
  ],
  "items": [
    {
      "t": "GEO Essentials",
      "b": "A practical starting point for businesses building their AI search presence.",
      "list": [
        "Website and AI visibility assessment",
        "Brand information and entity consistency review",
        "Content improvements for AI-generated answers",
        "Search intent and customer query research",
        "Structured data and schema review",
        "Initial visibility performance benchmarks",
        "Ready to build your foundation? Get in touch to discuss your GEO requirements."
      ]
    },
    {
      "t": "GEO Growth",
      "b": "For businesses aiming to strengthen brand visibility and reach more relevant audiences.",
      "list": [
        "All core activities included in GEO Starter",
        "Ongoing content optimization and development",
        "Topic cluster planning and internal linking improvements",
        "Brand mention and citation analysis",
        "Competitor visibility monitoring",
        "Relevant online authority-building initiatives",
        "Regular AI search performance reviews",
        "Looking to expand your reach? Discuss a GEO strategy designed around your growth objectives."
      ]
    },
    {
      "t": "GEO Authority",
      "b": "For established brands seeking stronger topical relevance and recognition across AI search platforms.",
      "list": [
        "All activities included in GEO Growth",
        "Advanced content gap and topical authority analysis",
        "In-depth conversational and long-tail query targeting",
        "Digital PR and relevant citation opportunities",
        "Brand reputation and information accuracy monitoring",
        "AI visibility assessment across relevant platforms",
        "Ongoing strategic reviews and performance reporting",
        "Ready to strengthen your brand authority? Let's explore the right approach for your market."
      ]
    },
    {
      "t": "GEO Enterprise",
      "b": "Customized GEO strategies for larger organizations, multiple brands, and businesses operating across different markets.",
      "list": [
        "Tailored GEO strategy and implementation planning",
        "Multi-location and multi-market content optimization",
        "Brand consistency reviews across business units",
        "Expanded competitor and AI visibility analysis",
        "Multilingual GEO planning where required",
        "Customized reporting aligned with business goals",
        "Ongoing strategic support and optimization",
        "Need a tailored enterprise solution? Contact our team to discuss your requirements."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S06: Sec = {
  "h": "How We Measure GEO Performance",
  "intro": [],
  "items": [
    {
      "t": "Track Progress With Meaningful Indicators",
      "b": "GEO requires ongoing evaluation because AI-generated responses can vary between platforms, prompts, and time periods. Hover Business Services LLP can establish a reporting framework based on the activities included in your campaign. Relevant indicators may include:",
      "after": "These measurements provide a clearer picture of progress without relying on unsupported ranking promises.",
      "list": [
        "AI brand mentions: How frequently your business appears in selected responses.",
        "Citation monitoring: Which sources are referenced when relevant questions are answered.",
        "Competitor visibility: How your brand appears compared with selected competitors.",
        "Brand accuracy and sentiment: Whether available responses describe your business correctly and in an appropriate context.",
        "AI referral traffic: Website visits from identifiable AI-powered sources, where analytics data is available.",
        "Organic search performance: Changes in search visibility, traffic, and relevant website conversions."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S07: Sec = {
  "h": "How Our GEO Implementation Process Works",
  "intro": [],
  "items": [
    {
      "t": "Review Your Current Digital Presence",
      "b": "We examine your website, existing content, business information, and selected AI search responses to understand your starting position."
    },
    {
      "t": "Identify Opportunities",
      "b": "We research relevant customer questions, review competitor content, and identify gaps in your website's topic coverage and brand information."
    },
    {
      "t": "Create an Optimization Roadmap",
      "b": "We prioritize activities such as content updates, brand entity improvements, technical SEO, and relevant authority-building work according to your goals."
    },
    {
      "t": "Implement the Agreed Strategy",
      "b": "Our team works through the selected activities and reviews the website and supporting information for accuracy, clarity, and consistency."
    },
    {
      "t": "Monitor and Refine",
      "b": "We assess available performance data, review changes in selected AI responses, and adjust the plan based on what the evidence shows."
    }
  ],
  "outro": [],
  "table": null
};

/* prose */
const S08: Sec = {
  "h": "How GEO Helps Your Brand Get Discovered in AI Search",
  "intro": [
    "GEO can enable companies to find solutions to answer the queries raised by customers before selecting a service provider or purchasing a particular product. Rather than concentrating only on keywords, the entire process takes into account the information required by the customers.",
    "For instance, a customer looking for a digital marketing agency may use an AI platform to compare agencies or get information about the different services. Well-structured service pages, information-rich articles, clear company details, and references from credible third parties can help in increasing visibility in relation to these topics.",
    "At Hover Business Services LLP, we use the holistic approach in order to identify content and visibility opportunities relating to your services. This will help us make your business information consistent and valuable in the digital realm, despite the fact that AI platforms select the source material themselves."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* prose */
const S09: Sec = {
  "h": "Building Long-Term Brand Authority Across AI Platforms",
  "intro": [
    "However, it takes persistent efforts to build a solid digital reputation. Such things as producing valuable content, keeping business info up to date, showcasing expertise and getting references from outside sources can all help build such a reputation.",
    "Thus, you need to perceive GEO as an on-going process of your digital marketing rather than a single technical task. Regular reviews will help spot out-of-date data, new questions of customers, gaps in your content and alterations in your brand presentation on selected AI search experiences.",
    "Through combining GEO with regular SEO, Hover Business Services LLP is ready to help build a realistic starting point for long-term online visibility for any business. We do not focus on any guarantees but on practical actions."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* whyus */
const S10: Sec = {
  "h": "Why Choose Hover Business Services LLP for GEO Services?",
  "intro": [
    "As an organization providing digital marketing solutions such as SEO, paid advertising, social media, website creation, application development, and branding, Hover Business Services LLP can take into account the GEO factor in relation to your overall digital strategy and not regard it as a separate process.",
    "We concentrate on analyzing your business needs, finding out how to use the identified possibilities, and informing you about what should be done for this purpose. This approach implies clear communication and optimization that is based on the obtained information.",
    "If you need to upgrade your website, to make it more clear to explain your services, or to evaluate the current state of your organization in terms of AI-generated content, we can provide assistance in this regard."
  ],
  "items": [
    {
      "t": "Ready to explore GEO for your business?",
      "b": "Contact Hover Business Services LLP to discuss your goals and learn how a tailored optimization strategy may support your digital marketing efforts."
    }
  ],
  "outro": [],
  "table": null
};

/* faq */
const S11: Sec = {
  "h": "Frequently Asked Questions About GEO Services",
  "intro": [],
  "items": [
    {
      "t": "What is Generative Engine Optimization?",
      "b": "Generative Engine Optimization (GEO) is the practice of improving a brand's digital presence and content so that it can be more easily understood and potentially referenced by AI-powered answer engines."
    },
    {
      "t": "How is GEO different from traditional SEO?",
      "b": "Traditional SEO focuses on improving visibility in search engine results. GEO places additional emphasis on brand understanding, useful information, and visibility in AI-generated answers. Both can work together as part of a wider digital strategy."
    },
    {
      "t": "Do businesses still need SEO after investing in GEO?",
      "b": "Yes. Technical website health, useful content, relevant search terms, and a good user experience remain important. GEO can complement these established SEO activities."
    },
    {
      "t": "Which AI platforms can a GEO strategy cover?",
      "b": "Depending on your audience and campaign scope, a strategy may assess ChatGPT, Google Gemini, Google AI Overviews, Perplexity, Microsoft Copilot, and other relevant platforms."
    },
    {
      "t": "How long does GEO take to show results?",
      "b": "There is no fixed timeline. Progress depends on your website, industry competition, content quality, online reputation, and the activities implemented. Regular monitoring is important for evaluating changes."
    },
    {
      "t": "Can GEO guarantee that AI platforms will recommend my business?",
      "b": "No. AI platforms generate answers using their own systems and available information. GEO activities can improve your digital foundations, but they cannot guarantee mentions, citations, or recommendations."
    },
    {
      "t": "Is GEO suitable for small businesses?",
      "b": "Yes. Small businesses can use GEO to improve their service information, answer common customer questions, and strengthen their online presence. The strategy should match their resources and business goals."
    },
    {
      "t": "How can I get started with Hover Business Services LLP?",
      "b": "Contact our team to discuss your website, target market, current online visibility, and business objectives. We can help identify the GEO activities that may be most relevant to your requirements."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Sparkles, Bot, Quote, Radar, BrainCircuit, Eye];

/* ============================== Page ============================== */

export default async function GenerativeEngineOptimizationPage() {
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
      <Cards s={S02} tone="soft" v="rows" />
      <Cards s={S03} tone="white" v="split" />
      <Cards s={S04} tone="ink" v="grid" />
      <Plans s={S05} tone="surface" />
      <Cards s={S06} tone="white" v="bento" />
      <Steps s={S07} tone="surface" v="line" />
      <Prose s={S08} tone="white" />
      <Prose s={S09} tone="soft" />
      <WhyUs s={S10} />
      <Faq s={S11} phone={co.phone} />
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
