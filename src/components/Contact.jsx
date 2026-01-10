import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "arshmanwhiz@gmail.com",
      href: "mailto:arshmanwhiz@gmail.com",
      color: "from-blue-500 to-indigo-500",
      textColor: "text-slate-300 hover:text-white",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 315 6054390",
      href: "tel:+923156054390",
      color: "from-indigo-500 to-sky-500",
      textColor: "text-slate-300 hover:text-white",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+92 315 6054390",
      href: "https://wa.me/923156054390",
      color: "from-green-500 to-emerald-500",
      textColor: "text-slate-300 hover:text-white",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      href: "#",
      color: "from-sky-500 to-blue-500",
      textColor: "text-slate-300",
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/arshmanahmad",
      icon: Github,
      label: "GitHub",
      className:
        "bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 group-hover:text-white border border-slate-700/50 backdrop-blur-md shadow-lg hover:shadow-xl",
    },
    {
      href: "https://www.linkedin.com/in/arshman-ahmad-334829298/",
      icon: Linkedin,
      label: "LinkedIn",
      className:
        "bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 group-hover:text-blue-300 border border-blue-500/30 backdrop-blur-md shadow-lg hover:shadow-xl",
    },
    {
      href: "https://www.fiverr.com/arsh153",
      icon: Globe,
      label: "Fiverr",
      className:
        "bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 group-hover:text-indigo-300 border border-indigo-500/30 backdrop-blur-md shadow-lg hover:shadow-xl",
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4 sm:space-y-5 md:space-y-6"
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/30"
            whileHover={{ x: 5, scale: 1.02, y: -2 }}
          >
            <div
              className={`bg-gradient-to-r ${info.color} rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg flex-shrink-0`}
            >
              <info.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow-md" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1 drop-shadow-md">
                {info.title}
              </h3>
              <a
                href={info.href}
                target={info.target || "_self"}
                rel={info.rel || ""}
                className={`transition-colors text-sm sm:text-base text-slate-300 hover:text-white hover:underline break-words drop-shadow-sm`}
              >
                {info.value}
              </a>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="pt-6 sm:pt-8"
        >
          <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 tracking-tight drop-shadow-lg">
            Ready to get started?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6 font-medium leading-relaxed drop-shadow-md">
            Let's discuss your project and how I can help you achieve your goals.
          </p>
          
          {/* WhatsApp Button - Prominent */}
          <motion.a
            href="https://wa.me/923156054390"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-green-600 text-white hover:bg-green-700 px-6 py-4 rounded-2xl font-bold text-base sm:text-lg mb-6 shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 w-full sm:w-auto justify-center group focus-ring"
            aria-label="Chat with me on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="text-xl font-bold"
              aria-hidden="true"
            >
              →
            </motion.div>
          </motion.a>

          <div className="flex gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full p-3 transition-all duration-300 transform hover:scale-110 group ${link.className}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <link.icon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full"
      >
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border-2 border-slate-700/50 p-6 sm:p-8 md:p-10 shadow-2xl hover:shadow-blue-500/30 transition-all">
          <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 tracking-tight drop-shadow-lg">
            Ready to Transform Your Business?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed font-medium drop-shadow-md">
            Let's discuss how my expertise in full-stack development,
            automation, and optimization can drive your success. I deliver
            measurable results that impact your bottom line.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🚀", text: "Available for immediate projects", color: "bg-blue-500 shadow-blue-500/50" },
              { icon: "💼", text: "Open to full-time positions", color: "bg-indigo-500 shadow-indigo-500/50" },
              { icon: "⚡", text: "Specialized in automation & optimization", color: "bg-sky-500 shadow-sky-500/50" },
              { icon: "💰", text: "Payment gateway integration expert", color: "bg-blue-600 shadow-blue-600/50" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-white p-3 rounded-xl hover:bg-slate-700/30 transition-colors backdrop-blur-sm border border-slate-700/50"
              >
                <div className={`w-3 h-3 ${item.color} rounded-full flex-shrink-0 shadow-lg`}></div>
                <span className="text-sm font-semibold drop-shadow-md">
                  {item.icon} {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export { Contact };
