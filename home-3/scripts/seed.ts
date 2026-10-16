import bcrypt from "bcryptjs";
import { pool } from "../src/lib/db";
import { uid, type Block } from "../src/lib/blocks";
import { innerPages, type InnerPage } from "../src/data/pages";
import { blogPosts } from "../src/data/blog";
import { DEFAULTS } from "../src/lib/defaults";
import type { RowDataPacket } from "mysql2/promise";

const CTA = { type: "cta", title: "Not sure where to start?", text: "Get a free audit of your current visibility, funnel and competitors. No obligation.", label: "Request free audit", href: "/contact-us" };

function pageBlocks(p: InnerPage): Block[] {
  const b: Block[] = [{ id: uid(), type: "hero", eyebrow: p.eyebrow, title: p.title, tagline: p.tagline, image: "" }];
  b.push({ id: uid(), type: "text", heading: p.kind === "legal" ? "" : "Overview", body: p.intro });
  if (p.children) b.push({ id: uid(), type: "features", heading: "Explore", intro: "", items: p.children.map((c) => ({ title: c.title, body: c.body, href: c.href })) });
  if (p.points) b.push({ id: uid(), type: "features", heading: "How we help", intro: "", items: p.points.map((x) => ({ ...x, href: "" })) });
  if (p.deliverables) b.push({ id: uid(), type: "checklist", heading: "What is included", intro: "Scope is agreed in writing before work starts.", items: p.deliverables });
  for (const s of p.sections ?? []) b.push({ id: uid(), type: "text", heading: s.heading, body: s.body });
  if (p.faqs) b.push({ id: uid(), type: "faq", heading: "Common questions", items: p.faqs.map((f) => ({ q: f.q, a: f.a })) });
  if (p.kind !== "legal") b.push({ id: uid(), ...CTA } as Block);
  return b;
}

async function addCol(table: string, col: string, def: string) {
  const [r] = await pool.query<RowDataPacket[]>("SELECT 1 FROM information_schema.columns WHERE table_schema=DATABASE() AND table_name=? AND column_name=?", [table, col]);
  if (!r.length) await pool.query(`ALTER TABLE ${table} ADD COLUMN ${col} ${def}`);
}

async function main() {
  await pool.query(`CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(190) NOT NULL UNIQUE,
    password_hash VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) CHARACTER SET utf8mb4`);
  await pool.query(`CREATE TABLE IF NOT EXISTS entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('page','service','blog') NOT NULL,
    slug VARCHAR(160) NOT NULL,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT NULL,
    image VARCHAR(600) NULL,
    author VARCHAR(120) NULL,
    tag VARCHAR(120) NULL,
    status ENUM('draft','published') NOT NULL DEFAULT 'draft',
    seo_title VARCHAR(255) NULL,
    seo_description VARCHAR(400) NULL,
    blocks JSON NOT NULL,
    read_time VARCHAR(30) NULL,
    published_at DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_type_slug (type, slug),
    KEY idx_list (type, status, published_at)
  ) CHARACTER SET utf8mb4`);

  await addCol("entries", "image_alt", "VARCHAR(255) NULL");
  await addCol("entries", "noindex", "TINYINT(1) NOT NULL DEFAULT 0");
  await addCol("entries", "canonical", "VARCHAR(500) NULL");
  await pool.query(`CREATE TABLE IF NOT EXISTS settings (
    k VARCHAR(60) NOT NULL PRIMARY KEY,
    v JSON NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) CHARACTER SET utf8mb4`);
  await pool.query(`CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(190) NOT NULL,
    phone VARCHAR(40) NOT NULL,
    subject VARCHAR(190) NULL,
    message TEXT NOT NULL,
    source VARCHAR(190) NULL,
    status ENUM('new','read','done') NOT NULL DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    KEY idx_status (status, created_at)
  ) CHARACTER SET utf8mb4`);
  for (const [k, v] of Object.entries(DEFAULTS)) {
    await pool.query("INSERT IGNORE INTO settings (k,v) VALUES (?,?)", [k, JSON.stringify(v)]);
  }

  const email = (process.env.ADMIN_EMAIL || "").toLowerCase();
  if (email && process.env.ADMIN_PASSWORD) {
    await pool.query(
      "INSERT INTO admins (email,password_hash) VALUES (?,?) ON DUPLICATE KEY UPDATE password_hash=VALUES(password_hash)",
      [email, await bcrypt.hash(process.env.ADMIN_PASSWORD, 12)],
    );
    console.log("Admin ready:", email);
  }

  // Import existing static content. Existing rows are never overwritten.
  for (const p of innerPages) {
    await pool.query(
      "INSERT IGNORE INTO entries (type,slug,title,excerpt,status,blocks,published_at) VALUES (?,?,?,?, 'published', ?, NOW())",
      [p.kind === "service" ? "service" : "page", p.slug, p.title, p.tagline, JSON.stringify(pageBlocks(p))],
    );
  }
  for (const p of blogPosts) {
    const blocks: Block[] = [
      ...p.body.map((x) => ({ id: uid(), type: "text", heading: x.heading ?? "", body: x.text }) as Block),
      { id: uid(), ...CTA, title: "Want results like this for your business?", text: "Get a free audit and a clear plan within 48 hours.", label: "Free website audit", href: "/free-website-audit" } as Block,
    ];
    await pool.query(
      "INSERT IGNORE INTO entries (type,slug,title,excerpt,image,author,tag,status,blocks,read_time,published_at) VALUES ('blog',?,?,?,?,?,?, 'published', ?,?,?)",
      [p.slug, p.title, p.excerpt, p.image, p.author, p.tag, JSON.stringify(blocks), p.readTime, new Date(p.date.full)],
    );
  }
  console.log("Settings seeded.");
  console.log(`Imported ${innerPages.length} pages/services and ${blogPosts.length} posts.`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
