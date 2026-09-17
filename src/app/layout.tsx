import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://hoverbusinessservices.com"),
  title: {
    default: "Digital Marketing Agency in India | Hover Business Services LLP",
    template: "%s | Hover Business Services LLP",
  },
  description:
    "Hover Business Services is one of the best digital marketing agencies in India. SEO, PPC, social media, web and app development that generates leads and increases sales.",
  openGraph: { type: "website", siteName: "Hover Business Services LLP", locale: "en_IN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <SmoothScroll>
          <Header />
          <main className="pt-[70px] md:pt-[110px]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
