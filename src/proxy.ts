import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/auth";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const open = pathname === "/admin/login" || pathname === "/api/admin/login";
  const ok = await verifySession(req.cookies.get(SESSION_COOKIE)?.value);

  if (pathname.startsWith("/api/")) {
    return !ok && !open ? NextResponse.json({ error: "Unauthorized" }, { status: 401 }) : NextResponse.next();
  }
  if (!ok && !open) return NextResponse.redirect(new URL("/admin/login", req.url));
  if (ok && pathname === "/admin/login") return NextResponse.redirect(new URL("/admin", req.url));
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
