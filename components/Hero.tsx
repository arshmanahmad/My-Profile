import { ArrowRight, ExternalLink, Code2, Cpu, Zap, CreditCard } from "lucide-react";
import { personalInfo as PersonalInfo } from "@/lib/data";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiMongodb,
} from "react-icons/si";

interface HeroProps {
  personalInfo: typeof PersonalInfo;
}

const techIcons = [
  { icon: SiReact, label: "React", color: "#61dafb" },
  { icon: SiNextdotjs, label: "Next.js", color: "#0f172a" },
  { icon: SiNodedotjs, label: "Node.js", color: "#16a34a" },
  { icon: SiPython, label: "Python", color: "#4f46e5" },
  { icon: SiDocker, label: "Docker", color: "#0ea5e9" },
  { icon: SiMongodb, label: "MongoDB", color: "#22c55e" },
];

const services = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Cpu, label: "AI & Automation" },
  { icon: Zap, label: "Performance Optimization" },
  { icon: CreditCard, label: "Payment Integrations" },
];

export default function Hero({ personalInfo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      {/* Top gradient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        aria-hidden="true"
        style={{
          width: "1000px",
          height: "600px",
          background:
            "radial-gradient(ellipse at top, rgba(79,70,229,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="section-container relative z-10 w-full flex flex-col items-center">
        {/* Agency badge */}
        <div className="section-badge mb-8">
          <span
            className="w-2 h-2 rounded-full inline-block"
            style={{
              background: "#4f46e5",
              animation: "statusPulse 2s ease-in-out infinite",
            }}
          />
          Premium Web Development · Now Accepting Projects
        </div>

        {/* Main heading */}
        <h1
          className="font-extrabold text-slate-900 max-w-4xl mb-5 leading-tight tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}
        >
          We Build Digital Products
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #4f46e5 0%, #818cf8 55%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            That Drive Real Results
          </span>
        </h1>

        {/* Sub-copy */}
        <p className="text-base md:text-lg leading-relaxed text-slate-400 max-w-2xl mb-10">
          Nexluma delivers fast, scalable web applications — from MERN stack
          development and Python automation to AI integrations and payment
          gateways. 4+ years, 100+ projects, 50+ happy clients.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
          <a href="#projects" className="btn-outline">
            View Our Work
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Service chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <Icon size={14} style={{ color: "#4f46e5" }} />
              {label}
            </div>
          ))}
        </div>

        {/* Tech stack strip */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
            Our Tech Stack
          </span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {techIcons.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <Icon size={15} style={{ color }} />
                <span className="text-xs font-medium text-slate-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-[10px] uppercase tracking-widest text-slate-400">
          Scroll
        </span>
        <div
          className="w-px h-6"
          style={{
            background: "linear-gradient(to bottom, #4f46e5, transparent)",
          }}
        />
      </div>
    </section>
  );
}
