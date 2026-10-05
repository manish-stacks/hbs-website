import Image from "next/image";
import { BarChart3, Lightbulb, Rocket, Search } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CurvyArrow, DottedGrid } from "@/components/ui/Decor";
import { SectionHead } from "./SectionHead";
import { art } from "@/data/home";

const steps = [
  {
    Icon: Search,
    title: "Audit & discovery",
    body: "We study your site, competitors and funnel, then tell you exactly where the leaks and the easy wins are.",
  },
  {
    Icon: Lightbulb,
    title: "Strategy & roadmap",
    body: "Channel mix, keyword and creative plan, budget split and the KPIs we will be judged on — written down.",
  },
  {
    Icon: Rocket,
    title: "Build & launch",
    body: "Pages, campaigns, creatives and tracking go live in weeks, not quarters, with everything measurable from day one.",
  },
  {
    Icon: BarChart3,
    title: "Measure & scale",
    body: "Monthly reporting in plain language, continuous optimisation, and budget shifted to whatever is winning.",
  },
];

export function Process() {
  return (
    <section className="section-space relative overflow-hidden bg-white">
      <DottedGrid className="pointer-events-none absolute right-6 top-14 hidden h-28 w-28 opacity-70 md:block" />
      
      <div className="container-max relative">
        <SectionHead
          pill="How we work"
          title="A simple four-step growth engine"
          sub="No black boxes. You always know what stage your account is in and what happens next."
        />

        <Reveal stagger className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="card h-full p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                    <s.Icon size={21} />
                  </span>
                  <span className="font-display text-4xl font-extrabold text-[var(--color-surface-2)]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-[var(--fs-lg)] font-bold">{s.title}</h3>
                <p className="mt-2.5 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                  {s.body}
                </p>
              </div>

              {i < steps.length - 1 ? (
                <CurvyArrow className="absolute -right-6 top-6 hidden h-12 w-12 rotate-[-18deg] lg:block" />
              ) : null}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
