"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface MotionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionOffset = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function MotionReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const [show, setShow] = useState(false);
  const offset = directionOffset[direction];

  useEffect(() => {
    if (isInView) {
      const t = window.setTimeout(() => setShow(true), delay);
      return () => window.clearTimeout(t);
    }
  }, [isInView, delay]);

  // Safety: never leave content invisible if IO never fires
  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 2000 + delay);
    return () => window.clearTimeout(t);
  }, [delay]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        show
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
