"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import MotionReveal from "./MotionReveal";
import { personalInfo as PersonalInfo } from "@/lib/data";

interface ContactProps {
  personalInfo: typeof PersonalInfo;
}

export default function Contact({ personalInfo }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Failed to send message. Please try again.");
        return;
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      href: personalInfo.github,
      icon: Github,
      label: "GitHub",
      sub: "@arshmanahmad",
      color: "#F9FAFB",
    },
    {
      href: personalInfo.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
      sub: "Arshman Ahmad",
      color: "#0A66C2",
    },
  ];

  return (
    <section
      id="contact"
      className="relative z-10"
      style={{ background: "rgba(17,24,39,0.4)" }}
    >
      <div className="section-container">
        <MotionReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">Contact</div>
            <h2 className="section-heading text-[#F9FAFB] mb-5">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Great Together</span>
            </h2>
            <p className="section-subtext text-base text-muted leading-relaxed">
              Have a project in mind? Let&apos;s discuss how I can help you
              build, automate, and scale your business.
            </p>
          </div>
        </MotionReveal>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <MotionReveal delay={60} className="lg:col-span-3">
            <div className="premium-card p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <h3 className="text-lg font-bold text-[#F9FAFB] mb-2 font-sans">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted">
                    Thank you for reaching out. I&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary-light hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl text-sm"
                      style={{
                        background: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.25)",
                        color: "#FCA5A5",
                      }}
                    >
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#F9FAFB] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      disabled={loading}
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl text-sm text-[#F9FAFB] placeholder:text-muted outline-none transition-all focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#F9FAFB] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      disabled={loading}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl text-sm text-[#F9FAFB] placeholder:text-muted outline-none transition-all focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#F9FAFB] mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      required
                      disabled={loading}
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl text-sm text-[#F9FAFB] placeholder:text-muted outline-none resize-none transition-all focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      placeholder="Tell me about your project, timeline, and goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </MotionReveal>

          <MotionReveal delay={120} className="lg:col-span-2">
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: personalInfo.phoneDisplay,
                  href: `tel:${personalInfo.phone}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: personalInfo.location,
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="premium-card p-5 flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(79,70,229,0.12)",
                      border: "1px solid rgba(79,70,229,0.2)",
                    }}
                  >
                    <Icon size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider font-medium">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-[#F9FAFB] hover:text-primary-light transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[#F9FAFB]">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="premium-card p-6">
                <h3 className="text-sm font-bold text-[#F9FAFB] mb-4 font-sans">
                  Connect Online
                </h3>
                <div className="space-y-3">
                  {socialLinks.map(({ href, icon: Icon, label, sub, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl transition-all hover:bg-white/5 group"
                    >
                      <Icon size={20} style={{ color }} />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[#F9FAFB]">
                          {label}
                        </p>
                        <p className="text-xs text-muted">{sub}</p>
                      </div>
                      <ExternalLink
                        size={13}
                        className="text-muted group-hover:text-primary-light transition-colors"
                      />
                    </a>
                  ))}
                </div>

                <div
                  className="mt-5 p-4 rounded-xl"
                  style={{
                    background: "rgba(79,70,229,0.08)",
                    border: "1px solid rgba(79,70,229,0.15)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 status-dot" />
                    <span className="text-sm font-semibold text-primary-light">
                      Open to Projects
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-muted">
                    <li>Available for freelance &amp; contract work</li>
                    <li>Fast response within 24 hours</li>
                    <li>Free initial consultation call</li>
                  </ul>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
