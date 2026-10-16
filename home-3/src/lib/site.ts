import { cache } from "react";
import { query } from "./db";
import { DEFAULTS, type Defaults } from "./defaults";
import type { Company, GroupKey } from "./settings";

/** Reads one settings group from MySQL, falling back to built-in defaults. */
export const getSetting = cache(async <K extends GroupKey>(key: K): Promise<Defaults[K]> => {
  const def = DEFAULTS[key];
  try {
    const [r] = await query<{ v: unknown }>("SELECT v FROM settings WHERE k=? LIMIT 1", [key]);
    if (!r) return def;
    const v = typeof r.v === "string" ? JSON.parse(r.v) : r.v;
    return (v && typeof v === "object" ? { ...def, ...v } : def) as Defaults[K];
  } catch (e) {
    console.error("settings", key, e);
    return def;
  }
});

export async function getCompany(): Promise<Company> {
  const g = await getSetting("general");
  return {
    name: g.siteName, logo: g.logo, logoAlt: g.logoAlt, phone: g.phone, phoneAlt: g.phoneAlt, phoneNz: g.phoneNz, whatsapp: g.whatsapp,
    email: g.email, support: g.support, addressIn: g.address, crm: g.crm, pay: g.pay,
    social: { facebook: g.facebook, instagram: g.instagram, linkedin: g.linkedin, twitter: g.twitter, youtube: g.youtube },
  };
}

export async function getSeo() {
  const [s, g, p] = await Promise.all([getSetting("seo"), getSetting("general"), getSetting("pageSeo")]);
  return { ...s, siteUrl: (s.siteUrl || "").replace(/\/$/, ""), siteName: g.siteName, favicon: g.favicon, pages: p.items };
}

