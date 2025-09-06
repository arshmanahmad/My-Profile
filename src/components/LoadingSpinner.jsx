import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cnFunction";

const LoadingSpinner = ({ 
  size = "md", 
  color = "primary", 
  className = "",
  text = "",
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };

  const colorClasses = {
    primary: "border-[#3B82F6]",
    secondary: "border-[#10B981]",
    white: "border-white",
    gray: "border-gray-400"
  };

  const spinner = (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <motion.div
        className={cn(
          "border-2 border-t-transparent rounded-full animate-spin",
          sizeClasses[size],
          colorClasses[color]
        )}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      {text && (
        <motion.p
          className="mt-2 text-sm text-[#D1D5DB]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-[#000000]/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export { LoadingSpinner };
