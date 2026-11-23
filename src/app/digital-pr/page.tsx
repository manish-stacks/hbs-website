import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Award, Check, ChevronRight, FileText, Link2, Newspaper, PenLine, Phone, Plus, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Digital PR Services for Better Online Visibility | Hover Business Services",
    description: "Build brand awareness and strengthen online credibility with Digital PR Services from Hover Business Services LLP. Contact us to plan your campaign.",
    path: "/digital-pr",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Digital PR Services",
  "eyebrow": "Digital PR & Brand Authority"
};

const HERO: { headline: string; sources: string[] } = {
  "headline": "Delhi startup cuts lead costs by 40% with AI search",
  "sources": [
    "Business news",
    "Trade press",
    "Podcasts"
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
    "label": "Link Building",
    "href": "/link-building"
  },
  {
    "label": "Guest Posting",
    "href": "/guest-posting"
  },
  {
    "label": "AI Brand Visibility",
    "href": "/ai-brand-visibility"
  },
  {
    "label": "SEO Services",
    "href": "/seo-services"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Digital PR Services to Strengthen Brand Visibility and Credibility",
  "intro": [
    "Build a stronger online reputation with Digital PR Services from Hover Business Services LLP. We help businesses improve brand awareness, connect with relevant media outlets, and share meaningful stories with their target audiences. Through strategic media outreach, press release distribution, and digital reputation building, businesses can expand their online presence and establish greater credibility.",
    "Our approach combines compelling storytelling, relevant media opportunities, and SEO-focused digital PR strategies. Whether you want to promote a business announcement, highlight industry expertise, or increase brand recognition, we help develop campaigns aligned with your marketing objectives."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Why Digital PR Matters for Modern Businesses",
  "intro": [
    "Digital PR helps brands earn attention through relevant online publications, industry websites, and editorial coverage. It supports brand discovery and allows businesses to communicate their expertise beyond their own digital channels."
  ],
  "items": [
    {
      "t": "Build Trust Through Media Coverage",
      "b": "Being covered in a relevant publication can allow you to attract new audiences while helping to build credibility. Useful, news-worthiness stories will motivate journalists and readers to dig deeper into the details of your company."
    },
    {
      "t": "Support SEO and AI Search Visibility",
      "b": "Editorial mentions and naturally acquired backlinks could supplement your SEO strategy. Additionally, quality coverage can facilitate search engines' and AI-based discovery platforms' search for information about your company, even though there is no guarantee that the content will be discovered."
    },
    {
      "t": "Create Long-Term Brand Recognition",
      "b": "Unlike temporary ads campaigns, published stories can continue to be searchable long after they have been first posted online. How long and effectively – depending on the publication, relevancy of content, indexing, etc."
    },
    {
      "t": "Strengthen Online Reputation",
      "b": "Regular and credible media coverage could positively affect your digital presence. Your media coverage will help customers to find information about your announcements, expertise, and brand story online."
    },
    {
      "t": "Reach New Audiences",
      "b": "With digital PR you get exposure among readers, who are unlikely to subscribe to your site and other social media."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "Our Digital PR Solutions",
  "intro": [
    "Every brand has different communication goals. Our digital PR solutions can be adapted to your industry, audience, announcement, and campaign requirements."
  ],
  "items": [
    {
      "t": "Press Release Writing and Distribution",
      "b": "We assist you in developing effective press releases to make company announcements, product launches, business developments, industry news, and any other company developments available in an interesting manner."
    },
    {
      "t": "Media Outreach and Online Publications",
      "b": "Strategic media outreach can ensure that your company's story reaches relevant people through journalists, editors, and online publications. We specialize in finding the right opportunities according to your industry and target audience."
    },
    {
      "t": "Digital PR for SEO",
      "b": "Our digital PR campaign for SEO includes telling the brand's story and making opportunities available for editorial mentions and links to your website. The campaign may be used together with technical SEO, content marketing, and other organic search strategies."
    },
    {
      "t": "Brand Reputation and Awareness",
      "b": "The consistent communication via relevant digital channels can ensure your online presence is recognizable. Such campaigns may showcase your experience, announce business developments, and help to deliver your message."
    },
    {
      "t": "Thought Leadership and Expert Positioning",
      "b": "Delivering opinionated and informative articles on relevant topics may help to make business executives share their expertise with the public. Thoughts leadership articles may provide you with media opportunities."
    }
  ],
  "outro": [],
  "table": null
};

/* plans */
const S04: Sec = {
  "h": "Digital PR Plans Tailored to Your Business Goals",
  "intro": [
    "The right digital PR plan depends on your campaign objectives, publishing needs, target audience, and available budget. Hover Business Services LLP can discuss a suitable scope based on your requirements.",
    "Possible campaign options include:"
  ],
  "items": [
    {
      "t": "Starter PR Campaign",
      "b": "For businesses introducing their brand or sharing an important announcement."
    },
    {
      "t": "Growth PR Campaign",
      "b": "For companies seeking regular press release activity and broader brand exposure."
    },
    {
      "t": "Authority-Building Campaign",
      "b": "For established businesses looking to develop thought leadership and relevant media relationships."
    },
    {
      "t": "Enterprise PR Campaign",
      "b": "For organisations requiring coordinated communications, ongoing media outreach, and reputation support."
    }
  ],
  "outro": [
    "The number of releases, distribution channels, media placements, reporting frequency, and campaign timeline should be confirmed before work begins. Media coverage and specific publication placements depend on editorial decisions and the agreed service scope."
  ],
  "table": null
};

/* cards */
const S05: Sec = {
  "h": "Where Digital PR Can Take Your Brand",
  "intro": [
    "Relevant digital PR services may include several types of media and publishing platforms, depending on your industry and campaign objectives."
  ],
  "items": [
    {
      "t": "News publications",
      "b": "Share newsworthy business announcements and developments."
    },
    {
      "t": "Business and financial media",
      "b": "Communicate company milestones, market insights, and leadership perspectives."
    },
    {
      "t": "Industry publications",
      "b": "Reach readers interested in your products, services, or specialist expertise."
    },
    {
      "t": "Technology and lifestyle websites",
      "b": "Connect with audiences relevant to your sector."
    },
    {
      "t": "Digital news platforms",
      "b": "Expand the online reach of suitable press releases and brand stories."
    }
  ],
  "outro": [
    "Publication availability varies by topic, editorial standards, distribution arrangements, and campaign requirements. A media outlet should not be presented as a confirmed placement until publication has been secured."
  ],
  "table": null
};

/* cards */
const S06: Sec = {
  "h": "Measure the Value of Your Digital PR Campaigns",
  "intro": [
    "Effective digital PR involves reviewing campaign activity and assessing the results against your objectives. Reporting may include:"
  ],
  "items": [
    {
      "t": "",
      "b": "Published article URLs and media mentions."
    },
    {
      "t": "",
      "b": "Referral traffic from available website analytics."
    },
    {
      "t": "",
      "b": "Backlink details and referring domains."
    },
    {
      "t": "",
      "b": "Brand search and organic visibility trends."
    },
    {
      "t": "",
      "b": "Audience engagement with published content."
    },
    {
      "t": "",
      "b": "Coverage relevance and potential reputation value."
    },
    {
      "t": "Why Choose a Strategic Approach to Digital PR?",
      "b": "The best way to utilize digital PR services is to use it in connection with other forms of marketing. Media relations, good stories, and useful content may go hand in hand with SEO and content marketing. Here at Hover Business Services LLP, our job is to know what your objectives are, choose appropriate outreach opportunities, and find an appropriate way of running the campaign for your business needs. Proper communication will allow you to assess the results achieved."
    },
    {
      "t": "Give Your Brand a Stronger Voice Online",
      "b": "There is information within your company that is worth being shared through the use of a targeted digital PR strategy to enhance your presence online. With the right kind of help from Hover Business Services LLP, you can start looking at digital PR solutions that suit your brand and industry. Are you ready to increase the visibility of your brand? Then it is time to get in touch with Hover Business Services LLP."
    }
  ],
  "outro": [
    "These indicators help businesses understand their campaign outcomes and identify opportunities for future improvement. Search rankings, revenue increases, and AI citations depend on multiple factors and cannot be guaranteed through PR alone."
  ],
  "table": null
};

/* faq */
const S07: Sec = {
  "h": "Frequently Asked Questions About Digital PR Services",
  "intro": [],
  "items": [
    {
      "t": "What are Digital PR Services?",
      "b": "Digital PR Services help businesses improve online visibility, build brand credibility, and reach relevant audiences through media outreach, online publications, press releases, and digital content promotion."
    },
    {
      "t": "How can Digital PR help my business?",
      "b": "Digital PR can increase brand awareness, generate media mentions, attract referral traffic, strengthen online reputation, and create opportunities to earn relevant backlinks."
    },
    {
      "t": "How is Digital PR different from traditional PR?",
      "b": "Traditional PR often focuses on newspapers, television, radio, and other offline media. Digital PR focuses on online publications, digital news platforms, websites, and online audiences."
    },
    {
      "t": "Can Digital PR Services improve SEO?",
      "b": "Yes. Digital PR can support SEO by helping a brand earn relevant editorial backlinks, mentions, and referral traffic. However, rankings are not guaranteed and depend on several SEO factors."
    },
    {
      "t": "What does a Digital PR campaign include?",
      "b": "A campaign may include PR strategy, press release writing, journalist and publisher outreach, content promotion, media placement opportunities, and campaign performance reporting."
    },
    {
      "t": "How long does it take to see results from Digital PR?",
      "b": "Results depend on the campaign goals, industry, media response, and publication timelines. Some campaigns may generate early brand mentions, while reputation and visibility improvements can take longer."
    },
    {
      "t": "Are media placements guaranteed with Digital PR Services?",
      "b": "No. Media placements depend on editorial standards, publisher requirements, and the relevance of the story. A reliable campaign should communicate placement expectations clearly without promising outcomes outside its control."
    },
    {
      "t": "How much do Digital PR Services cost?",
      "b": "The cost depends on campaign scope, content requirements, target publications, outreach efforts, and reporting needs. Contact Hover Business Services LLP to discuss a campaign suited to your business goals."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [PenLine, Link2, Newspaper, Award, Users, FileText];

/* ============================== Page ============================== */

export default async function DigitalPrPage() {
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
      <Cards s={S03} tone="white" v="bento" />
      <Plans s={S04} tone="surface" />
      <Cards s={S05} tone="soft" v="rows" />
      <Cards s={S06} tone="white" v="split" />
      <Faq s={S07} phone={co.phone} />
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
    <div className="relative mx-auto w-full max-w-[480px]">
      <article className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 text-[var(--color-ink)] shadow-[var(--shadow-lg)]">
        <div className="h-28 rounded-2xl bg-[linear-gradient(135deg,var(--color-brand-soft),var(--color-accent-soft))]" />
        <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-muted)]"><FileText size={13} /> 6 min read</p>
        <h3 className="mt-1 font-display text-xl font-extrabold leading-snug">{HERO.headline}</h3>
        <div className="mt-3 space-y-1.5">
          <span className="block h-2 w-full rounded bg-black/[.07]" />
          <span className="block h-2 w-11/12 rounded bg-black/[.07]" />
          <span className="block h-2 w-3/4 rounded bg-black/[.07]" />
        </div>
      </article>
      <div className="mt-4 flex flex-wrap gap-2">
        {HERO.sources.map((s, i) => (
          <span key={s} className="sx-rise inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)] shadow-[var(--shadow-sm)]" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
            <Link2 size={12} className="text-[var(--color-brand)]" /> {s}
          </span>
        ))}
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