"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowRight, ExternalLink } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import MotionReveal from "./MotionReveal";
import { IntroVideo as IntroVideoData, personalInfo } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

const trustChips = [
  "5+ Years Experience",
  "Full Stack Developer",
  "Available for Hire",
];

interface IntroVideoProps {
  video: IntroVideoData;
}

export function getInstagramEmbedUrl(reelUrl: string): string | null {
  const match = reelUrl.match(/\/reel\/([^/?]+)/);
  if (!match?.[1]) return null;
  return `https://www.instagram.com/reel/${match[1]}/embed`;
}

function VideoPlayer({
  video,
  playing,
  onPlay,
}: {
  video: IntroVideoData;
  playing: boolean;
  onPlay: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const embedUrl =
    video.embedUrl ?? (video.provider === "instagram" ? getInstagramEmbedUrl(video.url) : null);

  if (video.provider === "hosted" && video.hostedSrc) {
    return (
      <div className="intro-video-frame premium-card-static overflow-hidden shadow-profile">
        <video
          className="w-full h-full object-cover"
          controls
          playsInline
          poster={video.poster}
          src={video.hostedSrc}
          title={video.title}
        >
          <track kind="captions" />
        </video>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={prefersReducedMotion || playing ? undefined : { y: -4 }}
      transition={{ duration: 0.4, ease: EASE }}
      className={`intro-video-frame premium-card-static overflow-hidden shadow-profile relative group${
        playing ? " intro-video-frame--playing" : ""
      }`}
    >
      {!playing ? (
        <button
          type="button"
          onClick={onPlay}
          className="intro-video-play absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 w-full h-full"
          aria-label="Play introduction video"
        >
          {video.poster && (
            <Image
              src={video.poster}
              alt=""
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 340px"
              priority={false}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-background/20" />
          <div className="intro-video-play-btn relative z-10 flex items-center justify-center w-16 h-16 rounded-full border border-primary/25 bg-primary/15 backdrop-blur-md transition-transform duration-400 group-hover:scale-105">
            <Play size={28} className="text-primary-light ml-1" fill="currentColor" />
          </div>
          <span className="relative z-10 text-sm font-medium text-foreground/90">
            Watch introduction
          </span>
          <div className="intro-video-shine" aria-hidden="true" />
        </button>
      ) : (
        embedUrl && (
          <div className="intro-video-embed" aria-hidden="false">
            <iframe
              src={embedUrl}
              title={`${video.title} on Instagram`}
              className="intro-video-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              scrolling="no"
            />
          </div>
        )
      )}
    </motion.div>
  );
}

export default function IntroVideo({ video }: IntroVideoProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="intro" className="relative z-10 section-strip">
      <div className="section-container !py-16 md:!py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center [&>*]:min-w-0">
          <MotionReveal>
            <div className="max-w-xl">
              <div className="section-badge mb-5">Introduction</div>
              <h2 className="section-heading mb-5 !text-left">
                Meet{" "}
                <span className="gradient-text">{personalInfo.brandName}</span>
              </h2>
              <p className="text-base text-muted leading-[1.75] mb-4">
                {video.description}
              </p>
              <p className="text-base text-muted leading-[1.75] mb-8">
                Watch a short intro to learn how I approach web development, app
                development, and building products that deliver real business value.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {trustChips.map((chip) => (
                  <div key={chip} className="trust-chip">
                    {chip}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn-primary">
                  Book a Call
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <SiInstagram size={16} />
                  Open on Instagram
                  <ExternalLink size={14} strokeWidth={2} />
                </a>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={100} direction="left">
            <div className="relative w-full max-w-[340px] mx-auto lg:ml-auto lg:mr-0">
              <div
                className="absolute -inset-4 rounded-[28px] opacity-35 blur-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(110,143,173,0.1) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <VideoPlayer
                video={video}
                playing={playing}
                onPlay={() => setPlaying(true)}
              />
              <p className="mt-4 text-center text-xs text-muted/70">
                Like or comment on Instagram using the button above.
              </p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
