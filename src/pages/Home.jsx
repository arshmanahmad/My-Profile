"use client"

import { useState, useEffect } from "react"
import { Navigation } from "../components/Navigation"
import { Hero } from "../components/Hero"
import { Stats } from "../components/Stats"
import { Section } from "../components/Section"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Background } from "../components/Background"
import { LoadingSpinner } from "../components/LoadingSpinner"



export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100 // Account for fixed navigation
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
      setActiveSection(sectionId)
    }
  }

  const handleViewWork = () => {
    scrollToSection("projects")
  }

  const handleScrollDown = () => {
    scrollToSection("about")
  }

  if (isLoading) {
    return <LoadingSpinner fullScreen text="Loading Portfolio..." />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#000529] overflow-x-hidden">
      <Background />

      <Navigation 
        navItems={navItems}
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />

      <Hero 
        onViewWork={handleViewWork}
        onScrollDown={handleScrollDown}
      />
      
      <Stats />

      <Section 
        id="about" 
        title="About" 
        gradient="Me"
        subtitle="I'm a passionate MERN stack developer with over 3 years of experience in creating robust, scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions."
      >
        <About />
      </Section>

      <Section 
        id="skills" 
        title="My" 
        gradient="Skills"
        subtitle="Here are the technologies and tools I work with to bring ideas to life"
        background
      >
        <Skills />
      </Section>

      <Section 
        id="projects" 
        title="Featured" 
        gradient="Projects"
        subtitle="Here are some of my recent projects that showcase my skills and expertise in modern web development"
      >
        <Projects />
      </Section>

      <Section 
        id="contact" 
        title="Get In" 
        gradient="Touch"
        subtitle="Ready to work together? Let's discuss your project and bring your ideas to life with cutting-edge technology."
        background
      >
        <Contact />
      </Section>

      <Footer />
    </div>
  )
}
