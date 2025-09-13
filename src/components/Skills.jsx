import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Smartphone, Globe, Container, Zap, CreditCard, Wrench, TrendingUp, Settings } from "lucide-react";

const Skills = ({ skills = [] }) => {
  const defaultSkills = [
    {
      name: "React.js",
      level: 95,
      icon: Code,
      color: "from-[#61DAFB] to-[#21D4FD]",
    },
    {
      name: "Node.js",
      level: 90,
      icon: Server,
      color: "from-[#68A063] to-[#8CC84B]",
    },
    {
      name: "Docker",
      level: 88,
      icon: Container,
      color: "from-[#2496ED] to-[#0EA5E9]",
    },
    {
      name: "Python Scraping",
      level: 85,
      icon: Zap,
      color: "from-[#3776AB] to-[#FFD43B]",
    },
    {
      name: "Python Automation",
      level: 87,
      icon: Settings,
      color: "from-[#3776AB] to-[#4B8BBE]",
    },
    {
      name: "Payment Gateways",
      level: 90,
      icon: CreditCard,
      color: "from-[#10B981] to-[#059669]",
    },
    {
      name: "RESTful APIs",
      level: 92,
      icon: Server,
      color: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      name: "MongoDB",
      level: 85,
      icon: Database,
      color: "from-[#4DB33D] to-[#3FA037]",
    },
    {
      name: "Express.js",
      level: 88,
      icon: Server,
      color: "from-[#404040] to-[#000000]",
    },
    {
      name: "Maintenance",
      level: 90,
      icon: Wrench,
      color: "from-[#F59E0B] to-[#D97706]",
    },
    {
      name: "Optimization",
      level: 93,
      icon: TrendingUp,
      color: "from-[#EF4444] to-[#DC2626]",
    },
    {
      name: "Conversions",
      level: 88,
      icon: TrendingUp,
      color: "from-[#06B6D4] to-[#0891B2]",
    },
    {
      name: "React Native",
      level: 82,
      icon: Smartphone,
      color: "from-[#61DAFB] to-[#764ABC]",
    },
    {
      name: "TypeScript",
      level: 87,
      icon: Code,
      color: "from-[#3178C6] to-[#235A97]",
    },
    {
      name: "Next.js",
      level: 90,
      icon: Globe,
      color: "from-[#000000] to-[#404040]",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      icon: Code,
      color: "from-[#06B6D4] to-[#0891B2]",
    },
  ];

  const displaySkills = skills.length > 0 ? skills : defaultSkills;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      {displaySkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-[#1F2937]/30 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300 group"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className={`text-[#FFFFFF] bg-gradient-to-r ${skill.color} p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-lg shadow-lg`}>
                <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              </div>
              <span className="text-[#FFFFFF] font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {skill.name}
              </span>
            </div>
            <span
              className={`font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
            >
              {skill.level}%
            </span>
          </div>

          <div className="w-full bg-[#374151]/50 rounded-full h-2 sm:h-3 md:h-4 lg:h-5 overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${skill.color} h-2 sm:h-3 md:h-4 lg:h-5 rounded-full shadow-lg relative`}
            >
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-full"
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export { Skills };
