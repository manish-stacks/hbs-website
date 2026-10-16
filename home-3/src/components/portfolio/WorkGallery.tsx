import Image from "next/image";
import Link from "next/link";
import { getSetting } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "lucide-react";


const reveal =
  "translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100";

export async function WorkGallery() {
  const { items: work } = await getSetting("work");
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
      {work.map((w, i) => (
        <article
          key={w.name}
          tabIndex={0}
          className={`group relative block break-inside-avoid overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface-2)] shadow-[0_18px_40px_rgba(16,19,26,.14)] ring-1 ring-[var(--color-border)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] ${w.ratio}`}
        >
          <Image
            src={w.image}
            alt={w.alt || `${w.name} — ${w.sector} project by Hover Business Services`}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 420px"
            className="object-cover transition-transform duration-[900ms] group-hover:scale-110"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand)] shadow-sm">
            {w.sector}
          </span>
          <span className="absolute right-4 top-4 font-display text-sm font-bold text-white/90 drop-shadow">
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* hover details */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,19,26,.95)] via-[rgba(16,19,26,.4)] to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <div className="flex items-end justify-between gap-3">
              <h3 className="font-display text-[var(--fs-xl)] font-extrabold text-white">{w.name}</h3>
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] ${reveal}`}>
                <ArrowUpRight size={17} />
              </span>
            </div>
            <div className={reveal}>
              <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-white/75">{w.outcome}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {w.scope.filter(Boolean).map((t) => (
                  <li key={t} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-medium">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}

      <Link
        href="/contact-us"
        className="group relative flex min-h-[260px] break-inside-avoid flex-col items-center justify-center gap-3 overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-8 text-center text-white"
      >
        <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[70px]" style={{ background: "radial-gradient(circle, rgba(229,35,27,.6), transparent 70%)" }} />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand)] transition-transform group-hover:translate-x-1">
          <ArrowRight size={22} />
        </span>
        <p className="relative font-display text-[var(--fs-xl)] font-extrabold text-white">Your brand here</p>
        <p className="relative max-w-[28ch] text-[var(--fs-sm)] text-white/60">Tell us what you are building and we will show you a plan.</p>
      </Link>
    </div>
  );
}
