"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Star,
  Github,
  ExternalLink,
  TrendingUp,
  Lightbulb,
  Zap,
} from "lucide-react";
import MotionReveal from "./MotionReveal";
import { Project } from "@/lib/data";

interface ProjectsProps {
  projects: Project[];
}

function CaseStudyCard({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const [from, to] = project.gradient;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="premium-card overflow-hidden"
    >
      <div className="lg:grid lg:grid-cols-5">
        <div
          className={`relative lg:col-span-2 min-h-[240px] flex flex-col items-center justify-center p-8 overflow-hidden ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
          style={{
            background: `linear-gradient(145deg, ${from}22, ${to}11)`,
            borderRight: reverse ? undefined : "1px solid rgba(255,255,255,0.06)",
            borderLeft: reverse ? "1px solid rgba(255,255,255,0.06)" : undefined,
          }}
        >
          <span
            className="absolute select-none font-black opacity-10"
            style={{
              fontSize: "100px",
              color: from,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            {project.iconLetter ?? project.title[0]}
          </span>

          <div
            className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-extrabold text-white mb-3"
            style={{
              background: `linear-gradient(135deg, ${from}, ${to})`,
            }}
          >
            {project.iconLetter ?? project.title[0]}
          </div>

          {project.badge && (
            <span
              className="relative z-10 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#F9FAFB",
              }}
            >
              {project.badge}
            </span>
          )}
        </div>

        <div
          className={`lg:col-span-3 p-8 flex flex-col justify-center ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Star size={13} className="text-primary fill-primary" />
            <span className="text-xs font-bold uppercase tracking-widest gradient-text">
              Featured Case Study
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-[#F9FAFB] mb-3 font-sans leading-tight">
            {project.title}
          </h3>

          <p className="text-sm text-muted leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <Lightbulb size={15} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#F9FAFB] mb-0.5">
                  Problem
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap size={15} className="text-primary-light shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#F9FAFB] mb-0.5">
                  Solution
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp
                size={15}
                className="text-green-400 shrink-0 mt-0.5"
              />
              <div>
                <p className="text-xs font-semibold text-[#F9FAFB] mb-0.5">
                  Business Impact
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {project.businessImpact}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 !text-sm"
            >
              Live Demo
              <ArrowUpRight size={15} />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !py-2.5 !px-5 !text-sm"
              >
                <Github size={15} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.gradient;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="premium-card overflow-hidden flex flex-col h-full group"
    >
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
      />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-extrabold text-white"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            {project.iconLetter ?? project.title[0]}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-muted hover:text-primary-light hover:border-primary/30 transition-all"
          >
            <ExternalLink size={14} />
          </a>
        </div>

        <h3 className="text-base font-bold text-[#F9FAFB] mb-2 font-sans">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary-light flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          View Project <ArrowUpRight size={13} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative z-10">
      <div className="section-container">
        <MotionReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">Projects</div>
            <h2 className="section-heading text-[#F9FAFB] mb-5">
              Featured{" "}
              <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="section-subtext text-base text-muted leading-relaxed">
              Real projects with measurable business impact — from SaaS products
              to AI-powered platforms.
            </p>
          </div>
        </MotionReveal>

        {featured.length > 0 && (
          <div className="flex flex-col gap-8 mb-10">
            {featured.map((project, i) => (
              <MotionReveal key={project.id} delay={i * 80}>
                <CaseStudyCard project={project} reverse={i % 2 !== 0} />
              </MotionReveal>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((project, i) => (
              <MotionReveal key={project.id} delay={i * 70}>
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
