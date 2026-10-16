"use client";

import { useEffect, useRef, useState, type ClipboardEvent } from "react";
import {
  AlignCenter, AlignLeft, AlignRight, Bold, Code, Code2, Eraser, Heading2, Heading3, Image as ImageIcon, Italic, Link2,
  List, ListOrdered, Minus, Pilcrow, Quote, Redo2, Strikethrough, Table, Underline, Undo2, Unlink, type LucideIcon,
} from "lucide-react";
import { RICH_CLASS, cleanHtml, esc, isHtml, mdToHtml } from "@/lib/richtext";

const Sep = () => <span className="mx-1 h-5 w-px bg-[var(--color-border)]" />;

/** Full rich text editor (no extra packages): formatting, headings, lists, links, images, tables, code, HTML source. */
export function RichEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const range = useRef<Range | null>(null);
  const [src, setSrc] = useState(false);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [words, setWords] = useState(0);

  const count = () => setWords((ref.current?.innerText.trim().match(/\S+/g) ?? []).length);
  const sync = () => {
    if (!ref.current) return;
    onChange(cleanHtml(ref.current.innerHTML));
    count();
  };

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = cleanHtml(isHtml(value) ? value : mdToHtml(value));
    count();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exec = (cmd: string, val?: string) => {
    ref.current?.focus();
    document.execCommand(cmd, false, val);
    sync();
  };
  const block = (tag: string) => exec("formatBlock", `<${tag}>`);

  const saveRange = () => {
    const s = window.getSelection();
    range.current = s && s.rangeCount ? s.getRangeAt(0).cloneRange() : null;
  };
  const restoreRange = () => {
    ref.current?.focus();
    const s = window.getSelection();
    if (range.current && s) {
      s.removeAllRanges();
      s.addRange(range.current);
    }
  };

  const link = () => {
    saveRange();
    const collapsed = range.current?.collapsed ?? true;
    const url = window.prompt("Link URL (https://..., /page, mailto:, tel:)");
    if (!url) return;
    if (!/^(https?:\/\/|\/|mailto:|tel:|#)/i.test(url)) return window.alert("Please enter a valid link.");
    restoreRange();
    if (collapsed) exec("insertHTML", `<a href="${esc(url)}">${esc(url)}</a>`);
    else exec("createLink", url);
  };

  const imageByUrl = () => {
    saveRange();
    const url = window.prompt("Image URL");
    if (!url || !/^(https?:\/\/|\/)/i.test(url)) return;
    restoreRange();
    exec("insertImage", url);
  };

  async function upload(f: File) {
    saveRange();
    setBusy(true);
    const fd = new FormData();
    fd.append("file", f);
    const r = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const j = await r.json().catch(() => ({}));
    setBusy(false);
    if (!r.ok) return window.alert(j.error || "Upload failed");
    restoreRange();
    exec("insertImage", j.url);
  }

  const table = () =>
    exec(
      "insertHTML",
      "<table><tbody><tr><th>Heading</th><th>Heading</th><th>Heading</th></tr>" +
        "<tr><td>Text</td><td>Text</td><td>Text</td></tr><tr><td>Text</td><td>Text</td><td>Text</td></tr></tbody></table><p><br></p>",
    );

  const paste = (e: ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const h = e.clipboardData.getData("text/html");
    if (h) exec("insertHTML", cleanHtml(h.replace(/^[\s\S]*<body[^>]*>/i, "").replace(/<\/body>[\s\S]*$/i, "")));
    else exec("insertText", e.clipboardData.getData("text/plain"));
  };

  const toggleSource = () => {
    if (!ref.current) return;
    if (!src) {
      setCode(cleanHtml(ref.current.innerHTML));
      setSrc(true);
    } else {
      ref.current.innerHTML = cleanHtml(code);
      sync();
      setSrc(false);
    }
  };

  const B = ({ t, I, run, on }: { t: string; I: LucideIcon; run: () => void; on?: boolean }) => (
    <button
      type="button"
      title={t}
      aria-label={t}
      disabled={src && !on}
      onMouseDown={(e) => e.preventDefault()}
      onClick={run}
      className={`flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-ink)] transition hover:bg-white hover:text-[var(--color-brand)] disabled:opacity-30 ${on ? "bg-white text-[var(--color-brand)]" : ""}`}
    >
      <I size={16} />
    </button>
  );

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition focus-within:border-[var(--color-brand)] focus-within:ring-4 focus-within:ring-[var(--color-brand)]/10">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-[var(--color-border)] bg-[var(--color-surface)] p-1.5">
        <B t="Undo" I={Undo2} run={() => exec("undo")} />
        <B t="Redo" I={Redo2} run={() => exec("redo")} />
        <Sep />
        <B t="Paragraph" I={Pilcrow} run={() => block("p")} />
        <B t="Heading 2" I={Heading2} run={() => block("h2")} />
        <B t="Heading 3" I={Heading3} run={() => block("h3")} />
        <Sep />
        <B t="Bold" I={Bold} run={() => exec("bold")} />
        <B t="Italic" I={Italic} run={() => exec("italic")} />
        <B t="Underline" I={Underline} run={() => exec("underline")} />
        <B t="Strikethrough" I={Strikethrough} run={() => exec("strikeThrough")} />
        <Sep />
        <B t="Bullet list" I={List} run={() => exec("insertUnorderedList")} />
        <B t="Numbered list" I={ListOrdered} run={() => exec("insertOrderedList")} />
        <B t="Quote" I={Quote} run={() => block("blockquote")} />
        <Sep />
        <B t="Align left" I={AlignLeft} run={() => exec("justifyLeft")} />
        <B t="Align center" I={AlignCenter} run={() => exec("justifyCenter")} />
        <B t="Align right" I={AlignRight} run={() => exec("justifyRight")} />
        <Sep />
        <B t="Insert link" I={Link2} run={link} />
        <B t="Remove link" I={Unlink} run={() => exec("unlink")} />
        <label title="Upload image" className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-white hover:text-[var(--color-brand)]">
          <ImageIcon size={16} />
          <input type="file" accept="image/*" hidden disabled={src} onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); e.target.value = ""; }} />
        </label>
        <button type="button" onClick={imageByUrl} disabled={src} className="h-8 rounded-lg px-2 text-[11px] font-bold hover:bg-white hover:text-[var(--color-brand)] disabled:opacity-30">URL</button>
        <B t="Table" I={Table} run={table} />
        <B t="Divider" I={Minus} run={() => exec("insertHorizontalRule")} />
        <B t="Code block" I={Code} run={() => block("pre")} />
        <B t="Clear formatting" I={Eraser} run={() => { exec("removeFormat"); block("p"); }} />
        <span className="ml-auto" />
        <B t={src ? "Back to editor" : "Edit HTML"} I={Code2} run={toggleSource} on={src} />
      </div>

      <div
        ref={ref}
        contentEditable={!src}
        suppressContentEditableWarning
        onInput={sync}
        onPaste={paste}
        onBlur={saveRange}
        data-lenis-prevent
        className={`${RICH_CLASS} max-h-[520px] min-h-[260px] overflow-y-auto p-4 text-[15px] outline-none ${src ? "hidden" : ""}`}
      />
      {src ? (
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          data-lenis-prevent
          className="block min-h-[260px] w-full resize-y bg-[#0a0e17] p-4 font-mono text-[13px] leading-relaxed text-emerald-300 outline-none"
        />
      ) : null}

      <div className="flex items-center justify-between border-t border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-[11px] text-[var(--color-text-muted)]">
        <span>{busy ? "Uploading image..." : "Tip: use Heading 2 and 3 to structure the page for SEO."}</span>
        <span>{words} words</span>
      </div>
    </div>
  );
}
