/** Helpers for the admin rich text editor (HTML stored in the block JSON). */

export const RICH_CLASS =
  "[&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-[var(--fs-2xl)] [&_h2]:font-bold [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-[var(--fs-xl)] [&_h3]:font-bold [&_h4]:mt-6 [&_h4]:font-bold " +
  "[&_p]:mt-4 [&_p]:leading-[1.85] [&_p]:text-[var(--color-text-muted)] [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 " +
  "[&_li]:mt-1.5 [&_li]:text-[var(--color-text-muted)] [&_a]:font-semibold [&_a]:text-[var(--color-brand)] [&_a]:underline " +
  "[&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--color-brand)] [&_blockquote]:bg-[var(--color-surface)] [&_blockquote]:px-5 [&_blockquote]:py-3 [&_blockquote]:italic " +
  "[&_img]:mt-6 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-2xl [&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-[var(--color-border)] [&_td]:p-2.5 " +
  "[&_th]:border [&_th]:border-[var(--color-border)] [&_th]:bg-[var(--color-surface)] [&_th]:p-2.5 [&_th]:text-left [&_pre]:mt-4 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-[#0a0e17] [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-white " +
  "[&_hr]:my-8 [&_hr]:border-[var(--color-border)] [&>*:first-child]:!mt-0";

export const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const isHtml = (s: string) => /<\/?(p|h[1-6]|ul|ol|li|blockquote|a|img|table|div|br|strong|em|b|i|u|s|span|pre|hr)\b/i.test(s);

/** Allow-list style clean-up: removes scripts, event handlers, inline styles (except text-align) and unsafe URLs. */
export function cleanHtml(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|iframe|object|embed|svg|math|textarea|select|button)\b[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<\/?(script|style|iframe|object|embed|form|input|button|textarea|select|link|meta|svg|math|font|o:p)\b[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s(class|id|contenteditable|draggable|spellcheck|data-[\w-]+)\s*=\s*("[^"]*"|'[^']*')/gi, "")
    .replace(/\sstyle\s*=\s*(?:"([^"]*)"|'([^']*)')/gi, (_m, a?: string, b?: string) => {
      const m = (a || b || "").match(/text-align\s*:\s*(left|center|right|justify)/i);
      return m ? ` style="text-align:${m[1]!.toLowerCase()}"` : "";
    })
    .replace(/\b(href|src)\s*=\s*(["'])\s*(javascript|vbscript|data):[^"']*\2/gi, (_m, k: string) => `${k}="#"`)
    .trim();
}

/** Converts the old light markup (blank line = paragraph, "## " = heading, "- " = list, **bold**) to HTML. */
export function mdToHtml(text: string): string {
  const inline = (s: string) =>
    esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
  return text
    .split(/\n{2,}/)
    .map((chunk) => {
      const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
      if (!lines.length) return "";
      if (lines[0]!.startsWith("## ")) {
        const rest = lines.slice(1).join(" ");
        return `<h3>${inline(lines[0]!.slice(3))}</h3>${rest ? `<p>${inline(rest)}</p>` : ""}`;
      }
      if (lines.every((l) => /^[-*] /.test(l))) return `<ul>${lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join("")}</ul>`;
      return `<p>${lines.map(inline).join("<br>")}</p>`;
    })
    .join("");
}

type B = Record<string, unknown>;
const t = (v: unknown) => (typeof v === "string" ? v : "");
const rowsOf = (v: unknown): B[] => (Array.isArray(v) ? (v as B[]) : []);
const body = (v: unknown) => (isHtml(t(v)) ? t(v) : mdToHtml(t(v)));

/** Turns old layout blocks into plain article HTML (used when an old page is opened in the new editor). */
export function blocksToHtml(blocks: B[]): string {
  return blocks
    .map((b) => {
      const h = t(b.heading) || t(b.title) || t(b.text && b.type === "heading" ? b.text : "");
      const head = h ? `<h2>${esc(h)}</h2>` : "";
      const intro = t(b.intro) || t(b.sub) ? `<p>${esc(t(b.intro) || t(b.sub))}</p>` : "";
      switch (b.type) {
        case "article": return t(b.body);
        case "heading": return `<h2>${esc(t(b.text))}</h2>${intro}`;
        case "text": return head + body(b.body);
        case "split": return head + body(b.body) + (Array.isArray(b.points) && b.points.length ? `<ul>${(b.points as string[]).filter(Boolean).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : "");
        case "steps": return head + intro + `<ol>${rowsOf(b.items).map((i) => `<li><strong>${esc(t(i.title))}</strong> ${esc(t(i.body))}</li>`).join("")}</ol>`;
        case "features": return head + intro + `<ul>${rowsOf(b.items).map((i) => `<li><strong>${esc(t(i.title))}</strong> ${esc(t(i.body))}</li>`).join("")}</ul>`;
        case "stats": return `<ul>${rowsOf(b.items).map((i) => `<li><strong>${esc(t(i.value || i.n))}</strong> ${esc(t(i.label || i.title))}</li>`).join("")}</ul>`;
        case "checklist": return head + intro + `<ul>${(Array.isArray(b.items) ? (b.items as string[]) : []).filter(Boolean).map((i) => `<li>${esc(String(i))}</li>`).join("")}</ul>`;
        case "faq": return head + rowsOf(b.items).map((i) => `<h3>${esc(t(i.q))}</h3><p>${esc(t(i.a))}</p>`).join("");
        case "cta": return `<h2>${esc(t(b.title))}</h2><p>${esc(t(b.text))}</p>${t(b.label) ? `<p><a href="${esc(t(b.href) || "/contact-us")}">${esc(t(b.label))}</a></p>` : ""}`;
        default: return "";
      }
    })
    .join("");
}
