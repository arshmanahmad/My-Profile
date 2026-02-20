import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react";
import FloatingCards from "./FloatingCards";
import { personalInfo as PersonalInfo } from "@/lib/data";

interface HeroProps {
  personalInfo: typeof PersonalInfo;
}

export default function Hero({ personalInfo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "80px" }}
    >
      {/* Hero glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16,217,160,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col gap-6">
            {/* Greeting badge */}
            <div className="section-badge w-fit">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{
                  background: "#10d9a0",
                  boxShadow: "0 0 6px rgba(16,217,160,0.8)",
                }}
              />
              Hello, I&apos;m Arshman
            </div>

            {/* Name + title */}
            <div>
              <h1 className="section-heading mb-2">
                <span className="text-[#f0fdf4]">Arshman </span>
                <span className="gradient-text">Ahmad</span>
              </h1>
              <p
                className="text-lg md:text-xl font-semibold"
                style={{ color: "#f59e0b" }}
              >
                Full-Stack Developer &amp; Automation Expert
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed text-[#f0fdf4]/65 max-w-lg">
              Transforming businesses with{" "}
              <span className="text-[#f0fdf4]/90 font-medium">4+ years</span> of
              expertise in MERN stack, Python automation, and payment
              integrations. I build fast, scalable solutions that drive real
              results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-outline">
                Hire Me Now
                <ExternalLink size={15} />
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs text-[#f0fdf4]/40 uppercase tracking-widest font-medium">
                Connect
              </span>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-xl flex items-center justify-center glass-card transition-colors duration-200 hover:border-[#10d9a0]/50"
                >
                  <Github size={16} className="text-[#f0fdf4]/70" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl flex items-center justify-center glass-card transition-colors duration-200 hover:border-[#10d9a0]/50"
                >
                  <Linkedin size={16} className="text-[#f0fdf4]/70" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="w-9 h-9 rounded-xl flex items-center justify-center glass-card transition-colors duration-200 hover:border-[#10d9a0]/50"
                >
                  <Mail size={16} className="text-[#f0fdf4]/70" />
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Profile photo + floating cards ── */}
          <div className="relative hidden lg:block h-[460px]">
            {/* Profile photo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className="relative w-52 h-52 rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(16,217,160,0.3)",
                  boxShadow:
                    "0 0 0 8px rgba(16,217,160,0.06), 0 0 60px rgba(16,217,160,0.15)",
                }}
              >
                <Image
                  src="/assets/arshman3.png"
                  alt="Arshman Ahmad — Full-Stack Developer"
                  fill
                  priority
                  className="object-cover"
                  sizes="208px"
                />
              </div>
            </div>

            {/* Floating UI cards */}
            <FloatingCards />
          </div>

          {/* Mobile: profile photo only */}
          <div className="flex justify-center lg:hidden">
            <div
              className="relative w-44 h-44 rounded-full overflow-hidden"
              style={{
                border: "2px solid rgba(16,217,160,0.3)",
                boxShadow:
                  "0 0 0 6px rgba(16,217,160,0.06), 0 0 40px rgba(16,217,160,0.12)",
              }}
            >
              <Image
                src="/assets/arshman3.png"
                alt="Arshman Ahmad — Full-Stack Developer"
                fill
                priority
                className="object-cover"
                sizes="176px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-[10px] uppercase tracking-widest text-[#10d9a0]">
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, #10d9a0, transparent)",
          }}
        />
      </div>
    </section>
  );
}
