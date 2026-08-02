"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import {
  directionVariants,
  staggerContainer,
  staggerFast,
  cardItem,
  transitionPremium,
  type MotionDirection,
} from "@/lib/motion";

interface MotionRevealProps {
  children: ReactNode;
  /** Delay in ms after the element enters the viewport */
  delay?: number;
  className?: string;
  direction?: MotionDirection;
  once?: boolean;
  amount?: number | "some" | "all";
}

export default function MotionReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  once = true,
  amount = 0.2,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = useMemo(() => {
    const base = directionVariants[direction] ?? directionVariants.up;
    const visible = base.visible as {
      opacity?: number;
      x?: number;
      y?: number;
      scale?: number;
      filter?: string;
      transition?: Record<string, unknown>;
    };

    return {
      hidden: base.hidden,
      visible: {
        ...visible,
        transition: {
          ...transitionPremium,
          ...(visible.transition ?? {}),
          delay: delay / 1000,
        },
      },
    };
  }, [direction, delay]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerProps {
  children: ReactNode;
  className?: string;
  fast?: boolean;
  amount?: number | "some" | "all";
  delay?: number;
}

/** Parent that staggers child MotionItems when scrolled into view */
export function MotionStagger({
  children,
  className = "",
  fast = false,
  amount = 0.15,
  delay = 0,
}: MotionStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = useMemo(() => {
    const base = fast ? staggerFast : staggerContainer;
    const visible = base.visible as { transition?: Record<string, unknown> };

    return {
      hidden: base.hidden,
      visible: {
        transition: {
          ...(visible.transition ?? {}),
          delayChildren: (delay / 1000) + (fast ? 0.04 : 0.06),
        },
      },
    };
  }, [fast, delay]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

interface MotionItemProps {
  children: ReactNode;
  className?: string;
}

/** Child of MotionStagger — fades/slides up with the stagger */
export function MotionItem({ children, className = "" }: MotionItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={cardItem}>
      {children}
    </motion.div>
  );
}
