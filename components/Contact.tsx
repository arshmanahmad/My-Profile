import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { personalInfo as PersonalInfo } from "@/lib/data";

interface ContactProps {
  personalInfo: typeof PersonalInfo;
}

const infoItems = (info: typeof PersonalInfo) => [
  {
    icon: Mail,
    label: "Email",
    value: info.email,
    href: `mailto:${info.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: info.phone,
    href: `tel:${info.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: info.location,
    href: null,
  },
];

export default function Contact({ personalInfo }: ContactProps) {
  const contactDetails = infoItems(personalInfo);

  return (
    <section id="contact" className="relative z-10">
      {/* Subtle section tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(4,26,20,0.35)" }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">Contact</div>
            <h2 className="section-heading text-[#e0f2ff] mb-5">
              Ready to{" "}
              <span className="gradient-text">Transform Your Business?</span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-[#e0f2ff]/58 leading-relaxed">
              Whether you need a full-stack web app, Python automation, AI
              integration, or payment gateway setup — I&apos;m here to make it
              happen. Let&apos;s talk.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <ScrollReveal delay={60}>
            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass-card p-5 flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(0,200,255,0.1)",
                      border: "1px solid rgba(0,200,255,0.2)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#00c8ff" }} />
                  </div>
                  <div>
                    <p className="text-xs text-[#e0f2ff]/45 uppercase tracking-wider font-medium">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-[#e0f2ff]/85 hover:text-[#00c8ff] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[#e0f2ff]/85">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp highlight */}
              <a
                href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 group block"
                style={{ borderColor: "rgba(34,197,94,0.25)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <MessageCircle size={18} style={{ color: "#22c55e" }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#e0f2ff]/45 uppercase tracking-wider font-medium">
                    WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-[#e0f2ff]/85 group-hover:text-[#22c55e] transition-colors">
                    {personalInfo.whatsapp}
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full text-[#050d1a] bg-[#22c55e]">
                  Chat Now
                </span>
              </a>
            </div>
          </ScrollReveal>

          {/* Social links + availability */}
          <ScrollReveal delay={120}>
            <div className="glass-card p-7 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#e0f2ff] mb-2">
                  Find Me Online
                </h3>
                <p className="text-sm text-[#e0f2ff]/50 mb-6 leading-relaxed">
                  Connect on professional networks.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      href: personalInfo.github,
                      icon: Github,
                      label: "GitHub",
                      sub: "@arshmanahmad",
                      color: "#e0f2ff",
                    },
                    {
                      href: personalInfo.linkedin,
                      icon: Linkedin,
                      label: "LinkedIn",
                      sub: "Arshman Ahmad",
                      color: "#0ea5e9",
                    },

                  ].map(({ href, icon: Icon, label, sub, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link flex items-center gap-4 p-3.5 rounded-xl transition-all duration-200 group"
                    >
                      <Icon size={20} style={{ color }} />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[#e0f2ff]/85">
                          {label}
                        </p>
                        <p className="text-xs text-[#e0f2ff]/40">{sub}</p>
                      </div>
                      <ExternalLink
                        size={13}
                        className="text-[#e0f2ff]/25 group-hover:text-[#00c8ff] transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div
                className="mt-6 p-4 rounded-xl"
                style={{ background: "rgba(0,200,255,0.07)", border: "1px solid rgba(0,200,255,0.18)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "#00c8ff",
                      boxShadow: "0 0 6px rgba(0,200,255,0.8)",
                    }}
                  />
                  <span className="text-sm font-semibold" style={{ color: "#00c8ff" }}>
                    Open to Projects
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-[#e0f2ff]/55">
                  <li>✓ Available for freelance &amp; full-time</li>
                  <li>✓ Automation &amp; AI specialist</li>
                  <li>✓ Payment gateway expert</li>
                  <li>✓ Fast turnaround, clean code</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
