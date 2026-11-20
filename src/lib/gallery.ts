export type GalleryItem = { category?: string; title?: string; image?: string; video?: string; alt?: string };
export type GalleryCategory = { name?: string; date?: string; description?: string; cover?: string };
export type VideoInfo = { kind: "youtube" | "vimeo" | "file"; src: string; thumb: string };
export type Media = { id: number; category: string; cat: string; title: string; alt: string; image: string; video: VideoInfo | null };
export type Album = { name: string; slug: string; date: string; description: string; cover: string; media: Media[]; photos: number; videos: number };

export const slug = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

/** Works out how to play a pasted video link. YouTube and Vimeo are embedded, anything else is treated as a video file. */
export function videoInfo(url: string): VideoInfo | null {
  const u = (url || "").trim();
  if (!u) return null;
  const yt = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/);
  if (yt) return { kind: "youtube", src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`, thumb: `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg` };
  const vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return { kind: "vimeo", src: `https://player.vimeo.com/video/${vm[1]}?autoplay=1`, thumb: "" };
  return { kind: "file", src: u, thumb: "" };
}

/**
 * Builds albums from the admin lists. Albums follow the order of the categories list.
 * Items whose category was deleted or renamed still show up (in their own album), so nothing disappears.
 * Albums without any photo or video are hidden.
 */
export function buildAlbums(cats: GalleryCategory[], items: GalleryItem[]): Album[] {
  const albums = new Map<string, Album>();
  const make = (name: string, c?: GalleryCategory): Album => ({ name, slug: slug(name), date: (c?.date ?? "").trim(), description: (c?.description ?? "").trim(), cover: (c?.cover ?? "").trim(), media: [], photos: 0, videos: 0 });

  (cats ?? []).forEach((c) => {
    const name = (c?.name ?? "").trim();
    if (name && slug(name) && !albums.has(slug(name))) albums.set(slug(name), make(name, c));
  });

  let id = 0;
  (items ?? []).forEach((it) => {
    const video = videoInfo(it?.video ?? "");
    const image = (it?.image ?? "").trim() || video?.thumb || "";
    if (!image && !video) return;
    const name = (it?.category ?? "").trim() || "Other";
    const key = slug(name) || "other";
    let album = albums.get(key);
    if (!album) { album = make(name); albums.set(key, album); }
    const title = (it?.title ?? "").trim();
    album.media.push({ id: id++, category: album.name, cat: album.slug, title, alt: (it?.alt ?? "").trim() || title || album.name, image, video });
    if (video) album.videos++; else album.photos++;
  });

  return [...albums.values()]
    .filter((a) => a.media.length)
    .map((a) => ({ ...a, cover: a.cover || a.media.find((m) => m.image)?.image || "" }));
}
