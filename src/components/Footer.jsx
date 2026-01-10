import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 border-t border-slate-700/50 bg-slate-900/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-300 text-sm sm:text-base mb-2 font-medium drop-shadow-md">
            © {currentYear} <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent font-bold">Arshman Ahmad</span>. All rights reserved
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-500 text-xs sm:text-sm font-medium drop-shadow-sm"
          >
            Built with React, TypeScript, and Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };
