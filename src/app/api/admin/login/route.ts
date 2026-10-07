import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { SESSION_COOKIE, signSession } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = (await req.json().catch(() => ({}))) as { email?: string; password?: string };
  if (!email || !password) return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  try {
    const [admin] = await query<{ email: string; password_hash: string }>("SELECT email,password_hash FROM admins WHERE email=? LIMIT 1", [email.trim().toLowerCase()]);
    if (!admin || !(await bcrypt.compare(password, admin.password_hash))) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }
    const res = NextResponse.json({ ok: true });
    res.cookies.set(SESSION_COOKIE, await signSession(admin.email), {
      httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 7 * 86400,
    });
    return res;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
