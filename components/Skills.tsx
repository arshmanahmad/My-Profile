import ScrollReveal from "./ScrollReveal";
import SkillBars from "./SkillBars";
import { Skill } from "@/lib/data";

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="relative z-10">
      {/* Subtle section divider tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(4,26,20,0.3)" }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">Skills</div>
            <h2 className="section-heading text-[#f0fdf4] mb-5">
              My <span className="gradient-text">Technical Arsenal</span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-[#f0fdf4]/58 leading-relaxed">
              A versatile stack built over 4+ years of real-world project
              delivery — from full-stack web apps to AI-driven automation
              pipelines.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill bars */}
        <ScrollReveal delay={100}>
          <SkillBars skills={skills} />
        </ScrollReveal>
      </div>
    </section>
  );
}
