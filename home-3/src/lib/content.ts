import type { ResultSetHeader } from "mysql2/promise";
import { pool, query } from "./db";
import type { Block } from "./blocks";

export type EntryType = "page" | "service" | "blog";
type Row = {
  id: number; type: EntryType; slug: string; title: string; excerpt: string | null; image: string | null;
  author: string | null; tag: string | null; status: "draft" | "published"; seo_title: string | null;
  seo_description: string | null; image_alt: string | null; noindex: number; canonical: string | null; blocks: unknown; read_time: string | null; published_at: Date | null; updated_at: Date;
};
export type Entry = {
  id: number; type: EntryType; slug: string; title: string; excerpt: string; image: string; author: string; tag: string;
  status: "draft" | "published"; seoTitle: string; seoDescription: string; imageAlt: string; noindex: boolean; canonical: string; blocks: Block[]; readTime: string;
  publishedAt: string | null; updatedAt: string;
};

const parse = (v: unknown): Block[] => {
  try {
    const x = typeof v === "string" ? JSON.parse(v) : v;
    return Array.isArray(x) ? (x as Block[]) : [];
  } catch {
    return [];
  }
};

const toEntry = (r: Row): Entry => ({
  id: r.id, type: r.type, slug: r.slug, title: r.title, excerpt: r.excerpt ?? "", image: r.image ?? "",
  author: r.author ?? "", tag: r.tag ?? "", status: r.status, seoTitle: r.seo_title ?? "",
  seoDescription: r.seo_description ?? "", imageAlt: r.image_alt ?? "", noindex: !!r.noindex, canonical: r.canonical ?? "", blocks: parse(r.blocks), readTime: r.read_time ?? "",
  publishedAt: r.published_at ? new Date(r.published_at).toISOString() : null, updatedAt: new Date(r.updated_at).toISOString(),
});

export async function getEntry(types: EntryType[], slug: string) {
  try {
    const r = await query<Row>("SELECT * FROM entries WHERE slug=? AND type IN (?) AND status='published' LIMIT 1", [slug, types]);
    return r[0] ? toEntry(r[0]) : null;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getEntryById(id: number) {
  const r = await query<Row>("SELECT * FROM entries WHERE id=? LIMIT 1", [id]);
  return r[0] ? toEntry(r[0]) : null;
}

export async function listEntries(type: EntryType) {
  const r = await query<Row>(
    "SELECT * FROM entries WHERE type=? ORDER BY updated_at DESC",
    [type],
  );
  return r.map(toEntry);
}

export async function recentEntries(limit = 6) {
  const r = await query<Row>(
    "SELECT * FROM entries ORDER BY updated_at DESC LIMIT ?",
    [limit],
  );
  return r.map(toEntry);
}

export async function counts() {
  const r = await query<{ type: EntryType; status: string; c: number }>("SELECT type,status,COUNT(*) AS c FROM entries GROUP BY type,status");
  const out: Record<EntryType, { published: number; draft: number }> = {
    page: { published: 0, draft: 0 }, service: { published: 0, draft: 0 }, blog: { published: 0, draft: 0 },
  };
  for (const x of r) out[x.type][x.status as "published" | "draft"] = Number(x.c);
  return out;
}

export async function listSlugs() {
  try {
    return await query<{ type: EntryType; slug: string }>("SELECT type,slug FROM entries WHERE status='published'");
  } catch {
    return [];
  }
}

/* ---------- blog helpers ---------- */
export type Post = {
  slug: string; title: string; excerpt: string; author: string; tag: string; image: string; imageAlt: string; readTime: string;
  date: { d: string; m: string; full: string };
};

export const toPost = (e: Entry): Post => {
  const d = new Date(e.publishedAt ?? e.updatedAt);
  return {
    slug: e.slug, title: e.title, excerpt: e.excerpt, author: e.author || "HBS Editorial", tag: e.tag || "Article",
    image: e.image || "/images/art/post-1.svg", imageAlt: e.imageAlt || e.title, readTime: e.readTime || "3 min read",
    date: {
      d: String(d.getDate()).padStart(2, "0"),
      m: d.toLocaleString("en-GB", { month: "short" }),
      full: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
    },
  };
};

export async function listBlog(limit = 12, exclude = "") {
  try {
    const r = await query<Row>(
      "SELECT * FROM entries WHERE type='blog' AND status='published' AND slug<>? ORDER BY COALESCE(published_at,created_at) DESC LIMIT ?",
      [exclude, limit],
    );
    return r.map((x) => toPost(toEntry(x)));
  } catch (e) {
    console.error(e);
    return [];
  }
}

/* ---------- save / delete ---------- */
export const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 150);
const RESERVED = new Set(["admin", "api", "blog", "about-us", "contact-us", "career", "portfolio", "products", "free-website-audit", "sitemap.xml", "robots.txt"]);
const s = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function words(v: unknown): number {
  if (typeof v === "string") return /^(\/|https?:)/.test(v) ? 0 : v.split(/\s+/).filter(Boolean).length;
  if (Array.isArray(v)) return v.reduce<number>((n, x) => n + words(x), 0);
  if (v && typeof v === "object") return Object.entries(v).reduce((n, [k, x]) => n + (k === "id" || k === "type" ? 0 : words(x)), 0);
  return 0;
}

type Result = { ok: true; id: number } | { ok: false; error: string; status: number };
const fail = (error: string, status = 400): Result => ({ ok: false, error, status });

export async function saveEntry(id: number | null, b: Record<string, unknown>): Promise<Result> {
  const type = b.type as EntryType;
  if (!["page", "service", "blog"].includes(type)) return fail("Invalid type");
  const title = s(b.title);
  if (!title) return fail("Title is required");
  const slug = slugify(s(b.slug) || title);
  if (!slug) return fail("Slug is required");
  if (type !== "blog" && RESERVED.has(slug)) return fail("This slug is reserved");

  const group: EntryType[] = type === "blog" ? ["blog"] : ["page", "service"];
  const dup = await query<{ id: number }>("SELECT id FROM entries WHERE slug=? AND type IN (?) AND id<>? LIMIT 1", [slug, group, id ?? 0]);
  if (dup.length) return fail("This slug is already in use", 409);

  const blocks = Array.isArray(b.blocks) ? b.blocks : [];
  const readTime = `${Math.max(1, Math.round(words(blocks) / 200))} min read`;
  const status = b.status === "published" ? "published" : "draft";
  const v = [type, slug, title, s(b.excerpt), s(b.image), s(b.author), s(b.tag), status, s(b.seoTitle), s(b.seoDescription), JSON.stringify(blocks), readTime, s(b.imageAlt), b.noindex ? 1 : 0, s(b.canonical)];

  if (id === null) {
    const [r] = await pool.query<ResultSetHeader>(
      "INSERT INTO entries (type,slug,title,excerpt,image,author,tag,status,seo_title,seo_description,blocks,read_time,image_alt,noindex,canonical,published_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,IF(?='published',NOW(),NULL))",
      [...v, status],
    );
    return { ok: true, id: r.insertId };
  }
  await pool.query(
    "UPDATE entries SET type=?,slug=?,title=?,excerpt=?,image=?,author=?,tag=?,status=?,seo_title=?,seo_description=?,blocks=?,read_time=?,image_alt=?,noindex=?,canonical=?,published_at=IF(?='published',COALESCE(published_at,NOW()),published_at) WHERE id=?",
    [...v, status, id],
  );
  return { ok: true, id };
}

export async function deleteEntry(id: number) {
  await pool.query("DELETE FROM entries WHERE id=?", [id]);
}

export async function getEntryBySlug(types: EntryType[], slug: string) {
  const r = await query<Row>("SELECT * FROM entries WHERE slug=? AND type IN (?) LIMIT 1", [slug, types]);
  return r[0] ? toEntry(r[0]) : null;
}

export type ListOpts = { types?: EntryType[]; q?: string; status?: string; page?: number; per?: number };
export async function searchEntries({ types, q = "", status = "", page = 1, per = 10 }: ListOpts) {
  const where: string[] = [];
  const p: unknown[] = [];
  if (types?.length) { where.push("type IN (?)"); p.push(types); }
  if (status === "published" || status === "draft") { where.push("status=?"); p.push(status); }
  if (q.trim()) { where.push("(title LIKE ? OR slug LIKE ? OR excerpt LIKE ?)"); const l = `%${q.trim()}%`; p.push(l, l, l); }
  const w = where.length ? `WHERE ${where.join(" AND ")}` : "";
  const [cnt] = await query<{ c: number }>(`SELECT COUNT(*) AS c FROM entries ${w}`, p);
  const rows = await query<Row>(`SELECT * FROM entries ${w} ORDER BY updated_at DESC LIMIT ? OFFSET ?`, [...p, per, (Math.max(1, page) - 1) * per]);
  return { rows: rows.map(toEntry), total: Number(cnt?.c ?? 0) };
}
