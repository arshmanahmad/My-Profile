export const personalInfo = {
  name: "Arshman Ahmad",
  brandName: "ARSHMANDEV",
  brandTagline: "BUILD • CODE • SOLVE",
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

export const brandAssets = {
  logo: "/assets/main-content/logo.png",
  banner: "/assets/main-content/banner.png",
  profilePicture: "/assets/main-content/profile-picture.png",
} as const;

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

export interface ProjectExpandedDetails {
  responsibilities: string[];
  challenges?: string[];
  implementation?: string[];
  architecture?: string[];
  performance?: string[];
  apis?: string[];
  additionalTechnologies?: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  experience: string;
  technologies: string[];
  demo: string;
  github?: string;
  caseStudy?: string;
  image?: string;
  expandedDetails: ProjectExpandedDetails;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smarledger",
    category: "SaaS",
    description:
      "Smart financial ledger platform for real-time bookkeeping and business finance control.",
    experience:
      "Built and maintained a full-stack ledger platform from the ground up. Developed reusable React components, designed real-time transaction flows, integrated secure REST APIs, optimized dashboard performance, and shipped production-ready features for business finance teams.",
    technologies: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS"],
    demo: "https://smarledger.com",
    image: "/assets/projects/smarledger.svg",
    expandedDetails: {
      responsibilities: [
        "Led full-stack development of the core ledger and reporting system",
        "Designed component architecture for dashboards and transaction views",
        "Implemented authentication, data validation, and API integration layers",
        "Collaborated on product direction and iterative feature releases",
      ],
      challenges: [
        "Handling real-time financial data updates without UI lag",
        "Designing intuitive UX for non-technical business owners",
      ],
      implementation: [
        "Modular React component library with shared state patterns",
        "Server-side rendering for fast initial loads and SEO",
        "Structured API layer with typed request/response contracts",
      ],
      architecture: [
        "Next.js App Router with API routes and service separation",
        "Component-driven frontend with clear data flow boundaries",
        "Scalable folder structure for features, hooks, and utilities",
      ],
      performance: [
        "Optimized re-renders with memoization and lazy-loaded sections",
        "Reduced dashboard load time through code splitting",
      ],
      apis: ["RESTful transaction APIs", "Reporting and export endpoints"],
      additionalTechnologies: ["PostgreSQL", "JWT Auth", "Chart libraries"],
    },
  },
  {
    id: 2,
    title: "Bsello",
    category: "Enterprise",
    description:
      "Next-generation platform for seamless, scalable business operations.",
    experience:
      "Architecting a performance-first business platform with modular services and clean UX. Building reusable UI systems, establishing scalable frontend patterns, and preparing the codebase for rapid market launch and long-term growth.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    demo: "https://bsello.com",
    image: "/assets/projects/bsello.svg",
    expandedDetails: {
      responsibilities: [
        "Architecting frontend structure and design system foundations",
        "Building modular page layouts and shared UI primitives",
        "Establishing TypeScript conventions and code quality standards",
        "Planning scalable service integration points for future modules",
      ],
      challenges: [
        "Balancing speed of development with long-term maintainability",
        "Designing flexible layouts for evolving business modules",
      ],
      implementation: [
        "Feature-based folder organization with co-located components",
        "Consistent spacing, typography, and interaction patterns",
        "Reusable form and data-display components",
      ],
      architecture: [
        "Next.js with modular route groups and shared layouts",
        "Separation of UI, data fetching, and business logic layers",
      ],
      performance: [
        "Image and route-level optimization for fast page transitions",
        "Minimal bundle footprint through tree-shaking and lazy imports",
      ],
      additionalTechnologies: ["Vercel", "ESLint", "Prettier"],
    },
  },
  {
    id: 3,
    title: "HR Portal",
    category: "CRM",
    description:
      "Comprehensive HR management system with role-based access control.",
    experience:
      "Delivered a full HR portal with advanced state management, role-based access control, and clean admin dashboards. Built reusable React components, integrated secure APIs, and optimized workflows for HR teams managing employees at scale.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demo: "https://hr-portal-nu.vercel.app",
    expandedDetails: {
      responsibilities: [
        "Developed employee management, role assignment, and admin dashboards",
        "Implemented RBAC with granular permission checks across routes",
        "Built form-heavy workflows with validation and error handling",
        "Integrated backend APIs for CRUD operations and reporting",
      ],
      challenges: [
        "Managing complex permission logic across multiple user roles",
        "Keeping large data tables performant and responsive",
      ],
      implementation: [
        "Centralized state management for auth and user context",
        "Reusable table, filter, and modal components",
        "Protected routes with role-aware navigation guards",
      ],
      architecture: [
        "React + Vite SPA with feature modules per HR domain",
        "Service layer abstracting API calls from UI components",
      ],
      performance: [
        "Virtualized lists for large employee datasets",
        "Debounced search and filter operations",
      ],
      apis: ["Employee CRUD APIs", "Role and permission endpoints"],
      additionalTechnologies: ["React Router", "Axios", "Zustand"],
    },
  },
  {
    id: 4,
    title: "AI Chat Application",
    category: "AI Platform",
    description:
      "Intelligent chat application with real-time AI-driven responses.",
    experience:
      "Integrated LangChain with a FastAPI backend to deliver real-time, context-aware AI chat experiences. Built the frontend conversation UI, managed streaming responses, and optimized for sub-second interaction latency in production.",
    technologies: ["React", "LangChain", "FastAPI", "Node.js"],
    demo: "https://ai-chat-app-delta.vercel.app",
    expandedDetails: {
      responsibilities: [
        "Built conversational UI with message threading and streaming",
        "Integrated LangChain chains and prompt management on the backend",
        "Implemented session handling and context persistence",
        "Deployed and tested production AI response pipelines",
      ],
      challenges: [
        "Streaming AI responses smoothly without blocking the UI",
        "Managing conversation context within token limits",
      ],
      implementation: [
        "Server-sent events for real-time message streaming",
        "LangChain integration with custom prompt templates",
        "Optimistic UI updates during message send/receive cycles",
      ],
      architecture: [
        "React frontend communicating with FastAPI microservice",
        "Separation of AI logic, API layer, and presentation",
      ],
      performance: [
        "Reduced perceived latency with streaming and skeleton states",
        "Cached session context to minimize redundant API calls",
      ],
      apis: ["Chat completion endpoints", "Session and history APIs"],
      additionalTechnologies: ["OpenAI API", "Python", "WebSockets"],
    },
  },
  {
    id: 5,
    title: "Nurse AI Hub",
    category: "Healthcare",
    description:
      "Healthcare AI platform with nursing assistance and clinical workflows.",
    experience:
      "Built a specialized healthcare AI hub with LangGraph agents and nursing-specific APIs. Developed secure frontend interfaces for clinical workflows, integrated AI decision-support tools, and ensured reliable performance for healthcare professionals.",
    technologies: ["React", "TypeScript", "LangGraph", "Healthcare APIs"],
    demo: "https://nurse-ai-hub.vercel.app",
    expandedDetails: {
      responsibilities: [
        "Developed nursing workflow interfaces and AI-assisted tools",
        "Integrated LangGraph agents for multi-step clinical reasoning",
        "Connected healthcare APIs for patient and workflow data",
        "Ensured accessible, reliable UI for professional users",
      ],
      challenges: [
        "Designing AI tools that fit real nursing workflows",
        "Handling sensitive healthcare data with care and clarity",
      ],
      implementation: [
        "LangGraph agent orchestration for complex query chains",
        "Step-by-step UI for AI-assisted clinical decisions",
        "Typed API contracts for healthcare data integration",
      ],
      architecture: [
        "React frontend with dedicated modules per workflow type",
        "Agent backend separated from UI and data access layers",
      ],
      performance: [
        "Progressive loading for AI-generated content sections",
        "Efficient state updates during multi-step agent responses",
      ],
      apis: ["Nursing assistance APIs", "Healthcare data integration endpoints"],
      additionalTechnologies: ["LangGraph", "FHIR-compatible APIs", "TypeScript"],
    },
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
