import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { GROUP_KEYS, type GroupKey } from "@/lib/settings";

export async function PUT(req: Request, { params }: { params: Promise<{ group: string }> }) {
  const { group } = await params;
  if (!GROUP_KEYS.includes(group as GroupKey)) return NextResponse.json({ error: "Unknown group" }, { status: 404 });
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  await pool.query("INSERT INTO settings (k,v) VALUES (?,?) ON DUPLICATE KEY UPDATE v=VALUES(v)", [group, JSON.stringify(body)]);
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
