import Link from "next/link";
import { ArrowRight, BadgeCheck, Cpu, Handshake, Repeat2, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
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
    <section className="section-space relative overflow-hidden bg-[var(--color-ink)] text-white">
      <div className="grid-lines-dark pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(106,44,145,.35), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-40 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(185,138,47,.25), transparent 70%)" }}
      />

      <div className="container-max relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left */}
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/80">
            Why choose HBS
          </span>
          <h2 className="mt-5 text-white" style={{ fontSize: "var(--fs-3xl)" }}>
            A straightforward, <span className="text-gradient-brand">targeted way</span> of working with you
          </h2>
          <p className="mt-4 max-w-[48ch] text-white/65">
            No jargon, no black boxes, no surprise invoices — just a team that reports honestly and keeps shipping.
          </p>

          <div className="mt-8 grid max-w-[460px] grid-cols-3 gap-3">
            {facts.map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/[.05] px-3 py-4 text-center">
                <p className="font-display text-2xl font-extrabold text-white">{v}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{l}</p>
              </div>
            ))}
          </div>

          <Link href="/contact-us" className="btn btn-brand group mt-8">
            Talk to our team
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Right */}
        <Reveal stagger className="grid gap-4 sm:grid-cols-2">
          {whyUs.map((w, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <div
                key={w.title}
                className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/60 hover:bg-white/[.07]"
              >
                <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-white/[.06] transition-colors group-hover:text-white/[.12]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-brand)] to-[#a45ad6] text-white shadow-[0_10px_24px_rgba(106,44,145,.35)]">
                  <Icon size={21} />
                </span>
                <h3 className="mt-5 text-[var(--fs-lg)] font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-white/60">{w.body}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
