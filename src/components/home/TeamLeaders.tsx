import { getSetting } from "@/lib/site";
import { SectionHead } from "./SectionHead";
import { Reveal } from "@/components/ui/Reveal";

export async function TeamLeaders() {
  const { items } = await getSetting("leaders");
  const leaders = (items ?? []).filter((m) => m?.name);

  return (
    <section className="section-space bg-white">
      <div className="container-max">
        <SectionHead
          pill="Team Leaders"
          title="The People Leading Our Teams"
          sub="Meet the leaders who guide each department and keep every project on track."
        />

        {leaders.length === 0 ? (
          <p className="mt-12 text-center text-[var(--color-text-muted)]">Team leaders will be added soon.</p>
        ) : (
          <Reveal stagger className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {leaders.map((m, i) => (
              <article key={`${m.name}-${i}`} className="relative overflow-hidden rounded-[22px] bg-[var(--color-surface)]">
                <div className="relative m-4 mb-0 overflow-hidden rounded-[18px] bg-[var(--color-surface-2)]">
                  {m.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.image}
                      alt={m.alt || `${m.name}, ${m.designation}`}
                      loading="lazy"
                      className="h-[300px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[350px]"
                    />
                  ) : (
                    <div className="flex h-[300px] w-full items-center justify-center text-6xl font-extrabold text-[var(--color-ink)]/20 sm:h-[350px]">
                      {m.name.charAt(0)}
                    </div>
                  )}
                  {m.position ? (
                    <span className="absolute bottom-3 left-3 rounded-full bg-[var(--color-brand)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-lg">
                      {m.position}
                    </span>
                  ) : null}
                </div>

                <div className="relative overflow-hidden px-6 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
                  <div className="pointer-events-none absolute -right-3 -top-16 h-[180px] w-[95px] rotate-[-31deg] bg-white/75" />
                  <div className="pointer-events-none absolute right-[55px] -top-16 h-[180px] w-[35px] rotate-[-31deg] bg-[var(--color-surface-2)]" />
                  <h3 className="relative z-10 text-[19px] font-extrabold text-[var(--color-ink)] sm:text-[22px]">{m.name}</h3>
                  <p className="relative z-10 mt-1 text-[13px] font-medium text-[var(--color-text-muted)]">{m.designation}</p>
                </div>
              </article>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
