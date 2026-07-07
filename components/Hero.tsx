"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";
import { personalInfo as PersonalInfo, brandAssets } from "@/lib/data";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

interface HeroProps {
  personalInfo: typeof PersonalInfo;
}

const trustIndicators = [
  "5+ Years Experience",
  "50+ Projects Delivered",
  "Available for Hire",
];

const techStack = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#F0F4FA" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, label: "Node.js", color: "#22C55E" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function Hero({ personalInfo }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-20 pb-24"
    >
      <div className="section-container relative z-10 w-full !pt-8 !pb-0">
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-14 xl:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full min-w-0"
          >
            <motion.div variants={itemVariants} className="section-badge mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary status-dot inline-block" />
              {personalInfo.brandTagline}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="hero-heading font-sans text-foreground mb-7 text-balance"
            >
              Coding Scalable Web Applications and Mobile Apps{" "}
              <span className="gradient-text">
                AI Solutions &amp; Business Automation
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted leading-[1.75] mb-10 max-w-xl"
            >
              {personalInfo.description} Using React, Next.js, Node.js,
              TypeScript, and AI.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a href="#contact" className="btn-primary">
                Book a Call
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
                <ExternalLink size={15} strokeWidth={2} />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2.5 mb-10"
            >
              {trustIndicators.map((item) => (
                <div key={item} className="trust-chip">
                  <CheckCircle2
                    size={14}
                    className="text-primary shrink-0"
                    strokeWidth={2}
                  />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="text-[0.6875rem] text-muted/80 uppercase tracking-[0.15em] font-semibold">
                Tech Stack
              </span>
              <div className="flex items-center gap-2">
                {techStack.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    title={label}
                    className="w-10 h-10 rounded-[12px] flex items-center justify-center icon-box"
                  >
                    <Icon size={17} style={{ color }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="relative flex justify-center xl:justify-end w-full min-w-0"
          >
            <div className="relative w-full max-w-[420px]">
              <div
                className="absolute -inset-4 rounded-[28px] opacity-40 blur-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(142,184,232,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="premium-card-static overflow-hidden shadow-profile relative">
                <div className="profile-banner relative h-32 sm:h-36">
                  <Image
                    src={brandAssets.banner}
                    alt="ARSHMANDEV banner"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
                </div>

                <div className="px-7 pb-7">
                  <div className="relative -mt-14 mb-5 flex items-end gap-4">
                    <div className="relative shrink-0">
                      <div className="w-[5.5rem] h-[5.5rem] sm:w-28 sm:h-28 rounded-[18px] overflow-hidden border-[3px] border-surface-muted shadow-profile bg-surface">
                        <Image
                          src={brandAssets.profilePicture}
                          alt={personalInfo.name}
                          width={112}
                          height={112}
                          className="w-full h-full object-cover object-top"
                          priority
                        />
                      </div>
                      <span
                        className="absolute bottom-1.5 right-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-surface-muted status-dot"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="pb-1 min-w-0">
                      <h2 className="font-sans text-lg sm:text-xl font-semibold text-foreground truncate tracking-tight">
                        {personalInfo.name}
                      </h2>
                      <p className="text-sm text-primary-light font-medium">
                        {personalInfo.title}
                      </p>
                      <p className="text-xs text-muted mt-1">Open to work</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {personalInfo.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Code2, label: "Full Stack" },
                      { icon: Sparkles, label: "AI Solutions" },
                    ].map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 p-3.5 rounded-[14px] icon-box"
                      >
                        <Icon size={15} className="text-primary" strokeWidth={2} />
                        <span className="text-xs font-medium text-foreground/90">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {!prefersReducedMotion && (
                <>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-2 -right-2 glass-surface px-4 py-2.5 rounded-[14px] shadow-card"
                  >
                    <span className="text-xs font-semibold text-primary-light">
                      50+ Projects
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8,
                    }}
                    className="absolute -bottom-2 -left-2 glass-surface px-4 py-2.5 rounded-[14px] shadow-card"
                  >
                    <span className="text-xs font-semibold text-secondary-light">
                      {personalInfo.brandName}
                    </span>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.2em] text-muted/70 font-medium">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent overflow-hidden">
          <div className="w-full h-full bg-primary/60 scroll-indicator-line origin-top" />
        </div>
      </motion.div>
    </section>
  );
}
