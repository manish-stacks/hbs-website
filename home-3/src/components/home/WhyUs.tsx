import Link from "next/link";
import { ArrowRight, BadgeCheck, Cpu, Handshake, Repeat2, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { getSetting } from "@/lib/site";

const icons = [ShieldCheck, Users, Cpu, Handshake, BadgeCheck, Repeat2];
const facts = [["1500+", "Clients served"], ["80+", "In-house experts"], ["5+", "Years of growth"]];

export async function WhyUs() {
  const { items: whyUs } = await getSetting("whyUs");

  return (
    <section className="band relative overflow-hidden bg-[var(--color-brand)] py-20 text-white md:py-28">
      <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="container-max relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="tag">Why choose HBS</span>
          <h2 className="mt-5 !text-white" style={{ fontSize: "var(--fs-4xl)", lineHeight: 1 }}>
            A straightforward, <span className="inline-block -rotate-1 border-2 border-[#111] bg-[var(--sun)] px-2.5 !text-[#111] shadow-[var(--pop)]">targeted way</span> of working with you
          </h2>
          <p className="mt-6 max-w-[46ch] text-white/85">No jargon, no black boxes, no surprise invoices, just a team that reports honestly and keeps shipping.</p>
          <div className="mt-8 grid max-w-[480px] grid-cols-3 gap-3">
            {facts.map(([v, l]) => (
              <div key={l} className="pop rounded-2xl bg-white px-3 py-4 text-[#111]">
                <p className="font-display text-3xl font-extrabold leading-none">{v}</p>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-[#111]/60">{l}</p>
              </div>
            ))}
          </div>
          <Link href="/contact-us" className="btn btn-sun mt-9">Talk to our team <ArrowRight size={17} /></Link>
        </Reveal>

        <Reveal stagger className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((w, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <div key={w.title} className={`pop hover-lift rounded-3xl bg-white p-6 text-[#111] ${i % 2 ? "sm:mt-8" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#111] bg-[var(--sun)]"><Icon size={22} /></span>
                  <span className="outline-text font-display text-4xl font-extrabold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-[var(--fs-lg)]">{w.title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[#111]/70">{w.body}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
