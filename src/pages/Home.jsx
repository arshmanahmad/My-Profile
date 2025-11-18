"use client";
import { useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Section } from "../components/Section";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Background } from "../components/Background";
import { LoadingSpinner } from "../components/LoadingSpinner";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navigation
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const handleViewWork = () => {
    scrollToSection("projects");
  };

  const handleScrollDown = () => {
    scrollToSection("about");
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen text="Loading Portfolio..." />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#000529] overflow-x-hidden">
      <Background />

      <Navigation
        navItems={navItems}
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />

      <Hero onViewWork={handleViewWork} onScrollDown={handleScrollDown} />

      <Stats />

      <Section
        id="about"
        title="About"
        gradient="Me"
        subtitle="A results-driven Full-Stack Developer with 4+ years of expertise in MERN stack, Python automation, and payment integrations. I transform complex business challenges into scalable digital solutions that drive growth and optimize performance."
      >
        <About />
      </Section>

      <Section
        id="skills"
        title="My"
        gradient="Skills"
        subtitle="Mastering cutting-edge technologies to deliver exceptional results. From full-stack development to automation and optimization - here's what I bring to your project."
        background
      >
        <Skills />
      </Section>

      <Section
        id="projects"
        title="Featured"
        gradient="Projects"
        subtitle="Real-world solutions that demonstrate my ability to deliver results. Each project showcases technical expertise, business impact, and client satisfaction."
      >
        <Projects />
      </Section>

      <Section
        id="contact"
        title="Let's Work"
        gradient="Together"
        subtitle="Ready to transform your business with innovative solutions? Let's discuss how my expertise in full-stack development, automation, and optimization can drive your success."
        background
      >
        <Contact />
      </Section>

      <Footer />
    </div>
  );
}
