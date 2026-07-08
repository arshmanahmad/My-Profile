"use client";

import { motion } from "framer-motion";
import MotionReveal from "./MotionReveal";
import { ProcessStep } from "@/lib/data";

interface WorkProcessProps {
  steps: ProcessStep[];
}

export default function WorkProcess({ steps }: WorkProcessProps) {
  return (
    <section id="process" className="relative z-10">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header">
            <div className="section-badge mx-auto w-fit">Work Process</div>
            <h2 className="section-heading">
              How We{" "}
              <span className="gradient-text">Bring Ideas to Life</span>
            </h2>
            <p className="section-subtext">
              A proven, transparent workflow from first conversation to
              long-term support.
            </p>
          </div>
        </MotionReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-[2.25rem] left-[8%] right-[8%] h-px divider-gradient" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {steps.map((step, i) => (
              <MotionReveal key={step.step} delay={i * 70}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="premium-card p-6 md:p-7 h-full relative group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative shrink-0">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-background font-sans shadow-button transition-transform duration-400 group-hover:scale-105"
                        style={{
                          background:
                            "linear-gradient(135deg, #91AEC8, #6E8FAD, #4F6F8C)",
                        }}
                      >
                        {step.step}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="hidden lg:block absolute top-1/2 -right-[calc(50%+1.5rem)] w-[calc(100%+2rem)] h-px -translate-y-1/2 opacity-0"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-[0.9375rem] font-semibold text-foreground font-sans tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted leading-[1.65]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="h-px w-0 group-hover:w-full transition-all duration-700 ease-premium rounded-full mt-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #6E8FAD, rgba(145,174,200,0.3))",
                    }}
                  />
                </motion.div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
