import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 sm:py-6 md:py-8 px-3 sm:px-4 border-t border-[#374151]/50 bg-[#111827]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#9CA3AF] text-xs sm:text-sm md:text-base">
            © {currentYear} <span className="text-[#3B82F6] font-semibold">Arshman Ahmad</span>. All rights reserved
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#6B7280] text-xs mt-2"
          >
            Built with React, TypeScript, and Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };
