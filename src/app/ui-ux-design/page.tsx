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
    title: "UI/UX Design Agency | Product Design & Design Systems | HBS",
    description: "Human-centric UI/UX design services by Hover Business Services LLP. Wireframing, Figma prototypes, design systems, SaaS dashboards, and CRO audits.",
    path: "/ui-ux-design",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Creative & Design",
  "href": "/graphic-design"
};

const PAGE = {
  "title": "UI/UX Design Services for Web & Mobile",
  "eyebrow": "Product Strategy & Human-Centric UI",
  "tagline": "Intuitive user experiences, conversion-engineered interfaces, and scalable design systems for SaaS, mobile apps, and enterprise web.",
  "intro": "Exceptional digital products balance human intuition with business objectives. Hover Business Services LLP designs elegant UI/UX interfaces that reduce user friction, accelerate onboarding, and maximize customer retention. From comprehensive SaaS web apps and iOS/Android applications to design token systems, we turn complex workflows into delightful digital interactions."
};

type HeroData = { mark: string };
const HERO: HeroData = {
  "mark": "uiux"
};

const STATS: [string, string][] = [
  [
    "200+",
    "SaaS & Mobile Products Designed"
  ],
  [
    "+42%",
    "Average Onboarding Completion Lift"
  ],
  [
    "100%",
    "Figma Token-Based Architecture"
  ]
];

const BENEFITS = [
  {
    "t": "Accelerated User Onboarding & Lower Churn",
    "b": "Intuitive user flows allow new customers to experience your product’s core value faster, reducing early drop-offs and churn."
  },
  {
    "t": "Higher Conversion Rates (CRO by Design)",
    "b": "Eliminate friction points across registration forms, pricing matrices, checkout funnels, and checkout flows to increase conversions."
  },
  {
    "t": "Scalable Component-Based Design Systems",
    "b": "Reusable atomic design components and Figma design tokens that allow your product team to build new features 3x faster."
  },
  {
    "t": "Decreased Development Costs & Rework",
    "b": "Detailed prototypes and user-tested wireframes solve workflow flaws before a single line of frontend code is written."
  },
  {
    "t": "Accessibility & Cross-Platform Compliance",
    "b": "Interfaces engineered to meet WCAG 2.1 accessibility standards with high-contrast color ratios and responsive touch targets."
  },
  {
    "t": "Effortless Developer Handoffs",
    "b": "Pixel-perfect Figma files with comprehensive layout grids, responsive constraints, component states, and exported SVG assets."
  }
];

const INCLUDES = [
  "User Research & Journey Architecture",
  "Low-Fidelity & High-Fidelity Wireframes",
  "Pixel-Perfect SaaS & Web App UI",
  "Native Mobile App Design (iOS & Android)",
  "Enterprise Design Systems & UI Kits",
  "Interactive Clickable Prototypes"
];

const PROCESS = [
  {
    "t": "Discovery & Information Architecture",
    "b": "We audit your business logic, user personas, and technical constraints to map information architecture and core user pathways."
  },
  {
    "t": "Wireframing & Structural Validation",
    "b": "We design low-fidelity wireframes detailing every screen and state, testing navigational clarity before styling begins."
  },
  {
    "t": "High-Fidelity UI & Design Systems",
    "b": "We apply brand aesthetics, typography scales, custom iconography, and component libraries to construct finalized interfaces."
  },
  {
    "t": "Interactive Prototyping & Dev Handoff",
    "b": "We build clickable Figma prototypes and prepare clean developer specifications with tokens, assets, and styling notes."
  }
];

const FAQS = [
  {
    "q": "Which tools does your UI/UX team use?",
    "a": "We primarily design in Figma, utilizing its advanced auto-layout, variable tokens, and interactive prototyping features. For specialized animations and 3D interactions, we also utilize Principle, After Effects, and Spline."
  },
  {
    "q": "Do you provide frontend development alongside UI/UX design?",
    "a": "Yes. Hover Business Services LLP is a full-service agency. Our in-house frontend engineers can take the finalized Figma design system and code it in Next.js, React, Tailwind CSS, or React Native."
  },
  {
    "q": "How long does a typical SaaS or mobile app UI/UX design project take?",
    "a": "A focused MVP or mobile application design typically takes 4 to 8 weeks. Larger enterprise platforms with complex permission structures and dozens of unique screens take 8 to 14 weeks."
  },
  {
    "q": "Can you redesign our existing application without breaking current workflows?",
    "a": "Yes. We conduct UX heuristic audits to identify exact friction points, retaining what works for your existing power users while modernizing the interface and streamlining confusing workflows."
  },
  {
    "q": "What is included in the developer handoff package?",
    "a": "Your engineering team receives an organized Figma file with design tokens (colors, spacing, typography), interactive prototypes, component states (hover, active, disabled), and exported SVG icons."
  },
  {
    "q": "Do you conduct user testing during the design phase?",
    "a": "Yes. We can conduct unmoderated and moderated usability testing using interactive prototypes to observe where real users hesitate or encounter confusion before development starts."
  }
];

const RELATED = [
  {
    "label": "Custom Web Development",
    "href": "/custom-web-development"
  },
  {
    "label": "Graphic Design",
    "href": "/graphic-design"
  },
  {
    "label": "Next.js Development",
    "href": "/next-js-development"
  },
  {
    "label": "Mobile App Development",
    "href": "/mobile-app-development"
  }
];

const OVERVIEW: string[] | null = [
  "Users decide whether to stay on a digital platform or uninstall an application within minutes. Cluttered navigation hierarchies, ambiguous button labels, slow onboarding workflows, and inconsistent visual design create cognitive overload and drive high churn rates.",
  "Hover Business Services LLP approaches UI/UX design through rigorous user research, interactive wireframing, and pixel-perfect design systems. We collaborate closely with product managers, founders, and engineers to build interfaces that feel effortless to navigate while guiding users toward meaningful commercial actions.",
  "Our deliverables are constructed in Figma with modern auto-layout, component variants, and design token hierarchies, ensuring seamless handoffs to frontend development teams."
];

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Invest in World-Class UI/UX Design?",
  "sub": "Transform user satisfaction into measurable business revenue and enterprise valuation.",
  "items": [
    {
      "t": "Accelerated User Onboarding & Lower Churn",
      "b": "Intuitive user flows allow new customers to experience your product’s core value faster, reducing early drop-offs and churn."
    },
    {
      "t": "Higher Conversion Rates (CRO by Design)",
      "b": "Eliminate friction points across registration forms, pricing matrices, checkout funnels, and checkout flows to increase conversions."
    },
    {
      "t": "Scalable Component-Based Design Systems",
      "b": "Reusable atomic design components and Figma design tokens that allow your product team to build new features 3x faster."
    },
    {
      "t": "Decreased Development Costs & Rework",
      "b": "Detailed prototypes and user-tested wireframes solve workflow flaws before a single line of frontend code is written."
    },
    {
      "t": "Accessibility & Cross-Platform Compliance",
      "b": "Interfaces engineered to meet WCAG 2.1 accessibility standards with high-contrast color ratios and responsive touch targets."
    },
    {
      "t": "Effortless Developer Handoffs",
      "b": "Pixel-perfect Figma files with comprehensive layout grids, responsive constraints, component states, and exported SVG assets."
    }
  ]
};

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = {
  "title": "Our UI/UX Design & Product Capabilities",
  "sub": "From initial user discovery to comprehensive enterprise design systems.",
  "items": [
    {
      "t": "User Research & Journey Architecture",
      "b": "Mapping user personas, empathy maps, task flows, and information architecture (IA) to uncover core behavioral motivations.",
      "f": [
        "Information architecture diagrams",
        "User persona blueprints",
        "Friction-point analysis"
      ]
    },
    {
      "t": "Low-Fidelity & High-Fidelity Wireframes",
      "b": "Rapid structural wireframing to validate user flows and page layout hierarchies before committing to visual styling.",
      "f": [
        "Iterative structural sketches",
        "Clickable low-fi prototypes",
        "Workflow validation testing"
      ]
    },
    {
      "t": "Pixel-Perfect SaaS & Web App UI",
      "b": "Modern, high-density dashboard interfaces, complex data tables, analytics charts, and responsive web application screens.",
      "f": [
        "Clean visual hierarchy",
        "Custom chart & table designs",
        "Dark mode & light mode palettes"
      ]
    },
    {
      "t": "Native Mobile App Design (iOS & Android)",
      "b": "Mobile applications following Apple Human Interface Guidelines and Google Material You design conventions.",
      "f": [
        "Native gesture interactions",
        "Haptic feedback considerations",
        "Complete screen state mapping"
      ]
    },
    {
      "t": "Enterprise Design Systems & UI Kits",
      "b": "Comprehensive design token libraries in Figma featuring auto-layout components, typography scales, and iconography sets.",
      "f": [
        "Atomic design methodology",
        "Figma variants & variables",
        "Developer documentation tokens"
      ]
    },
    {
      "t": "Interactive Clickable Prototypes",
      "b": "High-fidelity prototypes simulating real application interactions, micro-animations, and transitions for stakeholder reviews.",
      "f": [
        "Smart animation transitions",
        "User usability test recordings",
        "Investor demo ready flows"
      ]
    }
  ]
};

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Who Can Benefit From Our UI/UX Design?",
  "sub": "Empowering product teams, founders, and enterprise organizations.",
  "items": [
    {
      "t": "B2B SaaS & Tech Startups",
      "b": "Companies building web platforms and dashboards that need to look enterprise-grade to win high-ticket contracts."
    },
    {
      "t": "Mobile App Ventures",
      "b": "Founders launching consumer or enterprise iOS and Android apps requiring frictionless onboarding and high daily engagement."
    },
    {
      "t": "Enterprise Digital Modernization",
      "b": "Established corporations transforming legacy internal tools and outdated portals into modern, intuitive systems."
    },
    {
      "t": "High-Volume Ecommerce Platforms",
      "b": "Retailers wanting to eliminate checkout drop-offs and create mobile shopping experiences that rival industry leaders."
    }
  ]
};

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Choose Hover Business Services LLP for UI/UX?",
  "sub": "Deep technical comprehension paired with refined design sensibility.",
  "items": [
    {
      "t": "Engineering-Aware Designers",
      "b": "Our designers understand CSS Grid, Flexbox, React components, and API constraints. We design what can realistically be built."
    },
    {
      "t": "Mastery of Modern Figma Features",
      "b": "We leverage Figma variables, design tokens, auto-layout 5.0, and interactive components for rapid iteration and clean code sync."
    },
    {
      "t": "Commercial Conversion Focus",
      "b": "We do not design art for art’s sake. Every button placement, font size, and form field is calibrated to achieve commercial KPIs."
    },
    {
      "t": "Full Lifecycle Capability",
      "b": "From initial napkin sketches to full-stack Next.js and React frontend implementation, our agency can execute end-to-end."
    }
  ]
};

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = {
  "title": "UI/UX Design Systems & Mobile Product Showcase",
  "sub": "Explore human-centered web applications, SaaS dashboards, and native mobile interfaces.",
  "items": [
    {
      "title": "Fintech Wealth Management Mobile App (iOS / Android)",
      "tag": "Mobile App",
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "b": "Frictionless biometric onboarding, portfolio analytics, and one-tap investment execution."
    },
    {
      "title": "SaaS Cloud Infrastructure Management Dashboard",
      "tag": "SaaS Platform",
      "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      "b": "High-density metrics dashboard with interactive charts, server health telemetry, and team access permissions."
    },
    {
      "title": "Atomic Design System & Figma Token Library",
      "tag": "Design Tokens",
      "image": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
      "b": "Reusable component architecture built with Figma auto-layout 5.0 and synchronized CSS variables."
    },
    {
      "title": "D2C Single-Page Checkout & Cart Drawer Flow",
      "tag": "Checkout CRO",
      "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
      "b": "Eliminated 4 multi-step hurdles into a single unified checkout, lifting checkout conversions by 28%."
    },
    {
      "title": "Connected Health & Wearable Telemetry Dashboard",
      "tag": "Healthcare",
      "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      "b": "Real-time patient telemetry monitoring UI designed with high-contrast accessibility for doctors."
    },
    {
      "title": "B2B Enterprise Procurement & Supplier Portal",
      "tag": "Enterprise",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "b": "Complex multi-role requisition portal managing supplier bids, RFQs, and automated purchase approvals."
    }
  ]
};

const ICONS = [Palette, PenTool, Layers, Eye, Sparkles, Award];

/* ============================== Page ============================== */

export default async function UiUxDesignPage() {
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

      <section className="relative overflow-hidden bg-[var(--color-ink)] pb-16 pt-10 text-white md:pb-24 md:pt-14">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--color-brand)] opacity-30 blur-[120px]" />
        <div className="container-max relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="hover:underline">Home</Link><ChevronRight size={13} />
            <Link href={HUB.href} className="hover:underline">{HUB.label}</Link><ChevronRight size={13} />
            <span className="text-white">{PAGE.eyebrow}</span>
          </nav>
          <h1 className="mt-5 font-display font-extrabold" style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.04, letterSpacing: "-0.035em" }}>{PAGE.title}</h1>
          <p className="mt-5 max-w-[54ch] text-lg text-white/70">{PAGE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)] transition-transform hover:-translate-y-0.5">Get a free quote <ArrowRight size={16} /></Link>
            <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold border-white/30 text-white"><Phone size={15} /> {co.phone}</a>
          </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--color-ink)] pb-12 text-white">
        <div className="container-max grid gap-4 sm:grid-cols-3">
          {STATS.map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><p className="font-display text-3xl font-extrabold">{v}</p><p className="mt-1 text-sm text-white/60">{l}</p></div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
        <div className="container-max">
          <h2 className="max-w-[22ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "Why businesses choose this"}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className="flex gap-5 rounded-3xl border border-white/10 bg-white/[.04] p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand)]"><I size={22} /></span>
                  <div><h3 className="font-display text-lg font-bold">{b.t}</h3><p className="mt-1.5 text-sm text-white/60">{b.b}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max max-w-4xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{PAGE.eyebrow}, done properly</h2>
          <p className="mt-6 border-l-4 border-[var(--color-brand)] pl-5 text-lg text-[var(--color-ink)]">{PAGE.intro}</p>
          {OVERVIEW?.map((p, i) => <p key={i} className="mt-5 text-[var(--color-text-muted)]">{p}</p>)}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Scope of work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((x) => (
              <div key={x} className="rounded-2xl border-l-4 border-[var(--color-brand)] bg-[var(--color-surface)] p-5 font-semibold">{x}</div>
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

      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">The process</h2>
          <ol className="mt-10 space-y-3">
            {PROCESS.map((s, i) => (
              <li key={s.t} className="grid items-center gap-4 rounded-3xl border border-[var(--color-border)] p-6 md:grid-cols-[80px_1fr_1.6fr]">
                <span className="font-display text-4xl font-extrabold text-[var(--color-brand)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl font-bold">{s.t}</h3>
                <p className="text-[var(--color-text-muted)]">{s.b}</p>
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

      <section className="py-16 md:py-20">
        <div className="container-max max-w-4xl">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">FAQs</h2>
          <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[32px] bg-[var(--color-ink)] p-8 text-white md:p-12">
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[var(--color-brand)] opacity-40 blur-[100px]" />
            <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div><h2 className="font-display text-3xl font-extrabold md:text-4xl">Start this week</h2><p className="mt-2 text-white/65">One call. A clear plan. No long contracts.</p></div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold">Book a call <ArrowRight size={16} /></Link>
                <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
              </div>
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
