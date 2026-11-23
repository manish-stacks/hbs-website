import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Check, ChevronRight, Eye, Phone, Plus, Quote, Radar, Search, Sparkles, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "AI Brand Visibility Services in India | Hover Business Services LLP",
    description: "Improve your AI search presence with AI Brand Visibility services from Hover Business Services LLP. Connect with us to grow your brand.",
    path: "/ai-brand-visibility",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "AI Brand Visibility Services (GEO)",
  "eyebrow": "AI Brand Visibility",
  "tagline": "When customers ask AI tools for recommendations, your brand deserves an opportunity to be discovered. Hover Business Services LLP helps businesses improve their visibility across ChatGPT, Google AI Overviews, Gemini, Perplexity, Microsoft Copilot, and other AI-powered search experiences."
};

const HERO: { prompt: string; answer: string; sources: string[] } = {
  "prompt": "What do people say about Hover Business Services?",
  "answer": "Clients mention responsive support, clear reporting and measurable lead growth across SEO and paid campaigns.",
  "sources": [
    "Reviews",
    "News mentions",
    "Directories"
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
    "label": "LLMO Services",
    "href": "/llmo-services"
  },
  {
    "label": "Generative Engine Optimization",
    "href": "/generative-engine-optimization"
  },
  {
    "label": "Digital PR Services",
    "href": "/digital-pr"
  },
  {
    "label": "SEO Audit",
    "href": "/seo-audit"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Make Your Brand More Visible in AI-Powered Search",
  "intro": [
    "Our AI Brand Visibility services focus on strengthening your digital presence so AI systems can better understand your business, recognize your expertise, and potentially reference your content when answering relevant questions."
  ],
  "items": [
    {
      "t": "",
      "b": "Improve your brand's visibility across AI-powered search platforms."
    },
    {
      "t": "",
      "b": "Monitor brand mentions and citations across relevant AI responses."
    },
    {
      "t": "",
      "b": "Strengthen your website content, authority, and technical foundations."
    },
    {
      "t": "Ready to understand your AI search presence?",
      "b": "Contact our team to discuss an AI visibility assessment for your website."
    }
  ],
  "outro": [],
  "table": null
};

/* prose */
const S02: Sec = {
  "h": "AI Brand Visibility Agency for the Changing Search Landscape",
  "intro": [
    "Online discovery is no longer limited to conventional search engine results. People tend to utilize conversational artificial intelligence technology to do research, product comparison, and make recommendations. Such an evolution presents new possibilities for businesses.",
    "At Hover Business Services LLP, we assist our clients in adapting to these changes with Generative Engine Optimization (GEO) and AI-oriented search approaches. It includes content optimization, creation of brand entities, structured data, digital authority creation, and tracking of the performance.",
    "SEO traditionally includes optimization of your organic visibility, accessibility of your website, and traffic from relevant sources. AI Brand Visibility complements these activities by assisting you in making your brand more accessible to AI systems for generation of responses.",
    "Our task is to build a solid digital infrastructure instead of making promises about specific mentions or recommendations from artificial intelligence algorithms. Our goal is to increase your brand readiness for AI discovery."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "From Search Engine Rankings to AI Brand Recommendations",
  "intro": [
    "Search is becoming more sophisticated, and organizations must take into account how their information is displayed in multiple search methods. A top organic search ranking might be very good, but it does not necessarily mean that it will be included in the AI response.",
    "AI-driven engines use website information, third-party information, and other information resources to create their responses. Organizations need good content, information about their brand, and online signals that have credibility.",
    "Our AI Brand Visibility strategy helps you focus on three areas:"
  ],
  "items": [
    {
      "t": "Content clarity",
      "b": "Present your expertise through well-organized, relevant, and accurate information."
    },
    {
      "t": "Brand authority",
      "b": "Strengthen the consistency and credibility of your online presence through appropriate content and third-party references."
    },
    {
      "t": "AI visibility monitoring",
      "b": "Assess where your brand appears in relevant AI responses and identify opportunities for improvement."
    }
  ],
  "outro": [
    "The goal is to help your business compete in an evolving search environment without neglecting the SEO practices that continue to matter."
  ],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "What Our AI Brand Visibility Services Include",
  "intro": [
    "Our services combine technical improvements, content development, and ongoing analysis to support your brand's presence across AI-powered search experiences."
  ],
  "items": [
    {
      "t": "AI Visibility Audit",
      "b": "We evaluate your present visibility on various AI platforms and determine whether there is any mention of your brand in connection with these responses. We examine the competitor's mentions, existing content, and possible visibility gaps as well."
    },
    {
      "t": "Brand Entity and Knowledge Optimization",
      "b": "We analyze the way your business appears on your website and other third-party sites where applicable. In cases where necessary, we also focus on creating consistent business information, structured brand information, and entity mentions to enable the search engine to know more about your business."
    },
    {
      "t": "Technical GEO and Schema Optimization",
      "b": "We discuss technical factors that influence content discoverability and understanding. In accordance with your website, some of the changes to make would be structuring, proper marking up with FAQ, internal links, crawlability, and better organization of the pages. We evaluate new technical recommendations based on their relevance, not necessarily making them a ranking factor."
    },
    {
      "t": "Answer-Focused Content Development",
      "b": "Content creation happens through the questions asked by your target audience. Headings, concise answers, relevant FAQs, and statistics will all contribute to creating content that is easier to understand for the reader and even the search engine."
    },
    {
      "t": "Digital PR and Brand Citation Analysis",
      "b": "These include mentions of our brand from external sources, including industry publications, business directories, and other sources. We aim at identifying methods that can help improve brand consistency, gain credibility, and increase web authority."
    },
    {
      "t": "AI Share of Voice and Visibility Tracking",
      "b": "A selection of prompts and AI-based tools is used for evaluating how frequently your brand is mentioned compared to your competition. Moreover, if possible, citations, brand sentiment, referral traffic, and brand visibility changes are evaluated as well."
    }
  ],
  "outro": [],
  "table": null
};

/* audience */
const S05: Sec = {
  "h": "Who Can Benefit from AI Brand Visibility Services?",
  "intro": [
    "AI Brand Visibility can support businesses whose customers research options before making a purchase or choosing a service provider."
  ],
  "items": [
    {
      "t": "SaaS and technology",
      "b": "Improve the chances of being discovered when customers compare software and technology solutions."
    },
    {
      "t": "E-commerce and D2C",
      "b": "Strengthen product information and support discovery during product research."
    },
    {
      "t": "Healthcare and wellness",
      "b": "Present accurate, well-supported information that communicates expertise and trust."
    },
    {
      "t": "Finance and fintech",
      "b": "Improve the clarity, consistency, and credibility of financial information."
    },
    {
      "t": "B2B and professional services",
      "b": "Help potential clients discover your expertise while researching providers."
    },
    {
      "t": "Local and multi-location businesses",
      "b": "Maintain consistent business information and improve discoverability for location-related queries."
    },
    {
      "t": "Publishers and media companies",
      "b": "Develop useful, authoritative content that can attract relevant references and citations."
    },
    {
      "t": "Growing and challenger brands",
      "b": "Identify opportunities to improve visibility in categories dominated by established competitors."
    }
  ],
  "outro": [
    "The right strategy depends on your industry, audience, website quality, and the AI platforms most relevant to your customers."
  ],
  "table": null
};

/* cards */
const S06: Sec = {
  "h": "AI Platforms We Optimize For",
  "intro": [
    "Different platforms may retrieve, interpret, and present information in different ways. Our strategy considers the AI search environments that matter most to your audience."
  ],
  "items": [
    {
      "t": "ChatGPT",
      "b": "We focus on useful, well-structured content and credible information sources that may support discovery through ChatGPT's available search and browsing experiences."
    },
    {
      "t": "Google AI Overviews",
      "b": "We strengthen relevant content and technical SEO foundations to improve its eligibility for discovery through Google Search and AI-generated summaries."
    },
    {
      "t": "Google Gemini",
      "b": "We work on content quality, brand consistency, and relevant authority signals to support discoverability across Google's AI ecosystem."
    },
    {
      "t": "Perplexity AI",
      "b": "We focus on clear explanations, relevant supporting sources, and content organization that may help answer-focused systems interpret and reference your pages."
    },
    {
      "t": "Microsoft Copilot",
      "b": "We consider website accessibility, content relevance, and the broader search foundations associated with Microsoft's search ecosystem."
    },
    {
      "t": "Claude and Emerging AI Platforms",
      "b": "We monitor relevant developments and assess new optimization opportunities as AI-powered discovery tools evolve. No optimization strategy can guarantee inclusion across these platforms. Our work focuses on improving the quality and accessibility of your brand's information and evaluating observable results."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S07: Sec = {
  "h": "Turn AI Visibility Into a More Measurable Marketing Strategy",
  "intro": [
    "AI search performance should be evaluated using meaningful indicators rather than unsupported promises. We help businesses identify practical ways to monitor visibility and connect their optimization activities with wider marketing objectives.",
    "Depending on available tools and data, our reporting may cover:"
  ],
  "items": [
    {
      "t": "AI Share of Voice",
      "b": "The proportion of selected relevant prompts where your brand appears compared with competitors."
    },
    {
      "t": "Citation Frequency",
      "b": "How often monitored AI responses reference your website or other brand sources."
    },
    {
      "t": "Prompt-Level Visibility",
      "b": "The questions and topics for which your brand appears or remains absent."
    },
    {
      "t": "Brand Sentiment and Accuracy",
      "b": "Whether monitored responses describe your business correctly and in an appropriate context."
    },
    {
      "t": "AI Referral Traffic",
      "b": "Visits attributed to identifiable AI platforms, where analytics data supports measurement."
    },
    {
      "t": "Business Outcomes",
      "b": "Relevant engagement, enquiries, or conversions where reliable tracking is available."
    }
  ],
  "outro": [
    "These indicators help identify trends, prioritize improvements, and refine your strategy over time. Results may vary according to industry competition, platform behaviour, website authority, and the scope of implementation."
  ],
  "table": null
};

/* plans */
const S08: Sec = {
  "h": "AI Brand Visibility Plans for Different Business Goals",
  "intro": [
    "Every business has different priorities, budgets, and levels of online visibility. A suitable plan should reflect your current position and the work required to improve it."
  ],
  "items": [
    {
      "t": "Foundation Plan — AI Visibility Starter",
      "b": "Suitable for businesses beginning their AI visibility journey.",
      "list": [
        "Initial AI visibility and competitor assessment.",
        "Review of essential brand information.",
        "Basic technical and structured-data assessment.",
        "Priority-page and FAQ recommendations.",
        "Monitoring of selected AI platforms.",
        "Periodic performance reporting."
      ]
    },
    {
      "t": "Growth Plan — AI Visibility Growth",
      "b": "Designed for businesses seeking to expand their online authority and answer-focused content.",
      "list": [
        "Everything included in the Foundation Plan.",
        "Broader entity and brand information optimization.",
        "Ongoing answer-focused content development.",
        "Relevant third-party citation opportunities.",
        "Monitoring across additional AI platforms.",
        "Regular optimization and performance reviews."
      ]
    },
    {
      "t": "Authority Plan — AI Visibility Pro",
      "b": "For established brands competing in challenging markets.",
      "list": [
        "Everything included in the Growth Plan.",
        "Advanced GEO and technical strategy.",
        "Expanded content and authority-building activities.",
        "Competitor and prompt-level visibility analysis.",
        "Brand sentiment and accuracy monitoring.",
        "More frequent reporting and strategic reviews."
      ]
    },
    {
      "t": "Enterprise Plan — Custom GEO Solutions",
      "b": "For organizations with complex websites, multiple locations, or broader market requirements.",
      "after": "The final scope and pricing should be determined after reviewing your website, target markets, and business objectives.",
      "list": [
        "Tailored scope and dedicated project coordination.",
        "Multi-location or multi-market optimization.",
        "Integration with existing SEO and digital marketing activities.",
        "Customized reporting requirements.",
        "Strategic planning and ongoing performance reviews.",
        "Agency partnership options where suitable."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* whyus */
const S09: Sec = {
  "h": "Why Choose Hover Business Services LLP for AI Brand Visibility?",
  "intro": [
    "Building a stronger AI search presence requires more than monitoring tools. It involves coordinated work across website content, technical SEO, brand authority, and performance analysis."
  ],
  "items": [
    {
      "t": "A Strategy Built Around Your Business",
      "b": "We consider your audience, industry, competitors, and business goals before recommending an optimization approach."
    },
    {
      "t": "Practical Implementation",
      "b": "Our focus is on actionable improvements to content, technical foundations, and online brand representation—not just reports or dashboards."
    },
    {
      "t": "SEO and GEO Working Together",
      "b": "We align AI visibility initiatives with relevant SEO practices to support a more consistent digital marketing strategy."
    },
    {
      "t": "Clear Performance Reporting",
      "b": "We use available evidence and measurable indicators to assess progress, identify gaps, and guide future improvements."
    },
    {
      "t": "Adaptability as AI Search Evolves",
      "b": "As platforms and search experiences change, we review relevant developments and adjust priorities where they provide a practical benefit."
    },
    {
      "t": "Ongoing Collaboration",
      "b": "We work with your business to establish priorities, communicate findings, and refine the strategy according to your evolving needs."
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S10: Sec = {
  "h": "Our AI Brand Visibility Implementation Process",
  "intro": [
    "We follow a structured process to understand your current position, implement relevant improvements, and measure progress."
  ],
  "items": [
    {
      "t": "Initial Consultation",
      "b": "We learn about your business, target audience, competitors, website, and primary marketing objectives."
    },
    {
      "t": "Website and AI Visibility Assessment",
      "b": "We review available AI mentions, competitor visibility, content quality, and technical SEO foundations to establish priorities."
    },
    {
      "t": "Strategy and Implementation",
      "b": "We implement agreed improvements across relevant content, brand information, structured data, and authority-building activities."
    },
    {
      "t": "Monitoring and Refinement",
      "b": "We track selected visibility indicators, review available analytics, and refine the strategy based on findings and changing search behaviour."
    }
  ],
  "outro": [],
  "table": null
};

/* faq */
const S11: Sec = {
  "h": "Frequently Asked Questions About AI Brand Visibility",
  "intro": [],
  "items": [
    {
      "t": "What is AI Brand Visibility?",
      "b": "AI Brand Visibility refers to how a business appears in AI-powered search experiences. It includes brand mentions, website citations, and recommendations generated in response to relevant user questions. GEO and AEO techniques can support these efforts."
    },
    {
      "t": "How is AI Brand Visibility different from traditional SEO?",
      "b": "Traditional SEO focuses on organic search visibility, rankings, and website traffic. AI Brand Visibility places additional emphasis on whether AI-powered platforms understand, reference, or mention your business. The two approaches can complement each other."
    },
    {
      "t": "Which AI platforms can be included in an optimization strategy?",
      "b": "Depending on your audience and objectives, the strategy may cover ChatGPT, Google AI Overviews, Gemini, Perplexity AI, Microsoft Copilot, Claude, and other relevant platforms."
    },
    {
      "t": "Can an agency guarantee AI recommendations?",
      "b": "No. AI-generated answers depend on platform-specific systems, available sources, user queries, and other changing factors. A responsible agency can improve content and technical foundations, monitor visibility, and recommend evidence-based improvements, but cannot guarantee specific mentions."
    },
    {
      "t": "How long does AI Brand Visibility optimization take?",
      "b": "The timeline varies according to your website's starting position, industry competition, content quality, and implementation scope. Progress should be reviewed regularly, with adjustments based on the evidence available."
    },
    {
      "t": "Can AI Brand Visibility work alongside our existing SEO campaign?",
      "b": "Yes. GEO and AI visibility activities can complement traditional SEO. Content quality, technical accessibility, relevant authority signals, and consistent business information can support a unified search strategy."
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S12: Sec = {
  "h": "Make Your Brand Easier to Discover in AI Search",
  "intro": [
    "The way customers research businesses continues to evolve. A thoughtful AI Brand Visibility strategy can help your business prepare for new discovery opportunities while maintaining the foundations of effective SEO.",
    "Hover Business Services LLP can help you assess your current position, identify practical opportunities, and develop an approach suited to your business goals.",
    "Want to understand where your brand stands in AI search? Contact Hover Business Services LLP to discuss your AI visibility assessment."
  ],
  "items": [],
  "outro": [],
  "table": null
};

const ICONS = [Sparkles, Bot, Quote, Radar, BrainCircuit, Eye];

/* ============================== Page ============================== */

export default async function AiBrandVisibilityPage() {
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
      <Cards s={S03} tone="white" v="grid" />
      <Cards s={S04} tone="soft" v="bento" />
      <Audience s={S05} tone="surface" />
      <Cards s={S06} tone="white" v="rows" />
      <Cards s={S07} tone="ink" v="split" />
      <Plans s={S08} tone="surface" />
      <WhyUs s={S09} />
      <Steps s={S10} tone="white" v="line" />
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
