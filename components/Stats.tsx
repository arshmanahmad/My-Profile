"use client";

import AnimatedCounter from "./AnimatedCounter";
import MotionReveal from "./MotionReveal";
import { StatItem } from "@/lib/data";

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="relative z-10 section-strip" aria-label="Key statistics">
      <div className="section-container !py-14 md:!py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-8">
          {stats.map((stat, i) => (
            <MotionReveal key={stat.label} delay={i * 80}>
              <div
                className={`text-center group relative ${
                  i > 0 ? "md:before:absolute md:before:-left-4 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-10 md:before:w-px md:before:bg-gradient-to-b md:before:from-transparent md:before:via-border md:before:to-transparent" : ""
                }`}
              >
                <div className="text-[2.5rem] lg:text-[3rem] font-bold gradient-text mb-2 font-sans tracking-tight leading-none">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    startFrom={5}
                    duration={2}
                  />
                </div>
                <div className="text-xs font-medium text-muted uppercase tracking-[0.12em]">
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
