"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ArrowUpRight,
  Github,
  ExternalLink,
  FileText,
  Brain,
  Store,
  PenLine,
  HeartPulse,
  Bot,
  LayoutDashboard,
  LucideIcon,
} from "lucide-react";
import MotionReveal from "./MotionReveal";
import { Project, ProjectType, projectSummaries } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

const typeMeta: Record<
  ProjectType,
  { icon: LucideIcon; accent: string }
> = {
  "ai-hiring": { icon: Brain, accent: "#7EC8E3" },
  marketplace: { icon: Store, accent: "#91AEC8" },
  "content-ai": { icon: PenLine, accent: "#A8DCF0" },
  "medical-ai": { icon: HeartPulse, accent: "#34D399" },
  automation: { icon: Bot, accent: "#60A5FA" },
  "business-erp": { icon: LayoutDashboard, accent: "#7EC8E3" },
};

interface ProjectsProps {
  projects: Project[];
}

function ProjectStatus({ project }: { project: Project }) {
  if (project.inDevelopment) {
    return (
      <span className="status-pill status-pill--dev">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        In Development
      </span>
    );
  }

  if (project.demo) {
    return (
      <span className="status-pill status-pill--live">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Live
      </span>
    );
  }

  return (
    <span className="status-pill status-pill--oss">
      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
      Open Source
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-end">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-btn"
        >
          <ExternalLink size={12} strokeWidth={2} />
          Live site
          <ArrowUpRight size={11} strokeWidth={2.5} />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-btn project-action-btn--muted"
        >
          <Github size={12} strokeWidth={2} />
          GitHub
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `project-experience-${project.id}`;
  const summary = projectSummaries[project.id] ?? project.experience;
  const meta = typeMeta[project.type];
  const Icon = meta.icon;
  const indexLabel = String(project.id).padStart(2, "0");

  return (
    <article className="group relative flex flex-col h-full rounded-2xl border border-border-subtle bg-surface p-6 md:p-7 shadow-card hover:border-primary/25 hover:shadow-card-hover transition-all duration-400 ease-premium">
      <div
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full opacity-80"
        style={{ background: meta.accent }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-3 mb-4 pl-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
            style={{
              color: meta.accent,
              borderColor: `${meta.accent}33`,
              background: `${meta.accent}12`,
            }}
          >
            <Icon size={18} strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="label-mono text-muted !normal-case !tracking-normal !text-[0.7rem]">
                {indexLabel}
              </span>
              <span
                className="text-[0.6875rem] font-medium"
                style={{ color: meta.accent }}
              >
                {project.typeLabel}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground tracking-tight truncate">
              {project.title}
            </h3>
          </div>
        </div>
        <ProjectStatus project={project} />
      </div>
      <p
        id={panelId}
        className={`text-sm text-secondary leading-[1.7] mb-5 pl-3 ${
          !expanded ? "line-clamp-3" : ""
        }`}
      >
        {expanded ? project.experience : summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-5 pl-3">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-[0.6875rem] font-medium text-muted border border-border-subtle bg-background/50"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between gap-3 pl-3">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-muted hover:text-primary transition-colors"
        >
          {expanded ? "Show less" : "More detail"}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <ChevronDown size={14} strokeWidth={2} />
          </motion.span>
        </button>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative z-10">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header-left max-w-3xl">
            <div className="section-badge">Projects</div>
            <h2 className="section-heading">Selected work</h2>
            <p className="section-subtext">
              A few products and systems I&apos;ve shipped, from live platforms
              to open-source tools. Prefer the live site or GitHub repo when you
              want to dig in.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {projects.map((project, i) => (
            <MotionReveal key={project.id} delay={i * 50} className="h-full">
              <ProjectCard project={project} />
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={160}>
          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/arshmanahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !rounded-xl"
            >
              <FileText size={16} />
              More on GitHub
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
