import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";
import type { Company } from "@/lib/settings";

const sep = <span className="h-4 w-px bg-white/30" aria-hidden />;
const link = "flex items-center gap-2 transition-colors hover:text-[#ff8a84]";

export function TopBar({ company }: { company: Company }) {
  const wa = company.whatsapp.match(/\d{8,}/)?.[0];
  const socials = [
    { k: "facebook", Icon: FaFacebookF, bg: "#1877f2", label: "Facebook" },
    { k: "instagram", Icon: FaInstagram, bg: "linear-gradient(45deg,#f9a03f,#e1306c,#833ab4)", label: "Instagram" },
    { k: "linkedin", Icon: FaLinkedinIn, bg: "#0a66c2", label: "LinkedIn" },
    { k: "twitter", Icon: FaXTwitter, bg: "#1d9bf0", label: "X" },
    { k: "youtube", Icon: FaYoutube, bg: "#e62117", label: "YouTube" },
  ] as const;

  return (
    <div className="hidden border-b border-white/10 bg-gradient-to-r from-[#0a0e17] via-[#170a22] to-[#0a0e17] text-white md:block">
      <div className="container-max flex h-11 items-center justify-between text-[13px]">
        <div className="flex items-center gap-3 xl:gap-4">
          <a href={`tel:${company.phone}`} className={link}>
            <Phone size={15} className="text-[var(--color-brand)]" /> {company.phone}
          </a>
          {sep}
          <a href={`mailto:${company.email}`} className={link}>
            <span className="flex h-6 w-6 items-center justify-center rounded bg-[var(--color-brand)]"><Mail size={14} /></span> {company.email}
          </a>
          {wa ? (
            <>
              {sep}
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className={link}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25d366]"><FaWhatsapp size={15} /></span> WhatsApp +{wa}
              </a>
            </>
          ) : null}
          <span className="hidden items-center gap-3 lg:flex">
            {sep}
            <span className="font-semibold">Follow Us :</span>
            <span className="flex items-center gap-2">
              {socials.map(({ k, Icon, bg, label }) => {
                const href = company.social[k];
                return href ? (
                  <a key={k} href={href} target="_blank" rel="noreferrer" aria-label={label} style={{ background: bg }} className="flex h-6 w-6 items-center justify-center rounded-full text-white transition hover:scale-110">
                    <Icon size={12} />
                  </a>
                ) : null;
              })}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-5 font-medium">
          <a href={company.crm} target="_blank" rel="noreferrer" className="hover:text-[#ff8a84]">CRM Login</a>
          <a href={company.pay} target="_blank" rel="noreferrer" className="hover:text-[#ff8a84]">Pay Now</a>
          <a href={company.clients} target="_blank" rel="noreferrer" className="hover:text-[#ff8a84]">Client Login</a>
        </div>
      </div>
    </div>
  );
}
