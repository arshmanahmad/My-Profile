import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Users, Award } from "lucide-react";

const Stats = ({ stats = [] }) => {
  const defaultStats = [
    {
      icon: Calendar,
      label: "Years Experience",
      value: "3+",
      color: "text-[#3B82F6]",
    },
    {
      icon: Briefcase,
      label: "Projects Completed",
      value: "50+",
      color: "text-[#10B981]",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "30+",
      color: "text-[#8B5CF6]",
    },
    {
      icon: Award,
      label: "Technologies",
      value: "15+",
      color: "text-[#F59E0B]",
    },
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="bottom-8 sm:bottom-12 md:bottom-20 px-4 sm:px-6 md:px-8 lg:px-12 flex justify-center z-10"
    >
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {displayStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              className="bg-[#1F2937]/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 text-center border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className={`${stat.color} mb-3 sm:mb-4 md:mb-5 flex justify-center text-[#fff]`}>
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <motion.div 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#fff] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-tight text-[#fff] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export { Stats };
