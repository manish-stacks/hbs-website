import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, CalendarCheck, Check, ChevronRight, Headphones, Package, Phone, Plus, Users, Wallet,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Social Media Packages for Business Growth | Hover Business Services LLP",
    description: "Explore flexible Social Media Packages for content creation, account management and paid campaigns. Contact Hover Business Services LLP today!",
    path: "/social-media-packages",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Social Media Packages",
  "eyebrow": "Packages",
  "tagline": "Your customers are spending time on social media every day. The right strategy can help your business reach them, build brand awareness, encourage meaningful interactions, and generate new enquiries. However, managing multiple platforms, creating regular content, and tracking performance requires time, planning, and expertise."
};

const HERO: { plans: string[] } = {
  "plans": [
    "Basic Social Media",
    "Standard Social Media",
    "Premium Social Media"
  ]
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
    "label": "SEO Packages",
    "href": "/seo-packages"
  },
  {
    "label": "Local SEO Packages",
    "href": "/local-seo-packages"
  },
  {
    "label": "Ecommerce SEO Packages",
    "href": "/ecommerce-seo-packages"
  },
  {
    "label": "PPC Packages",
    "href": "/ppc-packages"
  }
];

const INCLUDES = [
  "Creatives and captions",
  "Scheduling and posting",
  "Performance summary",
  "Dedicated account manager",
  "Clear monthly reporting",
  "No hidden fees"
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Social Media Packages That Turn Engagement into Business Growth",
  "intro": [
    "Hover Business Services LLP provides social media packages that will allow your organization to create a cohesive image and reach out to your audience via social networks. From developing content to managing communities and helping in launching paid campaigns, all our solutions are aimed at meeting the needs of your business.",
    "No matter whether you are a new venture seeking to create a brand image or an already existing organization seeking to optimize its social media performance, we can offer the right approach to you."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* checklist */
const S02: Sec = {
  "h": "Social Media Marketing at a Glance",
  "intro": [
    "Social media marketing is more than publishing posts and collecting likes. It involves understanding your audience, choosing the right platforms, developing useful content, and maintaining consistent communication.",
    "A well-planned strategy can help businesses:"
  ],
  "items": [
    {
      "t": "",
      "b": "Improve brand visibility across relevant social platforms."
    },
    {
      "t": "",
      "b": "Connect with potential customers and existing clients."
    },
    {
      "t": "",
      "b": "Share product updates, services, offers, and business news."
    },
    {
      "t": "",
      "b": "Build credibility through informative and engaging content."
    },
    {
      "t": "",
      "b": "Generate website visits and business enquiries."
    },
    {
      "t": "",
      "b": "Understand audience interests through performance insights."
    }
  ],
  "outro": [
    "Our Social Media Packages are structured to support these activities while keeping your marketing efforts organised and measurable."
  ],
  "table": null
};

/* cards */
const S03: Sec = {
  "h": "What Your Business Gets with Our Social Media Packages",
  "intro": [
    "Every business has different marketing requirements. A local service provider may need regular updates and customer engagement, while an ecommerce brand may focus on product promotion and paid advertising.",
    "Our services can include the following activities, depending on the selected plan."
  ],
  "items": [
    {
      "t": "Social Media Strategy and Planning",
      "b": "We begin by understanding your business, target audience, competitors, and marketing objectives. This helps establish a practical content direction and identify the platforms that are most relevant to your customers."
    },
    {
      "t": "Content Creation and Graphic Design",
      "b": "Consistent, well-designed content helps your brand communicate clearly. We develop social media creatives, promotional graphics, informative posts, and other visual content aligned with your brand identity."
    },
    {
      "t": "Social Media Account Management",
      "b": "Maintaining an active profile requires regular attention. Account management may include content scheduling, profile updates, publishing, and coordination of planned campaigns."
    },
    {
      "t": "Reels and Short-Form Video Content",
      "b": "Short-form videos can help communicate product features, demonstrate services, share tips, and introduce your brand in an engaging format. We can plan suitable video content according to your selected package and available creative assets."
    },
    {
      "t": "Community Management",
      "b": "Social media is a two-way communication channel. Responding to comments and monitoring interactions can help businesses maintain relationships with their audiences. The scope of community management depends on the agreed service plan."
    },
    {
      "t": "Paid Social Media Campaign Support",
      "b": "Organic content helps maintain your presence, while paid campaigns can support targeted reach and lead generation. We can assist with campaign planning, audience targeting, creative coordination, and performance monitoring. Advertising spend is generally separate from service fees."
    }
  ],
  "outro": [],
  "table": null
};

/* plans */
const S04: Sec = {
  "h": "Choose Your Social Media Growth Plan",
  "intro": [
    "Selecting the right package depends on your business size, marketing goals, content requirements, and preferred platforms. We offer flexible service levels that can be discussed and adjusted according to your needs."
  ],
  "items": [
    {
      "t": "Basic Social Media Package",
      "b": "Suitable for startups, professionals, and small businesses that want to establish a regular social media presence. Key inclusions may cover:",
      "list": [
        "Social media profile review.",
        "Basic content strategy.",
        "Monthly content calendar.",
        "Standard social media graphics.",
        "Regular post scheduling.",
        "Basic performance reporting."
      ]
    },
    {
      "t": "Standard Social Media Package",
      "b": "Designed for growing businesses that need more consistent communication and a broader content mix. Key inclusions may cover:",
      "list": [
        "Detailed social media planning.",
        "Platform-specific content development.",
        "Custom graphic creatives.",
        "Reels or short-form content planning.",
        "Regular publishing and scheduling.",
        "Basic community monitoring.",
        "Monthly performance analysis."
      ]
    },
    {
      "t": "Premium Social Media Package",
      "b": "A suitable option for brands looking for more active content management and campaign support. Key inclusions may cover:",
      "list": [
        "Advanced content strategy.",
        "Multiple content formats.",
        "Custom creative development.",
        "Short-form video content planning.",
        "Campaign coordination.",
        "Audience engagement support.",
        "Performance tracking and recommendations."
      ]
    },
    {
      "t": "Enterprise Social Media Package",
      "b": "Designed for larger businesses, multi-location brands, and organisations with broader social media requirements. Key inclusions may cover:",
      "after": "The exact deliverables, posting frequency, platforms, and pricing can be finalised after understanding your requirements.",
      "list": [
        "Customised social media strategy.",
        "Multi-platform management.",
        "Brand-focused content planning.",
        "Campaign and promotional coordination.",
        "Advanced reporting and analysis.",
        "Dedicated account coordination.",
        "Ongoing strategy improvements."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S05: Sec = {
  "h": "Platform-Wise Social Media Marketing Solutions",
  "intro": [
    "Each social media platform serves a different purpose. Choosing the right mix helps businesses communicate with their audience more effectively."
  ],
  "items": [
    {
      "t": "Facebook Marketing",
      "b": "Facebook can support brand awareness, community building, local business promotion, and customer communication. Businesses can use it to share updates, offers, informative posts, and advertising campaigns."
    },
    {
      "t": "Instagram Marketing",
      "b": "Instagram is useful for visually driven brands, lifestyle businesses, retailers, restaurants, and service providers. Reels, stories, carousels, and creative posts can help communicate your brand message."
    },
    {
      "t": "LinkedIn Marketing",
      "b": "LinkedIn is particularly relevant for B2B companies, consultants, professionals, and service-based businesses. A consistent content strategy can help share industry knowledge, company updates, and professional insights."
    },
    {
      "t": "YouTube Marketing",
      "b": "YouTube provides opportunities to publish product demonstrations, tutorials, educational videos, customer-focused content, and brand stories. Video planning and optimisation can support better content discoverability. We help identify suitable platforms based on your audience and business objectives instead of recommending every platform by default."
    }
  ],
  "outro": [],
  "table": null
};

/* table */
const S06: Sec = {
  "h": "Organic vs Paid Social Media Marketing",
  "intro": [
    "Organic and paid social media marketing serve different but complementary purposes. Understanding the difference can help you make better decisions about your marketing budget."
  ],
  "items": [],
  "outro": [
    "A balanced strategy may combine both approaches. Organic content helps maintain communication with your audience, while paid campaigns can support specific promotional objectives."
  ],
  "table": {
    "head": [
      "Organic Social Media",
      "Paid Social Media"
    ],
    "rows": [
      [
        "Builds a consistent brand presence",
        "Supports targeted campaign reach"
      ],
      [
        "Focuses on regular content publishing",
        "Uses advertising budgets"
      ],
      [
        "Encourages ongoing audience interaction",
        "Can support leads, traffic, and conversions"
      ],
      [
        "Helps develop brand familiarity over time",
        "Allows campaign-specific audience targeting"
      ],
      [
        "Uses posts, stories, reels, and videos",
        "Uses sponsored posts and ad formats"
      ]
    ]
  }
};

/* cards */
const S07: Sec = {
  "h": "Content That Makes Your Brand Stand Out",
  "intro": [
    "Your social media content should give people a reason to notice, follow, and interact with your business. Repeating promotional messages is rarely enough to maintain audience interest.",
    "A useful content strategy can include:"
  ],
  "items": [
    {
      "t": "Educational posts",
      "b": "Share practical tips, industry information, and answers to common customer questions."
    },
    {
      "t": "Product and service highlights",
      "b": "Explain what you offer and how it addresses customer needs."
    },
    {
      "t": "Brand stories",
      "b": "Introduce your team, work process, company values, and business journey."
    },
    {
      "t": "Customer-focused content",
      "b": "Share genuine testimonials, feedback, and approved project highlights."
    },
    {
      "t": "Promotional creatives",
      "b": "Communicate offers, launches, events, and seasonal campaigns."
    },
    {
      "t": "Reels and videos",
      "b": "Present demonstrations, quick explanations, and behind-the-scenes content."
    }
  ],
  "outro": [
    "The objective is to maintain a suitable balance between informative, engaging, and promotional posts."
  ],
  "table": null
};

/* audience */
const S08: Sec = {
  "h": "Social Media Solutions for Different Industries",
  "intro": [
    "Social media requirements vary depending on the industry, audience, and buying journey. Our approach can be adapted to different business categories."
  ],
  "items": [
    {
      "t": "Ecommerce and Retail",
      "b": "Product highlights, promotional creatives, new arrivals, and shopping-focused campaigns can support product discovery."
    },
    {
      "t": "Healthcare and Wellness",
      "b": "Educational posts, service information, appointment-related updates, and awareness content can help communicate with potential patients. Content should follow applicable professional and advertising guidelines."
    },
    {
      "t": "Real Estate",
      "b": "Property highlights, project updates, location information, and informative videos can help attract relevant audiences."
    },
    {
      "t": "Education and Training",
      "b": "Course information, student resources, institutional updates, and educational content can support communication with learners and parents."
    },
    {
      "t": "Professional and B2B Services",
      "b": "Industry insights, business updates, service explanations, and thought leadership content can help strengthen professional credibility."
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S09: Sec = {
  "h": "Our 30-60-90 Day Social Media Growth Roadmap",
  "intro": [
    "A structured roadmap makes it easier to organise social media activities and review progress. The exact schedule depends on your selected package and business requirements."
  ],
  "items": [
    {
      "t": "First 30 Days: Research and Foundation",
      "b": "The initial stage focuses on understanding your brand and preparing the strategy.",
      "list": [
        "Review existing social media profiles.",
        "Understand your target audience and competitors.",
        "Identify relevant platforms.",
        "Develop content themes and a posting calendar.",
        "Align creative direction with brand guidelines."
      ]
    },
    {
      "t": "Days 31-60: Content and Consistency",
      "b": "The next stage focuses on implementing the planned activities.",
      "list": [
        "Publish scheduled content.",
        "Develop suitable creative formats.",
        "Review audience interactions.",
        "Identify content topics receiving attention.",
        "Make adjustments based on initial observations."
      ]
    },
    {
      "t": "Days 61-90: Performance Review and Improvement",
      "b": "The final stage focuses on evaluating activity and identifying opportunities.",
      "after": "This roadmap provides a working framework, not a guarantee of specific rankings, leads, followers, or revenue.",
      "list": [
        "Review reach and engagement trends.",
        "Analyse website traffic or enquiries where tracking is available.",
        "Identify stronger content formats.",
        "Review campaign performance, if applicable.",
        "Recommend improvements for the next period."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S10: Sec = {
  "h": "How We Track Social Media Performance",
  "intro": [
    "Regular performance analysis helps businesses understand whether their social media activities are moving in the right direction.",
    "Depending on the platforms and campaign objectives, we can review:"
  ],
  "items": [
    {
      "t": "Reach",
      "b": "The number of unique users who see your content."
    },
    {
      "t": "Impressions",
      "b": "The total number of times content is displayed."
    },
    {
      "t": "Engagement",
      "b": "Likes, comments, shares, saves, and other interactions."
    },
    {
      "t": "Follower Growth",
      "b": "Changes in your audience size over time."
    },
    {
      "t": "Website Traffic",
      "b": "Visits generated through social media links."
    },
    {
      "t": "Leads and Conversions",
      "b": "Enquiries or actions recorded through suitable tracking methods."
    }
  ],
  "outro": [
    "These metrics help identify what is working and where adjustments may be useful. Reporting should focus on meaningful business objectives rather than vanity metrics alone."
  ],
  "table": null
};

/* whyus */
const S11: Sec = {
  "h": "Why Choose Hover Business Services LLP?",
  "intro": [
    "Choosing a social media marketing partner means finding a team that understands your business goals and can maintain a consistent marketing approach.",
    "Hover Business Services LLP focuses on practical social media solutions that can be aligned with different business requirements.",
    "Our approach includes:"
  ],
  "items": [
    {
      "t": "Business-focused planning",
      "b": "Strategies based on your industry, audience, and objectives."
    },
    {
      "t": "Flexible service options",
      "b": "Different levels of support for businesses with different requirements."
    },
    {
      "t": "Creative consistency",
      "b": "Content designed to maintain a recognisable brand identity."
    },
    {
      "t": "Platform-specific execution",
      "b": "Content formats selected according to the platform."
    },
    {
      "t": "Performance monitoring",
      "b": "Regular review of relevant social media metrics."
    },
    {
      "t": "Clear communication",
      "b": "A defined scope of work and coordination throughout the engagement."
    }
  ],
  "outro": [
    "We aim to make social media management more organised, consistent, and aligned with your wider marketing activities."
  ],
  "table": null
};

/* cta */
const S12: Sec = {
  "h": "Build a Stronger Social Media Presence with the Right Strategy",
  "intro": [
    "It is essential for your social media strategy to do much more than keep your accounts alive. It has to assist people in understanding your brand, learn about your offerings, and take some kind of action.",
    "Thanks to our flexible Social Media Packages by Hover Business Services LLP, it is possible to select a service offering that suits the requirements of your business.",
    "Be it regular posting of content, better audience engagement, or help in paid campaigns, a suitable package may help organize your social media efforts.",
    "Ready to talk about your social media objectives? Get in touch with us at Hover Business Services LLP."
  ],
  "items": [],
  "outro": [],
  "table": null
};

/* faq */
const S13: Sec = {
  "h": "Frequently Asked Questions",
  "intro": [],
  "items": [
    {
      "t": "What are Social Media Packages?",
      "b": "Social media packages are service plans that combine activities such as content planning, graphic design, post scheduling, account management, and performance reporting. The included services depend on the selected plan."
    },
    {
      "t": "Which social media platforms should my business use?",
      "b": "The right platforms depend on your target audience, industry, content type, and marketing goals. Instagram and Facebook may suit consumer-focused brands, while LinkedIn can be useful for B2B businesses and professionals."
    },
    {
      "t": "How much do social media marketing packages cost?",
      "b": "Pricing depends on the number of platforms, content volume, creative requirements, video production, account management, and advertising support. A customised quotation can be prepared after reviewing your requirements."
    },
    {
      "t": "Do social media packages include paid advertising?",
      "b": "Paid advertising support can be included in selected service plans. However, the advertising budget paid to platforms is generally separate from the agency's service charges."
    },
    {
      "t": "How soon can I see results from social media marketing?",
      "b": "Results depend on your industry, audience, competition, content quality, campaign budget, and consistency. Some campaigns may generate early engagement, while building a recognisable brand presence generally requires ongoing effort."
    },
    {
      "t": "Can I customize my social media package?",
      "b": "Yes. Service requirements can be discussed according to your preferred platforms, content formats, posting frequency, and marketing objectives."
    },
    {
      "t": "Do I need to provide content and images?",
      "b": "You can share existing brand assets, product details, photographs, and business information. The content creation process and required inputs can be agreed upon before the work begins."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Package, BadgeCheck, Wallet, CalendarCheck, BarChart3, Headphones];

/* ============================== Page ============================== */

export default async function SocialMediaPackagesPage() {
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
      <Checklist s={S02} tone="surface" />
      <Cards s={S03} tone="white" v="grid" />
      <Plans s={S04} tone="surface" />
      <Cards s={S05} tone="soft" v="bento" />
      <Table s={S06} tone="white" />
      <Cards s={S07} tone="ink" v="rows" />
      <Audience s={S08} tone="surface" />
      <Steps s={S09} tone="white" v="line" />
      <Cards s={S10} tone="surface" v="split" />
      <WhyUs s={S11} />
      <Cta s={S12} phone={co.phone} />
      <Faq s={S13} phone={co.phone} />

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
    <div className="relative mx-auto grid w-full max-w-[520px] grid-cols-3 items-end gap-3 text-[var(--color-ink)]">
      {HERO.plans.map((p, i) => (
        <div key={p} className={`sx-rise rounded-[22px] border p-4 shadow-[var(--shadow-md)] ${i === 1 ? "border-[var(--color-brand)] bg-[var(--color-brand)] pb-8 pt-6 text-white" : "border-[var(--color-border)] bg-white"}`} style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
          {i === 1 && <span className="mb-2 inline-block rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold">Most chosen</span>}
          <p className="font-display text-sm font-extrabold leading-tight">{p}</p>
          <p className={`mt-2 text-[11px] ${i === 1 ? "text-white/75" : "text-[var(--color-text-muted)]"}`}>Custom quote</p>
          <ul className="mt-3 space-y-1.5">
            {INCLUDES.slice(0, 2 + i).map((f) => (
              <li key={f} className="flex gap-1 text-[10px] leading-tight"><Check size={11} className="mt-px shrink-0" />{f}</li>
            ))}
          </ul>
        </div>
      ))}
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
