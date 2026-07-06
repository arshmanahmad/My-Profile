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
    <section id="services" className="relative z-10">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header">
            <div className="section-badge mx-auto w-fit">Services</div>
            <h2 className="section-heading">
              Solutions That{" "}
              <span className="gradient-text">Drive Business Growth</span>
            </h2>
            <p className="section-subtext">
              Outcome-focused development services designed to help your business
              launch faster, operate smarter, and scale with confidence.
            </p>
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <MotionReveal key={service.id} delay={i * 50}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="premium-card p-6 md:p-7 h-full flex flex-col group cursor-default"
                >
                  <div className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-5 icon-box group-hover:scale-[1.04] transition-transform duration-400 ease-premium">
                    <Icon size={20} className="text-primary-light" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-[0.9375rem] font-semibold text-foreground mb-2.5 font-sans tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-[1.65] flex-1">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border-subtle">
                    <div
                      className="h-px w-8 group-hover:w-full transition-all duration-700 ease-premium rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #8EB8E8, rgba(184,212,240,0.4))",
                      }}
                    />
                  </div>
                </motion.article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
