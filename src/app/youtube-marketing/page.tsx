import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, Heart, Megaphone, MessageCircle, Phone, Play, Plus, Send, Star, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "YouTube Marketing Services for Channel Growth | Hover Business Services",
    description: "Grow your channel with YouTube Marketing services from Hover Business Services LLP. Improve video SEO, audience engagement, and content visibility.",
    path: "/youtube-marketing",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "YouTube Marketing Services",
  "eyebrow": "Social Media",
  "tagline": "Publishing videos regularly does not always lead to more views, subscribers, or business enquiries. Videos need to reach the right audience, answer relevant questions, and give viewers a reason to keep watching. Without a clear strategy, even useful content can struggle to gain attention."
};

const HERO: { handle: string; caption: string; likes: string; platform: string; sponsored?: boolean; video?: boolean; reviews?: boolean } = {
  "handle": "YourBrand",
  "caption": "How we cut delivery time by half | Behind the scenes",
  "likes": "18K views",
  "platform": "YouTube",
  "video": true
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
  "h": "YouTube Marketing Services to Grow Your Channel and Reach More Customers",
  "intro": [
    "At Hover Business Services LLP, we help businesses make better use of YouTube through channel optimisation, video SEO, content planning, and audience development. Our YouTube Marketing approach focuses on improving content discoverability, strengthening viewer engagement, and connecting video activity with wider business goals."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Turn Your YouTube Channel Into a Valuable Business Asset",
  "intro": [
    "YouTube is not just about brand awareness. It can also help people understand your offerings, compare options, get informed about your services and make sure that you fit their requirements.",
    "With a properly managed YouTube channel, viewers have a reliable place where they will be able to access all sorts of useful information regarding your brand. This is achieved through the implementation of an appropriate video marketing approach.",
    "Our strategy considers three important areas:"
  ],
  "items": [
    {
      "t": "Discoverability",
      "b": "Help relevant audiences find your videos through YouTube search and related recommendations."
    },
    {
      "t": "Viewer engagement",
      "b": "Give people useful content that encourages them to watch, interact, and explore more of your channel."
    },
    {
      "t": "Business relevance",
      "b": "Connect video topics and calls to action with website visits, enquiries, product interest, or other measurable goals."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "What Can We Improve on Your YouTube Channel?",
  "intro": [
    "Every channel has different needs. Some require a stronger foundation, while others need better video optimisation or a more consistent publishing strategy."
  ],
  "items": [
    {
      "t": "Channel Setup and Branding",
      "b": "For businesses starting from scratch, we can help organise channel details, branding elements, descriptions, playlists, and other essential settings. For existing channels, we review the presentation and identify areas that may need attention. A clear channel layout helps viewers understand what your business offers and where they should start."
    },
    {
      "t": "YouTube Keyword Research and Content Planning",
      "b": "Effective video SEO begins with understanding what your audience searches for. We research relevant search terms, topic variations, and user intent to identify useful content opportunities. This research can inform video topics, titles, descriptions, playlists, and a content calendar. The aim is to create videos that answer real questions instead of publishing content without a clear audience in mind."
    },
    {
      "t": "Video Metadata and On-Page Optimisation",
      "b": "Small details can affect how viewers understand and discover a video. We review video titles, descriptions, relevant tags, hashtags where appropriate, timestamps, and playlist organisation. We also consider thumbnail messaging and calls to action so that the presentation matches the video's actual content. These improvements support a more consistent YouTube SEO strategy without relying on keyword stuffing."
    },
    {
      "t": "Video Content and Audience Engagement",
      "b": "The other aspect involved in getting people to click is having your video provide what the title promises. We critique your video structure, beginnings, pacing, and potential places where you can lead your viewers to other videos/pages. Depending on the type of channel that you have, we might recommend changes to be made in these areas."
    },
    {
      "t": "Video Promotion Beyond YouTube",
      "b": "Videos can also be used in your overall marketing strategies. We assist you in finding the right methods for distributing your content via your website, blog posts, emails, and social media platforms. Embedding your videos within useful content on your website can allow visitors to learn about your products in yet another manner. Promoting videos via social media allows you to reach customers who might have not found your channel via search engines."
    },
    {
      "t": "YouTube Analytics and Performance Reviews",
      "b": "We use available analytics to understand how viewers interact with your content and where improvement opportunities exist. The review may cover watch time, average view duration, impressions, click-through rate, returning viewers, subscriber growth, and referral traffic. Where suitable tracking is available, we also examine how video activity contributes to website visits, enquiries, or sales."
    }
  ],
  "outro": [],
  "table": null
};

/* prose */
const S04: Sec = {
  "h": "Why Some Videos Get Views but Fail to Build an Audience",
  "intro": [
    "A video might get clicks without retaining their viewers.",
    "There might be another video with fewer views but has people who really need the info that the company is offering.",
    "This is the reason why we do not just rely on how many views a video gets.",
    "We also look into whether the video topic suits the intent of the audience, if the thumbnail truly reflects the video, if the video is informative enough for them, and where they usually exit the video.",
    "This is how we come up with future topics for videos and what call to action to make in the video."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* steps */
const S05: Sec = {
  "h": "A Practical Plan for Managing Your YouTube Marketing",
  "intro": [],
  "items": [
    {
      "t": "Review the current position",
      "b": "We assess your channel, existing videos, audience data, branding, and business objectives to understand what is working and what needs attention."
    },
    {
      "t": "Identify opportunities",
      "b": "Keyword research and competitor content analysis help us find relevant topics, search opportunities, and gaps in your current video library."
    },
    {
      "t": "Improve the channel and videos",
      "b": "We work on agreed priorities, which may include metadata, playlists, channel presentation, video structure, and content recommendations."
    },
    {
      "t": "Support content distribution",
      "b": "We identify relevant opportunities to share and embed videos across suitable channels, helping your content reach audiences beyond existing subscribers."
    },
    {
      "t": "Measure and refine",
      "b": "We review performance data and recommend next steps based on viewer behaviour, content results, and the goals established at the beginning."
    }
  ],
  "outro": [],
  "table": null
};

/* table */
const S06: Sec = {
  "h": "YouTube Marketing Packages That Match Your Requirements",
  "intro": [
    "The amount of support you need depends on the size of your channel, the number of videos you publish, and your marketing objectives. We can discuss a suitable scope based on your current position and priorities."
  ],
  "items": [],
  "outro": [
    "The final scope should reflect your requirements, publishing schedule, and available resources rather than a fixed promise of views or subscribers."
  ],
  "table": {
    "head": [
      "Service level",
      "Suitable for",
      "Potential scope"
    ],
    "rows": [
      [
        "Channel Foundation",
        "New or small channels",
        "Channel setup, branding, keyword research, and essential video SEO"
      ],
      [
        "Channel Development",
        "Businesses publishing videos regularly",
        "Ongoing optimisation, content planning, performance reviews, and promotion"
      ],
      [
        "Growth and Strategy",
        "Established channels with broader goals",
        "Deeper analytics, content opportunity research, wider distribution, and strategic reviews"
      ]
    ]
  }
};

/* cards */
const S07: Sec = {
  "h": "Measure Progress With the Right YouTube Metrics",
  "intro": [
    "Useful reporting helps explain not only how a channel is performing, but also where the next improvement may come from.",
    "Depending on your goals, we may review:"
  ],
  "items": [
    {
      "t": "",
      "b": "Watch time and average view duration to understand how long people watch."
    },
    {
      "t": "",
      "b": "Impressions and click-through rate to assess how viewers respond when videos appear."
    },
    {
      "t": "",
      "b": "Audience retention to identify sections that hold attention or lose viewers."
    },
    {
      "t": "",
      "b": "Subscribers and returning viewers to monitor audience development."
    },
    {
      "t": "",
      "b": "Traffic sources to understand whether viewers arrive through YouTube search, suggested videos, external websites, or other channels."
    },
    {
      "t": "",
      "b": "Website referrals and conversions to evaluate business outcomes when tracking is available."
    },
    {
      "t": "Give Your Video Content a Clearer Direction",
      "b": "Video production for the sake of sustaining your channel is not a requirement. The better way to go about it is through valuable topics, effective presentation, and a solid understanding of what your viewers want to learn. Hover Business Services LLP offers you assistance in creating a YouTube Marketing plan incorporating channel optimisation, visibility of your videos through searches, content promotion, and performance analysis. Contact us to see how we can help your channel out!"
    }
  ],
  "outro": [
    "YouTube Studio Analytics, Google Analytics 4, and Google Search Console can provide useful information for different parts of this process. Third-party keyword research tools may also help identify topic opportunities."
  ],
  "table": null
};

/* faq */
const S08: Sec = {
  "h": "Frequently Asked Questions",
  "intro": [],
  "items": [
    {
      "t": "What does YouTube Marketing include?",
      "b": "YouTube Marketing can include channel setup, video SEO, keyword research, content planning, metadata optimisation, video promotion, audience development, and performance reporting. The exact services depend on your business goals and current channel."
    },
    {
      "t": "How can YouTube SEO help my videos?",
      "b": "YouTube SEO helps align video topics and metadata with relevant searches. Titles, descriptions, thumbnails, content relevance, and viewer response all matter when improving discoverability. No optimisation method can guarantee a particular ranking."
    },
    {
      "t": "Can you help a business that has no YouTube channel?",
      "b": "Yes. Support can begin with channel creation, branding, essential settings, keyword research, and a content plan suited to your business and target audience."
    },
    {
      "t": "How long does YouTube channel growth take?",
      "b": "Results vary according to the topic, competition, publishing frequency, video quality, and audience response. Some videos may gain attention quickly, while building a consistent audience often requires ongoing work and analysis."
    },
    {
      "t": "Which metrics matter most for YouTube performance?",
      "b": "The most useful metrics depend on your objective. Watch time, audience retention, click-through rate, subscriber growth, traffic sources, and tracked conversions can each provide different insights."
    },
    {
      "t": "Can YouTube videos bring website traffic and leads?",
      "b": "Yes. Relevant videos can direct viewers to useful website pages through descriptions, links, and calls to action. The results depend on the audience, content, offer, and effectiveness of the next step."
    },
    {
      "t": "Do you provide video promotion outside YouTube?",
      "b": "Depending on the agreed scope, promotion can include suitable social media distribution, blog content with video embeds, website integration, and other relevant channels. Promotion should reach audiences who are likely to find the video useful."
    },
    {
      "t": "Can YouTube content support AI search visibility?",
      "b": "Well-organised, relevant video content may help people discover your brand through search experiences that reference online content. Clear titles, descriptions, transcripts, and supporting website content can improve accessibility and context, but visibility in AI-generated answers is not guaranteed."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Heart, MessageCircle, Users, Megaphone, Star, Play];

/* ============================== Page ============================== */

export default async function YoutubeMarketingPage() {
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
      <Cards s={S03} tone="white" v="bento" />
      <Prose s={S04} tone="soft" />
      <Steps s={S05} tone="white" v="line" />
      <Table s={S06} tone="surface" />
      <Cards s={S07} tone="ink" v="rows" />
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
