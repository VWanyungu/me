import { useState } from "react";
import { InteractiveBeams } from '../components/InteractiveBeams';
import { projects } from '../lib/data';

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div className="min-h-screen font-rubik">
      {/* Page header */}
      <div className="px-6 py-20 border-b border-ink/10 relative overflow-hidden">
        <InteractiveBeams />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* <p className="font-mono-dm text-xs uppercase tracking-widest text-muted mb-4">
            — Case Studies
          </p> */}
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold tracking-tighter leading-[0.9] mb-8">
            Selected{" "}
            <span className="font-display italic font-normal text-green-700">
              Projects
            </span>
          </h1>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 mt-10">
            <button
              onClick={() => setActiveTag(null)}
              className={`font-mono-dm text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors duration-150 ${activeTag === null
                ? "bg-green-700/5 text-green-700 border-green-700"
                : "border-ink/20 text-muted hover:border-green-700 hover:text-green-700"
                }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`font-mono-dm text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors duration-150 ${activeTag === tag
                  ? "bg-green-700/5 text-green-700 border-green-700"
                  : "border-ink/20 text-muted hover:border-green-700 hover:text-green-700"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <section className="px-6 py-8 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Featured (large) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {filtered
              .filter((p) => p.featured)
              .map((project) => (
                <div
                  key={project.slug}
                  className="group relative bg-surface border border-green-700/10 rounded-2xl p-4 md:p-8 hover:border-green-700/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`font-mono-dm text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border ${project.status === "Live"
                        ? "bg-green-700/5 text-green-700 border-green-700"
                        : "bg-green-700/5 text-green-700 border-green-700"
                        }`}
                    >
                      {project.status}
                    </span>
                    {/* <span className="font-mono-dm text-xs text-muted">{project.year}</span> */}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono-dm text-xs text-muted uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold text-green-700 mb-2 group-hover:text-green-forest transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-display italic text-ink/40 text-base mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-ink/50 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-green-700 text-white px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-green-700 hover:gap-3 transition-all duration-200"
                  >
                    See Details ↗
                  </a>
                </div>
              ))}
          </div>

          {/* Non-featured */}
          <div className="flex flex-col divide-y divide-ink/10">
            {filtered
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.slug}
                  className="group py-8 grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-surface/50 -mx-4 px-4 rounded-xl transition-colors duration-200"
                >
                  <div className="md:col-span-1 font-mono-dm text-xs text-muted self-start pt-1">
                    {project.year}
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="font-semibold text-ink text-lg mb-1 group-hover:text-green-forest transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="font-display italic text-ink/40 text-sm mb-2">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-ink/50 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                    {project.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="font-mono-dm text-xs bg-surface border border-ink/10 px-3 py-1 rounded-full text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="md:col-span-2 flex items-start justify-end">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-dm text-xs uppercase tracking-widest text-green-forest"
                    >
                      View ↗
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted font-mono-dm text-sm">No projects match this filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
