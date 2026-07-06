"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number;
    const handleMouse = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-page-gradient" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 5%, rgba(142,184,232,0.08) 0%, transparent 65%)",
        }}
      />

      <div
        className="gradient-orb absolute"
        style={{
          top: "18%",
          left: "-10%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(140,154,176,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="gradient-orb absolute"
        style={{
          top: "35%",
          right: "-10%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(142,184,232,0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
          animationDelay: "-8s",
        }}
      />

      {!prefersReducedMotion && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(142,184,232,0.04) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: mousePos.x - 160,
            y: mousePos.y - 160,
          }}
          transition={{ type: "spring", damping: 35, stiffness: 120, mass: 0.8 }}
        />
      )}

      <div
        className="absolute top-0 left-0 w-40 h-40 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(184,212,240,0.5) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse at top left, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top left, black 20%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-40 h-40 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(184,212,240,0.4) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(ellipse at bottom right, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at bottom right, black 20%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(140,154,176,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(140,154,176,0.4) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
