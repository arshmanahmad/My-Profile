"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "923294494502";
const WHATSAPP_DISPLAY = "03294494502";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Arshman, I found your portfolio and I'd like to discuss a project."
)}`;

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative premium-card-static p-4 w-[260px] shadow-card-hover"
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="absolute top-3 right-3 text-muted hover:text-foreground transition-colors duration-300"
              aria-label="Dismiss WhatsApp widget"
            >
              <X size={14} />
            </button>

            <div className="flex items-center gap-3 mb-3 pr-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-emerald-500/15 border border-emerald-400/20">
                <SiWhatsapp size={20} color="#34D399" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground tracking-tight">
                  Chat on WhatsApp
                </p>
                <p className="text-xs text-muted">Usually replies within hours</p>
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed mb-3">
              Have a project in mind? Message me directly for a quick response.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 w-full px-3 py-2.5 rounded-[12px] text-sm font-medium transition-all duration-300 hover:bg-emerald-400/15 bg-emerald-400/8 border border-emerald-400/20 text-emerald-400"
            >
              <span className="flex items-center gap-2">
                <MessageCircle size={15} />
                {WHATSAPP_DISPLAY}
              </span>
              <span className="text-[10px] uppercase tracking-wider opacity-70">
                Open
              </span>
            </a>

            <div className="absolute -bottom-2 right-8 w-3.5 h-3.5 rotate-45 glass-surface border-r border-b border-border-subtle" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp, ${WHATSAPP_DISPLAY}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        animate={
          prefersReducedMotion || hovered
            ? { scale: hovered ? 1.03 : 1 }
            : { scale: [1, 1.04, 1] }
        }
        transition={
          prefersReducedMotion || hovered
            ? { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, #34D399, #059669)",
          boxShadow: "0 6px 24px rgba(52,211,153,0.25)",
        }}
      >
        <SiWhatsapp size={26} />

        {!hovered && (
          <span
            className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 status-dot bg-emerald-400"
            style={{ borderColor: "#0D1117" }}
          />
        )}
      </motion.a>
    </div>
  );
}
