"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative premium-card p-4 w-[260px] shadow-2xl"
            style={{
              boxShadow:
                "0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(37,211,102,0.15)",
            }}
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="absolute top-3 right-3 text-muted hover:text-[#F9FAFB] transition-colors"
              aria-label="Dismiss WhatsApp widget"
            >
              <X size={14} />
            </button>

            <div className="flex items-center gap-3 mb-3 pr-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#25D366" }}
              >
                <SiWhatsapp size={22} color="#fff" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#F9FAFB]">
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
              className="flex items-center justify-between gap-2 w-full px-3 py-2.5 rounded-xl text-sm font-semibold transition-all hover:brightness-110"
              style={{
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.25)",
                color: "#4ADE80",
              }}
            >
              <span className="flex items-center gap-2">
                <MessageCircle size={15} />
                {WHATSAPP_DISPLAY}
              </span>
              <span className="text-[10px] uppercase tracking-wider opacity-80">
                Open
              </span>
            </a>

            <div
              className="absolute -bottom-2 right-8 w-4 h-4 rotate-45"
              style={{
                background: "#111827",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp — ${WHATSAPP_DISPLAY}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={
          hovered
            ? { scale: 1.05 }
            : { scale: [1, 1.06, 1] }
        }
        transition={
          hovered
            ? { duration: 0.2 }
            : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 8px 28px rgba(37,211,102,0.4)",
        }}
      >
        <SiWhatsapp size={28} />

        {!hovered && (
          <span
            className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 status-dot"
            style={{
              background: "#22C55E",
              borderColor: "#0B0F19",
            }}
          />
        )}
      </motion.a>
    </div>
  );
}
