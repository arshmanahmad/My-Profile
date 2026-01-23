import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Server,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "./Button";
import { LoadingSpinner } from "./LoadingSpinner";

const Hero = ({
  onViewWork = () => {},
  onScrollDown = () => {},
  isLoading = false,
}) => {
  const socialLinks = [
    {
      href: "https://github.com/arshmanahmad",
      icon: Github,
      label: "GitHub",
      className:
        "bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white border border-slate-700/50 backdrop-blur-md shadow-lg hover:shadow-xl",
    },
    {
      href: "https://www.linkedin.com/in/arshman-ahmad-334829298/",
      icon: Linkedin,
      label: "LinkedIn",
      className:
        "bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 border border-blue-500/30 backdrop-blur-md shadow-lg hover:shadow-xl",
    },
    {
      href: "mailto:arshmanwhiz@gmail.com",
      icon: Mail,
      label: "Email",
      className:
        "bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 backdrop-blur-md shadow-lg hover:shadow-xl",
    },
  ];

  const floatingIcons = [
    {
      icon: Code,
      position:
        "absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4",
      gradient: "from-cyan-400 to-cyan-600",
      animation: { y: [-10, 10, -10] },
      delay: 0,
    },
    {
      icon: Database,
      position:
        "absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4",
      gradient: "from-emerald-400 to-emerald-600",
      animation: { y: [10, -10, 10] },
      delay: 1.5,
    },
    {
      icon: Server,
      position: "absolute top-1/2 -left-2 sm:-left-4 md:-left-6",
      gradient: "from-indigo-400 to-violet-600",
      animation: { x: [-10, 10, -10] },
      delay: 0,
    },
  ];

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="xl" text="Loading Portfolio..." />
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-32 relative w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Profile Content - Left side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left w-full lg:w-auto order-2 lg:order-1"
          >
            <div className="mb-6 sm:mb-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              className="inline-block text-blue-400 text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 backdrop-blur-md shadow-lg"
            >
              👋 Hello, I'm
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mt-4 mb-4 leading-[1.1] tracking-tight drop-shadow-2xl"
            >
              Arshman
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                Ahmad
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-6 font-semibold tracking-tight drop-shadow-lg"
            >
              <span className="text-blue-400 font-bold">Full-Stack</span> Developer &{" "}
              <span className="text-indigo-400 font-bold">Automation</span> Expert
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 font-medium drop-shadow-md"
            >
              Transforming businesses with{" "}
              <span className="text-blue-400 font-bold">4+ years</span> of
              expertise in{" "}
              <span className="text-indigo-400 font-bold">MERN stack</span>,{" "}
              <span className="text-sky-400 font-bold">Python automation</span>,
              and{" "}
              <span className="text-blue-500 font-bold">payment integrations</span>.
              I deliver scalable solutions that drive growth.
            </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 transform hover:scale-105 px-6 py-3 w-full sm:w-auto font-bold focus-ring rounded-xl"
                onClick={onViewWork}
                aria-label="View my portfolio projects"
              >
                View My Work{" "}
                <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3 w-full sm:w-auto font-bold focus-ring rounded-xl"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Contact me for hiring"
              >
                Hire Me Now
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${link.className}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image - Right side on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative flex justify-center lg:justify-end">
              <motion.div 
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full p-3 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(37, 99, 235, 0.2)",
                    "0 0 60px rgba(37, 99, 235, 0.4), 0 0 100px rgba(29, 78, 216, 0.2)",
                    "0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(37, 99, 235, 0.2)",
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-600 p-2">
                  <div className="w-full h-full rounded-full bg-slate-900/30 backdrop-blur-md p-2 flex items-center justify-center overflow-hidden border-2 border-slate-700/50">
                    <img
                      src="/src/assets/arshman3.png"
                      alt="Arshman Ahmad"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  animate={item.animation}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                  className={`${item.position} bg-gradient-to-r ${item.gradient} rounded-full p-2 md:p-3 shadow-lg z-10`}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={onScrollDown}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-700/50 shadow-xl hover:bg-slate-700/50 transition-all"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Hero };
