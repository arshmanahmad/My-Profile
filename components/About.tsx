"use client";

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

const techIcons = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#F9FAFB" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, label: "Node.js", color: "#22C55E" },
  { icon: SiPython, label: "Python", color: "#FFD43B" },
  { icon: SiMongodb, label: "MongoDB", color: "#4DB33D" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10"
      style={{ background: "rgba(17,24,39,0.4)" }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center [&>*]:min-w-0">
          <MotionReveal>
            <div>
              <div className="section-badge mb-4">About Me</div>
              <h2 className="section-heading text-[#F9FAFB] mb-6">
                Full Stack Developer{" "}
                <span className="gradient-text">Focused on Results</span>
              </h2>
              <p className="text-base text-muted leading-relaxed mb-6">
                I&apos;m a Full Stack Developer focused on building scalable
                digital products, business automation systems, and AI-powered
                solutions. My goal is to help businesses launch faster, operate
                efficiently, and grow through modern technology.
              </p>
              <p className="text-base text-muted leading-relaxed mb-8">
                With expertise in React, Next.js, TypeScript, Node.js, and AI
                integrations, I partner with startups and business owners to
                turn complex requirements into clean, maintainable software
                that delivers real value.
              </p>

              <div className="flex flex-wrap gap-3">
                {techIcons.map(({ icon: Icon, label, color }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl premium-card !transform-none hover:!transform-none"
                    style={{ borderRadius: "10px" }}
                  >
                    <Icon size={15} style={{ color }} />
                    <span className="text-xs font-medium text-muted">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "5+",
                  label: "Years Experience",
                  gradient: "from-primary to-primary-light",
                },
                {
                  value: "50+",
                  label: "Projects Completed",
                  gradient: "from-secondary to-secondary-light",
                },
                {
                  value: "AI",
                  label: "Integration Expert",
                  gradient: "from-cyan-500 to-blue-500",
                },
                {
                  value: "100%",
                  label: "Client Focused",
                  gradient: "from-green-500 to-emerald-400",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="premium-card p-6 text-center"
                >
                  <div
                    className={`text-3xl font-extrabold font-sans mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                  >
                    {item.value}
                  </div>
                  <div className="text-xs text-muted font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
