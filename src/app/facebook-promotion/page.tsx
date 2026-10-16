import { ServicePage, svcMeta } from "@/components/svc/kit";
import { facebook as s } from "@/components/svc/data/paid-social";

export const generateMetadata = () => svcMeta(s);
export default function Page() {
  return <ServicePage s={s} />;
}
