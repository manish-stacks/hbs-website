import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, Heart, Megaphone, MessageCircle, Phone, Play, Plus, Send, Star, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Influencer Marketing Services for Brands | Hover Business Services",
    description: "Plan effective Influencer Marketing campaigns with Hover Business Services LLP. Find relevant creators, manage collaborations, and measure results.",
    path: "/influencer-marketing",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Influencer Marketing Services",
  "eyebrow": "Social Media",
  "tagline": "The creator promotes a certain product. The audience queries, examines, and a number of people opt to try out the product. Such a buying cycle is one that can be taken advantage of by businesses through influencer marketing."
};

const HERO: { handle: string; caption: string; likes: string; platform: string; sponsored?: boolean; video?: boolean; reviews?: boolean } = {
  "handle": "creator.delhi",
  "caption": "Tried @yourbrand for a week, here is my honest review.",
  "likes": "12.4K",
  "platform": "Instagram"
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
    "label": "Social Media Optimisation",
    "href": "/social-media-optimisation"
  },
  {
    "label": "Social Media Marketing",
    "href": "/social-media-marketing"
  },
  {
    "label": "Facebook/Meta Ads",
    "href": "/facebook-meta-ads"
  },
  {
    "label": "Instagram Ads",
    "href": "/instagram-ads"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Influencer Marketing That Connects Your Brand With Real Audiences",
  "intro": [
    "However, choosing a top creator and getting them to advertise the product through their post is not sufficient sometimes. The collaboration should work in harmony with what you want to accomplish with the product and your target audience.",
    "At Hover Business Services LLP, we have a team to help businesses design their campaigns with influencers for specific purposes. We deal with influencers whose partnership works well for the brand, not just the one who has many followers."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Before You Hire an Influencer, Answer These Three Questions",
  "intro": [],
  "items": [
    {
      "t": "Who Do You Actually Want to Reach?",
      "b": "Start with your customers, not a list of famous creators. Think about their interests, location, age group, purchasing habits, and the content they already follow. This helps narrow down influencers whose audiences overlap with your target market. For example, a skincare business may benefit from beauty creators, while a B2B software company may find more value in industry specialists who explain business problems to a professional audience."
    },
    {
      "t": "What Should People Do After Seeing the Content?",
      "b": "A campaign without a defined objective is difficult to evaluate. You may want people to discover your brand, visit a product page, enquire about a service, or complete a purchase. That decision influences the creator, content format, call to action, and performance metrics you should use."
    },
    {
      "t": "Why Would the Creator's Audience Care?",
      "b": "The product or service needs a natural connection to the creator's content. A partnership is more likely to feel relevant when the promotion answers a genuine audience need instead of interrupting the content with an unrelated sales message. These questions form the starting point for a more focused influencer marketing strategy."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "Five Ways Brands Can Work With Influencers",
  "intro": [
    "Influencer campaigns do not have to follow one fixed format. The right arrangement depends on what you are promoting and how your audience prefers to discover information."
  ],
  "items": [
    {
      "t": "Product discovery campaigns",
      "b": "Introduce a product to people who may not know your brand. Creator mentions, product demonstrations, and short-form videos can help explain what the product does and who may find it useful."
    },
    {
      "t": "Reviews and educational content",
      "b": "Work with relevant creators to demonstrate a product, explain its features, or discuss a service. This format can be particularly useful when customers need more information before making a decision."
    },
    {
      "t": "Launch and announcement campaigns",
      "b": "Coordinating multiple creators for a product launch, a seasonal sale, or a business announcement is important. An organized publishing calendar can be beneficial to ensure consistency in messaging."
    },
    {
      "t": "Affiliate and performance-based partnerships",
      "b": "Where applicable, creators can use links or coupon codes for promotion of their products. This can help companies track their sales; however, the terms regarding payment need to be established beforehand."
    },
    {
      "t": "Long-term creator relationships",
      "b": "Instead of arranging a single sponsored post, businesses can develop ongoing partnerships with creators who fit their brand. Repeated collaborations may help audiences become more familiar with the product over time."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "The Creator With the Most Followers May Not Be Your Best Choice",
  "intro": [
    "Follower count can indicate potential reach, but it does not tell the whole story. A creator with a smaller, relevant audience may be a better match for a specialised product than someone with a much larger but less relevant following.",
    "When evaluating influencers, we consider several factors:"
  ],
  "items": [
    {
      "t": "Audience fit",
      "b": "Do their followers resemble your intended customers?"
    },
    {
      "t": "Content relevance",
      "b": "Does the creator regularly discuss topics connected to your offering?"
    },
    {
      "t": "Engagement quality",
      "b": "Do comments and interactions appear relevant to the content?"
    },
    {
      "t": "Brand suitability",
      "b": "Does the creator's communication style fit your business?"
    },
    {
      "t": "Commercial fit",
      "b": "Are the proposed deliverables and fees reasonable for the campaign?"
    },
    {
      "t": "Previous partnerships",
      "b": "Does the creator handle sponsored content clearly and appropriately?"
    },
    {
      "t": "What Happens Between the First Message and the Published Post?",
      "b": "A creator campaign entails more than identifying the relevant account and making a collaboration request. The terms have to be ironed out before content is published. As such, at Hover Business Services LLP, the negotiated scope could entail creator research, influencer reach-out, collaboration terms, campaign briefs, content deadlines, approval process, and publication timeline among others. The campaign brief would have to contain the objective of the campaign, key information about the product, the deliverables needed, payment terms, disclosure requirements, and use rights for the content. The brief must allow the creator space to talk in their own voice. This is because a product demonstration would require certain specifics to be discussed whereas the lifestyle campaign would require less restrictive guidelines."
    }
  ],
  "outro": [
    "This evaluation can apply to Instagram influencer marketing, YouTube creator partnerships, LinkedIn thought leadership campaigns, and other suitable social media channels."
  ],
  "table": null
};

/* table */
const S05: Sec = {
  "h": "From Social Engagement to Business Results",
  "intro": [
    "Likes and comments can show that people are responding to a campaign, but businesses often need to understand what happens next.",
    "A useful influencer marketing report connects activity to the original objective. Depending on the campaign, this might include:"
  ],
  "items": [],
  "outro": [
    "UTM parameters, unique promotional codes, affiliate links, and analytics platforms can help with campaign attribution. However, results should be interpreted carefully because not every customer interaction can be tracked or attributed to a single creator.",
    "The objective is to learn which partnerships contribute value and use those findings to make better decisions in future campaigns."
  ],
  "table": {
    "head": [
      "Campaign goal",
      "Metrics worth reviewing"
    ],
    "rows": [
      [
        "Brand awareness",
        "Reach, impressions, video views"
      ],
      [
        "Audience engagement",
        "Relevant comments, shares, engagement rate"
      ],
      [
        "Website visits",
        "Link clicks, referral traffic, CTR"
      ],
      [
        "Lead generation",
        "Enquiries, sign-ups, cost per lead"
      ],
      [
        "Online sales",
        "Tracked purchases, conversion rate, ROAS"
      ],
      [
        "Campaign efficiency",
        "Creator fees, total campaign cost, attributed revenue"
      ]
    ]
  }
};

/* cards */
const S06: Sec = {
  "h": "Common Influencer Marketing Mistakes Worth Avoiding",
  "intro": [
    "Even a well-known creator may not deliver the outcome a business expects if the campaign is poorly planned."
  ],
  "items": [
    {
      "t": "Choosing reach over relevance",
      "b": "A large audience is of limited value when the content does not reach likely customers."
    },
    {
      "t": "Giving creators an unclear brief",
      "b": "Missing product information, vague deadlines, and undefined deliverables can lead to avoidable revisions."
    },
    {
      "t": "Ignoring disclosure requirements",
      "b": "Paid partnerships and other material connections should be disclosed in accordance with applicable rules and platform policies."
    },
    {
      "t": "Measuring only engagement",
      "b": "A campaign designed to generate sales should not be judged solely by likes or video views."
    },
    {
      "t": "Overlooking content rights",
      "b": "Businesses should agree in writing on whether creator content can be reused in paid ads, on websites, or in other marketing materials."
    }
  ],
  "outro": [
    "Addressing these issues early can make creator collaborations easier to manage and evaluate."
  ],
  "table": null
};

/* prose */
const S07: Sec = {
  "h": "Is Influencer Marketing a Good Fit for Your Business?",
  "intro": [
    "Influencer marketing could be applied by ecommerce brands, local firms, consumer goods, professional services, and B2B. It will all depend on the audience, the type of product, the budget, and the existence of creators who could effectively convey the message.",
    "The use of an extensive program is not compulsory. You could start with a small campaign that is well-defined in order to gauge audience reaction before investing in a full-blown marketing strategy.",
    "Hover Business Services LLP could assist you in identifying potential influencer collaboration and create a marketing program around it based on your preferences. Contact us today to discuss the audiences, budget, and possible collaborations."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* faq */
const S08: Sec = {
  "h": "Frequently Asked Questions",
  "intro": [],
  "items": [
    {
      "t": "What is influencer marketing used for?",
      "b": "Businesses use influencer marketing to introduce products, increase brand awareness, reach niche audiences, generate website traffic, and support leads or sales through creator partnerships."
    },
    {
      "t": "How much does an influencer marketing campaign cost?",
      "b": "Costs depend on the creator's audience, content format, deliverables, usage rights, campaign duration, and compensation model. A suitable budget should account for both creator fees and campaign management expenses."
    },
    {
      "t": "Are micro-influencers useful for small businesses?",
      "b": "They can be, particularly when their audience is relevant to the business. Audience quality, engagement, content credibility, and commercial terms matter more than follower count alone."
    },
    {
      "t": "Which social media platform should I choose?",
      "b": "Instagram can suit visual product campaigns, YouTube can support detailed reviews and demonstrations, and LinkedIn may be relevant for B2B audiences. The choice should follow audience behaviour and campaign objectives."
    },
    {
      "t": "How can I track influencer marketing ROI?",
      "b": "Use available tracking links, UTM parameters, promotional codes, conversion data, and campaign costs to estimate attributed results. The accuracy of ROI calculations depends on the quality of the available data."
    },
    {
      "t": "Can influencer content be used in paid advertising?",
      "b": "It may be possible if the creator and brand agree on the appropriate usage rights and follow the relevant platform requirements. Paid usage should not be assumed to be included in the original collaboration fee."
    },
    {
      "t": "How do you identify fake influencer engagement?",
      "b": "Review the quality and relevance of comments, engagement patterns, audience consistency, and available performance data. No single indicator proves fraud, so creator evaluation should consider multiple signals."
    },
    {
      "t": "Does influencer marketing work for B2B companies?",
      "b": "Yes. B2B brands can collaborate with industry specialists, professional creators, and subject-matter experts to explain complex products, share useful insights, and reach relevant decision-makers."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Heart, MessageCircle, Users, Megaphone, Star, Play];

/* ============================== Page ============================== */

export default async function InfluencerMarketingPage() {
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
      <Cards s={S02} tone="surface" v="bento" />
      <Cards s={S03} tone="white" v="rows" />
      <Cards s={S04} tone="soft" v="split" />
      <Table s={S05} tone="white" />
      <Cards s={S06} tone="ink" v="grid" />
      <Prose s={S07} tone="white" />
      <Faq s={S08} phone={co.phone} />
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
    <div className="relative mx-auto w-[280px]">
      <div className="rounded-[38px] border-[8px] border-[var(--color-ink)] bg-white text-[var(--color-ink)] shadow-[var(--shadow-lg)]">
        <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-[var(--color-ink)]" />
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="h-8 w-8 rounded-full bg-[conic-gradient(var(--color-brand),var(--color-accent),var(--color-brand))] p-[2px]"><span className="block h-full w-full rounded-full bg-white" /></span>
          <div><p className="text-xs font-bold">{HERO.handle}</p><p className="text-[10px] text-[var(--color-text-muted)]">{HERO.platform}</p></div>
        </div>
        <div className="relative mx-3 flex aspect-square items-center justify-center rounded-2xl bg-[linear-gradient(140deg,var(--color-brand),#7a0f0a)]">
          {HERO.video ? <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[var(--color-brand)]"><Play size={22} fill="currentColor" /></span>
            : HERO.reviews ? <span className="flex text-white">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={26} fill="currentColor" />)}</span>
            : <span className="font-display text-5xl font-extrabold text-white/90">New</span>}
        </div>
        <div className="flex items-center gap-4 px-4 pt-3 text-[var(--color-ink)]">
          <Heart size={20} className="sx-pop text-[var(--color-brand)]" fill="currentColor" /><MessageCircle size={20} /><Send size={20} />
        </div>
        <p className="px-4 pt-2 text-xs font-bold">{HERO.likes}{HERO.video || HERO.reviews ? "" : " likes"}</p>
        <p className="px-4 pb-5 pt-1 text-xs leading-snug text-[var(--color-text-muted)]">{HERO.caption}</p>
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
