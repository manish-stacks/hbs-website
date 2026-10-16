import { SectionHead } from "./SectionHead";
import { getSetting } from "@/lib/site";

function Row({ items, rev }: { items: string[]; rev?: boolean }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="ticker-wrap overflow-hidden">
      <div className={`marquee ${rev ? "marquee-rev" : ""}`} style={{ ["--dur" as string]: "60s" }}>
        {loop.map((n, i) => (
          <span key={i} className={`mx-2.5 shrink-0 rounded-full border-2 border-[#111] px-6 py-3 font-display text-lg font-bold shadow-[var(--pop)] sm:text-2xl ${["bg-white", "bg-[var(--sun)]", "bg-[var(--color-brand)] text-white", "bg-[#111] text-white"][i % 4]}`}>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export async function Industries() {
  const industries = (await getSetting("industries")).items.map((x) => x.name);
  const mid = Math.ceil(industries.length / 2);

  return (
    <section className="section-space overflow-hidden">
      <div className="container-max">
        <SectionHead pill="Industries we serve" title="Industry-focused digital expertise" sub="We understand the specific buying behaviour of each sector, and build campaigns around it instead of using one template for everyone." />
      </div>
      <div className="mt-14 flex flex-col gap-5 py-2">
        <Row items={industries.slice(0, mid).length ? industries.slice(0, mid) : industries} />
        <Row items={industries.slice(mid).length ? industries.slice(mid) : industries} rev />
      </div>
    </section>
  );
}
