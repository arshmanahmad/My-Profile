"use client";

import { Star, Quote } from "lucide-react";
import { SiLinkedin, SiWhatsapp, SiFiverr } from "react-icons/si";

type Platform = "linkedin" | "whatsapp" | "fiverr";

interface Review {
  id: number;
  name: string;
  role: string;
  platform: Platform;
  rating: number;
  text: string;
}

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
    color: "#0a66c2",
    logoBg: "#0a66c2",
    logoColor: "#ffffff",
    logoRadius: "rounded-md",
    label: "LinkedIn",
  },
  whatsapp: {
    icon: SiWhatsapp,
    color: "#25d366",
    logoBg: "#25d366",
    logoColor: "#ffffff",
    logoRadius: "rounded-full",
    label: "WhatsApp",
  },
  fiverr: {
    icon: SiFiverr,
    color: "#1dbf73",
    logoBg: "#1dbf73",
    logoColor: "#ffffff",
    logoRadius: "rounded-md",
    label: "Fiverr",
  },
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Product Manager",
    platform: "linkedin",
    rating: 5,
    text: "Delivered an HR portal that transformed how our team operates. Clean code, great communication, shipped ahead of schedule!",
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    role: "Operations Lead",
    platform: "whatsapp",
    rating: 5,
    text: "The automation bot he built saves us 30+ hours every week. Best investment we've made this year.",
  },
  {
    id: 3,
    name: "James Cooper",
    role: "CTO, StartupBase",
    platform: "fiverr",
    rating: 5,
    text: "Full-stack expertise at its best. Payment integration was flawless — exceeded all expectations.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "AI Product Lead",
    platform: "linkedin",
    rating: 5,
    text: "LangChain chatbot cut our support tickets by 40%. Exceptional AI integration skills and deep technical knowledge.",
  },
];

function ReviewCard({ review }: { review: Review }) {
  const { icon: PIcon, color, logoBg, logoColor, logoRadius, label } =
    platformConfig[review.platform];

  return (
    <div className="light-card p-6 flex flex-col gap-4 h-full">
      {/* Top: platform + stars */}
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
              style={{ color: "#4f46e5", fill: "#4f46e5" }}
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="flex-1">
        <Quote
          size={18}
          className="mb-2"
          style={{ color: "#c7d2fe" }}
        />
        <p className="text-sm text-slate-600 leading-relaxed">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: "1px solid #f1f5f9" }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{ background: "linear-gradient(135deg, #4f46e5, #818cf8)" }}
        >
          {review.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{review.name}</p>
          <p className="text-xs text-slate-400">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function ClientReviews() {
  return (
    <section
      id="reviews"
      className="relative z-10"
      style={{ background: "#f8fafc" }}
    >
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="section-badge mb-4 mx-auto w-fit">Client Reviews</div>
          <h2 className="section-heading text-slate-900 mb-5">
            Trusted by{" "}
            <span className="gradient-text">Clients Worldwide</span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-slate-500 leading-relaxed">
            Real feedback from real clients — across platforms, time zones, and
            industries.
          </p>
        </div>

        {/* Top stats bar */}
        <div className="light-card p-6 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "Satisfaction Rate" },
            { value: "50+", label: "Total Reviews" },
            { value: "4+", label: "Years Experience" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-extrabold gradient-text mb-1">
                {value}
              </div>
              <div className="text-xs text-slate-400 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Review grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Platforms strip */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest mr-2">
            Reviewed on
          </span>
          {(["linkedin", "whatsapp", "fiverr"] as Platform[]).map((p) => {
            const { icon: Icon, logoBg, logoColor, logoRadius, label } =
              platformConfig[p];
            return (
              <div
                key={p}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}
              >
                <div
                  className={`w-5 h-5 flex items-center justify-center ${logoRadius}`}
                  style={{ background: logoBg }}
                >
                  <Icon size={11} style={{ color: logoColor }} />
                </div>
                <span className="text-xs font-medium text-slate-600">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
