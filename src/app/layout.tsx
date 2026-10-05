import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { company } from "@/data/home";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Digital Marketing Agency in India | Hover Business Services LLP",
    template: "%s | Hover Business Services LLP",
  },
  description:
    "Hover Business Services is one of the best digital marketing agencies in India. SEO, PPC, social media, web and app development that generates leads and increases sales.",
  keywords: [
    "digital marketing agency India",
    "SEO services",
    "performance marketing",
    "GMB management",
    "email marketing software",
    "WhatsApp marketing",
    "AI automation",
    "web development Delhi",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: "/",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/hbs-logo.png`,
      email: company.email,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "916, 9th Floor, Tower-2, Pearls Omaxe, NSP, Pitampura",
        addressLocality: "Delhi",
        postalCode: "110034",
        addressCountry: "IN",
      },
      sameAs: Object.values(company.social),
      contactPoint: [{ "@type": "ContactPoint", telephone: company.phone, contactType: "customer support", areaServed: ["IN", "NZ"], availableLanguage: ["en", "hi"] }],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll>
          <Header />
          <main className="pt-[70px] md:pt-[110px]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
