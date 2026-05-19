"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function NexlumaLogo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#home" onClick={onClick} className="flex items-center gap-2.5">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nav-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#nav-logo-grad)" />
        {/* Sparkle / luma mark */}
        <line x1="16" y1="7" x2="16" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="7" y1="16" x2="25" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="10.5" y1="10.5" x2="13.8" y2="13.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="18.2" y1="18.2" x2="21.5" y2="21.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="21.5" y1="10.5" x2="18.2" y2="13.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="13.8" y1="18.2" x2="10.5" y2="21.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        <circle cx="16" cy="16" r="2" fill="white" />
      </svg>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Nex<span style={{ color: "#4f46e5" }}>luma</span>
      </span>
    </a>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    let current = "home";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) current = id;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid #e2e8f0",
              boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NexlumaLogo onClick={handleLinkClick} />

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                style={{ color: isActive ? "#4f46e5" : "#475569" }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute inset-x-2 bottom-1 h-0.5 rounded-full"
                    style={{ background: "#4f46e5" }}
                  />
                )}
              </a>
            );
          })}
          <a href="#contact" className="ml-3 btn-primary !py-2 !px-5 !text-sm">
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "#4f46e5" }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <nav
            className="flex flex-col px-6 py-4 gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? "#4f46e5" : "#475569",
                    background: isActive
                      ? "rgba(79,70,229,0.07)"
                      : "transparent",
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-primary mt-3 justify-center !py-2.5"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
