"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowRight, ExternalLink } from "lucide-react";
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
    video.embedUrl ??
    (video.provider === "instagram" ? getInstagramEmbedUrl(video.url) : null);

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
      whileHover={prefersReducedMotion || playing ? undefined : { scale: 1.01 }}
      transition={{ duration: 0.45, ease: EASE }}
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
              sizes="360px"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/25" />
          <div className="intro-video-play-btn relative z-10 flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-full border border-primary/30 bg-primary/15 backdrop-blur-md transition-transform duration-400 group-hover:scale-105">
            <Play
              size={30}
              className="text-primary-light ml-1"
              fill="currentColor"
            />
          </div>
          <span className="relative z-10 label-mono text-primary">
            Watch Introduction
          </span>
          <div className="absolute bottom-4 inset-x-6 h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-1/3 rounded-full bg-primary/70" />
          </div>
        </button>
      ) : (
        embedUrl && (
          <div className="intro-video-embed">
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
    <section id="intro" className="relative z-10">
      <div className="section-container !py-16 md:!py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <MotionReveal direction="right">
            <div className="max-w-xl">
              <div className="section-badge mb-5">Introduction</div>
              <h2 className="section-heading mb-5 !text-left">
                Meet{" "}
                <span className="text-primary">{personalInfo.brandName}</span>
              </h2>
              <p className="text-base text-secondary leading-[1.75] mb-8">
                {video.description}
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
                  Open on Instagram
                  <ExternalLink size={14} strokeWidth={2} />
                </a>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={120} direction="left">
            <div className="relative w-full flex flex-col items-center lg:items-end">
              <VideoPlayer
                video={video}
                playing={playing}
                onPlay={() => setPlaying(true)}
              />
              <p className="mt-4 text-sm text-muted text-center lg:text-right w-full max-w-[360px]">
                Meet {personalInfo.brandName} Instagram intro reel.
              </p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
