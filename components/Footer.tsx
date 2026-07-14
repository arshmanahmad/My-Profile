import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <div className="section-container !py-14 md:!py-16 relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-4">
            <Logo linked={false} showWordmark className="mb-4" />
            <p className="text-sm text-muted leading-[1.7] max-w-sm">
              {personalInfo.brandName} – Building the future of software with
              cinematic precision and technical mastery. Crafting high-performance
              digital instruments for industry leaders.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-display text-sm font-semibold text-foreground mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
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
                  className="text-sm text-muted hover:text-primary transition-colors w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="font-display text-sm font-semibold text-foreground mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                "SaaS Development",
                "AI Implementation",
                "Workflow Automation",
                "Custom CRM Solutions",
                "Modern Web Apps",
              ].map((service) => (
                <li key={service} className="text-sm text-muted">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-display text-sm font-semibold text-foreground mb-4">
              Get In Touch
            </p>
            <ul className="space-y-3 mb-5">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted hover:text-primary transition-colors"
                >
                  <Mail size={14} className="text-primary shrink-0" />
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted">
                <MapPin size={14} className="text-primary shrink-0" />
                Remote / Global
              </li>
            </ul>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Github size={15} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gradient mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            © {year} Arshman Ahmad. Built with Next.js &amp; Tailwind CSS.
          </p>
          <p className="text-muted/80">Available for new projects</p>
        </div>
      </div>
    </footer>
  );
}
