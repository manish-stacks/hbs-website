import { getCompany, getSetting } from "@/lib/site";
import { ContactCTAView } from "./ContactCTAView";

export async function ContactCTA() {
  const [company, cta] = await Promise.all([getCompany(), getSetting("contactCta")]);
  return <ContactCTAView company={company} cta={cta} />;
}
