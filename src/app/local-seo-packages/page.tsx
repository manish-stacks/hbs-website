import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, CalendarCheck, Check, ChevronRight, Headphones, Package, Phone, Plus, Users, Wallet,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Local SEO Packages to Grow Your Business | Hover Business Services LLP",
    description: "Explore Local SEO Packages by Hover Business Services LLP. Improve Google Maps visibility, local rankings and customer enquiries with expert SEO services.",
    path: "/local-seo-packages",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Local SEO Packages",
  "eyebrow": "Packages",
  "tagline": "When people search for products or services near them, they usually prefer businesses that are easy to find, trustworthy, and accessible. If your business does not appear in relevant local search results, you may be missing valuable opportunities to connect with potential customers. At Hover Business Services LLP, our Local SEO Packages are designed to improve your local online visibility, attract relevant customers, and help your business generate more enquiries."
};

const HERO: { plans: string[] } = {
  "plans": [
    "Starter Local SEO",
    "Growth Local SEO",
    "Multi-Location SEO"
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
    "label": "Ecommerce SEO Packages",
    "href": "/ecommerce-seo-packages"
  },
  {
    "label": "PPC Packages",
    "href": "/ppc-packages"
  },
  {
    "label": "Social Media Packages",
    "href": "/social-media-packages"
  }
];

const INCLUDES = [
  "Profile and citation management",
  "Local content and links",
  "Monthly ranking report",
  "Dedicated account manager",
  "Clear monthly reporting",
  "No hidden fees"
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "Local SEO Packages to Improve Google Maps Rankings & Generate More Leads",
  "intro": [
    "We offer tailor-made local SEO services depending on your industry type, target regions, competition, and marketing goals. Be it Google Business Profile optimization, keyword research, location-based content creation, citation management and more – our experts concentrate on those tasks that help to improve your local search visibility.",
    "We have over 80 local SEO experts in our company and have been working for a long time in India. We use our SEO expertise in combination with a practical approach towards digital marketing to help your business grow by reaching out to customers via local searches."
  ],
  "items": [
    {
      "t": "",
      "b": "Local SEO strategies for businesses targeting specific locations."
    },
    {
      "t": "",
      "b": "Google Business Profile and Google Maps optimization."
    },
    {
      "t": "",
      "b": "Local keyword research and location-based content development."
    },
    {
      "t": "",
      "b": "Technical SEO, citation building, and reputation management."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Why Is Local SEO Important for Your Business?",
  "intro": [
    "Local customers often use Google Search and Google Maps to find nearby businesses, compare services, check reviews, and make purchasing decisions. A strong local SEO strategy helps your business become more discoverable when customers search for relevant products and services in your area.",
    "Here are some important reasons to invest in professional local SEO services."
  ],
  "items": [
    {
      "t": "Improve Google Maps Visibility",
      "b": "Google Maps plays an important role in helping customers discover nearby businesses. Optimizing your Google Business Profile with accurate information, relevant categories, business descriptions, photographs, and service details can improve your chances of appearing in relevant local searches."
    },
    {
      "t": "Reach Customers Searching Near You",
      "b": "Location searches allow businesses to target those customers who are actively searching for products/services in the nearby vicinity. Through location-based keywords and service areas, we aim to make your website more relevant to location-based searches."
    },
    {
      "t": "Generate More Calls and Enquiries",
      "b": "Visibility through local search creates opportunities for phone calls, website visits, directions, bookings, and inquiries. Our optimization process centers around making it simpler for potential customers to learn about your services and reach out to you."
    },
    {
      "t": "Build Local Brand Trust",
      "b": "The customers usually look for the information about the company along with their rating and reviews on the Internet before making a decision to use a particular service."
    },
    {
      "t": "Compete with Other Local Businesses",
      "b": "Your competitors may already be investing in local search optimization. A structured SEO strategy helps identify keyword opportunities, content gaps, and areas where your business can improve its local online presence."
    },
    {
      "t": "Support Long-Term Organic Growth",
      "b": "Local SEO is an ongoing process that requires regular monitoring and improvements. Consistent Google Business Profile management, content optimization, technical SEO, and local link-building activities can support sustainable visibility over time."
    }
  ],
  "outro": [],
  "table": null
};

/* audience */
const S03: Sec = {
  "h": "Who Can Benefit from Our Local SEO Packages?",
  "intro": [
    "Our Local SEO Packages are suitable for businesses that depend on customers from specific cities, neighbourhoods, or service areas. We customize optimization activities according to the type of business, customer behaviour, and local competition."
  ],
  "items": [
    {
      "t": "Local Shops and Retail Businesses",
      "b": "Retail stores, showrooms, grocery shops, boutiques, and other local establishments can use local SEO to improve their visibility when nearby customers search for relevant products."
    },
    {
      "t": "Healthcare and Clinics",
      "b": "Doctors, dentists, diagnostic centres, physiotherapy clinics, and healthcare providers can benefit from location-focused optimization that helps patients discover their services and contact their facilities."
    },
    {
      "t": "Home Service Providers",
      "b": "Electricians, plumbers, interior designers, repair professionals, and other service providers can target location-specific searches to reach customers looking for services within their operating areas."
    },
    {
      "t": "Educational Institutes and Coaching Centres",
      "b": "Schools, colleges, training centres, and coaching institutes can improve their local search presence to connect with students and parents searching for educational opportunities nearby."
    },
    {
      "t": "Real Estate Businesses",
      "b": "Property consultants, real estate agencies, builders, and property developers can target location-based keywords to reach people searching for residential and commercial properties in specific areas."
    },
    {
      "t": "Restaurants and Hospitality Businesses",
      "b": "Restaurants, cafés, hotels, and hospitality businesses can improve their local discoverability through Google Business Profile optimization, accurate business details, customer reviews, and relevant local content."
    },
    {
      "t": "Multi-Location Businesses",
      "b": "Companies operating across different cities or neighbourhoods need a structured local SEO strategy for each branch. We help businesses organize location-specific optimization activities to improve their presence across multiple service areas."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "What's Included in Our Local SEO Packages?",
  "intro": [
    "At Hover Business Services LLP, we understand that local search performance depends on several connected factors. Our SEO specialists work across Google Business Profile, website optimization, local citations, content development, and performance monitoring to improve your business's local presence."
  ],
  "items": [
    {
      "t": "Local SEO Audit and Strategy",
      "b": "Every successful campaign begins with understanding your existing online presence and identifying areas that need improvement. Our activities include:",
      "list": [
        "Complete local SEO website audit.",
        "Google Business Profile performance review.",
        "Competitor and local market analysis.",
        "Local keyword research.",
        "Search intent identification.",
        "Target location analysis.",
        "Customized local SEO roadmap."
      ]
    },
    {
      "t": "Google Business Profile Optimization",
      "b": "Google Business Profile is an important part of local search marketing. We optimize your profile to help customers understand your business and access accurate information. Our activities include:",
      "list": [
        "Google Business Profile setup and optimization.",
        "Business category selection.",
        "Business description optimization.",
        "Products and services information.",
        "Business hours and contact details.",
        "Relevant business photographs.",
        "Regular Google Business Profile posts.",
        "Profile information monitoring."
      ]
    },
    {
      "t": "Local Keyword Research",
      "b": "Targeting relevant location-based search terms helps your business reach customers looking for specific products and services in your area. Our activities include:",
      "list": [
        "Primary and secondary local keyword research.",
        "City and neighbourhood keyword targeting.",
        "Service-based keyword identification.",
        "Near-me search term analysis.",
        "Competitor keyword research.",
        "Search intent mapping.",
        "Keyword placement recommendations."
      ]
    },
    {
      "t": "On-Page and Technical Local SEO",
      "b": "Your website needs to provide clear information about your business, services, and operating locations. We optimize important website elements to improve relevance and search engine accessibility. Our activities include:",
      "list": [
        "Local landing page optimization.",
        "SEO title and meta description updates.",
        "Heading tag optimization.",
        "Location-based content improvements.",
        "Internal linking.",
        "Local business schema markup.",
        "Mobile-friendliness improvements.",
        "Website speed and Core Web Vitals analysis.",
        "Sitemap and indexing checks."
      ]
    },
    {
      "t": "Local Citations and Business Listings",
      "b": "Consistent business information across trusted online directories helps customers and search engines identify your business correctly. Our activities include:",
      "list": [
        "Local business directory submissions.",
        "Business citation building.",
        "NAP consistency management.",
        "Duplicate listing identification.",
        "Business information updates.",
        "Relevant industry listing management.",
        "Bing Places optimization."
      ]
    },
    {
      "t": "Local Content Development",
      "b": "Relevant content helps your website address customer questions and target location-specific search opportunities. Our activities include:",
      "list": [
        "Location-specific landing page content.",
        "Local service page optimization.",
        "SEO-friendly blog writing.",
        "Area-based keyword integration.",
        "Existing content updates.",
        "Local topic research.",
        "Content gap analysis."
      ]
    },
    {
      "t": "Review and Online Reputation Management",
      "b": "Customer reviews can influence how people perceive your business before contacting you. A consistent review management strategy helps strengthen your online reputation. Our activities include:",
      "list": [
        "Review monitoring.",
        "Customer feedback strategy.",
        "Review response recommendations.",
        "Reputation improvement planning.",
        "Google Business Profile review analysis.",
        "Brand reputation monitoring."
      ]
    },
    {
      "t": "Local Link Building",
      "b": "Relevant backlinks can support your website's authority and help establish stronger connections within your industry and local market. Our activities include:",
      "list": [
        "Local backlink research.",
        "Relevant website outreach.",
        "Industry directory opportunities.",
        "Guest posting.",
        "Local business partnerships.",
        "Competitor backlink analysis."
      ]
    },
    {
      "t": "Reporting and Performance Tracking",
      "b": "We believe clients should have a clear understanding of their campaign performance. Our reporting approach focuses on relevant SEO metrics and measurable business activities. Our activities include:",
      "list": [
        "Local keyword ranking monitoring.",
        "Google Business Profile insights.",
        "Google Search Console analysis.",
        "Google Analytics 4 tracking.",
        "Organic traffic monitoring.",
        "Calls and enquiry tracking, where configured.",
        "Monthly SEO performance reports.",
        "Ongoing optimization recommendations."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* plans */
const S05: Sec = {
  "h": "Local SEO Plans Designed Around Your Business Goals",
  "intro": [
    "Every business has different local marketing requirements. A single-location shop may need Google Maps optimization, while a company with multiple branches may require location-specific landing pages and a broader citation management strategy.",
    "At Hover Business Services LLP, we provide customized local SEO plans based on your business objectives, target audience, competition, and service locations."
  ],
  "items": [
    {
      "t": "Starter Local SEO Package",
      "b": "Designed for small businesses and single-location companies that want to establish a stronger local search presence. Key activities include:",
      "list": [
        "Google Business Profile optimization.",
        "Basic local keyword research.",
        "Local business listing management.",
        "NAP consistency checks.",
        "On-page SEO improvements.",
        "Local ranking monitoring.",
        "Performance reporting."
      ]
    },
    {
      "t": "Growth Local SEO Package",
      "b": "Suitable for businesses looking to improve local visibility, strengthen website performance, and generate more relevant enquiries. Key activities include:",
      "list": [
        "Everything included in the Starter plan.",
        "Advanced local keyword research.",
        "Location page optimization.",
        "Local content development.",
        "Citation building.",
        "Review management strategy.",
        "Local backlink development.",
        "Detailed performance analysis."
      ]
    },
    {
      "t": "Multi-Location SEO Package",
      "b": "Designed for businesses, franchises, and service providers managing multiple branches or operating locations. Key activities include:",
      "after": "The final deliverables and pricing can be customized according to the number of locations, website requirements, competition, and campaign objectives.",
      "list": [
        "Location-specific SEO strategy.",
        "Multiple Google Business Profile management.",
        "Individual location page optimization.",
        "Local keyword mapping.",
        "Citation consistency management.",
        "Location-based content planning.",
        "Local authority building.",
        "Centralized performance reporting."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* whyus */
const S06: Sec = {
  "h": "Why Choose Hover Business Services LLP for Local SEO Packages?",
  "intro": [
    "Selecting the right digital marketing agency can make a difference in how effectively your business approaches local search optimization. At Hover Business Services LLP, we combine experienced professionals, technical capabilities, and transparent communication to support your digital marketing goals."
  ],
  "items": [
    {
      "t": "80+ In-House Specialists",
      "b": "Our team includes more than 80 professionals with expertise in SEO, PPC, social media optimization, website development, applications, and branding. This allows us to manage multiple digital marketing requirements under one roof."
    },
    {
      "t": "5+ Years of Experience",
      "b": "With over five years of experience in the digital marketing industry, we understand how to develop strategies according to different business requirements, industries, and competitive markets."
    },
    {
      "t": "1,500+ Businesses Served",
      "b": "We have served more than 1,500 businesses across India. Our experience across different industries helps us understand varied marketing objectives and customer acquisition requirements."
    },
    {
      "t": "Transparent Communication",
      "b": "We believe in honest communication and clear reporting. Our team keeps clients informed about campaign activities, progress, and optimization priorities without unnecessary jargon or confusing information."
    },
    {
      "t": "Complete Digital Marketing Services",
      "b": "Apart from local SEO, we provide PPC, SEO, SMO, website development, app development, and branding services. This gives businesses access to a complete digital marketing and technology team."
    },
    {
      "t": "Continuous Campaign Optimization",
      "b": "Local SEO is not a one-time activity. We continuously review campaign performance, monitor search visibility, identify improvement opportunities, and refine optimization activities according to business goals."
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S07: Sec = {
  "h": "Our Four-Step Local SEO Process",
  "intro": [
    "We follow an organized approach to ensure that every campaign has clear objectives, planned activities, and measurable performance indicators."
  ],
  "items": [
    {
      "t": "Business and Location Analysis",
      "b": "We understand your services, business category, target locations, website condition, and competitors. This helps us identify local search opportunities and existing visibility gaps."
    },
    {
      "t": "Local SEO Strategy Development",
      "b": "Our specialists prepare a customized roadmap covering local keyword research, Google Business Profile optimization, website improvements, citation management, and content requirements."
    },
    {
      "t": "Implementation and Optimization",
      "b": "We implement the planned SEO activities, including profile optimization, local landing page improvements, technical SEO, content optimization, and local authority-building efforts."
    },
    {
      "t": "Monitoring and Performance Improvement",
      "b": "We regularly evaluate keyword performance, organic traffic, Google Business Profile insights, and customer enquiries. Based on the findings, we recommend further improvements to keep the campaign aligned with your business objectives."
    },
    {
      "t": "Improve Your Local Search Visibility with Hover Business Services LLP",
      "b": "Your next customer could be searching for your products or services right now. A well-planned local SEO strategy helps your business become easier to discover, builds trust with potential customers, and creates more opportunities for enquiries. At Hover Business Services LLP, we focus on customized Local SEO Packages that address your business requirements through Google Business Profile optimization, local keyword research, website improvements, citation management, content development, and continuous performance tracking. Whether you want to improve Google Maps visibility, reach customers in a particular city, or manage SEO across multiple business locations, our team can help develop a strategy aligned with your growth objectives."
    },
    {
      "t": "Ready to strengthen your local online presence?",
      "b": "Talk to our team and explore the right local SEO strategy for your business."
    }
  ],
  "outro": [],
  "table": null
};

/* faq */
const S08: Sec = {
  "h": "Frequently Asked Questions About Local SEO Packages",
  "intro": [],
  "items": [
    {
      "t": "What are Local SEO Packages?",
      "b": "Local SEO Packages are structured digital marketing services designed to improve a business's visibility in location-based search results. They generally include Google Business Profile optimization, local keyword research, citation building, website optimization, local content, and performance monitoring."
    },
    {
      "t": "How much do Local SEO Packages cost?",
      "b": "The cost depends on your business category, website requirements, target locations, competition, and the amount of optimization required. At Hover Business Services LLP, we offer customized SEO plans based on individual business goals and marketing requirements."
    },
    {
      "t": "How long does local SEO take to show results?",
      "b": "Local SEO results depend on your existing online presence, industry competition, location, and optimization requirements. Some improvements may become noticeable within the first few months, while stronger and more consistent local visibility generally requires continuous optimization."
    },
    {
      "t": "Do your Local SEO Packages include Google Business Profile optimization?",
      "b": "Yes. Google Business Profile optimization is an important part of our local SEO services. Activities can include business information updates, category selection, service details, profile content, photographs, and ongoing profile monitoring."
    },
    {
      "t": "Can local SEO help my business get more calls and enquiries?",
      "b": "Yes. Local SEO helps your business become more discoverable when customers search for relevant products and services nearby. Better local visibility can create opportunities for phone calls, website visits, direction requests, bookings, and enquiries."
    },
    {
      "t": "Is local SEO suitable for businesses with multiple locations?",
      "b": "Yes. Multi-location businesses can benefit from individual location pages, Google Business Profile management, local keyword targeting, and consistent business information across directories. The strategy can be structured according to each branch's location and service area."
    },
    {
      "t": "Do I need a website for local SEO?",
      "b": "A website is not always mandatory to establish a Google Business Profile, but having a well-optimized website can strengthen your online presence. It provides additional information about your services, business locations, expertise, and customer offerings."
    },
    {
      "t": "What is NAP consistency in local SEO?",
      "b": "NAP stands for Name, Address, and Phone Number. It refers to maintaining accurate and consistent business contact information across your website, Google Business Profile, and relevant online directories."
    },
    {
      "t": "Can local SEO improve Google Maps rankings?",
      "b": "Local SEO activities can help improve your business's relevance and overall local search presence. Google considers factors such as relevance, distance, and prominence when determining local results, so rankings cannot be guaranteed through optimization alone."
    },
    {
      "t": "Why should I choose Hover Business Services LLP for local SEO?",
      "b": "Hover Business Services LLP offers experienced in-house specialists, transparent communication, customized digital marketing strategies, and continuous optimization. With 80+ specialists and experience serving businesses across India, we help businesses strengthen their online presence through organized SEO activities."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Package, BadgeCheck, Wallet, CalendarCheck, BarChart3, Headphones];

/* ============================== Page ============================== */

export default async function LocalSeoPackagesPage() {
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
      <Audience s={S03} tone="white" />
      <Cards s={S04} tone="soft" v="rows" />
      <Plans s={S05} tone="surface" />
      <WhyUs s={S06} />
      <Steps s={S07} tone="white" v="rail" />
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
