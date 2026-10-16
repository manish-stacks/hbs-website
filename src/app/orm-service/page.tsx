import { ServicePage, svcMeta } from "@/components/svc/kit";
import { ormService as s } from "@/components/svc/data/seo";

export const generateMetadata = () => svcMeta(s);
export default function Page() {
  return <ServicePage s={s} />;
}
