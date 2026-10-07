import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { deleteEntry, saveEntry } from "@/lib/content";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, { params }: Ctx) {
  const r = await saveEntry(Number((await params).id), await req.json().catch(() => ({})));
  if (!r.ok) return NextResponse.json({ error: r.error }, { status: r.status });
  revalidatePath("/", "layout");
  return NextResponse.json({ id: r.id });
}

export async function DELETE(_: Request, { params }: Ctx) {
  await deleteEntry(Number((await params).id));
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
