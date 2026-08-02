"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  CalendarCheck2,
} from "lucide-react";
import { personalInfo as PersonalInfo, brandAssets } from "@/lib/data";
import { TeamAvatarStack } from "./TeamPresence";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

interface HeroProps {
  personalInfo: typeof PersonalInfo;
}

const trustStrip = [
  { icon: CheckCircle2, label: "5+ Years Experience" },
  { icon: Rocket, label: "50+ Projects Delivered" },
  { icon: CalendarCheck2, label: "Team Available" },
];

const floatingTech = [
  { icon: SiReact, label: "React", color: "#61DAFB", className: "left-[-4%] top-[58%]" },
  { icon: SiNextdotjs, label: "Next.js", color: "#F3F6FA", className: "left-[6%] bottom-[8%]" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6", className: "right-[-2%] top-[42%]" },
  { icon: SiNodedotjs, label: "Node.js", color: "#22C55E", className: "right-[4%] bottom-[12%]" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function Hero({ personalInfo }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-8"
    >
      <div className="section-container relative z-10 w-full !pt-4 !pb-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full min-w-0"
          >
            <motion.div variants={itemVariants} className="section-badge mb-7">
              {personalInfo.brandTagline}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="hero-heading text-foreground mb-6 text-balance"
            >
              <span className="sr-only">{personalInfo.brandName}: </span>
              Web &amp; App Development Services for{" "}
              <span className="text-primary">Scalable Software,</span> AI &amp;
              Business Automation
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-secondary leading-[1.75] mb-9 max-w-xl"
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                Book a Call
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-outline"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TeamAvatarStack />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            className="relative flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-[420px]">
              <motion.div
                className="absolute -inset-6 rounded-[28px] border border-white/10 pointer-events-none"
                aria-hidden="true"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: [0.4, 0.85, 0.4] }
                }
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="absolute -right-3 -bottom-3 w-[88%] h-[88%] rounded-[22px] border border-primary/25 pointer-events-none"
                aria-hidden="true"
              />

              <motion.div
                whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative rounded-[22px] overflow-hidden border border-primary/30 shadow-profile aspect-[4/5] bg-surface"
              >
                <Image
                  src={brandAssets.profilePicture}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

                <motion.div
                  className="absolute top-4 right-4 tech-pill !gap-2 !py-1.5"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.5, ease: EASE }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot" />
                  <span className="label-mono !text-[0.625rem] !tracking-[0.1em] text-emerald-300">
                    Open to Work
                  </span>
                </motion.div>
              </motion.div>

              {!prefersReducedMotion &&
                floatingTech.map(({ icon: Icon, label, color, className }, i) => (
                  <motion.div
                    key={label}
                    className={`absolute z-10 tech-pill ${className}`}
                    animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                    transition={{
                      duration: 4.5 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    <Icon size={14} style={{ color }} />
                    {label}
                  </motion.div>
                ))}

              {prefersReducedMotion &&
                floatingTech.map(({ icon: Icon, label, color, className }) => (
                  <div key={label} className={`absolute z-10 tech-pill ${className}`}>
                    <Icon size={14} style={{ color }} />
                    {label}
                  </div>
                ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.85 },
            },
          }}
          className="mt-14 md:mt-16 pt-6 border-t border-border-subtle"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {trustStrip.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="trust-strip-item"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: EASE },
                  },
                }}
              >
                <Icon size={14} className="text-primary shrink-0" />
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
