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
    <section className="band relative overflow-hidden bg-[#111] py-20 text-white md:py-28">
      <div className="container-max relative">
        <Reveal className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <span className="tag">Digital marketing and web development</span>
            <h2 className="mt-5 !text-white" style={{ fontSize: "var(--fs-4xl)", lineHeight: 1 }}>
              <span className="text-[var(--sun)]">Smart strategies</span> for business expansion
            </h2>
          </div>
          <p className="max-w-[48ch] text-white/70">
            A stunning website gets attention. Our result-driven digital marketing turns that attention into traffic, leads, and loyal customers.
          </p>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border-2 border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.t} className="group relative bg-[#111] p-7 transition-colors duration-300 hover:bg-[var(--color-brand)] sm:p-9">
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--sun)] text-[#111] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <it.Icon size={24} />
                </span>
                <ArrowUpRight className="text-white/30 transition-all duration-300 group-hover:rotate-12 group-hover:text-white" size={26} />
              </div>
              <p className="mt-8 font-display text-sm font-bold text-white/40 group-hover:text-white/70">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 font-display text-[var(--fs-xl)] font-bold !text-white">{it.t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65 group-hover:text-white/90">{it.b}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
