import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Project } from "@/lib/data";

interface ProjectsProps {
  projects: Project[];
}

function TechPill({ tech }: { tech: string }) {
  return <span className="tech-pill">{tech}</span>;
}

function ProjectIcon({ letter, tagline }: { letter: string; tagline?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`bg-${letter}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#050d1a" />
          <stop offset="100%" stopColor="#080e24" />
        </linearGradient>
        <linearGradient id={`glow-${letter}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c8ff" />
          <stop offset="100%" stopColor="#0090c0" />
        </linearGradient>
        <filter id={`blur-${letter}`}>
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>
      <rect width="800" height="450" fill={`url(#bg-${letter})`} />
      <circle cx="200" cy="150" r="120" fill="#00c8ff" opacity="0.06" filter={`url(#blur-${letter})`} />
      <circle cx="600" cy="300" r="150" fill="#00c8ff" opacity="0.05" filter={`url(#blur-${letter})`} />
      <line x1="0" y1="150" x2="800" y2="150" stroke="#00c8ff" strokeWidth="0.4" opacity="0.12" />
      <line x1="0" y1="300" x2="800" y2="300" stroke="#00c8ff" strokeWidth="0.4" opacity="0.12" />
      <line x1="200" y1="0" x2="200" y2="450" stroke="#00c8ff" strokeWidth="0.4" opacity="0.12" />
      <line x1="400" y1="0" x2="400" y2="450" stroke="#00c8ff" strokeWidth="0.4" opacity="0.12" />
      <line x1="600" y1="0" x2="600" y2="450" stroke="#00c8ff" strokeWidth="0.4" opacity="0.12" />
      <rect width="800" height="450" fill="none" stroke="#00c8ff" strokeWidth="1" opacity="0.15" rx="2" />
      <circle cx="400" cy="185" r="52" fill="none" stroke={`url(#glow-${letter})`} strokeWidth="1.5" opacity="0.6" />
      <circle cx="400" cy="185" r="42" fill="#00c8ff" opacity="0.08" />
      <text x="400" y="205" fontFamily="Georgia, serif" fontSize="54" fontWeight="bold" fill={`url(#glow-${letter})`} textAnchor="middle" opacity="0.95">{letter}</text>
      {tagline && (
        <text x="400" y="308" fontFamily="Arial, sans-serif" fontSize="13" fill="#00c8ff" textAnchor="middle" opacity="0.75" letterSpacing="2">{tagline}</text>
      )}
      <circle cx="370" cy="330" r="2" fill="#00c8ff" opacity="0.4" />
      <circle cx="400" cy="330" r="2" fill="#00c8ff" opacity="0.7" />
      <circle cx="430" cy="330" r="2" fill="#00c8ff" opacity="0.4" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card overflow-hidden group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-navy-800">
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: "rgba(2,13,11,0.7)" }}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-4 !text-sm"
          >
            Live Demo
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[#e0f2ff] mb-2">{project.title}</h3>
        <p className="text-sm text-[#e0f2ff]/56 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechPill key={t} tech={t} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  const [featured, secondFeatured] = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative z-10">
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">Projects</div>
            <h2 className="section-heading text-[#e0f2ff] mb-5">
              Work That <span className="gradient-text">Speaks for Itself</span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-[#e0f2ff]/58 leading-relaxed">
              A selection of projects spanning full-stack web apps, AI
              automation tools, and real-time platforms — all shipped and live.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured project */}
        {featured && (
          <ScrollReveal delay={80}>
            <article
              className="glass-card overflow-hidden mb-8 group"
              aria-label={`Featured project: ${featured.title}`}
            >
              <div className="md:grid md:grid-cols-2">
                {/* Icon / Image */}
                <div className="relative h-56 md:h-full min-h-[240px] overflow-hidden bg-navy-800">
                  {featured.iconLetter ? (
                    <ProjectIcon letter={featured.iconLetter} tagline={featured.badge?.toUpperCase()} />
                  ) : (
                    <Image
                      src={featured.image}
                      alt={`${featured.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Star
                      size={14}
                      style={{ color: "#7c3aed", fill: "#7c3aed" }}
                    />
                    <span className="text-xs font-semibold uppercase tracking-widest gradient-text-amber">
                      Featured Project
                    </span>
                    {featured.badge && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-[#00c8ff]/40 text-[#00c8ff] bg-[#00c8ff]/10">
                        {featured.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#e0f2ff] mb-3">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-[#e0f2ff]/60 leading-relaxed mb-5">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tech.map((t) => (
                      <TechPill key={t} tech={t} />
                    ))}
                  </div>
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary self-start"
                  >
                    View Live
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>
        )}

        {/* Second featured project */}
        {secondFeatured && (
          <ScrollReveal delay={80}>
            <article
              className="glass-card overflow-hidden mb-8 group"
              aria-label={`Featured project: ${secondFeatured.title}`}
            >
              <div className="md:grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center md:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Star
                      size={14}
                      style={{ color: "#7c3aed", fill: "#7c3aed" }}
                    />
                    <span className="text-xs font-semibold uppercase tracking-widest gradient-text-amber">
                      Featured Project
                    </span>
                    {secondFeatured.badge && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-[#00c8ff]/40 text-[#00c8ff] bg-[#00c8ff]/10">
                        {secondFeatured.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#e0f2ff] mb-3">
                    {secondFeatured.title}
                  </h3>
                  <p className="text-sm text-[#e0f2ff]/60 leading-relaxed mb-5">
                    {secondFeatured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {secondFeatured.tech.map((t) => (
                      <TechPill key={t} tech={t} />
                    ))}
                  </div>
                  <a
                    href={secondFeatured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary self-start"
                  >
                    View Live
                    <ExternalLink size={15} />
                  </a>
                </div>
                <div className="relative h-56 md:h-full min-h-[240px] overflow-hidden bg-navy-800 md:order-2">
                  {secondFeatured.iconLetter ? (
                    <ProjectIcon letter={secondFeatured.iconLetter} tagline={secondFeatured.badge?.toUpperCase()} />
                  ) : (
                    <Image
                      src={secondFeatured.image}
                      alt={`${secondFeatured.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>
              </div>
            </article>
          </ScrollReveal>
        )}

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
