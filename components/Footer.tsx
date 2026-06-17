import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10"
      style={{
        background: "#0B0F19",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="section-container !py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Logo linked={false} showWordmark className="mb-3" />
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Full Stack Developer building scalable web applications, AI
              solutions, and business automation for startups and businesses.
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
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-[#F9FAFB] transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
              Navigation
            </p>
            <nav
              className="flex flex-col gap-2"
              aria-label="Footer navigation"
            >
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Process", href: "#process" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-muted hover:text-[#F9FAFB] transition-colors w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "SaaS Development",
                "AI Integration",
                "Business Automation",
                "CRM Systems",
                "Web Applications",
              ].map((service) => (
                <li key={service} className="text-sm text-muted">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p>© {year} Arshman Ahmad. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
