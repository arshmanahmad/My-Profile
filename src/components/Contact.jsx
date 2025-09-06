import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "arshmanwhiz@gmail.com",
      href: "mailto:arshmanwhiz@gmail.com",
      color: "from-[#10B981] to-[#059669]",
      textColor: "text-[#10B981] hover:text-[#34D399]"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 329 4494502",
      href: "tel:+923156054390",
      color: "from-[#3B82F6] to-[#0EA5E9]",
      textColor: "text-[#3B82F6] hover:text-[#60A5FA]"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      href: "#",
      color: "from-[#8B5CF6] to-[#EC4899]",
      textColor: "text-[#8B5CF6]"
    }
  ];

  const socialLinks = [
    {
      href: "https://github.com/arshmanahmad",
      icon: Github,
      label: "GitHub",
      className: "bg-[#1F2937]/50 hover:bg-[#374151]/50 text-[#9CA3AF] group-hover:text-[#FFFFFF]"
    },
    {
      href: "https://www.linkedin.com/in/arshman-ahmad-334829298/",
      icon: Linkedin,
      label: "LinkedIn",
      className: "bg-[#3B82F6]/20 hover:bg-[#3B82F6]/30 text-[#3B82F6] group-hover:text-[#60A5FA]"
    },
    {
      href: "https://www.fiverr.com/arsh153",
      icon: Globe,
      label: "Fiverr",
      className: "bg-[#10B981]/20 hover:bg-[#10B981]/30 text-[#10B981] group-hover:text-[#34D399]"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 sm:space-y-6 md:space-y-8"
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-[#1F2937]/30 rounded-lg sm:rounded-xl border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300 group"
            whileHover={{ x: 5 }}
          >
            <div className={`bg-gradient-to-r ${info.color} rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg`}>
              <info.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFFFFF]" />
            </div>
            <div>
              <h3 className="text-[#FFFFFF] font-semibold text-sm sm:text-base md:text-lg">
                {info.title}
              </h3>
              <a
                href={info.href}
                className={`transition-colors text-xs sm:text-sm md:text-base ${info.textColor}`}
              >
                {info.value}
              </a>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-2 sm:pt-4 md:pt-8"
        >
          <h3 className="text-[#FFFFFF] font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
            Connect with me
          </h3>
          <div className="flex gap-2 sm:gap-3 md:gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full p-2 sm:p-2.5 md:p-3 transition-all duration-300 transform hover:scale-110 group ${link.className}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <link.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Form Placeholder - You can add a form here later */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block"
      >
        <div className="bg-[#1F2937]/30 backdrop-blur-sm rounded-xl border border-[#374151]/50 p-6 md:p-8">
          <h3 className="text-[#FFFFFF] font-bold text-lg md:text-xl mb-4">
            Let's Work Together
          </h3>
          <p className="text-[#D1D5DB] text-sm md:text-base mb-6">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to discuss a potential collaboration.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#D1D5DB]">
              <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
              <span className="text-sm">Available for freelance work</span>
            </div>
            <div className="flex items-center gap-3 text-[#D1D5DB]">
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
              <span className="text-sm">Open to full-time opportunities</span>
            </div>
            <div className="flex items-center gap-3 text-[#D1D5DB]">
              <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
              <span className="text-sm">Interested in startup projects</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export { Contact };
