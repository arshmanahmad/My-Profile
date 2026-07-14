"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Clock, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiMongodb,
} from "react-icons/si";
import MotionReveal from "./MotionReveal";
import { brandAssets, personalInfo } from "@/lib/data";

const techIcons = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#F0F4FA" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, label: "Node.js", color: "#22C55E" },
  { icon: SiPython, label: "Python", color: "#FFD43B" },
  { icon: SiMongodb, label: "MongoDB", color: "#4DB33D" },
];

const metaItems = [
  { icon: MapPin, label: "Remote / Worldwide" },
  { icon: BadgeCheck, label: "Result-Focused Specialist" },
  { icon: Clock, label: "Quick Response Time" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 section-alt">
      <div className="section-container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <MotionReveal direction="right">
            <div className="premium-card-static overflow-hidden max-w-md mx-auto lg:mx-0">
              <div className="relative h-32">
                <Image
                  src={brandAssets.banner}
                  alt="ARSHMANDEV banner"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="px-7 pb-7 -mt-12 relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-surface mx-auto mb-4 shadow-profile">
                  <Image
                    src={brandAssets.profilePicture}
                    alt={personalInfo.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="label-mono text-primary mt-2">
                    {personalInfo.titleExtended}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {metaItems.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 text-sm text-secondary"
                    >
                      <Icon size={15} className="text-primary shrink-0" />
                      {label}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={100}>
            <div>
              <div className="section-badge mb-5">About Me</div>
              <h2 className="section-heading mb-6 !text-left">
                Full Stack Developer Focused on Results
              </h2>
              <p className="text-base text-secondary leading-[1.75] mb-4 max-w-xl">
                {personalInfo.about}
              </p>
              <p className="text-base text-secondary leading-[1.75] mb-8 max-w-xl">
                With expertise in React, Next.js, TypeScript, Node.js, and AI
                integrations, I partner with startups and business owners to
                turn complex requirements into clean, maintainable software.
              </p>

              <p className="label-mono text-muted mb-4">
                Technologies I Work With
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {techIcons.map(({ icon: Icon, label, color }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2.5 px-3.5 py-3 rounded-[12px] border border-border-subtle bg-surface"
                  >
                    <Icon size={16} style={{ color }} />
                    <span className="text-sm font-medium text-foreground">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-subtle">
                {[
                  { value: "05+", label: "Years Experience" },
                  { value: "50+", label: "Projects Completed" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-2xl md:text-3xl font-semibold text-primary mb-1">
                      {m.value}
                    </div>
                    <div className="label-mono text-muted !text-[0.6rem]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
