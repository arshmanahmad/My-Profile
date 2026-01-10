import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Container, Zap, CreditCard, Wrench, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./Card";
import { Badge } from "./Badge";

const About = () => {
  const aboutCards = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in MERN stack with 4+ years of experience building scalable web applications. Specialized in React.js, Node.js, and modern frontend technologies with focus on performance optimization and user experience.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind"],
      gradient: "from-blue-600 to-indigo-600",
      borderColor: "border-slate-700/50",
      hoverBorderColor: "hover:border-blue-500/50",
      iconGradient: "from-blue-500 via-indigo-500 to-sky-500",
      techVariants: ["default", "secondary", "purple", "outline"]
    },
    {
      icon: Zap,
      title: "Automation & Integration",
      description: "Specialized in Python automation, web scraping, and payment gateway integrations. Building efficient systems that reduce manual work and increase business productivity through smart automation solutions.",
      tech: ["Python", "Docker", "APIs", "Scraping"],
      gradient: "from-indigo-600 to-sky-600",
      borderColor: "border-slate-700/50",
      hoverBorderColor: "hover:border-indigo-500/50",
      iconGradient: "from-indigo-500 via-sky-500 to-blue-500",
      techVariants: ["success", "secondary", "success", "outline"]
    },
    {
      icon: TrendingUp,
      title: "Performance & Growth",
      description: "Focused on optimization, maintenance, and conversion improvements. Delivering measurable results through performance tuning, system maintenance, and data-driven optimization strategies that drive business growth.",
      tech: ["Optimization", "Maintenance", "Analytics", "Growth"],
      gradient: "from-sky-600 to-blue-600",
      borderColor: "border-slate-700/50",
      hoverBorderColor: "hover:border-sky-500/50",
      iconGradient: "from-sky-500 via-blue-500 to-indigo-500",
      techVariants: ["purple", "outline", "purple", "success"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-8 w-full">
      {aboutCards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
          className="group"
        >
          <Card 
            className={`bg-slate-800/40 backdrop-blur-xl ${card.borderColor} h-full ${card.hoverBorderColor} transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30 shadow-xl border-2`}
            hover
          >
            <CardContent className="p-6 sm:p-8 md:p-6 lg:p-8 text-center">
              <div className={`bg-gradient-to-r ${card.iconGradient} rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 shadow-xl`}>
                <card.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 font-medium drop-shadow-md">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {card.tech.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: techIndex * 0.1 }}
                  >
                    <Badge
                      variant={card.techVariants[techIndex]}
                      size="sm"
                      className="text-xs sm:text-sm font-semibold hover:scale-105 transition-transform shadow-lg"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export { About };
