import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, Heart, Megaphone, MessageCircle, Phone, Play, Plus, Send, Star, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Social Media Marketing Services for Business Growth | Hover Business Services",
    description: "Grow your brand with social media marketing services from HBS. Improve brand awareness, audience engagement, website traffic, and lead generation.",
    path: "/social-media-marketing",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Social Media Marketing Services",
  "eyebrow": "Social Media",
  "tagline": "Strengthen your brand's digital presence with professional Social Media Marketing services from Hover Business Services (HBS). We help businesses connect with their target audience, build brand awareness, improve engagement, and generate valuable leads through strategic social media campaigns."
};

const HERO: { handle: string; caption: string; likes: string; platform: string; sponsored?: boolean; video?: boolean; reviews?: boolean } = {
  "handle": "yourbrand",
  "caption": "A month of planned posts, reels and stories, all on brand.",
  "likes": "4,920",
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
    "label": "Facebook/Meta Ads",
    "href": "/facebook-meta-ads"
  },
  {
    "label": "Instagram Ads",
    "href": "/instagram-ads"
  },
  {
    "label": "YouTube Marketing",
    "href": "/youtube-marketing"
  }
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Grow Your Brand With a Results-Driven Social Media Marketing Company",
  "intro": [
    "Our approach combines creative content, audience research, social media management, and paid advertising to help your business reach the right people. Whether you are a startup looking to establish your brand or an established company aiming to expand its digital reach, we develop customized marketing strategies aligned with your business objectives.",
    "Our social media marketing solutions can help you maintain a consistent online presence, communicate your brand message effectively, and build meaningful relationships with potential customers.",
    "Social media has grown into a key source of finding out about audiences, reaching out to customers, and promoting the offerings of businesses online. But a successful social media strategy goes beyond simply posting on social media. Customer behavior, choosing right channels, producing relevant content and monitoring the effectiveness of the campaigns must be done.",
    "Here at HBS, we develop social media marketing strategies specifically based on the image of your company and its objectives. We help businesses utilize social media platforms such as Facebook, Instagram, LinkedIn and YouTube through organic content marketing and social media advertising.",
    "From increasing brand awareness to lead generation and driving traffic, it is all about establishing an effective presence on social media."
  ],
  "items": [
    {
      "t": "Complete digital marketing solutions",
      "b": "Social Media Marketing, SEO, PPC, SMO, website development, mobile app development, and branding."
    },
    {
      "t": "Experienced in-house team",
      "b": "80+ professionals working across digital marketing, design, and technology."
    },
    {
      "t": "International presence",
      "b": "Offices in Delhi and Auckland, supporting businesses across multiple markets."
    },
    {
      "t": "Business-focused strategies",
      "b": "Campaign planning, content creation, audience engagement, and performance analysis."
    },
    {
      "t": "Your Business Growth, Supported by a Dedicated Digital Team",
      "b": "With 80+ team members, more than 1,500 clients served, and 5+ years in business, HBS brings together marketing, creative, and technical expertise under one roof. Our team works to understand your requirements and develop solutions suited to your industry, audience, and growth objectives. We also provide 24/7 support availability to help clients access assistance when needed. *Business statistics should be reviewed and kept up to date before publication.*"
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Comprehensive Social Media Marketing and SMO Services",
  "intro": [
    "Our social media marketing services cover the essential activities required to build, manage, and improve your brand's presence across relevant social channels. We combine organic social media strategies with paid campaigns where appropriate to support different marketing objectives.",
    "Our services include:"
  ],
  "items": [
    {
      "t": "Social Media Strategy Development",
      "b": "Establish clear objectives, identify audience segments, research competitors, and create a practical marketing roadmap."
    },
    {
      "t": "Social Media Account Management",
      "b": "Manage business profiles, coordinate publishing schedules, maintain brand consistency, and support regular audience interaction."
    },
    {
      "t": "Social Media Content Creation",
      "b": "Develop branded graphics, promotional posts, educational content, short-form videos, and platform-specific creative assets."
    },
    {
      "t": "Paid Social Media Advertising",
      "b": "Plan and optimize advertising campaigns to reach relevant audiences and support website visits, enquiries, and conversions."
    },
    {
      "t": "Social Media Optimization (SMO)",
      "b": "Improve profile information, content presentation, discoverability, and engagement opportunities."
    },
    {
      "t": "Community Management",
      "b": "Encourage conversations, respond to customer interactions, and help strengthen relationships with your audience."
    },
    {
      "t": "Social Media Analytics and Reporting",
      "b": "Review campaign metrics to understand performance and identify opportunities for improvement."
    },
    {
      "t": "Online Reputation Management",
      "b": "Monitor relevant feedback and support a consistent, professional brand image across social channels."
    }
  ],
  "outro": [
    "Our services can be adapted to your business requirements, available budget, and selected platforms."
  ],
  "table": null
};

/* whyus */
const S03: Sec = {
  "h": "Why Choose HBS for Social Media Marketing Services?",
  "intro": [
    "Choosing the right social media marketing partner can make it easier to maintain a consistent brand identity, reach suitable audiences, and coordinate marketing activities effectively. At HBS, we emphasize collaboration, transparent communication, creative execution, and continuous improvement."
  ],
  "items": [
    {
      "t": "Clear Communication and Reporting",
      "b": "We feel that you need to be aware of what we are doing for your campaigns. This is because our method of operation includes communication about planned activities, performance review, and improvements to enable you to make the right decisions."
    },
    {
      "t": "Customized Marketing Strategies",
      "b": "Each company has different interests. Our social media strategy is created based on your industry, target group, products or services, and marketing objectives, as opposed to one strategy for all brands."
    },
    {
      "t": "In-House Marketing and Technical Expertise",
      "b": "With over 80 members on our team, we have an expertise in SEO, PPC, social media, web development, application development, and creative designs. This ensures integration between your social media campaigns and other aspects of your digital marketing activities."
    },
    {
      "t": "Creative Content and Brand Storytelling",
      "b": "This enables your brand value to be communicated to your target groups and give your customers reasons to engage with your business."
    },
    {
      "t": "Data-Informed Campaign Optimization",
      "b": "Performance metrics will allow us to analyze the impact of our social media efforts. The information gained through reach, engagement, clicks, leads, and conversions can prove helpful in making modifications to content, audience, and campaigns."
    },
    {
      "t": "Flexible and Scalable Services",
      "b": "As you grow, your social media needs may grow. Our methodology is flexible enough to adapt to new platforms, objectives of your campaigns, content needs, and priorities in marketing."
    },
    {
      "t": "An Integrated Digital Marketing Approach",
      "b": "Social media is the most effective when it is used alongside other marketing techniques. We provide expertise in social media marketing as well as SEO, PPC, web development, and branding through HBS."
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S04: Sec = {
  "h": "Our Social Media Marketing Process: From Planning to Performance",
  "intro": [
    "An organized process helps ensure that social media activities remain aligned with your goals. We combine strategic planning, creative execution, and performance monitoring to support continuous campaign improvement."
  ],
  "items": [
    {
      "t": "Understand Your Business Requirements",
      "b": "We begin by learning about your brand, products or services, target customers, challenges, and expected outcomes. This information helps establish a clear direction for your social media marketing campaign."
    },
    {
      "t": "Conduct a Social Media Audit",
      "b": "We assess your existing profiles, content quality, engagement patterns, publishing consistency, and opportunities to improve your social media presence."
    },
    {
      "t": "Research Your Audience and Competitors",
      "b": "We examine relevant market trends, audience interests, competitor activity, and platform preferences. This research helps identify opportunities to differentiate your brand and communicate more effectively."
    },
    {
      "t": "Develop a Content Strategy",
      "b": "We plan content themes, formats, messaging, and publishing schedules. The strategy may include educational posts, promotional campaigns, brand stories, customer-focused content, and short-form videos."
    },
    {
      "t": "Plan Organic and Paid Campaigns",
      "b": "We determine the appropriate mix of organic social media marketing and paid advertising based on your objectives, audience, and budget."
    },
    {
      "t": "Publish and Manage Social Content",
      "b": "We coordinate content publishing and account management to maintain a consistent presence and encourage audience participation across selected platforms."
    },
    {
      "t": "Strengthen Audience Relationships",
      "b": "We focus on relevant communication, community engagement, and reputation management to help build trust and encourage ongoing customer interaction."
    },
    {
      "t": "Measure and Optimize Results",
      "b": "We review campaign performance and identify areas for improvement. Depending on the campaign, this may include refining content formats, targeting, posting frequency, and advertising allocation."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S05: Sec = {
  "h": "How Social Media Marketing Helps Businesses Achieve Their Goals",
  "intro": [
    "Social media marketing can support different stages of the customer journey, from introducing your brand to encouraging enquiries and repeat purchases. A clearly defined strategy helps connect social media activities with measurable business objectives."
  ],
  "items": [
    {
      "t": "Brand Awareness and Reach",
      "b": "Consistent, relevant content can introduce your business to potential customers and help strengthen recognition across social platforms."
    },
    {
      "t": "Audience Engagement and Community Building",
      "b": "Interactive posts, useful information, videos, and timely responses can encourage conversations and help your brand develop stronger customer relationships."
    },
    {
      "t": "Website Traffic and Lead Generation",
      "b": "Social media content and paid campaigns can direct interested users to relevant website pages, contact forms, service descriptions, and product listings."
    },
    {
      "t": "Customer Acquisition and Sales Support",
      "b": "Targeted advertising, product-focused content, and campaign landing pages can support purchasing decisions and help businesses attract potential customers."
    },
    {
      "t": "Customer Loyalty and Retention",
      "b": "Ongoing communication, customer-focused content, and responsive community management can help maintain relationships beyond the initial transaction."
    },
    {
      "t": "Performance Measurement and Insights",
      "b": "Social media analytics provide information about audience behavior and campaign activity, helping businesses understand what attracts attention and which actions contribute to their goals."
    }
  ],
  "outro": [],
  "table": null
};

/* audience */
const S06: Sec = {
  "h": "Social Media Marketing Solutions for Different Industries",
  "intro": [
    "A successful campaign should reflect the needs of its industry and audience. HBS can tailor social media marketing activities to different business models and marketing priorities."
  ],
  "items": [
    {
      "t": "E-commerce and Retail",
      "b": "Product promotions, shopping-focused content, retargeting campaigns, and sales support."
    },
    {
      "t": "Fashion and Beauty",
      "b": "Visual storytelling, product launches, promotional creatives, and audience engagement."
    },
    {
      "t": "Food and Hospitality",
      "b": "Menu promotions, service highlights, short-form videos, and local audience campaigns."
    },
    {
      "t": "Fitness and Wellness",
      "b": "Educational content, service awareness, community engagement, and enquiry generation."
    },
    {
      "t": "B2B and Professional Services",
      "b": "LinkedIn content, thought leadership, professional visibility, and qualified lead generation."
    },
    {
      "t": "Local Businesses",
      "b": "Location-relevant content, customer reviews, brand awareness, and enquiries from nearby audiences."
    }
  ],
  "outro": [
    "The appropriate strategy depends on your business model, customer behavior, competition, campaign budget, and goals. Performance should be evaluated against agreed objectives rather than assumed results."
  ],
  "table": null
};

/* cards */
const S07: Sec = {
  "h": "Social Media Marketing Best Practices: What to Do and What to Avoid",
  "intro": [
    "A strong social media strategy combines consistent communication with relevant content and ongoing performance analysis. Following established best practices can help businesses make better use of their marketing resources."
  ],
  "items": [
    {
      "t": "What You Should Do",
      "b": "",
      "list": [
        "Research your target audience and understand its interests, preferences, and behavior.",
        "Select social media platforms that match your business objectives.",
        "Maintain a consistent brand voice and visual identity.",
        "Create useful, engaging, and platform-specific content.",
        "Use paid advertising strategically when it supports your goals.",
        "Track engagement, reach, website clicks, leads, and conversions.",
        "Respond professionally to customer messages, comments, and feedback.",
        "Review analytics regularly and refine campaigns using performance insights."
      ]
    },
    {
      "t": "What You Should Avoid",
      "b": "",
      "list": [
        "Publishing content without a defined purpose.",
        "Sharing identical posts everywhere without adapting them to each platform.",
        "Ignoring comments, customer questions, and audience feedback.",
        "Measuring success only through follower counts or likes.",
        "Running paid campaigns without suitable targeting or conversion tracking.",
        "Relying entirely on automated responses and scheduled content.",
        "Making unsupported claims about campaign performance or guaranteed results."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* faq */
const S08: Sec = {
  "h": "Frequently Asked Questions About Social Media Marketing",
  "intro": [],
  "items": [
    {
      "t": "What are social media marketing services?",
      "b": "Social media marketing services involve planning, creating, publishing, promoting, and measuring content across social networking platforms. They may include social media management, content creation, paid advertising, audience engagement, community management, and analytics."
    },
    {
      "t": "How can social media marketing help my business?",
      "b": "It can help improve brand awareness, strengthen customer engagement, attract relevant website traffic, generate enquiries, and support sales. Outcomes depend on your objectives, audience, industry, budget, and campaign execution."
    },
    {
      "t": "What is the difference between social media marketing and SMO?",
      "b": "Social media marketing includes organic and paid promotional activities designed to achieve business goals. Social media optimization (SMO) focuses on improving social profiles, content presentation, discoverability, and engagement to strengthen social media performance."
    },
    {
      "t": "Which social media platforms are suitable for my business?",
      "b": "The right platforms depend on your target audience and business objectives. Instagram and Facebook may be useful for consumer-facing brands, LinkedIn can support B2B marketing, and YouTube can help businesses communicate through video content and demonstrations."
    },
    {
      "t": "How do you measure social media marketing results?",
      "b": "Performance can be measured through metrics such as reach, impressions, engagement rate, follower growth, website traffic, click-through rate, leads, conversions, cost per lead, and return on advertising spend. The most relevant metrics depend on your campaign objectives."
    },
    {
      "t": "How much do social media marketing services cost?",
      "b": "Pricing varies according to the number of platforms, content volume, creative requirements, advertising management, reporting needs, and overall campaign complexity. A tailored proposal can help establish the scope and budget for your business."
    }
  ],
  "outro": [],
  "table": null
};

/* cta */
const S09: Sec = {
  "h": "Turn Your Social Media Presence Into a Business Opportunity",
  "intro": [
    "A well-planned social media strategy can help your business communicate its value, connect with potential customers, and strengthen its digital presence. The key is to combine relevant content, audience-focused campaigns, consistent management, and measurable objectives.",
    "Hover Business Services brings together social media marketing and broader digital expertise to help businesses build a stronger online presence. Whether your priority is brand awareness, audience engagement, website traffic, or lead generation, we can help you explore an approach suited to your needs."
  ],
  "items": [],
  "outro": [
    "Ready to take the next step? Talk to the HBS Team to discuss your business goals and explore our social media marketing services."
  ],
  "table": null
};

const ICONS = [Heart, MessageCircle, Users, Megaphone, Star, Play];

/* ============================== Page ============================== */

export default async function SocialMediaMarketingPage() {
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
      <WhyUs s={S03} />
      <Steps s={S04} tone="white" v="rail" />
      <Cards s={S05} tone="soft" v="rows" />
      <Audience s={S06} tone="surface" />
      <Cards s={S07} tone="white" v="split" />
      <Faq s={S08} phone={co.phone} />
      <Cta s={S09} phone={co.phone} />

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
