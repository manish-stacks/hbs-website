import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, Heart, Megaphone, MessageCircle, Phone, Play, Plus, Send, Star, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Online Reputation Management Services | ORM Services | Hover Business Services",
    description: "Take control of your brand's online presence with Online Reputation Management services, monitor, respond & optimise your digital image.",
    path: "/orm",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "ORM Services",
  "eyebrow": "Social Media",
  "tagline": "A negative review, an unanswered customer complaint, or outdated information about your business can influence how people see your brand. Before contacting a company, many potential customers check its reviews, search results, and social media conversations. What they find can affect whether they decide to get in touch or look elsewhere."
};

const HERO: { handle: string; caption: string; likes: string; platform: string; sponsored?: boolean; video?: boolean; reviews?: boolean } = {
  "handle": "Google Reviews",
  "caption": "Great service, quick response and they actually solved the problem.",
  "likes": "4.8 ★",
  "platform": "Reviews",
  "reviews": true
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
  "h": "ORM Services to Protect and Strengthen Your Online Reputation",
  "intro": [
    "Hover Business Services LLP helps businesses manage their online reputation through review monitoring, customer feedback management, search result analysis, and reputation improvement strategies. Our ORM services focus on addressing concerns professionally, strengthening positive brand signals, and helping businesses maintain a more credible online presence."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* checklist */
const S02: Sec = {
  "h": "What Are People Finding When They Search for Your Brand?",
  "intro": [
    "Online reputation management is not just about the information provided on the website of the company. Potential clients might come across reviews on Google, business listings, social media posts, forum comments, news articles, and even independent review websites.",
    "All of these channels can impact the perception of the brand at various stages of the client's journey. An inconsistent business listing or unresolved complaints from past customers might raise doubts for potential customers, although the services themselves are good.",
    "Online Reputation Management provides companies with an insight into the information available in search results and how to deal with it.",
    "Our work can support businesses that want to:"
  ],
  "items": [
    {
      "t": "",
      "b": "Monitor customer reviews and brand mentions."
    },
    {
      "t": "",
      "b": "Respond to negative feedback in a professional manner."
    },
    {
      "t": "",
      "b": "Improve the accuracy of online business information."
    },
    {
      "t": "",
      "b": "Strengthen trust through genuine customer feedback."
    },
    {
      "t": "",
      "b": "Identify recurring complaints and service-related concerns."
    },
    {
      "t": "",
      "b": "Maintain a consistent brand image across digital channels."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "Reputation Problems Often Start Small",
  "intro": [
    "A single complaint does not necessarily damage a business permanently. The way the business responds, however, can affect how other customers interpret the situation."
  ],
  "items": [
    {
      "t": "Negative Reviews Without a Response",
      "b": "When customers leave complaints without receiving a response, prospective buyers may wonder whether the business takes feedback seriously. Review management helps establish a consistent process for acknowledging concerns and providing appropriate replies."
    },
    {
      "t": "Different Information Across Business Listings",
      "b": "Incorrect phone numbers, outdated addresses, inconsistent opening hours, and old business descriptions can create confusion. Local listing management helps keep business information accurate across relevant platforms."
    },
    {
      "t": "Unfavourable Search Results",
      "b": "Old articles, customer complaints, or unrelated pages may appear when people search for a company. Search result monitoring helps businesses understand these results and identify legitimate ways to improve the visibility of accurate, useful information."
    },
    {
      "t": "Negative Conversations on Social Media",
      "b": "Customer concerns can spread across social platforms when they remain unresolved. Social listening helps identify relevant mentions and gives businesses an opportunity to respond before confusion grows."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "Our ORM Services: From Monitoring to Reputation Improvement",
  "intro": [],
  "items": [
    {
      "t": "Online Review Management",
      "b": "Our services involve assisting businesses in tracking customer feedback from appropriate review sites and responding to the reviews appropriately. This method concentrates on effective communication, professional replies, and proper management of customer feedback."
    },
    {
      "t": "Negative Feedback and Complaint Response",
      "b": "It is not always necessary to respond to a negative review in the same way. Some reviews require clarification, while others will require further investigation; some reviews may actually represent an issue with your service. We work to help companies craft an appropriate response that addresses the concern without making any unsubstantiated claims or sharing private customer information."
    },
    {
      "t": "Brand Mention Monitoring",
      "b": "Your business might be talked about by people without being mentioned in your official business account. Brand Monitoring allows you to get all relevant mentions made about you in the digital world."
    },
    {
      "t": "Search Reputation Analysis",
      "b": "We review the information people can find about your brand through search engines and relevant public sources. This can help identify inaccurate information, content gaps, and opportunities to publish useful, trustworthy material."
    },
    {
      "t": "Local Reputation and Google Business Profile Support",
      "b": "For businesses that rely on local customers, reviews and business listing accuracy can influence customer confidence. We help monitor relevant feedback and identify listing improvements that support a consistent local presence."
    },
    {
      "t": "Reputation-Focused Content Strategy",
      "b": "Useful website content, company information, expert articles, and genuine customer stories can help people understand what your business offers. We identify content opportunities that support brand credibility and provide more accurate context about your services."
    }
  ],
  "outro": [],
  "table": null
};

/* prose */
const S05: Sec = {
  "h": "Can You Recover From a Damaged Online Reputation?",
  "intro": [
    "The recovery process is highly dependent on the nature of the problem, the information provided online, and the measures that a company has to take.",
    "A viable solution starts with the identification of major concerns. In case customer complaints indicate a repeated problem, then the company might have to make some changes to their procedures. In case the information in the listing is wrong, then it might be necessary to correct it on the platform itself. In case a violation of platform policy occurs, then it is possible to submit a report, but there is no guarantee that the complaint will be taken down.",
    "Here at Hover Business Services LLP, our approach focuses on the use of genuine reputation improvement methods such as providing accurate information, responding to reviews, submitting reports on platforms if necessary, and better communication about brands.",
    "Our approach does not involve creating false reviews and misleading people."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* steps */
const S06: Sec = {
  "h": "How We Evaluate Your Online Reputation",
  "intro": [
    "An effective ORM strategy needs a clear understanding of the current situation before deciding what to change."
  ],
  "items": [
    {
      "t": "First, we assess your digital presence",
      "b": "We review relevant search results, public reviews, business listings, and brand mentions to identify the main reputation concerns."
    },
    {
      "t": "Next, we organise the priorities",
      "b": "Issues are grouped according to their relevance, urgency, visibility, and potential effect on customer confidence."
    },
    {
      "t": "Then, we plan the response",
      "b": "This may involve review management, listing corrections, complaint response guidelines, content improvements, or appropriate platform reports."
    },
    {
      "t": "Finally, we review changes over time",
      "b": "We monitor available indicators such as review trends, response coverage, brand mentions, search visibility, and customer sentiment."
    }
  ],
  "outro": [
    "This process helps businesses make informed decisions instead of reacting to every comment or review in isolation."
  ],
  "table": null
};

/* checklist */
const S07: Sec = {
  "h": "Measure Reputation Beyond Your Star Rating",
  "intro": [
    "A star rating is useful, but it does not explain every part of a brand's online reputation. Businesses should also look at the nature of customer feedback, recurring complaints, response quality, and changes in public discussion.",
    "Depending on the business and available data, reputation reporting may include:"
  ],
  "items": [
    {
      "t": "",
      "b": "Average review rating and rating distribution."
    },
    {
      "t": "",
      "b": "Volume of new reviews over time."
    },
    {
      "t": "",
      "b": "Review response rate and response time."
    },
    {
      "t": "",
      "b": "Positive, neutral, and negative brand mentions."
    },
    {
      "t": "",
      "b": "Recurring customer concerns and feedback themes."
    },
    {
      "t": "",
      "b": "Accuracy of key business listings."
    },
    {
      "t": "",
      "b": "Changes in relevant branded search results."
    }
  ],
  "outro": [
    "Sentiment analysis tools can help organise large amounts of feedback, but automated classifications may miss sarcasm, context, or the details of a specific complaint. Important issues should be reviewed carefully."
  ],
  "table": null
};

/* cta */
const S08: Sec = {
  "h": "Build a Reputation That Reflects Your Business",
  "intro": [
    "The reputation that you build online happens every day because of the experiences that people have with your company, conversations that they participate in, and the kind of information that is available on your brand.",
    "We at Hover Business Services LLP can help you in building an organized Online Reputation Management strategy for your organization.",
    "Let us talk to each other and figure out what works best for your reputation."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* faq */
const S09: Sec = {
  "h": "Frequently Asked Questions",
  "intro": [],
  "items": [
    {
      "t": "What is ORM (Online Reputation Management)?",
      "b": "ORM involves monitoring, assessing, and improving how a business is perceived across online platforms. It can include review management, brand monitoring, search result analysis, and customer feedback response."
    },
    {
      "t": "Why is Online Reputation Management important?",
      "b": "Potential customers may check reviews, search results, and public discussions before choosing a business. A consistent reputation management strategy helps businesses address concerns and present accurate information."
    },
    {
      "t": "Can ORM remove negative Google reviews?",
      "b": "A review may be reported if it violates the platform's policies, but removal depends on the platform's assessment. Genuine negative feedback generally cannot be removed simply because a business disagrees with it."
    },
    {
      "t": "How long does reputation management take?",
      "b": "The timeline depends on the severity of the issue, the number of platforms involved, and the actions required. Some listing corrections may happen relatively quickly, while broader reputation improvement can take longer."
    },
    {
      "t": "Does ORM include Google Business Profile management?",
      "b": "It can include monitoring Google reviews, preparing appropriate responses, and identifying listing information that needs correction. The exact scope depends on the business's requirements."
    },
    {
      "t": "How do you handle negative customer feedback?",
      "b": "We recommend reviewing the complaint, acknowledging legitimate concerns, responding professionally, and taking appropriate follow-up action. Responses should be factual and avoid disclosing confidential customer information."
    },
    {
      "t": "Can ORM help improve branded search results?",
      "b": "Reputation management can support better brand representation by improving accurate content, maintaining consistent business information, and addressing relevant issues. Search engine rankings and the removal of third-party content cannot be guaranteed."
    },
    {
      "t": "Is ORM useful for small businesses?",
      "b": "Yes. Small businesses often depend on customer reviews, local search visibility, and word-of-mouth recommendations. Regular review monitoring and accurate business listings can help maintain customer confidence."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Heart, MessageCircle, Users, Megaphone, Star, Play];

/* ============================== Page ============================== */

export default async function OrmPage() {
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
      <Checklist s={S02} tone="soft" />
      <Cards s={S03} tone="white" v="rows" />
      <Cards s={S04} tone="ink" v="split" />
      <Prose s={S05} tone="white" />
      <Steps s={S06} tone="surface" v="line" />
      <Checklist s={S07} tone="white" />
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
