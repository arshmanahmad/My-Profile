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
        "py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative w-full overflow-hidden",
        background && "bg-slate-900/20 backdrop-blur-md border-y border-slate-700/30",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
      {...props}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-[1.1] drop-shadow-2xl">
                <span className="text-white">{title}</span>
                {gradient && (
                  <span className="block sm:inline bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                    {" "}{gradient}
                  </span>
                )}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium px-4 drop-shadow-lg">
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
