import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** Header for custom pages created in the admin editor. */
export function ArticleHeader({ title, excerpt, image, imageAlt }: { title: string; excerpt: string; image: string; imageAlt: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0e17] text-white">
      <span className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--color-brand)] opacity-30 blur-[130px]" aria-hidden />
      <span className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--color-brand)] opacity-20 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "56px 56px" }} aria-hidden />
      <div className={`container-max grid items-center gap-10 py-14 md:py-20 ${image ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
        <div>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] font-semibold text-white/55">
            <Link href="/" className="hover:text-white">Home</Link><ChevronRight size={13} /><span className="max-w-[40ch] truncate text-white/90">{title}</span>
          </nav>
          <h1 className="mt-5 text-white" style={{ fontSize: "clamp(2.2rem,4.6vw,3.8rem)", lineHeight: 1.06, letterSpacing: "-0.03em" }}>{title}</h1>
          <span className="mt-5 block h-1.5 w-20 rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[#b794f6]" aria-hidden />
          {excerpt ? <p className="mt-5 max-w-[60ch] text-[var(--fs-lg)] leading-relaxed text-white/70">{excerpt}</p> : null}
        </div>
        {image ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/15 shadow-[0_40px_90px_-30px_rgba(0,0,0,.7)]">
            <Image src={image} alt={imageAlt || title} fill priority sizes="(max-width:1024px) 100vw, 520px" className="object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
