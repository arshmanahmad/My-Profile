"use client";

import AnimatedCounter from "./AnimatedCounter";
import MotionReveal from "./MotionReveal";
import { StatItem } from "@/lib/data";

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section
      className="relative z-10"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(17,24,39,0.5)",
      }}
    >
      <div className="section-container !py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <MotionReveal key={stat.label} delay={i * 100}>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2 font-sans">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <div className="text-sm font-medium text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
