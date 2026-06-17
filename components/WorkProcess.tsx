"use client";

import { motion } from "framer-motion";
import MotionReveal from "./MotionReveal";
import { ProcessStep } from "@/lib/data";

interface WorkProcessProps {
  steps: ProcessStep[];
}

export default function WorkProcess({ steps }: WorkProcessProps) {
  return (
    <section
      id="process"
      className="relative z-10"
      style={{ background: "rgba(17,24,39,0.4)" }}
    >
      <div className="section-container">
        <MotionReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">Work Process</div>
            <h2 className="section-heading text-[#F9FAFB] mb-5">
              How We{" "}
              <span className="gradient-text">Bring Ideas to Life</span>
            </h2>
            <p className="section-subtext text-base text-muted leading-relaxed">
              A proven, transparent workflow from first conversation to
              long-term support.
            </p>
          </div>
        </MotionReveal>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(79,70,229,0.4), rgba(139,92,246,0.4), transparent)",
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <MotionReveal key={step.step} delay={i * 80}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="premium-card p-6 h-full relative"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 font-sans"
                      style={{
                        background:
                          "linear-gradient(135deg, #4F46E5, #8B5CF6)",
                      }}
                    >
                      {step.step}
                    </div>
                    <h3 className="text-base font-bold text-[#F9FAFB] font-sans">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
