import { ServicePage, svcMeta } from "@/components/svc/kit";
import { webDev as s } from "@/components/svc/data/web";

export const generateMetadata = () => svcMeta(s);
export default function Page() {
  return <ServicePage s={s} />;
}
