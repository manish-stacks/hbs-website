import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, BarChart3, Check, ChevronRight, CreditCard, Gauge, Phone, Plus, Search, ShoppingCart, Star, Truck, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Shopify Development Agency | Custom Shopify Plus Stores | HBS",
    description: "Scale your D2C brand with certified Shopify & Shopify Plus development by Hover Business Services LLP. Custom themes, private apps, headless commerce, and speed optimization.",
    path: "/shopify-development",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Web & App Development",
  "href": "/website-development"
};

const PAGE = {
  "title": "Shopify & Shopify Plus Development Services",
  "eyebrow": "Certified Shopify Agency",
  "tagline": "High-converting, bespoke Shopify & Shopify Plus storefronts engineered to scale your direct-to-consumer revenue and international sales.",
  "intro": "Building an exceptional ecommerce brand requires far more than installing a pre-made theme. Hover Business Services LLP crafts custom Shopify and Shopify Plus storefronts tailored to your unique brand identity and commercial goals. From bespoke Liquid theme architecture and private app development to headless Hydrogen builds and friction-free checkout customization, we turn your store into a conversion engine."
};

type HeroData = { product: string; price: string; platform: string };
const HERO: HeroData = {
  "product": "Handwoven Cotton Throw",
  "price": "₹2,499",
  "platform": "Shopify"
};

const STATS: [string, string][] = [
  [
    "250+",
    "Shopify stores launched"
  ],
  [
    "85+",
    "Mobile PageSpeed score"
  ],
  [
    "2.4x",
    "Average conversion rate lift"
  ]
];

const BENEFITS = [
  {
    "t": "Higher Conversion Rates",
    "b": "Frictionless mobile navigation and streamlined checkout pipelines that convert visitors into customers."
  },
  {
    "t": "Lower App Overhead",
    "b": "Custom code replaces dozens of recurring monthly third-party app subscriptions."
  },
  {
    "t": "Rapid Time-to-Market",
    "b": "Agile delivery sprints that get your new store or feature live without endless delays."
  },
  {
    "t": "Dedicated Monthly Support",
    "b": "Ongoing technical maintenance, theme updates, and feature builds to keep you ahead of competitors."
  }
];

const INCLUDES = [
  "Custom Liquid Theme (Online Store 2.0)",
  "Shopify Plus Checkout Customization",
  "Private App Development & API Integration",
  "Shopify Mobile PageSpeed Optimization",
  "Zero-Downtime Store Migration & 301 Redirects",
  "Ongoing Monthly Retainer & SLA Support"
];

const PROCESS = [
  {
    "t": "Discovery & Technical Roadmap",
    "b": "We analyze your product catalog, app ecosystem requirements, payment gateway needs, and third-party integrations."
  },
  {
    "t": "Custom UI/UX & Prototyping",
    "b": "Our ecommerce designers craft conversion-driven desktop and mobile wireframes in Figma for your review."
  },
  {
    "t": "Shopify Theme & App Engineering",
    "b": "Our certified Shopify developers code the theme on a development store, integrate apps, and configure payment gateways."
  },
  {
    "t": "Rigorous QA, Testing & Launch",
    "b": "We execute end-to-end test transactions across all payment methods, verify inventory sync, and seamlessly flip your DNS."
  }
];

const FAQS = [
  {
    "q": "How long does it take to develop a custom Shopify store?",
    "a": "A custom Shopify store typically takes between 4 to 8 weeks, including custom Figma design, Liquid coding, app integrations, and quality assurance. Larger Shopify Plus builds with complex migrations may take 8 to 12 weeks."
  },
  {
    "q": "Can you build custom features without installing third-party apps?",
    "a": "Yes! Wherever possible, we custom-code features directly into your theme (e.g. swatches, size charts, FAQ accordions, sticky add-to-cart, mega menus) to keep your store ultra-fast and save on monthly app subscription fees."
  },
  {
    "q": "Will our SEO rankings be protected during a migration to Shopify?",
    "a": "Absolutely. We execute a strict 301 URL redirect map, preserve title tags, meta descriptions, and structured data, and audit all incoming search traffic to ensure zero loss of organic search visibility."
  },
  {
    "q": "Do you offer post-launch support and store maintenance?",
    "a": "Yes. We offer dedicated monthly retainer plans covering technical updates, feature additions, promotional campaign banners, and conversion rate optimization."
  }
];

const RELATED = [
  {
    "label": "WooCommerce Development",
    "href": "/woocommerce-development"
  },
  {
    "label": "Custom Ecommerce",
    "href": "/custom-ecommerce"
  },
  {
    "label": "Ecommerce SEO",
    "href": "/ecommerce-seo"
  },
  {
    "label": "UI/UX Design",
    "href": "/ui-ux-design"
  }
];

const OVERVIEW: string[] | null = [
  "Shopify powers over 10% of global ecommerce, but off-the-shelf templates and bloated third-party apps frequently lead to slow page load speeds, sluggish checkouts, and generic storefronts that fail to differentiate your brand.",
  "Hover Business Services LLP delivers bespoke Shopify engineering. We write clean, lightweight Liquid code and leverage modern Shopify Online Store 2.0 architecture to ensure your store scores 85+ on mobile Google PageSpeed Insights while giving your marketing team complete visual control.",
  "Whether launching your first flagship store, upgrading to Shopify Plus, or migrating from WooCommerce or Magento without losing organic search rankings, our certified engineers deliver a seamless build with zero downtime."
];

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Invest in Professional Shopify Development?",
  "sub": "Maximize conversion velocity, mobile engagement, and operational efficiency.",
  "items": [
    {
      "t": "Bespoke Design Tailored to Your Brand",
      "b": "We build pixel-perfect, custom-coded themes from Figma that elevate your brand equity and deliver unique shopping experiences."
    },
    {
      "t": "Blazing Fast Mobile Page Speed",
      "b": "We write clean, lightweight code and minimize app bloat to ensure sub-2-second load times and 85+ Core Web Vitals scores."
    },
    {
      "t": "Shopify Online Store 2.0 Architecture",
      "b": "Every page and section is built modularly with JSON templates, allowing your marketing team to customize banners and layouts effortlessly."
    },
    {
      "t": "Custom Private Apps & API Integrations",
      "b": "Connect your proprietary ERP, CRM, custom warehouse software, or local shipping courier using private Shopify Apps and Webhooks."
    },
    {
      "t": "Shopify Plus Checkout Extensibility",
      "b": "Customize the checkout pipeline with custom fields, 1-click post-purchase upsells, trust badges, and automated discounts."
    },
    {
      "t": "Flawless Migration with Zero SEO Loss",
      "b": "Migrating from WooCommerce, Magento, or custom carts? We execute 100% 301 URL redirect mapping, data migration, and SEO preservation."
    }
  ]
};

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = {
  "title": "What Our Shopify Development Services Include",
  "sub": "Complete lifecycle engineering from theme development to enterprise scaling.",
  "items": [
    {
      "t": "Bespoke Shopify Theme Build (OS 2.0)",
      "b": "Custom-coded Liquid theme built from Figma mockups, fully responsive across all screen sizes with zero unnecessary code bloat.",
      "f": [
        "Modular JSON sections & blocks",
        "Mobile-first responsive UX",
        "Custom product page layouts"
      ]
    },
    {
      "t": "Shopify Plus & Enterprise Architecture",
      "b": "Advanced capabilities for high-volume merchants including checkout extensions, Shopify Scripts, multi-currency, and expansion stores.",
      "f": [
        "Shopify Functions & Checkout UI",
        "B2B Wholesale portal setup",
        "Multi-store internationalization"
      ]
    },
    {
      "t": "Custom Shopify App & API Development",
      "b": "Bespoke private apps built with Node.js/Remix to handle complex business rules, custom calculators, and third-party API sync.",
      "f": [
        "ERP & CRM bi-directional sync",
        "Custom shipping & logistics APIs",
        "Secure webhook processing"
      ]
    },
    {
      "t": "Shopify Speed & Core Web Vitals Optimization",
      "b": "Auditing and removing bloated JavaScript, lazy loading assets, optimizing image formats, and ensuring green PageSpeed scores.",
      "f": [
        "App script auditing & pruning",
        "Critical CSS extraction",
        "Sub-2-second Largest Contentful Paint"
      ]
    },
    {
      "t": "Ecommerce Migration to Shopify",
      "b": "Seamless migration of products, customer records, order history, and full SEO authority from Magento, WooCommerce, or BigCommerce.",
      "f": [
        "100% historical data migration",
        "Comprehensive 301 redirect map",
        "Zero-downtime cutover strategy"
      ]
    },
    {
      "t": "Conversion Rate Optimization (CRO)",
      "b": "Integrating high-converting features such as sticky add-to-cart bars, countdown urgency triggers, bundling, and smart search.",
      "f": [
        "1-click upsells & cross-sells",
        "Smart predictive search filters",
        "Abandoned checkout automation"
      ]
    }
  ]
};

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Who We Build For",
  "sub": "Tailored solutions for scaling D2C brands, retailers, and high-volume merchants.",
  "items": [
    {
      "t": "Scaling D2C Brands",
      "b": "Merchants looking to replace generic templates with a high-speed, branded shopping experience that drives repeat orders."
    },
    {
      "t": "Shopify Plus Enterprises",
      "b": "High-volume retailers requiring custom checkout extensions, international multi-currency markets, and B2B portals."
    },
    {
      "t": "Brands Migrating from Legacy Platforms",
      "b": "Businesses outgrowing WooCommerce or frustrated with Magento maintenance overhead seeking a reliable platform."
    },
    {
      "t": "Omnichannel Retailers",
      "b": "Companies integrating physical retail outlets via Shopify POS with centralized online inventory and reporting."
    }
  ]
};

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Choose Hover Business Services LLP for Shopify?",
  "sub": "Certified expertise, transparent communication, and data-driven results.",
  "items": [
    {
      "t": "Certified Shopify Engineers",
      "b": "Our in-house team holds deep certifications across Liquid, Storefront API, Hydrogen, and Shopify Plus architecture."
    },
    {
      "t": "Speed-First Philosophy",
      "b": "We never build bloated stores. We custom-code features instead of piling on 25 monthly paid apps that slow down your site."
    },
    {
      "t": "End-to-End Growth Partnership",
      "b": "Beyond development, our SEO and paid media specialists ensure your newly launched store attracts high-intent buyers."
    }
  ]
};

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = {
  "title": "Shopify Storefronts & D2C Showcase",
  "sub": "Explore bespoke Shopify and Shopify Plus storefronts engineered for high conversions and mobile-first speed.",
  "items": [
    {
      "title": "Direct-to-Consumer Fashion Storefront",
      "tag": "Shopify Plus",
      "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      "b": "Custom Liquid theme with multi-variant swatches, dynamic bundling, and 1-click upsells."
    },
    {
      "title": "Beauty & Skincare Mobile-First Experience",
      "tag": "Custom Theme",
      "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
      "b": "Sub-second mobile loading, personalized routine quizzes, and automated recurring subscriptions."
    },
    {
      "title": "Luxury Home Living & Furniture Catalog",
      "tag": "High-Volume Catalog",
      "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      "b": "Custom 3D model viewer, room visualizer integration, and high-volume freight shipping calculator."
    }
  ]
};

const ICONS = [ShoppingCart, CreditCard, Truck, Gauge, Search, BarChart3];

/* ============================== Page ============================== */

export default async function ShopifyDevelopmentPage() {
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

      <section className="py-16 md:py-24">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">What we do for you</h2>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
            <p className="text-[var(--color-ink)]">{PAGE.intro}</p>
            {OVERVIEW?.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "Why it works"}</h2>
          {WHY?.sub && <p className="mt-2 text-[var(--color-text-muted)]">{WHY.sub}</p>}
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className="bg-white p-7">
                  <I size={24} className="text-[var(--color-brand)]" />
                  <h3 className="mt-4 font-display text-lg font-bold">{b.t}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{b.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-16 text-white md:py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">What&apos;s included</h2>
            <p className="mt-3 text-white/60">Everything below is part of the service, with no hidden extras.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {INCLUDES.map((x) => (
              <li key={x} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4"><Check size={18} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />{x}</li>
            ))}
          </ul>
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

      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">How we work</h2>
          <ol className="relative mt-12 grid gap-8" style={{ gridTemplateColumns: `repeat(auto-fit,minmax(200px,1fr))` }}>
            <span className="absolute left-0 right-0 top-[22px] hidden h-0.5 bg-[var(--color-border)] md:block" />
            {PROCESS.map((s, i) => (
              <li key={s.t} className="relative">
                <span className={`relative flex h-11 w-11 items-center justify-center rounded-full font-display font-extrabold ${i === PROCESS.length - 1 ? "bg-[var(--color-brand)] text-white" : "border-2 border-[var(--color-ink)] bg-white"}`}>{i + 1}</span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

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

      <section className="pb-20 pt-4">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-[32px] bg-[var(--color-brand)] p-8 text-white md:p-12">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Ready to get started?</h2>
            <p className="mt-3 text-white/85">Tell us about your business. We will reply with a clear plan and quote.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--color-ink)]">Get a free quote <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold"><Phone size={15} /> Call now</a>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold">Questions</h2>
            <div className="mt-6 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {FAQS.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                  <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
                </details>
              ))}
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
    <div className="relative mx-auto grid w-full max-w-[500px] grid-cols-[1.1fr_1fr] gap-3 text-[var(--color-ink)]">
      <div className="rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-lg)]">
        <div className="aspect-square rounded-2xl bg-[linear-gradient(140deg,var(--color-accent-soft),var(--color-brand-soft))]" />
        <p className="mt-3 text-sm font-bold leading-snug">{HERO.product}</p>
        <p className="mt-1 flex items-center gap-1 text-[11px] text-[var(--color-text-muted)]"><span className="flex text-[var(--color-star)]">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={10} fill="currentColor" />)}</span> 4.8</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-lg font-extrabold">{HERO.price}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><ShoppingCart size={16} /></span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="rounded-[20px] bg-[var(--color-ink)] p-4 text-white shadow-[var(--shadow-md)]">
          <p className="text-[11px] text-white/60">Today on {HERO.platform}</p>
          <p className="font-display text-2xl font-extrabold">₹1.84L</p>
          <p className="text-[11px] text-white/60">48 orders</p>
        </div>
        {["Cart", "Address", "Payment"].map((s, i) => (
          <div key={s} className="sx-rise flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 text-xs font-semibold" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-success)] text-white"><Check size={11} /></span>{s}
          </div>
        ))}
      </div>
    </div>
  );
}
