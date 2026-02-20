export const personalInfo = {
  name: "Arshman Ahmad",
  title: "Full-Stack Developer & Automation Expert",
  description:
    "Transforming businesses with 4+ years of expertise in MERN stack, Python automation, and payment integrations.",
  email: "arshman.codes@gmail.com",
  phone: "+92 315 6054390",
  whatsapp: "+92 315 6054390",
  location: "Pakistan",
  github: "https://github.com/arshmanahmad",
  linkedin: "https://linkedin.com/in/arshmanahmad",
  fiverr: "https://fiverr.com/arsh153",
};

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "15+", label: "Technologies" },
];

export interface AboutCard {
  title: string;
  description: string;
  badges: string[];
  icon: "code" | "cog" | "chart";
}

export const aboutCards: AboutCard[] = [
  {
    title: "Full-Stack Development",
    description:
      "Building scalable web applications with MERN stack, React.js, Node.js, and performance optimization tailored to your business needs.",
    badges: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: "code",
  },
  {
    title: "Automation & Integration",
    description:
      "Specializing in Python automation, web scraping, and seamless payment gateway integrations to streamline your workflows.",
    badges: ["Python", "Docker", "APIs", "Scraping"],
    icon: "cog",
  },
  {
    title: "Performance & Growth",
    description:
      "Driving measurable business growth through optimization, maintenance, and conversion improvements.",
    badges: ["Optimization", "Maintenance", "Analytics", "Growth"],
    icon: "chart",
  },
];

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "ai" | "devops";
}

export const skills: Skill[] = [
  { name: "React.js", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 87, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "React Native", level: 82, category: "frontend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 88, category: "backend" },
  { name: "FastAPI", level: 90, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "RESTful APIs", level: 92, category: "backend" },
  { name: "Payment Gateways", level: 90, category: "backend" },
  { name: "Shopify API", level: 89, category: "backend" },
  { name: "Python Automation", level: 87, category: "ai" },
  { name: "Python Scraping", level: 85, category: "ai" },
  { name: "LangChain", level: 88, category: "ai" },
  { name: "LangGraph", level: 86, category: "ai" },
  { name: "Docker", level: 88, category: "devops" },
  { name: "Optimization", level: 93, category: "devops" },
  { name: "Maintenance", level: 90, category: "devops" },
  { name: "Conversions", level: 88, category: "devops" },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  url: string;
  image: string;
  featured: boolean;
  badge?: string;
  iconLetter?: string;
}

export const projects: Project[] = [
  {
    id: -1,
    title: "Smarledger",
    description:
      "A smart financial ledger platform built to simplify bookkeeping, track transactions, and give businesses real-time control over their finances — clean, fast, and built to scale.",
    tech: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS"],
    url: "https://smarledger.com",
    image: "/assets/projects/smarledger.svg",
    featured: true,
    badge: "Owned Product",
    iconLetter: "S",
  },
  {
    id: 0,
    title: "Bsello",
    description:
      "A next-generation platform currently in active development — building seamless, scalable solutions with a focus on performance and modern user experience.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    url: "https://bsello.com",
    image: "/assets/projects/bsello.svg",
    featured: true,
    badge: "In Development",
    iconLetter: "B",
  },
  {
    id: 1,
    title: "HR Portal",
    description:
      "A comprehensive human resources management portal with advanced state management, role-based access control, and TypeScript-first architecture.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "State Management"],
    url: "https://hr-portal-nu.vercel.app",
    image: "/assets/projects/hr7.png",
    featured: false,
  },
  {
    id: 3,
    title: "AI Chat Application",
    description:
      "Intelligent chat application powered by LangChain and FastAPI with real-time AI-driven responses.",
    tech: ["React", "LangChain", "FastAPI", "Node.js", "AI/ML"],
    url: "https://ai-chat-app-delta.vercel.app",
    image: "/assets/AIChat.png",
    featured: false,
  },
  {
    id: 4,
    title: "Nurse AI Hub",
    description:
      "Healthcare AI platform with LangGraph integration and specialized nursing assistance APIs.",
    tech: ["React", "TypeScript", "LangGraph", "Healthcare APIs"],
    url: "https://nurse-ai-hub.vercel.app",
    image: "/assets/nurseAIHub.png",
    featured: false,
  },
];
