"use client";

import { Code2, Sparkles } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import MotionReveal from "./MotionReveal";
import { StatItem, valueProps } from "@/lib/data";

interface StatsProps {
  stats: StatItem[];
}

const valueIcons = {
  code: Code2,
  sparkles: Sparkles,
} as const;

export default function Stats({ stats }: StatsProps) {
  const highlightStats = stats.slice(0, 3);

  return (
    <section className="relative z-10" aria-label="Key statistics">
      <div className="section-container !py-10 md:!py-14">
        <MotionReveal>
          <div className="section-strip rounded-2xl px-6 py-10 md:px-10 md:py-12 mb-10 md:mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
              {highlightStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center relative ${
                    i > 0
                      ? "sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:h-12 sm:before:w-px sm:before:bg-gradient-to-b sm:before:from-transparent sm:before:via-border sm:before:to-transparent"
                      : ""
                  }`}
                >
                  <div className="font-mono text-[2.5rem] lg:text-[3.25rem] font-semibold text-primary mb-2 tracking-tight leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      startFrom={5}
                      duration={2}
                    />
                  </div>
                  <div className="label-mono text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {valueProps.map((item, i) => {
            const Icon = valueIcons[item.icon];
            return (
              <MotionReveal key={item.id} delay={i * 80}>
                <article className="premium-card p-7 md:p-8 h-full">
                  <div className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-5 icon-box">
                    <Icon
                      size={20}
                      className="text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary leading-[1.7]">
                    {item.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
