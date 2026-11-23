import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ArrowRight, ArrowUpRight, Award, Check, ChevronRight, Eye, Layers, Palette, PenTool, Phone, Play, Plus, Sparkles, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Product Packaging & Label Design Agency | HBS",
    description: "Shelf-stopping product packaging and label design by Hover Business Services LLP. FMCG boxes, pouches, cosmetic labels, dieline engineering, and 3D mockups.",
    path: "/product-packaging-design",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Creative & Design",
  "href": "/graphic-design"
};

const PAGE = {
  "title": "Product Packaging & Label Design Services",
  "eyebrow": "Retail Shelf Impact & Structural Aesthetics",
  "tagline": "Shelf-stopping structural packaging, unboxing experiences, and regulatory-compliant label designs that drive retail and eCommerce sales.",
  "intro": "In retail aisles and direct-to-consumer unboxing moments, your packaging is your most tangible brand touchpoint. Hover Business Services LLP engineers striking packaging designs, custom dielines, bottle labels, luxury boxes, and pouch graphics that captivate consumers and communicate product value within seconds."
};

type HeroData = { mark: string };
const HERO: HeroData = {
  "mark": "pack"
};

const STATS: [string, string][] = [
  [
    "650+",
    "Packaging Dielines Engineered"
  ],
  [
    "100%",
    "Print-Ready Factory Accuracy"
  ],
  [
    "3D Renders",
    "Included with Every Project"
  ]
];

const BENEFITS = [
  {
    "t": "Instant Shelf Impact & Contrast",
    "b": "Engineered color blocking, distinctive typography, and bold visual hierarchies that stand out against competing products."
  },
  {
    "t": "Premium Brand Perception & Price Elasticity",
    "b": "Thoughtful packaging finishes and refined aesthetics allow your brand to command premium retail pricing and margins."
  },
  {
    "t": "Precision Dieline Engineering",
    "b": "Accurate technical dielines created to exact millimeter tolerances with correct fold lines, glue tabs, and cut margins."
  },
  {
    "t": "Regulatory & Barcode Compliance",
    "b": "Proper integration of nutritional panels, ingredient disclosures, FSSAI / FDA badges, barcode placement, and legal copy."
  },
  {
    "t": "Viral Unboxing Experience Design",
    "b": "Inner-box printing, custom sleeves, and branded tissue wraps that encourage customers to film and share unboxing videos on social media."
  },
  {
    "t": "Production-Ready Printer Coordination",
    "b": "Color separations, spot Pantone (PMS) matching, foil stamping masks, and UV varnish layers ready for packaging printers."
  }
];

const INCLUDES = [
  "Custom Folding Cartons & Rigid Luxury Boxes",
  "FMCG Pouches, Stand-Up Bags & Sachets",
  "Bottle, Jar & Container Label Suites",
  "eCommerce Mailer Boxes & Shipping Tape",
  "Photorealistic 3D Product Renders",
  "Printer Pre-Flight & Production Proofing"
];

const PROCESS = [
  {
    "t": "Product Briefing & Shelf Audit",
    "b": "We analyze your product specifications, target customer demographic, shelf competitor packaging, and budget constraints."
  },
  {
    "t": "Dieline Blueprint & Concept Development",
    "b": "We construct structural dielines and develop 2 to 3 distinct packaging visual directions, testing shelf contrast."
  },
  {
    "t": "Typography, Regulatory & 3D Prototyping",
    "b": "We incorporate mandatory regulatory text, nutritional charts, and barcode placements, followed by photorealistic 3D renders."
  },
  {
    "t": "Printer File Preparation & Press Check",
    "b": "We generate production-ready vector files with spot varnishes, foil masks, and Pantone codes, assisting your printer."
  }
];

const FAQS = [
  {
    "q": "What is a packaging dieline and do you supply it?",
    "a": "A dieline is the technical flat diagram showing cut lines, fold lines, bleed zones, and glue tabs for a packaging box or pouch. We either create custom dielines from scratch or place your designs onto dielines supplied by your box manufacturer."
  },
  {
    "q": "Can you provide 3D renders of our packaging before printing?",
    "a": "Yes! We create photorealistic 3D digital renders showing your packaging from multiple angles with realistic material textures, shadows, and reflections before you spend money on physical printing."
  },
  {
    "q": "Do you work directly with our packaging manufacturer or printer?",
    "a": "Yes. We frequently communicate directly with client printers to review prepress specifications, color profiles (Pantone/CMYK), and dieline tolerances, ensuring flawless print output."
  },
  {
    "q": "What types of products do you design packaging for?",
    "a": "We design packaging across FMCG foods, beverages, dietary supplements, cosmetics, skincare, electronics, luxury apparel boxes, shipping mailers, and specialty consumer products."
  },
  {
    "q": "How do you ensure the barcode and regulatory information prints clearly?",
    "a": "We format all barcodes and QR codes as clean vector elements adhering to international GS1 size and quiet-zone standards, ensuring they scan reliably at checkout counters."
  },
  {
    "q": "What files will I receive for manufacturing?",
    "a": "You receive 100% production-ready Adobe Illustrator (.AI) and print-ready PDF files with fonts outlined, spot Pantone color channels separated, and technical die-cut layers clearly labeled."
  }
];

const RELATED = [
  {
    "label": "Graphic Design",
    "href": "/graphic-design"
  },
  {
    "label": "UI/UX Design",
    "href": "/ui-ux-design"
  },
  {
    "label": "Logo Design",
    "href": "/logo-design"
  },
  {
    "label": "Ecommerce Marketing",
    "href": "/ecommerce-marketing"
  }
];

const OVERVIEW: string[] | null = [
  "Over 70% of in-store purchasing decisions are made directly at the retail shelf, and in eCommerce, the physical unboxing experience is the primary catalyst for organic social shares and repeat orders. Packaging that feels cheap, fails regulatory clarity, or blends into the background directly harms product sales.",
  "Hover Business Services LLP combines structural engineering precision with high-impact commercial branding. We develop packaging solutions that consider the entire product lifecycle: shelf visibility against competitors, tactile substrate finishes (matte, foil, spot UV, embossing), and dieline print tolerances.",
  "From FMCG food and beverage pouches to luxury cosmetic bottles, wellness supplement containers, and electronics boxes, our team delivers production-ready dieline files calibrated for commercial printing presses."
];

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Invest in Strategic Product Packaging?",
  "sub": "Dominate retail shelves and turn physical unboxing into an unforgettable brand asset.",
  "items": [
    {
      "t": "Instant Shelf Impact & Contrast",
      "b": "Engineered color blocking, distinctive typography, and bold visual hierarchies that stand out against competing products."
    },
    {
      "t": "Premium Brand Perception & Price Elasticity",
      "b": "Thoughtful packaging finishes and refined aesthetics allow your brand to command premium retail pricing and margins."
    },
    {
      "t": "Precision Dieline Engineering",
      "b": "Accurate technical dielines created to exact millimeter tolerances with correct fold lines, glue tabs, and cut margins."
    },
    {
      "t": "Regulatory & Barcode Compliance",
      "b": "Proper integration of nutritional panels, ingredient disclosures, FSSAI / FDA badges, barcode placement, and legal copy."
    },
    {
      "t": "Viral Unboxing Experience Design",
      "b": "Inner-box printing, custom sleeves, and branded tissue wraps that encourage customers to film and share unboxing videos on social media."
    },
    {
      "t": "Production-Ready Printer Coordination",
      "b": "Color separations, spot Pantone (PMS) matching, foil stamping masks, and UV varnish layers ready for packaging printers."
    }
  ]
};

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = {
  "title": "Our Packaging & Label Design Solutions",
  "sub": "Comprehensive structural and visual packaging engineering for diverse consumer sectors.",
  "items": [
    {
      "t": "Custom Folding Cartons & Rigid Luxury Boxes",
      "b": "Structural box packaging for cosmetics, consumer tech, perfumes, gift sets, and specialty retail goods.",
      "f": [
        "Custom dieline creation",
        "Magnetic closure & sleeve specs",
        "Embossing and foil stamping layers"
      ]
    },
    {
      "t": "FMCG Pouches, Stand-Up Bags & Sachets",
      "b": "Stand-up barrier pouches (Doypack), gusseted bags, and tear-notch sachets for food, snacks, coffee, and dry goods.",
      "f": [
        "Shelf-contrast graphics",
        "Window cutout placements",
        "Matte & metallic foil integration"
      ]
    },
    {
      "t": "Bottle, Jar & Container Label Suites",
      "b": "Wraparound, front-and-back, and shrink-sleeve labels for beverages, wines, spirits, skincare serums, and nutraceuticals.",
      "f": [
        "Waterproof substrate specifications",
        "Clear-on-clear label effects",
        "Curved surface distortion compensation"
      ]
    },
    {
      "t": "eCommerce Mailer Boxes & Shipping Tape",
      "b": "Branded corrugated shipping boxes, interior tissue wrapping, warranty cards, and tamper-evident shipping tapes.",
      "f": [
        "Outer and inner box graphics",
        "Eco-friendly kraft aesthetic options",
        "Unboxing reveal architecture"
      ]
    },
    {
      "t": "Photorealistic 3D Product Renders",
      "b": "Ultra-realistic 3D digital renders of your packaged products for ecommerce listings, Amazon stores, and advertising campaigns.",
      "f": [
        "Studio lighting simulations",
        "Multiple angle perspectives",
        "Transparent background PNG exports"
      ]
    },
    {
      "t": "Printer Pre-Flight & Production Proofing",
      "b": "Full coordination with your commercial packaging printer to inspect proofs and verify color consistency across batches.",
      "f": [
        "CMYK + Pantone color breakdowns",
        "Vector die-cut paths",
        "Pre-press file verification"
      ]
    }
  ]
};

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Who Can Benefit From Our Packaging Design?",
  "sub": "Tailored for consumer goods, direct-to-consumer brands, and retail manufacturers.",
  "items": [
    {
      "t": "Food & Beverage Brands",
      "b": "Packaged foods, gourmet snacks, craft beverages, teas, and coffee brands needing mouth-watering shelf appeal."
    },
    {
      "t": "Cosmetics & Skincare Producers",
      "b": "Beauty and personal care brands requiring elegant bottles, luxury rigid boxes, and minimalist cosmetic labels."
    },
    {
      "t": "Health & Nutraceutical Companies",
      "b": "Supplements, protein powders, and herbal remedies requiring clinical trust, clean layouts, and regulatory compliance."
    },
    {
      "t": "D2C Consumer Tech & Lifestyle",
      "b": "Electronics, audio gear, and home goods looking to build an unboxing experience that matches Apple-grade standards."
    }
  ]
};

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Choose Hover Business Services LLP for Packaging?",
  "sub": "Technical dieline precision united with captivating retail psychology.",
  "items": [
    {
      "t": "Zero Production Surprises",
      "b": "We build dielines to the exact millimeter specifications of your packaging factory, preventing costly printing re-runs."
    },
    {
      "t": "Deep Print Technology Knowledge",
      "b": "Our team understands spot UV, blind debossing, foil stamping, soft-touch laminates, and CMYK offset press limitations."
    },
    {
      "t": "Amazon & Ecommerce Ready Renders",
      "b": "Every project includes high-resolution 3D digital renders ready for Amazon A+ content, website product pages, and social ads."
    },
    {
      "t": "Regulatory Accuracy",
      "b": "We meticulously structure ingredient panels, batch codes, and regulatory certifications to ensure smooth retail compliance."
    }
  ]
};

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = {
  "title": "Retail Packaging & Unboxing Concept Gallery",
  "sub": "Structural dieline engineering, luxury gift boxes, stand-up pouches, and cosmetic label designs.",
  "items": [
    {
      "title": "Luxury Perfume Rigid Box & Embossed Gold Foil",
      "tag": "Rigid Box",
      "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
      "b": "Heavyweight rigid box with magnetic closure, soft-touch matte lamination, and gold foil stamping."
    },
    {
      "title": "Minimalist Skincare Serum Bottle & Dropper Label",
      "tag": "Cosmetic Label",
      "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
      "b": "Waterproof clear-on-clear label design with regulatory ingredient panels and clean typography."
    },
    {
      "title": "Gourmet Organic Coffee Stand-Up Pouch (Doypack)",
      "tag": "Barrier Pouch",
      "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
      "b": "Resealable stand-up barrier pouch with aroma valve placement and matte finish color-blocking."
    },
    {
      "title": "Nutraceutical Supplement Tub & Security Seal",
      "tag": "Supplements",
      "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
      "b": "Clinical trust design with nutritional facts table, FSSAI regulatory compliance, and barcode."
    },
    {
      "title": "Branded Corrugated eCommerce Mailer Box",
      "tag": "Mailer Box",
      "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
      "b": "Outer and inner box graphics engineered for viral customer unboxing experiences on Instagram."
    },
    {
      "title": "Craft Beverage Can & Matte Shrink-Sleeve Artwork",
      "tag": "Beverage Can",
      "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
      "b": "360-degree cylindrical vector artwork calibrated for high-speed aluminum can shrink labeling."
    }
  ]
};

const ICONS = [Palette, PenTool, Layers, Eye, Sparkles, Award];

/* ============================== Page ============================== */

export default async function ProductPackagingDesignPage() {
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
    <div className="relative mx-auto h-[400px] w-full max-w-[460px]">
      <div className="sx-card absolute left-0 top-4 w-[60%] rounded-3xl bg-white p-5 text-[var(--color-ink)] shadow-[var(--shadow-lg)]" style={{ "--r": "-6deg" } as CSSProperties}>
        <p className="text-xs font-semibold text-[var(--color-text-muted)]">Palette</p>
        <div className="mt-3 grid grid-cols-4 gap-1.5">{["#E5231B", "#10131A", "#B98A2F", "#F3EFEC"].map((c) => <span key={c} className="aspect-square rounded-lg border border-black/5" style={{ background: c }} />)}</div>
        <p className="mt-4 font-display text-4xl font-extrabold">Aa</p>
      </div>
      <div className="sx-card absolute right-0 top-0 flex h-[220px] w-[52%] items-center justify-center rounded-3xl bg-[var(--color-brand)] text-white shadow-[var(--shadow-lg)]" style={{ "--r": "6deg", animationDelay: ".15s" } as CSSProperties}>
        {HERO.mark === "logo" && <span className="relative h-24 w-24"><span className="absolute inset-0 rounded-full border-[10px] border-white" /><span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md bg-white" /></span>}
        {HERO.mark === "video" && <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--color-brand)]"><Play size={26} fill="currentColor" /></span>}
        {HERO.mark === "social" && <span className="grid w-28 grid-cols-3 gap-1">{Array.from({ length: 9 }).map((_, i) => <span key={i} className={`aspect-square rounded-sm ${i % 3 === 1 ? "bg-white" : "bg-white/40"}`} />)}</span>}
        {HERO.mark === "uiux" && <span className="w-32 rounded-lg bg-white p-2"><span className="block h-2.5 w-14 rounded bg-[var(--color-ink)]" /><span className="mt-2 grid grid-cols-2 gap-1"><span className="h-8 rounded bg-[var(--color-brand-soft)]" /><span className="h-8 rounded bg-[var(--color-brand-soft)]" /></span><span className="mt-2 block h-3 w-12 rounded-full bg-[var(--color-brand)]" /></span>}
        {HERO.mark === "pack" && <span className="relative block h-28 w-20"><span className="absolute inset-x-0 bottom-0 top-5 rounded-md bg-white" /><span className="absolute inset-x-2 top-0 h-7 rounded-t-md bg-white/60" /><span className="absolute inset-x-3 top-12 h-7 rounded-sm bg-[var(--color-ink)]" /></span>}
      </div>
      <div className="sx-card absolute bottom-0 right-8 w-[64%] rounded-3xl bg-[var(--color-ink)] p-5 text-white shadow-[var(--shadow-lg)]" style={{ "--r": "-2deg", animationDelay: ".3s" } as CSSProperties}>
        <p className="text-xs text-white/60">Delivered as</p>
        <div className="mt-2 flex flex-wrap gap-1.5">{["AI", "PSD", "Figma", "PDF", "PNG", "SVG"].map((f) => <span key={f} className="rounded-md bg-white/10 px-2 py-1 font-mono text-[11px]">{f}</span>)}</div>
      </div>
    </div>
  );
}
