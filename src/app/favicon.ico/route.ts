import { NextResponse } from "next/server";
import { getSeo } from "@/lib/site";

export const dynamic = "force-dynamic";

// Browsers request /favicon.ico by default; send them to the favicon set in Admin > General.
export async function GET(req: Request) {
  const s = await getSeo();
  return NextResponse.redirect(new URL(s.favicon || "/icon.svg", req.url), 307);
}
