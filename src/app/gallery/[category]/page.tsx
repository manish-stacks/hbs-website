import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getSetting } from "@/lib/site";
import { buildAlbums } from "@/lib/gallery";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { AlbumCard } from "@/components/gallery/AlbumCard";

async function load(slug: string) {
  const [cats, g] = await Promise.all([getSetting("galleryCategories"), getSetting("gallery")]);
  const albums = buildAlbums(cats.items, g.items);
  return { albums, album: albums.find((a) => a.slug === slug) };
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const { album } = await load(category);
  if (!album) return {};
  return buildMeta({
    title: `${album.name} | Gallery`,
    description: album.description || `Photos and videos from ${album.name} at Hover Business Services LLP.`,
    path: `/gallery/${album.slug}`,
    image: album.cover || undefined,
    imageAlt: album.name,
  });
}

export default async function AlbumPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const { albums, album } = await load(category);
  if (!album) notFound();
  const more = albums.filter((a) => a.slug !== album.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={album.date || "Gallery"}
        title={album.name}
        tagline={album.description || undefined}
        crumbs={[{ label: "About Us", href: "/about-us" }, { label: "Gallery", href: "/gallery" }, { label: album.name, href: `/gallery/${album.slug}` }]}
      />

      <section className="section-space bg-white">
        <div className="container-max">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-[13px] font-bold text-[var(--color-ink)] hover:text-[var(--color-brand)]">
              <ArrowLeft size={15} /> All albums
            </Link>
            <p className="text-[13px] font-semibold text-[var(--color-text-muted)]">
              {album.photos} photo{album.photos === 1 ? "" : "s"}{album.videos ? ` · ${album.videos} video${album.videos === 1 ? "" : "s"}` : ""}
            </p>
          </div>
          <GalleryExplorer media={album.media} />
        </div>
      </section>

      {more.length ? (
        <section className="section-space bg-[var(--color-surface)] !pt-14">
          <div className="container-max">
            <h2 className="mb-8 text-center" style={{ fontSize: "var(--fs-2xl)" }}>More albums</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((a) => <AlbumCard key={a.slug} a={a} compact />)}
            </div>
          </div>
        </section>
      ) : null}
      <PageCta />
    </>
  );
}
