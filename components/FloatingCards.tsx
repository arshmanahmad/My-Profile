"use client";

import { SiReact, SiNodedotjs, SiPython, SiDocker, SiNextdotjs, SiMongodb } from "react-icons/si";
import { CheckCircle, TrendingUp, Zap } from "lucide-react";

const techStack = [
  { icon: SiReact, label: "React", color: "#61dafb" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiNodedotjs, label: "Node.js", color: "#84cc16" },
  { icon: SiPython, label: "Python", color: "#fbbf24" },
  { icon: SiDocker, label: "Docker", color: "#38bdf8" },
  { icon: SiMongodb, label: "MongoDB", color: "#4ade80" },
];

export default function FloatingCards() {
  return (
    <div className="relative w-full h-full min-h-[420px]">
      {/* Card 1: Availability status — top right */}
      <div
        className="float-card-1 glass-card absolute p-4 w-52"
        style={{ top: "0px", right: "0px" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{
              background: "#10d9a0",
              boxShadow: "0 0 8px rgba(16, 217, 160, 0.8)",
              animation: "glowPulse 2s ease-in-out infinite",
            }}
          />
          <span className="text-xs font-semibold" style={{ color: "#10d9a0" }}>
            Available for Work
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle size={11} style={{ color: "#10d9a0" }} />
            <span className="text-xs text-[#f0fdf4]/70">Full-Stack Dev</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={11} style={{ color: "#10d9a0" }} />
            <span className="text-xs text-[#f0fdf4]/70">AI &amp; Automation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={11} style={{ color: "#10d9a0" }} />
            <span className="text-xs text-[#f0fdf4]/70">Payment Integrations</span>
          </div>
        </div>
        <div
          className="mt-3 pt-2.5 text-[10px] text-[#f0fdf4]/40"
          style={{ borderTop: "1px solid rgba(16,217,160,0.12)" }}
        >
          Response time: ~2 hours
        </div>
      </div>

      {/* Card 2: Tech stack — center left */}
      <div
        className="float-card-2 glass-card absolute p-4 w-52"
        style={{ top: "140px", left: "0px" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Zap size={12} style={{ color: "#f59e0b" }} />
          <span
            className="text-xs font-semibold"
            style={{ color: "#f59e0b" }}
          >
            Tech Stack
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {techStack.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 rounded-lg p-1.5"
              style={{ background: "rgba(16,217,160,0.05)" }}
            >
              <Icon size={16} style={{ color }} />
              <span className="text-[9px] text-[#f0fdf4]/55 font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 3: Achievement — bottom right */}
      <div
        className="float-card-3 glass-card absolute p-4 w-48"
        style={{ bottom: "0px", right: "20px" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={13} style={{ color: "#10d9a0" }} />
          <span className="text-xs font-semibold text-[#f0fdf4]/70">
            Portfolio
          </span>
        </div>
        <div
          className="text-3xl font-extrabold gradient-text leading-none"
        >
          100+
        </div>
        <div className="text-[11px] text-[#f0fdf4]/55 mt-0.5">
          Projects Delivered
        </div>
        <div
          className="mt-3 w-full rounded-full"
          style={{
            height: "4px",
            background: "rgba(16,217,160,0.15)",
          }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: "100%",
              background: "linear-gradient(90deg, #10d9a0, #4de9b7)",
            }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-[#f0fdf4]/40 mt-1">
          <span>On-time delivery</span>
          <span style={{ color: "#10d9a0" }}>100%</span>
        </div>
      </div>
    </div>
  );
}
