"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  drift: number;
  opacity: number;
}

// Pre-generated particle data so server + client render match (avoids hydration mismatch)
const PARTICLES: Particle[] = [
  { x: 8, y: 20, size: 2, speed: 14, delay: 0, drift: 40, opacity: 0.6 },
  { x: 15, y: 55, size: 1.5, speed: 18, delay: 2, drift: -30, opacity: 0.5 },
  { x: 22, y: 80, size: 2.5, speed: 12, delay: 5, drift: 55, opacity: 0.7 },
  { x: 30, y: 10, size: 1, speed: 20, delay: 1, drift: 25, opacity: 0.4 },
  { x: 38, y: 45, size: 2, speed: 16, delay: 7, drift: -45, opacity: 0.6 },
  { x: 44, y: 70, size: 1.5, speed: 13, delay: 3, drift: 60, opacity: 0.5 },
  { x: 52, y: 30, size: 3, speed: 11, delay: 9, drift: -20, opacity: 0.35 },
  { x: 58, y: 90, size: 1.5, speed: 17, delay: 4, drift: 35, opacity: 0.55 },
  { x: 65, y: 15, size: 2, speed: 15, delay: 6, drift: -50, opacity: 0.6 },
  { x: 72, y: 60, size: 1, speed: 19, delay: 0.5, drift: 45, opacity: 0.45 },
  { x: 78, y: 35, size: 2.5, speed: 12, delay: 8, drift: -35, opacity: 0.65 },
  { x: 85, y: 75, size: 1.5, speed: 14, delay: 2.5, drift: 20, opacity: 0.5 },
  { x: 91, y: 50, size: 2, speed: 16, delay: 11, drift: -55, opacity: 0.55 },
  { x: 5, y: 65, size: 1, speed: 21, delay: 6.5, drift: 30, opacity: 0.4 },
  { x: 18, y: 85, size: 2, speed: 13, delay: 3.5, drift: -25, opacity: 0.6 },
  { x: 27, y: 25, size: 1.5, speed: 18, delay: 10, drift: 50, opacity: 0.5 },
  { x: 48, y: 5, size: 2.5, speed: 10, delay: 1.5, drift: -40, opacity: 0.7 },
  { x: 60, y: 42, size: 1, speed: 22, delay: 7.5, drift: 65, opacity: 0.4 },
  { x: 75, y: 95, size: 2, speed: 14, delay: 4.5, drift: -30, opacity: 0.55 },
  { x: 88, y: 18, size: 1.5, speed: 17, delay: 9.5, drift: 45, opacity: 0.5 },
  { x: 33, y: 62, size: 2, speed: 15, delay: 12, drift: -60, opacity: 0.45 },
  { x: 42, y: 88, size: 1, speed: 20, delay: 0.8, drift: 35, opacity: 0.4 },
  { x: 55, y: 22, size: 2.5, speed: 11, delay: 5.5, drift: -15, opacity: 0.6 },
  { x: 68, y: 48, size: 1.5, speed: 16, delay: 13, drift: 55, opacity: 0.5 },
];

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Base ocean gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #010806 0%, #020d0b 25%, #031510 55%, #041a14 80%, #020d0b 100%)",
        }}
      />

      {/* 2. Ocean rays */}
      <div className="absolute inset-0">
        {[
          { left: "12%", rotate: "-18deg", delay: "0s", width: "260px" },
          { left: "32%", rotate: "-12deg", delay: "-5s", width: "200px" },
          { left: "56%", rotate: "-7deg", delay: "-10s", width: "240px" },
          { left: "78%", rotate: "-4deg", delay: "-3s", width: "180px" },
        ].map((ray, i) => (
          <div
            key={i}
            className="ocean-ray"
            style={{
              left: ray.left,
              transform: `rotate(${ray.rotate})`,
              animationDelay: ray.delay,
              width: ray.width,
            }}
          />
        ))}
      </div>

      {/* 3. Depth fog blobs */}
      <div
        className="absolute"
        style={{
          top: "15%",
          left: "10%",
          width: "600px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(16, 217, 160, 0.04)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "20%",
          right: "8%",
          width: "500px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(245, 158, 11, 0.03)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "55%",
          left: "45%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(16, 217, 160, 0.025)",
          filter: "blur(80px)",
        }}
      />

      {/* 4. Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: `-5%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(16, 217, 160, ${p.opacity})`,
            animation: `particleRise ${p.speed}s linear ${p.delay}s infinite`,
            "--drift-x": `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* 5. Film grain overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
