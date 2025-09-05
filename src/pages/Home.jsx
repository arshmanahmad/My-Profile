"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Star,
  Download,
  ArrowRight,
  ChevronDown,
  MapPin,
  Calendar,
  Award,
  Users,
  Briefcase,
  Send,
} from "lucide-react"
import { Button } from "../components/Button"
import { Card, CardContent } from "../components/Card"
import { Badge } from "../components/Badge"

import HRImage from "../assets/projectsImages/hr7.png";
import SwanImage from "../assets/swanThai.png";
import AIChatImage from "../assets/AIChat.png";
import NurseAIImage from "../assets/nurseAIHub.png";
import WeatherImage from "../assets/weather app.png";
import TaskManagementImage from "../assets/task.png";
import Arshman from "../assets/arshman3.png"



export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const skills = [
    {
      name: "React.js",
      level: 95,
      icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#61DAFB] to-[#21D4FD]",
    },
    {
      name: "Node.js",
      level: 90,
      icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#68A063] to-[#8CC84B]",
    },
    {
      name: "MongoDB",
      level: 85,
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#4DB33D] to-[#3FA037]",
    },
    {
      name: "Express.js",
      level: 88,
      icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#404040] to-[#000000]",
    },
    {
      name: "React Native",
      level: 82,
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#61DAFB] to-[#764ABC]",
    },
    {
      name: "TypeScript",
      level: 87,
      icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#3178C6] to-[#235A97]",
    },
    {
      name: "Next.js",
      level: 90,
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#000000] to-[#404040]",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-[#06B6D4] to-[#0891B2]",
    },
  ]

  const projects = [
    {
      title: "HR Portal",
      description:
        "Comprehensive HR Management system built with React, TypeScript, and Vite. Features full-fledged functionalities for modern HR operations including employee management, payroll, and analytics.",
      image: HRImage,
      url: "https://hr-portal-nu.vercel.app/",
      tech: ["React", "TypeScript", "Vite", "Tailwind"],
      featured: true,
      gradient: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      title: "Swan Thai Restaurant",
      description:
        "Modern restaurant website with elegant design, built using React, TypeScript, and Vite for optimal performance and user experience.",
      image: SwanImage,
      url: "https://swan.eyada360.com/",
      tech: ["React", "TypeScript", "Vite"],
      gradient: "from-[#F97316] to-[#EF4444]",
    },
    {
      title: "AI Chat Application",
      description:
        "Intelligent chat application for document processing and data extraction, featuring advanced AI capabilities and real-time responses.",
      image: AIChatImage,
      url: "https://ai-chat-app-delta.vercel.app/",
      tech: ["React", "AI/ML", "Node.js"],
      gradient: "from-[#10B981] to-[#14B8A6]",
    },
    {
      title: "Nurse AI Hub",
      description:
        "Healthcare-focused AI platform providing text and audio responses for nursing and medical assistance with advanced healthcare analytics.",
      image: NurseAIImage,
      url: "https://nurse-ai-hub.vercel.app/",
      tech: ["React", "TypeScript", "AI/ML"],
      gradient: "from-[#3B82F6] to-[#4F46E5]",
    },
    {
      title: "Weather Application",
      description:
        "Real-time weather tracking application with intuitive interface and accurate forecasting capabilities using modern APIs.",
      image: WeatherImage,
      url: "https://weather-new-app.vercel.app/",
      tech: ["React", "API Integration", "JavaScript"],
      gradient: "from-[#0EA5E9] to-[#3B82F6]",
    },
    {
      title: "Task Management System",
      description:
        "Comprehensive task management solution for improved productivity and team collaboration with real-time updates.",
      image: TaskManagementImage,
      url: "https://task-management-app-blue-omega.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-[#8B5CF6] to-[#7C3AED]",
    },
  ]

  const stats = [
    {
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      label: "Years Experience",
      value: "3+",
      color: "text-[#3B82F6]",
    },
    {
      icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      label: "Projects Completed",
      value: "50+",
      color: "text-[#10B981]",
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      label: "Happy Clients",
      value: "30+",
      color: "text-[#8B5CF6]",
    },
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      label: "Technologies",
      value: "15+",
      color: "text-[#F59E0B]",
    },
  ]

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleProjectClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#000529] overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[#EC4899] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#111827]/90 backdrop-blur-lg border-b border-[#374151]/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-[#D1D5DB]"
            >
              Arshman Ahmad
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${activeSection === item.href.substring(1)
                    ? "text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20"
                    : "text-[#D1D5DB] hover:text-[#3B82F6] hover:bg-[#3B82F6]/5"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#FFFFFF] p-2 rounded-lg bg-[#1F2937]/50 hover:bg-[#374151]/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#111827]/95 backdrop-blur-lg border-t border-[#374151]/50"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={`block w-full text-left px-3 py-3 rounded-lg transition-colors text-sm ${activeSection === item.href.substring(1)
                      ? "text-[#3B82F6] bg-[#3B82F6]/10"
                      : "text-[#D1D5DB] hover:text-[#3B82F6] hover:bg-[#3B82F6]/10"
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-3 sm:px-4 pt-16 sm:pt-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="mb-6 sm:mb-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-[#3B82F6] text-xs sm:text-sm md:text-base font-medium mb-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-[#3B82F6]/10 rounded-full border border-[#3B82F6]/20"
              >
                👋 Hello, I'm
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FFFFFF] mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-3 md:mb-4 leading-tight"
              >
                Arshman
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]">
                  Ahmad
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] mb-3 sm:mb-4 md:mb-6 font-semibold"
              >
                <span className="text-[#10B981]">MERN</span> Stack Developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-sm sm:text-base md:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed"
              >
                Passionate full-stack developer with <span className="text-[#3B82F6] font-semibold">3+ years</span> of
                experience crafting exceptional web applications using modern technologies. I transform ideas into
                powerful digital solutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-[#FFFFFF] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3"
                onClick={() => scrollToSection("projects")}
              >
                View My Work <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#FFFFFF] transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base bg-transparent px-4 sm:px-6 md:px-8 py-2 sm:py-3"
                onClick={() => scrollToSection("contact")}
              >
                <Download className="mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Download CV
              </Button> */}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/arshmanahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-[#1F2937]/50 hover:bg-[#374151]/50 text-[#9CA3AF] hover:text-[#FFFFFF] rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/arshman-ahmad-334829298/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-[#3B82F6]/20 hover:bg-[#3B82F6]/30 text-[#3B82F6] hover:text-[#60A5FA] rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="mailto:arshmanwhiz@gmail.com"
                className="p-2 sm:p-3 bg-[#10B981]/20 hover:bg-[#10B981]/30 text-[#10B981] hover:text-[#34D399] rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-[#111827] p-2 sm:p-3 md:p-4 flex items-center justify-center">
                  <img
                    src={Arshman}
                    alt="Arshman Ahmad"
                    className="w-full h-full rounded-full object-cover shadow-lg backgroudposition-center background-size-cover"
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 bg-gradient-to-r from-[#61DAFB] to-[#21D4FD] rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg"
              >
                <Code className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#FFFFFF]" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4 bg-gradient-to-r from-[#68A063] to-[#8CC84B] rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg"
              >
                <Database className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#FFFFFF]" />
              </motion.div>

              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -left-2 sm:-left-4 md:-left-6 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg"
              >
                <Server className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#FFFFFF]" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#3B82F6] animate-bounce" />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className=" bottom-8 sm:bottom-12 md:bottom-20 px-4 sm:px-6 md:px-8 flex justify-center z-10"
      >
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="bg-[#1F2937]/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 text-center border border-[#374151]/50"
              >
                <div className={`${stat.color} mb-2 sm:mb-3 flex justify-center text-[#fff]`}>
                  {stat.icon}
                </div>
                <div className="text-base sm:text-lg md:text-2xl font-bold text-[#fff]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight text-[#fff]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-3 sm:mb-4 md:mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">Me</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
              I'm a passionate MERN stack developer with over 3 years of experience in creating robust, scalable web
              applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#1E3A8A]/20 to-[#0891B2]/20 border-[#3B82F6]/20 backdrop-blur-sm h-full hover:border-[#60A5FA]/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="bg-gradient-to-r from-[#61DAFB] to-[#21D4FD] rounded-full p-2 sm:p-3 md:p-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 shadow-lg">
                    <Code className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FFFFFF] mb-2 sm:mb-3 md:mb-4">
                    Frontend Development
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#D1D5DB] leading-relaxed mb-3 sm:mb-4">
                    Expert in React.js, Next.js, and modern frontend technologies. Creating responsive, interactive user
                    interfaces with exceptional UX and performance optimization.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    <Badge className="bg-[#61DAFB]/20 text-[#61DAFB] border-[#61DAFB]/30 text-xs">React</Badge>
                    <Badge className="bg-[#000000]/20 text-[#FFFFFF] border-[#000000]/30 text-xs">Next.js</Badge>
                    <Badge className="bg-[#3178C6]/20 text-[#3178C6] border-[#3178C6]/30 text-xs">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#14532D]/20 to-[#059669]/20 border-[#10B981]/20 backdrop-blur-sm h-full hover:border-[#34D399]/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="bg-gradient-to-r from-[#68A063] to-[#8CC84B] rounded-full p-2 sm:p-3 md:p-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 shadow-lg">
                    <Server className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FFFFFF] mb-2 sm:mb-3 md:mb-4">
                    Backend Development
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#D1D5DB] leading-relaxed mb-3 sm:mb-4">
                    Proficient in Node.js, Express.js, and database management. Building secure, scalable server-side
                    applications and RESTful APIs with optimal performance.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    <Badge className="bg-[#68A063]/20 text-[#68A063] border-[#68A063]/30 text-xs">Node.js</Badge>
                    <Badge className="bg-[#000000]/20 text-[#FFFFFF] border-[#000000]/30 text-xs">Express</Badge>
                    <Badge className="bg-[#4DB33D]/20 text-[#4DB33D] border-[#4DB33D]/30 text-xs">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group md:col-span-2 lg:col-span-1"
            >
              <Card className="bg-gradient-to-br from-[#581C87]/20 to-[#BE185D]/20 border-[#8B5CF6]/20 backdrop-blur-sm h-full hover:border-[#A78BFA]/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full p-2 sm:p-3 md:p-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 shadow-lg">
                    <Smartphone className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FFFFFF] mb-2 sm:mb-3 md:mb-4">
                    Mobile Development
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#D1D5DB] leading-relaxed mb-3 sm:mb-4">
                    Experienced in React Native for cross-platform mobile applications. Delivering native performance
                    with shared codebase and seamless user experiences.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    <Badge className="bg-[#61DAFB]/20 text-[#61DAFB] border-[#61DAFB]/30 text-xs">React Native</Badge>
                    <Badge className="bg-[#000020]/20 text-[#FFFFFF] border-[#000020]/30 text-xs">Expo</Badge>
                    <Badge className="bg-[#4F46E5]/20 text-[#4F46E5] border-[#4F46E5]/30 text-xs">Mobile UI</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-[#111827]/30 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-3 sm:mb-4 md:mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3B82F6]">Skills</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#1F2937]/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`text-[#FFFFFF] bg-gradient-to-r ${skill.color} p-1 sm:p-1.5 md:p-2 rounded-lg`}>
                      {skill.icon}
                    </div>
                    <span className="text-[#FFFFFF] font-semibold text-sm sm:text-base md:text-lg">{skill.name}</span>
                  </div>
                  <span
                    className={`font-bold text-sm sm:text-base md:text-lg bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-[#374151]/50 rounded-full h-2 sm:h-2.5 md:h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className={`bg-gradient-to-r ${skill.color} h-2 sm:h-2.5 md:h-3 rounded-full shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-3 sm:mb-4 md:mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]">
                Projects
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and expertise in modern web development
            </p>
          </motion.div>

          {/* Projects Grid - One card per row on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project.url)}
              >
                <Card className="bg-[#1F2937]/30 border-[#374151]/50 backdrop-blur-sm overflow-hidden hover:border-[#4B5563]/50 transition-all duration-300 h-full transform hover:scale-105 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/20 to-transparent`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                    {project.featured && (
                      <Badge className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-[#FFFFFF] border-0 shadow-lg text-xs">
                        <Star className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFFFFF] mb-2 sm:mb-3 group-hover:text-[#3B82F6] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#D1D5DB] mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-3 sm:mb-4 md:mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-[#374151]/50 text-[#D1D5DB] border-[#4B5563]/50 hover:bg-[#4B5563]/50 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-[#9CA3AF]">Click to view project</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-[#111827]/30 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-3 sm:mb-4 md:mb-6">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3B82F6]">Touch</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
              Ready to work together? Let's discuss your project and bring your ideas to life with cutting-edge
              technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-[#1F2937]/30 rounded-lg sm:rounded-xl border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <h3 className="text-[#FFFFFF] font-semibold text-sm sm:text-base md:text-lg">Email</h3>
                  <a
                    href="mailto:arshmanwhiz@gmail.com"
                    className="text-[#10B981] hover:text-[#34D399] transition-colors text-xs sm:text-sm md:text-base"
                  >
                    arshmanwhiz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-[#1F2937]/30 rounded-lg sm:rounded-xl border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <h3 className="text-[#FFFFFF] font-semibold text-sm sm:text-base md:text-lg">Phone</h3>
                  <a
                    href="tel:+923156054390"
                    className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors text-xs sm:text-sm md:text-base"
                  >
                    +92 315 6054390
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-[#1F2937]/30 rounded-lg sm:rounded-xl border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <h3 className="text-[#FFFFFF] font-semibold text-sm sm:text-base md:text-lg">Location</h3>
                  <span className="text-[#8B5CF6] text-xs sm:text-sm md:text-base">Pakistan</span>
                </div>
              </div>

              <div className="pt-2 sm:pt-4 md:pt-8">
                <h3 className="text-[#FFFFFF] font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
                  Connect with me
                </h3>
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  <a
                    href="https://github.com/arshmanahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1F2937]/50 hover:bg-[#374151]/50 rounded-full p-2 sm:p-2.5 md:p-3 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#9CA3AF] group-hover:text-[#FFFFFF]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arshman-ahmad-334829298/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3B82F6]/20 hover:bg-[#3B82F6]/30 rounded-full p-2 sm:p-2.5 md:p-3 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#3B82F6] group-hover:text-[#60A5FA]" />
                  </a>
                  <a
                    href="https://www.fiverr.com/arsh153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#10B981]/20 hover:bg-[#10B981]/30 rounded-full p-2 sm:p-2.5 md:p-3 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#10B981] group-hover:text-[#34D399]" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-[#1F2937]/30 border-[#374151]/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <form className="space-y-3 sm:space-y-4 md:space-y-6">
                    <div>
                      <label className="block text-[#FFFFFF] font-medium mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 bg-[#374151]/30 border border-[#4B5563]/50 rounded-lg text-[#FFFFFF] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300 text-xs sm:text-sm md:text-base"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#FFFFFF] font-medium mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 bg-[#374151]/30 border border-[#4B5563]/50 rounded-lg text-[#FFFFFF] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300 text-xs sm:text-sm md:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[#FFFFFF] font-medium mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 bg-[#374151]/30 border border-[#4B5563]/50 rounded-lg text-[#FFFFFF] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300 text-xs sm:text-sm md:text-base"
                        placeholder="Project Discussion"
                      />
                    </div>
                    <div>
                      <label className="block text-[#FFFFFF] font-medium mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 bg-[#374151]/30 border border-[#4B5563]/50 rounded-lg text-[#FFFFFF] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 resize-none transition-all duration-300 text-xs sm:text-sm md:text-base"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-[#FFFFFF] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3"
                    >
                      Send Message <Send className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 sm:py-6 md:py-8 px-3 sm:px-4 border-t border-[#374151]/50 bg-[#111827]/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#9CA3AF] text-xs sm:text-sm md:text-base">
            © 2025 <span className="text-[#3B82F6] font-semibold">Arshman Ahmad</span>. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
