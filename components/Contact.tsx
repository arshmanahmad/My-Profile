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
      color: "#C8D8E8",
    },
    {
      href: personalInfo.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
      sub: "Arshman Ahmad",
      color: "#5BA4E8",
    },
  ];

  return (
    <section id="contact" className="relative z-10">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header">
            <div className="section-badge mx-auto w-fit">Contact</div>
            <h2 className="section-heading">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Great Together</span>
            </h2>
            <p className="section-subtext">
              Have a project in mind? Let&apos;s discuss how I can help you
              build, automate, and scale your business.
            </p>
          </div>
        </MotionReveal>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
          <MotionReveal delay={50} className="lg:col-span-3">
            <div className="premium-card-static p-7 md:p-9 h-full">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center py-14 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-sans tracking-tight">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted max-w-xs leading-relaxed">
                    Thank you for reaching out. I&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 text-sm text-primary-light hover:text-primary transition-colors duration-300"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {error && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 p-4 rounded-[14px] text-sm bg-red-500/8 border border-red-400/20 text-red-300"
                    >
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground/90 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      disabled={loading}
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="input-field w-full px-4 py-3.5 rounded-[14px] text-sm outline-none disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground/90 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      disabled={loading}
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="input-field w-full px-4 py-3.5 rounded-[14px] text-sm outline-none disabled:opacity-50"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground/90 mb-2"
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
                      className="input-field w-full px-4 py-3.5 rounded-[14px] text-sm outline-none resize-none disabled:opacity-50"
                      placeholder="Tell me about your project, timeline, and goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center !py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} strokeWidth={2} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </MotionReveal>

          <MotionReveal delay={100} className="lg:col-span-2">
            <div className="space-y-4 h-full flex flex-col">
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
                <div
                  key={label}
                  className="premium-card p-5 flex items-center gap-4 !transform-none hover:!transform-none hover:border-primary/20"
                >
                  <div className="w-10 h-10 rounded-[14px] flex items-center justify-center shrink-0 icon-box">
                    <Icon size={17} className="text-primary-light" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[0.6875rem] text-muted uppercase tracking-[0.1em] font-medium mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-foreground hover:text-primary-light transition-colors duration-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="premium-card-static p-6 flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-4 font-sans tracking-tight">
                  Connect Online
                </h3>
                <div className="space-y-2">
                  {socialLinks.map(({ href, icon: Icon, label, sub, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3.5 rounded-[14px] transition-all duration-300 hover:bg-primary/5 group"
                    >
                      <Icon size={19} style={{ color }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {label}
                        </p>
                        <p className="text-xs text-muted truncate">{sub}</p>
                      </div>
                      <ExternalLink
                        size={13}
                        className="text-muted group-hover:text-primary-light transition-colors duration-300 shrink-0"
                      />
                    </a>
                  ))}
                </div>

                <div className="mt-5 p-4 rounded-[14px] icon-box">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot" />
                    <span className="text-sm font-semibold text-primary-light">
                      Open to Projects
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted leading-relaxed">
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
