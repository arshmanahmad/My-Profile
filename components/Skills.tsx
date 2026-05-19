import ScrollReveal from "./ScrollReveal";
import SkillBars from "./SkillBars";
import { Skill } from "@/lib/data";

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="relative z-10"
      style={{ background: "#f8fafc" }}
    >
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">Skills</div>
            <h2 className="section-heading text-slate-900 mb-5">
              Our <span className="gradient-text">Technical Arsenal</span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-slate-500 leading-relaxed">
              A versatile, battle-tested stack built across 4+ years of
              real-world delivery — from full-stack web apps to AI-driven
              automation pipelines.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill category cards with animated bars */}
        <ScrollReveal delay={80}>
          <SkillBars skills={skills} />
        </ScrollReveal>
      </div>
    </section>
  );
}
