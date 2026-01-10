import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, Github, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "./Card";
import { Badge } from "./Badge";

const Projects = ({ projects = [] }) => {
  const defaultProjects = [
    {
      title: "HR Portal",
      description:
        "Comprehensive HR Management system built with React, TypeScript, and Vite. Features full-fledged functionalities for modern HR operations including employee management, payroll, and analytics.",
      image: "/src/assets/projectsImages/hr7.png",
      url: "https://hr-portal-nu.vercel.app/",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "State Management"],
      gradient: "from-violet-500 to-fuchsia-600",
      featured: true,
      category: "Full-Stack",
    },
    {
      title: "Swan Thai Restaurant",
      description:
        "Modern restaurant website with elegant design, built using React, TypeScript, and Vite for optimal performance and user experience.",
      image: "/src/assets/swanThai.png",
      url: "https://swan.eyada360.com/",
      tech: ["React", "TypeScript", "Vite", "Responsive Design"],
      gradient: "from-amber-500 to-orange-600",
      category: "Frontend",
    },
    {
      title: "AI Chat Application",
      description:
        "Intelligent chat application for document processing and data extraction, featuring advanced AI capabilities and real-time responses.",
      image: "/src/assets/AIChat.png",
      url: "https://ai-chat-app-delta.vercel.app/",
      tech: ["React", "AI/ML", "LangChain", "FastAPI", "Node.js"],
      gradient: "from-emerald-500 to-teal-600",
      category: "AI/ML",
    },
    {
      title: "Nurse AI Hub",
      description:
        "Healthcare-focused AI platform providing text and audio responses for nursing and medical assistance with advanced healthcare analytics.",
      image: "/src/assets/nurseAIHub.png",
      url: "https://nurse-ai-hub.vercel.app/",
      tech: ["React", "TypeScript", "AI/ML", "LangGraph", "Healthcare APIs"],
      gradient: "from-indigo-500 to-blue-600",
      category: "Healthcare AI",
    },
    {
      title: "Weather Application",
      description:
        "Real-time weather tracking application with intuitive interface and accurate forecasting capabilities using modern APIs.",
      image: "/src/assets/weather app.png",
      url: "https://weather-new-app.vercel.app/",
      tech: ["React", "API Integration", "JavaScript", "Data Visualization"],
      gradient: "from-cyan-500 to-blue-600",
      category: "API Integration",
    },
    {
      title: "Task Management System",
      description:
        "Comprehensive task management solution for improved productivity and team collaboration with real-time updates.",
      image: "/src/assets/task.png",
      url: "https://task-management-app-blue-omega.vercel.app/",
      tech: ["React", "Node.js", "MongoDB", "Real-time Updates", "WebSockets"],
      gradient: "from-purple-500 to-indigo-600",
      category: "Full-Stack",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;
  const featuredProjects = displayProjects.filter(
    (project) => project.featured
  );
  const regularProjects = displayProjects.filter(
    (project) => !project.featured
  );

  const handleProjectClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full space-y-12 sm:space-y-16 md:space-y-20">
      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Featured Projects
              </h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-transparent"></div>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`featured-${project.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Card
                  className="overflow-hidden border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 bg-slate-800/40 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                  onClick={() => handleProjectClick(project.url)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Image Section - Takes 2 columns on desktop */}
                    <div className="lg:col-span-2 relative overflow-hidden bg-slate-900/50">
                      <div className="aspect-video lg:aspect-auto lg:h-full">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={`${project.title} project screenshot`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>

                      {/* Featured Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-lg px-3 py-1.5 flex items-center gap-1.5 text-xs sm:text-sm font-bold">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                          Featured
                        </Badge>
                      </div>

                      {/* Category Badge */}
                      {project.category && (
                        <div className="absolute top-3 right-3 z-10">
                          <Badge className="bg-slate-800/80 backdrop-blur-sm text-white border border-slate-600/50 px-2.5 py-1 text-xs font-medium">
                            {project.category}
                          </Badge>
                        </div>
                      )}

                      {/* View Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/70 backdrop-blur-sm">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                          className="flex flex-col items-center gap-2 text-white"
                        >
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-md border-2 border-blue-400/50 flex items-center justify-center">
                            <ExternalLink className="w-6 h-6 text-blue-400" />
                          </div>
                          <span className="text-sm font-semibold">
                            View Project
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section - Takes 3 columns on desktop */}
                    <div className="lg:col-span-3 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-indigo-400 group-hover:to-sky-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              size="sm"
                              className="text-xs sm:text-sm font-medium px-3 py-1 border-slate-600/50 bg-slate-700/40 backdrop-blur-sm text-slate-200 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                        <span className="text-sm text-slate-400 font-medium">
                          Click to explore
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors"
                        >
                          <span className="text-sm font-semibold hidden sm:inline">
                            Visit Project
                          </span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Projects Grid */}
      {regularProjects.length > 0 && (
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                All Projects
              </h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group h-full"
              >
                <Card
                  className="overflow-hidden h-full flex flex-col border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 bg-slate-800/40 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer hover:-translate-y-1"
                  onClick={() => handleProjectClick(project.url)}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-slate-900/50">
                    <div className="aspect-video w-full">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} project screenshot`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "/placeholder.svg";
                        }}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
                    ></div>

                    {/* Category Badge */}
                    {project.category && (
                      <div className="absolute top-3 right-3 z-10">
                        <Badge className="bg-slate-800/90 backdrop-blur-sm text-white border border-slate-600/50 px-2 py-1 text-[10px] xs:text-xs font-medium">
                          {project.category}
                        </Badge>
                      </div>
                    )}

                    {/* View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 backdrop-blur-sm">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        className="w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-md border-2 border-blue-400/50 flex items-center justify-center"
                      >
                        <ExternalLink className="w-5 h-5 text-blue-400" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-4 sm:p-5 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-indigo-400 group-hover:to-sky-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 sm:mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          size="sm"
                          className="text-[10px] xs:text-xs font-medium px-2 py-0.5 border-slate-600/50 bg-slate-700/40 backdrop-blur-sm text-slate-200 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="outline"
                          size="sm"
                          className="text-[10px] xs:text-xs font-medium px-2 py-0.5 border-slate-600/50 text-slate-400"
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-700/50 mt-auto">
                      <span className="text-xs text-slate-400 font-medium">
                        Explore
                      </span>
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="text-blue-400 group-hover:text-blue-300 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { Projects };
