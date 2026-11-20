import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { TeamLeaders } from "@/components/home/TeamLeaders";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Team Members",
    description: "Meet the team leaders of Hover Business Services LLP and the departments they lead.",
    path: "/team-members",
  });
}

export default function TeamMembersPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Meet our team leaders"
        tagline="The people who lead our departments and keep every project moving."
        crumbs={[{ label: "About Us", href: "/about-us" }, { label: "Team Members", href: "/team-members" }]}
      />
      <TeamLeaders />
      <PageCta />
    </>
  );
}
