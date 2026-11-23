import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Phone, Sparkles, Search, PenLine, Target, Share2, Package,
  Star, MapPin, TrendingUp, MousePointerClick, BarChart3, Check, Plus,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Digital Marketing Services | Hover Business Services LLP",
    description: "SEO, PPC, social media, content and AI search services from Hover Business Services LLP.",
    path: "/digital-marketing",
  });

/* ---------------- Page content (edit here) ---------------- */

const CHANNELS = [
  {
    id: "ai-search",
    icon: Sparkles,
    title: "AI Search & Visibility",
    sub: "Be found and recommended by ChatGPT, Gemini, Perplexity and Google AI Overviews.",
    items: [
      { label: "LLMO Services", href: "/llmo-services", body: "Make your brand easy for AI assistants to find, understand and recommend." },
      { label: "AI Search Optimization", href: "/ai-search-optimization", body: "Get cited in AI Overviews, Copilot and Perplexity answers." },
      { label: "Generative Engine Optimization", href: "/generative-engine-optimization", body: "Shape content so generative engines quote it as a trusted source." },
      { label: "Answer Engine Optimization", href: "/answer-engine-optimization", body: "Win direct answers, featured snippets and voice results." },
      { label: "AI Brand Visibility", href: "/ai-brand-visibility", body: "See how AI tools describe your brand, and fix what they get wrong." },
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Services",
    sub: "Rank higher on Google and turn organic traffic into enquiries.",
    items: [
      { label: "SEO Services", href: "/seo-services", body: "Full-service SEO that grows rankings, traffic and enquiries." },
      { label: "Local SEO", href: "/local-seo", body: "Rank in the map pack where nearby customers search." },
      { label: "Ecommerce SEO", href: "/ecommerce-seo", body: "Category, product and technical SEO built for online stores." },
      { label: "Technical SEO", href: "/technical-seo", body: "Fix crawling, speed and structure issues that hold rankings back." },
      { label: "Small Business SEO", href: "/small-business-seo", body: "Focused, affordable SEO that brings qualified local leads." },
      { label: "SEO Audit", href: "/seo-audit", body: "A full technical, content and link review with a prioritised fix list." },
    ],
  },
  {
    id: "content",
    icon: PenLine,
    title: "Content & Link Building",
    sub: "Content and authority that search engines and buyers trust.",
    items: [
      { label: "Content Writing", href: "/content-writing", body: "Clear, search-friendly content that informs buyers." },
      { label: "Link Building", href: "/link-building", body: "Relevant, high-quality backlinks that build lasting authority." },
      { label: "Blog Outreach", href: "/blog-outreach", body: "Earn mentions and links from relevant blogs and publishers." },
      { label: "Guest Posting", href: "/guest-posting", body: "Publish expert articles on trusted sites in your industry." },
      { label: "Digital PR", href: "/digital-pr", body: "Press coverage and brand mentions that strengthen trust." },
    ],
  },
  {
    id: "paid",
    icon: Target,
    title: "Paid Marketing",
    sub: "Fast, measurable leads from campaigns you can scale.",
    items: [
      { label: "Google Ads", href: "/google-ads", body: "Search, display and video campaigns that turn intent into enquiries." },
      { label: "PPC Management", href: "/ppc-management", body: "Ongoing pay-per-click management focused on lower cost per lead." },
      { label: "Performance Marketing", href: "/performance-marketing", body: "Multi-channel campaigns measured by leads, sales and ROAS." },
      { label: "Shopping Ads", href: "/shopping-ads", body: "Put your catalogue in front of ready-to-buy shoppers." },
      { label: "Lead Generation", href: "/lead-generation", body: "Predictable enquiries through ads, landing pages and follow-up." },
    ],
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media",
    sub: "Grow your brand where your audience already spends time.",
    items: [
      { label: "Social Media Optimisation", href: "/social-media-optimisation", body: "Profiles and content that help the right people find you." },
      { label: "Social Media Marketing", href: "/social-media-marketing", body: "Plan, post and grow across the platforms your customers use." },
      { label: "Facebook/Meta Ads", href: "/facebook-meta-ads", body: "Targeted Facebook and Instagram campaigns for leads or sales." },
      { label: "Instagram Ads", href: "/instagram-ads", body: "Feed, stories and reels ads that drive action." },
      { label: "YouTube Marketing", href: "/youtube-marketing", body: "Channel strategy, video SEO and video ads." },
      { label: "Influencer Marketing", href: "/influencer-marketing", body: "Partner with creators who match your audience." },
      { label: "ORM", href: "/orm", body: "Protect how your brand appears in search and on review sites." },
    ],
  },
];

const PACKAGES = [
  { label: "SEO Packages", href: "/seo-packages", body: "Monthly SEO with fixed scope and pricing." },
  { label: "Local SEO Packages", href: "/local-seo-packages", body: "Win local search for one or many locations." },
  { label: "Ecommerce SEO Packages", href: "/ecommerce-seo-packages", body: "Store SEO plans sized to your catalogue." },
  { label: "PPC Packages", href: "/ppc-packages", body: "Paid-ads plans with management included." },
  { label: "Social Media Packages", href: "/social-media-packages", body: "Content, posting and reporting every month." },
  { label: "Digital Marketing Packages", href: "/digital-marketing-packages", body: "SEO, ads and social working as one system." },
];

const STEPS = [
  { t: "Audit", b: "We review your site, ads, competitors and tracking to find where leads are leaking." },
  { t: "Plan", b: "A channel mix and 90-day roadmap tied to your budget and lead targets." },
  { t: "Launch", b: "Campaigns, content and fixes go live in weekly sprints." },
  { t: "Report & scale", b: "Monthly reports in plain language. We double down on what brings enquiries." },
];

const FAQS = [
  { q: "Which channel should I start with?", a: "It depends on how your customers buy. If they search before buying, SEO and Google Ads come first. If they discover products by scrolling, Meta and Instagram ads usually work faster. We recommend a mix after a free audit." },
  { q: "How soon will I see results?", a: "Paid campaigns can bring enquiries within the first week. SEO and AI search visibility usually show clear movement in 3 to 6 months." },
  { q: "Do I get reports?", a: "Yes. You get a monthly report covering traffic, rankings, leads, spend and next steps, plus a call to walk through it." },
  { q: "Is there a lock-in contract?", a: "Our packages run month to month after the first setup period, so you stay because it works." },
];

/* ---------------- Page ---------------- */

export default async function DigitalMarketingPage() {
  const co = await getCompany();

  return (
    <div className="dm text-[var(--color-ink)]">
      <style>{`
        .dm h1,.dm h2,.dm h3{color:inherit}
        @keyframes dm-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
        @keyframes dm-bar{from{transform:scaleY(.1)}to{transform:scaleY(1)}}
        @keyframes dm-type{from{width:0}to{width:100%}}
        .dm-rise{animation:dm-rise .8s cubic-bezier(.2,.7,.2,1) both}
        .dm-bar{transform-origin:bottom;animation:dm-bar 1.1s cubic-bezier(.2,.7,.2,1) both}
        .dm-type{overflow:hidden;white-space:nowrap;animation:dm-type 1.4s steps(36) .6s both}
        @media (prefers-reduced-motion:reduce){.dm-rise,.dm-bar,.dm-type{animation:none}}
      `}</style>

      {/* HERO — search result mock */}
      <section className="relative overflow-hidden bg-[var(--color-surface)] pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-[.5]" style={{ backgroundImage: "radial-gradient(#e5d9d0 1px,transparent 1px)", backgroundSize: "22px 22px" }} />
        <div className="container-max relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand)]" /> Digital Marketing
            </p>
            <h1 className="mt-6 font-display font-extrabold" style={{ fontSize: "clamp(2.6rem,5.6vw,4.6rem)", lineHeight: 1.02, letterSpacing: "-0.035em" }}>
              Get found first. On Google, in AI answers, in every feed.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg text-[var(--color-text-muted)]">
              SEO, paid ads, social media and AI search, planned as one system and reported in plain language.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/free-website-audit" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.3)] transition-transform hover:-translate-y-0.5">
                Get a free audit <ArrowRight size={16} />
              </Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-6 py-3.5 text-sm font-bold">
                <Phone size={15} /> {co.phone}
              </a>
            </div>
          </div>

          {/* SERP mock */}
          <div className="dm-rise relative">
            <div className="rounded-[26px] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-lg)] md:p-6">
              <div className="flex items-center gap-3 rounded-full border border-[var(--color-border)] px-4 py-2.5">
                <Search size={16} className="text-[var(--color-text-muted)]" />
                <span className="dm-type text-sm font-medium">best digital marketing agency near me</span>
              </div>

              <div className="mt-4 rounded-2xl bg-[var(--color-brand-soft)] p-4">
                <p className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand-dark)]"><Sparkles size={13} /> AI Overview</p>
                <p className="mt-1.5 text-sm leading-relaxed">
                  Agencies frequently recommended include <b>Hover Business Services</b>, known for combined SEO, ads and AI search work for growing businesses…
                </p>
              </div>

              <div className="mt-4 flex gap-3 rounded-2xl border border-[var(--color-border)] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-white"><MapPin size={17} /></div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold">Your Business · Top 3 in Maps</p>
                  <p className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                    <span className="flex text-[var(--color-star)]">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={11} fill="currentColor" />)}</span>
                    4.9 · 320 reviews · Open now
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { i: TrendingUp, k: "Organic traffic", v: "+182%" },
                  { i: MousePointerClick, k: "Cost per lead", v: "−41%" },
                  { i: BarChart3, k: "Enquiries / mo", v: "3.4×" },
                ].map(({ i: I, k, v }) => (
                  <div key={k} className="rounded-2xl border border-[var(--color-border)] p-3">
                    <I size={15} className="text-[var(--color-brand)]" />
                    <p className="mt-2 font-display text-lg font-extrabold">{v}</p>
                    <p className="text-[11px] text-[var(--color-text-muted)]">{k}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex h-20 items-end gap-1.5">
                {[22, 30, 26, 38, 44, 40, 56, 62, 58, 74, 82, 96].map((h, i) => (
                  <span key={i} className="dm-bar flex-1 rounded-t-md" style={{ height: `${h}%`, background: i > 8 ? "var(--color-brand)" : "#e9e3de", animationDelay: `${0.3 + i * 0.05}s` }} />
                ))}
              </div>
              <p className="mt-2 text-right text-[11px] text-[var(--color-text-muted)]">Sample 12-month growth curve</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHANNEL INDEX */}
      <nav className="sticky top-[70px] z-20 border-y border-[var(--color-border)] bg-white/90 backdrop-blur">
        <div className="container-max flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {CHANNELS.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--color-ink)]">
              <c.icon size={15} /> {c.title}
            </a>
          ))}
          <a href="#packages" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-white">
            <Package size={15} /> Packages
          </a>
        </div>
      </nav>

      {/* CHANNELS — alternating split rows */}
      <section className="py-10 md:py-16">
        <div className="container-max divide-y divide-[var(--color-border)]">
          {CHANNELS.map((c, ci) => (
            <div key={c.id} id={c.id} className="grid scroll-mt-40 gap-8 py-12 lg:grid-cols-[360px_1fr] lg:gap-14">
              <div className="lg:sticky lg:top-44 lg:self-start">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${ci % 2 ? "bg-[var(--color-ink)] text-white" : "bg-[var(--color-brand)] text-white"}`}>
                  <c.icon size={24} />
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight">{c.title}</h2>
                <p className="mt-3 text-[var(--color-text-muted)]">{c.sub}</p>
                <p className="mt-4 text-sm font-semibold">{c.items.length} services</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {c.items.map((it, i) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={`group relative rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] ${
                      i === 0 ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white sm:col-span-2 sm:p-7" : "border-[var(--color-border)] bg-white hover:border-[var(--color-brand)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className={`font-display font-bold ${i === 0 ? "text-2xl" : "text-lg"}`}>{it.label}</h3>
                      <ArrowUpRight size={18} className={`shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${i === 0 ? "text-[var(--color-brand)]" : "text-[var(--color-text-muted)] group-hover:text-[var(--color-brand)]"}`} />
                    </div>
                    <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "max-w-[56ch] text-white/70" : "text-[var(--color-text-muted)]"}`}>{it.body}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES — price-tag style */}
      <section id="packages" className="scroll-mt-40 bg-[var(--color-ink)] py-16 text-white md:py-24">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Fixed monthly packages</h2>
              <p className="mt-3 max-w-[52ch] text-white/65">Clear scope, clear pricing, no surprises. Pick a plan or ask us to combine them.</p>
            </div>
            <Link href="/contact-us" className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--color-ink)]">Ask for pricing <ArrowRight size={15} /></Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <Link key={p.href} href={p.href} className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[.04] p-7 transition-colors hover:border-[var(--color-brand)] hover:bg-white/[.07]">
                <span className="absolute right-6 top-7 h-3 w-3 rounded-full border-2 border-white/30 group-hover:border-[var(--color-brand)]" />
                <h3 className="font-display text-xl font-bold">{p.label}</h3>
                <p className="mt-2 text-sm text-white/60">{p.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)]">View plans <ArrowUpRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="max-w-[20ch] font-display text-4xl font-extrabold tracking-tight">How a campaign runs with us</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="bg-white p-7">
                <span className="font-display text-5xl font-extrabold text-[var(--color-brand)]/20">{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="pb-20">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-[32px] bg-[var(--color-brand)] p-8 text-white md:p-12">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Not sure where to start?</h2>
            <p className="mt-3 text-white/85">Share your website and goal. We will send back a channel plan with expected costs and timelines.</p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Free website and ads audit", "Competitor snapshot", "Recommended monthly budget"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check size={16} /> {t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--color-ink)]">Talk to an expert <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold"><Phone size={15} /> Call now</a>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold">Common questions</h2>
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
    </div>
  );
}
