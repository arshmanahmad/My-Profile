"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import MotionReveal from "./MotionReveal";
import { Project } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

interface ProjectsProps {
  projects: Project[];
}

function ProjectStatus({ project }: { project: Project }) {
  if (project.inDevelopment) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium text-muted px-2.5 py-1 rounded-full border border-border-subtle bg-surface/30">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
        In Development
      </span>
    );
  }

  if (project.demo) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium text-primary-light/90 px-2.5 py-1 rounded-full border border-primary/15 bg-primary/8">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Live
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium text-muted px-2.5 py-1 rounded-full border border-border-subtle bg-surface/30">
      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
      Open Source
    </span>
  );
}
function ProjectLinks({ project }: { project: Project }) {
  if (project.inDevelopment) return null;

  return (
    <div className="flex items-center gap-2">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-btn group/link"
        >
          <ExternalLink size={12} strokeWidth={2} />
          Live Demo
          <ArrowUpRight
            size={11}
            strokeWidth={2.5}
            className="opacity-0 -ml-1 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300"
          />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-btn group/link"
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
  const canExpand = project.experience.length > 180;

  return (
    <article
      className={`project-card group relative flex flex-col h-full rounded-[20px] overflow-hidden transition-all duration-500 ease-premium ${
        expanded
          ? "border border-primary/22 shadow-card-hover"
          : "border border-border-subtle shadow-card hover:border-primary/18 hover:shadow-card-hover hover:-translate-y-1"
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(110,143,173,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col flex-1 p-7 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <h3 className="text-xl md:text-[1.35rem] font-semibold text-foreground tracking-tight leading-snug">
            {project.title}
          </h3>
          <ProjectStatus project={project} />
        </div>

        <div className="flex-1 mb-5">
          <p
            id={panelId}
            className={`text-[0.9375rem] text-muted/95 leading-[1.8] ${
              !expanded && canExpand ? "line-clamp-4" : ""
            }`}
          >
            {project.experience}
          </p>

          {canExpand && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls={panelId}
              className="mt-4 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary-light/80 hover:text-primary-light transition-colors duration-300 group/expand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:rounded-md px-1 -ml-1"
            >
              <span className="border-b border-transparent group-hover/expand:border-primary/30 transition-colors duration-300">
                {expanded ? "Show less" : "Read full experience"}
              </span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex items-center justify-center opacity-70 group-hover/expand:opacity-100"
              >
                <ChevronDown size={15} strokeWidth={2} />
              </motion.span>
            </button>
          )}
        </div>

        <div className="mt-auto pt-5 border-t border-border-subtle flex items-center justify-end gap-4">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
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
              Recent{" "}
              <span className="gradient-text">Interesting Projects</span>
            </h2>
            <p className="section-subtext">
              Real production work and software development experience, including
              Smarledger and other web &amp; app projects built by ARSHMANDEV.
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
