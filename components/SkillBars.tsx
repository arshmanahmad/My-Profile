"use client";

import { useEffect, useRef } from "react";
import { Skill } from "@/lib/data";

const CATEGORY_LABELS: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend & APIs",
  ai: "AI & Automation",
  devops: "DevOps & Performance",
};

const CATEGORY_COLORS: Record<Skill["category"], string> = {
  frontend: "#00c8ff",
  backend: "#66d9ff",
  ai: "#7c3aed",
  devops: "#a78bfa",
};

interface SkillBarsProps {
  skills: Skill[];
}

export default function SkillBars({ skills }: SkillBarsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const bars =
            container.querySelectorAll<HTMLDivElement>(".skill-bar-fill");
          bars.forEach((bar) => bar.classList.add("animate"));
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const categories = (
    Object.keys(CATEGORY_LABELS) as Skill["category"][]
  ).filter((cat) => skills.some((s) => s.category === cat));

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-10">
      {categories.map((cat) => (
        <div key={cat}>
          <div className="flex items-center gap-2 mb-5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: CATEGORY_COLORS[cat] }}
            />
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: CATEGORY_COLORS[cat] }}
            >
              {CATEGORY_LABELS[cat]}
            </h3>
          </div>
          <div className="space-y-4">
            {skills
              .filter((s) => s.category === cat)
              .map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-[#e0f2ff]/85">
                      {skill.name}
                    </span>
                    <span
                      className="text-xs font-semibold tabular-nums"
                      style={{ color: CATEGORY_COLORS[cat] }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full"
                    style={{
                      height: "6px",
                      background: "rgba(0,200,255,0.1)",
                    }}
                  >
                    <div
                      className="skill-bar-fill h-full rounded-full"
                      style={
                        {
                          "--skill-level": `${skill.level}%`,
                          background: `linear-gradient(90deg, ${CATEGORY_COLORS[cat]}, ${CATEGORY_COLORS[cat]}cc)`,
                          animationDuration: `${0.8 + skill.level / 200}s`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
