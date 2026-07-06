"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import MotionReveal from "./MotionReveal";
import { Testimonial } from "@/lib/data";

type Platform = "linkedin" | "whatsapp";

const platformConfig: Record<
  Platform,
  {
    icon: React.ElementType;
    color: string;
    logoBg: string;
    logoColor: string;
    logoRadius: string;
    label: string;
  }
> = {
  linkedin: {
    icon: SiLinkedin,
    color: "#5BA4E8",
    logoBg: "rgba(10,102,194,0.15)",
    logoColor: "#5BA4E8",
    logoRadius: "rounded-[8px]",
    label: "LinkedIn",
  },
  whatsapp: {
    icon: SiWhatsapp,
    color: "#34D399",
    logoBg: "rgba(37,211,102,0.12)",
    logoColor: "#34D399",
    logoRadius: "rounded-full",
    label: "WhatsApp",
  },
};

function ReviewCard({ review }: { review: Testimonial }) {
  const { icon: PIcon, color, logoBg, logoColor, logoRadius, label } =
    platformConfig[review.platform];

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="premium-card p-6 md:p-7 flex flex-col h-full group"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-8 h-8 flex items-center justify-center ${logoRadius}`}
            style={{ background: logoBg }}
          >
            <PIcon size={15} style={{ color: logoColor }} />
          </div>
          <span className="text-xs font-medium" style={{ color }}>
            {label}
          </span>
        </div>
        <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              size={11}
              className="text-primary fill-primary/80"
            />
          ))}
        </div>
      </div>

      <div className="flex-1 relative">
        <Quote
          size={28}
          className="absolute -top-1 -left-1 text-primary/10 pointer-events-none"
          strokeWidth={1}
        />
        <p className="text-sm text-muted leading-[1.7] relative z-10 pl-4">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3 pt-5 mt-5 border-t border-border-subtle">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-background shrink-0"
          style={{
            background: "linear-gradient(135deg, #B8D4F0, #8EB8E8, #6E96BE)",
          }}
        >
          {review.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground tracking-tight">
            {review.name}
          </p>
          <p className="text-xs text-muted mt-0.5">{review.role}</p>
        </div>
      </div>
    </motion.article>
  );
}

interface ClientReviewsProps {
  testimonials: Testimonial[];
}

export default function ClientReviews({ testimonials }: ClientReviewsProps) {
  return (
    <section id="reviews" className="relative z-10 section-alt">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header">
            <div className="section-badge mx-auto w-fit">Testimonials</div>
            <h2 className="section-heading">
              Trusted by{" "}
              <span className="gradient-text">Clients Worldwide</span>
            </h2>
            <p className="section-subtext">
              Real feedback from clients across platforms, time zones, and
              industries.
            </p>
          </div>
        </MotionReveal>

        <MotionReveal delay={50}>
          <div className="premium-card-static p-6 md:p-8 mb-10 md:mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "5.0", label: "Average Rating" },
                { value: "100%", label: "Satisfaction Rate" },
                { value: "50+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
              ].map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`text-center relative ${
                    i > 0
                      ? "before:hidden md:before:block md:before:absolute md:before:-left-4 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-8 md:before:w-px md:before:bg-border-subtle"
                      : ""
                  }`}
                >
                  <div className="text-2xl md:text-[1.75rem] font-bold gradient-text mb-1.5 font-sans tracking-tight">
                    {value}
                  </div>
                  <div className="text-[0.6875rem] text-muted font-medium uppercase tracking-[0.1em]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
          {testimonials.map((review, i) => (
            <MotionReveal key={review.id} delay={i * 60}>
              <ReviewCard review={review} />
            </MotionReveal>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-[0.6875rem] text-muted font-semibold uppercase tracking-[0.15em]">
            Reviewed on
          </span>
          {(["linkedin", "whatsapp"] as Platform[]).map((p) => {
            const { icon: Icon, logoBg, logoColor, logoRadius, label } =
              platformConfig[p];
            return (
              <div
                key={p}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-surface"
              >
                <div
                  className={`w-5 h-5 flex items-center justify-center ${logoRadius}`}
                  style={{ background: logoBg }}
                >
                  <Icon size={11} style={{ color: logoColor }} />
                </div>
                <span className="text-xs font-medium text-muted">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
