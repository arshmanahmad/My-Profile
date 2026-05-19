"use client";

import { useEffect, useRef } from "react";
import { Globe, Server, Brain, Gauge } from "lucide-react";
import { Skill } from "@/lib/data";

const CATEGORY_META: Record<
  Skill["category"],
  {
    label: string;
    icon: React.ElementType;
    color: string;
    bg: string;
    border: string;
    count?: string;
  }
> = {
  frontend: {
    label: "Frontend",
    icon: Globe,
    color: "#4f46e5",
    bg: "rgba(79,70,229,0.07)",
    border: "rgba(79,70,229,0.15)",
  },
  backend: {
    label: "Backend & APIs",
    icon: Server,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.07)",
    border: "rgba(99,102,241,0.15)",
  },
  ai: {
    label: "AI & Automation",
    icon: Brain,
    color: "#818cf8",
    bg: "rgba(129,140,248,0.08)",
    border: "rgba(129,140,248,0.18)",
  },
  devops: {
    label: "DevOps & Performance",
    icon: Gauge,
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.18)",
  },
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
          container
            .querySelectorAll<HTMLDivElement>(".skill-bar-fill")
            .forEach((bar) => bar.classList.add("animate"));
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const categories = (
    Object.keys(CATEGORY_META) as Skill["category"][]
  ).filter((cat) => skills.some((s) => s.category === cat));

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-6">
      {categories.map((cat) => {
        const meta = CATEGORY_META[cat];
        const Icon = meta.icon;
        const catSkills = skills.filter((s) => s.category === cat);

        return (
          <div
            key={cat}
            className="light-card p-6"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: meta.bg,
                  border: `1px solid ${meta.border}`,
                }}
              >
                <Icon size={18} style={{ color: meta.color }} />
              </div>
              <div>
                <h3
                  className="text-sm font-bold"
                  style={{ color: meta.color }}
                >
                  {meta.label}
                </h3>
                <p className="text-xs text-slate-400">
                  {catSkills.length} technologies
                </p>
              </div>
            </div>

            {/* Skill rows */}
            <div className="space-y-3.5">
              {catSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-slate-700">
                      {skill.name}
                    </span>
                    <span
                      className="text-xs font-semibold tabular-nums"
                      style={{ color: meta.color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full"
                    style={{ height: "5px", background: "#e2e8f0" }}
                  >
                    <div
                      className="skill-bar-fill h-full rounded-full"
                      style={
                        {
                          "--skill-level": `${skill.level}%`,
                          background: `linear-gradient(90deg, ${meta.color}, ${meta.color}88)`,
                          animationDuration: `${0.8 + skill.level / 200}s`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
