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
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">Services</div>
            <h2 className="section-heading text-[#F9FAFB] mb-5">
              Solutions That{" "}
              <span className="gradient-text">Drive Business Growth</span>
            </h2>
            <p className="section-subtext text-base text-muted leading-relaxed">
              Outcome-focused development services designed to help your business
              launch faster, operate smarter, and scale with confidence.
            </p>
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <MotionReveal key={service.id} delay={i * 60}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="premium-card p-6 h-full flex flex-col group cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(79,70,229,0.12)",
                      border: "1px solid rgba(79,70,229,0.2)",
                    }}
                  >
                    <Icon size={22} className="text-primary-light" />
                  </div>

                  <h3 className="text-base font-bold text-[#F9FAFB] mb-2 font-sans">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div
                    className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #4F46E5, #8B5CF6)",
                    }}
                  />
                </motion.article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
