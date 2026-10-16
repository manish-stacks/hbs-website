import Link from "next/link";
import { ArrowUpRight, BarChart3, Bot, MousePointerClick, PenLine, Search, Share2, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";

type Item = { t: string; b: string; Icon: LucideIcon };

const items: Item[] = [
  { t: "SEO & AI SEO", b: "Rank higher on search engines with smart SEO and AI-powered strategies.", Icon: Search },
  { t: "Social Media Marketing", b: "Build brand awareness, engage your audience, and grow your community.", Icon: Share2 },
  { t: "Google Ads Management", b: "Target the right audience and get instant leads with high-converting ad campaigns.", Icon: MousePointerClick },
  { t: "Content Marketing", b: "Engage, inform, and convert your audience with valuable content that builds trust.", Icon: PenLine },
  { t: "AI Powered Marketing", b: "Leverage AI tools and automation to optimize campaigns and maximize ROI.", Icon: Bot },
  { t: "Analytics & Reporting", b: "Track performance, measure results, and make data-driven decisions for growth.", Icon: BarChart3 },
];

export function DigitalSolutions() {
  const [first, ...rest] = items;
  return (
    <section className="theme-hbs relative overflow-hidden bg-white py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[.5]" style={{ backgroundImage: "url(/images/theme/circuit-bg.png)", backgroundRepeat: "repeat", backgroundPosition: "top left" }} aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#fff_75%)]" aria-hidden />

      <div className="container-max relative">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <span className="pill">From Digital Marketing and Web Development</span>
          <h2 className="mt-4 font-display font-black leading-[1.08] text-[var(--color-ink)]" style={{ fontSize: "var(--fs-3xl)" }}>
            <span className="bg-gradient-to-r from-[var(--color-brand)] to-[#ff4d8d] bg-clip-text text-transparent">Smart Strategies</span> For Business Expansion
          </h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-[var(--color-text-muted)]">
            A stunning website gets attention. Our result-driven digital marketing turns that attention into traffic, leads, and loyal customers.
          </p>
          <Link href="/contact-us" className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] py-2 pl-6 pr-2 text-white transition-transform hover:-translate-y-0.5">
            <span className="font-display text-[15px] font-medium">Digital Solutions That Deliver Results</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] transition-transform group-hover:rotate-45"><ArrowUpRight size={18} /></span>
          </Link>
        </Reveal>

        {/* Bento */}
        <Reveal stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured */}
          <Spotlight color="rgba(255,255,255,.14)" className="rounded-[30px] bg-gradient-to-br from-[#10131a] via-[#1a1030] to-[#5b1220] flex flex-col justify-between p-8 text-white md:col-span-2 lg:row-span-2 lg:p-10">
            <first.Icon size={260} strokeWidth={1} className="absolute -bottom-12 -right-10 text-white/[.07] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" />
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-brand)] to-[#ff4d8d] shadow-[0_16px_34px_-10px_rgba(229,35,27,.7)]">
              <first.Icon size={30} />
            </span>
            <div>
            <p className="mt-8 font-display text-sm font-bold text-white/40">01</p>
            <h3 className="mt-2 max-w-[14ch] font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-black leading-[1.05] text-white">{first.t}</h3>
            <p className="mt-5 max-w-[42ch] text-[var(--fs-lg)] leading-relaxed text-white/65">{first.b}</p>
            </div>
          </Spotlight>

          {rest.map((it, i) => (
            <Spotlight key={it.t} className="rounded-[26px] border border-[var(--color-border)] bg-white/90 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/50 hover:shadow-[0_24px_50px_-26px_rgba(229,35,27,.4)]">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)] text-[var(--color-brand)] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[var(--color-brand)] group-hover:text-white">
                  <it.Icon size={22} />
                </span>
                <span className="font-display text-3xl font-black leading-none text-[var(--color-ink)]/[0.07]">{String(i + 2).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 font-display text-[17px] font-semibold text-[var(--color-ink)]">{it.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-muted)]">{it.b}</p>
            </Spotlight>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
