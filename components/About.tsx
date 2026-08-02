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
import MotionReveal, { MotionStagger, MotionItem } from "./MotionReveal";
import { TeamPanel } from "./TeamPresence";
import { brandAssets, personalInfo } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

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
  { icon: BadgeCheck, label: "Lead + Specialist Team" },
  { icon: Clock, label: "Quick Response Time" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 section-alt">
      <div className="section-container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <MotionReveal direction="right">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: EASE_PREMIUM }}
              className="premium-card-static overflow-hidden max-w-md mx-auto lg:mx-0"
            >
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
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.15 }}
                  className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-surface mx-auto mb-4 shadow-profile"
                >
                  <Image
                    src={brandAssets.profilePicture}
                    alt={personalInfo.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="label-mono text-primary mt-2">
                    {personalInfo.titleExtended}
                  </p>
                  <p className="text-xs text-muted mt-2">
                    ARSHMANDEV · Lead of the delivery team
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {metaItems.map(({ icon: Icon, label }, i) => (
                    <motion.li
                      key={label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 + i * 0.08,
                        duration: 0.45,
                        ease: EASE_PREMIUM,
                      }}
                      className="flex items-center gap-3 text-sm text-secondary"
                    >
                      <Icon size={15} className="text-primary shrink-0" />
                      {label}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex items-center justify-center gap-3">
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ y: -2, scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </MotionReveal>

          <MotionReveal delay={100} direction="left">
            <div>
              <div className="section-badge mb-5">About</div>
              <h2 className="section-heading mb-6 !text-left">
                A focused team built for delivery
              </h2>
              <p className="text-base text-secondary leading-[1.75] mb-4 max-w-xl">
                {personalInfo.about}
              </p>
              <p className="text-base text-secondary leading-[1.75] mb-8 max-w-xl">
                You work directly with the lead engineer, supported by specialists
                across frontend, backend, AI, and QA, so projects move faster
                without losing quality or ownership.
              </p>

              <p className="label-mono text-muted mb-4">
                Core technologies
              </p>
              <MotionStagger
                fast
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4"
              >
                {techIcons.map(({ icon: Icon, label, color }) => (
                  <MotionItem key={label}>
                    <motion.div
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                      className="flex items-center gap-2.5 px-3.5 py-3 rounded-[12px] border border-border-subtle bg-surface"
                    >
                      <Icon size={16} style={{ color }} />
                      <span className="text-sm font-medium text-foreground">
                        {label}
                      </span>
                    </motion.div>
                  </MotionItem>
                ))}
              </MotionStagger>

              <TeamPanel />

              <MotionStagger
                fast
                className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-border-subtle"
              >
                {[
                  { value: "05+", label: "Years Experience" },
                  { value: "50+", label: "Projects Completed" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((m) => (
                  <MotionItem key={m.label}>
                    <div>
                      <div className="font-mono text-2xl md:text-3xl font-semibold text-primary mb-1">
                        {m.value}
                      </div>
                      <div className="label-mono text-muted !text-[0.6rem]">
                        {m.label}
                      </div>
                    </div>
                  </MotionItem>
                ))}
              </MotionStagger>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
