"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";
import { personalInfo as PersonalInfo } from "@/lib/data";
import { LogoMark } from "./Logo";
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
  { icon: SiNextdotjs, label: "Next.js", color: "#F9FAFB" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, label: "Node.js", color: "#22C55E" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ personalInfo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="section-container relative z-10 w-full">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full min-w-0"
          >
            <motion.div variants={itemVariants} className="section-badge mb-6">
              <span className="w-2 h-2 rounded-full bg-primary status-dot inline-block" />
              Full Stack Developer · Available for Projects
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-sans font-extrabold text-[#F9FAFB] leading-[1.2] tracking-tight mb-6 text-balance"
              style={{ fontSize: "clamp(1.875rem, 3.5vw + 0.75rem, 3.25rem)" }}
            >
              Building Scalable Web Applications,{" "}
              <span className="gradient-text">
                AI Solutions &amp; Business Automation
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-2xl"
            >
              I help startups and businesses build modern software, automate
              workflows, and launch faster using React, Next.js, Node.js,
              TypeScript, and AI.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a href="#contact" className="btn-primary">
                Book a Call
                <ArrowRight size={16} />
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
                <ExternalLink size={15} />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              {trustIndicators.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <CheckCircle2 size={15} className="text-primary-light shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-xs text-muted uppercase tracking-widest font-semibold">
                Tech Stack
              </span>
              <div className="flex items-center gap-2">
                {techStack.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    title={label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center premium-card !transform-none hover:!transform-none"
                    style={{ borderRadius: "10px" }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center xl:justify-end w-full min-w-0"
          >
            <div className="relative w-full max-w-sm">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
                style={{
                  background:
                    "linear-gradient(135deg, #4F46E5, #8B5CF6)",
                }}
              />

              <div className="relative premium-card p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <LogoMark size={72} className="shrink-0" />
                  <div>
                    <h2 className="font-sans text-xl font-bold text-[#F9FAFB]">
                      {personalInfo.name}
                    </h2>
                    <p className="text-sm text-primary-light font-medium">
                      {personalInfo.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-green-400 status-dot" />
                      <span className="text-xs text-muted">Open to work</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-6">
                  Specializing in React, Next.js, TypeScript, Node.js, AI
                  Integrations, SaaS Development, and Business Automation.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Code2, label: "Full Stack" },
                    { icon: Sparkles, label: "AI Solutions" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 p-3 rounded-xl"
                      style={{
                        background: "rgba(79,70,229,0.08)",
                        border: "1px solid rgba(79,70,229,0.15)",
                      }}
                    >
                      <Icon size={16} className="text-primary-light" />
                      <span className="text-xs font-medium text-[#F9FAFB]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 premium-card px-4 py-2 !transform-none"
              >
                <span className="text-xs font-semibold text-primary-light">
                  50+ Projects
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 premium-card px-4 py-2 !transform-none"
              >
                <span className="text-xs font-semibold text-secondary-light">
                  AI & Automation
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ height: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
