import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  const floatingElements = [
    {
      color: "bg-[#8B5CF6]",
      size: "w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72",
      position: "top-1/4 left-1/4",
      animation: {
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1]
      },
      duration: 6
    },
    {
      color: "bg-[#F59E0B]",
      size: "w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72",
      position: "top-3/4 right-1/4",
      animation: {
        y: [0, 20, 0],
        x: [0, -10, 0],
        scale: [1, 0.9, 1]
      },
      duration: 8
    },
    {
      color: "bg-[#EC4899]",
      size: "w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72",
      position: "bottom-1/4 left-1/3",
      animation: {
        y: [0, -15, 0],
        x: [0, 15, 0],
        scale: [1, 1.05, 1]
      },
      duration: 10
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -inset-10 opacity-20">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} ${element.size} ${element.color} rounded-full mix-blend-multiply filter blur-xl`}
            animate={element.animation}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2
            }}
          />
        ))}
      </div>
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#000529] to-[#000000] opacity-90" />
    </div>
  );
};

export { Background };
