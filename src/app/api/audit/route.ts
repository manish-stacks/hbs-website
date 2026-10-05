import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

export const runtime = "nodejs";
export const maxDuration = 20;

type Check = { id: string; group: string; label: string; status: "pass" | "warn" | "fail"; detail: string; weight: number };

const privateIp = (ip: string) =>
  /^(10\.|127\.|0\.|169\.254\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|::1|fc|fd|fe80)/i.test(ip);

async function safeUrl(raw: string): Promise<URL> {
  const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
  if (!["http:", "https:"].includes(u.protocol)) throw new Error("Invalid URL");
  const host = u.hostname;
  if (host === "localhost" || (!host.includes(".") && !isIP(host))) throw new Error("Invalid host");
  const ips = isIP(host) ? [host] : (await lookup(host, { all: true })).map((r) => r.address);
  if (!ips.length || ips.some(privateIp)) throw new Error("This address cannot be audited");
  return u;
}

async function get(url: URL, ms = 9000) {
  let cur = url;
  for (let i = 0; i < 4; i++) {
    const res = await fetch(cur, {
      redirect: "manual",
      signal: AbortSignal.timeout(ms),
      headers: { "user-agent": "Mozilla/5.0 (compatible; HBSAuditBot/1.0; +https://hoverbusinessservices.com)" },
    });
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      cur = await safeUrl(new URL(res.headers.get("location")!, cur).toString());
      continue;
    }
    return { res, final: cur };
  }
  throw new Error("Too many redirects");
}

const tag = (html: string, re: RegExp) => html.match(re)?.[1]?.trim() ?? "";
const meta = (html: string, key: string) =>
  tag(html, new RegExp(`<meta[^>]+(?:name|property)=["']${key}["'][^>]*content=["']([^"']*)["']`, "i")) ||
  tag(html, new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*(?:name|property)=["']${key}["']`, "i"));

export async function POST(req: Request) {
  try {
    const { url } = (await req.json()) as { url?: string };
    if (!url || url.length > 300) return Response.json({ error: "Please enter a valid website URL." }, { status: 400 });

    const target = await safeUrl(url.trim());
    const t0 = Date.now();
    const { res, final } = await get(target);
    const ms = Date.now() - t0;
    if (!res.ok) return Response.json({ error: `The site responded with status ${res.status}.` }, { status: 422 });

    const html = (await res.text()).slice(0, 1_500_000);
    const kb = Math.round(Buffer.byteLength(html) / 1024);
    const origin = final.origin;

    const [robots, sitemap] = await Promise.all(
      ["/robots.txt", "/sitemap.xml"].map((p) =>
        get(new URL(p, origin), 5000).then(({ res }) => res.ok).catch(() => false),
      ),
    );

    const title = tag(html, /<title[^>]*>([\s\S]*?)<\/title>/i).replace(/\s+/g, " ");
    const desc = meta(html, "description");
    const h1s = html.match(/<h1[\s>]/gi)?.length ?? 0;
    const imgs = html.match(/<img\b[^>]*>/gi) ?? [];
    const noAlt = imgs.filter((i) => !/\balt=["'][^"']+["']/i.test(i)).length;
    const links = html.match(/<a\b[^>]*href=/gi)?.length ?? 0;
    const text = html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    const words = text.split(" ").length;

    const c = (id: string, group: string, label: string, ok: boolean | "warn", detail: string, weight = 1): Check => ({
      id, group, label, detail, weight, status: ok === true ? "pass" : ok === "warn" ? "warn" : "fail",
    });

    const checks: Check[] = [
      c("https", "Security", "HTTPS enabled", final.protocol === "https:", final.protocol === "https:" ? "Your site is served securely." : "Serve the site over HTTPS to protect users and rankings.", 2),
      c("title", "On-page SEO", "Title tag", !title ? false : title.length >= 30 && title.length <= 65 ? true : "warn", !title ? "No title tag found." : `${title.length} characters. Aim for 30–65.`, 2),
      c("desc", "On-page SEO", "Meta description", !desc ? false : desc.length >= 70 && desc.length <= 165 ? true : "warn", !desc ? "No meta description found." : `${desc.length} characters. Aim for 70–165.`, 2),
      c("h1", "On-page SEO", "Single H1 heading", h1s === 1 ? true : h1s === 0 ? false : "warn", h1s === 1 ? "One clear H1 found." : h1s === 0 ? "No H1 found." : `${h1s} H1 tags found. Use one per page.`),
      c("canonical", "On-page SEO", "Canonical tag", /<link[^>]+rel=["']canonical["']/i.test(html), "A canonical URL prevents duplicate-content issues."),
      c("alt", "On-page SEO", "Image alt text", !imgs.length ? true : noAlt === 0 ? true : noAlt / imgs.length < 0.3 ? "warn" : false, !imgs.length ? "No images detected." : `${noAlt} of ${imgs.length} images are missing alt text.`),
      c("content", "On-page SEO", "Content depth", words >= 300 ? true : words >= 120 ? "warn" : false, `About ${words.toLocaleString("en-IN")} words on the page.`),
      c("links", "On-page SEO", "Internal & external links", links >= 5, `${links} links found on the page.`),
      c("viewport", "Mobile", "Mobile viewport", /<meta[^>]+name=["']viewport["']/i.test(html), "Needed for a correct mobile layout."),
      c("lang", "Mobile", "Language attribute", /<html[^>]+lang=/i.test(html), "Helps search engines and screen readers."),
      c("speed", "Performance", "Server response time", ms < 800 ? true : ms < 1800 ? "warn" : false, `${ms} ms to receive the page.`, 2),
      c("size", "Performance", "HTML size", kb < 150 ? true : kb < 400 ? "warn" : false, `${kb} KB of HTML.`),
      c("og", "Social", "Open Graph tags", Boolean(meta(html, "og:title") && meta(html, "og:image")), "Controls how links look when shared."),
      c("schema", "Social", "Structured data", /application\/ld\+json/i.test(html), "Schema markup can unlock rich results."),
      c("robots", "Crawlability", "robots.txt", !!robots, robots ? "robots.txt found." : "No robots.txt found."),
      c("sitemap", "Crawlability", "XML sitemap", !!sitemap, sitemap ? "sitemap.xml found." : "No sitemap.xml at the default location."),
    ];

    const max = checks.reduce((a, x) => a + x.weight, 0);
    const got = checks.reduce((a, x) => a + (x.status === "pass" ? x.weight : x.status === "warn" ? x.weight * 0.5 : 0), 0);

    return Response.json({ url: final.toString(), score: Math.round((got / max) * 100), checks });
  } catch (e) {
    const msg = e instanceof Error && /Invalid|cannot|redirect/.test(e.message) ? e.message : "We could not reach that website. Check the URL and try again.";
    return Response.json({ error: msg }, { status: 422 });
  }
}
