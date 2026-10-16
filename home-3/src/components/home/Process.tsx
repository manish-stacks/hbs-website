import { BarChart3, Lightbulb, Rocket, Search } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";

const steps = [
  { Icon: Search, title: "Audit & discovery", body: "We study your site, competitors and funnel, then tell you exactly where the leaks and the easy wins are.", bg: "bg-white" },
  { Icon: Lightbulb, title: "Strategy & roadmap", body: "Channel mix, keyword and creative plan, budget split and the KPIs we will be judged on, written down.", bg: "bg-[var(--sun)]" },
  { Icon: Rocket, title: "Build & launch", body: "Pages, campaigns, creatives and tracking go live in weeks, not quarters, with everything measurable from day one.", bg: "bg-[var(--color-brand-soft)]" },
  { Icon: BarChart3, title: "Measure & scale", body: "Monthly reporting in plain language, continuous optimisation, and budget shifted to whatever is winning.", bg: "bg-white" },
];

export function Process() {
  return (
    <section className="section-space">
      <div className="container-max">
        <SectionHead pill="How we work" title="A simple four-step growth engine" sub="No black boxes. You always know what stage your account is in and what happens next." />
        <Reveal stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className={`pop hover-lift relative rounded-3xl p-7 ${s.bg} ${i % 2 ? "lg:mt-12" : ""}`}>
              <span className="outline-text font-display text-7xl font-extrabold leading-none">0{i + 1}</span>
              <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#111] bg-[#111] text-white"><s.Icon size={24} /></span>
              <h3 className="mt-6 text-[var(--fs-xl)]">{s.title}</h3>
              <p className="mt-3 text-[var(--fs-sm)] leading-relaxed text-[#111]/70">{s.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
