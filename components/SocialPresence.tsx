"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiLinkedin, SiGithub, SiX, SiInstagram } from "react-icons/si";
import MotionReveal, { MotionStagger, MotionItem } from "./MotionReveal";
import { SocialProfile, SocialPlatform } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

const platformIcons: Record<SocialPlatform, ElementType> = {
  linkedin: SiLinkedin,
  github: SiGithub,
  x: SiX,
  instagram: SiInstagram,
};

interface SocialPresenceProps {
  profiles: SocialProfile[];
}

export default function SocialPresence({ profiles }: SocialPresenceProps) {
  return (
    <section id="social" className="relative z-10">
      <div className="section-container !pb-12">
        <MotionReveal>
          <div className="section-header-left max-w-3xl">
            <div className="section-badge">Connect</div>
            <h2 className="section-heading">Social Media Presence</h2>
          </div>
        </MotionReveal>

        <MotionStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {profiles.map((profile) => {
            const Icon = platformIcons[profile.platform];
            return (
              <MotionItem key={profile.id} className="h-full">
                <motion.a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                  className="social-card group block rounded-2xl p-6 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    className="w-10 h-10 rounded-[12px] flex items-center justify-center mb-5 icon-box"
                  >
                    <Icon size={18} className="text-primary" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 tracking-tight">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-muted mb-6">{profile.handle}</p>
                  <span className="social-card-cta">
                    Visit Profile
                    <ArrowRight size={14} />
                  </span>
                </motion.a>
              </MotionItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
