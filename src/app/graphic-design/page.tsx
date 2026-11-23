import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Phone, Check, Plus } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const metadata = buildMeta({
  title: "Creative Graphic Design Services | Branding & Collateral | HBS",
  description: "Elevate your brand with professional graphic design services by Hover Business Services LLP. Corporate identity, marketing collateral, brochures, and digital creatives.",
  path: "/graphic-design",
});

/* ---------------- Page content (edit here) ---------------- */

type Art = "logo" | "video" | "social" | "uiux" | "pack" | "print";
const STUDIO: { label: string; href: string; body: string; art: Art; bg: string; fg: string }[] = [
  { label: "Logo Design", href: "/logo-design", body: "Marks and identity systems people remember.", art: "logo", bg: "#e5231b", fg: "#fff" },
  { label: "Video Editing", href: "/video-editing", body: "Reels, ads and brand films cut to hold attention.", art: "video", bg: "#10131a", fg: "#fff" },
  { label: "Social Media Creatives", href: "/social-media-creatives", body: "Posts, stories and ads made for each platform.", art: "social", bg: "#f6d9c9", fg: "#10131a" },
  { label: "UI/UX Design", href: "/ui-ux-design", body: "Interfaces that are easy and pleasant to use.", art: "uiux", bg: "#e8e4f7", fg: "#10131a" },
  { label: "Product Packaging Design", href: "/product-packaging-design", body: "Labels and boxes that win the shelf.", art: "pack", bg: "#b98a2f", fg: "#fff" },
  { label: "Brochure Design", href: "/brochure-design", body: "Brochures, catalogues and company profiles.", art: "print", bg: "#faf8f6", fg: "#10131a" },
];

const GALLERY = [
  { title: "Aura skincare identity & guidelines", tag: "Identity system", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=900&auto=format&fit=crop" },
  { title: "Corporate stationery suite", tag: "Print", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=900&auto=format&fit=crop" },
  { title: "Fintech investor pitch deck", tag: "Presentation", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop" },
  { title: "Exhibition backdrops & standees", tag: "Large format", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=900&auto=format&fit=crop" },
  { title: "Tri-fold product catalogue", tag: "Brochure", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=900&auto=format&fit=crop" },
  { title: "Display ad campaign set", tag: "Digital ads", image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=900&auto=format&fit=crop" },
];

const DELIVERABLES = [
  { t: "Corporate identity & brand books", b: "Logos, colour hierarchy, typography rules and iconography in one guide.", f: ["Vector logo packages (SVG, EPS, AI)", "Brand style book", "Usage do's and don'ts"] },
  { t: "Marketing collateral & print", b: "Brochures, profiles, catalogues, stationery and flyers.", f: ["Print-ready CMYK PDFs", "Spot UV & embossing specs", "Interactive PDF editions"] },
  { t: "Pitch decks & presentations", b: "Investor, sales and review decks in PowerPoint, Keynote or Figma.", f: ["Custom slide templates", "Charts & data visuals", "Editable icon sets"] },
  { t: "Digital ads & campaign graphics", b: "Display banners, social ads and remarketing sets.", f: ["All standard IAB sizes", "A/B creative variants", "Platform-ready exports"] },
  { t: "Infographics & visual data", b: "Turn processes, research and comparisons into clear visuals.", f: ["Story-led layouts", "Social snippet cut-downs", "Web-optimised assets"] },
  { t: "Exhibition & trade show graphics", b: "Backdrops, roll-up standees and booth graphics.", f: ["Large-format setup", "Booth mockups", "Printer coordination"] },
];

const PROCESS = [
  { t: "Brief & visual audit", b: "We study your audience, current assets and competitors." },
  { t: "Concepts & moodboards", b: "Two to three distinct directions with type and colour pairings." },
  { t: "Refine", b: "We polish your chosen direction: spacing, contrast, copy, hierarchy." },
  { t: "Handover", b: "Organised master files for print, web and social." },
];

const AUDIENCES = [
  { t: "B2B & corporate", b: "Brochures, tender documents, company profiles and investor decks." },
  { t: "Tech startups", b: "Identity systems, fundraising decks and product marketing graphics." },
  { t: "D2C & ecommerce", b: "Social ad creatives, packaging and seasonal sale campaigns." },
  { t: "Professional services", b: "Premium, trustworthy brands for consultants, clinics and law firms." },
];

const FAQS = [
  { q: "What file formats will I receive?", a: "Editable source files (AI, PSD, Figma), print-ready PDFs (CMYK, 300 DPI with bleed) and web formats (PNG, JPG, WebP, SVG)." },
  { q: "How many revisions are included?", a: "Usually two to three structured revision rounds, so the final work matches your brief exactly." },
  { q: "Can you follow our existing brand guidelines?", a: "Yes. We regularly design within established brand books and style guides." },
  { q: "How fast can you deliver?", a: "Brochures, flyers and ads usually take 3 to 7 business days. A full identity system takes 2 to 3 weeks." },
  { q: "Who owns the final designs?", a: "You do. Full copyright and all master source files are handed over on completion." },
];

/* ---------------- Mini artworks (pure CSS) ---------------- */

function MiniArt({ art, fg }: { art: Art; fg: string }) {
  switch (art) {
    case "logo":
      return (
        <div className="relative h-24 w-24">
          <span className="absolute inset-0 rounded-full border-[10px]" style={{ borderColor: fg }} />
          <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md" style={{ background: fg }} />
        </div>
      );
    case "video":
      return (
        <div className="w-40">
          <div className="flex h-20 items-center justify-center rounded-lg border-2 border-white/30">
            <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-[#e5231b]" />
          </div>
          <div className="mt-2 flex h-3 gap-0.5">{[3, 5, 2, 4, 6, 3, 5].map((w, i) => <span key={i} className="rounded-sm bg-white/30" style={{ flex: w }} />)}</div>
        </div>
      );
    case "social":
      return (
        <div className="grid w-32 grid-cols-3 gap-1">
          {["#e5231b", "#10131a", "#fff", "#fff", "#b98a2f", "#e5231b", "#10131a", "#fff", "#b98a2f"].map((c, i) => <span key={i} className="aspect-square rounded-sm" style={{ background: c }} />)}
        </div>
      );
    case "uiux":
      return (
        <div className="w-36 rounded-lg bg-white p-2 shadow-md">
          <div className="h-3 w-16 rounded bg-[#10131a]" />
          <div className="mt-2 grid grid-cols-2 gap-1.5"><span className="h-8 rounded bg-[#e8e4f7]" /><span className="h-8 rounded bg-[#e8e4f7]" /></div>
          <div className="mt-2 h-4 w-14 rounded-full bg-[#e5231b]" />
        </div>
      );
    case "pack":
      return (
        <div className="relative h-24 w-20">
          <span className="absolute inset-x-0 bottom-0 top-4 rounded-md bg-white/90" />
          <span className="absolute inset-x-2 top-0 h-6 rounded-t-md bg-white/60" />
          <span className="absolute inset-x-3 top-10 h-6 rounded-sm bg-[#10131a]" />
        </div>
      );
    case "print":
      return (
        <div className="flex">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-24 w-12 border border-[#10131a]/15 bg-white p-1.5 shadow-sm" style={{ transform: `skewY(${i === 1 ? 0 : i === 0 ? 6 : -6}deg)` }}>
              <span className="block h-2 w-full rounded-sm bg-[#e5231b]/80" />
              <span className="mt-1.5 block h-1 w-3/4 rounded-sm bg-[#10131a]/20" />
              <span className="mt-1 block h-1 w-2/3 rounded-sm bg-[#10131a]/20" />
            </span>
          ))}
        </div>
      );
  }
}

/* ---------------- Page ---------------- */

export default async function CreativeDesignPage() {
  const co = await getCompany();

  return (
    <div className="cd text-[var(--color-ink)]">
      <style>{`
        .cd h1,.cd h2,.cd h3{color:inherit}
        @keyframes cd-drop{from{opacity:0;transform:translateY(-30px) rotate(var(--r))}to{opacity:1;transform:rotate(var(--r))}}
        .cd-card{transform:rotate(var(--r));animation:cd-drop .9s cubic-bezier(.2,.8,.2,1) both}
        @media (prefers-reduced-motion:reduce){.cd-card{animation:none}}
      `}</style>

      {/* HERO — studio board */}
      <section className="relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="container-max grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="font-display text-lg font-bold text-[var(--color-brand)]">Creative & Design studio</p>
            <h1 className="mt-4 font-display font-extrabold" style={{ fontSize: "clamp(3rem,7.4vw,6.4rem)", lineHeight: 0.95, letterSpacing: "-0.045em" }}>
              Design people stop scrolling for.
            </h1>
            <p className="mt-7 max-w-[48ch] text-lg text-[var(--color-text-muted)]">
              Logos, brand systems, social creatives, packaging, video and interfaces. One senior team that makes your brand look as good as your work.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-7 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">Start a design project <ArrowRight size={16} /></Link>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-bold underline decoration-[var(--color-brand)] decoration-2 underline-offset-4">See selected work</a>
            </div>
          </div>

          {/* board of stacked cards */}
          <div className="relative mx-auto h-[420px] w-full max-w-[460px]">
            <div className="cd-card absolute left-0 top-6 w-[62%] rounded-3xl bg-white p-5 shadow-[var(--shadow-lg)]" style={{ "--r": "-6deg", animationDelay: ".1s" } as CSSProperties}>
              <p className="text-xs font-semibold text-[var(--color-text-muted)]">Palette</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[["#E5231B", "Signal red"], ["#10131A", "Ink"], ["#B98A2F", "Gold"], ["#F3EFEC", "Paper"]].map(([c, n]) => (
                  <div key={c}>
                    <span className="block h-14 rounded-xl border border-black/5" style={{ background: c }} />
                    <p className="mt-1 text-[11px] font-semibold">{n}</p>
                    <p className="font-mono text-[10px] text-[var(--color-text-muted)]">{c}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="cd-card absolute right-0 top-0 flex w-[44%] flex-col items-center justify-center rounded-3xl bg-[var(--color-brand)] p-6 text-white shadow-[var(--shadow-lg)]" style={{ "--r": "7deg", animationDelay: ".25s" } as CSSProperties}>
              <span className="font-display text-7xl font-extrabold leading-none">Aa</span>
              <p className="mt-3 text-xs font-semibold opacity-80">Plus Jakarta Sans</p>
            </div>
            <div className="cd-card absolute bottom-0 right-6 w-[58%] rounded-3xl bg-[var(--color-ink)] p-5 text-white shadow-[var(--shadow-lg)]" style={{ "--r": "-2deg", animationDelay: ".4s" } as CSSProperties}>
              <p className="text-xs font-semibold text-white/60">Logo grid</p>
              <div className="relative mt-3 flex h-28 items-center justify-center rounded-xl" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "14px 14px" }}>
                <span className="absolute h-20 w-20 rounded-full border border-dashed border-white/30" />
                <span className="font-display text-4xl font-extrabold">H<span className="text-[var(--color-brand)]">.</span></span>
              </div>
            </div>
            <div className="cd-card absolute bottom-10 left-4 rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-bold shadow-[var(--shadow-md)]" style={{ "--r": "-8deg", animationDelay: ".55s" } as CSSProperties}>
              2,500+ assets delivered
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO SERVICES */}
      <section className="pb-16 md:pb-24">
        <div className="container-max">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">What the studio makes</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STUDIO.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] p-7 transition-transform hover:-translate-y-1 ${i === 0 ? "lg:row-span-2 lg:min-h-[616px]" : ""} ${i === STUDIO.length - 1 ? "sm:col-span-2 lg:col-span-3 lg:min-h-[240px] lg:flex-row lg:items-center lg:gap-10" : ""} ${s.bg === "#faf8f6" ? "border border-[var(--color-border)]" : ""}`}
                style={{ background: s.bg, color: s.fg }}
              >
                <div className="flex items-start justify-between">
                  <h3 className={`font-display font-extrabold ${i === 0 ? "text-4xl" : "text-2xl"}`} style={{ maxWidth: "12ch" }}>{s.label}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-transform group-hover:rotate-45" style={{ borderColor: s.fg === "#fff" ? "rgba(255,255,255,.4)" : "rgba(16,19,26,.2)" }}>
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center py-6 transition-transform duration-500 group-hover:scale-105">
                  <MiniArt art={s.art} fg={s.fg} />
                </div>
                <p className="text-sm font-medium" style={{ opacity: 0.8 }}>{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WORK GALLERY */}
      <section id="work" className="scroll-mt-24 bg-[var(--color-ink)] py-16 text-white md:py-24">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-[18ch] font-display text-4xl font-extrabold tracking-tight md:text-5xl">Selected brand & collateral work</h2>
            <Link href="/portfolio" className="inline-flex items-center gap-2 self-start text-sm font-bold text-white/80 hover:text-white">Full portfolio <ArrowUpRight size={16} /></Link>
          </div>
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {GALLERY.map((g, i) => (
              <figure key={g.title} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl">
                <div className={`relative w-full ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image src={g.image} alt={g.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 pt-16">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">{g.tag}</span>
                  <p className="mt-2 font-display text-lg font-bold">{g.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-16 md:py-24">
        <div className="container-max grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-4xl font-extrabold tracking-tight">What you get in the box</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">From brand discovery to production-ready files for print, web and social.</p>
            <ul className="mt-6 space-y-2 text-sm font-semibold">
              {["Original concepts, never templates", "Full source file ownership", "Print and web ready exports"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check size={16} className="text-[var(--color-brand)]" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {DELIVERABLES.map((d) => (
              <div key={d.t} className="border-t-2 border-[var(--color-ink)] py-6">
                <h3 className="font-display text-xl font-bold">{d.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{d.b}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.f.map((f) => <span key={f} className="rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-medium">{f}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[var(--color-brand-soft)] py-16 md:py-20">
        <div className="container-max">
          <h2 className="font-display text-4xl font-extrabold tracking-tight">From brief to final files</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.t} className="relative rounded-3xl bg-white p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand)] font-display font-extrabold text-white">{i + 1}</span>
                <h3 className="mt-5 font-display text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{p.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AUDIENCES + FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-max grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold">Who we design for</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {AUDIENCES.map((a) => (
                <div key={a.t} className="rounded-2xl border border-[var(--color-border)] p-5">
                  <h3 className="font-display font-bold">{a.t}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{a.b}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold">Questions</h2>
            <div className="mt-6 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {FAQS.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">
                    {f.q}
                    <Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-brand)] px-8 py-14 text-center text-white md:py-20">
            <span className="pointer-events-none absolute -left-10 -top-16 font-display text-[16rem] font-extrabold leading-none text-white/10">&ldquo;</span>
            <h2 className="relative mx-auto max-w-[18ch] font-display text-4xl font-extrabold md:text-6xl" style={{ letterSpacing: "-0.035em" }}>Let&apos;s make something worth looking at.</h2>
            <p className="relative mx-auto mt-4 max-w-[46ch] text-white/85">Share your brief. First concepts usually land in 48 to 72 hours.</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">Share your brief <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
