import { NextResponse } from "next/server";
import { createLead } from "@/lib/leads";
import { clip, notifyLead, tooMany } from "@/lib/mail";

export async function POST(req: Request) {
  if (tooMany(req)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });

  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const lead = { name: clip(b.name, 120), email: clip(b.email, 190), phone: clip(b.phone, 40), subject: clip(b.subject, 190), message: clip(b.message, 4000), source: clip(b.source, 190) };
  if (!lead.name || !lead.phone || !lead.message || !/^\S+@\S+\.\S+$/.test(lead.email)) {
    return NextResponse.json({ error: "Please fill name, a valid email, phone and message." }, { status: 400 });
  }
  try {
    await createLead(lead);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Could not save your message. Please try again." }, { status: 500 });
  }
  await notifyLead(`New enquiry: ${lead.subject || lead.name}`, `Name: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nPage: ${lead.source}\n\n${lead.message}`, lead.email);
  return NextResponse.json({ ok: true });
}
