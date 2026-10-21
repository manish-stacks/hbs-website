import { Heart, MapPin, MessageCircle, MousePointerClick, Search, Share2, Star, Target, ThumbsUp, TrendingUp } from "lucide-react";

const card = "rounded-3xl border border-[var(--color-border)] bg-white p-5 shadow-[0_30px_70px_-30px_rgba(20,20,60,.3)] sm:p-6";
const Stars = ({ n = 5 }: { n?: number }) => (
  <span className="flex gap-0.5">{Array.from({ length: n }).map((_, i) => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}</span>
);

/** Illustrative search results page. */
export function SerpMock({ query, results }: { query: string; results: { t: string; u: string; s: string }[] }) {
  return (
    <div className={card}>
      <div className="flex items-center gap-3 rounded-full border border-[var(--color-border)] px-4 py-2.5 shadow-sm">
        <Search size={16} className="text-slate-400" />
        <span className="text-[14px] text-slate-700">{query}</span>
      </div>
      <ul className="mt-4 space-y-3">
        {results.map((r, i) => (
          <li key={r.t} className={`relative rounded-2xl p-4 ${i === 0 ? "border-2 border-[var(--a)] bg-[var(--a)]/[0.04]" : "border border-[var(--color-border)]"}`}>
            {i === 0 && <span className="absolute -top-3 right-4 rounded-full bg-[var(--a)] px-3 py-0.5 text-[11px] font-bold text-white">#1</span>}
            <p className="text-[12px] text-emerald-700">{r.u}</p>
            <p className="mt-0.5 text-[15px] font-bold text-[var(--color-ink)] hover:text-[var(--a)]">{r.t}</p>
            <p className="mt-1 text-[13px] leading-snug text-slate-500">{r.s}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-end justify-between gap-4 rounded-2xl bg-slate-50 p-4">
        <p className="text-[12px] font-semibold text-slate-500">Organic traffic<span className="block text-[10px] font-normal">Illustration</span></p>
        <svg viewBox="0 0 160 44" className="h-11 w-40" aria-hidden>
          <path d="M0 40 C20 38 30 30 50 28 S80 18 100 14 S140 6 160 2" fill="none" stroke="var(--a)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

/** Illustrative Google Maps local pack. */
export function MapPackMock({ listings }: { listings: { n: string; r: string; c: string }[] }) {
  return (
    <div className={`${card} overflow-hidden !p-0`}>
      <div className="relative h-44 bg-[#e8eef5]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.8) 2px,transparent 2px),linear-gradient(90deg,rgba(255,255,255,.8) 2px,transparent 2px)", backgroundSize: "44px 44px" }}>
        {[["22%", "30%", true], ["58%", "52%", false], ["76%", "22%", false]].map(([x, y, on], i) => (
          <MapPin key={i} size={on ? 38 : 30} className={`absolute drop-shadow ${on ? "fill-[var(--a)] text-white" : "fill-slate-400 text-white"}`} style={{ left: x as string, top: y as string }} />
        ))}
      </div>
      <ul className="divide-y divide-[var(--color-border)]">
        {listings.map((l, i) => (
          <li key={l.n} className={`flex items-center justify-between gap-3 px-5 py-3.5 ${i === 0 ? "bg-[var(--a)]/[0.05]" : ""}`}>
            <span>
              <span className="block text-[14px] font-semibold text-slate-900">{l.n}</span>
              <span className="mt-1 flex items-center gap-2 text-[12px] text-slate-500"><Stars /> {l.r} · {l.c}</span>
            </span>
            {i === 0 && <span className="rounded-full bg-[var(--a)] px-3 py-1 text-[11px] font-bold text-white">Top 3</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Illustrative review wall for reputation management. */
export function ReviewsMock({ reviews }: { reviews: { n: string; t: string }[] }) {
  return (
    <div className={`${card} space-y-3`}>
      {reviews.map((r, i) => (
        <div key={r.n} className={`rounded-2xl border border-[var(--color-border)] p-4 ${i === 1 ? "ml-6 bg-[var(--a)]/[0.05]" : i === 2 ? "mr-6" : ""}`}>
          <div className="flex items-center justify-between"><span className="text-[13px] font-bold text-slate-800">{r.n}</span><Stars /></div>
          <p className="mt-1.5 text-[13px] leading-snug text-slate-500">{r.t}</p>
        </div>
      ))}
      <p className="flex items-center gap-2 pt-1 text-[12px] font-semibold text-slate-500"><ThumbsUp size={14} className="text-[var(--a)]" /> Illustration</p>
    </div>
  );
}

/** Illustrative ads dashboard. */
export function AdsMock() {
  const bars = [30, 44, 38, 58, 52, 74, 68, 92];
  return (
    <div className={card}>
      <div className="flex items-center justify-between">
        <p className="font-display text-[15px] font-bold text-slate-900">Campaign overview</p>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-600">Live</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[["Clicks", MousePointerClick], ["Leads", Target], ["ROAS", TrendingUp]].map(([l, I]) => {
          const Icon = I as typeof Search;
          return (
            <div key={l as string} className="rounded-2xl bg-slate-50 p-3.5">
              <Icon size={16} className="text-[var(--a)]" />
              <p className="mt-2 text-[12px] font-semibold text-slate-500">{l as string}</p>
              <p className="mt-1 h-2 w-10 rounded bg-slate-200" />
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex h-36 items-end gap-2 rounded-2xl border border-[var(--color-border)] p-4">
        {bars.map((h, i) => <span key={i} className="flex-1 rounded-t-md bg-[var(--a)]" style={{ height: `${h}%`, opacity: 0.35 + i * 0.09 }} />)}
      </div>
      <p className="mt-3 text-[11px] text-slate-400">Illustration</p>
    </div>
  );
}

/** Illustrative social post card. */
export function PhoneMock({ brand, caption }: { brand: string; caption: string }) {
  return (
    <div className="relative mx-auto w-[290px] rounded-[40px] border-[8px] border-[#14161C] bg-white p-3 shadow-[0_40px_80px_-24px_rgba(0,0,0,.5)]">
      <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-slate-200" />
      <div className="flex items-center gap-2.5 px-1">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--a)] text-[13px] font-black text-white">{brand.slice(0, 1)}</span>
        <span className="text-[13px] font-bold text-slate-800">{brand}</span>
      </div>
      <div className="mt-3 flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--a)] to-[var(--color-brand-dark)]">
        <p className="max-w-[16ch] text-center font-display text-xl font-black leading-tight text-white">{caption}</p>
      </div>
      <div className="mt-3 flex items-center gap-4 px-1 text-slate-600"><Heart size={20} className="fill-[var(--a)] text-[var(--a)]" /><MessageCircle size={20} /><Share2 size={20} /></div>
      <div className="mt-3 space-y-1.5 px-1 pb-2"><span className="block h-2 w-4/5 rounded bg-slate-200" /><span className="block h-2 w-3/5 rounded bg-slate-100" /></div>
    </div>
  );
}

/** Illustrative browser window for web design and development. */
export function BrowserMock({ url, headline }: { url: string; headline: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_30px_70px_-30px_rgba(20,20,60,.35)]">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-slate-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 flex-1 truncate rounded-full bg-white px-4 py-1 text-[11px] text-slate-400">{url}</span>
      </div>
      <div className="p-5">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--a)] to-[#0a0e17] p-6 text-white">
          <p className="max-w-[16ch] font-display text-2xl font-black leading-tight">{headline}</p>
          <span className="mt-4 inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-bold text-slate-900">Get started</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-[var(--color-border)] p-3">
              <span className="block h-7 w-7 rounded-lg bg-[var(--a)]/15" />
              <span className="mt-3 block h-2 w-4/5 rounded bg-slate-200" /><span className="mt-1.5 block h-2 w-3/5 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Illustrative app screen. */
export function AppScreenMock({ title }: { title: string }) {
  return (
    <div className="mx-auto w-[280px] rounded-[40px] border-[8px] border-[#14161C] bg-slate-50 p-3 shadow-[0_40px_80px_-24px_rgba(0,0,0,.5)]">
      <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-slate-300" />
      <p className="px-1 font-display text-[15px] font-black text-slate-900">{title}</p>
      <div className="mt-3 rounded-2xl bg-gradient-to-br from-[var(--a)] to-[#0a0e17] p-4 text-white"><p className="text-[11px] opacity-70">Overview</p><span className="mt-2 block h-2.5 w-24 rounded bg-white/70" /><span className="mt-2 block h-2 w-16 rounded bg-white/40" /></div>
      <div className="mt-3 space-y-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--a)]/15 text-[var(--a)]"><Star size={16} /></span>
            <span className="flex-1"><span className="block h-2 w-3/4 rounded bg-slate-200" /><span className="mt-1.5 block h-2 w-1/2 rounded bg-slate-100" /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Illustrative brand board for design services. */
export function SwatchMock({ name, colors }: { name: string; colors: string[] }) {
  return (
    <div className={card}>
      <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--a)]/10 to-slate-100">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--a)] font-display text-3xl font-black text-white shadow-lg">{name.slice(0, 1)}</span>
        <span className="ml-4 font-display text-3xl font-black text-slate-900">{name}</span>
      </div>
      <div className="mt-4 flex gap-3">{colors.map((c) => <span key={c} className="h-12 flex-1 rounded-xl" style={{ background: c }} />)}</div>
      <div className="mt-4 rounded-2xl border border-[var(--color-border)] p-4">
        <p className="font-display text-2xl font-black text-slate-900">Aa</p>
        <p className="mt-1 text-[12px] text-slate-400">Typography · Colour · Layout · Illustration</p>
      </div>
    </div>
  );
}
