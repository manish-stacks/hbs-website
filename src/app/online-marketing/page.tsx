import { ServicePage, svcMeta } from "@/components/svc/kit";
import { online as s } from "@/components/svc/data/paid-social";

export const generateMetadata = () => svcMeta(s);
export default function Page() {
  return <ServicePage s={s} />;
}
