import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Users, Award } from "lucide-react";

const Stats = ({ stats = [] }) => {
  const defaultStats = [
    {
      icon: Calendar,
      label: "Years Experience",
      value: "4+",
      color: "text-blue-400",
    },
    {
      icon: Briefcase,
      label: "Projects Completed",
      value: "100+",
      color: "text-indigo-400",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "50+",
      color: "text-sky-400",
    },
    {
      icon: Award,
      label: "Technologies",
      value: "15+",
      color: "text-blue-500",
    },
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {displayStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 sm:p-5 md:p-6 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/30"
              whileHover={{ y: -8, scale: 1.05, rotate: [0, -2, 2, 0] }}
            >
              <div className={`${stat.color} mb-3 sm:mb-4 flex justify-center`}>
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 drop-shadow-lg" />
              </div>
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent mb-2 drop-shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs sm:text-sm md:text-base text-slate-400 leading-tight font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export { Stats };
