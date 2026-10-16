import { NextResponse } from "next/server";
import { createLead } from "@/lib/leads";
import { clip, notifyLead, tooMany } from "@/lib/mail";

export async function POST(req: Request) {
  if (tooMany(req)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });

  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const name = clip(b.name, 120);
  const email = clip(b.email, 190);
  const phone = clip(b.phone, 40);
  const role = clip(b.role, 120) || "Open application";
  const exp = clip(b.exp, 80);
  const link = clip(b.link, 300);
  const msg = clip(b.msg, 3000);
  if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please fill name, a valid email and phone." }, { status: 400 });
  }
  const message = `Role: ${role}\nExperience: ${exp || "-"}\nPortfolio / LinkedIn: ${link || "-"}\n\n${msg}`;
  try {
    await createLead({ name, email, phone, subject: `Application: ${role}`, message, source: "/career" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Could not save your application. Please try again." }, { status: 500 });
  }
  await notifyLead(`Job application: ${role} - ${name}`, `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`, email);
  return NextResponse.json({ ok: true });
}
