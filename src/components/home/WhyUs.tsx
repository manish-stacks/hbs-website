import Link from "next/link";
import { ArrowRight, BadgeCheck, Cpu, Handshake, Repeat2, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { getSetting } from "@/lib/site";

const icons = [ShieldCheck, Users, Cpu, Handshake, BadgeCheck, Repeat2];
const facts = [
  ["1500+", "Clients served"],
  ["80+", "In-house experts"],
  ["5+", "Years of growth"],
];

export async function WhyUs() {
  const { items: whyUs } = await getSetting("whyUs");
  return (
    <section className="section-space relative overflow-hidden bg-[#0a0e17] text-white">
      <div className="grid-lines-dark pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#e5231b] opacity-20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full bg-[var(--color-brand)] opacity-25 blur-[130px]" />

      <div className="container-max relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left */}
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/80">
            <span className="h-2 w-2 rounded-full bg-[var(--color-brand)]" />
            Why choose HBS
          </span>
          <h2 className="mt-5 text-white" style={{ fontSize: "var(--fs-3xl)" }}>
            A straightforward, <span className="bg-gradient-to-r from-[#ff6b5e] to-[#e5231b] bg-clip-text text-transparent">targeted way</span> of working with you
          </h2>
          <p className="mt-4 max-w-[48ch] text-white/65">
            No jargon, no black boxes, no surprise invoices — just a team that reports honestly and keeps shipping.
          </p>

          <div className="mt-9 grid max-w-[480px] grid-cols-3 gap-3">
            {facts.map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-gradient-to-b from-white/20 to-white/0 p-px">
                <div className="h-full rounded-[15px] bg-[#0f1422] px-3 py-5 text-center">
                  <p className="bg-gradient-to-r from-[#ff6b5e] to-[#ff4d8d] bg-clip-text font-display text-3xl font-extrabold text-transparent">{v}</p>
                  <p className="mt-1.5 text-[11px] uppercase tracking-wider text-white/50">{l}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/contact-us" className="btn btn-brand group mt-9">
            Talk to our team
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Right: staggered columns */}
        <Reveal stagger className="grid gap-4 pb-8 sm:grid-cols-2 sm:[&>*:nth-child(even)]:translate-y-8">
          {whyUs.map((w, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Spotlight
                key={w.title}
                color="rgba(255,107,94,.16)"
                className="rounded-[26px] border border-white/10 bg-white/[.04] p-7 transition-colors duration-300 hover:border-[var(--color-brand)]/60"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute right-6 top-5 font-display text-5xl font-black leading-none text-white/[.06] transition-colors group-hover:text-white/[.14]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-brand)] to-[#a45ad6] text-white shadow-[0_12px_28px_-8px_rgba(124,58,237,.6)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 text-[var(--fs-lg)] font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-white/60">{w.body}</p>
              </Spotlight>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
