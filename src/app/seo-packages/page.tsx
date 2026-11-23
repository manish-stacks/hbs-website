import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, CalendarCheck, Check, ChevronRight, Headphones, Package, Phone, Plus, Users, Wallet,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "SEO Packages That Drive Rankings & Business Growth | HBS",
    description: "Explore affordable SEO Packages by Hover Business Services LLP. Improve Google rankings, increase organic traffic and generate quality business leads.",
    path: "/seo-packages",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "SEO Packages",
  "eyebrow": "Packages",
  "tagline": "Your customers are searching online for products and services like yours. The question is whether they can find your business before they find your competitors. At Hover Business Services LLP, we offer result-oriented SEO Packages designed to improve your website's search engine visibility, attract relevant visitors, and generate quality business enquiries."
};

const HERO: { plans: string[] } = {
  "plans": [
    "Local SEO",
    "National SEO",
    "Ecommerce SEO"
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
  },
  {
    "label": "Social Media Packages",
    "href": "/social-media-packages"
  }
];

const INCLUDES = [
  "Defined keyword and page scope",
  "Monthly deliverables list",
  "Transparent reporting",
  "Dedicated account manager",
  "Clear monthly reporting",
  "No hidden fees"
];

/* Page sections, in the order they appear on the page */

/* lead */
const S01: Sec = {
  "h": "SEO Packages That Drive Rankings, Traffic & Business Growth",
  "intro": [
    "Our SEO strategies combine technical expertise, keyword research, content optimization, and ethical link-building practices to help businesses build a stronger online presence. Whether you are a startup, small business, established company, or ecommerce brand, our SEO solutions are structured around your business goals, target audience, and competition.",
    "With 80+ in-house specialists and experience serving businesses across India, we focus on delivering SEO strategies that support sustainable online growth. From improving existing website performance to building visibility in competitive search results, our team works continuously to strengthen your digital presence."
  ],
  "items": [
    {
      "t": "",
      "b": "Comprehensive SEO strategies covering technical, on-page, and off-page optimization."
    },
    {
      "t": "",
      "b": "80+ in-house specialists working across digital marketing and technology."
    },
    {
      "t": "",
      "b": "Customized SEO plans based on business requirements and target locations."
    },
    {
      "t": "",
      "b": "Transparent reporting and continuous campaign improvements."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S02: Sec = {
  "h": "Why Does Your Business Need Professional SEO Packages?",
  "intro": [
    "However, having a website alone does not ensure the formation of your online business. The website should also rank itself when customers are looking for a product or service in the search engines. Search Engine Optimization allows you to rank your website without completely relying on advertisements.",
    "The main aspects that affect your search engine ranking and customer engagement are incorporated in our SEO Packages."
  ],
  "items": [
    {
      "t": "Improve Organic Search Rankings",
      "b": "A properly planned SEO strategy helps your website target relevant keywords and improve its position in Google search results. We identify valuable search terms, optimize website pages, and strengthen content to improve search visibility."
    },
    {
      "t": "Attract Relevant Website Traffic",
      "b": "Getting visitors is not enough if they are not interested in your offerings. Our keyword research process focuses on search intent, helping your website reach users who are actively looking for your products or services."
    },
    {
      "t": "Generate Quality Business Leads",
      "b": "SEO supports business growth by connecting your brand with potential customers during their research and purchasing journey. Through landing page optimization, relevant content, and clear calls to action, we help improve opportunities for enquiries and conversions."
    },
    {
      "t": "Build Long-Term Online Visibility",
      "b": "Unlike paid campaigns that generally stop generating traffic when advertising budgets end, organic search optimization can continue delivering value over time. Consistent content development, technical improvements, and quality backlinks help strengthen your website's long-term presence."
    },
    {
      "t": "Build Brand Credibility and Trust",
      "b": "Websites that provide useful information, a positive user experience, and relevant answers can build stronger relationships with their audiences. Our SEO strategies focus on improving website quality and establishing your business as a relevant choice within your industry."
    }
  ],
  "outro": [],
  "table": null
};

/* audience */
const S03: Sec = {
  "h": "Who Can Benefit from Our SEO Packages?",
  "intro": [
    "Our SEO Services Packages are suitable for businesses across different industries and growth stages. We develop strategies according to your market, competition, website condition, and customer acquisition goals."
  ],
  "items": [
    {
      "t": "Startups and Small Businesses",
      "b": "New businesses need a strong online foundation to compete with established brands. Our SEO solutions help startups target relevant keywords, improve website structure, and develop organic visibility without depending completely on paid promotions."
    },
    {
      "t": "Local and Multi-Location Businesses",
      "b": "If your business depends on customers from particular cities or neighbourhoods, local SEO can help improve your visibility in location-based searches. We work on Google Business Profile optimization, local keyword targeting, business citations, and location-specific website content."
    },
    {
      "t": "Ecommerce Businesses",
      "b": "Online stores need optimized product pages, category descriptions, website navigation, and technical performance. Our ecommerce SEO strategies focus on improving product discovery, organic shopping traffic, and opportunities for online sales."
    },
    {
      "t": "Corporate and B2B Companies",
      "b": "B2B businesses often deal with longer customer decision-making processes. We develop keyword-focused content and website optimization strategies that help businesses reach decision-makers, communicate their expertise, and generate relevant enquiries."
    },
    {
      "t": "Established Businesses",
      "b": "Businesses already receiving website traffic may need additional improvements to compete for valuable search terms. Our SEO specialists identify ranking gaps, technical issues, content opportunities, and areas where optimization can improve overall performance."
    }
  ],
  "outro": [],
  "table": null
};

/* cards */
const S04: Sec = {
  "h": "What's Included in Our SEO Packages?",
  "intro": [
    "At Hover Business Services LLP, we understand that every website has different optimization requirements. Our SEO Packages cover the essential activities needed to improve website performance, search visibility, and organic growth."
  ],
  "items": [
    {
      "t": "Website Audit and SEO Strategy",
      "b": "We begin by understanding your website, business objectives, competitors, and target audience. Our team evaluates existing website performance and identifies opportunities for improvement.",
      "list": [
        "Complete website SEO audit.",
        "Competitor analysis.",
        "Keyword research and mapping.",
        "Search intent analysis.",
        "Website performance assessment.",
        "Customized SEO action plan."
      ]
    },
    {
      "t": "Technical SEO Optimization",
      "b": "Technical SEO ensures that search engines can efficiently crawl, understand, and index your website. We identify technical problems that may affect website performance and work towards improving the overall website structure.",
      "list": [
        "Website crawling and indexing analysis.",
        "XML sitemap optimization.",
        "Robots.txt configuration.",
        "Broken link identification.",
        "Website speed optimization.",
        "Core Web Vitals improvements.",
        "Mobile-friendliness analysis.",
        "Canonical tag and redirect management.",
        "Schema markup implementation."
      ]
    },
    {
      "t": "On-Page SEO Optimization",
      "b": "On-page SEO improves individual website pages so they are relevant to targeted search queries and provide a better user experience.",
      "list": [
        "SEO-friendly title tags and meta descriptions.",
        "Heading structure optimization.",
        "Primary and secondary keyword placement.",
        "Content optimization.",
        "Image alt text optimization.",
        "Internal linking improvements.",
        "URL structure optimization.",
        "Landing page content recommendations."
      ]
    },
    {
      "t": "Off-Page SEO and Link Building",
      "b": "Building website authority requires consistent efforts to establish relevant and trustworthy online connections. Our off-page SEO activities focus on improving your website's authority through ethical link-building methods.",
      "list": [
        "Quality backlink acquisition.",
        "Relevant website outreach.",
        "Guest posting opportunities.",
        "Business listing submissions.",
        "Brand mention development.",
        "Competitor backlink analysis.",
        "Link profile monitoring."
      ]
    },
    {
      "t": "SEO Content Optimization",
      "b": "Useful content plays an important role in attracting search traffic and answering customer questions. Our content strategy focuses on developing relevant information that matches user search intent.",
      "list": [
        "SEO-friendly website content.",
        "Blog and article optimization.",
        "Keyword-focused landing pages.",
        "Content gap analysis.",
        "Existing content updates.",
        "LSI and semantic keyword integration.",
        "Topic and content planning."
      ]
    },
    {
      "t": "Local SEO Services",
      "b": "For businesses targeting customers in specific locations, local SEO helps improve visibility in relevant geographic searches.",
      "list": [
        "Google Business Profile optimization.",
        "Local keyword research.",
        "Business directory listings.",
        "NAP consistency management.",
        "Location-based landing pages.",
        "Local citation building.",
        "Review and reputation strategy."
      ]
    },
    {
      "t": "Reporting and Performance Monitoring",
      "b": "We believe clients should understand the progress of their SEO campaigns. Our reporting process focuses on important performance indicators and actionable recommendations.",
      "list": [
        "Organic traffic monitoring.",
        "Keyword ranking analysis.",
        "Google Search Console performance.",
        "Google Analytics 4 tracking.",
        "Backlink monitoring.",
        "Website health analysis.",
        "Monthly performance reports.",
        "Continuous SEO strategy improvements."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* plans */
const S05: Sec = {
  "h": "Choose the Right SEO Package for Your Business",
  "intro": [
    "Not every business requires the same level of SEO support. Your industry, competition, website size, target audience, and business goals determine the type of optimization required.",
    "At Hover Business Services LLP, we offer customized SEO pricing plans according to individual business requirements."
  ],
  "items": [
    {
      "t": "Local SEO Packages",
      "b": "Designed for businesses that want to reach customers within specific cities, regions, or service areas. Key focus areas:",
      "list": [
        "Suitable for: Clinics, restaurants, educational institutes, service providers, retailers, and local businesses.",
        "Local keyword targeting.",
        "Google Business Profile optimization.",
        "Local business citations.",
        "Location-specific content.",
        "Google Maps visibility.",
        "Local search performance monitoring."
      ]
    },
    {
      "t": "National SEO Packages",
      "b": "Suitable for companies looking to reach customers across multiple cities and regions within India. Key focus areas:",
      "list": [
        "Suitable for: Growing companies, professional service providers, manufacturers, and established brands.",
        "National keyword research.",
        "Comprehensive technical SEO.",
        "On-page and off-page optimization.",
        "Content development.",
        "Competitor analysis.",
        "Authority building."
      ]
    },
    {
      "t": "Ecommerce SEO Packages",
      "b": "Created for online businesses that want to improve product and category visibility and attract customers through organic search. Key focus areas:",
      "list": [
        "Suitable for: Online retailers, D2C brands, ecommerce websites, and online marketplaces.",
        "Product page optimization.",
        "Category page optimization.",
        "Ecommerce technical SEO.",
        "Product schema markup.",
        "Website navigation improvements.",
        "Organic traffic growth."
      ]
    },
    {
      "t": "Enterprise SEO Packages",
      "b": "Designed for larger websites and businesses with complex website structures, multiple service categories, or competitive search markets. Key focus areas:",
      "list": [
        "Suitable for: Large companies, established organizations, and businesses managing multiple websites or locations.",
        "Advanced technical SEO.",
        "Large-scale keyword mapping.",
        "Website architecture optimization.",
        "Content strategy development.",
        "Competitor benchmarking.",
        "Ongoing performance analysis."
      ]
    }
  ],
  "outro": [],
  "table": null
};

/* whyus */
const S06: Sec = {
  "h": "Why Choose Hover Business Services LLP for SEO Packages?",
  "intro": [
    "Choosing the right SEO partner is an important business decision. You need a team that understands your objectives, communicates clearly, and continuously works towards improving your online performance.",
    "Here is why businesses choose Hover Business Services LLP for their digital marketing requirements."
  ],
  "items": [
    {
      "t": "80+ In-House Digital Specialists",
      "b": "Our team includes professionals with expertise in SEO, PPC, social media, website development, applications, and branding. Having these capabilities in-house allows us to coordinate different digital activities under one agency."
    },
    {
      "t": "5+ Years of Industry Experience",
      "b": "With more than five years of experience in digital marketing, we understand the importance of adapting strategies according to changing business requirements, search trends, and competition."
    },
    {
      "t": "1,500+ Businesses Served",
      "b": "We have served more than 1,500 businesses across different industries and markets, including India. This experience helps us understand different business requirements and digital growth challenges."
    },
    {
      "t": "Transparent Communication",
      "b": "We believe in keeping our clients informed throughout their SEO campaigns. Our approach focuses on clear communication, honest updates, and understandable performance reporting."
    },
    {
      "t": "Complete Digital Marketing Solutions",
      "b": "From SEO and PPC to SMO, website development, application development, and branding, we provide multiple digital services under one roof. This allows businesses to manage their digital growth requirements through a single agency."
    },
    {
      "t": "Continuous Optimization",
      "b": "SEO requires ongoing attention. Our team monitors campaign performance, evaluates opportunities, and recommends improvements to keep optimization activities aligned with your business goals."
    }
  ],
  "outro": [],
  "table": null
};

/* steps */
const S07: Sec = {
  "h": "Our SEO Working Process: From Planning to Performance",
  "intro": [
    "We follow a structured four-step approach to make SEO campaigns organized, measurable, and focused on business growth."
  ],
  "items": [
    {
      "t": "Website Audit and Discovery",
      "b": "We analyze your website, existing search performance, competitors, keywords, and target audience. This helps us identify technical issues and opportunities that can influence your SEO strategy."
    },
    {
      "t": "Strategy and Roadmap",
      "b": "Based on the audit, we develop a customized SEO roadmap. It includes keyword priorities, technical improvements, content requirements, link-building activities, and performance objectives."
    },
    {
      "t": "Implementation and Optimization",
      "b": "Our specialists begin implementing the planned activities, including technical SEO, on-page improvements, content optimization, and off-page activities."
    },
    {
      "t": "Monitoring and Continuous Improvement",
      "b": "We regularly monitor keyword rankings, organic traffic, website performance, and conversion-related metrics. Based on the findings, we refine the strategy and identify the next opportunities for improvement."
    },
    {
      "t": "Build a Stronger Online Presence with the Right SEO Strategy",
      "b": "A website requires much more than a mere online presence. Your website should have a strategy for attracting visitors and encouraging them to take action. At Hover Business Services LLP, we employ expertise in SEO, technology, content optimization, and regular performance tracking to aid your business in improving its online visibility. Whatever your goal – be it local search engine ranking, national exposure, or improving your ecommerce website – our SEO Packages can help you achieve your objectives. Are you ready to enhance the search visibility of your website? Contact us and create an SEO strategy for your business."
    }
  ],
  "outro": [],
  "table": null
};

/* faq */
const S08: Sec = {
  "h": "Frequently Asked Questions About SEO Packages",
  "intro": [],
  "items": [
    {
      "t": "What are SEO Packages?",
      "b": "SEO Packages are structured search engine optimization services designed to improve a website's organic visibility. They generally include keyword research, technical SEO, on-page optimization, content improvements, link building, and performance monitoring."
    },
    {
      "t": "How much do SEO Packages cost?",
      "b": "The cost of SEO Packages depends on your business requirements, website size, target keywords, industry competition, and target locations. At Hover Business Services LLP, we provide customized SEO plans based on your goals and optimization requirements."
    },
    {
      "t": "How long does SEO take to show results?",
      "b": "SEO is a long-term process, and results depend on your website's existing condition, competition, content quality, and optimization efforts. Some improvements may become visible within the first few months, while achieving stronger and more consistent organic performance generally requires ongoing work."
    },
    {
      "t": "Do you offer monthly SEO Packages?",
      "b": "Yes. Businesses can choose monthly SEO services according to their requirements. Our team works on planned optimization activities, tracks campaign performance, and provides regular updates to help clients understand their progress."
    },
    {
      "t": "Are SEO Packages suitable for small businesses?",
      "b": "Yes. SEO can help small businesses improve online visibility, reach relevant audiences, and generate organic enquiries. A suitable SEO strategy can be developed according to the business's budget, location, industry, and competition."
    },
    {
      "t": "What is included in your SEO Services Packages?",
      "b": "Our SEO services can include website audits, keyword research, technical SEO, on-page optimization, content optimization, link building, local SEO, and performance reporting. The final deliverables depend on the selected SEO plan."
    },
    {
      "t": "Can SEO help my business generate more leads?",
      "b": "Yes. SEO helps businesses connect with people actively searching for relevant products and services. By targeting suitable keywords and optimizing landing pages, businesses can create more opportunities for enquiries and conversions."
    },
    {
      "t": "Do you provide Local SEO and Ecommerce SEO?",
      "b": "Yes. We provide SEO solutions for local businesses and ecommerce websites. Local SEO focuses on location-based searches and Google Business Profile, while ecommerce SEO focuses on product pages, category pages, website structure, and organic shopping visibility."
    },
    {
      "t": "Why should I choose Hover Business Services LLP?",
      "b": "Hover Business Services LLP brings together 80+ in-house specialists, more than five years of experience, and a range of digital marketing and technology services. We focus on transparent communication, customized strategies, and continuous optimization."
    },
    {
      "t": "Can I customize my SEO Package?",
      "b": "Yes. SEO requirements can change as your business grows. Our team can discuss your changing goals, target locations, keyword requirements, and website needs to develop an appropriate SEO strategy."
    }
  ],
  "outro": [],
  "table": null
};

const ICONS = [Package, BadgeCheck, Wallet, CalendarCheck, BarChart3, Headphones];

/* ============================== Page ============================== */

export default async function SeoPackagesPage() {
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
      <Audience s={S03} tone="white" />
      <Cards s={S04} tone="soft" v="bento" />
      <Plans s={S05} tone="surface" />
      <WhyUs s={S06} />
      <Steps s={S07} tone="white" v="line" />
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
