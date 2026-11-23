import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Check, ChevronRight, Compass, Lamp, MapPin, Phone, Plus, Search, Star, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Digital Marketing for Home Decor & Furniture Brands | HBS",
    description: "Scale your home decor or furniture brand online. Visual commerce, Pinterest/Instagram ads, interior design leads, and eCommerce growth by HBS.",
    path: "/home-decor-marketing",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Industries",
  "href": "/industries"
};

const PAGE = {
  "title": "Digital Marketing for Home Decor & Interior Furnishings",
  "eyebrow": "Visual Commerce & Luxury Living Growth",
  "tagline": "High-ticket interior design consultations, aspirational visual commerce, and omni-channel sales for home decor brands.",
  "intro": "Home decor and interior furnishing purchases are profoundly emotional, aesthetic, and visual decisions. Hover Business Services LLP builds premium digital marketing funnels for luxury furniture makers, boutique home decor brands, architectural lighting studios, and interior designers. We combine Pinterest and Instagram visual curation, 3D visual commerce, and local showroom footfall acquisition."
};

type HeroData = { icon: string; journey: string[] };
const HERO: HeroData = {
  "icon": "Lamp",
  "journey": [
    "handmade ceramic vases",
    "Pins the idea",
    "Orders online"
  ]
};

const STATS: [string, string][] = [
  [
    "₹35Cr+",
    "Decor & Furniture Revenue Generated"
  ],
  [
    "4.6x",
    "Average ROAS on Visual Ad Campaigns"
  ],
  [
    "+160%",
    "Showroom Walk-in Consultation Surge"
  ]
];

const BENEFITS = [
  {
    "t": "Aspirational Visual-First Social Storytelling",
    "b": "Immersive room-setting photography, styling reels, and architectural lighting videos that ignite interior decor aspirations."
  },
  {
    "t": "High-Ticket Consultation & Showroom Footfall",
    "b": "Localized lead funnels that guide luxury homeowners directly into booking private showroom visits and interior design consultations."
  },
  {
    "t": "Architect & Interior Designer (B2B Trade) Funnels",
    "b": "Target commercial architects, hospitality procurement teams, and interior stylists for high-volume trade catalog discounts."
  },
  {
    "t": "Visual Search & Google Shopping Optimization",
    "b": "Dominate Google Merchant Center, Pinterest Visual Search, and high-intent commercial keywords for furniture and decor."
  },
  {
    "t": "Augmented Reality (AR) & 3D Spatial Presentation",
    "b": "Enable customers to visualize furniture dimensions and fabrics within their own living rooms via interactive 3D web models."
  },
  {
    "t": "High Average Order Value (AOV) Cross-Selling",
    "b": "Smart product bundle architectures (\"Shop The Room\") that encourage shoppers to purchase complete room sets rather than single items."
  }
];

const INCLUDES = [
  "Visual Performance Advertising (Meta & Pinterest)",
  "Google Shopping & High-Intent Decor SEO",
  "Local Showroom Footfall & Experience Booking",
  "Architect & Interior Trade Partner Programs",
  "Aspirational Content & Influencer Collaborations",
  "VIP Email & WhatsApp Concierge Marketing"
];

const PROCESS = [
  {
    "t": "Brand Aesthetic & Catalog Audit",
    "b": "We audit your product margins, hero collection lines, showroom locations, and existing photographic visual assets."
  },
  {
    "t": "Visual Storefront & Merchant Center Setup",
    "b": "We optimize your ecommerce catalog feeds, implement \"Shop The Look\" bundles, and configure high-intent search keywords."
  },
  {
    "t": "Multi-Channel Visual Ad Launch",
    "b": "We deploy room-reveal reels on Instagram, inspirational pins on Pinterest, and Performance Max Google Shopping campaigns."
  },
  {
    "t": "Trade Expansion & Footfall Optimization",
    "b": "We analyze in-store appointments, ecommerce sales attribution, and architect registrations to scale winning marketing channels."
  }
];

const FAQS = [
  {
    "q": "How do you convince customers to purchase high-ticket furniture online?",
    "a": "We build high-trust visual experiences: high-resolution multi-angle photography, video fabric texture closeups, dimensions visualizers, customer home photo reviews, sample fabric swatch deliveries, and responsive WhatsApp concierge consultations."
  },
  {
    "q": "Can digital marketing drive footfall into our physical furniture showrooms?",
    "a": "Yes! Over 60% of our home decor marketing budgets focus on localized geo-targeted campaigns, inviting high-net-worth homeowners within a 15-km radius to book private in-store design walkthroughs."
  },
  {
    "q": "Which social media platform works best for home decor brands?",
    "a": "Instagram and Pinterest are unmatched for visual inspiration and discovery, while Google Search and Google Shopping capture customers with immediate purchase intent."
  },
  {
    "q": "How do you target interior designers and architects for trade sales?",
    "a": "We deploy specialized B2B LinkedIn and Meta campaigns targeting registered architects and interior designers, inviting them to join your Trade Partner Program for exclusive trade discounts and 3D CAD models."
  },
  {
    "q": "Can you help optimize our Google Merchant Center product feed?",
    "a": "Yes. We manage end-to-end Google Shopping feeds, ensuring all product dimensions, materials, stock availability, and high-res imagery are perfectly formatted for top placement in Google search results."
  },
  {
    "q": "Do you manage influencer marketing collaborations for home reveals?",
    "a": "Yes. We coordinate authentic collaborations with reputable interior stylists, design bloggers, and architects who showcase your pieces in real room makeovers and home tours."
  }
];

const RELATED = [
  {
    "label": "Custom Ecommerce Development",
    "href": "/custom-ecommerce"
  },
  {
    "label": "Social Media Creatives",
    "href": "/social-media-creatives"
  },
  {
    "label": "Graphic Design",
    "href": "/graphic-design"
  },
  {
    "label": "Performance Marketing",
    "href": "/performance-marketing"
  }
];

const OVERVIEW: string[] | null = [
  "Modern homeowners, architects, and interior stylists spend weeks curating moodboards across Instagram, Pinterest, and architectural publications before making high-value furnishing decisions. Brands that rely on generic catalog layouts or flat promotional messaging fail to inspire the aspirational desire required for high-ticket home purchases.",
  "Whether you retail handcrafted bespoke furniture, designer lighting, luxury carpets, artisanal ceramics, or turnkey interior decor solutions, your digital marketing must exude craftsmanship, material quality, and spatial harmony.",
  "Hover Business Services LLP develops omnichannel growth engines for home decor enterprises. We optimize visual discoverability across Google Shopping and Pinterest, deploy thumb-stopping Meta video ads showing styling aesthetics, and build localized campaigns that drive affluent homeowners into physical design experience centers."
];

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Home Decor Brands Need Specialized Marketing",
  "sub": "Capture high-net-worth homeowners and trade architects through aspirational visual storytelling.",
  "items": [
    {
      "t": "Aspirational Visual-First Social Storytelling",
      "b": "Immersive room-setting photography, styling reels, and architectural lighting videos that ignite interior decor aspirations."
    },
    {
      "t": "High-Ticket Consultation & Showroom Footfall",
      "b": "Localized lead funnels that guide luxury homeowners directly into booking private showroom visits and interior design consultations."
    },
    {
      "t": "Architect & Interior Designer (B2B Trade) Funnels",
      "b": "Target commercial architects, hospitality procurement teams, and interior stylists for high-volume trade catalog discounts."
    },
    {
      "t": "Visual Search & Google Shopping Optimization",
      "b": "Dominate Google Merchant Center, Pinterest Visual Search, and high-intent commercial keywords for furniture and decor."
    },
    {
      "t": "Augmented Reality (AR) & 3D Spatial Presentation",
      "b": "Enable customers to visualize furniture dimensions and fabrics within their own living rooms via interactive 3D web models."
    },
    {
      "t": "High Average Order Value (AOV) Cross-Selling",
      "b": "Smart product bundle architectures (\"Shop The Room\") that encourage shoppers to purchase complete room sets rather than single items."
    }
  ]
};

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = {
  "title": "Our Home Decor Marketing Solutions",
  "sub": "End-to-end growth strategies built specifically for luxury lifestyle and interior brands.",
  "items": [
    {
      "t": "Visual Performance Advertising (Meta & Pinterest)",
      "b": "High-ROAS visual ad campaigns across Instagram, Facebook, and Pinterest showcasing room transformations and styling ideas.",
      "f": [
        "Lookbook carousels",
        "Pinterest idea pin ads",
        "Dynamic product retargeting"
      ]
    },
    {
      "t": "Google Shopping & High-Intent Decor SEO",
      "b": "Advanced Google Merchant Center product feed optimization, organic category SEO, and transactional keyword ranking.",
      "f": [
        "Rich product schema markup",
        "Material and dimension keyword targeting",
        "Google Performance Max campaigns"
      ]
    },
    {
      "t": "Local Showroom Footfall & Experience Booking",
      "b": "Geo-fenced local marketing campaigns driving affluent local homeowners into your flagship experience centers.",
      "f": [
        "Google Maps Local 3-Pack optimization",
        "Showroom consultation appointment booking",
        "Local lifestyle event promotions"
      ]
    },
    {
      "t": "Architect & Interior Trade Partner Programs",
      "b": "Dedicated B2B trade portal funnels capturing interior designers, builders, and corporate hospitality buyers.",
      "f": [
        "Trade catalog download gates",
        "Exclusive trade discount workflows",
        "Sample swatch request logistics"
      ]
    },
    {
      "t": "Aspirational Content & Influencer Collaborations",
      "b": "Strategic partnerships with top home interior stylists, celebrity architects, and design influencers for authentic room reveals.",
      "f": [
        "Influencer gifting campaigns",
        "Architect interview features",
        "Home makeover video series"
      ]
    },
    {
      "t": "VIP Email & WhatsApp Concierge Marketing",
      "b": "High-touch automated nurture campaigns offering private design advice, new collection previews, and seasonal catalog drops.",
      "f": [
        "Custom interior styling tips",
        "Abandoned cart WhatsApp concierge",
        "Post-purchase care guides"
      ]
    }
  ]
};

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Sectors Within Home Decor We Elevate",
  "sub": "Engineered for luxury living, furniture manufacturing, and interior decor specialists.",
  "items": [
    {
      "t": "Luxury Furniture Makers & Retailers",
      "b": "Custom sofa makers, solid wood dining table artisans, ergonomic bedding brands, and luxury modular furniture producers."
    },
    {
      "t": "Architectural Lighting & Fixtures",
      "b": "Designer chandelier studios, smart home lighting manufacturers, and bespoke architectural fixture studios."
    },
    {
      "t": "Artisanal Home Accents & Soft Furnishings",
      "b": "Handwoven rugs, artisanal ceramic studios, luxury linen bedding, wall art studios, and bespoke curtain houses."
    },
    {
      "t": "Turnkey Interior Design Studios",
      "b": "Interior architecture firms seeking high-budget residential and commercial interior renovation contracts."
    }
  ]
};

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Choose Hover Business Services LLP for Home Decor?",
  "sub": "Refined lifestyle aesthetics married with hard performance revenue data.",
  "items": [
    {
      "t": "Aesthetic Sophistication",
      "b": "Our design and marketing teams understand spatial balance, architectural materials, color theory, and luxury living aesthetics."
    },
    {
      "t": "High-Ticket Buying Cycle Mastery",
      "b": "We understand that buying a ₹3 Lakh sofa takes multiple touchpoints. We build patient, high-trust nurturing funnels."
    },
    {
      "t": "Omnichannel Attribution",
      "b": "We connect digital marketing spend to both online Shopify transactions and offline physical showroom walk-in consultations."
    },
    {
      "t": "Trade & B2B Growth Engines",
      "b": "We don’t just target retail homeowners; we help you build high-volume recurring trade pipelines with interior architects."
    }
  ]
};

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = {
  "title": "Visual Commerce & Luxury Living Showcase",
  "sub": "High-ticket furniture lookbooks, spatial lighting campaigns, and showroom footfall funnels.",
  "items": [
    {
      "title": "Bespoke Solid Oak Furniture Collection Showcase",
      "tag": "Living Decor",
      "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      "b": "Aspirational room-reveal styling campaigns driving private showroom consultation appointments."
    },
    {
      "title": "Architectural Lighting & Studio Fixtures Campaign",
      "tag": "Architectural",
      "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
      "b": "Google Shopping and Pinterest campaigns targeting interior architects and luxury residential builders."
    },
    {
      "title": "Artisanal Ceramic Decor & Handwoven Rugs Collection",
      "tag": "Handcrafted",
      "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      "b": "Visual commerce funnels featuring high-resolution craftsmanship close-ups and \"Shop The Room\" bundles."
    }
  ]
};

const ICONS = [Compass, Users, BadgeCheck, BarChart3, MapPin, Star];
const IndustryIcon = Lamp;

/* ============================== Page ============================== */

export default async function HomeDecorMarketingPage() {
  const co = await getCompany();

  return (
    <div className="sx text-[var(--color-ink)]">
      <style>{`
        .sx h1,.sx h2,.sx h3{color:inherit}
        @keyframes sx-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes sx-bar{from{transform:scaleY(.1)}to{transform:scaleY(1)}}
        @keyframes sx-line{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}}
        @keyframes sx-pop{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
        @keyframes sx-card{from{opacity:0;transform:translateY(-24px) rotate(var(--r,0deg))}to{opacity:1;transform:rotate(var(--r,0deg))}}
        @keyframes sx-dash{to{stroke-dashoffset:-12}}
        .sx-rise{animation:sx-rise .7s cubic-bezier(.2,.7,.2,1) both}
        .sx-bar{transform-origin:bottom;animation:sx-bar 1s cubic-bezier(.2,.7,.2,1) both}
        .sx-line{animation:sx-line .45s ease-out both}
        .sx-pop{animation:sx-pop .6s .8s cubic-bezier(.2,.7,.2,1) both}
        .sx-card{transform:rotate(var(--r,0deg));animation:sx-card .8s cubic-bezier(.2,.8,.2,1) both}
        .sx-dash{animation:sx-dash 1.2s linear infinite}
        @media (prefers-reduced-motion:reduce){.sx-rise,.sx-bar,.sx-line,.sx-pop,.sx-card,.sx-dash{animation:none}}
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

      <section className="py-16 md:py-20">
        <div className="container-max">
          <p className="mx-auto max-w-[62ch] text-center font-display text-2xl font-semibold leading-snug md:text-3xl">{PAGE.intro}</p>
          {OVERVIEW && <div className="mx-auto mt-10 grid max-w-5xl gap-6 text-[var(--color-text-muted)] md:grid-cols-3">{OVERVIEW.map((p, i) => <p key={i}>{p}</p>)}</div>}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-max">
          <h2 className="max-w-[20ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "What you get from it"}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className={`rounded-[26px] p-7 ${i === 0 ? "bg-[var(--color-brand)] text-white md:row-span-2 md:flex md:flex-col md:justify-end" : "border border-[var(--color-border)] bg-white"}`}>
                  <I size={i === 0 ? 36 : 22} className={i === 0 ? "" : "text-[var(--color-brand)]"} />
                  <h3 className={`mt-4 font-display font-bold ${i === 0 ? "text-2xl" : "text-lg"}`}>{b.t}</h3>
                  <p className={`mt-2 text-sm ${i === 0 ? "text-white/85" : "text-[var(--color-text-muted)]"}`}>{b.b}</p>
                </div>
              );
            })}
          </div>
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

      {DELIVERABLES && (
        <section className="py-16 md:py-24">
          <div className="container-max">
            <h2 className="max-w-[24ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{DELIVERABLES.title}</h2>
            {DELIVERABLES.sub && <p className="mt-2 text-[var(--color-text-muted)]">{DELIVERABLES.sub}</p>}
            <div className="mt-10 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.items.map((d) => (
                <div key={d.t} className="border-t-2 border-[var(--color-ink)] py-6">
                  <h3 className="font-display text-lg font-bold">{d.t}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{d.b}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{d.f.map((f) => <span key={f} className="rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-medium">{f}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Included in every plan</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {INCLUDES.map((x) => (
              <span key={x} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold shadow-[var(--shadow-sm)]"><Check size={16} className="text-[var(--color-brand)]" />{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Step by step</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">A clear process, so you always know what happens next.</p>
          </div>
          <ol className="relative border-l-2 border-[var(--color-border)] pl-8">
            {PROCESS.map((s, i) => (
              <li key={s.t} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white">{i + 1}</span>
                <h3 className="font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {GALLERY && (
        <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
          <div className="container-max">
            <h2 className="max-w-[22ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{GALLERY.title}</h2>
            {GALLERY.sub && <p className="mt-2 max-w-[60ch] text-white/60">{GALLERY.sub}</p>}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.items.map((g) => (
                <figure key={g.title} className="group overflow-hidden rounded-2xl bg-white/[.04]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={g.image} alt={g.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="p-5">
                    <span className="text-xs font-semibold text-[var(--color-brand)]">{g.tag}</span>
                    <p className="mt-1 font-display font-bold">{g.title}</p>
                    {g.b && <p className="mt-1.5 text-sm text-white/60">{g.b}</p>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {WHY_HBS && (
        <section className="py-16 md:py-24">
          <div className="container-max grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY_HBS.title}</h2>
              {WHY_HBS.sub && <p className="mt-3 text-[var(--color-text-muted)]">{WHY_HBS.sub}</p>}
            </div>
            <ul className="space-y-4">
              {WHY_HBS.items.map((w) => (
                <li key={w.t} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Check size={15} /></span>
                  <div><h3 className="font-display text-lg font-bold">{w.t}</h3><p className="mt-1 text-[var(--color-text-muted)]">{w.b}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {AUDIENCES && (
        <section className="bg-[var(--color-surface)] py-16 md:py-20">
          <div className="container-max">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{AUDIENCES.title}</h2>
            {AUDIENCES.sub && <p className="mt-2 text-[var(--color-text-muted)]">{AUDIENCES.sub}</p>}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AUDIENCES.items.map((a) => (
                <div key={a.t} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-sm)]">
                  <Users size={20} className="text-[var(--color-brand)]" />
                  <h3 className="mt-3 font-display font-bold">{a.t}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{a.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max">
          <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">Frequently asked</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 md:grid-cols-2">
            {FAQS.map((f) => (
              <details key={f.q} className="group h-fit rounded-2xl border border-[var(--color-border)] bg-white p-5 open:shadow-[var(--shadow-md)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-brand)] px-8 py-14 text-center text-white md:py-16">
            <h2 className="mx-auto max-w-[22ch] font-display text-3xl font-extrabold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>Let&apos;s plan your {PAGE.eyebrow.toLowerCase()} growth</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">Talk to an expert <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
            </div>
          </div>
        </div>
      </section>

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
    <div className="relative mx-auto w-full max-w-[440px] text-[var(--color-ink)]">
      <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-lg)]">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand)] text-white"><IndustryIcon size={22} /></span>
          <div><p className="text-xs text-[var(--color-text-muted)]">How your customer buys</p><p className="font-display font-bold">{PAGE.eyebrow}</p></div>
        </div>
        <ol className="mt-6 space-y-2">
          {HERO.journey.map((s, i) => (
            <li key={s}>
              <div className={`sx-rise flex items-center gap-3 rounded-2xl p-3.5 text-sm ${i === 2 ? "bg-[var(--color-ink)] font-bold text-white" : "bg-[var(--color-surface)]"}`} style={{ animationDelay: `${0.2 + i * 0.25}s` }}>
                {i === 0 ? <Search size={16} className="shrink-0 text-[var(--color-brand)]" /> : i === 2 ? <Check size={16} className="shrink-0 text-[var(--color-brand)]" /> : <span className="h-4 w-4 shrink-0 rounded-full border-2 border-[var(--color-brand)]" />}
                <span className={i === 0 ? "font-medium italic" : ""}>{i === 0 ? `“${s}”` : s}</span>
              </div>
              {i < 2 && <ArrowDown size={14} className="mx-auto my-1 text-[var(--color-text-muted)]" />}
            </li>
          ))}
        </ol>
        <p className="mt-5 rounded-xl bg-[var(--color-brand-soft)] px-4 py-2.5 text-xs font-semibold text-[var(--color-brand-dark)]">We put your business in front of them at every step.</p>
      </div>
    </div>
  );
}
