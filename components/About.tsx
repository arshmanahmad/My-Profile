"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

export default function About() {
  return (
    <section id="about" className="relative z-10">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center [&>*]:min-w-0">
          <MotionReveal direction="right">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div
                className="absolute -inset-3 rounded-[28px] opacity-30 blur-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(110,143,173,0.08) 0%, transparent 70%)",
                }}
              />
              <div className="premium-card-static overflow-hidden shadow-profile relative">
                <div className="relative h-28 sm:h-32">
                  <Image
                    src={brandAssets.banner}
                    alt="ARSHMANDEV banner"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
                </div>
                <div className="p-7 pt-0">
                  <div className="relative -mt-12 mb-5">
                    <div className="w-24 h-24 rounded-[18px] overflow-hidden border-[3px] border-surface-muted shadow-profile">
                      <Image
                        src={brandAssets.profilePicture}
                        alt={personalInfo.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <p className="text-[0.6875rem] font-semibold tracking-[0.15em] text-primary-light uppercase mb-2">
                    {personalInfo.brandTagline}
                  </p>
                  <h3 className="font-sans text-xl font-semibold text-foreground mb-1 tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={100}>
            <div>
              <div className="section-badge mb-5">About Me</div>
              <h2 className="section-heading mb-6 !text-left">
                Full Stack Developer{" "}
                <span className="gradient-text">Focused on Results</span>
              </h2>
              <p className="text-base text-muted leading-[1.75] mb-5 max-w-lg">
                I&apos;m a Full Stack Developer focused on building scalable
                digital products, business automation systems, and AI-powered
                solutions. My goal is to help businesses launch faster, operate
                efficiently, and grow through modern technology.
              </p>
              <p className="text-base text-muted leading-[1.75] mb-8 max-w-lg">
                With expertise in React, Next.js, TypeScript, Node.js, and AI
                integrations, I partner with startups and business owners to
                turn complex requirements into clean, maintainable software
                that delivers real value.
              </p>

              <div>
                <p className="text-[0.6875rem] font-semibold text-muted uppercase tracking-[0.12em] mb-4">
                  Technologies I Work With
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {techIcons.map(({ icon: Icon, label, color }) => (
                    <motion.div
                      key={label}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[12px] icon-box"
                    >
                      <Icon size={15} style={{ color }} />
                      <span className="text-xs font-medium text-muted">
                        {label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
