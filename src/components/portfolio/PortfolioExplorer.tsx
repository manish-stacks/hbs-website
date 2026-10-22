"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type PortfolioProject,
  type ProjectCategory,
} from "@/data/portfolioData";
import {
  Search,
  X,
  ArrowUpRight,
  Sparkles,
  LayoutGrid,
  Layers,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  ExternalLink,
  Star,
  Quote,
} from "lucide-react";

interface PortfolioExplorerProps {
  cmsWork?: {
    name: string;
    sector: string;
    scope: string[];
    outcome: string;
    image: string;
    ratio?: string;
  }[];
}

export function PortfolioExplorer({ cmsWork }: PortfolioExplorerProps) {
  // When CMS work items exist, show ONLY what is configured in the backend (as requested by user)
  const allProjects = useMemo<PortfolioProject[]>(() => {
    if (!cmsWork || cmsWork.length === 0) return PORTFOLIO_PROJECTS;

    return cmsWork.map((item, idx) => {
      const iName = (item.name || "").toLowerCase().trim();
      const cleanSlug = iName.replace(/[^a-z0-9]+/g, "-");

      // Match preset if exists for richer challenge/solution/metrics
      const match = PORTFOLIO_PROJECTS.find((p) => {
        const pName = p.name.toLowerCase();
        const pId = p.id.toLowerCase();
        const pClient = p.client.toLowerCase();
        return (
          pId === cleanSlug ||
          pName === iName ||
          pName.includes(iName) ||
          iName.includes(pName) ||
          pClient.includes(iName)
        );
      });

      if (match) {
        return {
          ...match,
          id: `work-${cleanSlug || "proj"}-${idx}`, // Guaranteed 100% unique key
          name: item.name || match.name,
          client: item.name || match.client,
          sector: item.sector || match.sector,
          image: item.image || match.image,
          ratio: item.ratio || match.ratio,
          scope: item.scope && item.scope.length > 0 ? item.scope : match.scope,
          outcome: item.outcome || match.outcome,
          tagline: item.outcome || match.tagline,
        };
      }

      return {
        id: `work-${cleanSlug || "proj"}-${idx}`, // Guaranteed 100% unique key
        name: item.name,
        client: item.name,
        category: "web",
        categoryLabel: "Web & Digital",
        sector: item.sector || "Client Project",
        year: "2025",
        location: "India / Global",
        tagline: item.outcome || `Digital transformation & engineering for ${item.name}`,
        outcome: item.outcome || `Delivered high-performance solutions for ${item.name}`,
        image: item.image || "/images/services/web-design.png",
        ratio: item.ratio || "aspect-[4/3]",
        accent: "#e5231b",
        featured: idx === 0,
        metrics: [
          { value: "+180%", label: "Average Growth", trend: "up" },
          { value: "99+", label: "Performance Score", trend: "up" },
          { value: "100%", label: "Conversion Focused", trend: "up" },
        ],
        scope: item.scope && item.scope.length > 0 ? item.scope : ["Web Architecture", "Growth Optimization"],
        techStack: ["Next.js", "Tailwind CSS", "TypeScript", "REST APIs"],
        challenge: `Overcame legacy friction and optimized digital engagement for ${item.name}.`,
        solution: `Engineered modern, high-speed interfaces with frictionless conversion paths.`,
        keyDeliverables: item.scope && item.scope.length > 0 ? item.scope : ["Custom Web Platform", "Performance Hardening"],
        testimonial: undefined,
        liveUrl: "/contact-us",
      };
    });
  }, [cmsWork]);

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"bento" | "grid">("bento");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" ? true : project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.sector.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.scope.some((s) => s.toLowerCase().includes(q)) ||
        project.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [allProjects, activeCategory, searchQuery]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div id="portfolio-gallery" className="scroll-mt-12">
      {/* Category Pills & Controls Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const count =
              cat.id === "all"
                ? allProjects.length
                : allProjects.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[var(--color-ink)] text-white shadow-md shadow-black/15 ring-2 ring-[var(--color-ink)]"
                    : "border border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`inline-flex h-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                    isActive
                      ? "bg-[var(--color-brand)] text-white"
                      : "bg-[var(--color-surface-2)] text-[var(--color-text-muted)] group-hover:bg-[var(--color-brand-soft)] group-hover:text-[var(--color-brand)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Layout View Switcher */}
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-64 sm:flex-initial">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search projects, stack, sector..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="field w-full pl-9 pr-8 text-xs py-2 h-10 rounded-full"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-ink)]"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* View Toggle */}
          <div className="hidden sm:inline-flex items-center rounded-full border border-[var(--color-border)] bg-white p-1">
            <button
              type="button"
              onClick={() => setViewMode("bento")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                viewMode === "bento"
                  ? "bg-[var(--color-ink)] text-white shadow-sm"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-ink)]"
              }`}
              title="Bento Showcase View"
            >
              <Layers size={13} />
              <span>Bento</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-[var(--color-ink)] text-white shadow-sm"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-ink)]"
              }`}
              title="Grid View"
            >
              <LayoutGrid size={13} />
              <span>Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Results Summary */}
      <div className="mt-6 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
        <p>
          Showing <span className="font-bold text-[var(--color-ink)]">{filteredProjects.length}</span>{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
          {activeCategory !== "all" && (
            <span>
              {" "}
              in <strong className="text-[var(--color-ink)] capitalize">{activeCategory}</strong>
            </span>
          )}
          {searchQuery && (
            <span>
              {" "}
              matching &ldquo;<strong>{searchQuery}</strong>&rdquo;
            </span>
          )}
        </p>

        {(activeCategory !== "all" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="font-semibold text-[var(--color-brand)] hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Projects Showcase Container */}
      {filteredProjects.length === 0 ? (
        <div className="mt-12 rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center">
          <p className="font-display text-xl font-bold text-[var(--color-ink)]">
            No projects found matching your criteria
          </p>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            Try adjusting your search terms or selecting another category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="btn btn-brand mt-5"
          >
            View All Projects
          </button>
        </div>
      ) : (
        <div
          className={`mt-8 ${
            viewMode === "bento"
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredProjects.map((project, idx) => {
            const primaryMetric = project.metrics[0];
            const isLargeCard = viewMode === "bento" && (idx === 0 || idx === 6);

            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/60 hover:shadow-[var(--shadow-lg)] cursor-pointer ${
                  isLargeCard ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Visual Image Header */}
                <div
                  className={`relative w-full overflow-hidden bg-[var(--color-surface-2)] ${
                    isLargeCard ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute left-4 top-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)] shadow-md backdrop-blur-sm">
                      {project.sector}
                    </span>
                    <span className="rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white/90 backdrop-blur-sm border border-white/20">
                      {project.year}
                    </span>
                  </div>

                  {/* Primary Metric Chip */}
                  {primaryMetric && (
                    <div className="absolute left-4 bottom-4 z-10">
                      <div className="inline-flex items-center gap-2 rounded-xl bg-black/75 px-3.5 py-2 text-white shadow-xl backdrop-blur-md border border-white/20">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-brand)] text-white">
                          {primaryMetric.trend === "up" ? (
                            <TrendingUp size={15} />
                          ) : (
                            <TrendingDown size={15} />
                          )}
                        </span>
                        <div>
                          <p className="font-display text-sm font-extrabold leading-none text-white">
                            {primaryMetric.value}
                          </p>
                          <p className="mt-0.5 text-[10px] font-medium leading-none text-white/70">
                            {primaryMetric.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quick Expand Trigger Pill */}
                  <div className="absolute right-4 bottom-4 z-10 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-ink)] shadow-lg hover:bg-[var(--color-brand)] hover:text-white transition-colors">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-semibold text-[var(--color-text-muted)]">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors sm:text-xl">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)] line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Scope / Tech Pills */}
                  {/* <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.scope.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                    {project.scope.length > 3 && (
                      <span className="rounded-md bg-[var(--color-surface-2)] px-2 py-1 text-[10px] font-semibold text-[var(--color-text-muted)]">
                        +{project.scope.length - 3} more
                      </span>
                    )}
                  </div> */} 

                  {/* Action Link Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                    <span className="text-xs font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] inline-flex items-center gap-1 transition-colors">
                      View Case Study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-[11px] text-[var(--color-text-muted)]">
                      Detailed Breakdown
                    </span>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Magnetic "Your Brand Here" Kickoff Card */}
          <div className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-1.5">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[90px]"
              style={{ background: "radial-gradient(circle, rgba(229,35,27,.6), transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full blur-[90px]"
              style={{ background: "radial-gradient(circle, rgba(185,138,47,.4), transparent 70%)" }}
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)] backdrop-blur-sm">
                <Sparkles size={12} /> Next Success Story
              </span>

              <h3 className="mt-5 font-display text-2xl font-extrabold text-white sm:text-3xl">
                Your Brand Here
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-white/70">
                Partner with 80+ in-house developers, growth marketers, and UI/UX designers ready to engineer your competitive advantage.
              </p>

              <ul className="mt-5 space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  Free 30-min strategy & feasibility audit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  Transparent milestone-based proposals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  Enterprise NDA & complete code ownership
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/15">
              <Link
                href="/contact-us"
                className="btn btn-brand w-full justify-between"
              >
                <span>Book Free Discovery Call</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Case Study Modal Dialog */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 lg:p-8 animate-in fade-in duration-200"
        >
          {/* Backdrop Blur */}
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Content Window */}
          <div className="relative z-10 flex h-full max-h-[92vh] sm:max-h-[88vh] w-full max-w-5xl xl:max-w-6xl flex-col overflow-hidden rounded-[24px] border border-white/20 bg-white shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brand)]">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs font-medium text-[var(--color-text-muted)]">
                  {selectedProject.sector} · {selectedProject.year}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:bg-[var(--color-ink)] hover:text-white transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-10 sm:py-8 space-y-8"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* Project Headline & Hero Visual */}
              <div>
                <h2 className="font-display text-2xl font-extrabold text-[var(--color-ink)] sm:text-3xl lg:text-4xl">
                  {selectedProject.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base lg:text-lg">
                  {selectedProject.tagline}
                </p>

                {/* Cover Image Frame */}
                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Quantifiable Metrics Strip */}
              {selectedProject.metrics.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                    Measurable Results Achieved
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {selectedProject.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center sm:text-left"
                      >
                        <p className="font-display text-2xl font-extrabold text-[var(--color-brand)] sm:text-3xl">
                          {m.value}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[var(--color-text)]">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Problem vs. Solution 2-Column Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-[var(--radius-md)] border border-red-200/60 bg-red-50/40 p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">
                      !
                    </span>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-red-900">
                      The Challenge & Bottleneck
                    </h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-red-950/80 sm:text-sm">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="rounded-[var(--radius-md)] border border-emerald-200/60 bg-emerald-50/40 p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                      ✓
                    </span>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-emerald-900">
                      The HBS Solution & Execution
                    </h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-emerald-950/80 sm:text-sm">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink)]">
                  Key Deliverables Shipped
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {selectedProject.keyDeliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-lg border border-[var(--color-border)] bg-white p-3 text-xs text-[var(--color-text)]"
                    >
                      <CheckCircle2 size={16} className="text-[var(--color-brand)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                  Engineering & Tech Stack
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold text-[var(--color-ink)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Testimonial (if available) */}
              {selectedProject.testimonial && (
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 relative overflow-hidden">
                  <Quote size={40} className="absolute -right-2 -bottom-2 text-black/5" />
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm italic leading-relaxed text-[var(--color-ink)] sm:text-base">
                    &ldquo;{selectedProject.testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-[var(--color-brand)] flex items-center justify-center font-display text-white font-bold text-xs">
                      {selectedProject.testimonial.author.slice(0, 1)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--color-ink)]">
                        {selectedProject.testimonial.author}
                      </p>
                      <p className="text-[11px] text-[var(--color-text-muted)]">
                        {selectedProject.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Action Footer */}
            <div className="flex shrink-0 flex-col gap-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <span className="text-xs text-[var(--color-text-muted)]">
                Want similar commercial impact for your brand?
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-ghost text-xs py-2 h-9"
                >
                  Close
                </button>
                <Link
                  href="/contact-us"
                  className="btn btn-brand text-xs py-2 h-9"
                >
                  Schedule Strategy Call <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

