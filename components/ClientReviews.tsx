"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import MotionReveal, { MotionStagger, MotionItem } from "./MotionReveal";
import { Testimonial } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";
type Platform = "linkedin" | "whatsapp";
const platformConfig: Record<
  Platform,
  { icon: React.ElementType; label: string }
> = {
  linkedin: { icon: SiLinkedin, label: "LinkedIn" },
  whatsapp: { icon: SiWhatsapp, label: "WhatsApp" },
};


function ReviewCard({ review }: { review: Testimonial }) {
  const { icon: PIcon, label } = platformConfig[review.platform];
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
      className="premium-card p-6 md:p-7 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold text-background shrink-0"
            style={{
              background: "linear-gradient(135deg, #A8DCF0, #7EC8E3, #5BA8C4)",
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
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border-subtle text-[0.6875rem] text-muted shrink-0">
          <PIcon size={12} className="text-primary" />
          {label}
        </span>
      </div>

      <p className="text-sm text-secondary leading-[1.7] italic flex-1 mb-5">
        &ldquo;{review.text}&rdquo;
      </p>

      <div
        className="flex items-center gap-0.5"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: review.rating }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * i, duration: 0.35, ease: EASE_PREMIUM }}
          >
            <Star size={13} className="text-primary fill-primary" />
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}

interface ClientReviewsProps {
  testimonials: Testimonial[];
}

export default function ClientReviews({ testimonials }: ClientReviewsProps) {
  return (
    <section id="reviews" className="relative z-10">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header">
            <div className="section-badge mx-auto w-fit">Testimonials</div>
            <h2 className="section-heading">Trusted by Clients Worldwide</h2>
            <p className="section-subtext section-subtext-center">
              Feedback across platforms and time zones. We build technical
              products that drive real business impact.
            </p>
          </div>
        </MotionReveal>

        <MotionStagger
          fast
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12 max-w-4xl mx-auto"
        >
          {[
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "Satisfaction" },
            { value: "50+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
          ].map(({ value, label }, i) => (
            <MotionItem key={label}>
              <div
                className={`text-center relative ${
                  i > 0
                    ? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-10 md:before:w-px md:before:bg-border"
                    : ""
                }`}
              >
                <div className="font-mono text-2xl md:text-3xl font-semibold text-primary mb-1.5">
                  {value}
                </div>
                <div className="label-mono text-muted">{label}</div>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>

        <MotionStagger className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((review) => (
            <MotionItem key={review.id} className="h-full">
              <ReviewCard review={review} />
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
