"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Clock,
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

  return (
    <section id="contact" className="relative z-10 section-alt">
      <div className="section-container">
        <MotionReveal>
          <div className="section-header-left max-w-3xl">
            <div className="section-badge">Contact</div>
            <h2 className="section-heading">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="section-subtext">
              Discuss build / automate / scale. I&apos;m here to help you
              transform your complex ideas into streamlined digital reality.
            </p>
          </div>
        </MotionReveal>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8">
          <MotionReveal delay={50}>
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
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted max-w-xs leading-relaxed">
                    Thank you for reaching out. I&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 text-sm text-primary hover:text-primary-light transition-colors"
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
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="label-mono text-muted block mb-2"
                      >
                        Full Name
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
                        className="input-field w-full px-4 py-3.5 text-sm disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="label-mono text-muted block mb-2"
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
                        className="input-field w-full px-4 py-3.5 text-sm disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="label-mono text-muted block mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      required
                      disabled={loading}
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="input-field w-full px-4 py-3.5 text-sm resize-none disabled:opacity-50"
                      placeholder="tell me about your project, goals, and timeline..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center !py-3.5 !rounded-xl disabled:opacity-60"
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

          <MotionReveal delay={100}>
            <div className="space-y-4">
              <div className="relative premium-card-static p-5 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-warm" />
                <div className="flex items-center gap-2 mb-3 pl-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-warm" />
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    Open to Projects
                  </h3>
                </div>
                <ul className="space-y-2.5 pl-2 text-sm text-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    Freelance availability
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={14} className="text-primary shrink-0" />
                    24h response time
                  </li>
                </ul>
              </div>

              {[
                {
                  icon: Mail,
                  label: "Email Me",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: personalInfo.location,
                  href: null as string | null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="premium-card-static p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 icon-box">
                    <Icon size={16} className="text-primary" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <p className="label-mono text-muted mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all"
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

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-card-static p-3.5 flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-secondary hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-card-static p-3.5 flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-secondary hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
