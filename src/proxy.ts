import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/auth";

export async function proxy(req: NextRequest) {
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || "";
  const proto = req.headers.get("x-forwarded-proto") || (req.url.startsWith("https") ? "https" : "http");

  // Skip host/protocol redirects during local development
  const isLocal =
    host.includes("localhost") ||
    host.includes("127.0.0.1") ||
    host.startsWith("192.168.") ||
    host.startsWith("10.");

  if (!isLocal) {
    const isWww = host.toLowerCase().startsWith("www.");

    // 1. Enforce Non-WWW (e.g. www.domain.com -> domain.com)
    if (isWww) {
      const cleanHost = host.replace(/^www\./i, "");
      const destination = `https://${cleanHost}${req.nextUrl.pathname}${req.nextUrl.search}`;
      return NextResponse.redirect(destination, { status: 301 });
    }

    // 2. Enforce Non-Trailing Slash for SEO consistency (except root '/')
    if (req.nextUrl.pathname.length > 1 && req.nextUrl.pathname.endsWith("/")) {
      const cleanPath = req.nextUrl.pathname.replace(/\/+$/, "");
      const destination = `https://${host}${cleanPath}${req.nextUrl.search}`;
      return NextResponse.redirect(destination, { status: 301 });
    }
  }

  // 3. Admin Authentication Guard (only runs on admin routes)
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const open = pathname === "/admin/login" || pathname === "/api/admin/login";
    const ok = await verifySession(req.cookies.get(SESSION_COOKIE)?.value);

    if (pathname.startsWith("/api/admin")) {
      return !ok && !open
        ? NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        : NextResponse.next();
    }
    if (!ok && !open) return NextResponse.redirect(new URL("/admin/login", req.url));
    if (ok && pathname === "/admin/login") return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
