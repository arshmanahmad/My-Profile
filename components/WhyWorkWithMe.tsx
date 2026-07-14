"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Code2,
  Layers,
  Target,
  Gauge,
  Shield,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import MotionReveal from "./MotionReveal";
import { WhyItem } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  message: MessageSquare,
  code: Code2,
  layers: Layers,
  target: Target,
  gauge: Gauge,
  shield: Shield,
};

interface WhyWorkWithMeProps {
  items: WhyItem[];
}

export default function WhyWorkWithMe({ items }: WhyWorkWithMeProps) {
  return (
    <section id="why" className="relative z-10">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header-left max-w-3xl">
            <div className="section-badge">Why Work With Me</div>
            <h2 className="section-heading">Built for Serious Clients</h2>
            <p className="section-subtext">
              Development is a partnership: clear updates, honest timelines, and
              code your team can keep building on.
            </p>
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Code2;
            return (
              <MotionReveal key={item.title} delay={i * 55}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="premium-card p-7 h-full group"
                >
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center mb-5 icon-box">
                    <Icon size={18} className="text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-[0.9375rem] font-semibold text-foreground mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-[1.65]">
                    {item.description}
                  </p>
                </motion.article>
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal delay={150}>
          <div className="premium-card-static p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="font-display text-xl font-semibold text-foreground mb-1">
                Ready to start your project?
              </p>
              <p className="text-sm text-muted">
                Let&apos;s discuss how we can scale your business together.
              </p>
            </div>
            <a href="#contact" className="btn-primary shrink-0">
              Schedule a Consultation
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
