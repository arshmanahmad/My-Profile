import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "./Card";
import { Badge } from "./Badge";

const Projects = ({ projects = [] }) => {
  const defaultProjects = [
    {
      title: "HR Portal",
      description: "Comprehensive HR Management system built with React, TypeScript, and Vite. Features full-fledged functionalities for modern HR operations including employee management, payroll, and analytics.",
      image: "/src/assets/projectsImages/hr7.png",
      url: "https://hr-portal-nu.vercel.app/",
      tech: ["React", "TypeScript", "Vite", "Tailwind"],
      gradient: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      title: "Swan Thai Restaurant",
      description: "Modern restaurant website with elegant design, built using React, TypeScript, and Vite for optimal performance and user experience.",
      image: "/src/assets/swanThai.png",
      url: "https://swan.eyada360.com/",
      tech: ["React", "TypeScript", "Vite"],
      gradient: "from-[#F97316] to-[#EF4444]",
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chat application for document processing and data extraction, featuring advanced AI capabilities and real-time responses.",
      image: "/src/assets/AIChat.png",
      url: "https://ai-chat-app-delta.vercel.app/",
      tech: ["React", "AI/ML", "Node.js"],
      gradient: "from-[#10B981] to-[#14B8A6]",
    },
    {
      title: "Nurse AI Hub",
      description: "Healthcare-focused AI platform providing text and audio responses for nursing and medical assistance with advanced healthcare analytics.",
      image: "/src/assets/nurseAIHub.png",
      url: "https://nurse-ai-hub.vercel.app/",
      tech: ["React", "TypeScript", "AI/ML"],
      gradient: "from-[#3B82F6] to-[#4F46E5]",
    },
    {
      title: "Weather Application",
      description: "Real-time weather tracking application with intuitive interface and accurate forecasting capabilities using modern APIs.",
      image: "/src/assets/weather app.png",
      url: "https://weather-new-app.vercel.app/",
      tech: ["React", "API Integration", "JavaScript"],
      gradient: "from-[#0EA5E9] to-[#3B82F6]",
    },
    {
      title: "SmartLedger System",
      description: "My flagship application - an advanced ledger management system with intelligent features for financial tracking, reporting, and business analytics. Built with cutting-edge technologies to provide real-time data processing and comprehensive financial insights for modern businesses.",
      image: "/src/assets/eternal.png",
      url: "https://smarledger.com",
      tech: ["React", "Node.js", "MongoDB", "Analytics", "Payment Integration"],
      featured: true,
      gradient: "from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      title: "Task Management System",
      description: "Comprehensive task management solution for improved productivity and team collaboration with real-time updates.",
      image: "/src/assets/task.png",
      url: "https://task-management-app-blue-omega.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-[#8B5CF6] to-[#7C3AED]",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  const handleProjectClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-8 sm:space-y-12 md:space-y-16">
      {/* Featured Project - Full Width */}
      {displayProjects.filter(project => project.featured).map((project, index) => (
        <motion.div
          key={`featured-${project.title}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="group cursor-pointer"
          onClick={() => handleProjectClick(project.url)}
          whileHover={{ y: -5 }}
        >
          <Card className="overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3B82F6]/20 border-2 border-transparent hover:border-[#3B82F6]/30 transition-all duration-500 bg-gradient-to-r from-[#1F2937]/40 to-[#111827]/40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/60 via-transparent to-transparent" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                
                {/* Overlay with project info */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="bg-[#000000]/80 backdrop-blur-sm rounded-lg p-6 text-center"
                  >
                    <ExternalLink className="w-10 h-10 text-[#FFFFFF] mx-auto mb-3" />
                    <p className="text-[#FFFFFF] font-medium text-lg">View Featured Project</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="absolute top-4 left-4"
                >
                  <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-[#FFFFFF] border-0 shadow-lg text-base font-bold px-4 py-2">
                    <Star className="w-4 h-4 mr-2" />
                    Featured Project
                  </Badge>
                </motion.div>
              </div>

              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-4 sm:mb-6 group-hover:text-[#3B82F6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#D1D5DB] mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="tech"
                      size="lg"
                      className="hover:bg-[#4B5563]/50 transition-colors text-sm font-medium px-4 py-2"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#374151]/50">
                  <span className="text-base sm:text-lg text-[#9CA3AF] font-medium">Click to view project</span>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink className="w-6 h-6 text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors" />
                  </motion.div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      ))}

      {/* Regular Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {displayProjects.filter(project => !project.featured).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => handleProjectClick(project.url)}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="overflow-hidden h-full transform hover:scale-105 hover:shadow-2xl hover:shadow-[#3B82F6]/20 border-2 border-transparent hover:border-[#3B82F6]/30 transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/30 to-transparent" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                />
                
                {/* Overlay with project info */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="bg-[#000000]/80 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <ExternalLink className="w-8 h-8 text-[#FFFFFF] mx-auto mb-2" />
                    <p className="text-[#FFFFFF] font-medium">View Project</p>
                  </motion.div>
                </div>
              </div>

              <CardContent className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-3 sm:mb-4 group-hover:text-[#3B82F6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#D1D5DB] mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base md:text-lg line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="tech"
                      size="sm"
                      className="hover:bg-[#4B5563]/50 transition-colors text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#374151]/50">
                  <span className="text-sm text-[#9CA3AF] font-medium">View Project</span>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink className="w-4 h-4 text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { Projects };
