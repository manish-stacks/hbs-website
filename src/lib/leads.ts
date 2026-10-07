import { pool, query } from "./db";

export type Lead = { id: number; name: string; email: string; phone: string; subject: string; message: string; source: string; status: "new" | "read" | "done"; created_at: string };

export async function createLead(l: Omit<Lead, "id" | "status" | "created_at">) {
  await pool.query("INSERT INTO leads (name,email,phone,subject,message,source) VALUES (?,?,?,?,?,?)", [l.name, l.email, l.phone, l.subject, l.message, l.source]);
}

export async function searchLeads({ q = "", status = "", type = "", page = 1, per = 10 }: { q?: string; status?: string; type?: string; page?: number; per?: number }) {
  const where: string[] = [];
  const p: unknown[] = [];
  if (["new", "read", "done"].includes(status)) { where.push("status=?"); p.push(status); }
  if (type === "career") where.push("source = '/career'");
  if (type === "contact") where.push("(source IS NULL OR source <> '/career')");
  if (q.trim()) { where.push("(name LIKE ? OR email LIKE ? OR phone LIKE ? OR subject LIKE ? OR message LIKE ?)"); const l = `%${q.trim()}%`; p.push(l, l, l, l, l); }
  const w = where.length ? `WHERE ${where.join(" AND ")}` : "";
  const [cnt] = await query<{ c: number }>(`SELECT COUNT(*) AS c FROM leads ${w}`, p);
  const rows = await query<Lead>(`SELECT * FROM leads ${w} ORDER BY id DESC LIMIT ? OFFSET ?`, [...p, per, (Math.max(1, page) - 1) * per]);
  return { rows, total: Number(cnt?.c ?? 0) };
}

export async function newLeadCount() {
  try {
    const [r] = await query<{ c: number }>("SELECT COUNT(*) AS c FROM leads WHERE status='new'");
    return Number(r?.c ?? 0);
  } catch {
    return 0;
  }
}
