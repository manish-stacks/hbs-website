/**
 * Uploaded files are stored in the database as "/uploads/2026/123-file.jpg".
 * Set NEXT_PUBLIC_MEDIA_URL in .env to choose which domain they load from, e.g.
 *   NEXT_PUBLIC_MEDIA_URL=http://localhost:3000            (local)
 *   NEXT_PUBLIC_MEDIA_URL=https://hoverbusinessservices.com (live)
 * Leave it empty to keep the plain "/uploads/..." path.
 */
export const MEDIA_BASE = (process.env.NEXT_PUBLIC_MEDIA_URL || "").trim().replace(/\/+$/, "");

const UPLOAD = /^\/uploads\//;
// "/uploads/..." inside HTML or CSS: src="/uploads/..", url(/uploads/..), srcset="/uploads/.. 1x, /uploads/.."
const IN_TEXT = /(^|["'(=,\s])\/uploads\//g;

/** One image or video path → full URL. Anything else (http, data:, /images/...) is returned unchanged. */
export function mediaUrl(src: string | null | undefined): string {
  const s = (src ?? "").trim();
  if (!s || !MEDIA_BASE) return s;
  if (UPLOAD.test(s)) return MEDIA_BASE + s;
  return s;
}

/** Prefixes every uploaded file path found anywhere in a value (objects, arrays, HTML strings). */
export function withMedia<T>(value: T): T {
  if (!MEDIA_BASE) return value;
  return walk(value) as T;
}

function walk(v: unknown): unknown {
  if (typeof v === "string") {
    if (UPLOAD.test(v)) return MEDIA_BASE + v;
    return v.includes("/uploads/") ? v.replace(IN_TEXT, `$1${MEDIA_BASE}/uploads/`) : v;
  }
  if (Array.isArray(v)) return v.map(walk);
  if (v && typeof v === "object" && Object.getPrototypeOf(v) === Object.prototype) {
    const out: Record<string, unknown> = {};
    for (const [k, x] of Object.entries(v)) out[k] = walk(x);
    return out;
  }
  return v;
}
