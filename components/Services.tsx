"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Brain,
  Zap,
  Users,
  Globe,
  Smartphone,
  Code2,
  Puzzle,
  LucideIcon,
} from "lucide-react";
import MotionReveal from "./MotionReveal";
import { Service } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  brain: Brain,
  zap: Zap,
  users: Users,
  globe: Globe,
  smartphone: Smartphone,
  code: Code2,
  puzzle: Puzzle,
};

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="relative z-10 section-alt">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header-left max-w-3xl">
            <div className="section-badge">Services</div>
            <h2 className="section-heading">
              Solutions That Drive Business Growth
            </h2>
            <p className="section-subtext">
              Professional web &amp; app development: SaaS, AI, CRM,
              automation, and custom software.
            </p>
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <MotionReveal key={service.id} delay={i * 45}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="premium-card p-6 h-full flex flex-col group cursor-default"
                >
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center mb-5 icon-box">
                    <Icon
                      size={18}
                      className="text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-display text-[0.9375rem] font-semibold text-foreground mb-2.5 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-[1.65] flex-1">
                    {service.description}
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
