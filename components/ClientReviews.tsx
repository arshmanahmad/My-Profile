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
    color: "#0A66C2",
    logoBg: "#0A66C2",
    logoColor: "#ffffff",
    logoRadius: "rounded-md",
    label: "LinkedIn",
  },
  whatsapp: {
    icon: SiWhatsapp,
    color: "#25D366",
    logoBg: "#25D366",
    logoColor: "#ffffff",
    logoRadius: "rounded-full",
    label: "WhatsApp",
  },
};

function ReviewCard({ review }: { review: Testimonial }) {
  const { icon: PIcon, color, logoBg, logoColor, logoRadius, label } =
    platformConfig[review.platform];

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="premium-card p-6 flex flex-col gap-4 h-full"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`w-7 h-7 flex items-center justify-center ${logoRadius}`}
            style={{ background: logoBg }}
          >
            <PIcon size={15} style={{ color: logoColor }} />
          </div>
          <span className="text-xs font-semibold" style={{ color }}>
            {label}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              size={11}
              className="text-primary fill-primary"
            />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Quote size={18} className="mb-2 text-primary/30" />
        <p className="text-sm text-muted leading-relaxed">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{
            background: "linear-gradient(135deg, #4F46E5, #8B5CF6)",
          }}
        >
          {review.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#F9FAFB]">{review.name}</p>
          <p className="text-xs text-muted">{review.role}</p>
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
    <section id="reviews" className="relative z-10">
      <div className="section-container">
        <MotionReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">
              Testimonials
            </div>
            <h2 className="section-heading text-[#F9FAFB] mb-5">
              Trusted by{" "}
              <span className="gradient-text">Clients Worldwide</span>
            </h2>
            <p className="section-subtext text-base text-muted leading-relaxed">
              Real feedback from clients across platforms, time zones, and
              industries.
            </p>
          </div>
        </MotionReveal>

        <MotionReveal delay={60}>
          <div className="premium-card p-6 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5.0", label: "Average Rating" },
              { value: "100%", label: "Satisfaction Rate" },
              { value: "50+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-extrabold gradient-text mb-1 font-sans">
                  {value}
                </div>
                <div className="text-xs text-muted font-medium">{label}</div>
              </div>
            ))}
          </div>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {testimonials.map((review, i) => (
            <MotionReveal key={review.id} delay={i * 70}>
              <ReviewCard review={review} />
            </MotionReveal>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-xs text-muted font-semibold uppercase tracking-widest mr-2">
            Reviewed on
          </span>
          {(["linkedin", "whatsapp"] as Platform[]).map((p) => {
            const { icon: Icon, logoBg, logoColor, logoRadius, label } =
              platformConfig[p];
            return (
              <div
                key={p}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full premium-card !transform-none hover:!transform-none"
                style={{ borderRadius: "100px" }}
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
