import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

const DEFAULT_BANNER = "/images/art/page-banner.svg";

export function PageHero({
  eyebrow,
  title,
  tagline,
  crumbs = [],
  image = DEFAULT_BANNER,
}: {
  eyebrow: string;
  title: string;
  tagline?: string;
  crumbs?: Crumb[];
  /** drop any photo here per page, e.g. "/images/banners/seo.jpg" */
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* banner image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[760px] -translate-x-1/2 rounded-full blur-[110px]"
        style={{ background: "radial-gradient(ellipse, rgba(229,35,27,.22), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-max relative py-12 text-center sm:py-16 lg:py-20">
        <Breadcrumbs crumbs={crumbs} tone="dark" />

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.07] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)] backdrop-blur">
          {eyebrow}
        </span>

        <h1 className="mx-auto mt-4 max-w-[22ch] text-white" style={{ fontSize: "var(--fs-3xl)" }}>
          {title}
        </h1>

        {tagline ? (
          <p className="mx-auto mt-4 max-w-[60ch] text-[var(--fs-sm)] text-white/65 sm:text-[var(--fs-base)]">
            {tagline}
          </p>
        ) : null}
      </div>

      {/* bottom curve */}
      <svg
        viewBox="0 0 1440 46"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute bottom-[-1px] left-0 h-[34px] w-full sm:h-[46px]"
      >
        <path d="M0 46h1440V0c-240 30-560 42-720 42S240 30 0 0v46z" fill="var(--color-background)" />
      </svg>
    </section>
  );
}
