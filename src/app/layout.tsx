import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { getCompany, getSeo, getSetting } from "@/lib/site";
import "@/styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171a21",
};

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSeo();
  const img = s.ogImage ? [{ url: s.ogImage, width: 1200, height: 630, alt: s.ogImageAlt || s.siteName }] : undefined;
  return {
    metadataBase: new URL(s.siteUrl || "http://localhost:3000"),
    applicationName: s.siteName,
    title: { default: s.defaultTitle, template: s.titleTemplate },
    description: s.description,
    keywords: s.keywords.filter(Boolean),
    authors: [{ name: s.siteName, url: s.siteUrl }],
    creator: s.siteName,
    publisher: s.siteName,
    category: "business",
    formatDetection: { telephone: false, email: false, address: false },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    verification: s.googleVerification ? { google: s.googleVerification } : undefined,
    icons: s.favicon ? { icon: s.favicon } : undefined,
    openGraph: { type: "website", siteName: s.siteName, locale: "en_IN", url: "/", images: img },
    twitter: { card: "summary_large_image", images: s.ogImage ? [s.ogImage] : undefined, site: s.twitterHandle || undefined },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [company, seo, menu, footer] = await Promise.all([getCompany(), getSeo(), getSetting("menu"), getSetting("footer")]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${seo.siteUrl}/#organization`,
        name: seo.siteName,
        url: seo.siteUrl,
        logo: company.logo,
        email: company.email,
        telephone: company.phone,
        address: { "@type": "PostalAddress", streetAddress: seo.orgStreet, addressLocality: seo.orgCity, postalCode: seo.orgPostal, addressCountry: seo.orgCountry },
        sameAs: Object.values(company.social).filter(Boolean),
        contactPoint: [{ "@type": "ContactPoint", telephone: company.phone, contactType: "customer support", availableLanguage: ["en", "hi"] }],
      },
      { "@type": "WebSite", "@id": `${seo.siteUrl}/#website`, url: seo.siteUrl, name: seo.siteName, inLanguage: "en-IN", publisher: { "@id": `${seo.siteUrl}/#organization` } },
    ],
  };
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-body antialiased" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {seo.gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${seo.gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${seo.gaId}');`}</Script>
          </>
        ) : null}
        <SmoothScroll>
          <SiteChrome company={company} menu={menu.items} footer={footer}>{children}</SiteChrome>
        </SmoothScroll>
      </body>
    </html>
  );
}
