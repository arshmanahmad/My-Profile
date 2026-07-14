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

const typeVisuals: Record<
  ProjectType,
  { icon: LucideIcon; gradient: string; accent: string; glow: string }
> = {
  "ai-hiring": {
    icon: Brain,
    gradient:
      "linear-gradient(145deg, #0f1a24 0%, #163044 45%, #1a3d52 100%)",
    accent: "#7EC8E3",
    glow: "rgba(126,200,227,0.28)",
  },
  marketplace: {
    icon: Store,
    gradient:
      "linear-gradient(145deg, #101820 0%, #1a2834 45%, #243642 100%)",
    accent: "#91AEC8",
    glow: "rgba(145,174,200,0.25)",
  },
  "content-ai": {
    icon: PenLine,
    gradient:
      "linear-gradient(145deg, #12161f 0%, #1e2836 45%, #2a3545 100%)",
    accent: "#A8DCF0",
    glow: "rgba(168,220,240,0.22)",
  },
  "medical-ai": {
    icon: HeartPulse,
    gradient:
      "linear-gradient(145deg, #0f1a1c 0%, #163028 45%, #1c3d36 100%)",
    accent: "#34D399",
    glow: "rgba(52,211,153,0.22)",
  },
  automation: {
    icon: Bot,
    gradient:
      "linear-gradient(145deg, #12151c 0%, #1c2430 45%, #283040 100%)",
    accent: "#60A5FA",
    glow: "rgba(96,165,250,0.22)",
  },
  "business-erp": {
    icon: LayoutDashboard,
    gradient:
      "linear-gradient(145deg, #10151c 0%, #1a2532 45%, #243647 100%)",
    accent: "#7EC8E3",
    glow: "rgba(126,200,227,0.24)",
  },
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
    <div className="flex items-center gap-2">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-btn"
        >
          <ExternalLink size={12} strokeWidth={2} />
          Demo
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
      {project.inDevelopment && !project.demo && (
        <span className="project-action-btn project-action-btn--muted opacity-70 cursor-default">
          Demo
        </span>
      )}
    </div>
  );
}

function MockBars({
  accent,
  widths,
}: {
  accent: string;
  widths: number[];
}) {
  return (
    <div className="space-y-1.5">
      {widths.map((w, i) => (
        <div
          key={i}
          className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden"
        >
          <div
            className="h-full rounded-full opacity-80"
            style={{ width: `${w}%`, background: accent }}
          />
        </div>
      ))}
    </div>
  );
}

function TypeMockUi({
  type,
  accent,
}: {
  type: ProjectType;
  accent: string;
}) {
  if (type === "ai-hiring") {
    return (
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-2 h-full">
        <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2.5 space-y-2">
          <div className="h-2 w-12 rounded bg-white/15" />
          {[72, 54, 81].map((score, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-md bg-black/20 px-2 py-1.5"
            >
              <div
                className="w-5 h-5 rounded-full"
                style={{ background: `${accent}33` }}
              />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-10 rounded bg-white/20" />
                <div className="h-1 w-8 rounded bg-white/10" />
              </div>
              <span
                className="text-[9px] font-mono font-semibold"
                style={{ color: accent }}
              >
                {score}%
              </span>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2.5 flex flex-col">
          <div className="h-2 w-16 rounded bg-white/15 mb-3" />
          <div
            className="flex-1 rounded-md border border-dashed flex items-center justify-center"
            style={{ borderColor: `${accent}55`, background: `${accent}10` }}
          >
            <div className="text-center">
              <div
                className="mx-auto mb-1 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: `${accent}22`, color: accent }}
              >
                <Brain size={14} />
              </div>
              <div className="h-1.5 w-14 mx-auto rounded bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "marketplace") {
    return (
      <div className="grid grid-cols-3 gap-2 h-full">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="rounded-lg bg-white/[0.04] border border-white/10 p-2 flex flex-col gap-1.5"
          >
            <div
              className="aspect-square rounded-md"
              style={{
                background: `linear-gradient(145deg, ${accent}22, transparent)`,
              }}
            />
            <div className="h-1.5 w-full rounded bg-white/15" />
            <div className="h-1 w-2/3 rounded bg-white/10" />
          </div>
        ))}
      </div>
    );
  }

  if (type === "content-ai") {
    return (
      <div className="grid grid-cols-[1fr_0.85fr] gap-2 h-full">
        <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3 space-y-2">
          <div className="flex gap-1.5 mb-2">
            <div
              className="h-5 px-2 rounded text-[8px] font-mono flex items-center"
              style={{ background: `${accent}22`, color: accent }}
            >
              SEO
            </div>
            <div className="h-5 px-2 rounded bg-white/10 text-[8px] font-mono text-white/50 flex items-center">
              Draft
            </div>
          </div>
          <div className="h-2 w-3/4 rounded bg-white/20" />
          <div className="h-1.5 w-full rounded bg-white/10" />
          <div className="h-1.5 w-full rounded bg-white/10" />
          <div className="h-1.5 w-5/6 rounded bg-white/10" />
          <div className="h-1.5 w-2/3 rounded bg-white/10" />
        </div>
        <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3">
          <div className="h-2 w-12 rounded bg-white/15 mb-3" />
          <MockBars accent={accent} widths={[88, 64, 76, 52, 70]} />
        </div>
      </div>
    );
  }

  if (type === "medical-ai") {
    return (
      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3 flex flex-col">
          <div className="h-2 w-14 rounded bg-white/15 mb-3" />
          <div className="flex-1 flex items-end gap-1.5 px-1">
            {[40, 65, 48, 82, 55, 70, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: accent,
                  opacity: i === 6 ? 1 : 0.35,
                }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3 space-y-2">
          <div className="h-2 w-16 rounded bg-white/15" />
          {["Low risk", "Diet plan", "Recovery"].map((label, i) => (
            <div
              key={label}
              className="rounded-md bg-black/20 px-2 py-2 flex items-center justify-between"
            >
              <span className="text-[9px] text-white/60">{label}</span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i === 0 ? accent : `${accent}66` }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "automation") {
    return (
      <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3 h-full flex flex-col font-mono">
        <div className="flex items-center gap-1.5 mb-3 text-[9px] text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
          scraper running
        </div>
        <div className="space-y-1.5 flex-1 text-[9px] leading-relaxed">
          {[
            { c: accent, t: "> playwright.launch()" },
            { c: "rgba(255,255,255,0.35)", t: "nav → product page" },
            { c: accent, t: "extract: title, price, sku" },
            { c: "rgba(255,255,255,0.35)", t: "batch 128 / ok" },
            { c: accent, t: "saved → ./data.json" },
          ].map((line) => (
            <div key={line.t} style={{ color: line.c }}>
              {line.t}
            </div>
          ))}
        </div>
        <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[72%] rounded-full" style={{ background: accent }} />
        </div>
      </div>
    );
  }

  // business-erp
  return (
    <div className="grid grid-cols-[48px_1fr] gap-2 h-full">
      <div className="rounded-lg bg-white/[0.04] border border-white/10 p-1.5 flex flex-col items-center gap-2 pt-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-6 h-6 rounded-md"
            style={{
              background: i === 1 ? `${accent}44` : "rgba(255,255,255,0.06)",
            }}
          />
        ))}
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-2 min-h-0">
        <div className="grid grid-cols-3 gap-2">
          {["Sales", "Stock", "Orders"].map((label, i) => (
            <div
              key={label}
              className="rounded-lg bg-white/[0.04] border border-white/10 px-2 py-2"
            >
              <div className="h-1 w-8 rounded bg-white/15 mb-2" />
              <div
                className="text-[11px] font-semibold font-mono"
                style={{ color: accent }}
              >
                {["124", "86%", "38"][i]}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2.5">
          <MockBars accent={accent} widths={[90, 62, 78, 45, 70]} />
        </div>
      </div>
    </div>
  );
}

function ProjectTypeCover({ project }: { project: Project }) {
  const visual = typeVisuals[project.type];
  const Icon = visual.icon;

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden"
      style={{ background: visual.gradient }}
    >
      <div
        className="absolute -right-10 -top-12 w-52 h-52 rounded-full blur-3xl transition-transform duration-700 ease-premium group-hover:scale-110"
        style={{ background: visual.glow }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 p-4 md:p-5 flex flex-col transition-transform duration-700 ease-premium group-hover:scale-[1.015]">
        <div className="flex items-center justify-between mb-3">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.625rem] font-mono font-semibold uppercase tracking-[0.1em] border"
            style={{
              color: visual.accent,
              borderColor: `${visual.accent}44`,
              background: `${visual.accent}14`,
            }}
          >
            <Icon size={11} strokeWidth={2} />
            {project.typeLabel}
          </span>
          <span className="text-[10px] font-mono text-white/35 tracking-wide">
            preview
          </span>
        </div>

        {/* Fake browser / product window */}
        <div className="flex-1 min-h-0 rounded-xl border border-white/12 bg-black/25 backdrop-blur-[2px] shadow-[0_12px_40px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <div className="ml-2 flex-1 h-4 rounded-md bg-white/[0.06] border border-white/5 flex items-center px-2">
              <span className="text-[9px] font-mono text-white/30 truncate">
                {project.title.toLowerCase()}.app
              </span>
            </div>
          </div>
          <div className="flex-1 min-h-0 p-2.5">
            <TypeMockUi type={project.type} accent={visual.accent} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `project-experience-${project.id}`;
  const summary = projectSummaries[project.id] ?? project.experience.slice(0, 120);

  return (
    <article className="project-card group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border-subtle shadow-card hover:border-primary/25 hover:shadow-card-hover transition-all duration-500 ease-premium">
      <ProjectTypeCover project={project} />

      <div className="relative flex flex-col flex-1 p-6 md:p-7 bg-surface">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="label-mono text-primary mb-1.5">{project.typeLabel}</p>
            <h3 className="font-display text-lg font-semibold text-foreground tracking-tight">
              {project.title}
            </h3>
          </div>
          <ProjectStatus project={project} />
        </div>

        <p
          id={panelId}
          className={`text-sm text-muted leading-[1.7] mb-4 ${
            !expanded ? "line-clamp-3" : ""
          }`}
        >
          {expanded ? project.experience : summary}
        </p>

        <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-muted hover:text-primary transition-colors"
          >
            {expanded ? "Show less" : "Read full experience"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <ChevronDown size={14} strokeWidth={2} />
            </motion.span>
          </button>
          <ProjectLinks project={project} />
        </div>
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
            <h2 className="section-heading">Recent Interesting Projects</h2>
            <p className="section-subtext">
              Production work including Smarledger and other live products by
              ARSHMANDEV. Each project represents a technical milestone in
              performance and UX.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 items-stretch">
          {projects.map((project, i) => (
            <MotionReveal key={project.id} delay={i * 55} className="h-full">
              <ProjectCard project={project} />
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={200}>
          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/arshmanahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !rounded-xl"
            >
              <FileText size={16} />
              See all technical logs
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
