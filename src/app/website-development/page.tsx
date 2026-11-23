import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Phone, Code2, Monitor, ShoppingCart, Smartphone, Plug,
  FolderOpen, FileCode2, Gauge, Lock, Rocket, Search, Check, Plus,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Web & App Development | Hover Business Services LLP",
    description: "Custom web development, website design, ecommerce and mobile app services from Hover Business Services LLP.",
    path: "/website-development",
  });

/* ---------------- Page content (edit here) ---------------- */

const GROUPS = [
  {
    folder: "web-development",
    icon: Code2,
    title: "Web Development",
    sub: "Custom builds on modern, reliable stacks.",
    items: [
      { label: "Custom Web Development", href: "/custom-web-development", body: "Websites and web apps built around your workflow.", tag: "Custom" },
      { label: "WordPress Development", href: "/wordpress-development", body: "Custom themes, plugins and easy-to-manage sites.", tag: "CMS" },
      { label: "Laravel Development", href: "/laravel-development", body: "Robust Laravel applications, portals and APIs.", tag: "PHP" },
      { label: "PHP Development", href: "/php-development", body: "New builds and legacy PHP upgrades.", tag: "PHP" },
      { label: "Next.js Development", href: "/next-js-development", body: "SEO-friendly React sites with server rendering.", tag: "React" },
      { label: "React Development", href: "/react-development", body: "Interactive front-ends and single-page apps.", tag: "React" },
      { label: "Node.js", href: "/node-js", body: "Scalable back-ends, APIs and real-time features.", tag: "API" },
    ],
  },
  {
    folder: "website-design",
    icon: Monitor,
    title: "Website Design",
    sub: "Design that looks sharp and converts.",
    items: [
      { label: "Website Design", href: "/website-design", body: "Conversion-focused design that reflects your brand.", tag: "UI" },
      { label: "Website Redesign", href: "/website-redesign", body: "Refresh an old site without losing rankings or leads.", tag: "UI" },
      { label: "Landing Page Design", href: "/landing-page-design", body: "Single-goal pages built for campaigns.", tag: "CRO" },
    ],
  },
  {
    folder: "ecommerce",
    icon: ShoppingCart,
    title: "Ecommerce",
    sub: "Online stores built to sell.",
    items: [
      { label: "Shopify Development", href: "/shopify-development", body: "Stores, themes and custom features that sell.", tag: "Shopify" },
      { label: "WooCommerce Development", href: "/woocommerce-development", body: "Flexible stores on WordPress.", tag: "Woo" },
      { label: "Magento", href: "/magento", body: "Enterprise stores for large catalogues.", tag: "Adobe" },
      { label: "Custom Ecommerce", href: "/custom-ecommerce", body: "Tailor-made stores when platforms fall short.", tag: "Custom" },
    ],
  },
  {
    folder: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    sub: "Apps your users will enjoy.",
    items: [
      { label: "Mobile App Development", href: "/mobile-app-development", body: "Android and iOS apps planned around real users.", tag: "iOS + Android" },
      { label: "Android App Development", href: "/android-app-development", body: "Native Android apps that are fast and stable.", tag: "Android" },
      { label: "App Maintenance & Support", href: "/app-maintenance-support", body: "Updates, fixes and store releases handled for you.", tag: "Care" },
    ],
  },
  {
    folder: "support-integration",
    icon: Plug,
    title: "Support & Integration",
    sub: "Keep everything connected and healthy.",
    items: [
      { label: "API Development & Integration", href: "/api-development-integration", body: "Connect your systems with secure, documented APIs.", tag: "API" },
      { label: "CRM Development", href: "/crm-development", body: "Custom CRM tools that match how your team sells.", tag: "Custom" },
      { label: "Website Maintenance & Support", href: "/website-maintenance-support", body: "Updates, backups and fixes every month.", tag: "Care" },
    ],
  },
];

const STACK = ["Next.js", "React", "Node.js", "Laravel", "PHP", "WordPress", "Shopify", "WooCommerce", "Magento", "React Native", "MySQL", "MongoDB", "AWS", "Razorpay"];

const QUALITY = [
  { icon: Gauge, t: "Fast by default", b: "Optimised images, clean code and caching for strong Core Web Vitals." },
  { icon: Search, t: "SEO-ready", b: "Clean URLs, schema, meta tags and sitemaps from day one." },
  { icon: Lock, t: "Secure", b: "SSL, safe forms, regular updates and daily backups." },
  { icon: Smartphone, t: "Mobile-first", b: "Every screen designed and tested on phones first." },
];

const TIMELINE = [
  { t: "Discovery", w: "Week 1", b: "Goals, pages, features and a fixed quote." },
  { t: "Design", w: "Week 1–2", b: "Wireframes and visual design you approve." },
  { t: "Build", w: "Week 2–5", b: "Development with a live staging link to follow progress." },
  { t: "Launch", w: "Week 6", b: "Testing, go-live, training and handover." },
];

const FAQS = [
  { q: "How much does a website cost?", a: "It depends on pages, features and integrations. After a short call we send a fixed quote, so you know the cost before we start." },
  { q: "Will I be able to update the site myself?", a: "Yes. We build with an easy admin panel or CMS and show your team how to use it." },
  { q: "Do you build both Android and iOS apps?", a: "Yes. We build cross-platform apps with React Native and native Android apps when needed, and handle store publishing." },
  { q: "What happens after launch?", a: "You get free support for an initial period, then optional monthly maintenance for updates, backups and fixes." },
];

/* ---------------- Page ---------------- */

export default async function WebAppPage() {
  const co = await getCompany();
  const total = GROUPS.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="wd text-[var(--color-ink)]">
      <style>{`
        .wd h1,.wd h2,.wd h3{color:inherit}
        @keyframes wd-line{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}}
        @keyframes wd-blink{50%{opacity:0}}
        @keyframes wd-marq{to{transform:translateX(-50%)}}
        .wd-line{animation:wd-line .45s ease-out both}
        .wd-caret{animation:wd-blink 1s steps(1) infinite}
        .wd-marq{animation:wd-marq 32s linear infinite}
        @media (prefers-reduced-motion:reduce){.wd-line,.wd-caret,.wd-marq{animation:none}}
      `}</style>

      {/* HERO — editor + phone */}
      <section className="relative overflow-hidden bg-white pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(#f1ece8 1px,transparent 1px),linear-gradient(90deg,#f1ece8 1px,transparent 1px)", backgroundSize: "44px 44px", maskImage: "linear-gradient(to bottom,#000 30%,transparent)" }} />
        <div className="container-max relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-ink)] px-3 py-1.5 text-sm font-semibold text-white">
              <Code2 size={15} className="text-[var(--color-brand)]" /> Web & App Development
            </p>
            <h1 className="mt-6 font-display font-extrabold" style={{ fontSize: "clamp(2.5rem,5.2vw,4.4rem)", lineHeight: 1.03, letterSpacing: "-0.035em" }}>
              Websites and apps that work as hard as you do.
            </h1>
            <p className="mt-6 max-w-[50ch] text-lg text-[var(--color-text-muted)]">
              Custom websites, online stores and mobile apps. Built fast, secure and ready to scale, with one team from design to launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)] transition-transform hover:-translate-y-0.5">
                Discuss your project <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-6 py-3.5 text-sm font-bold">
                See our work
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[[String(total), "Services"], ["6 wk", "Typical website launch"], ["24/7", "Support"]].map(([v, k]) => (
                <div key={k}><dt className="text-sm text-[var(--color-text-muted)]">{k}</dt><dd className="font-display text-3xl font-extrabold">{v}</dd></div>
              ))}
            </dl>
          </div>

          <div className="relative">
            {/* editor window */}
            <div className="overflow-hidden rounded-2xl border border-[#262a33] bg-[#14171d] shadow-[var(--shadow-lg)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 rounded-md bg-white/5 px-3 py-1 text-xs text-white/60">app/your-business/page.tsx</span>
              </div>
              <pre className="overflow-x-auto p-5 pr-28 font-mono text-[13px] leading-7 text-white/80 sm:pr-40">
                {[
                  <><span className="text-[#ff7b72]">export default</span> <span className="text-[#d2a8ff]">function</span> <span className="text-[#79c0ff]">YourBusiness</span>() {"{"}</>,
                  <>{"  "}<span className="text-[#ff7b72]">return</span> (</>,
                  <>{"    "}&lt;<span className="text-[#7ee787]">Site</span> <span className="text-[#79c0ff]">speed</span>=<span className="text-[#a5d6ff]">&quot;fast&quot;</span> <span className="text-[#79c0ff]">seo</span>&gt;</>,
                  <>{"      "}&lt;<span className="text-[#7ee787]">Store</span> <span className="text-[#79c0ff]">payments</span>=<span className="text-[#a5d6ff]">&quot;razorpay&quot;</span> /&gt;</>,
                  <>{"      "}&lt;<span className="text-[#7ee787]">CRM</span> <span className="text-[#79c0ff]">leads</span>=<span className="text-[#a5d6ff]">&quot;auto&quot;</span> /&gt;</>,
                  <>{"      "}&lt;<span className="text-[#7ee787]">App</span> <span className="text-[#79c0ff]">ios android</span> /&gt;</>,
                  <>{"    "}&lt;/<span className="text-[#7ee787]">Site</span>&gt;</>,
                  <>{"  "});</>,
                  <>{"}"}<span className="wd-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-[var(--color-brand)]" /></>,
                ].map((line, i) => (
                  <div key={i} className="wd-line" style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
                    <span className="mr-4 inline-block w-4 select-none text-right text-white/25">{i + 1}</span>{line}
                  </div>
                ))}
              </pre>
            </div>

            {/* phone */}
            <div className="absolute -bottom-8 -right-2 w-[132px] rounded-[26px] border-[5px] border-[var(--color-ink)] bg-white p-2 shadow-[var(--shadow-lg)] sm:right-4 sm:w-[160px]">
              <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-[var(--color-ink)]/80" />
              <div className="rounded-xl bg-[var(--color-brand)] p-2.5 text-white">
                <p className="text-[9px] opacity-80">Today&apos;s orders</p>
                <p className="font-display text-lg font-extrabold">₹48,920</p>
              </div>
              {["New order #2041", "Lead from website", "Payment received"].map((t) => (
                <div key={t} className="mt-1.5 flex items-center gap-1.5 rounded-lg bg-[var(--color-surface)] p-1.5 text-[9px] font-semibold">
                  <Check size={10} className="text-[var(--color-success)]" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STACK MARQUEE */}
      <div className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-4">
        <div className="wd-marq flex w-max gap-10 font-display text-lg font-bold text-[var(--color-text-muted)]">
          {[...STACK, ...STACK].map((s, i) => (
            <span key={i} className="flex items-center gap-10">{s}<span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" /></span>
          ))}
        </div>
      </div>

      {/* SERVICES — project explorer */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="max-w-[22ch] font-display text-4xl font-extrabold tracking-tight md:text-5xl">Everything you need to build and run online</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 font-mono text-[13px]">
                <p className="mb-2 flex items-center gap-2 font-semibold"><FolderOpen size={15} className="text-[var(--color-brand)]" /> services/</p>
                <ul className="space-y-1 border-l border-[var(--color-border)] pl-3">
                  {GROUPS.map((g) => (
                    <li key={g.folder}>
                      <a href={`#${g.folder}`} className="flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-white hover:text-[var(--color-brand)]">
                        <span>{g.folder}/</span><span className="text-[var(--color-text-muted)]">{g.items.length}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="space-y-14">
              {GROUPS.map((g) => (
                <div key={g.folder} id={g.folder} className="scroll-mt-28">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]"><g.icon size={22} /></span>
                    <div>
                      <h3 className="font-display text-2xl font-extrabold">{g.title}</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">{g.sub}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {g.items.map((it) => (
                      <Link key={it.href} href={it.href} className="group flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all hover:border-[var(--color-ink)] hover:shadow-[var(--shadow-md)]">
                        <FileCode2 size={20} className="mt-0.5 shrink-0 text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-brand)]" />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-display font-bold">{it.label}</h4>
                            <span className="rounded-md bg-[var(--color-surface-2)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-text-muted)]">{it.tag}</span>
                          </div>
                          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{it.body}</p>
                        </div>
                        <ArrowUpRight size={17} className="shrink-0 text-[var(--color-text-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-[var(--color-ink)] py-16 text-white md:py-20">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Built in, not added later</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {QUALITY.map((q) => (
              <div key={q.t} className="bg-[var(--color-ink)] p-7">
                <q.icon size={26} className="text-[var(--color-brand)]" />
                <h3 className="mt-4 font-display text-lg font-bold">{q.t}</h3>
                <p className="mt-2 text-sm text-white/60">{q.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-extrabold tracking-tight">From idea to launch</h2>
            <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-muted)]"><Rocket size={16} className="text-[var(--color-brand)]" /> Typical 5–8 page business website</p>
          </div>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-4">
            <span className="absolute left-0 right-0 top-[22px] hidden h-0.5 bg-[var(--color-border)] md:block" />
            {TIMELINE.map((s, i) => (
              <li key={s.t} className="relative">
                <span className={`relative flex h-11 w-11 items-center justify-center rounded-full font-display font-extrabold ${i === TIMELINE.length - 1 ? "bg-[var(--color-brand)] text-white" : "border-2 border-[var(--color-ink)] bg-white"}`}>{i + 1}</span>
                <p className="mt-5 text-sm font-semibold text-[var(--color-brand)]">{s.w}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Questions before you build</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">Still unsure? Call us and talk to a developer, not a salesperson.</p>
            <a href={`tel:${co.phone}`} className="mt-6 inline-flex items-center gap-2 font-display text-xl font-bold text-[var(--color-brand)]"><Phone size={18} /> {co.phone}</a>
          </div>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-[var(--color-border)] bg-white p-5 open:shadow-[var(--shadow-md)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">
                  {f.q}
                  <Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — terminal */}
      <section className="py-16">
        <div className="container-max">
          <div className="grid items-center gap-8 overflow-hidden rounded-[28px] bg-[#14171d] p-8 text-white md:grid-cols-[1.3fr_1fr] md:p-12">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-4xl">Have a project in mind?</h2>
              <p className="mt-3 text-white/65">Tell us what you want to build. You get a scope, timeline and fixed quote within 48 hours.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold">Get a quote <ArrowRight size={16} /></Link>
                <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
              </div>
            </div>
            <pre className="rounded-xl bg-black/40 p-5 font-mono text-[13px] leading-7 text-white/70">
              <span className="text-[#7ee787]">$</span> hover new-project{"\n"}
              <span className="text-white/40">✔ scope ready</span>{"\n"}
              <span className="text-white/40">✔ design approved</span>{"\n"}
              <span className="text-white/40">✔ build complete</span>{"\n"}
              <span className="text-[var(--color-brand)]">→ live at yourbusiness.com</span>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
