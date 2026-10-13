"use client";

import { useMemo } from "react";
import { Puck, type Config, type Data, type Field as PField } from "@measured/puck";
import "@measured/puck/puck.css";
import { X } from "lucide-react";
import { ImageField, inp } from "./Fields";
import { BLOCKS, BLOCK_TYPES, rows, str, strs, uid, type Block, type BlockType, type Field } from "@/lib/blocks";

function toPuck(f: Field): PField {
  if (f.t === "text") return { type: "text", label: f.label };
  if (f.t === "area") return { type: "textarea", label: f.label };
  if (f.t === "image") return { type: "custom", label: f.label, render: ({ value, onChange }) => <ImageField value={str(value)} onChange={onChange} /> };
  if (f.t === "lines") return { type: "custom", label: f.label, render: ({ value, onChange }) => <textarea className={inp} rows={5} value={strs(value).join("\n")} onChange={(e) => onChange(e.target.value.split("\n"))} /> };
  if (f.t === "items") return { type: "array", label: f.label, arrayFields: Object.fromEntries((f.sub ?? []).map((s) => [s.k, toPuck(s)])), getItemSummary: (it: Record<string, unknown>) => str(it.title) || str(it.q) || str(it.heading) || "Item" };
  return { type: "text", label: f.label };
}

/** Lightweight, database-free preview (the real page renders on the website). */
function Preview({ b }: { b: Record<string, unknown> }) {
  const t = b.type as BlockType;
  const wrap = "px-8 py-6";
  if (t === "hero")
    return <div className="bg-[var(--color-ink)] px-8 py-12 text-white"><p className="text-xs font-bold uppercase tracking-widest text-[#ff8a84]">{str(b.eyebrow)}</p><h1 className="mt-2 text-3xl font-bold">{str(b.title)}</h1><p className="mt-2 max-w-xl text-white/70">{str(b.tagline)}</p></div>;
  if (t === "heading") return <div className={`${wrap} text-center`}><h2 className="text-2xl font-bold">{str(b.text)}</h2><p className="mt-1 text-gray-500">{str(b.sub)}</p></div>;
  if (t === "text") return <div className={wrap}>{str(b.heading) ? <h2 className="mb-2 text-xl font-bold">{str(b.heading)}</h2> : null}{str(b.body).split(/\n\s*\n/).map((x, i) => <p key={i} className="mb-2 text-gray-600">{x}</p>)}</div>;
  if (t === "image") return <div className={wrap}>{str(b.src) ? <img src={str(b.src)} alt={str(b.alt)} className="mx-auto max-h-80 rounded-xl" /> : <div className="rounded-xl bg-gray-100 p-10 text-center text-gray-400">Image</div>}<p className="mt-1 text-center text-sm text-gray-500">{str(b.caption)}</p></div>;
  if (t === "features") return <div className={wrap}><h2 className="text-center text-xl font-bold">{str(b.heading)}</h2><p className="mb-4 text-center text-gray-500">{str(b.intro)}</p><div className="grid gap-3 sm:grid-cols-3">{rows(b.items).map((x, i) => <div key={i} className="rounded-xl border p-4"><p className="font-bold">{x.title}</p><p className="text-sm text-gray-500">{x.body}</p></div>)}</div></div>;
  if (t === "checklist") return <div className={wrap}><h2 className="text-xl font-bold">{str(b.heading)}</h2><p className="mb-2 text-gray-500">{str(b.intro)}</p><ul className="grid gap-1 sm:grid-cols-2">{strs(b.items).filter(Boolean).map((x, i) => <li key={i} className="text-gray-700">&#10003; {x}</li>)}</ul></div>;
  if (t === "faq") return <div className={wrap}><h2 className="mb-2 text-xl font-bold">{str(b.heading)}</h2>{rows(b.items).map((x, i) => <div key={i} className="mb-2 rounded-lg border p-3"><p className="font-semibold">{x.q}</p><p className="text-sm text-gray-500">{x.a}</p></div>)}</div>;
  return <div className="m-6 rounded-2xl bg-[var(--color-brand)] p-8 text-center text-white"><h2 className="text-2xl font-bold">{str(b.title)}</h2><p className="mt-1">{str(b.text)}</p><span className="mt-4 inline-block rounded-full bg-white px-5 py-2 font-bold text-[var(--color-brand)]">{str(b.label)}</span></div>;
}

const config: Config = {
  components: Object.fromEntries(
    BLOCK_TYPES.map((t) => [
      t,
      {
        label: BLOCKS[t].label,
        fields: Object.fromEntries(BLOCKS[t].fields.map((f) => [f.k, toPuck(f)])),
        defaultProps: structuredClone(BLOCKS[t].init),
        render: (p: Record<string, unknown>) => <Preview b={{ ...p, type: t }} />,
      },
    ]),
  ),
};

/** Free visual page builder (Puck, MIT). Reads and writes the same block JSON the site already renders. */
export function PuckEditor({ blocks, onDone, onClose }: { blocks: Block[]; onDone: (b: Block[]) => void; onClose: () => void }) {
  const data = useMemo<Data>(
    () => ({ root: { props: {} }, content: blocks.map(({ id, type, ...props }) => ({ type, props: { id, ...props } })) as Data["content"] }),
    [blocks],
  );
  return (
    <div className="fixed inset-0 z-[80] bg-white" data-lenis-prevent>
      <button onClick={onClose} className="absolute right-3 top-3 z-[90] flex h-9 w-9 items-center justify-center rounded-full bg-white shadow" aria-label="Close"><X size={18} /></button>
      <Puck
        config={config}
        data={data}
        iframe={{ enabled: false }}
        onPublish={(d) => onDone(d.content.map((c) => ({ ...(c.props as Record<string, unknown>), id: str((c.props as { id?: unknown }).id) || uid(), type: c.type as BlockType })) as Block[])}
        overrides={{ headerActions: ({ children }) => <>{children}</> }}
      />
    </div>
  );
}
