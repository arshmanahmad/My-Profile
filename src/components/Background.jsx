import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  const floatingElements = [
    {
      color: "bg-blue-600",
      size: "w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96",
      position: "top-10 left-10",
      animation: {
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      },
      duration: 8
    },
    {
      color: "bg-indigo-600",
      size: "w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80",
      position: "top-1/3 right-20",
      animation: {
        y: [0, 30, 0],
        x: [0, -25, 0],
        scale: [1, 0.8, 1],
        rotate: [360, 180, 0]
      },
      duration: 10
    },
    {
      color: "bg-slate-600",
      size: "w-36 h-36 sm:w-60 sm:h-60 md:w-76 md:h-76 lg:w-88 lg:h-88",
      position: "bottom-20 left-1/4",
      animation: {
        y: [0, -25, 0],
        x: [0, 30, 0],
        scale: [1, 1.15, 1],
        rotate: [0, -180, -360]
      },
      duration: 12
    },
    {
      color: "bg-sky-600",
      size: "w-28 h-28 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72",
      position: "bottom-1/4 right-1/4",
      animation: {
        y: [0, 35, 0],
        x: [0, -20, 0],
        scale: [1, 1.1, 1],
        rotate: [0, 90, 180, 270, 360]
      },
      duration: 14
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 opacity-10">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} ${element.size} ${element.color} rounded-full mix-blend-screen filter blur-[100px]`}
            animate={element.animation}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 1.5
            }}
          />
        ))}
      </div>
      
      {/* Subtle professional gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3), transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.3), transparent 50%)",
            "radial-gradient(circle at 40% 20%, rgba(29, 78, 216, 0.3), transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3), transparent 50%)",
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export { Background };
