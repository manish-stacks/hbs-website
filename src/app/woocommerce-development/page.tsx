import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, BarChart3, Check, ChevronRight, CreditCard, Gauge, Phone, Plus, Search, ShoppingCart, Star, Truck, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "WooCommerce Development Agency | Custom WooCommerce Stores | HBS",
    description: "Scale your online store with custom WooCommerce development by Hover Business Services LLP. 100% data ownership, custom plugins, high-speed checkouts, and ERP integration.",
    path: "/woocommerce-development",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Web & App Development",
  "href": "/website-development"
};

const PAGE = {
  "title": "WooCommerce Development & Speed Optimization Services",
  "eyebrow": "Enterprise WordPress & WooCommerce",
  "tagline": "High-performance, scalable WooCommerce stores with custom checkout pipelines, subscription engines, and automated ERP sync.",
  "intro": "WooCommerce powers over 28% of all online stores, offering unmatched flexibility and complete ownership of your code and customer data. Hover Business Services LLP engineers custom WooCommerce stores designed for high sales volume and lightning-fast speed. From custom theme architecture and database optimization to private plugin development, high-converting checkouts, and seamless ERP sync, we build stores that compound revenue without monthly platform commission fees."
};

type HeroData = { product: string; price: string; platform: string };
const HERO: HeroData = {
  "product": "Organic Almonds 500g",
  "price": "₹649",
  "platform": "WooCommerce"
};

const STATS: [string, string][] = [
  [
    "$45M+",
    "GMV processed on our WooCommerce builds"
  ],
  [
    "0.7s",
    "Average database response time"
  ],
  [
    "100%",
    "Data & source code ownership"
  ]
];

const BENEFITS = [
  {
    "t": "Complete Data Sovereignty",
    "b": "Full legal ownership of all code, customer history, and transaction data on your private servers."
  },
  {
    "t": "Sub-Second Response Times",
    "b": "High-Performance Order Storage and Redis caching keep your store lightning fast even during peak sales."
  },
  {
    "t": "Zero Transaction Tax",
    "b": "Keep 100% of your store revenue without paying 1-2% platform commissions to SaaS providers."
  },
  {
    "t": "Limitless Customization",
    "b": "Build any custom pricing rule, calculator, or checkout workflow without platform roadblocks."
  }
];

const INCLUDES = [
  "Bespoke High-Performance WooCommerce Theme",
  "High-Performance Order Storage (HPOS) Tuning",
  "Single-Page Fast Checkout with UPI & Cards",
  "Custom WordPress Plugin & REST API Development",
  "Multi-Warehouse Inventory & Logistics Bridge",
  "Hardened Security, Backups & SLA Support"
];

const PROCESS = [
  {
    "t": "Discovery & Infrastructure Sizing",
    "b": "We evaluate your product catalog volume, concurrent traffic projections, payment gateways, and hosting infrastructure needs."
  },
  {
    "t": "Custom UI/UX & High-Converting Wireframes",
    "b": "Our designers craft intuitive, mobile-first shopping experiences in Figma focused on frictionless product exploration and checkout."
  },
  {
    "t": "Clean Theme & Plugin Engineering",
    "b": "Our engineers build your custom theme, configure HPOS database tables, integrate payment gateways, and connect third-party logistics APIs."
  },
  {
    "t": "Stress Testing, Security Audit & Launch",
    "b": "We simulate thousands of concurrent checkout operations, conduct thorough security audits, and execute a zero-downtime launch."
  }
];

const FAQS = [
  {
    "q": "Can WooCommerce handle large catalogs and high order volume?",
    "a": "Yes. With modern High-Performance Order Storage (HPOS), optimized MySQL indexing, Redis object caching, and a dedicated VPS or cloud server, WooCommerce easily handles catalogs exceeding 50,000 products and thousands of concurrent transactions."
  },
  {
    "q": "How does WooCommerce compare to Shopify in terms of cost?",
    "a": "WooCommerce has zero platform subscription fees and zero revenue-share transaction fees. While you pay for your own hosting and domain, the long-term total cost of ownership is significantly lower than Shopify Plus, especially as order volume scales into millions."
  },
  {
    "q": "Can you migrate our existing store from Shopify or Magento to WooCommerce?",
    "a": "Yes. We manage full migrations including products, variations, categories, customer accounts, and historical order records, while establishing complete 301 redirect mappings to protect your organic SEO rankings."
  },
  {
    "q": "What hosting environment do you recommend for high-performance WooCommerce?",
    "a": "We recommend managed cloud environments such as AWS, Google Cloud, DigitalOcean, or Cloudways with at least 4GB RAM, NVMe storage, PHP 8.2+, Redis object cache, and Cloudflare enterprise edge caching."
  }
];

const RELATED = [
  {
    "label": "Shopify Development",
    "href": "/shopify-development"
  },
  {
    "label": "Custom Ecommerce",
    "href": "/custom-ecommerce"
  },
  {
    "label": "WordPress Development",
    "href": "/wordpress-development"
  },
  {
    "label": "Ecommerce SEO",
    "href": "/ecommerce-seo"
  }
];

const OVERVIEW: string[] | null = [
  "While many merchants assume WooCommerce cannot handle high transaction volume, slow stores are almost always the result of bloated multi-purpose themes, inefficient database queries, and redundant plugins. When architected properly by senior engineers, WooCommerce easily handles tens of thousands of daily orders.",
  "Hover Business Services LLP builds bespoke WooCommerce platforms with zero template bloat. We optimize database indexing, configure server-side Redis object caching, and craft custom lightweight templates that achieve sub-second load times.",
  "With WooCommerce, you retain 100% legal ownership of your store data, customer records, and code repository. There are zero platform commission fees on your gross revenue, giving you total freedom to expand globally."
];

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Build Your Store on WooCommerce?",
  "sub": "Unmatched flexibility, total data sovereignty, and zero platform transaction taxes.",
  "items": [
    {
      "t": "100% Code & Customer Data Ownership",
      "b": "You own your entire store codebase, customer database, and server infrastructure with zero risk of platform deplatforming or sudden policy changes."
    },
    {
      "t": "Zero Revenue-Share Platform Fees",
      "b": "Unlike SaaS platforms that take a percentage cut of every sale, WooCommerce charges zero commission on your transactions, protecting your gross profit margins."
    },
    {
      "t": "Custom Tailored Checkout Pipelines",
      "b": "Replace the default checkout with a friction-free single-page checkout flow featuring address autocompletion, OTP login, and native UPI/card support."
    },
    {
      "t": "Enterprise Database & Query Optimization",
      "b": "We implement High-Performance Order Storage (HPOS), query caching, and Redis object caching to ensure sub-second response times on massive catalogs."
    },
    {
      "t": "Unlimited Custom Plugin & API Development",
      "b": "Custom functionality built cleanly to your exact specifications, integrating directly with your accounting software, ERP, or warehouse management systems."
    },
    {
      "t": "Superior Technical SEO Architecture",
      "b": "WordPress provides the most powerful SEO foundation on the web, enabling deep content marketing, automated schema, and instant search indexation."
    }
  ]
};

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = {
  "title": "What Our WooCommerce Development Services Include",
  "sub": "Complete end-to-end engineering from discovery to high-scale performance tuning.",
  "items": [
    {
      "t": "Custom-Coded WooCommerce Theme Build",
      "b": "Handcrafted, lightweight theme built from your custom Figma designs, adhering strictly to WordPress coding standards without bloated page builders.",
      "f": [
        "Pixel-perfect responsive design",
        "Semantic HTML5 & Schema.org markup",
        "Modular block-based editing"
      ]
    },
    {
      "t": "High-Performance Order Storage (HPOS) & Speed Tuning",
      "b": "Configuring WooCommerce HPOS dedicated order tables, Redis object caching, Cloudflare CDN routing, and database query optimization.",
      "f": [
        "HPOS database migration",
        "Redis object cache configuration",
        "Sub-1-second Core Web Vitals"
      ]
    },
    {
      "t": "Custom WooCommerce Plugin Development",
      "b": "Bespoke WordPress plugins engineered specifically for your unique business workflows, pricing rules, shipping calculators, and API bridges.",
      "f": [
        "Clean, secure object-oriented code",
        "Zero plugin conflicts",
        "Automated background processing"
      ]
    },
    {
      "t": "Payment Gateway & Logistics Integration",
      "b": "Seamless integration with domestic and global payment gateways (Razorpay, Cashfree, Stripe, PayPal) and shipping aggregators (Shiprocket, Delhivery).",
      "f": [
        "1-click UPI and instant checkout",
        "Automated shipping label generation",
        "Multi-currency conversion support"
      ]
    },
    {
      "t": "B2B Wholesale & Membership Portals",
      "b": "Complex wholesale pricing tiers, bulk product ordering sheets, customer registration approvals, and recurring subscription billing.",
      "f": [
        "Tiered wholesale discounts",
        "Tax-exempt business accounts",
        "Automated recurring subscriptions"
      ]
    },
    {
      "t": "Enterprise Security & Daily Automated Backups",
      "b": "Hardened WordPress server environments, Web Application Firewall (WAF) integration, malware scanning, and automated off-site backups.",
      "f": [
        "Two-factor authentication (2FA)",
        "Daily cloud backup snapshots",
        "DDoS & brute-force mitigation"
      ]
    }
  ]
};

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Who We Build For",
  "sub": "Tailored solutions for scaling retailers, wholesale distributors, and D2C brands.",
  "items": [
    {
      "t": "D2C Brands Wanting Total Ownership",
      "b": "Brands seeking freedom from escalating SaaS subscription fees and restrictive third-party checkout policies."
    },
    {
      "t": "B2B Wholesalers & Manufacturers",
      "b": "Companies requiring custom bulk pricing tables, credit invoicing, customer account approvals, and ERP sync."
    },
    {
      "t": "High-Traffic Content + Commerce Hubs",
      "b": "Publishers, creators, and brands blending extensive SEO editorial content with seamless ecommerce merchandise."
    },
    {
      "t": "Subscription & Membership Businesses",
      "b": "Businesses selling recurring monthly subscription boxes, digital courses, or gated membership portals."
    }
  ]
};

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Choose Hover Business Services LLP for WooCommerce?",
  "sub": "Enterprise full-stack WordPress developers with proven high-scale track records.",
  "items": [
    {
      "t": "No Bloated Templates or Page Builders",
      "b": "We write clean, bespoke PHP, modern JavaScript, and CSS. No sluggish multi-purpose themes that bog down your database."
    },
    {
      "t": "Full-Stack Server & Cloud Expertise",
      "b": "We optimize the entire stack: PHP-FPM, MySQL database tuning, Redis caching, and Cloudflare edge CDN configuration."
    },
    {
      "t": "Seamless ERP & Accounting Connections",
      "b": "Extensive experience connecting WooCommerce to SAP, Tally, Zoho Books, Busy, Salesforce, and custom warehouse APIs."
    }
  ]
};

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = {
  "title": "Custom WooCommerce Architecture Showcase",
  "sub": "Explore bespoke WooCommerce stores built for high-throughput catalogues and instant mobile checkout.",
  "items": [
    {
      "title": "Artisanal Specialty Roasters Online Store",
      "tag": "Custom WooCommerce",
      "image": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=800&auto=format&fit=crop",
      "b": "Custom recurring subscription workflow, grind selector configurator, and automated dispatch sync."
    },
    {
      "title": "Industrial Tools B2B Wholesale Portal",
      "tag": "B2B Wholesale",
      "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      "b": "Role-based wholesale pricing, tax-exempt business accounts, and live ERP stock synchronization."
    },
    {
      "title": "Lifestyle Apparel & Footwear Storefront",
      "tag": "High-Speed Theme",
      "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      "b": "Single-step instant mobile checkout, dynamic color swatches, and automated abandoned cart recovery."
    }
  ]
};

const ICONS = [ShoppingCart, CreditCard, Truck, Gauge, Search, BarChart3];

/* ============================== Page ============================== */

export default async function WoocommerceDevelopmentPage() {
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
