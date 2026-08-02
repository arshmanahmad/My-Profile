import type { Transition, Variants } from "framer-motion";

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const;

export const transitionPremium: Transition = {
  duration: 0.75,
  ease: EASE_PREMIUM,
};

export const transitionFast: Transition = {
  duration: 0.45,
  ease: EASE_PREMIUM,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transitionPremium,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: transitionPremium,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: transitionPremium,
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: transitionPremium,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const cardItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: transitionPremium,
  },
};

export const directionVariants = {
  up: fadeUp,
  down: {
    hidden: { opacity: 0, y: -36, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: transitionPremium,
    },
  },
  left: fadeLeft,
  right: fadeRight,
  none: fadeScale,
  scale: fadeScale,
} as const;

export type MotionDirection = keyof typeof directionVariants;
