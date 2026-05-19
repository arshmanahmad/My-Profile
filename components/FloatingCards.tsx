"use client";

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { CheckCircle, TrendingUp, Zap } from "lucide-react";

const techStack = [
  { icon: SiReact, label: "React", color: "#61dafb" },
  { icon: SiNextdotjs, label: "Next.js", color: "#0f172a" },
  { icon: SiNodedotjs, label: "Node.js", color: "#16a34a" },
  { icon: SiPython, label: "Python", color: "#4f46e5" },
  { icon: SiDocker, label: "Docker", color: "#0ea5e9" },
  { icon: SiMongodb, label: "MongoDB", color: "#22c55e" },
];

const cardBase = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "14px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
};

export default function FloatingCards() {
  return (
    <div className="relative w-full h-full min-h-[420px]">
      {/* Card 1: Availability — top right */}
      <div
        className="float-card-1 absolute p-4 w-52"
        style={{ ...cardBase, top: "0px", right: "0px" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{
              background: "#4f46e5",
              animation: "statusPulse 2s ease-in-out infinite",
            }}
          />
          <span className="text-xs font-semibold" style={{ color: "#4f46e5" }}>
            Available for Work
          </span>
        </div>
        <div className="space-y-2">
          {["Full-Stack Dev", "AI & Automation", "Payment Integrations"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={11} style={{ color: "#4f46e5" }} />
                <span className="text-xs text-slate-500">{item}</span>
              </div>
            )
          )}
        </div>
        <div
          className="mt-3 pt-2.5 text-[10px] text-slate-400"
          style={{ borderTop: "1px solid #f1f5f9" }}
        >
          Response time: ~2 hours
        </div>
      </div>

      {/* Card 2: Tech stack — center left */}
      <div
        className="float-card-2 absolute p-4 w-52"
        style={{ ...cardBase, top: "140px", left: "0px" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Zap size={12} style={{ color: "#6366f1" }} />
          <span className="text-xs font-semibold" style={{ color: "#6366f1" }}>
            Tech Stack
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {techStack.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 rounded-lg p-1.5"
              style={{ background: "rgba(79,70,229,0.04)" }}
            >
              <Icon size={16} style={{ color }} />
              <span className="text-[9px] text-slate-500 font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 3: Achievement — bottom right */}
      <div
        className="float-card-3 absolute p-4 w-48"
        style={{ ...cardBase, bottom: "0px", right: "20px" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={13} style={{ color: "#4f46e5" }} />
          <span className="text-xs font-semibold text-slate-500">
            Portfolio
          </span>
        </div>
        <div className="text-3xl font-extrabold gradient-text leading-none">
          100+
        </div>
        <div className="text-[11px] text-slate-400 mt-0.5">
          Projects Delivered
        </div>
        <div
          className="mt-3 w-full rounded-full"
          style={{ height: "4px", background: "#e2e8f0" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: "100%",
              background: "linear-gradient(90deg, #4f46e5, #818cf8)",
            }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
          <span>On-time delivery</span>
          <span style={{ color: "#4f46e5" }}>100%</span>
        </div>
      </div>
    </div>
  );
}
