import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Layers, Plus, ShieldCheck, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import { ServiceHero } from "@/components/layout/ServiceHero";
import { Reveal } from "@/components/ui/Reveal";
import { getCompany } from "@/lib/site";
import { serviceTheme } from "@/lib/serviceTheme";
import { safeHref, rows, str, strs, type Block } from "@/lib/blocks";

const icons = [Target, TrendingUp, Layers, ShieldCheck, Zap, Sparkles];
const H2 = { fontSize: "var(--fs-2xl)" } as const;


const inline = (s: string) =>
  s.split(/(\*\*[^*]+\*\*)/g).map((p, i) => (p.startsWith("**") && p.endsWith("**") && p.length > 4 ? <strong key={i} className="font-semibold text-[var(--color-ink)]">{p.slice(2, -2)}</strong> : p));

/** Light formatting for admin text: blank line = paragraph, "## " = sub heading, "- " = tick list, **bold**. */
function Rich({ text, lead = false }: { text: string; lead?: boolean }) {
  return (
    <>
      {text.split(/\n{2,}/).map((chunk, i) => {
        const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
        if (!lines.length) return null;
        if (lines[0]!.startsWith("## ")) {
          const rest = lines.slice(1).join(" ");
          return (
            <div key={i}>
              <h3 className="mt-9 font-display text-[var(--fs-xl)] font-bold text-[var(--color-ink)]">{inline(lines[0]!.slice(3))}</h3>
              {rest ? <p className="mt-3 leading-[1.85] text-[var(--color-text-muted)]">{inline(rest)}</p> : null}
            </div>
          );
        }
        if (lines.every((l) => /^[-*] /.test(l)))
          return (
            <ul key={i} className="mt-5 grid gap-2.5">
              {lines.map((l, j) => (
                <li key={j} className="flex items-start gap-3 text-[var(--color-text-muted)]">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Check size={12} strokeWidth={3} /></span>
                  <span className="leading-relaxed">{inline(l.slice(2))}</span>
                </li>
              ))}
            </ul>
          );
        return <p key={i} className={`mt-4 leading-[1.85] ${lead && i === 0 ? "text-[var(--fs-lg)] text-[var(--color-ink)]/85" : "text-[var(--color-text-muted)]"}`}>{inline(lines.join(" "))}</p>;
      })}
    </>
  );
}

const Title = ({ children }: { children: string }) => (
  <h2 className="border-l-[5px] border-[var(--color-brand)] pl-4 leading-tight" style={H2}>{children}</h2>
);

function Head({ heading, intro }: { heading: string; intro?: string }) {
  if (!heading && !intro) return null;
  return (
    <Reveal className="mx-auto mb-10 max-w-[60ch] text-center">
      {heading ? <h2 style={H2}>{heading}</h2> : null}
      {intro ? <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{intro}</p> : null}
    </Reveal>
  );
}

function One({ b, slug, path, phone }: { b: Block; slug: string; path: string; phone: string }) {
  switch (b.type) {
    case "hero":
      return (
        <ServiceHero
          eyebrow={str(b.eyebrow)}
          title={str(b.title)}
          tagline={str(b.tagline)}
          crumbs={[{ label: str(b.title), href: path }]}
          theme={{ ...serviceTheme(slug), ...(str(b.image) ? { image: str(b.image) } : {}) }}
          phone={phone}
        />
      );
    case "heading":
      return (
        <section className="container-max pt-12">
          <Head heading={str(b.text)} intro={str(b.sub)} />
        </section>
      );
    case "text":
      return (
        <section className="section-space !py-8">
          <div className="container-max">
            <Reveal className="mx-auto max-w-[980px] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-10">
              {str(b.heading) ? <Title>{str(b.heading)}</Title> : null}
              <Rich text={str(b.body)} lead />
            </Reveal>
          </div>
        </section>
      );
    case "split": {
      const left = str(b.side).toLowerCase() === "left";
      return (
        <section className="section-space">
          <div className="container-max grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={left ? "lg:order-2" : ""}>
              <Title>{str(b.heading)}</Title>
              <Rich text={str(b.body)} lead />
              {strs(b.points).filter(Boolean).length ? <Rich text={strs(b.points).filter(Boolean).map((x) => `- ${x}`).join("\n")} /> : null}
              {str(b.label) ? <Link href={safeHref(str(b.href))} className="btn btn-brand mt-7 inline-flex">{str(b.label)} <ArrowRight size={16} /></Link> : null}
            </Reveal>
            <Reveal className={`relative ${left ? "lg:order-1" : ""}`}>
              <span className="absolute -inset-3 -z-10 rounded-[var(--radius-lg)] bg-[var(--color-brand)] opacity-10" aria-hidden />
              {str(b.image) ? (
                <Image src={str(b.image)} alt={str(b.alt) || str(b.heading)} width={1200} height={900} sizes="(max-width:1024px) 100vw, 560px" className="h-auto w-full rounded-[var(--radius-lg)] object-cover shadow-[var(--shadow-md)]" />
              ) : null}
            </Reveal>
          </div>
        </section>
      );
    }
    case "steps": {
      const list = rows(b.items);
      return (
        <section className="section-space bg-[var(--color-surface)]">
          <div className="container-max">
            <Head heading={str(b.heading)} intro={str(b.intro)} />
            <Reveal stagger className={`grid gap-5 sm:grid-cols-2 ${list.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {list.map((s, i) => (
                <div key={i} className="relative rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-6 pt-9">
                  <span className="absolute -top-5 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] font-display text-sm font-bold text-white shadow-lg">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[var(--fs-lg)] font-bold">{s.title}</h3>
                  <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{s.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      );
    }
    case "stats":
      return (
        <section className="section-space !py-8">
          <div className="container-max">
            <Reveal className="rounded-[var(--radius-lg)] bg-[var(--color-ink)] px-6 py-10 text-center sm:px-10">
              {str(b.heading) ? <h2 className="mb-8 text-white" style={H2}>{str(b.heading)}</h2> : null}
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {rows(b.items).map((s, i) => (
                  <div key={i}>
                    <p className="font-display text-4xl font-black text-[var(--color-brand)] sm:text-5xl">{s.value}</p>
                    <p className="mt-1 text-sm text-white/70">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      );
    case "image":
      return str(b.src) ? (
        <section className="section-space !py-8">
          <figure className="container-max">
            <Reveal className="mx-auto max-w-[1000px] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
              <Image src={str(b.src)} alt={str(b.alt) || str(b.caption)} width={1600} height={900} sizes="(max-width:1024px) 100vw, 1000px" className="h-auto w-full" />
            </Reveal>
            {str(b.caption) ? <figcaption className="mt-3 text-center text-[var(--fs-sm)] text-[var(--color-text-muted)]">{str(b.caption)}</figcaption> : null}
          </figure>
        </section>
      ) : null;
    case "features":
      return (
        <section className="section-space">
          <div className="container-max">
            <Head heading={str(b.heading)} intro={str(b.intro)} />
            <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rows(b.items).map((it, i) => {
                const Icon = icons[i % icons.length]!;
                const inner = (
                  <>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] text-white">
                      <Icon size={21} />
                    </span>
                    <h3 className="mt-5 font-display text-[var(--fs-lg)] font-bold">{it.title}</h3>
                    <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{it.body}</p>
                    {it.href ? <ArrowUpRight size={16} className="absolute right-5 top-5 text-[var(--color-ink)]" /> : null}
                  </>
                );
                const cls = "group relative block overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]";
                return it.href ? (
                  <Link key={i} href={safeHref(it.href)} className={cls}>{inner}</Link>
                ) : (
                  <div key={i} className={cls}>{inner}</div>
                );
              })}
            </Reveal>
          </div>
        </section>
      );
    case "checklist":
      return (
        <section className="section-space">
          <div className="container-max">
            <Reveal className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6 sm:p-8">
              <Title>{str(b.heading)}</Title>
              {str(b.intro) ? <p className="mt-3 text-[var(--fs-sm)] text-[var(--color-text-muted)]">{str(b.intro)}</p> : null}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {strs(b.items).filter(Boolean).map((d, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-[var(--shadow-sm)]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-[var(--fs-sm)] font-medium">{d}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      );
    case "faq":
      return (
        <section className="section-space bg-[var(--color-surface)]">
          <div className="container-max">
            <Head heading={str(b.heading)} />
            <Reveal stagger className="mx-auto flex max-w-[860px] flex-col gap-3">
              {rows(b.items).map((f, i) => (
                <details key={i} className="group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-5 transition-all open:border-[var(--color-brand)]/40 open:shadow-[var(--shadow-md)] sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display font-bold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] transition-all duration-300 group-open:rotate-45 group-open:bg-[var(--color-brand)] group-open:text-white">
                      <Plus size={16} />
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{f.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>
      );
    case "cta":
      return (
        <section className="section-space !py-10">
          <div className="container-max">
            <Reveal className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)] px-6 py-12 text-center sm:px-12">
              <span className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-brand)] opacity-40 blur-[90px]" />
              <h2 className="relative text-white" style={H2}>{str(b.title)}</h2>
              <p className="relative mx-auto mt-3 max-w-[56ch] text-white/70">{str(b.text)}</p>
              <Link href={safeHref(str(b.href))} className="btn btn-brand relative mt-6 inline-flex">
                {str(b.label)} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      );
    default:
      return null;
  }
}

export async function BlockRenderer({ blocks, slug, path }: { blocks: Block[]; slug: string; path: string }) {
  const { phone } = await getCompany();
  return (
    <>
      {blocks.map((b) => (
        <One key={b.id} b={b} slug={slug} path={path} phone={phone} />
      ))}
    </>
  );
}
