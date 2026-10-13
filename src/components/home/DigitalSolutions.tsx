import { ArrowUpRight, BarChart3, Bot, MousePointerClick, PenLine, Search, Share2, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
  return (
    <section className="theme-hbs section-space bg-[var(--color-surface)]" style={{ backgroundImage: "url(/images/theme/circuit-bg.png)", backgroundRepeat: "repeat", backgroundPosition: "top left" }}>
      <div className="container-max grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[var(--fs-xl)] text-[var(--color-text)]">From Digital Marketing and Web Development</p>
          <h2 className="mt-2 font-display font-black italic leading-[1.15] text-[var(--color-ink)]" style={{ fontSize: "var(--fs-4xl)" }}>
            <span className="text-[var(--color-brand)]">Smart Strategies</span> For Business Expansion
          </h2>
          <p className="mt-5 max-w-[52ch] text-[var(--color-text)]">
            A stunning website gets attention. Our result-driven digital marketing turns that attention into traffic, leads, and loyal customers.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] py-2 pl-6 pr-2 text-white">
            <span className="font-display text-[15px] font-medium">Digital Solutions That Deliver Results</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)]"><ArrowUpRight size={18} /></span>
          </div>
        </Reveal>

        <Reveal stagger className="grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <div key={it.t} className="group relative rounded-[22px] border border-[var(--color-border)] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)] hover:shadow-[0_18px_40px_rgba(16,19,26,.08)]">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)] text-[var(--color-brand)] transition group-hover:bg-[var(--color-brand)] group-hover:text-white">
                  <it.Icon size={22} />
                </span>
                <span className="font-display text-sm font-bold text-[var(--color-border)]">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 font-display text-[17px] font-semibold text-[var(--color-ink)]">{it.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-muted)]">{it.b}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
