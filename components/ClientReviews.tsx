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
  cardClass: string;
  pos: React.CSSProperties;
  width: string;
}

const platformConfig: Record<Platform, {
  icon: React.ElementType;
  color: string;
  bg: string;
  logoBg: string;
  logoColor: string;
  logoRadius: string;
  label: string;
}> = {
  linkedin: {
    icon: SiLinkedin,
    color: "#0a66c2",
    bg: "rgba(10,102,194,0.12)",
    logoBg: "#0a66c2",
    logoColor: "#ffffff",
    logoRadius: "rounded-md",
    label: "LinkedIn",
  },
  whatsapp: {
    icon: SiWhatsapp,
    color: "#25d366",
    bg: "rgba(37,211,102,0.12)",
    logoBg: "#25d366",
    logoColor: "#ffffff",
    logoRadius: "rounded-full",
    label: "WhatsApp",
  },
  fiverr: {
    icon: SiFiverr,
    color: "#1dbf73",
    bg: "rgba(29,191,115,0.12)",
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
    cardClass: "review-card-1",
    pos: { top: "0px", right: "0px" },
    width: "w-56",
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    role: "Operations Lead",
    platform: "whatsapp",
    rating: 5,
    text: "The automation bot he built saves us 30+ hours every week. Best investment we've made this year.",
    cardClass: "review-card-2",
    pos: { top: "190px", left: "0px" },
    width: "w-52",
  },
  {
    id: 3,
    name: "James Cooper",
    role: "CTO, StartupBase",
    platform: "fiverr",
    rating: 5,
    text: "Full-stack expertise at its best. Payment integration was flawless — exceeded all expectations.",
    cardClass: "review-card-3",
    pos: { bottom: "10px", right: "10px" },
    width: "w-52",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "AI Product Lead",
    platform: "linkedin",
    rating: 5,
    text: "LangChain chatbot cut our support tickets by 40%. Exceptional AI integration skills.",
    cardClass: "review-card-4",
    pos: { bottom: "120px", left: "10px" },
    width: "w-48",
  },
];

export default function ClientReviews() {
  return (
    <section id="reviews" className="relative z-10">
      <div className="section-container">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="section-badge mb-4 mx-auto w-fit">Client Reviews</div>
          <h2 className="section-heading text-[#f0fdf4] mb-5">
            Trusted by <span className="gradient-text">Clients Worldwide</span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-[#f0fdf4]/58 leading-relaxed">
            Real feedback from real clients — across platforms, time zones, and industries.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: aggregate stats */}
          <div className="space-y-5">

            {/* Rating card */}
            <div className="glass-card p-8">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-5xl font-extrabold text-[#f0fdf4] leading-none">5.0</span>
                <div className="pb-1">
                  <div className="flex items-center gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                    ))}
                  </div>
                  <p className="text-xs text-[#f0fdf4]/45">Based on 50+ reviews</p>
                </div>
              </div>

              {/* Rating bars */}
              <div className="mt-6 space-y-2">
                {[
                  { stars: 5, pct: 92 },
                  { stars: 4, pct: 6 },
                  { stars: 3, pct: 2 },
                ].map(({ stars, pct }) => (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="text-xs text-[#f0fdf4]/40 w-4">{stars}</span>
                    <Star size={9} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(16,217,160,0.1)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: "linear-gradient(90deg,#10d9a0,#4de9b7)" }}
                      />
                    </div>
                    <span className="text-xs text-[#f0fdf4]/35 w-7 text-right">{pct}%</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-7">
                {[
                  { value: "100%", label: "Satisfaction" },
                  { value: "50+",  label: "Reviews" },
                  { value: "4+",   label: "Yrs Exp" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center py-3 rounded-xl"
                    style={{ background: "rgba(16,217,160,0.05)", border: "1px solid rgba(16,217,160,0.1)" }}
                  >
                    <div className="text-lg font-extrabold gradient-text">{value}</div>
                    <div className="text-[10px] text-[#f0fdf4]/40 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms card */}
            <div className="glass-card p-5">
              <p className="text-[10px] text-[#f0fdf4]/35 uppercase tracking-widest mb-4 font-semibold">
                Reviewed On
              </p>
              <div className="flex items-center gap-6">
                {(["linkedin", "whatsapp", "fiverr"] as Platform[]).map((p) => {
                  const { icon: Icon, logoBg, logoColor, logoRadius, label } = platformConfig[p];
                  return (
                    <div key={p} className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 flex items-center justify-center ${logoRadius}`}
                        style={{ background: logoBg }}
                      >
                        <Icon size={13} style={{ color: logoColor }} />
                      </div>
                      <span className="text-sm text-[#f0fdf4]/65">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: floating review cards */}
          <div className="relative w-full min-h-[500px]">
            {reviews.map((review) => {
              const { icon: PIcon, color, bg, logoBg, logoColor, logoRadius, label } = platformConfig[review.platform];
              return (
                <div
                  key={review.id}
                  className={`glass-card absolute p-4 ${review.width} ${review.cardClass}`}
                  style={review.pos}
                >
                  {/* Platform header */}
                  <div className="flex items-center justify-between mb-3 pb-3" style={{ borderBottom: "1px solid rgba(16,217,160,0.1)" }}>
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 flex items-center justify-center flex-shrink-0 ${logoRadius}`}
                        style={{ background: logoBg }}
                      >
                        <PIcon size={20} style={{ color: logoColor }} />
                      </div>
                      <div>
                        <div className="text-[13px] font-bold leading-none" style={{ color }}>
                          {label}
                        </div>
                        <div className="text-[9px] text-[#f0fdf4]/35 mt-0.5">Verified Review</div>
                      </div>
                    </div>
                    <Quote size={13} style={{ color: "#10d9a0", opacity: 0.35 }} />
                  </div>

                  {/* Text */}
                  <p className="text-xs text-[#f0fdf4]/68 leading-relaxed mb-3 line-clamp-3">
                    &quot;{review.text}&quot;
                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={10} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                    ))}
                  </div>

                  {/* Author row */}
                  <div className="mt-3 pt-2.5" style={{ borderTop: "1px solid rgba(16,217,160,0.08)" }}>
                    <div className="text-[11px] font-semibold text-[#f0fdf4]/80 leading-none">{review.name}</div>
                    <div className="text-[9px] text-[#f0fdf4]/38 mt-0.5">{review.role}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
