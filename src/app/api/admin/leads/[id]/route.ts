import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  const { status } = (await req.json().catch(() => ({}))) as { status?: string };
  if (!["new", "read", "done"].includes(status ?? "")) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  await pool.query("UPDATE leads SET status=? WHERE id=?", [status, Number((await params).id)]);
  return NextResponse.json({ ok: true });
}

export async function DELETE(_: Request, { params }: Ctx) {
  await pool.query("DELETE FROM leads WHERE id=?", [Number((await params).id)]);
  return NextResponse.json({ ok: true });
}
