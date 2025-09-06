import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cnFunction";

const Section = ({ 
  children, 
  className = "", 
  id = "",
  title = "",
  subtitle = "",
  gradient = false,
  background = false,
  ...props 
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      id={id}
      className={cn(
        "py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative",
        background && "bg-[#111827]/30",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      {...props}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FFFFFF] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                {title}
                {gradient && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
                    {" "}{gradient}
                  </span>
                )}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#D1D5DB] max-w-4xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </motion.section>
  );
};

export { Section };
