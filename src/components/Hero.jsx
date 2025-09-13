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
  ChevronDown 
} from "lucide-react";
import { Button } from "./Button";
import { LoadingSpinner } from "./LoadingSpinner";

const Hero = ({ 
  onViewWork = () => {},
  onScrollDown = () => {},
  isLoading = false 
}) => {
  const socialLinks = [
    {
      href: "https://github.com/arshmanahmad",
      icon: Github,
      label: "GitHub",
      className: "bg-[#1F2937]/50 hover:bg-[#374151]/50 text-[#9CA3AF] hover:text-[#FFFFFF]"
    },
    {
      href: "https://www.linkedin.com/in/arshman-ahmad-334829298/",
      icon: Linkedin,
      label: "LinkedIn",
      className: "bg-[#3B82F6]/20 hover:bg-[#3B82F6]/30 text-[#3B82F6] hover:text-[#60A5FA]"
    },
    {
      href: "mailto:arshmanwhiz@gmail.com",
      icon: Mail,
      label: "Email",
      className: "bg-[#10B981]/20 hover:bg-[#10B981]/30 text-[#10B981] hover:text-[#34D399]"
    }
  ];

  const floatingIcons = [
    {
      icon: Code,
      position: "absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4",
      gradient: "from-[#61DAFB] to-[#21D4FD]",
      animation: { y: [-10, 10, -10] },
      delay: 0
    },
    {
      icon: Database,
      position: "absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4",
      gradient: "from-[#68A063] to-[#8CC84B]",
      animation: { y: [10, -10, 10] },
      delay: 1.5
    },
    {
      icon: Server,
      position: "absolute top-1/2 -left-2 sm:-left-4 md:-left-6",
      gradient: "from-[#8B5CF6] to-[#EC4899]",
      animation: { x: [-10, 10, -10] },
      delay: 0
    }
  ];

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="xl" text="Loading Portfolio..." />
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-16 sm:pt-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-10">
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-[#FFFFFF] mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-3 md:mb-4 leading-tight"
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
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#D1D5DB] mb-3 sm:mb-4 md:mb-6 font-semibold"
            >
              <span className="text-[#10B981]">Full-Stack</span> Developer & <span className="text-[#3B82F6]">Automation</span> Expert
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#9CA3AF] max-w-3xl leading-relaxed"
            >
              Transforming businesses with <span className="text-[#3B82F6] font-semibold">4+ years</span> of expertise in 
              <span className="text-[#10B981] font-semibold"> MERN stack</span>, 
              <span className="text-[#F59E0B] font-semibold"> Python automation</span>, and 
              <span className="text-[#8B5CF6] font-semibold"> payment integrations</span>. 
              I deliver scalable solutions that drive growth and optimize performance.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-[#FFFFFF] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3"
                onClick={onViewWork}
              >
                View My Work <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-[#FFFFFF] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me Now
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${link.className}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <link.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[20rem] xl:h-[20rem] 2xl:w-[22rem] 2xl:h-[22rem] rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-[#111827] p-2 sm:p-3 md:p-4 flex items-center justify-center">
                <img
                  src="/src/assets/arshman3.png"
                  alt="Arshman Ahmad"
                  className="w-full h-full rounded-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Floating Icons */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                animate={item.animation}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: item.delay 
                }}
                className={`${item.position} bg-gradient-to-r ${item.gradient} rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg`}
              >
                <item.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#FFFFFF]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={onScrollDown}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#3B82F6] hover:text-[#60A5FA] transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Hero };
