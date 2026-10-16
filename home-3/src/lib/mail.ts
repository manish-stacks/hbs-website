import nodemailer from "nodemailer";
import { getCompany, getSetting } from "./site";

const hits = new Map<string, number[]>();

/** Simple in-memory limit: 5 submissions per IP per 10 minutes. */
export function tooMany(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  hits.set(ip, [...recent, now]);
  return recent.length >= 5;
}

export const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");

/** Emails the lead to the notification address (only when SMTP_HOST is configured). */
export async function notifyLead(subject: string, text: string, replyTo: string) {
  if (!process.env.SMTP_HOST) return;
  try {
    const [company, g] = await Promise.all([getCompany(), getSetting("general")]);
    await nodemailer
      .createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
      })
      .sendMail({ from: process.env.SMTP_FROM || process.env.SMTP_USER, to: g.notifyEmail || company.email, replyTo, subject, text });
  } catch (e) {
    console.error("mail", e);
  }
}
