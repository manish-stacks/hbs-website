import { ServicePage, svcMeta } from "@/components/svc/kit";
import { logo as s } from "@/components/svc/data/design";

export const generateMetadata = () => svcMeta(s);
export default function Page() {
  return <ServicePage s={s} />;
}
