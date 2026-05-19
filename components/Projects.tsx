import { ArrowUpRight, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Project } from "@/lib/data";

interface ProjectsProps {
  projects: Project[];
}

function accentGradient(badge?: string): [string, string] {
  if (badge?.toLowerCase().includes("development")) return ["#06b6d4", "#67e8f9"];
  if (badge?.toLowerCase().includes("owned")) return ["#4f46e5", "#818cf8"];
  return ["#6366f1", "#a5b4fc"];
}

/* ── Featured horizontal card ───────────────────────── */
function FeaturedCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  const [from, to] = accentGradient(project.badge);

  return (
    <article
      className="overflow-hidden rounded-2xl border border-slate-200"
      style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
    >
      <div className="md:grid md:grid-cols-5">
        {/* Visual panel */}
        <div
          className={`relative md:col-span-2 min-h-[260px] flex flex-col items-center justify-center gap-4 p-8 overflow-hidden ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
          style={{ background: `linear-gradient(145deg, ${from} 0%, ${to} 100%)` }}
        >
          {/* Large decorative letter */}
          <span
            className="absolute select-none font-black"
            style={{
              fontSize: "120px",
              color: "rgba(255,255,255,0.1)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            {project.iconLetter ?? project.title[0]}
          </span>

          {/* Letter badge */}
          <div
            className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-extrabold text-white"
            style={{
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.35)",
            }}
          >
            {project.iconLetter ?? project.title[0]}
          </div>

          {project.badge && (
            <span
              className="relative z-10 text-xs font-semibold px-3 py-1 rounded-full text-white"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              {project.badge}
            </span>
          )}
        </div>

        {/* Content panel */}
        <div
          className={`md:col-span-3 bg-white p-8 flex flex-col justify-center ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Star size={13} style={{ color: "#4f46e5", fill: "#4f46e5" }} />
            <span className="text-xs font-bold uppercase tracking-widest gradient-text">
              Featured Project
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
            {project.title}
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start !py-2.5 !px-5 !text-sm"
          >
            View Live
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

/* ── Grid card ─────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  const [from, to] = accentGradient(project.badge);

  return (
    <article
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
    >
      {/* Coloured accent bar */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          {/* Letter avatar */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-extrabold text-white flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            {project.iconLetter ?? project.title[0]}
          </div>

          {/* Icon link — hover uses group */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 bg-slate-50 transition-all duration-200 group-hover:border-indigo-300 group-hover:text-indigo-600 group-hover:bg-indigo-50"
          >
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-pill text-slate-400">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card footer */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderTop: "1px solid #f1f5f9" }}
      >
        {project.badge ? (
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: `${from}15`,
              color: from,
              border: `1px solid ${from}30`,
            }}
          >
            {project.badge}
          </span>
        ) : (
          <span className="text-xs text-slate-300">Project</span>
        )}

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-slate-500 flex items-center gap-1 transition-all duration-200 group-hover:text-indigo-600 group-hover:gap-1.5"
        >
          View Project <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  );
}

/* ── Section ─────────────────────────────────────── */
export default function Projects({ projects }: ProjectsProps) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative z-10 bg-white">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">Projects</div>
            <h2 className="section-heading text-slate-900 mb-5">
              Work That <span className="gradient-text">Speaks for Itself</span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-slate-500 leading-relaxed">
              From owned SaaS products to client-shipped apps — full-stack web,
              AI automation, and real-time platforms.
            </p>
          </div>
        </ScrollReveal>

        {featured.length > 0 && (
          <div className="flex flex-col gap-6 mb-10">
            {featured.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 80}>
                <FeaturedCard project={project} reverse={i % 2 !== 0} />
              </ScrollReveal>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
