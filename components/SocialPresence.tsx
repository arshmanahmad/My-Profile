"use client";

import type { CSSProperties, ElementType } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiLinkedin, SiGithub, SiX, SiInstagram } from "react-icons/si";
import MotionReveal from "./MotionReveal";
import { SocialProfile, SocialPlatform } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;
const SPRING = { type: "spring" as const, stiffness: 260, damping: 28 };

const platformConfig: Record<
  SocialPlatform,
  {
    icon: ElementType;
    accent: string;
    glow: string;
    iconBg: string;
  }
> = {
  linkedin: {
    icon: SiLinkedin,
    accent: "#6E8FAD",
    glow: "rgba(110, 143, 173, 0.28)",
    iconBg: "rgba(110, 143, 173, 0.14)",
  },
  github: {
    icon: SiGithub,
    accent: "#91AEC8",
    glow: "rgba(145, 174, 200, 0.22)",
    iconBg: "rgba(145, 174, 200, 0.12)",
  },
  x: {
    icon: SiX,
    accent: "#E4E6EA",
    glow: "rgba(147, 158, 171, 0.2)",
    iconBg: "rgba(147, 158, 171, 0.16)",
  },
  instagram: {
    icon: SiInstagram,
    accent: "#B5A896",
    glow: "rgba(181, 168, 150, 0.28)",
    iconBg: "rgba(181, 168, 150, 0.14)",
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
};

interface SocialPresenceProps {
  profiles: SocialProfile[];
}

function SocialCard({
  profile,
  index,
}: {
  profile: SocialProfile;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const { icon: Icon, accent, glow, iconBg } = platformConfig[profile.platform];

  return (
    <motion.div
      variants={cardVariants}
      className="h-full"
      style={{ "--social-glow": glow } as CSSProperties}
    >
      <motion.a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${profile.name} profile, ${profile.handle}`}
        whileHover={prefersReducedMotion ? undefined : { y: -6 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
        transition={SPRING}
        className="social-card group relative flex flex-col h-full rounded-[20px] overflow-hidden ring-1 ring-inset ring-white/[0.06] hover:ring-primary/20"
      >
        <div className="relative social-card-image overflow-hidden">
          <Image
            src={profile.image}
            alt={`${profile.name} profile preview`}
            fill
            priority={index < 2}
            className="object-cover object-top social-card-img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="social-card-shine" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/40 to-transparent opacity-85"
            aria-hidden="true"
          />
          <div
            className="absolute top-3 left-3 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-foreground/70 px-2.5 py-1 rounded-full border border-white/10 bg-black/25 backdrop-blur-md"
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <motion.div
            whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: 3 }}
            transition={SPRING}
            className="absolute top-3 right-3 w-10 h-10 rounded-[13px] flex items-center justify-center border border-white/12 backdrop-blur-md social-card-icon"
            style={{ background: iconBg }}
          >
            <Icon size={19} style={{ color: accent }} />
          </motion.div>
        </div>

        <div className="relative flex flex-col flex-1 p-5 md:p-6">
          <div className="mb-3">
            <h3 className="text-[1.05rem] font-semibold text-foreground tracking-tight">
              {profile.name}
            </h3>
            <p className="text-xs text-primary-light/80 mt-1 font-medium">
              {profile.handle}
            </p>
          </div>

          <p className="text-sm text-muted/95 leading-[1.7] flex-1 mb-5">
            {profile.pickupLine}
          </p>

          <span className="social-card-cta mt-auto">
            Visit Profile
            <ArrowUpRight size={14} strokeWidth={2.5} className="social-card-cta-icon" />
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
}

export default function SocialPresence({ profiles }: SocialPresenceProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="social" className="relative z-10 section-alt overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none social-section-glow"
        aria-hidden="true"
      />

      <div className="section-container relative">
        <MotionReveal>
          <div className="section-header">
            <div className="section-badge mx-auto w-fit">Connect</div>
            <h2 className="section-heading">
              Social Media{" "}
              <span className="gradient-text">Presence</span>
            </h2>
            <p className="section-subtext">
              Find me across platforms. Connect, follow the journey, and explore
              the work behind the code.
            </p>
          </div>
        </MotionReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 items-stretch"
          variants={prefersReducedMotion ? undefined : gridVariants}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {profiles.map((profile, i) => (
            <SocialCard key={profile.id} profile={profile} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
