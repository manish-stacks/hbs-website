import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Award, Check, ChevronRight, FileText, Link2, Newspaper, PenLine, Phone, Plus, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Guest Posting Services for SEO & Brand Growth | Hover Business Services",
    description: "Expand your reach with Guest Posting Services from Hover Business Services LLP. Build brand awareness and explore relevant publishing opportunities. Contact us!",
    path: "/guest-posting",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Guest Posting Services",
  "eyebrow": "Guest Posting & Editorial Outreach",
  "tagline": "Expand your brand's reach and strengthen your online presence with professional Guest Posting Services from Hover Business Services LLP. We help businesses connect with relevant websites through informative, well-written content that introduces their expertise to new audiences.",
  "intro": "Our approach focuses on niche relevance, content quality, and genuine publishing opportunities. Guest posting can support brand awareness, referral traffic, and content promotion while creating opportunities for relevant backlinks. Whether you want to reach a new audience or complement your existing SEO strategy, we tailor our approach to your business goals."
};

const HERO: { headline: string; sources: string[] } = {
  "headline": "Why local search decides most service purchases",
  "sources": [
    "Guest article",
    "Author bio",
    "Contextual link"
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
    "label": "Blogger Outreach",
    "href": "/blog-outreach"
  },
  {
    "label": "Digital PR",
    "href": "/digital-pr"
  },
  {
    "label": "Content Marketing",
    "href": "/content-writing"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Grow Your Online Reach With Strategic Guest Posting Services",
  "intro": [
    "Guest posting refers to writing original pieces of content for other people's websites whose subject matter is related to your business. This lets your organization publish its expertise, interact with the readers and promote its products or services.",
    "Hover Business Services LLP specializes in finding the right platform for publishing content as well as creating the content that appeals to the target audience and meets the needs of the publisher. The guest blog posts created by us are focused more on being informative and relevant rather than having backlinks.",
    "Using the right guest posting strategy, organizations can achieve much more through their content efforts."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Our Guest Posting Solutions",
  "intro": [
    "Every business has different publishing needs. Our guest posting solutions can be adapted to your industry, target audience, content requirements, and marketing objectives."
  ],
  "items": [
    {
      "t": "Niche-Relevant Website Placements",
      "b": "Posting on niche-specific sites will help you reach the targeted readership interested in your industry. Our task will be to find the most suitable blogs and publishers according to topic and requirements."
    },
    {
      "t": "SEO-Friendly Guest Article Writing",
      "b": "Content is king when it comes to guest blogging. We write high-quality informative articles that have structure, relevant topics, natural keywords and valuable insights. The article must always add something to the reader."
    },
    {
      "t": "Contextual Backlink Opportunities",
      "b": "Guest posts can provide contextual link building if they are integrated into content in a proper way and do not violate any guidelines of the publisher. We prefer relevant link placements and proper anchor texts rather than keyword stuffing."
    },
    {
      "t": "Content Marketing and Brand Promotion",
      "b": "Through guest posts, companies have an opportunity to present themselves not only on their website but also elsewhere, thus increasing the visibility of your brand and its promotion."
    },
    {
      "t": "Guest Posting for Different Industries",
      "b": "Different niches and audiences require various strategies. We take this into account and choose potential platforms for guest blogging for different industries."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "What to Consider When Choosing Guest Posting Packages",
  "intro": [
    "The right package depends on your publishing goals, content needs, and campaign budget. Before selecting a plan, consider these important factors:"
  ],
  "items": [
    {
      "t": "Number of placements",
      "b": "Determine how many guest articles your campaign requires."
    },
    {
      "t": "Website relevance",
      "b": "Choose publishers whose content aligns with your industry."
    },
    {
      "t": "Audience quality",
      "b": "Review whether the website reaches readers relevant to your business."
    },
    {
      "t": "Content requirements",
      "b": "Confirm article length, editorial guidelines, and originality standards."
    },
    {
      "t": "Backlink placement",
      "b": "Check whether links are permitted and how publishers handle sponsored or contributed content."
    },
    {
      "t": "Delivery timeline",
      "b": "Establish realistic expectations for writing, review, and publication."
    },
    {
      "t": "Reporting",
      "b": "Agree on the information you will receive about published articles and their URLs."
    }
  ],
  "outro": [
    "Hover Business Services LLP can discuss a suitable plan based on your website's requirements and campaign objectives. Pricing, placement availability, and turnaround times should be confirmed according to the agreed scope."
  ],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "How Guest Posting Can Support Your Business Growth",
  "intro": [
    "A well-planned guest posting campaign can contribute to several digital marketing goals."
  ],
  "items": [
    {
      "t": "Increase brand awareness",
      "b": "Introduce your business to readers on relevant external websites."
    },
    {
      "t": "Reach a wider audience",
      "b": "Share expertise with people who may not yet know your brand."
    },
    {
      "t": "Support SEO efforts",
      "b": "Relevant editorial backlinks may complement your broader search optimisation strategy."
    },
    {
      "t": "Attract referral traffic",
      "b": "Useful articles can encourage interested readers to visit your website."
    },
    {
      "t": "Build industry relationships",
      "b": "Publishing collaborations can help develop connections with website owners and publishers."
    },
    {
      "t": "Strengthen brand credibility",
      "b": "Informative content can demonstrate your knowledge and experience."
    },
    {
      "t": "Support lead generation",
      "b": "Relevant visitors may explore your services when the content matches their needs."
    }
  ],
  "outro": [
    "Results vary based on the publisher, content quality, audience engagement, and overall SEO strategy. Guest posting does not guarantee rankings, traffic, or conversions."
  ],
  "table": null
};

/* cards */
const S05: Sec = {
  "h": "Quality Standards Behind Our Guest Posting Approach",
  "intro": [
    "Successful guest posting requires more than finding a website that accepts articles. Content relevance, editorial quality, and transparent publishing practices all matter.",
    "Our approach considers the following standards:"
  ],
  "items": [
    {
      "t": "",
      "b": "Original articles written for the intended audience."
    },
    {
      "t": "",
      "b": "Relevant websites with useful, topic-focused content."
    },
    {
      "t": "",
      "b": "Natural language and appropriate keyword usage."
    },
    {
      "t": "",
      "b": "Contextual links that support the reader's understanding."
    },
    {
      "t": "",
      "b": "Compliance with publisher guidelines and applicable search engine policies."
    },
    {
      "t": "",
      "b": "Clear communication about placement terms and publication expectations."
    },
    {
      "t": "Make Guest Posting Part of Your Content Marketing Strategy",
      "b": "For guest posting to be most effective, it must fit into an overall content marketing strategy for the business. This involves publishing externally in combination with website content, keyword research, and appropriate messaging to help businesses keep a steady online presence. At Hover Business Services LLP, we will be able to assist your company in finding the right guest posting avenues that will be beneficial for your brand, industry, and marketing objectives."
    },
    {
      "t": "Get Started With Guest Posting Services",
      "b": "Are you looking to expose your brand to new audiences as well as get into some good publishing through guest posting services? Hover Business Services LLP will be glad to offer the same for you."
    }
  ],
  "outro": [
    "We avoid treating domain metrics as the only measure of website quality. Audience relevance, editorial standards, and the actual value of a publishing opportunity should also inform placement decisions."
  ],
  "table": null
};

/* faq */
const S06: Sec = {
  "h": "Frequently Asked Questions About Guest Posting Services",
  "intro": [],
  "items": [
    {
      "t": "What are guest posting services?",
      "b": "Guest posting services help businesses publish original articles on relevant third-party websites to reach new audiences, promote their expertise, and explore backlink opportunities."
    },
    {
      "t": "How can guest posting help with SEO?",
      "b": "Guest posting can support SEO by increasing brand exposure, attracting referral traffic, and earning relevant editorial backlinks when publishers consider them appropriate. Results depend on content quality and overall SEO efforts."
    },
    {
      "t": "How do you select websites for guest posting?",
      "b": "Website selection considers niche relevance, content quality, audience engagement, editorial standards, and the suitability of the publishing opportunity."
    },
    {
      "t": "How long does it take to publish a guest post?",
      "b": "Publication timelines vary depending on article preparation, publisher approval, editorial reviews, and website requirements. The expected timeframe should be confirmed before the campaign begins."
    },
    {
      "t": "Can guest posting services be customised for my business?",
      "b": "Yes. Guest posting campaigns can be tailored to your industry, target audience, content requirements, publishing goals, and budget."
    },
    {
      "t": "Does guest posting guarantee higher Google rankings?",
      "b": "No. Guest posting cannot guarantee higher rankings. Relevant, useful content and naturally earned links may support an overall SEO strategy, but search performance depends on multiple factors."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [PenLine, Link2, Newspaper, Award, Users, FileText];

/* ============================== Page ============================== */

export default async function GuestPostingPage() {
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
          <p className="mt-4 max-w-[54ch] text-white/70">{PAGE.intro}</p>
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
      <Cards s={S02} tone="soft" v="split" />
      <Cards s={S03} tone="white" v="grid" />
      <Cards s={S04} tone="ink" v="bento" />
      <Cards s={S05} tone="white" v="rows" />
      <Faq s={S06} phone={co.phone} />
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