"use client";

import { usePathname } from "next/navigation";
import type { Company, FooterData, MenuItem } from "@/lib/settings";
import { Header } from "./Header";
import { Footer } from "./Footer";

/** Public header/footer (data from admin settings); hidden inside the admin area. */
export function SiteChrome({ children, company, menu, footer }: { children: React.ReactNode; company: Company; menu: MenuItem[]; footer: FooterData }) {
  const path = usePathname();
  if (path.startsWith("/admin")) return <>{children}</>;
  return (
    <>
      <Header company={company} nav={menu} />
      <main className="pt-[70px] md:pt-[110px]">{children}</main>
      <Footer company={company} footer={footer} />
    </>
  );
}
