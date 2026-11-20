import type { Metadata } from "next";
import { Camera, Play } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getSetting } from "@/lib/site";
import { buildAlbums } from "@/lib/gallery";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { SectionHead } from "@/components/home/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { AlbumCard } from "@/components/gallery/AlbumCard";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Gallery",
    description: "Office memories from Hover Business Services LLP — events, celebrations, team outings and everyday moments.",
    path: "/gallery",
  });
}

export default async function GalleryPage() {
  const [cats, g] = await Promise.all([getSetting("galleryCategories"), getSetting("gallery")]);
  const albums = buildAlbums(cats.items, g.items);
  const photos = albums.reduce((n, a) => n + a.photos, 0);
  const videos = albums.reduce((n, a) => n + a.videos, 0);

  return (
    <>
      <PageHero
        eyebrow="Life @ Hover"
        title="Our office memories"
        tagline="Events, celebrations and the everyday moments that make our team what it is."
        crumbs={[{ label: "About Us", href: "/about-us" }, { label: "Gallery", href: "/gallery" }]}
      />
      <section className="section-space bg-white">
        <div className="container-max">
          <SectionHead pill="Gallery" title="Moments We Cherish" sub="Pick an album to see photos and videos from each event and celebration." />

          {albums.length === 0 ? (
            <p className="mt-14 text-center text-[var(--color-text-muted)]">Our memories will be added soon.</p>
          ) : (
            <>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[13px] font-bold text-[var(--color-ink)]">
                <span className="rounded-full bg-[var(--color-surface-2)] px-4 py-2">{albums.length} album{albums.length === 1 ? "" : "s"}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-surface-2)] px-4 py-2"><Camera size={14} /> {photos} photos</span>
                {videos ? <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-surface-2)] px-4 py-2"><Play size={13} fill="currentColor" /> {videos} videos</span> : null}
              </div>
              <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
                {albums.map((a) => <AlbumCard key={a.slug} a={a} />)}
              </Reveal>
            </>
          )}
        </div>
      </section>
      <PageCta />
    </>
  );
}
