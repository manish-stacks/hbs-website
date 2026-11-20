import Link from "next/link";
import { ArrowRight, CalendarDays, Camera, Play } from "lucide-react";
import type { Album } from "@/lib/gallery";

export function AlbumCard({ a, compact = false }: { a: Album; compact?: boolean }) {
  return (
    <Link href={`/gallery/${a.slug}`} className="group flex flex-col overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface-2)]">
        {a.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={a.cover} alt={a.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-ink)] to-[#3a1714] text-white/40"><Camera size={40} /></div>
        )}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {a.date ? (
          <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-[var(--color-ink)] backdrop-blur">
            <CalendarDays size={12} /> {a.date}
          </span>
        ) : null}
        <div className="absolute bottom-3.5 left-3.5 flex gap-2 text-[11px] font-bold text-white">
          {a.photos ? <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 backdrop-blur"><Camera size={12} /> {a.photos} photo{a.photos === 1 ? "" : "s"}</span> : null}
          {a.videos ? <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand)] px-3 py-1"><Play size={11} fill="currentColor" /> {a.videos} video{a.videos === 1 ? "" : "s"}</span> : null}
        </div>
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-5 sm:p-6"}`}>
        <h3 className={`font-extrabold text-[var(--color-ink)] ${compact ? "text-[16px]" : "text-[19px] sm:text-[21px]"}`}>{a.name}</h3>
        {a.description && !compact ? <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-[var(--color-text-muted)]">{a.description}</p> : null}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-bold text-[var(--color-brand)]">
          View album <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
