import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { saveEntry } from "@/lib/content";

export async function POST(req: Request) {
  const r = await saveEntry(null, await req.json().catch(() => ({})));
  if (!r.ok) return NextResponse.json({ error: r.error }, { status: r.status });
  revalidatePath("/", "layout");
  return NextResponse.json({ id: r.id });
}
