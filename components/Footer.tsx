import { Github, Linkedin, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { personalInfo } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: personalInfo.github, icon: Github, label: "GitHub" },
    { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
    {
      href: `https://wa.me/${personalInfo.whatsapp}`,
      icon: SiWhatsapp,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,30,46,0) 0%, rgba(20,30,46,0.8) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="section-container !py-14 md:!py-16 relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-5">
            <Logo linked={false} showWordmark height={48} className="mb-4" />
            <p className="text-sm text-muted leading-[1.7] max-w-sm">
              Full Stack Developer building scalable web applications, AI
              solutions, and business automation for startups and businesses.
            </p>
            <div className="flex items-center gap-2.5 mt-6">
              {socialLinks.map(({ href, icon: Icon, label }) => (
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
                  className="w-10 h-10 rounded-[12px] flex items-center justify-center text-muted hover:text-primary-light transition-all duration-300 icon-box hover:scale-105"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.6875rem] font-semibold text-muted uppercase tracking-[0.12em] mb-4">
              Navigation
            </p>
            <nav
              className="flex flex-col gap-2.5"
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
                  className="text-sm text-muted hover:text-primary-light transition-colors duration-300 w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.6875rem] font-semibold text-muted uppercase tracking-[0.12em] mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
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

        <div className="divider-gradient mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {year} Arshman Ahmad. All rights reserved.</p>
          <p className="text-muted/70">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
