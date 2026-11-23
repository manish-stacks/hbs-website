import { cache } from "react";
import { query } from "./db";
import { DEFAULTS, type Defaults } from "./defaults";
import type { Company, GroupKey } from "./settings";
import { withMedia } from "./media";

/** Reads one settings group from MySQL, falling back to built-in defaults. Paths are stored as saved (use in the admin panel). */
export const getSettingRaw = cache(async <K extends GroupKey>(key: K): Promise<Defaults[K]> => {
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

/** Same as getSettingRaw, with uploaded file paths turned into full URLs (NEXT_PUBLIC_MEDIA_URL). Use on the website. */
export const getSetting = cache(async <K extends GroupKey>(key: K): Promise<Defaults[K]> => withMedia(await getSettingRaw(key)));

export async function getCompany(): Promise<Company> {
  const g = (await getSetting("general")) as any;
  const clients =
    g.clients ||
    g.clients_url ||
    "https://web-crm.hoverbusinessservices.com/client-portal";
  return {
    name: g.siteName,
    logo: g.logo,
    logoAlt: g.logoAlt,
    phone: g.phone,
    phoneAlt: g.phoneAlt,
    phoneNz: g.phoneNz,
    whatsapp: g.whatsapp,
    email: g.email,
    support: g.support,
    addressIn: g.address,
    crm: g.crm,
    pay: g.pay,
    clients,
    social: {
      facebook: g.facebook,
      instagram: g.instagram,
      linkedin: g.linkedin,
      twitter: g.twitter,
      youtube: g.youtube,
    },
  };
}

export async function getSeo() {
  const [s, g, p] = await Promise.all([getSetting("seo"), getSetting("general"), getSetting("pageSeo")]);
  return { ...s, siteUrl: (s.siteUrl || "").replace(/\/$/, ""), siteName: g.siteName, favicon: g.favicon, pages: p.items };
}

