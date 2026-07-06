"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Code2,
  Layers,
  Target,
  Gauge,
  Shield,
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
    <section id="why" className="relative z-10 section-alt">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header">
            <div className="section-badge mx-auto w-fit">Why Work With Me</div>
            <h2 className="section-heading">
              Built for{" "}
              <span className="gradient-text">Serious Clients</span>
            </h2>
            <p className="section-subtext">
              More than code — a partnership focused on your business success.
            </p>
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Code2;
            return (
              <MotionReveal key={item.title} delay={i * 60}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="premium-card p-7 md:p-8 h-full group"
                >
                  <div className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-5 icon-box group-hover:scale-[1.04] transition-transform duration-400 ease-premium">
                    <Icon
                      size={19}
                      className="text-primary-light"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-[0.9375rem] font-semibold text-foreground mb-2.5 font-sans tracking-tight">
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
      </div>
    </section>
  );
}
