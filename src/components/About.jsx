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
      gradient: "from-[#1E3A8A]/20 to-[#0891B2]/20",
      borderColor: "border-[#3B82F6]/20",
      hoverBorderColor: "hover:border-[#60A5FA]/40",
      iconGradient: "from-[#61DAFB] to-[#21D4FD]",
      techVariants: ["default", "secondary", "purple", "outline"]
    },
    {
      icon: Zap,
      title: "Automation & Integration",
      description: "Specialized in Python automation, web scraping, and payment gateway integrations. Building efficient systems that reduce manual work and increase business productivity through smart automation solutions.",
      tech: ["Python", "Docker", "APIs", "Scraping"],
      gradient: "from-[#14532D]/20 to-[#059669]/20",
      borderColor: "border-[#10B981]/20",
      hoverBorderColor: "hover:border-[#34D399]/40",
      iconGradient: "from-[#68A063] to-[#8CC84B]",
      techVariants: ["success", "secondary", "success", "outline"]
    },
    {
      icon: TrendingUp,
      title: "Performance & Growth",
      description: "Focused on optimization, maintenance, and conversion improvements. Delivering measurable results through performance tuning, system maintenance, and data-driven optimization strategies that drive business growth.",
      tech: ["Optimization", "Maintenance", "Analytics", "Growth"],
      gradient: "from-[#581C87]/20 to-[#BE185D]/20",
      borderColor: "border-[#8B5CF6]/20",
      hoverBorderColor: "hover:border-[#A78BFA]/40",
      iconGradient: "from-[#8B5CF6] to-[#EC4899]",
      techVariants: ["purple", "outline", "purple", "success"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
      {aboutCards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
          className="group"
        >
          <Card 
            className={`bg-gradient-to-br ${card.gradient} ${card.borderColor} backdrop-blur-sm h-full ${card.hoverBorderColor} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            hover
          >
            <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10 text-center">
              <div className={`bg-gradient-to-r ${card.iconGradient} rounded-full p-3 sm:p-4 md:p-5 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 shadow-lg`}>
                <card.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D1D5DB] leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {card.tech.map((tech, techIndex) => (
                  <Badge
                    key={tech}
                    variant={card.techVariants[techIndex]}
                    size="md"
                    className="text-sm font-medium"
                  >
                    {tech}
                  </Badge>
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
