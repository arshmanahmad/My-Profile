"use client";

import { useState, type ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, Github } from "lucide-react";
import MotionReveal from "./MotionReveal";
import { Project, ProjectExpandedDetails } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

interface ProjectsProps {
  projects: Project[];
}

interface DetailSection {
  key: keyof ProjectExpandedDetails;
  label: string;
}

const DETAIL_SECTIONS: DetailSection[] = [
  { key: "responsibilities", label: "Responsibilities" },
  { key: "challenges", label: "Challenges" },
  { key: "implementation", label: "Implementation" },
  { key: "architecture", label: "Architecture" },
  { key: "performance", label: "Performance" },
  { key: "apis", label: "APIs" },
  { key: "additionalTechnologies", label: "Additional Technologies" },
];

function ProjectAction({
  href,
  label,
  icon: Icon,
  external = true,
}: {
  href: string;
  label: string;
  icon?: ElementType;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-primary-light transition-colors duration-300 group/link"
    >
      {Icon && (
        <Icon
          size={13}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover/link:-translate-y-px group-hover/link:translate-x-px"
        />
      )}
      {label}
      {!Icon && (
        <ArrowUpRight
          size={12}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover/link:-translate-y-px group-hover/link:translate-x-px"
        />
      )}
    </a>
  );
}

function ExpandedContent({ details }: { details: ProjectExpandedDetails }) {
  const sections = DETAIL_SECTIONS.filter(
    (s) => details[s.key] && (details[s.key] as string[]).length > 0
  );

  return (
    <div className="space-y-5 pt-1">
      {sections.map(({ key, label }) => (
        <div key={key}>
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-light/80 mb-2.5">
            {label}
          </p>
          <ul className="space-y-2">
            {(details[key] as string[]).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-muted leading-[1.65]"
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `project-panel-${project.id}`;

  return (
    <motion.article
      className={`project-card group flex flex-col h-full rounded-[20px] border transition-all duration-500 ease-premium ${
        expanded
          ? "border-primary/25 shadow-card-hover bg-surface/40"
          : "border-border-subtle shadow-card hover:border-primary/20 hover:shadow-card-hover hover:-translate-y-0.5"
      }`}
      style={{
        background: expanded
          ? "linear-gradient(165deg, rgba(47,65,88,0.5) 0%, rgba(26,38,56,0.85) 100%)"
          : "linear-gradient(165deg, rgba(40,56,72,0.35) 0%, rgba(26,38,56,0.75) 100%)",
      }}
    >
      <div className="flex flex-col flex-1 p-7 md:p-8">
        {/* Title */}
        <h3 className="text-xl md:text-[1.375rem] font-semibold text-foreground tracking-tight leading-tight mb-3">
          {project.title}
        </h3>

        {/* Category */}
        <span className="inline-flex self-start text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-primary-light px-2.5 py-1 rounded-full border border-primary/20 bg-primary/8 mb-5">
          {project.category}
        </span>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill project-tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Experience */}
        <p className="text-sm text-muted leading-[1.75] flex-1 mb-6">
          {project.experience}
        </p>

        {/* Read Experience accordion trigger */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-foreground transition-colors duration-300 self-start mb-6 group/expand"
        >
          <span>{expanded ? "Hide Details" : "Read Experience"}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="flex items-center justify-center"
          >
            <ChevronDown size={16} strokeWidth={2} />
          </motion.span>
        </button>

        {/* Expandable panel */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="pb-2 border-t border-border-subtle pt-5">
                <ExpandedContent details={project.expandedDetails} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions — bottom right */}
        <div className="flex items-center justify-end gap-5 mt-auto pt-4 border-t border-border-subtle">
          <ProjectAction href={project.demo} label="Live Demo" />
          {project.github && (
            <ProjectAction
              href={project.github}
              label="GitHub"
              icon={Github}
            />
          )}
          {project.caseStudy && (
            <ProjectAction href={project.caseStudy} label="Case Study" />
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative z-10 section-alt">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header">
            <div className="section-badge mx-auto w-fit">Projects</div>
            <h2 className="section-heading">
              Selected{" "}
              <span className="gradient-text">Work & Experience</span>
            </h2>
            <p className="section-subtext">
              Real products and platforms — focused on what I built, the
              technologies I used, and the engineering experience behind each
              project.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {projects.map((project, i) => (
            <MotionReveal key={project.id} delay={i * 60} className="h-full">
              <ProjectCard project={project} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
