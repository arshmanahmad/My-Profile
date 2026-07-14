"use client";

import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Search,
  Map,
  Code2,
  TestTube2,
  Rocket,
  LifeBuoy,
  LucideIcon,
} from "lucide-react";
import MotionReveal from "./MotionReveal";
import { ProcessStep } from "@/lib/data";

const stepIcons: LucideIcon[] = [
  Search,
  Map,
  Code2,
  TestTube2,
  Rocket,
  LifeBuoy,
];

const EASE = [0.16, 1, 0.3, 1] as const;

interface WorkProcessProps {
  steps: ProcessStep[];
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function progressToIndex(progress: number, count: number) {
  if (count <= 1) return 0;
  return Math.min(
    count - 1,
    Math.max(0, Math.round(progress * (count - 1)))
  );
}

export default function WorkProcess({ steps }: WorkProcessProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollingToStep = useRef(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const usePinnedScrub = mounted && isDesktop && !prefersReducedMotion;

  // Native scroll tracking — more reliable than useScroll with conditional mount
  useEffect(() => {
    if (!usePinnedScrub) return;

    const onScroll = () => {
      const el = containerRef.current;
      if (!el || scrollingToStep.current) return;

      const rect = el.getBoundingClientRect();
      const track = el.offsetHeight - window.innerHeight;
      if (track <= 0) return;

      const scrolled = Math.min(track, Math.max(0, -rect.top));
      const next = scrolled / track;
      setProgress(next);
      setActive(progressToIndex(next, steps.length));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [usePinnedScrub, steps.length]);

  const scrollToStep = useCallback(
    (index: number) => {
      const el = containerRef.current;
      if (!el || !usePinnedScrub) {
        setActive(index);
        return;
      }

      const rect = el.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const track = el.offsetHeight - window.innerHeight;
      const targetProgress =
        steps.length <= 1 ? 0 : index / (steps.length - 1);
      const top = start + track * targetProgress;

      scrollingToStep.current = true;
      setActive(index);
      setProgress(targetProgress);
      window.scrollTo({ top, behavior: "smooth" });

      window.setTimeout(() => {
        scrollingToStep.current = false;
      }, 800);
    },
    [usePinnedScrub, steps.length]
  );

  const current = useMemo(() => steps[active] ?? steps[0], [steps, active]);
  const CurrentIcon = stepIcons[active] ?? Search;

  const scrubUi = (
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center w-full">
      <div>
        <div className="section-badge mb-5">Work Process</div>
        <h2 className="section-heading mb-4 !text-left">
          How We Bring <span className="text-primary">Ideas to Life</span>
        </h2>
        <p className="section-subtext mb-8 lg:mb-10">
          Transparent workflow from first conversation to long-term support.
        </p>

        <div className="relative pl-1">
          <div
            className="absolute left-[15px] top-3 bottom-3 w-px bg-border"
            aria-hidden="true"
          />
          <div
            className="absolute left-[15px] top-3 w-px bg-primary origin-top transition-[height] duration-150 ease-out"
            style={{
              height: usePinnedScrub
                ? `${Math.max(0, Math.min(100, progress * 100))}%`
                : `${((active + 1) / steps.length) * 100}%`,
            }}
            aria-hidden="true"
          />

          <ol className="relative space-y-0.5">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.step}>
                  <button
                    type="button"
                    onClick={() =>
                      usePinnedScrub ? scrollToStep(i) : setActive(i)
                    }
                    className={`w-full flex items-center gap-4 py-2.5 text-left transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-secondary"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-xs font-mono font-semibold border transition-all duration-300 ${
                        isActive
                          ? "bg-primary/15 border-primary text-primary scale-105"
                          : "bg-background border-border text-muted"
                      }`}
                    >
                      {pad(step.step)}
                    </span>
                    <span
                      className={`font-display text-base font-semibold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-primary" : ""
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="relative min-h-[300px] lg:min-h-[340px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.article
            key={current.step}
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              prefersReducedMotion ? undefined : { opacity: 0, y: -16 }
            }
            transition={{ duration: 0.4, ease: EASE }}
            className="premium-card-static p-8 md:p-10 absolute inset-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-[12px] flex items-center justify-center icon-box">
                <CurrentIcon
                  size={20}
                  className="text-primary"
                  strokeWidth={1.75}
                />
              </div>
              <span className="label-mono text-primary">
                Phase {pad(current.step)}
              </span>
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4 tracking-tight">
              {current.title}
            </h3>
            <p className="text-base text-secondary leading-[1.75] max-w-xl">
              {current.description}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );

  if (usePinnedScrub) {
    return (
      <section id="process" className="relative z-10 section-alt">
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${100 + steps.length * 70}vh` }}
        >
          <div className="sticky top-0 h-screen flex items-center">
            <div className="section-container !py-0 w-full">{scrubUi}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="process" className="relative z-10 section-alt">
      <div className="section-container">
        <MotionReveal>{scrubUi}</MotionReveal>
      </div>
    </section>
  );
}
