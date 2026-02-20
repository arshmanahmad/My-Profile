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
      if (el) {
        const { top } = el.getBoundingClientRect();
        if (top <= 100) current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on link click
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(2, 13, 11, 0.88)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(16, 217, 160, 0.1)",
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight"
          onClick={handleLinkClick}
        >
          <span className="gradient-text">Arshman</span>
          <span className="text-[#f0fdf4]/80"> Ahmad</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                style={{
                  color: isActive ? "#10d9a0" : "rgba(240,253,244,0.7)",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute inset-x-2 bottom-1 h-0.5 rounded-full"
                    style={{ background: "#10d9a0" }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-3 btn-primary !py-2 !px-5 !text-sm"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#10d9a0]"
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
            background: "rgba(2, 13, 11, 0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(16, 217, 160, 0.12)",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? "#10d9a0" : "rgba(240,253,244,0.75)",
                    background: isActive
                      ? "rgba(16, 217, 160, 0.08)"
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
