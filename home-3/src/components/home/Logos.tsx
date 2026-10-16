import { getSetting } from "@/lib/site";

const isImage = (v: string) => v.startsWith("/") || v.startsWith("http");

function Tile({ value, alt }: { value: string; alt: string }) {
  return (
    <span className="mx-3 flex h-[84px] w-[170px] shrink-0 items-center justify-center rounded-2xl border-2 border-[#111] bg-white px-5 shadow-[var(--pop)] sm:mx-4 sm:w-[200px]">
      {isImage(value) ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={value} alt={alt} loading="lazy" className="max-h-[48px] w-auto max-w-full object-contain" />
      ) : (
        <span className="truncate font-display text-[15px] font-extrabold">{value}</span>
      )}
    </span>
  );
}

export async function Logos() {
  const { items } = await getSetting("clients");
  const base = items.filter((c) => c.logo).map((c) => ({ v: c.logo, alt: c.alt || `${c.name} client logo` }));
  const reps = Math.max(1, Math.ceil(10 / Math.max(base.length, 1)));
  const half = Array.from({ length: reps }).flatMap(() => base);
  const row = [...half, ...half];

  return (
    <section className="overflow-hidden py-14 sm:py-20">
      <div className="container-max flex flex-wrap items-end justify-between gap-4">
        <h2 style={{ fontSize: "var(--fs-2xl)" }}>Trusted by <span className="underline decoration-[var(--color-brand)] decoration-4 underline-offset-8">1500+</span> growing brands</h2>
        <span className="tag">Our clients</span>
      </div>
      <div className="marquee-wrap relative mt-9 overflow-hidden py-3">
        <div className="marquee items-center" style={{ ["--dur" as string]: "55s" }}>
          {row.map((c, i) => <Tile key={i} value={c.v} alt={c.alt} />)}
        </div>
      </div>
    </section>
  );
}
