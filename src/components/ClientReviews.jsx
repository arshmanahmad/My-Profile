import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./Card";

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Arshman delivered an exceptional full-stack application that transformed our business operations. His expertise in React and Node.js is outstanding, and he consistently met deadlines while maintaining high code quality. Highly recommended!",
      project: "E-commerce Platform",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, DataFlow Solutions",
      company: "DataFlow Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The automation system Arshman built saved us 20+ hours per week. His Python automation skills are top-notch, and he integrated seamlessly with our existing infrastructure. Professional, reliable, and results-driven developer.",
      project: "Python Automation System",
      gradient: "from-indigo-600 to-sky-600",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CTO, Shopify Store Pro",
      company: "Shopify Store Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Arshman on our Shopify integration was a game-changer. He not only delivered the payment gateway integration flawlessly but also optimized our conversion rates by 35%. His attention to detail and business acumen are impressive.",
      project: "Shopify API Integration",
      gradient: "from-sky-600 to-blue-600",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Director, AI Innovations",
      company: "AI Innovations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Arshman's work on our AI-powered chat application exceeded expectations. His knowledge of LangChain and FastAPI helped us build a robust system that handles thousands of queries daily. Exceptional technical skills and problem-solving abilities.",
      project: "AI Chat Application",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Operations Manager, RetailMax",
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The HR portal Arshman developed streamlined our entire HR workflow. The React and TypeScript implementation is clean, maintainable, and user-friendly. Our team loves using it, and maintenance has been minimal. Outstanding work!",
      project: "HR Management Portal",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Founder, Restaurant Group",
      company: "Restaurant Group",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Arshman created a beautiful, modern website for our restaurant that significantly increased our online reservations. The design is elegant, the performance is excellent, and the user experience is seamless. We've seen a 40% increase in online orders since launch.",
      project: "Restaurant Website",
      gradient: "from-sky-500 to-indigo-500",
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-8 w-full">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group h-full"
            whileHover={{ y: -5 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500">
              <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                {/* Quote Icon */}
                <div className="mb-3 sm:mb-4">
                  <div className={`inline-flex p-2 sm:p-3 rounded-xl bg-gradient-to-r ${review.gradient} shadow-xl`}>
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-md" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400 drop-shadow-md" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6 flex-grow line-clamp-6 group-hover:line-clamp-none transition-all font-medium drop-shadow-md">
                  {review.text}
                </p>

                {/* Project Badge */}
                <div className="mb-4 sm:mb-5">
                  <span className={`inline-block px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${review.gradient} bg-opacity-20 text-white border border-slate-600/50 backdrop-blur-sm shadow-lg`}>
                    {review.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-700/50">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-slate-600/50 group-hover:ring-blue-500/50 transition-all shadow-lg"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${review.gradient} rounded-full border-2 border-slate-800 shadow-lg`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm sm:text-base truncate drop-shadow-md">
                      {review.name}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm truncate drop-shadow-sm">
                      {review.role}
                    </p>
                    <p className="text-slate-500 text-xs truncate drop-shadow-sm">
                      {review.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12"
      >
        {[
          { label: "Happy Clients", value: "50+", gradient: "from-blue-500 to-indigo-500" },
          { label: "Projects Completed", value: "100+", gradient: "from-indigo-500 to-sky-500" },
          { label: "5-Star Reviews", value: "48+", gradient: "from-sky-500 to-blue-500" },
          { label: "Years Experience", value: "4+", gradient: "from-blue-600 to-indigo-600" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="text-center p-4 sm:p-5 md:p-6 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/30"
            whileHover={{ scale: 1.05, y: -3, rotate: [0, -1, 1, 0] }}
          >
            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 drop-shadow-lg`}>
              {stat.value}
            </div>
            <div className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wide drop-shadow-md">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export { ClientReviews };

