import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; href: string };

/**
 * Shared breadcrumb bar — glass pill, home icon, chevron separators,
 * current page as a highlighted chip, plus BreadcrumbList JSON-LD for SEO.
 */
export function Breadcrumbs({
  crumbs = [],
  align = "center",
  tone = "light",
}: {
  crumbs?: Crumb[];
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...crumbs];
  const last = trail.length - 1;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `https://hoverbusinessservices.com${c.href === "/" ? "" : c.href}`,
    })),
  };

  const dark = tone === "dark";

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={`flex ${align === "center" ? "justify-center" : "justify-start"}`}
      >
        <ol
          className={`flex max-w-full flex-wrap items-center gap-x-1 gap-y-1.5 rounded-full border px-2.5 py-1.5 backdrop-blur-md sm:px-3 ${
            dark
              ? "border-white/15 bg-white/[.06]"
              : "border-[var(--color-border)] bg-white/80 shadow-[var(--shadow-sm)]"
          }`}
        >
          {trail.map((c, i) => {
            const isLast = i === last;
            const isHome = i === 0;

            return (
              <li key={`${c.href}-${i}`} className="flex items-center gap-1">
                {i > 0 ? (
                  <ChevronRight
                    size={13}
                    aria-hidden
                    className={dark ? "text-white/35" : "text-[var(--color-text-muted)] opacity-60"}
                  />
                ) : null}

                {isLast ? (
                  <span
                    aria-current="page"
                    className={`inline-flex max-w-[52vw] items-center gap-1.5 truncate rounded-full px-3 py-1 text-[var(--fs-xs)] font-bold sm:max-w-none ${
                      dark
                        ? "bg-[var(--color-brand)] text-white"
                        : "bg-[var(--color-brand-soft)] text-[var(--color-brand)]"
                    }`}
                  >
                    {isHome ? <Home size={13} aria-hidden /> : null}
                    <span className="truncate">{c.label}</span>
                  </span>
                ) : (
                  <Link
                    href={c.href}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[var(--fs-xs)] font-semibold transition-colors ${
                      dark
                        ? "text-white/65 hover:bg-white/10 hover:text-white"
                        : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand)]"
                    }`}
                  >
                    {isHome ? <Home size={13} aria-hidden /> : null}
                    <span>{c.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
