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
    <section id="why" className="relative z-10">
      <div className="section-container">
        <MotionReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">
              Why Work With Me
            </div>
            <h2 className="section-heading text-[#F9FAFB] mb-5">
              Built for{" "}
              <span className="gradient-text">Serious Clients</span>
            </h2>
            <p className="section-subtext text-base text-muted leading-relaxed">
              More than code — a partnership focused on your business success.
            </p>
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Code2;
            return (
              <MotionReveal key={item.title} delay={i * 70}>
                <motion.article
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="premium-card p-7 h-full group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: "rgba(139,92,246,0.12)",
                      border: "1px solid rgba(139,92,246,0.2)",
                    }}
                  >
                    <Icon size={20} className="text-secondary-light" />
                  </div>
                  <h3 className="text-base font-bold text-[#F9FAFB] mb-2 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
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
