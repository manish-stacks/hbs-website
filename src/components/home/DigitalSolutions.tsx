import Image from "next/image";
import { BarChart3, Bot, Megaphone, MousePointerClick, PenLine, Search, Share2, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Item = { t: string; b: string; Icon: LucideIcon };

const left: Item[] = [
  { t: "SEO & AI SEO", b: "Rank higher on search engines with smart SEO and AI-powered strategies.", Icon: Search },
  { t: "Social Media Marketing", b: "Build brand awareness, engage your audience, and grow your community.", Icon: Share2 },
  { t: "Google Ads Management", b: "Target the right audience and get instant leads with high-converting ad campaigns.", Icon: MousePointerClick },
];
const right: Item[] = [
  { t: "Content Marketing", b: "Engage, inform, and convert your audience with valuable content that builds trust.", Icon: PenLine },
  { t: "AI Powered Marketing", b: "Leverage AI tools and automation to optimize campaigns and maximize ROI.", Icon: Bot },
  { t: "Analytics & Reporting", b: "Track performance, measure results, and make data-driven decisions for growth.", Icon: BarChart3 },
];

const connectors = [
  { src: "/images/theme/conn-down.png", w: 119, h: 71, pos: "top-1/2" },
  { src: "/images/theme/conn-flat.png", w: 77, h: 33, pos: "top-1/2 -translate-y-1/2" },
  { src: "/images/theme/conn-up.png", w: 115, h: 65, pos: "bottom-1/2" },
];

function Card({ item, i, side }: { item: Item; i: number; side: "l" | "r" }) {
  const c = connectors[i]!;
  return (
    <div className="relative flex items-center gap-4 rounded-[40px] bg-[var(--color-surface)] px-5 py-5 shadow-[0_10px_30px_rgba(16,19,26,.07)] ring-1 ring-white sm:px-6">
      <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-sm">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-[var(--color-ink)] text-white">
          <item.Icon size={22} />
        </span>
      </span>
      <div>
        <h3 className="font-display text-[15px] font-semibold text-[var(--color-brand)]">{item.t}</h3>
        <p className="mt-1 text-[13.5px] leading-snug text-[var(--color-text)]">{item.b}</p>
      </div>
      <Image
        src={c.src}
        alt=""
        width={c.w}
        height={c.h}
        aria-hidden
        className={`pointer-events-none absolute hidden w-[88px] lg:block ${c.pos} ${side === "l" ? "left-full" : "right-full -scale-x-100"}`}
      />
    </div>
  );
}

export function DigitalSolutions() {
  return (
    <section className="theme-hbs section-space relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-circuit opacity-60" aria-hidden />
      <div className="container-max relative">
        <Reveal className="mx-auto max-w-[900px] text-center">
          <p className="text-[var(--fs-2xl)] text-[#10131a]">From Digital Marketing and Web Development</p>
          <h2 className="mt-1 font-display font-black italic text-[var(--color-ink)]" style={{ fontSize: "var(--fs-4xl)" }}>
            <span className="text-[var(--color-brand)]">Smart Strategies</span> For Business Expansion
          </h2>
          <p className="mx-auto mt-4 max-w-[70ch] text-[var(--color-text)]">
            A stunning website gets attention. Our result-driven digital marketing turns that attention into traffic, leads, and loyal customers.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-14 grid max-w-[1180px] items-center gap-5 lg:grid-cols-[1fr_330px_1fr] lg:gap-x-[88px]">
          <div className="flex flex-col gap-5 lg:gap-7">
            {left.map((it, i) => <Card key={it.t} item={it} i={i} side="l" />)}
          </div>

          <div className="order-first mx-auto flex h-[290px] w-[290px] items-center justify-center rounded-full border-[14px] border-[var(--color-ink)] bg-white shadow-[0_20px_50px_rgba(16,19,26,.2)] lg:order-none lg:h-[330px] lg:w-[330px]">
            <div className="flex h-[88%] w-[88%] flex-col items-center justify-center rounded-full bg-[var(--color-surface)] text-center shadow-inner">
              <Megaphone size={52} strokeWidth={1.4} className="text-[var(--color-brand)]" />
              <p className="mt-3 font-display text-2xl font-medium text-[var(--color-ink)]">Digital Solutions</p>
              <p className="font-display text-2xl font-medium text-[var(--color-brand)]">That Deliver Results</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:gap-7">
            {right.map((it, i) => <Card key={it.t} item={it} i={i} side="r" />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
