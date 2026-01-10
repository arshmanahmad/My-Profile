import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Smartphone,
  Globe,
  Container,
  Zap,
  CreditCard,
  Wrench,
  TrendingUp,
  Settings,
  Network,
  Brain,
  ShoppingCart,
} from "lucide-react";

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
      name: "FastAPI",
      level: 90,
      icon: Server,
      color: "from-[#009688] to-[#00BCD4]",
    },
    {
      name: "LangChain",
      level: 88,
      icon: Brain,
      color: "from-[#FF6B6B] to-[#FF8E53]",
    },
    {
      name: "LangGraph",
      level: 86,
      icon: Network,
      color: "from-[#9B59B6] to-[#8E44AD]",
    },
    {
      name: "Shopify API",
      level: 89,
      icon: ShoppingCart,
      color: "from-[#95BF47] to-[#5E8E3E]",
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
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 w-full">
      {displaySkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-slate-800/40 backdrop-blur-xl rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 min-w-0 overflow-hidden"
          whileHover={{ scale: 1.03, y: -6, rotate: [0, -1, 1, 0] }}
        >
          <div className="flex items-center justify-between mb-4 gap-2">
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 flex-1 min-w-0 overflow-hidden">
              <motion.div
                className={`bg-gradient-to-r ${skill.color} p-1.5 xs:p-2 sm:p-2.5 rounded-lg xs:rounded-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white drop-shadow-md" />
              </motion.div>
              <span className="text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg truncate tracking-tight drop-shadow-md min-w-0 overflow-hidden">
                {skill.name}
              </span>
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="font-bold text-sm xs:text-base sm:text-lg md:text-xl bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent ml-1 xs:ml-2 flex-shrink-0 drop-shadow-lg whitespace-nowrap"
            >
              {skill.level}%
            </motion.span>
          </div>

          <div className="w-full bg-slate-700/50 rounded-full h-2 xs:h-2.5 sm:h-3 overflow-hidden shadow-inner backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
              className={`bg-gradient-to-r ${skill.color} h-2 xs:h-2.5 sm:h-3 rounded-full shadow-lg relative overflow-hidden`}
            >
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-full"
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.1 + 0.5, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export { Skills };
