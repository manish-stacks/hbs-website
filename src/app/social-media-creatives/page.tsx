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
    title: "Social Media Creatives & Ad Design Agency | HBS",
    description: "High-converting social media creative design by Hover Business Services LLP. Meta ad sets, LinkedIn B2B graphics, Instagram carousels, and motion snippets.",
    path: "/social-media-creatives",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Creative & Design",
  "href": "/graphic-design"
};

const PAGE = {
  "title": "Social Media Creatives & Ad Design Services",
  "eyebrow": "Performance Social & Paid Creative",
  "tagline": "Scroll-stopping social media creatives, ad sets, and carousel designs engineered to drive clicks and conversions.",
  "intro": "Organic feeds and paid ad auctions move at lightning speed. To win customer attention, your brand needs visually distinctive, high-converting social media creatives. Hover Business Services LLP designs performance ad creative suites, carousel stories, dynamic motion snippets, and cohesive organic feed systems across Instagram, LinkedIn, Meta, and X."
};

type HeroData = { mark: string };
const HERO: HeroData = {
  "mark": "social"
};

const STATS: [string, string][] = [
  [
    "3.8x",
    "Average ROAS Lift with Fresh Creatives"
  ],
  [
    "5,000+",
    "Social Creatives Produced"
  ],
  [
    "< 48h",
    "Turnaround on Creative Sets"
  ]
];

const BENEFITS = [
  {
    "t": "Combat Ad Fatigue With Continuous Creative Iteration",
    "b": "Consistently deploy fresh visual angles, lifestyle imagery, typography layouts, and customer proof formats to sustain low ad costs."
  },
  {
    "t": "Engineered for High Click-Through Rates (CTR)",
    "b": "Strategic placement of high-contrast visual cues, compelling headline badges, and unmistakable call-to-action buttons."
  },
  {
    "t": "Platform-Specific Creative Architecture",
    "b": "Tailored designs that respect platform culture—polished editorial carousels for LinkedIn, aesthetic lifestyle grids for Instagram, and punchy direct-response ads for Meta."
  },
  {
    "t": "B2B Authority & Thought Leadership Carousels",
    "b": "Turn complex enterprise case studies and industry research into swipeable, multi-slide PDF carousels that generate organic shares."
  },
  {
    "t": "Seamless Brand Consistency Across Feeds",
    "b": "Ensure your brand guidelines, primary colors, and tone of voice are faithfully maintained across every single graphic asset."
  },
  {
    "t": "A/B Testing Packs for Paid Media Buyers",
    "b": "Every creative set includes multiple headline variations, background colors, and visual hooks to maximize testing velocity."
  }
];

const INCLUDES = [
  "Paid Meta & Instagram Ad Creative Packs",
  "High-Engagement Educational Carousels",
  "B2B LinkedIn Thought Leadership Graphics",
  "Animated Motion Snippets & Micro-GIFs",
  "Organic Feed Aesthetic & Template Kits",
  "Promotional & Seasonal Campaign Suites"
];

const PROCESS = [
  {
    "t": "Audience Psychographics & Creative Audit",
    "b": "We audit your historical ad performance, competitors, and audience comments to isolate winning visual angles and messaging hooks."
  },
  {
    "t": "Storyboarding & Concept Development",
    "b": "Our creative directors conceptualize fresh creative formats: side-by-side comparisons, founder stories, customer reviews, and stat callouts."
  },
  {
    "t": "Design Execution & Multi-Size Adaptation",
    "b": "We execute high-fidelity graphics across all required social aspect ratios (1:1 feed, 9:16 story/reel, 16:9 banner)."
  },
  {
    "t": "Delivery, Performance Review & Iteration",
    "b": "Handover of finalized files ready for your ad manager. We review monthly CTRs and iterate on winning visual formulas."
  }
];

const FAQS = [
  {
    "q": "What dimensions and file formats do you deliver for social creatives?",
    "a": "We deliver all standard social media dimensions: 1080x1080 (1:1 Square), 1080x1350 (4:5 Portrait Feed), and 1080x1920 (9:16 Vertical Story/Reel). Formats include high-res PNG, JPG, MP4 motion clips, and editable Figma/PSD files."
  },
  {
    "q": "Can you work alongside our existing media buying team or ad agency?",
    "a": "Yes. We frequently act as the dedicated creative design engine for internal media buyers and performance agencies, producing the exact creative angles they request."
  },
  {
    "q": "Do you write the copy on the graphics, or do we provide it?",
    "a": "We do both! Our in-house copywriters can craft high-converting headlines, hook badges, and value propositions, or we can use copy supplied by your marketing team."
  },
  {
    "q": "How many creative concepts do you recommend testing per week?",
    "a": "For active ad accounts spending ₹1L+ ($1,500+) monthly, we recommend testing 3 to 5 new creative concepts weekly to discover breakthrough winners and prevent creative fatigue."
  },
  {
    "q": "Can you create animated motion graphics for social ads?",
    "a": "Yes. We create subtle kinetic motion graphics, animated text callouts, product zoom effects, and 5-to-15 second video ads in MP4 and GIF formats."
  },
  {
    "q": "Do you offer monthly retainer plans for ongoing creative design?",
    "a": "Yes. Most of our clients work with us on structured monthly creative retainers, ensuring a steady stream of fresh ad sets, carousels, and promotional graphics."
  }
];

const RELATED = [
  {
    "label": "Graphic Design",
    "href": "/graphic-design"
  },
  {
    "label": "Video Editing",
    "href": "/video-editing"
  },
  {
    "label": "Performance Marketing",
    "href": "/performance-marketing"
  },
  {
    "label": "Facebook & Meta Ads",
    "href": "/facebook-meta-ads"
  }
];

const OVERVIEW: string[] | null = [
  "Digital ad algorithms (Meta Advantage+, TikTok Ads, Google Demand Gen) rely heavily on creative diversity. When creative fatigue sets in, CPMs rise, click-through rates decline, and ad budgets are wasted on burnt-out audiences. The difference between a 1.2x ROAS and a 4.5x ROAS frequently lies in visual hierarchy, clarity of the hook, and copy placement.",
  "Hover Business Services LLP blends data-backed performance advertising insights with world-class graphic artistry. We study your historical ad metrics and customer psychographics to craft visual concepts that systematically address pain points, showcase social proof, and highlight value propositions.",
  "From carousel design breakdowns that educate B2B decision-makers on LinkedIn to thumb-stopping product spotlights on Instagram, we provide the visual fuel your brand needs to scale social channels."
];

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Invest in Performance Social Media Creatives?",
  "sub": "Beat creative fatigue, lower acquisition costs, and build a magnetic brand presence.",
  "items": [
    {
      "t": "Combat Ad Fatigue With Continuous Creative Iteration",
      "b": "Consistently deploy fresh visual angles, lifestyle imagery, typography layouts, and customer proof formats to sustain low ad costs."
    },
    {
      "t": "Engineered for High Click-Through Rates (CTR)",
      "b": "Strategic placement of high-contrast visual cues, compelling headline badges, and unmistakable call-to-action buttons."
    },
    {
      "t": "Platform-Specific Creative Architecture",
      "b": "Tailored designs that respect platform culture—polished editorial carousels for LinkedIn, aesthetic lifestyle grids for Instagram, and punchy direct-response ads for Meta."
    },
    {
      "t": "B2B Authority & Thought Leadership Carousels",
      "b": "Turn complex enterprise case studies and industry research into swipeable, multi-slide PDF carousels that generate organic shares."
    },
    {
      "t": "Seamless Brand Consistency Across Feeds",
      "b": "Ensure your brand guidelines, primary colors, and tone of voice are faithfully maintained across every single graphic asset."
    },
    {
      "t": "A/B Testing Packs for Paid Media Buyers",
      "b": "Every creative set includes multiple headline variations, background colors, and visual hooks to maximize testing velocity."
    }
  ]
};

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = {
  "title": "Our Social Media Design Solutions",
  "sub": "Complete creative suites for paid advertising campaigns and organic feed domination.",
  "items": [
    {
      "t": "Paid Meta & Instagram Ad Creative Packs",
      "b": "High-converting static and animated ad units designed in 1:1 square, 9:16 vertical stories, and 4:5 feed formats.",
      "f": [
        "Hook variation packs",
        "Comparison & feature callouts",
        "Social proof & review overlays"
      ]
    },
    {
      "t": "High-Engagement Educational Carousels",
      "b": "Multi-slide swipeable carousels engineered for high dwell time, profile visits, and bookmark saves on Instagram and LinkedIn.",
      "f": [
        "Seamless slide transitions",
        "Step-by-step framework visualizers",
        "Clear save/share end slides"
      ]
    },
    {
      "t": "B2B LinkedIn Thought Leadership Graphics",
      "b": "Sophisticated graphics, statistical charts, quote cards, and executive insights designed for corporate leadership profiles.",
      "f": [
        "Data visualization & benchmark charts",
        "Corporate typography hierarchy",
        "Event & webinar promo banners"
      ]
    },
    {
      "t": "Animated Motion Snippets & Micro-GIFs",
      "b": "Subtle 5 to 10 second motion graphics, UI walkthrough snippets, and looping product teasers that outshine static images.",
      "f": [
        "MP4 and GIF exports",
        "Eye-catching ambient motion",
        "Lightweight for fast mobile loading"
      ]
    },
    {
      "t": "Organic Feed Aesthetic & Template Kits",
      "b": "Cohesive, modular social feed templates customized in Figma or Canva so your internal team can produce daily branded posts.",
      "f": [
        "Custom grid layouts",
        "Curated color & font libraries",
        "Easily editable text modules"
      ]
    },
    {
      "t": "Promotional & Seasonal Campaign Suites",
      "b": "Comprehensive creative campaigns for Black Friday, Diwali, product launches, seasonal sales, and holiday events.",
      "f": [
        "Urgency-driven countdown badges",
        "Multi-channel promotional sets",
        "Email header & banner matches"
      ]
    }
  ]
};

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Who Can Benefit From Our Social Creatives?",
  "sub": "Built for performance agencies, brands, and active social teams.",
  "items": [
    {
      "t": "Performance Marketing Teams",
      "b": "Media buyers needing high-velocity ad creative testing to scale monthly ad spend profitably without fatigue."
    },
    {
      "t": "Direct-to-Consumer (D2C) Brands",
      "b": "Consumer lifestyle, fashion, beauty, and health brands looking to build an aspirational, highly shoppable feed."
    },
    {
      "t": "B2B Software & Professional Services",
      "b": "Enterprises needing authoritative LinkedIn graphics and executive carousels that generate qualified commercial inquiries."
    },
    {
      "t": "Coaches, Consultants & Course Creators",
      "b": "Personal brands looking to establish credibility, share insights, and fill webinar and consultation funnels."
    }
  ]
};

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Choose Hover Business Services LLP for Social Creatives?",
  "sub": "Where aesthetic elegance meets rigorous performance advertising science.",
  "items": [
    {
      "t": "Data-Informed Creative Team",
      "b": "Our designers collaborate directly with our internal media buyers. We understand ROAS, CTR, and hook rates."
    },
    {
      "t": "High-Volume Production Bandwidth",
      "b": "Deliver dozens of bespoke creative variants per month without compromising on typographic precision or brand standards."
    },
    {
      "t": "All Ratios & Formats Included",
      "b": "Every concept is adapted for 1:1, 4:5, and 9:16 vertical formats, fully optimized for mobile feeds and stories."
    },
    {
      "t": "100% Editable Source Files",
      "b": "Access complete Figma or Adobe source files with clean layers, components, and font licenses for your library."
    }
  ]
};

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = {
  "title": "Performance Social Ads & Carousel Showcase",
  "sub": "High-converting direct-response ad sets, swipeable LinkedIn carousels, and Instagram feed kits.",
  "items": [
    {
      "title": "Meta Advantage+ Direct Response Ad Suite",
      "tag": "Meta Ads",
      "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      "b": "High-contrast visual hook cards tested across 5 creative variants, achieving a 4.2x ROAS lift."
    },
    {
      "title": "B2B Thought Leadership Swipeable Carousel",
      "tag": "LinkedIn",
      "image": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=800&auto=format&fit=crop",
      "b": "Multi-slide strategic breakdown illustrating enterprise industry benchmarks with over 1,200 organic shares."
    },
    {
      "title": "Aesthetic Lifestyle Feed Kit & Modular Templates",
      "tag": "Instagram Feed",
      "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      "b": "Harmonious 9-grid social template system customized in Figma for daily brand posting."
    },
    {
      "title": "Urgency-Driven Festive Sale Campaign Creative Pack",
      "tag": "Festive Ads",
      "image": "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
      "b": "Complete promotional ad suite with urgency countdown badges, flash discount banners, and story sets."
    },
    {
      "title": "Motion Micro-GIFs & Kinetic Feature Highlights",
      "tag": "Micro-Motion",
      "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      "b": "Looping 6-second motion graphics demonstrating product features with higher click-through rates."
    },
    {
      "title": "Before & After Social Proof Comparison Cards",
      "tag": "Comparison Ads",
      "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
      "b": "Credibility-building review graphics pairing real customer testimonials with clear product benefits."
    }
  ]
};

const ICONS = [Palette, PenTool, Layers, Eye, Sparkles, Award];

/* ============================== Page ============================== */

export default async function SocialMediaCreativesPage() {
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

      <section className="py-16 md:py-24">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className={`rounded-[32px] bg-[var(--color-brand-soft)] p-8 md:p-10 ${OVERVIEW ? "" : "lg:col-span-2"}`}>
            <p className="max-w-[60ch] font-display text-2xl font-bold leading-snug text-[var(--color-ink)]">{PAGE.intro}</p>
          </div>
          {OVERVIEW && (
            <div className="space-y-4 self-center text-[var(--color-text-muted)]">
              {OVERVIEW.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "The difference it makes"}</h2>
          <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className="grid items-center gap-3 py-6 md:grid-cols-[56px_1fr_1.4fr]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-2)]"><I size={20} /></span>
                  <h3 className="font-display text-xl font-bold">{b.t}</h3>
                  <p className="text-[var(--color-text-muted)]">{b.b}</p>
                </div>
              );
            })}
          </div>
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

      <section className="bg-[var(--color-brand-soft)] py-16 md:py-20">
        <div className="container-max grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Your checklist, handled</h2>
          <ul className="divide-y divide-[var(--color-brand)]/15 rounded-3xl bg-white px-6">
            {INCLUDES.map((x) => (
              <li key={x} className="flex items-center justify-between gap-4 py-4 font-semibold">{x}<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Check size={14} /></span></li>
            ))}
          </ul>
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

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">From kickoff to results</h2>
          <ol className="mt-10 grid gap-4" style={{ gridTemplateColumns: `repeat(auto-fit,minmax(220px,1fr))` }}>
            {PROCESS.map((s, i) => (
              <li key={s.t} className="rounded-3xl bg-white p-7 shadow-[var(--shadow-sm)]">
                <span className="font-display text-5xl font-extrabold text-[var(--color-brand)]/20">{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

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

      <section className="py-16 md:py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Before you ask</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">Still unsure? Speak to a specialist directly.</p>
            <a href={`tel:${co.phone}`} className="mt-6 inline-flex items-center gap-2 font-display text-xl font-bold text-[var(--color-brand)]"><Phone size={18} /> {co.phone}</a>
          </div>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-[var(--color-surface)] p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-max">
          <div className="grid items-center gap-8 rounded-[32px] border-2 border-[var(--color-ink)] p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-4xl">Get your free plan</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">Share your goals. You get a scope, timeline and quote within 48 hours.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-4 text-sm font-bold text-white">Request a quote <ArrowRight size={16} /></Link>
              <Link href="/free-website-audit" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-7 py-4 text-sm font-semibold">Free website audit</Link>
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
