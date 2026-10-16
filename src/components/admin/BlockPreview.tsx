import { rows, str, strs, type Block } from "@/lib/blocks";
import { isHtml } from "@/lib/richtext";
const plain = (s: string) => (isHtml(s) ? s.replace(/<\/(p|h\d|li|div|blockquote)>/gi, "\n\n").replace(/<[^>]+>/g, "") : s);

/** Database-free visual preview of a block, used inside the page builder canvas. */
export function BlockPreview({ b }: { b: Block }) {
  const p = "px-6 py-7 sm:px-10";
  const empty = <span className="text-gray-300">Empty</span>;
  switch (b.type) {
    case "hero":
      return (
        <div className="bg-[var(--color-ink)] px-6 py-14 text-white sm:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff8a84]">{str(b.eyebrow)}</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight">{str(b.title) || empty}</h1>
          <p className="mt-3 max-w-xl text-white/70">{str(b.tagline)}</p>
        </div>
      );
    case "heading":
      return <div className={`${p} text-center`}><h2 className="text-2xl font-bold">{str(b.text) || empty}</h2><p className="mx-auto mt-1 max-w-xl text-gray-500">{str(b.sub)}</p></div>;
    case "text":
      return <div className={p}>{str(b.heading) ? <h2 className="mb-2 text-xl font-bold">{str(b.heading)}</h2> : null}{plain(str(b.body)).replace(/\*\*/g, "").split(/\n\s*\n/).map((x, i) => <p key={i} className="mb-2 leading-relaxed text-gray-600">{x}</p>)}</div>;
    case "split":
      return <div className={`${p} grid gap-5 sm:grid-cols-2`}><div><h2 className="text-xl font-bold">{str(b.heading)}</h2><p className="mt-2 whitespace-pre-line text-gray-600">{plain(str(b.body)).replace(/\*\*/g, "")}</p><ul className="mt-2">{strs(b.points).filter(Boolean).map((x, i) => <li key={i} className="text-gray-700">&#10003; {x}</li>)}</ul></div>{str(b.image) ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={str(b.image)} alt="" className="rounded-xl" /> : <div className="rounded-xl bg-gray-100 p-10 text-center text-gray-400">Image</div>}</div>;
    case "steps":
      return <div className={p}><h2 className="text-center text-xl font-bold">{str(b.heading)}</h2><div className="mt-4 grid gap-3 sm:grid-cols-3">{rows(b.items).map((x, i) => <div key={i} className="rounded-xl border border-gray-200 p-4"><span className="font-bold text-[var(--color-brand)]">0{i + 1}</span><p className="font-bold">{x.title}</p><p className="text-sm text-gray-500">{x.body}</p></div>)}</div></div>;
    case "stats":
      return <div className="m-6 flex flex-wrap justify-around gap-4 rounded-2xl bg-[var(--color-ink)] p-6 text-center text-white">{rows(b.items).map((x, i) => <div key={i}><p className="text-2xl font-bold text-[#ff8a84]">{x.value}</p><p className="text-sm text-white/70">{x.label}</p></div>)}</div>;
    case "image":
      return <div className={p}>{str(b.src) ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={str(b.src)} alt={str(b.alt)} className="mx-auto max-h-80 rounded-xl" /> : <div className="rounded-xl bg-gray-100 p-12 text-center text-gray-400">No image selected</div>}{str(b.caption) ? <p className="mt-2 text-center text-sm text-gray-500">{str(b.caption)}</p> : null}</div>;
    case "features":
      return <div className={p}><h2 className="text-center text-xl font-bold">{str(b.heading)}</h2>{str(b.intro) ? <p className="mx-auto mt-1 max-w-xl text-center text-gray-500">{str(b.intro)}</p> : null}<div className="mt-5 grid gap-3 sm:grid-cols-3">{rows(b.items).map((x, i) => <div key={i} className="rounded-xl border border-gray-200 p-4"><p className="font-bold">{x.title}</p><p className="mt-1 text-sm text-gray-500">{x.body}</p></div>)}</div></div>;
    case "checklist":
      return <div className={p}><h2 className="text-xl font-bold">{str(b.heading)}</h2>{str(b.intro) ? <p className="mt-1 text-gray-500">{str(b.intro)}</p> : null}<ul className="mt-3 grid gap-1.5 sm:grid-cols-2">{strs(b.items).filter(Boolean).map((x, i) => <li key={i} className="text-gray-700"><span className="mr-2 font-bold text-[var(--color-brand)]">&#10003;</span>{x}</li>)}</ul></div>;
    case "faq":
      return <div className={p}><h2 className="mb-3 text-xl font-bold">{str(b.heading)}</h2>{rows(b.items).map((x, i) => <div key={i} className="mb-2 rounded-lg border border-gray-200 p-3"><p className="font-semibold">{x.q}</p><p className="mt-1 text-sm text-gray-500">{x.a}</p></div>)}</div>;
    default:
      return <div className="m-6 rounded-2xl bg-[var(--color-brand)] p-8 text-center text-white"><h2 className="text-2xl font-bold">{str(b.title)}</h2><p className="mt-1 opacity-90">{str(b.text)}</p><span className="mt-4 inline-block rounded-full bg-white px-5 py-2 font-bold text-[var(--color-brand)]">{str(b.label)}</span></div>;
  }
}
