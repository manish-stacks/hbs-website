import { getSetting } from "@/lib/site";

const isImage = (v: string) => v.startsWith("/") || v.startsWith("http");

function Tile({ value, alt }: { value: string; alt: string }) {
  return (
    <span className="mx-2 flex h-[76px] w-[150px] shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 transition-colors duration-300 hover:border-[var(--color-brand)] sm:mx-2.5 sm:h-[86px] sm:w-[180px] sm:px-5">
      {isImage(value) ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={value}
          alt={alt}
          loading="lazy"
          className="max-h-[44px] w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:max-h-[52px]"
        />
      ) : (
        <span className="truncate font-display text-[15px] font-bold text-[var(--color-ink)]">
          {value}
        </span>
      )}
    </span>
  );
}

export async function Logos() {
  const { items } = await getSetting("clients");
  const base = items.filter((c) => c.logo).map((c) => ({ v: c.logo, alt: c.alt || `${c.name} client logo` }));
  // Each half must be wider than the screen, otherwise a gap shows during the loop.
  const reps = Math.max(1, Math.ceil(16 / Math.max(base.length, 1)));
  const half = Array.from({ length: reps }).flatMap(() => base);
  const row = [...half, ...half];

  return (
    <section className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-8 sm:py-10">
      <div className="container-max">
        <p className="text-center text-[var(--fs-xs)] font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] sm:text-[var(--fs-sm)]">
          Trusted by 1500+ growing brands
        </p>
      </div>

      <div className="marquee-wrap relative mt-6 overflow-hidden sm:mt-8 [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div className="marquee items-stretch" style={{ ["--dur" as string]: "48s" }}>
          {row.map((c, i) => (
            <Tile key={`a-${i}`} value={c.v} alt={c.alt} />
          ))}
        </div>
      </div>

      <div className="marquee-wrap relative mt-3 overflow-hidden sm:mt-4 [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div className="marquee marquee-rev items-stretch" style={{ ["--dur" as string]: "56s" }}>
          {row.map((c, i) => (
            <Tile key={`b-${i}`} value={c.v} alt={c.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}