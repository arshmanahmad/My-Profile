"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiLinkedin, SiGithub, SiX, SiInstagram } from "react-icons/si";
import MotionReveal from "./MotionReveal";
import { SocialProfile, SocialPlatform } from "@/lib/data";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {profiles.map((profile, i) => {
            const Icon = platformIcons[profile.platform];
            return (
              <MotionReveal key={profile.id} delay={i * 55}>
                <motion.a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="social-card group block rounded-2xl p-6 h-full"
                >
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center mb-5 icon-box">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 tracking-tight">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-muted mb-6">{profile.handle}</p>
                  <span className="social-card-cta">
                    Visit Profile
                    <ArrowRight size={14} />
                  </span>
                </motion.a>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
