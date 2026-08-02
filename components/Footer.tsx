"use client";

import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import Logo from "./Logo";
import MotionReveal, { MotionStagger, MotionItem } from "./MotionReveal";
import { EASE_PREMIUM } from "@/lib/motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <div className="section-container !py-14 md:!py-16 relative">
        <MotionStagger className="grid md:grid-cols-12 gap-10 md:gap-8 mb-12">
          <MotionItem className="md:col-span-4">
            <Logo linked={false} showWordmark className="mb-4" />
            <p className="text-sm text-muted leading-[1.7] max-w-sm">
              A focused development team led by Arshman Ahmad. Web apps, APIs,
              AI features, and production-ready systems for startups and
              businesses.
            </p>
          </MotionItem>

          <MotionItem className="md:col-span-2">
            <p className="font-display text-sm font-semibold text-foreground mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Process", href: "#process" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-muted hover:text-primary transition-colors w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </MotionItem>

          <MotionItem className="md:col-span-3">
            <p className="font-display text-sm font-semibold text-foreground mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                "SaaS Development",
                "AI Implementation",
                "Workflow Automation",
                "Custom CRM Solutions",
                "Modern Web Apps",
              ].map((service) => (
                <li key={service} className="text-sm text-muted">
                  {service}
                </li>
              ))}
            </ul>
          </MotionItem>

          <MotionItem className="md:col-span-3">
            <p className="font-display text-sm font-semibold text-foreground mb-4">
              Get In Touch
            </p>
            <ul className="space-y-3 mb-5">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted hover:text-primary transition-colors"
                >
                  <Mail size={14} className="text-primary shrink-0" />
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted">
                <MapPin size={14} className="text-primary shrink-0" />
                Remote / Global
              </li>
            </ul>
            <div className="flex items-center gap-2.5">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -2, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Github size={15} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -2, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Linkedin size={15} />
              </motion.a>
            </div>
          </MotionItem>
        </MotionStagger>

        <MotionReveal delay={80} direction="scale">
          <div className="divider-gradient mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
            <p>
              © {year} Arshman Ahmad. Built with Next.js &amp; Tailwind CSS.
            </p>
            <p className="text-muted/80">Available for new projects</p>
          </div>
        </MotionReveal>
      </div>
    </footer>
  );
}
