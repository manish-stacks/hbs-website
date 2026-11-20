"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, Play, X } from "lucide-react";
import type { Media } from "@/lib/gallery";

const STEP = 12;
type Cat = { name: string; slug: string; count: number };

function Thumb({ m, className = "" }: { m: Media; className?: string }) {
  if (m.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={m.image} alt={m.alt} loading="lazy" className={className} />;
  }
  if (m.video?.kind === "file") {
    return <video src={`${m.video.src}#t=0.5`} preload="metadata" muted playsInline className={className} />;
  }
  return <div className={`flex items-center justify-center bg-[var(--color-ink)] ${className}`} style={{ aspectRatio: "16/10" }}><Play className="text-white/60" size={36} /></div>;
}

export function GalleryExplorer({ media, categories = [] }: { media: Media[]; categories?: Cat[] }) {
  const [active, setActive] = useState("all");
  const [shown, setShown] = useState(STEP);
  const [open, setOpen] = useState<number | null>(null);

  // open a category straight from a link, e.g. /gallery?category=events
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && categories.some((x) => x.slug === c)) setActive(c);
  }, [categories]);

  const pick = (slug: string) => {
    setActive(slug);
    setShown(STEP);
    const url = slug === "all" ? window.location.pathname : `${window.location.pathname}?category=${slug}`;
    window.history.replaceState(null, "", url);
  };

  const list = useMemo(() => (active === "all" ? media : media.filter((m) => m.cat === active)), [media, active]);
  const visible = list.slice(0, shown);
  const cur = open === null ? null : list[open] ?? null;

  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, step]);

  if (media.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center py-20 text-center text-[var(--color-text-muted)]">
        <ImageIcon size={40} className="mb-4 opacity-40" />
        <p>Gallery will be updated soon.</p>
      </div>
    );
  }

  const tab = (on: boolean) =>
    `inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-bold transition-all ${on ? "border-transparent bg-[var(--color-brand)] text-white shadow-[0_10px_24px_-10px_rgba(229,35,27,.7)]" : "border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"}`;
  const count = (on: boolean) => `rounded-full px-2 py-0.5 text-[11px] ${on ? "bg-white/25" : "bg-[var(--color-surface-2)] text-[var(--color-text-muted)]"}`;

  return (
    <>
      {/* category tabs */}
      {categories.length > 1 ? (
        <div className="-mx-[18px] overflow-x-auto px-[18px] pb-2 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2.5 md:flex-wrap md:justify-center">
            <button type="button" onClick={() => pick("all")} className={tab(active === "all")}>
              All <span className={count(active === "all")}>{media.length}</span>
            </button>
            {categories.map((c) => (
              <button key={c.slug} type="button" onClick={() => pick(c.slug)} className={tab(active === c.slug)}>
                {c.name} <span className={count(active === c.slug)}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {/* masonry grid */}
      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
        {visible.map((m, i) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[20px] bg-[var(--color-surface-2)] text-left shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)] lg:mb-6"
            aria-label={m.title ? `Open ${m.title}` : "Open"}
          >
            <Thumb m={m} className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            {m.video ? (
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-brand)] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play size={22} fill="currentColor" className="ml-0.5" />
              </span>
            ) : null}
            <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[var(--color-ink)] backdrop-blur">
              {m.video ? "Video" : "Photo"}{categories.length > 1 ? ` · ${m.category}` : ""}
            </span>
            {m.title ? (
              <span className="absolute inset-x-0 bottom-0 p-4 text-[15px] font-bold leading-snug text-white sm:p-5">{m.title}</span>
            ) : null}
          </button>
        ))}
      </div>

      {list.length > shown ? (
        <div className="mt-6 text-center">
          <button type="button" onClick={() => setShown((s) => s + STEP)} className="btn btn-brand">
            Load more ({list.length - shown})
          </button>
        </div>
      ) : null}

      {/* lightbox */}
      {cur ? (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm" role="dialog" aria-modal="true" onClick={() => setOpen(null)} data-lenis-prevent>
          <div className="flex items-center justify-between px-4 py-3 text-white sm:px-8" onClick={(e) => e.stopPropagation()}>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{cur.category} · {(open ?? 0) + 1} / {list.length}</span>
            <button type="button" onClick={() => setOpen(null)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-brand)]" aria-label="Close"><X size={20} /></button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20" onClick={(e) => e.stopPropagation()}>
            {list.length > 1 ? (
              <>
                <button type="button" onClick={() => step(-1)} className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[var(--color-brand)] sm:left-6" aria-label="Previous"><ChevronLeft size={22} /></button>
                <button type="button" onClick={() => step(1)} className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[var(--color-brand)] sm:right-6" aria-label="Next"><ChevronRight size={22} /></button>
              </>
            ) : null}

            {cur.video?.kind === "file" ? (
              <video key={cur.id} src={cur.video.src} poster={cur.image || undefined} controls autoPlay playsInline className="max-h-full max-w-full rounded-xl bg-black" />
            ) : cur.video ? (
              <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black">
                <iframe key={cur.id} src={cur.video.src} title={cur.title || "Video"} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="h-full w-full" />
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={cur.id} src={cur.image} alt={cur.alt} className="max-h-full max-w-full rounded-xl object-contain" />
            )}
          </div>

          <div className="px-4 py-4 text-center text-white sm:px-8" onClick={(e) => e.stopPropagation()}>
            {cur.title ? <p className="text-base font-bold sm:text-lg">{cur.title}</p> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
