import Link from "next/link";
import { ArrowRight, Bot, Database, Mail, MapPin, MessageCircle, Receipt, UserPlus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { icon: UserPlus, t: "Trigger", d: "Naya lead / review / order" },
  { icon: Bot, t: "AI Agent", d: "Samajhta, decide karta" },
  { icon: Database, t: "Action", d: "CRM + ERP update" },
];
const outputs = [
  { icon: MessageCircle, l: "WhatsApp follow-up" },
  { icon: Mail, l: "Email sequence" },
  { icon: MapPin, l: "GMB review reply" },
  { icon: Receipt, l: "Auto invoice" },
];

export function AiAutomation() {
  return (
    <section className="hero-dark section-space relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="container-max relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/80">
            <Bot size={14} className="text-[var(--color-cyan)]" /> AI Automation
          </span>
          <h2 className="mt-5" style={{ fontSize: "var(--fs-3xl)" }}>
            Kaam <span className="text-gradient-ai">khud ho jaye</span>, aap sirf growth dekho
          </h2>
          <p className="mt-4 max-w-[54ch] text-white/65">
            Hamare AI agents sabhi products ko connect karte hain. Ek lead aaye to turant reply, follow-up,
            CRM entry aur invoice — 24/7, bina team ke manual effort ke.
          </p>
          <ul className="mt-6 space-y-2.5 text-[var(--fs-sm)] text-white/80">
            {["Custom workflows aapke business ke hisab se", "WhatsApp, Email, GMB aur ERP ek saath connected", "Real-time reports aur smart alerts"].map((x) => (
              <li key={x} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)]" /> {x}
              </li>
            ))}
          </ul>
          <Link href="/contact-us" className="btn btn-glow group mt-8">
            Apna automation banwaiye <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass !rounded-[24px] p-5 sm:p-7">
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              {steps.map((s, i) => (
                <div key={s.t} className="flex flex-1 items-center gap-3">
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/[.05] p-4">
                    <s.icon size={18} className={i === 1 ? "text-[var(--color-violet)]" : "text-[var(--color-cyan)]"} />
                    <p className="mt-2 font-display text-sm font-bold text-white">{s.t}</p>
                    <p className="text-[12px] text-white/50">{s.d}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <svg width="28" height="8" className="hidden shrink-0 sm:block">
                      <line x1="0" y1="4" x2="28" y2="4" stroke="#19c3e6" strokeWidth="2" className="flow-line" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="grid grid-cols-2 gap-3">
              {outputs.map((o) => (
                <div key={o.l} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[.04] px-3.5 py-3 text-[13px] text-white/85">
                  <o.icon size={16} className="text-[var(--color-cyan)]" /> {o.l}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
