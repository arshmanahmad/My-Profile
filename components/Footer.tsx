import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10"
      style={{ borderTop: "1px solid rgba(0,200,255,0.08)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(2,13,11,0.6)" }}
        aria-hidden="true"
      />

      <div className="section-container relative !py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="text-base font-bold">
              <span className="gradient-text">Arshman</span>
              <span className="text-[#e0f2ff]/70"> Ahmad</span>
            </p>
            <p className="text-xs text-[#e0f2ff]/35 mt-0.5">
              Full-Stack Developer &amp; Automation Expert
            </p>
          </div>

          {/* Quick nav */}
          <nav
            className="flex items-center gap-6 text-sm"
            aria-label="Footer navigation"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#e0f2ff]/45 hover:text-[#00c8ff] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#e0f2ff]/40 hover:text-[#00c8ff] transition-colors duration-200"
                style={{ background: "rgba(0,200,255,0.05)" }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#e0f2ff]/30"
          style={{ borderTop: "1px solid rgba(0,200,255,0.07)" }}
        >
          <p>© {year} Arshman Ahmad. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
