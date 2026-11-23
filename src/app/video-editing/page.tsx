import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ArrowRight, ArrowUpRight, Award, Check, ChevronRight, Eye, Layers, Palette, PenTool, Phone, Play, Plus, Sparkles, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Professional Video Editing Services | Motion Graphics | HBS",
    description: "Transform raw footage into compelling stories. Professional video editing, social media reels, corporate films, and motion graphics by Hover Business Services LLP.",
    path: "/video-editing",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Creative & Design",
  "href": "/graphic-design"
};

const PAGE = {
  "title": "Professional Video Editing & Motion Graphics Services",
  "eyebrow": "Cinematic Post-Production & Motion",
  "tagline": "High-retention video post-production, motion graphics, and social shorts engineered for viral engagement and conversions.",
  "intro": "In the attention economy, video is the undisputed king of digital engagement. Hover Business Services LLP provides enterprise-grade post-production, dynamic social shorts editing (Reels, TikTok, YouTube Shorts), corporate brand documentaries, 2D/3D motion graphics, and performance video ads that capture attention within the first three seconds."
};

type HeroData = { mark: string };
const HERO: HeroData = {
  "mark": "video"
};

const STATS: [string, string][] = [
  [
    "1,800+",
    "Videos Edited & Delivered"
  ],
  [
    "85%+",
    "Average Hook Retention Rate"
  ],
  [
    "24-48h",
    "Turnaround on Social Shorts"
  ]
];

const BENEFITS = [
  {
    "t": "Hook-Optimized Editing (First 3 Seconds)",
    "b": "Engineered visual hooks, dynamic sound effects, and kinetic typography that prevent drop-offs and maximize average watch time."
  },
  {
    "t": "Broadcast-Grade DaVinci Color Grading",
    "b": "Professional color correction, skin-tone balancing, and cinematic LUT application that elevate production value immediately."
  },
  {
    "t": "Studio-Grade Sound Design & Audio Mastering",
    "b": "Noise removal, voice clarity enhancement, dynamic sound effects (SFX), and licensed royalty-free background music sync."
  },
  {
    "t": "Custom 2D & 3D Motion Graphics",
    "b": "Sleek kinetic typography, animated lower-thirds, 3D product mockups, and logo animation stings created in After Effects."
  },
  {
    "t": "Multi-Format Social Repurposing",
    "b": "Transform a single 30-minute webinar, podcast, or speech into 10+ high-retention 9:16 vertical shorts, reels, and carousel clips."
  },
  {
    "t": "Rapid Turnaround & Seamless Cloud Workflows",
    "b": "Review edits via interactive timestamped video review links for effortless revisions and prompt final delivery."
  }
];

const INCLUDES = [
  "Viral Social Shorts, Reels & TikToks",
  "Corporate Brand Films & Case Studies",
  "High-Converting Performance Video Ads",
  "Podcast & Long-Form YouTube Production",
  "2D/3D Explainer & Product Animations",
  "Event Highlights & Aftermovies"
];

const PROCESS = [
  {
    "t": "Footage Ingestion & Narrative Review",
    "b": "Upload your raw files to our secure cloud. We review clips, transcription logs, and creative goals to construct a narrative outline."
  },
  {
    "t": "Rough Cut & Pacing Architecture",
    "b": "We assemble the timeline, trim dead air, structure the storyline, and insert primary visual hooks and key narrative moments."
  },
  {
    "t": "Sound Design, Motion & Color Grading",
    "b": "Addition of sound effects, background music, kinetic captions, animated infographics, and DaVinci color grading."
  },
  {
    "t": "Timestamped Review & Master Export",
    "b": "Review the cut via an interactive review link. After final tweaks, we export 4K/1080p ProRes or MP4 master files."
  }
];

const FAQS = [
  {
    "q": "How do we share our raw footage with your team?",
    "a": "We provide secure high-speed cloud upload links (Google Drive, Dropbox, Frame.io, or AWS S3) where your team can drag and drop raw camera footage, audio tracks, and assets."
  },
  {
    "q": "What is the typical turnaround time for a video edit?",
    "a": "Social media shorts and reels are typically delivered within 24 to 48 hours. Corporate brand films and long-form YouTube episodes take 3 to 5 business days."
  },
  {
    "q": "Do you provide voiceovers and licensed background music?",
    "a": "Yes. Every project includes fully licensed commercial music, sound effects, and optional professional human voiceovers in multiple accents and languages."
  },
  {
    "q": "How do revisions work for video editing projects?",
    "a": "We use collaborative video review tools where you can click anywhere on the video screen and leave time-coded comments. We iterate rapidly until you are 100% satisfied."
  },
  {
    "q": "Can you repurpose our long-form webinars into short-form content?",
    "a": "Yes. Repurposing is one of our specialties. Send us a 60-minute webinar or podcast, and our team will extract the top 10 most viral moments into vertical Reels/Shorts with captions."
  },
  {
    "q": "What resolutions and file formats will you deliver?",
    "a": "We deliver master files in 4K or 1080p MP4 (H.264 / H.265) and Apple ProRes, formatted perfectly for YouTube, Instagram, LinkedIn, TikTok, or broadcast TV."
  }
];

const RELATED = [
  {
    "label": "Social Media Creatives",
    "href": "/social-media-creatives"
  },
  {
    "label": "Graphic Design",
    "href": "/graphic-design"
  },
  {
    "label": "Performance Marketing",
    "href": "/performance-marketing"
  },
  {
    "label": "YouTube Marketing",
    "href": "/youtube-marketing"
  }
];

const OVERVIEW: string[] | null = [
  "Over 82% of all global internet traffic is video content. However, poorly paced footage, muddy audio, generic captions, and slow openings cause viewers to swipe away instantly. High-performing video requires meticulous pacing, rhythmic audio mixing, professional color grading, and dynamic visual hooks.",
  "Hover Business Services LLP operates a full-service video post-production studio equipped with industry-standard editing suites (Adobe Premiere Pro, After Effects, DaVinci Resolve). We turn raw clips, smartphone footage, podcast recordings, or multi-camera shoots into polished cinematic assets.",
  "Whether you need high-frequency social media video reels for Instagram and YouTube, corporate culture films, product demo explainers, or high-ROAS paid video advertisements, our team delivers broadcast-quality results."
];

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Partner With HBS for Video Post-Production?",
  "sub": "Maximize viewer retention, social algorithm reach, and commercial conversion.",
  "items": [
    {
      "t": "Hook-Optimized Editing (First 3 Seconds)",
      "b": "Engineered visual hooks, dynamic sound effects, and kinetic typography that prevent drop-offs and maximize average watch time."
    },
    {
      "t": "Broadcast-Grade DaVinci Color Grading",
      "b": "Professional color correction, skin-tone balancing, and cinematic LUT application that elevate production value immediately."
    },
    {
      "t": "Studio-Grade Sound Design & Audio Mastering",
      "b": "Noise removal, voice clarity enhancement, dynamic sound effects (SFX), and licensed royalty-free background music sync."
    },
    {
      "t": "Custom 2D & 3D Motion Graphics",
      "b": "Sleek kinetic typography, animated lower-thirds, 3D product mockups, and logo animation stings created in After Effects."
    },
    {
      "t": "Multi-Format Social Repurposing",
      "b": "Transform a single 30-minute webinar, podcast, or speech into 10+ high-retention 9:16 vertical shorts, reels, and carousel clips."
    },
    {
      "t": "Rapid Turnaround & Seamless Cloud Workflows",
      "b": "Review edits via interactive timestamped video review links for effortless revisions and prompt final delivery."
    }
  ]
};

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = {
  "title": "Our Video Post-Production Solutions",
  "sub": "From short-form viral social clips to full-scale corporate brand documentaries.",
  "items": [
    {
      "t": "Viral Social Shorts, Reels & TikToks",
      "b": "Fast-paced vertical videos (9:16) with animated captions, emoji callouts, zoom cuts, sound effects, and B-roll overlays.",
      "f": [
        "Hermes-style kinetic captions",
        "Dynamic sound effects & pacing",
        "Optimized for Reels & TikTok algorithms"
      ]
    },
    {
      "t": "Corporate Brand Films & Case Studies",
      "b": "High-end documentary-style videos highlighting customer testimonials, company milestones, and enterprise solutions.",
      "f": [
        "Narrative storyboarding",
        "Cinematic B-roll integration",
        "Multi-camera interview switching"
      ]
    },
    {
      "t": "High-Converting Performance Video Ads",
      "b": "Direct-response video ads structured for Meta, YouTube, and LinkedIn designed to test multiple hooks and CTAs.",
      "f": [
        "Hook variation packages",
        "Problem-solution storytelling",
        "Clear on-screen conversion CTAs"
      ]
    },
    {
      "t": "Podcast & Long-Form YouTube Production",
      "b": "End-to-end editing for weekly YouTube series, video podcasts, tutorials, and masterclasses with custom chapters.",
      "f": [
        "Multi-cam audio/video sync",
        "Lower-third social popups",
        "YouTube thumbnail design included"
      ]
    },
    {
      "t": "2D/3D Explainer & Product Animations",
      "b": "Custom animated explainer videos that break down complex SaaS software workflows, fintech services, or industrial products.",
      "f": [
        "Scriptwriting & voiceover sync",
        "Custom vector asset animation",
        "Isometric & 3D visual elements"
      ]
    },
    {
      "t": "Event Highlights & Aftermovies",
      "b": "Energetic recap videos for corporate summits, trade expos, product launches, and annual conferences.",
      "f": [
        "Beat-synced dynamic editing",
        "Speed ramping & transitions",
        "Atmospheric sound mastering"
      ]
    }
  ]
};

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Who Can Benefit From Our Video Editing Services?",
  "sub": "Ideal for creators, brands, and performance marketers.",
  "items": [
    {
      "t": "Direct-to-Consumer (D2C) Brands",
      "b": "Brands running paid ad campaigns on Meta and TikTok needing a continuous stream of fresh creative variations."
    },
    {
      "t": "B2B SaaS & Tech Companies",
      "b": "Software companies looking to create crisp product demo videos, customer case studies, and feature launch explainers."
    },
    {
      "t": "Podcasters & Thought Leaders",
      "b": "Founders and content creators looking to transform long-form audio into viral vertical shorts and polished YouTube shows."
    },
    {
      "t": "Corporate Enterprises & Agencies",
      "b": "Marketing teams needing white-label, dependable post-production bandwidth for internal and external campaigns."
    }
  ]
};

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = {
  "title": "Why Choose Hover Business Services LLP for Video?",
  "sub": "Storytelling artistry powered by performance metrics.",
  "items": [
    {
      "t": "100% In-House Editors & Animators",
      "b": "Senior video editors, colorists, and sound designers working under one roof. No unvetted freelancers."
    },
    {
      "t": "Platform Algorithm Mastery",
      "b": "We edit with deep knowledge of current Instagram, YouTube, and TikTok algorithmic retention benchmarks."
    },
    {
      "t": "Licensed Music & Asset Libraries",
      "b": "Full commercial rights to premium sound libraries (Artlist, Epidemic Sound, Motion Array) included with zero copyright strikes."
    },
    {
      "t": "Structured Monthly Retainers",
      "b": "Predictable pricing and fast turnaround times to keep your content calendar consistently ahead of schedule."
    }
  ]
};

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = {
  "title": "Cinematic Post-Production & Motion Reel Showcase",
  "sub": "Explore our commercial color grading, high-retention viral reels, and 3D motion animations.",
  "items": [
    {
      "title": "Luxury D2C Commercial Film & DaVinci Grading",
      "tag": "Color Grading",
      "image": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
      "b": "Rich cinematic color tones, filmic grain emulation, and dynamic sound design for a premium apparel brand."
    },
    {
      "title": "High-Retention Vertical Shorts & TikTok Reels",
      "tag": "Reels & Shorts",
      "image": "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop",
      "b": "Animated kinetic captions, fast-paced jump cuts, dynamic sound effects, and 85%+ completion rates."
    },
    {
      "title": "Corporate Documentary & Founder Keynote Film",
      "tag": "Brand Story",
      "image": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
      "b": "Inspiring multi-camera founder journey documentary screened at global investor conferences."
    },
    {
      "title": "3D Explainer Animation & Product Teaser",
      "tag": "3D Motion",
      "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      "b": "Custom After Effects vector motion graphics breaking down SaaS product features in 60 seconds."
    },
    {
      "title": "Studio Sound Design & Multitrack Audio Mastering",
      "tag": "Sound Design",
      "image": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
      "b": "Noise suppression, multi-band voice compression, and atmospheric foley sound effects integration."
    },
    {
      "title": "YouTube Masterclass Multi-Cam Episodic Series",
      "tag": "YouTube Shows",
      "image": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
      "b": "Weekly educational series with branded lower-thirds, chapter cards, and click-optimized thumbnails."
    }
  ]
};

const ICONS = [Palette, PenTool, Layers, Eye, Sparkles, Award];

/* ============================== Page ============================== */

export default async function VideoEditingPage() {
  const co = await getCompany();

  return (
    <div className="sx text-[var(--color-ink)]">
      <style>{`
        .sx h1,.sx h2,.sx h3{color:inherit}
        @keyframes sx-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes sx-bar{from{transform:scaleY(.1)}to{transform:scaleY(1)}}
        @keyframes sx-line{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}}
        @keyframes sx-pop{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
        @keyframes sx-card{from{opacity:0;transform:translateY(-24px) rotate(var(--r,0deg))}to{opacity:1;transform:rotate(var(--r,0deg))}}
        @keyframes sx-dash{to{stroke-dashoffset:-12}}
        .sx-rise{animation:sx-rise .7s cubic-bezier(.2,.7,.2,1) both}
        .sx-bar{transform-origin:bottom;animation:sx-bar 1s cubic-bezier(.2,.7,.2,1) both}
        .sx-line{animation:sx-line .45s ease-out both}
        .sx-pop{animation:sx-pop .6s .8s cubic-bezier(.2,.7,.2,1) both}
        .sx-card{transform:rotate(var(--r,0deg));animation:sx-card .8s cubic-bezier(.2,.8,.2,1) both}
        .sx-dash{animation:sx-dash 1.2s linear infinite}
        @media (prefers-reduced-motion:reduce){.sx-rise,.sx-bar,.sx-line,.sx-pop,.sx-card,.sx-dash{animation:none}}
      `}</style>

      <section className="relative overflow-hidden pb-14 pt-10 text-center md:pt-14">
        <div className="pointer-events-none absolute left-1/2 top-[55%] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-brand-soft)] blur-3xl" />
        <div className="container-max relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-text-muted)] justify-center">
            <Link href="/" className="hover:underline">Home</Link><ChevronRight size={13} />
            <Link href={HUB.href} className="hover:underline">{HUB.label}</Link><ChevronRight size={13} />
            <span className="text-[var(--color-ink)]">{PAGE.eyebrow}</span>
          </nav>
          <h1 className="mt-5 font-display font-extrabold mx-auto max-w-[20ch]" style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.04, letterSpacing: "-0.035em" }}>{PAGE.title}</h1>
          <p className="mt-5 max-w-[54ch] text-lg text-[var(--color-text-muted)] mx-auto">{PAGE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)] transition-transform hover:-translate-y-0.5">Get a free quote <ArrowRight size={16} /></Link>
            <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold border-[var(--color-ink)]"><Phone size={15} /> {co.phone}</a>
          </div>
          <div className="mt-14 text-left"><HeroVisual /></div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-max">
          <p className="mx-auto max-w-[62ch] text-center font-display text-2xl font-semibold leading-snug md:text-3xl">{PAGE.intro}</p>
          {OVERVIEW && <div className="mx-auto mt-10 grid max-w-5xl gap-6 text-[var(--color-text-muted)] md:grid-cols-3">{OVERVIEW.map((p, i) => <p key={i}>{p}</p>)}</div>}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-max">
          <h2 className="max-w-[20ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "What you get from it"}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className={`rounded-[26px] p-7 ${i === 0 ? "bg-[var(--color-brand)] text-white md:row-span-2 md:flex md:flex-col md:justify-end" : "border border-[var(--color-border)] bg-white"}`}>
                  <I size={i === 0 ? 36 : 22} className={i === 0 ? "" : "text-[var(--color-brand)]"} />
                  <h3 className={`mt-4 font-display font-bold ${i === 0 ? "text-2xl" : "text-lg"}`}>{b.t}</h3>
                  <p className={`mt-2 text-sm ${i === 0 ? "text-white/85" : "text-[var(--color-text-muted)]"}`}>{b.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-max">
          <div className="grid divide-y divide-white/10 rounded-[28px] bg-[var(--color-ink)] px-6 text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map(([v, l]) => (
              <div key={l} className="px-4 py-7 text-center"><p className="font-display text-4xl font-extrabold">{v}</p><p className="mt-1 text-sm text-white/60">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {DELIVERABLES && (
        <section className="py-16 md:py-24">
          <div className="container-max">
            <h2 className="max-w-[24ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{DELIVERABLES.title}</h2>
            {DELIVERABLES.sub && <p className="mt-2 text-[var(--color-text-muted)]">{DELIVERABLES.sub}</p>}
            <div className="mt-10 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.items.map((d) => (
                <div key={d.t} className="border-t-2 border-[var(--color-ink)] py-6">
                  <h3 className="font-display text-lg font-bold">{d.t}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{d.b}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{d.f.map((f) => <span key={f} className="rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-medium">{f}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Included in every plan</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {INCLUDES.map((x) => (
              <span key={x} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold shadow-[var(--shadow-sm)]"><Check size={16} className="text-[var(--color-brand)]" />{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Step by step</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">A clear process, so you always know what happens next.</p>
          </div>
          <ol className="relative border-l-2 border-[var(--color-border)] pl-8">
            {PROCESS.map((s, i) => (
              <li key={s.t} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white">{i + 1}</span>
                <h3 className="font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {GALLERY && (
        <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
          <div className="container-max">
            <h2 className="max-w-[22ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{GALLERY.title}</h2>
            {GALLERY.sub && <p className="mt-2 max-w-[60ch] text-white/60">{GALLERY.sub}</p>}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.items.map((g) => (
                <figure key={g.title} className="group overflow-hidden rounded-2xl bg-white/[.04]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={g.image} alt={g.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="p-5">
                    <span className="text-xs font-semibold text-[var(--color-brand)]">{g.tag}</span>
                    <p className="mt-1 font-display font-bold">{g.title}</p>
                    {g.b && <p className="mt-1.5 text-sm text-white/60">{g.b}</p>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {WHY_HBS && (
        <section className="py-16 md:py-24">
          <div className="container-max grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY_HBS.title}</h2>
              {WHY_HBS.sub && <p className="mt-3 text-[var(--color-text-muted)]">{WHY_HBS.sub}</p>}
            </div>
            <ul className="space-y-4">
              {WHY_HBS.items.map((w) => (
                <li key={w.t} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Check size={15} /></span>
                  <div><h3 className="font-display text-lg font-bold">{w.t}</h3><p className="mt-1 text-[var(--color-text-muted)]">{w.b}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {AUDIENCES && (
        <section className="bg-[var(--color-surface)] py-16 md:py-20">
          <div className="container-max">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{AUDIENCES.title}</h2>
            {AUDIENCES.sub && <p className="mt-2 text-[var(--color-text-muted)]">{AUDIENCES.sub}</p>}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AUDIENCES.items.map((a) => (
                <div key={a.t} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-sm)]">
                  <Users size={20} className="text-[var(--color-brand)]" />
                  <h3 className="mt-3 font-display font-bold">{a.t}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{a.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max">
          <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">Frequently asked</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 md:grid-cols-2">
            {FAQS.map((f) => (
              <details key={f.q} className="group h-fit rounded-2xl border border-[var(--color-border)] bg-white p-5 open:shadow-[var(--shadow-md)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-brand)] px-8 py-14 text-center text-white md:py-16">
            <h2 className="mx-auto max-w-[22ch] font-display text-3xl font-extrabold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>Let&apos;s plan your {PAGE.eyebrow.toLowerCase()} growth</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">Talk to an expert <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-12">
        <div className="container-max flex flex-col gap-5 md:flex-row md:items-center">
          <p className="shrink-0 font-display font-bold">Related services</p>
          <div className="flex flex-wrap gap-2">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]">{r.label}<ArrowUpRight size={14} /></Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- hero visual for this page ---------- */
function HeroVisual() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[460px]">
      <div className="sx-card absolute left-0 top-4 w-[60%] rounded-3xl bg-white p-5 text-[var(--color-ink)] shadow-[var(--shadow-lg)]" style={{ "--r": "-6deg" } as CSSProperties}>
        <p className="text-xs font-semibold text-[var(--color-text-muted)]">Palette</p>
        <div className="mt-3 grid grid-cols-4 gap-1.5">{["#E5231B", "#10131A", "#B98A2F", "#F3EFEC"].map((c) => <span key={c} className="aspect-square rounded-lg border border-black/5" style={{ background: c }} />)}</div>
        <p className="mt-4 font-display text-4xl font-extrabold">Aa</p>
      </div>
      <div className="sx-card absolute right-0 top-0 flex h-[220px] w-[52%] items-center justify-center rounded-3xl bg-[var(--color-brand)] text-white shadow-[var(--shadow-lg)]" style={{ "--r": "6deg", animationDelay: ".15s" } as CSSProperties}>
        {HERO.mark === "logo" && <span className="relative h-24 w-24"><span className="absolute inset-0 rounded-full border-[10px] border-white" /><span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md bg-white" /></span>}
        {HERO.mark === "video" && <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--color-brand)]"><Play size={26} fill="currentColor" /></span>}
        {HERO.mark === "social" && <span className="grid w-28 grid-cols-3 gap-1">{Array.from({ length: 9 }).map((_, i) => <span key={i} className={`aspect-square rounded-sm ${i % 3 === 1 ? "bg-white" : "bg-white/40"}`} />)}</span>}
        {HERO.mark === "uiux" && <span className="w-32 rounded-lg bg-white p-2"><span className="block h-2.5 w-14 rounded bg-[var(--color-ink)]" /><span className="mt-2 grid grid-cols-2 gap-1"><span className="h-8 rounded bg-[var(--color-brand-soft)]" /><span className="h-8 rounded bg-[var(--color-brand-soft)]" /></span><span className="mt-2 block h-3 w-12 rounded-full bg-[var(--color-brand)]" /></span>}
        {HERO.mark === "pack" && <span className="relative block h-28 w-20"><span className="absolute inset-x-0 bottom-0 top-5 rounded-md bg-white" /><span className="absolute inset-x-2 top-0 h-7 rounded-t-md bg-white/60" /><span className="absolute inset-x-3 top-12 h-7 rounded-sm bg-[var(--color-ink)]" /></span>}
      </div>
      <div className="sx-card absolute bottom-0 right-8 w-[64%] rounded-3xl bg-[var(--color-ink)] p-5 text-white shadow-[var(--shadow-lg)]" style={{ "--r": "-2deg", animationDelay: ".3s" } as CSSProperties}>
        <p className="text-xs text-white/60">Delivered as</p>
        <div className="mt-2 flex flex-wrap gap-1.5">{["AI", "PSD", "Figma", "PDF", "PNG", "SVG"].map((f) => <span key={f} className="rounded-md bg-white/10 px-2 py-1 font-mono text-[11px]">{f}</span>)}</div>
      </div>
    </div>
  );
}
