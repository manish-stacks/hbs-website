import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/home";
import { FaRobot, FaWhatsapp } from "react-icons/fa6";

const socials = [
  { href: company.social.facebook, label: "Facebook", d: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" },
  { href: company.social.instagram, label: "Instagram", d: "M12 8.6a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8zm0 5.6a2.2 2.2 0 110-4.4 2.2 2.2 0 010 4.4zM17 3H7a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4zm2.8 14a2.8 2.8 0 01-2.8 2.8H7A2.8 2.8 0 014.2 17V7A2.8 2.8 0 017 4.2h10A2.8 2.8 0 0119.8 7v10zm-2.4-10.6a.9.9 0 100 1.8.9.9 0 000-1.8z" },
  { href: company.social.linkedin, label: "LinkedIn", d: "M6.9 8.2H4.2V20h2.7V8.2zM5.5 4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zM20 13.4c0-3.2-1.9-4.6-4-4.6-1.5 0-2.4.8-2.8 1.4V8.2H10.5V20h2.7v-6.2c0-1.4.7-2.2 1.9-2.2 1.1 0 1.7.7 1.7 2.2V20H20v-6.6z" },
  { href: company.social.twitter, label: "X", d: "M17.5 4h2.6l-5.7 6.5L21 20h-5l-3.9-5.1L7.6 20H5l6.1-7-6-9h5.1l3.5 4.7L17.5 4zm-.9 14.4h1.4L8.4 5.5H6.9l9.7 12.9z" },
  { href: company.social.youtube, label: "YouTube", d: "M21.6 7.6a2.5 2.5 0 00-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.6 26 26 0 002 12a26 26 0 00.4 4.4 2.5 2.5 0 001.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.4zM10 15.1V8.9l5.2 3.1-5.2 3.1z" },
];

const cols: { title: string; links: [string, string][] }[] = [
  {
    title: "Top Services",
    links: [
      ["SEO Service", "/seo-service"],
      ["Local SEO Service", "/local-seo-service"],
      ["Google Map SEO", "/google-map-seo"],
      ["PPC Service", "/ppc-service"],
      ["Social Media Marketing", "/social-media-marketing"],
      ["ORM Service", "/orm-service"],
    ],
  },
  {
    title: "Web & App",
    links: [
      ["Custom Web Design", "/custom-web-design"],
      ["Website Development", "/website-development"],
      ["WordPress Development", "/wordpress-development"],
      ["E-commerce Web Designing", "/e-commerce-web-designing"],
      ["Software & App Development", "/software-app-development"],
      ["Website Maintenance", "/website-maintenance"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about-us"],
      ["Products", "/products"],
      ["Portfolio", "/portfolio"],
      ["Career", "/career"],
      ["Blog", "/blog"],
      ["Contact Us", "/contact-us"],
      ["Become Partner", "/contact-us"],
    ],
  },
];

const legal: [string, string][] = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-conditions"],
  ["Refund & Cancellation", "/refunds-cancellations"],
  ["Shipping and Delivery", "/shipping-delivery"],
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-max pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex max-w-57.5 items-center rounded-[14px] bg-white px-4 py-3">
              <Image
                src="https://hoverbusinessservices.com/images/hbs-logo.png"
                alt="Hover Business Services"
                width={380}
                height={92}
                className="h-14! w-auto max-w-47.5 object-contain"
              />
            </Link>

            <p className="mt-5 max-w-[42ch] text-[var(--fs-sm)] text-white/65">
              Hover Business Services trusts in good quality services, so that you get a real
              and broad return on everything you invest in growth.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-[var(--fs-sm)] text-white/75">
              <a href={`tel:${company.phone}`} className="flex items-center gap-2.5 hover:text-white">
                <Phone size={15} /> {company.phone} · {company.phoneAlt}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-white">
                <Mail size={15} /> {company.email}
              </a>
              <span className="flex max-w-[34ch] gap-2.5">
                <MapPin size={15} className="mt-1 shrink-0" /> {company.addressIn}
              </span>

            </div>

            <div className="mt-7 flex gap-3">
              {socials.map(({ href, label, d }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/60 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-display text-[15px] font-bold">{c.title}</p>
              <ul className="mt-5 flex flex-col gap-3 text-[var(--fs-sm)] text-white/65">
                {c.links.map(([label, href]) => (
                  <li key={`${label}-${href}`}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-7 text-[var(--fs-xs)] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Hover Business Services LLP. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a]"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-amber-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a]"
      >
        <FaRobot size={28} />
      </a>
    </footer>
  );
}
