import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight, BarChart3, Check, ChevronRight, Code2, Eye, FileText, Gauge, Globe, Layers, Link2, Mail,
  MapPin, MessageSquare, Phone, Plus, Search, Settings, ShieldCheck, ShoppingCart, Sparkles, Star,
  Target, TrendingUp, Users, Wrench, Zap, type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { buildMeta, SITE_NAME, SITE_URL } from "@/lib/seo";
import { getCompany } from "@/lib/site";
import { LeadForm } from "./LeadForm";
import { Logos } from "@/components/home/Logos";
import { Testimonials } from "@/components/home/Testimonials";
import { Blog } from "@/components/home/Blog";

export const ICONS = {
  search: Search, map: MapPin, cart: ShoppingCart, shield: ShieldCheck, file: FileText, link: Link2, chart: BarChart3,
  gauge: Gauge, wrench: Wrench, target: Target, star: Star, chat: MessageSquare, globe: Globe, users: Users,
  sparkles: Sparkles, trend: TrendingUp, layers: Layers, settings: Settings, eye: Eye, zap: Zap, mail: Mail, code: Code2,
} satisfies Record<string, LucideIcon>;
export type IconKey = keyof typeof ICONS;

export type Svc = {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  title: string;
  eyebrow: string;
  tagline: string;
  accent: string;
  formTitle: string;
  points: string[];
  stats: [string, string][];
  offersHead: { title: string; sub: string };
  offers: { icon: IconKey; t: string; b: string }[];
  offerLayout?: "grid" | "rows" | "bento" | "cols";
  hl: { eyebrow: string; title: string; body: string; bullets: string[] };
  visual: ReactNode;
  processHead: string;
  process: { t: string; b: string }[];
  processLayout?: "timeline" | "cards" | "steps" | "alt";
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  flip?: boolean;
  heroStyle?: "dark" | "light" | "visual";
  heroBg?: "grid" | "dots" | "diag";
  statsStyle?: "card" | "tiles";
  hlStyle?: "split" | "band";
  faqStyle?: "side" | "two";
  ctaStyle?: "dark" | "light";
  heroVisual?: ReactNode;
};

export const svcMeta = (s: Svc) => buildMeta({ title: s.metaTitle, description: s.metaDesc, path: `/${s.slug}` });

const bgStyle = (k: Svc["heroBg"], dark: boolean): CSSProperties => {
  const c = dark ? "#fff" : "#000";
  if (k === "dots") return { backgroundImage: `radial-gradient(${c} 1.5px,transparent 1.5px)`, backgroundSize: "28px 28px" };
  if (k === "diag") return { backgroundImage: `repeating-linear-gradient(45deg,${c} 0 1px,transparent 1px 24px)` };
  return { backgroundImage: `linear-gradient(${c} 1px,transparent 1px),linear-gradient(90deg,${c} 1px,transparent 1px)`, backgroundSize: "56px 56px" };
};
const H2 = { fontSize: "var(--fs-3xl)", lineHeight: 1.1 } as const;
const Head = ({ pill, title, sub, center = true }: { pill: string; title: string; sub?: string; center?: boolean }) => (
  <div className={center ? "mx-auto max-w-[720px] text-center" : ""}>
    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--a)]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--a)]">{pill}</span>
    <h2 className="mt-4 font-display font-black text-[var(--color-ink)]" style={H2}>{title}</h2>
    {sub ? <p className="mt-4 text-[var(--color-text-muted)]">{sub}</p> : null}
  </div>
);

export async function ServicePage({ s }: { s: Svc }) {
  const company = await getCompany();
  const vars = { "--a": s.accent } as CSSProperties;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: s.title, description: s.metaDesc, url: `${SITE_URL}/${s.slug}`, areaServed: ["IN", "NZ"], provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL } },
      { "@type": "FAQPage", mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <div className="theme-hbs" style={vars}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* HERO */}
      {(() => {
        const dark = s.heroStyle !== "light";
        const vis = s.heroStyle === "visual";
        const t1 = dark ? "text-white" : "text-[var(--color-ink)]";
        const t2 = dark ? "text-white/70" : "text-[var(--color-text-muted)]";
        const t3 = dark ? "text-white/85" : "text-[var(--color-ink)]/85";
        return (
          <section className={`relative isolate overflow-hidden pb-28 pt-10 lg:pb-32 lg:pt-14 ${dark ? "bg-[#0a0e17] text-white" : "bg-gradient-to-br from-[var(--a)]/15 via-white to-[var(--a)]/5"}`}>
            <span className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[460px] w-[460px] rounded-full bg-[var(--a)] opacity-30 blur-[140px]" aria-hidden />
            {dark ? <span className="pointer-events-none absolute -bottom-48 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--color-brand)] opacity-20 blur-[150px]" aria-hidden /> : null}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]" style={bgStyle(s.heroBg, dark)} aria-hidden />

            <div className={`container-max grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] ${s.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-[12px] font-semibold ${dark ? "text-white/55" : "text-[var(--color-text-muted)]"}`}>
                  <Link href="/" className="hover:text-[var(--a)]">Home</Link><ChevronRight size={13} /><span className={t1}>{s.eyebrow}</span>
                </nav>
                <h1 className={`mt-5 ${t1}`} style={{ fontSize: "clamp(2.2rem,4.6vw,3.8rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>{s.title}</h1>
                <p className={`mt-5 max-w-[56ch] text-[var(--fs-lg)] leading-relaxed ${t2}`}>{s.tagline}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className={`flex items-start gap-3 text-[15px] ${t3}`}>
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--a)] text-white"><Check size={12} strokeWidth={3} /></span>{p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {vis ? (
                    <Link href="#get-proposal" className="group inline-flex items-center gap-3 rounded-full bg-[var(--a)] py-2 pl-6 pr-2 text-sm font-bold text-white shadow-[0_14px_34px_-10px_var(--a)] transition hover:-translate-y-0.5">Get free proposal<span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45"><ArrowRight size={16} /></span></Link>
                  ) : null}
                  <Link href="/free-website-audit" className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold backdrop-blur ${dark ? "border-white/25 bg-white/10 hover:bg-white/20" : "border-[var(--color-border)] bg-white/80 hover:border-[var(--a)]"}`}>Free website audit <ArrowRight size={15} /></Link>
                  <a href={`tel:${company.phone}`} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${dark ? "text-white/85 hover:text-white" : "text-[var(--color-ink)] hover:text-[var(--a)]"}`}><Phone size={15} /> {company.phone}</a>
                </div>
              </div>
              {vis ? (
                <div className="mx-auto w-full max-w-[520px]">{s.heroVisual}</div>
              ) : (
                <div className={`rounded-[28px] bg-white p-6 text-[var(--color-ink)] sm:p-8 ${dark ? "shadow-[0_40px_90px_-30px_rgba(0,0,0,.7)]" : "border border-[var(--a)]/20 shadow-[0_40px_90px_-30px_var(--a)]"}`}>
                  <LeadForm service={s.eyebrow} title={s.formTitle} />
                </div>
              )}
            </div>
          </section>
        );
      })()}

      {/* STATS */}
      <div className="container-max relative z-10 -mt-14">
        {s.statsStyle === "tiles" ? (
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {s.stats.map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-[var(--a)] px-5 py-5 text-white shadow-[0_20px_44px_-22px_var(--a)]">
                <p className="font-display text-2xl font-black sm:text-3xl">{v}</p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-white/80">{l}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 divide-[var(--color-border)] rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_24px_60px_-28px_rgba(20,20,60,.3)] lg:grid-cols-4 lg:divide-x">
            {s.stats.map(([v, l]) => (
              <div key={l} className="px-5 py-6 text-center">
                <p className="font-display text-2xl font-black text-[var(--a)] sm:text-3xl">{v}</p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">{l}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-14"><Logos /></div>

      {/* OFFERS */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <Reveal><Head pill="What you get" title={s.offersHead.title} sub={s.offersHead.sub} /></Reveal>
          {s.offerLayout === "bento" ? (
            <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {s.offers.map((o, i) => {
                const I = ICONS[o.icon];
                return i === 0 ? (
                  <div key={o.t} className="relative flex flex-col justify-between overflow-hidden rounded-[28px] p-8 text-white md:col-span-2 lg:row-span-2" style={{ background: `linear-gradient(135deg,#0a0e17,${s.accent} 160%)` }}>
                    <I size={220} strokeWidth={1} className="absolute -bottom-10 -right-8 text-white/[.08]" />
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--a)]"><I size={26} /></span>
                    <div className="mt-16"><h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-black leading-tight text-white">{o.t}</h3><p className="mt-3 max-w-[40ch] text-white/70">{o.b}</p></div>
                  </div>
                ) : (
                  <Spotlight key={o.t} color={`${s.accent}22`} className="rounded-[24px] border border-[var(--color-border)] bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--a)]/50">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--a)]/10 text-[var(--a)]"><I size={20} /></span>
                    <h3 className="mt-4 text-[17px]">{o.t}</h3><p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-text-muted)]">{o.b}</p>
                  </Spotlight>
                );
              })}
            </Reveal>
          ) : s.offerLayout === "cols" ? (
            <Reveal className="mt-12 grid gap-x-16 md:grid-cols-2">
              {s.offers.map((o, i) => (
                <div key={o.t} className="flex gap-5 border-t border-[var(--color-ink)]/15 py-7">
                  <span className="font-display text-5xl font-black leading-none text-transparent [-webkit-text-stroke:1.5px_var(--a)]">{String(i + 1).padStart(2, "0")}</span>
                  <div><h3 className="text-[var(--fs-lg)]">{o.t}</h3><p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{o.b}</p></div>
                </div>
              ))}
            </Reveal>
          ) : s.offerLayout === "rows" ? (
            <Reveal className="mt-12 divide-y divide-[var(--color-border)] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white">
              {s.offers.map((o, i) => {
                const I = ICONS[o.icon];
                return (
                  <div key={o.t} className="group grid items-center gap-4 px-6 py-6 transition-colors hover:bg-[var(--a)]/[0.04] md:grid-cols-[72px_64px_1fr_1.6fr] md:gap-6">
                    <span className="font-display text-4xl font-black text-[var(--color-ink)]/10 transition-colors group-hover:text-[var(--a)]/40">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--a)]/10 text-[var(--a)]"><I size={22} /></span>
                    <h3 className="text-[var(--fs-lg)]">{o.t}</h3>
                    <p className="text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{o.b}</p>
                  </div>
                );
              })}
            </Reveal>
          ) : (
            <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {s.offers.map((o) => {
                const I = ICONS[o.icon];
                return (
                  <Spotlight key={o.t} color={`${s.accent}22`} className="rounded-[26px] border border-[var(--color-border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--a)]/50 hover:shadow-[0_26px_56px_-28px_var(--a)]">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--a)]/10 text-[var(--a)] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[var(--a)] group-hover:text-white"><I size={24} /></span>
                    <h3 className="mt-5 text-[var(--fs-lg)]">{o.t}</h3>
                    <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{o.b}</p>
                  </Spotlight>
                );
              })}
            </Reveal>
          )}
        </div>
      </section>

      {/* HIGHLIGHT + visual */}
      <section className={`relative overflow-hidden py-16 md:py-20 ${s.hlStyle === "band" ? "bg-[#0a0e17] [&_h2]:!text-white [&_li]:text-white/90 [&_p]:!text-white/70" : "bg-[var(--color-surface)]"}`}>
        <span className="pointer-events-none absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-[var(--a)] opacity-10 blur-[110px]" aria-hidden />
        <div className={`container-max relative grid items-center gap-12 lg:grid-cols-2 ${s.flip ? "" : "lg:[&>*:first-child]:order-2"}`}>
          <Reveal className="mx-auto w-full max-w-[520px]">{s.visual}</Reveal>
          <Reveal delay={0.08}>
            <Head center={false} pill={s.hl.eyebrow} title={s.hl.title} />
            <p className="mt-5 text-[var(--fs-lg)] leading-relaxed text-[var(--color-ink)]/80">{s.hl.body}</p>
            <ul className="mt-6 space-y-3">
              {s.hl.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] font-medium">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--a)] text-white"><Check size={12} strokeWidth={3} /></span>{b}
                </li>
              ))}
            </ul>
            <Link href="/contact-us" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] py-2 pl-6 pr-2 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Talk to an expert
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--a)] transition-transform group-hover:rotate-45"><ArrowRight size={16} /></span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <Reveal><Head pill="Problems we solve" title={`Common ${s.eyebrow} challenges, fixed`} sub="Most businesses come to us with one of these four problems." /></Reveal>
          <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              ["Spending money without clear results", "We tie every task and rupee back to enquiries and sales, then stop what does not work."],
              ["Getting visits but few enquiries", "We improve the pages, offers and forms that stop interested visitors from getting in touch."],
              ["No clear plan or priorities", "You receive a written roadmap with goals, timelines and next steps you can approve."],
              ["Reports you cannot understand", "Plain-language monthly updates that explain what was done, what changed and what comes next."],
            ].map(([t, b], i) => (
              <div key={t} className="group relative flex gap-5 overflow-hidden rounded-[26px] border border-[var(--color-border)] bg-white p-7 transition hover:border-[var(--a)]/50 hover:shadow-[0_24px_50px_-28px_var(--a)]">
                <span className="font-display text-5xl font-black leading-none text-[var(--a)]/25 transition-colors group-hover:text-[var(--a)]">{String(i + 1).padStart(2, "0")}</span>
                <div><h3 className="text-[var(--fs-lg)]">{t}</h3><p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{b}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          {s.processLayout === "steps" ? (
            <>
              <Reveal><Head pill="Our process" title={s.processHead} /></Reveal>
              <Reveal stagger className={`relative mt-14 grid gap-8 sm:grid-cols-2 lg:gap-6 ${s.process.length > 4 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
                <span className="absolute left-[8%] right-[8%] top-6 hidden border-t-2 border-dashed border-[var(--a)]/40 lg:block" aria-hidden />
                {s.process.map((p, i) => (
                  <div key={p.t} className="relative text-center">
                    <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--a)] bg-white font-display text-lg font-black text-[var(--a)]">{i + 1}</span>
                    <h3 className="mt-4 text-[17px]">{p.t}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-text-muted)]">{p.b}</p>
                  </div>
                ))}
              </Reveal>
            </>
          ) : s.processLayout === "alt" ? (
            <>
              <Reveal><Head pill="Our process" title={s.processHead} /></Reveal>
              <ol className="relative mx-auto mt-12 max-w-[960px] space-y-6 before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:bg-[var(--a)]/25 lg:before:left-1/2">
                {s.process.map((p, i) => (
                  <li key={p.t} className={`relative pl-14 lg:w-1/2 lg:pl-0 ${i % 2 ? "lg:ml-auto lg:pl-12" : "lg:pr-12 lg:text-right"}`}>
                    <span className={`absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--a)] font-display font-black text-white lg:left-auto ${i % 2 ? "lg:-left-5" : "lg:-right-5"}`}>{i + 1}</span>
                    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                      <h3 className="text-[var(--fs-lg)]">{p.t}</h3>
                      <p className="mt-1.5 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{p.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          ) : s.processLayout === "cards" ? (
            <>
              <Reveal><Head pill="Our process" title={s.processHead} /></Reveal>
              <Reveal stagger className={`mt-12 grid gap-5 sm:grid-cols-2 ${s.process.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                {s.process.map((p, i) => (
                  <div key={p.t} className="relative overflow-hidden rounded-[26px] bg-[#0a0e17] p-7 text-white">
                    <span className="absolute -right-2 -top-3 font-display text-[84px] font-black leading-none text-white/[0.06]">{i + 1}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--a)] font-display text-lg font-black">{i + 1}</span>
                    <h3 className="mt-5 text-[var(--fs-lg)] text-white">{p.t}</h3>
                    <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-white/60">{p.b}</p>
                  </div>
                ))}
              </Reveal>
            </>
          ) : (
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal className="lg:sticky lg:top-36 lg:self-start">
                <Head center={false} pill="Our process" title={s.processHead} sub="A clear, repeatable way of working so you always know what happens next." />
              </Reveal>
              <ol className="relative space-y-5 before:absolute before:bottom-4 before:left-[22px] before:top-4 before:w-0.5 before:bg-gradient-to-b before:from-[var(--a)] before:to-transparent">
                {s.process.map((p, i) => (
                  <Reveal key={p.t}>
                    <li className="relative flex gap-5">
                      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--a)] font-display font-black text-white shadow-[0_8px_22px_-6px_var(--a)]">{i + 1}</span>
                      <div className="flex-1 rounded-2xl border border-[var(--color-border)] bg-white p-5 transition hover:border-[var(--a)]/40 hover:shadow-md">
                        <h3 className="text-[var(--fs-lg)]">{p.t}</h3>
                        <p className="mt-1.5 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{p.b}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        {(() => {
          const items = s.faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-[var(--color-border)] bg-white px-6 py-5 open:border-[var(--a)]/40 open:shadow-md">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[16px] font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--a)]/10 text-[var(--a)] transition-transform group-open:rotate-45"><Plus size={16} /></span>
              </summary>
              <p className="mt-3 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{f.a}</p>
            </details>
          ));
          return s.faqStyle === "two" ? (
            <div className="container-max">
              <Reveal><Head pill="FAQ" title="Questions we hear often" sub="Cannot find your answer? Our team replies quickly." /></Reveal>
              <Reveal className="mt-10 grid items-start gap-3 md:grid-cols-2">{items}</Reveal>
            </div>
          ) : (
            <div className="container-max grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal className="lg:sticky lg:top-36 lg:self-start"><Head center={false} pill="FAQ" title="Questions we hear often" sub="Cannot find your answer? Our team replies quickly." /></Reveal>
              <Reveal className="space-y-3">{items}</Reveal>
            </div>
          );
        })()}
      </section>

      <Blog />

      {s.heroStyle === "visual" ? (
        <section id="get-proposal" className="scroll-mt-32 bg-[var(--color-surface)] py-16 md:py-20">
          <div className="container-max grid items-center gap-10 lg:grid-cols-2">
            <Reveal><Head center={false} pill="Free proposal" title={s.formTitle} sub="Share a few details and our team will reply with a clear scope, timeline and price." /></Reveal>
            <Reveal delay={0.08} className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_30px_70px_-30px_rgba(20,20,60,.3)] sm:p-8"><LeadForm service={s.eyebrow} title={s.formTitle} /></Reveal>
          </div>
        </section>
      ) : null}

      {/* CTA + related */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <Reveal className={`relative overflow-hidden rounded-[32px] px-6 py-14 text-center sm:px-12 ${s.ctaStyle === "light" ? "border border-[var(--a)]/25 text-[var(--color-ink)] [&_h2]:!text-[var(--color-ink)] [&_p]:!text-[var(--color-text-muted)]" : "text-white"}`}>
            <div className="absolute inset-0 -z-10" style={{ background: s.ctaStyle === "light" ? `linear-gradient(135deg,${s.accent}22,#fff 70%)` : `linear-gradient(135deg,#0a0e17 0%, #0a0e17 35%, ${s.accent} 130%)` }} />
            <h2 className="mx-auto max-w-[20ch] font-display font-black text-white" style={{ fontSize: "var(--fs-3xl)", lineHeight: 1.1 }}>Ready to get started with {s.eyebrow}?</h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-white/70">Share your goals and we will send a free, practical plan within one working day.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact-us" className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-bold text-[var(--color-ink)] transition hover:-translate-y-0.5">Get free proposal<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--a)] text-white transition-transform group-hover:rotate-45"><ArrowRight size={16} /></span></Link>
              <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10"><Phone size={15} /> Call us</a>
            </div>
          </Reveal>

          {s.related.length ? (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Related services</span>
              {s.related.map((r) => (
                <Link key={r.href} href={r.href} className="rounded-full border border-[var(--color-border)] bg-white px-5 py-2 text-[14px] font-semibold transition hover:border-[var(--a)] hover:text-[var(--a)]">{r.label}</Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
