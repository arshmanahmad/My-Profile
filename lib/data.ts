export const personalInfo = {
  name: "Arshman Ahmad",
  title: "Full Stack Developer",
  tagline:
    "React · Next.js · TypeScript · Node.js · AI Integrations · Business Automation",
  description:
    "I help startups and businesses build modern software, automate workflows, and launch faster.",
  email: "arshman.codes@gmail.com",
  phone: "+92 329 4494502",
  phoneDisplay: "03294494502",
  whatsapp: "923294494502",
  location: "Pakistan",
  github: "https://github.com/arshmanahmad",
  linkedin: "https://linkedin.com/in/arshmanahmad",
  calendly: "#contact",
};

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Business Solutions" },
  { value: 15, suffix: "+", label: "Modern Technologies" },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "saas",
    title: "SaaS Development",
    description:
      "End-to-end SaaS products with subscription billing, dashboards, and scalable multi-tenant architecture.",
    icon: "cloud",
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "Intelligent features powered by LLMs, LangChain, and custom AI workflows that automate decisions.",
    icon: "brain",
  },
  {
    id: "automation",
    title: "Business Automation",
    description:
      "Streamline repetitive tasks, connect tools, and build bots that save hours every week.",
    icon: "zap",
  },
  {
    id: "crm",
    title: "CRM Systems",
    description:
      "Custom CRM platforms tailored to your sales pipeline, client management, and reporting needs.",
    icon: "users",
  },
  {
    id: "web",
    title: "Web Applications",
    description:
      "Fast, responsive web apps built with React and Next.js — optimized for performance and SEO.",
    icon: "globe",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile experiences with React Native — one codebase, native feel.",
    icon: "smartphone",
  },
  {
    id: "api",
    title: "API Development",
    description:
      "Robust RESTful and real-time APIs with Node.js and FastAPI — secure, documented, and scalable.",
    icon: "code",
  },
  {
    id: "custom",
    title: "Custom Software",
    description:
      "Bespoke software solutions designed around your unique business processes and goals.",
    icon: "puzzle",
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  businessImpact: string;
  tech: string[];
  url: string;
  github?: string;
  image?: string;
  featured: boolean;
  badge?: string;
  iconLetter?: string;
  gradient: [string, string];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smarledger",
    description:
      "A smart financial ledger platform for real-time bookkeeping and business finance control.",
    problem:
      "Businesses struggled with fragmented financial tracking and manual bookkeeping processes.",
    solution:
      "Built a full-stack ledger platform with real-time transaction tracking, reporting dashboards, and intuitive UX.",
    businessImpact:
      "Reduced manual bookkeeping time by 60% and gave owners real-time financial visibility.",
    tech: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS"],
    url: "https://smarledger.com",
    image: "/assets/projects/smarledger.svg",
    featured: true,
    badge: "Owned Product",
    iconLetter: "S",
    gradient: ["#4F46E5", "#8B5CF6"],
  },
  {
    id: 2,
    title: "Bsello",
    description:
      "A next-generation platform for seamless, scalable business solutions.",
    problem:
      "Growing businesses needed a unified platform to manage operations without complexity.",
    solution:
      "Architecting a modern, performance-first platform with modular services and clean UX.",
    businessImpact:
      "Positioned for rapid market launch with a scalable foundation for future growth.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    url: "https://bsello.com",
    image: "/assets/projects/bsello.svg",
    featured: true,
    badge: "In Development",
    iconLetter: "B",
    gradient: ["#06B6D4", "#8B5CF6"],
  },
  {
    id: 3,
    title: "HR Portal",
    description:
      "Comprehensive HR management with role-based access and TypeScript-first architecture.",
    problem:
      "HR teams lacked a centralized system for employee management and role-based workflows.",
    solution:
      "Delivered a full HR portal with advanced state management, RBAC, and clean admin dashboards.",
    businessImpact:
      "Streamlined HR operations and reduced administrative overhead for the client team.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    url: "https://hr-portal-nu.vercel.app",
    featured: false,
    iconLetter: "H",
    gradient: ["#6366F1", "#A78BFA"],
  },
  {
    id: 4,
    title: "AI Chat Application",
    description:
      "Intelligent chat app powered by LangChain and FastAPI with real-time AI responses.",
    problem:
      "Users needed an intelligent conversational interface with fast, context-aware responses.",
    solution:
      "Integrated LangChain with FastAPI backend for real-time AI-driven chat experiences.",
    businessImpact:
      "Delivered a production-ready AI chat platform with sub-second response times.",
    tech: ["React", "LangChain", "FastAPI", "Node.js"],
    url: "https://ai-chat-app-delta.vercel.app",
    featured: false,
    iconLetter: "A",
    gradient: ["#8B5CF6", "#EC4899"],
  },
  {
    id: 5,
    title: "Nurse AI Hub",
    description:
      "Healthcare AI platform with LangGraph integration and nursing assistance APIs.",
    problem:
      "Healthcare professionals needed AI-powered tools for nursing workflows and patient support.",
    solution:
      "Built a specialized healthcare AI hub with LangGraph agents and nursing-specific APIs.",
    businessImpact:
      "Enabled faster clinical decision support and improved nursing workflow efficiency.",
    tech: ["React", "TypeScript", "LangGraph", "Healthcare APIs"],
    url: "https://nurse-ai-hub.vercel.app",
    featured: false,
    iconLetter: "N",
    gradient: ["#10B981", "#06B6D4"],
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Understanding your goals, users, and business requirements through focused conversations.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "Defining architecture, timelines, milestones, and a clear roadmap before writing code.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Building with clean, maintainable code — with regular updates and transparent progress.",
  },
  {
    step: 4,
    title: "Testing",
    description:
      "Rigorous QA across devices and edge cases to ensure reliability and performance.",
  },
  {
    step: 5,
    title: "Deployment",
    description:
      "Smooth launch with CI/CD, monitoring setup, and production-ready infrastructure.",
  },
  {
    step: 6,
    title: "Ongoing Support",
    description:
      "Long-term maintenance, feature updates, and optimization as your business grows.",
  },
];

export interface WhyItem {
  title: string;
  description: string;
  icon: string;
}

export const whyWorkWithMe: WhyItem[] = [
  {
    title: "Fast Communication",
    description:
      "Quick responses, clear updates, and proactive communication throughout every project.",
    icon: "message",
  },
  {
    title: "Clean & Maintainable Code",
    description:
      "Well-structured, documented code that's easy for your team to extend and maintain.",
    icon: "code",
  },
  {
    title: "Scalable Architecture",
    description:
      "Systems designed to grow with your business — from MVP to enterprise scale.",
    icon: "layers",
  },
  {
    title: "Business-Oriented Solutions",
    description:
      "Every feature is tied to a real business outcome, not just technical complexity.",
    icon: "target",
  },
  {
    title: "Performance Optimization",
    description:
      "Fast load times, efficient APIs, and Lighthouse scores that impress users and search engines.",
    icon: "gauge",
  },
  {
    title: "Long-Term Support",
    description:
      "I don't disappear after launch — ongoing maintenance and improvements when you need them.",
    icon: "shield",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  platform: "linkedin" | "whatsapp";
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Product Manager",
    platform: "linkedin",
    rating: 5,
    text: "Delivered an HR portal that transformed how our team operates. Clean code, great communication, shipped ahead of schedule!",
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    role: "Operations Lead",
    platform: "whatsapp",
    rating: 5,
    text: "The automation bot he built saves us 30+ hours every week. Best investment we've made this year.",
  },
  {
    id: 3,
    name: "James Cooper",
    role: "CTO, StartupBase",
    platform: "linkedin",
    rating: 5,
    text: "Full-stack expertise at its best. Payment integration was flawless — exceeded all expectations.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "AI Product Lead",
    platform: "linkedin",
    rating: 5,
    text: "LangChain chatbot cut our support tickets by 40%. Exceptional AI integration skills and deep technical knowledge.",
  },
];
