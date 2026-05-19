import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

function NexlumaLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#footer-logo-grad)" />
        <line x1="16" y1="7" x2="16" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="7" y1="16" x2="25" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="10.5" y1="10.5" x2="13.8" y2="13.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="18.2" y1="18.2" x2="21.5" y2="21.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="21.5" y1="10.5" x2="18.2" y2="13.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="13.8" y1="18.2" x2="10.5" y2="21.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        <circle cx="16" cy="16" r="2" fill="white" />
      </svg>
      <span className="text-base font-bold text-white">
        Nex<span style={{ color: "#818cf8" }}>luma</span>
      </span>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10"
      style={{ background: "#0f172a" }}
    >
      <div className="section-container !py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <NexlumaLogo />
            <p className="text-sm text-slate-400 mt-3 leading-relaxed max-w-xs">
              Building fast, scalable digital solutions. Full-stack development,
              AI automation, and payment integrations — delivered with precision.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                {
                  href: personalInfo.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: `mailto:${personalInfo.email}`,
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <nav
              className="flex flex-col gap-2"
              aria-label="Footer navigation"
            >
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Full-Stack Development",
                "Python Automation",
                "AI & LangChain",
                "Payment Integrations",
                "Shopify API",
              ].map((service) => (
                <li
                  key={service}
                  className="text-sm text-slate-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p>© {year} Nexluma. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
