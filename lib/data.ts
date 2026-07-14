export const personalInfo = {
  name: "Arshman Ahmad",
  brandName: "ARSHMANDEV",
  brandTagline: "BUILD • CODE • SOLVE",
  title: "Full Stack Developer",
  titleExtended: "Founder & Lead Engineer",
  tagline:
    "React · Next.js · TypeScript · Node.js · AI Integrations · Business Automation",
  description:
    "ARSHMANDEV is a development team led by Arshman Ahmad. We build web apps, mobile apps, and custom systems for startups and businesses, mainly with React, Next.js, Node.js, and TypeScript.",
  about:
    "ARSHMANDEV is led by Arshman Ahmad and backed by a focused specialist team across frontend, backend, AI, and QA. We ship solid products with clear ownership, clean architecture, and features that actually help the business.",
  email: "arshman.codes@gmail.com",
  phone: "+92 329 4494502",
  phoneDisplay: "03294494502",
  whatsapp: "923294494502",
  location: "Pakistan",
  github: "https://github.com/arshmanahmad",
  linkedin: "https://linkedin.com/in/arshmanahmad",
  calendly: "#contact",
};

export const teamMembers = [
  {
    id: "lead",
    name: "Arshman Ahmad",
    role: "Founder & Lead Engineer",
    focus: "Architecture · Delivery · Client partnership",
    isLead: true,
  },
  {
    id: "frontend",
    name: "Frontend",
    role: "UI Engineering",
    focus: "React · Next.js · Product interfaces",
    initials: "FE",
    isLead: false,
  },
  {
    id: "backend",
    name: "Backend",
    role: "Systems & APIs",
    focus: "Node.js · Databases · Integrations",
    initials: "BE",
    isLead: false,
  },
  {
    id: "ai",
    name: "AI",
    role: "AI / Automation",
    focus: "LLM workflows · Agents · Automation",
    initials: "AI",
    isLead: false,
  },
  {
    id: "qa",
    name: "QA",
    role: "Quality & Release",
    focus: "Testing · Stability · Launch checks",
    initials: "QA",
    isLead: false,
  },
] as const;

export const valueProps = [
  {
    id: "engineering",
    title: "Solid engineering",
    description:
      "Clear architecture, maintainable code, and systems that can grow with real traffic, not shortcuts that break later.",
    icon: "code",
  },
  {
    id: "delivery",
    title: "Reliable delivery",
    description:
      "Regular updates, honest timelines, and a process you can follow from the first call through launch and support.",
    icon: "sparkles",
  },
] as const;

export const brandAssets = {
  logo: "/assets/main-content/logo.png",
  banner: "/assets/main-content/banner.png",
  profilePicture: "/assets/main-content/profile-picture.png",
} as const;

export type IntroVideoProvider = "instagram" | "hosted";

export interface IntroVideo {
  title: string;
  description: string;
  provider: IntroVideoProvider;
  url: string;
  embedUrl?: string;
  poster?: string;
  hostedSrc?: string;
}

export const introVideo: IntroVideo = {
  title: "Meet ARSHMANDEV",
  description:
    "A software architect dedicated to crafting high-performance digital experiences. Watch a quick introduction to who I am, what I build, and how I help startups and businesses ship reliable web and app products.",
  provider: "instagram",
  url: "https://www.instagram.com/arshmandev/reel/Das8EiCtFrK/",
  embedUrl: "https://www.instagram.com/reel/Das8EiCtFrK/embed",
  poster: brandAssets.profilePicture,
};

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Modern Techs" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Business Solutions" },
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
      "Subscriptions, dashboards, multi-tenant platforms built for scale.",
    icon: "cloud",
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "LLMs, LangChain, and custom AI workflows to augment intelligence.",
    icon: "brain",
  },
  {
    id: "automation",
    title: "Business Automation",
    description:
      "Connect tools and build bots to save hours of manual work weekly.",
    icon: "zap",
  },
  {
    id: "crm",
    title: "CRM Systems",
    description:
      "Manage sales pipelines, clients, and reporting in one unified custom hub.",
    icon: "users",
  },
  {
    id: "web",
    title: "Web Applications",
    description:
      "High-performance React/Next.js apps optimized for SEO and conversion.",
    icon: "globe",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "React Native cross-platform apps that feel native and perform beautifully.",
    icon: "smartphone",
  },
  {
    id: "api",
    title: "API Development",
    description:
      "REST and Realtime architectures with Node.js and FastAPI backends.",
    icon: "code",
  },
  {
    id: "custom",
    title: "Custom Software",
    description:
      "Bespoke systems architected specifically around your unique business processes.",
    icon: "puzzle",
  },
];

export type ProjectType =
  | "ai-hiring"
  | "marketplace"
  | "content-ai"
  | "medical-ai"
  | "automation"
  | "business-erp";

export interface Project {
  id: number;
  title: string;
  experience: string;
  type: ProjectType;
  typeLabel: string;
  stack: string[];
  demo?: string;
  github?: string;
  inDevelopment?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "True-Chance",
    type: "ai-hiring",
    typeLabel: "AI Hiring",
    stack: ["Next.js", "AI / LLM", "Node.js"],
    experience:
      "AI hiring platform where companies create career pages, candidates take AI interviews, and scores go back to HR for shortlisting. Live in production.",
    demo: "https://www.true-chance.com/",
  },
  {
    id: 2,
    title: "BSello",
    type: "marketplace",
    typeLabel: "Marketplace",
    stack: ["React", "Chat", "Payments"],
    experience:
      "Marketplace for buying and selling social accounts, with protected chat, payments, and scam-prevention built into the flow.",
    demo: "https://bsello.com/",
  },
  {
    id: 3,
    title: "Wytify",
    type: "content-ai",
    typeLabel: "Content AI",
    stack: ["AI", "SEO", "Full Stack"],
    experience:
      "Article generation platform with keyword research, competitor scraping, and SEO-oriented content workflows. In active development.",
    inDevelopment: true,
  },
  {
    id: 4,
    title: "Medi-Report-AI",
    type: "medical-ai",
    typeLabel: "Medical AI",
    stack: ["Python", "ML", "API"],
    experience:
      "Medical report engine that assesses risk, suggests plans, and estimates recovery based on trained medical data.",
    github: "https://github.com/arshmanahmad/Medi-Report-AI-Backend",
  },
  {
    id: 5,
    title: "Web-Scraper",
    type: "automation",
    typeLabel: "Automation",
    stack: ["Node.js", "Playwright"],
    experience:
      "Playwright scraper for product pages with human-like browsing patterns and CAPTCHA handling for reliable extraction.",
    github: "https://github.com/arshmanahmad/Website-Scraping",
  },
  {
    id: 6,
    title: "Smarledger",
    type: "business-erp",
    typeLabel: "Business ERP",
    stack: ["Multi-tenant", "Node.js", "ERP"],
    experience:
      "Multi-tenant business management backend that adapts to different retail types from a shared infrastructure.",
    github: "https://github.com/arshmanahmad/SmarledgerStoreBackend",
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
      "We talk through your goals, users, and constraints until the problem is clear, then decide what to build first.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "Architecture, milestones, and timelines are set before coding starts, so you know the path and the risks.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Clean, maintainable code shipped in small iterations with regular demos and progress updates.",
  },
  {
    step: 4,
    title: "Testing",
    description:
      "QA across devices and edge cases so launches feel stable, not like a first draft.",
  },
  {
    step: 5,
    title: "Deployment",
    description:
      "Production launch with CI/CD and monitoring set up so the app is ready for real users.",
  },
  {
    step: 6,
    title: "Support",
    description:
      "Maintenance, improvements, and new features as the product and business keep growing.",
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
      "Real-time updates and clear dialogue. You'll never be left wondering about the status of your project.",
    icon: "message",
  },
  {
    title: "Clean & Maintainable",
    description:
      "Future-proof architecture using industry best practices. Your codebase remains an asset, not a liability.",
    icon: "code",
  },
  {
    title: "Scalable Architecture",
    description:
      "Systems designed to grow. We build for today's needs while anticipating tomorrow's traffic and complexity.",
    icon: "layers",
  },
  {
    title: "Business-Oriented",
    description:
      "Focused on your ROI and outcomes. We prioritize features that deliver actual value to your bottom line.",
    icon: "target",
  },
  {
    title: "Performance First",
    description:
      "Lightning-fast load times and optimized workflows. Experience software that feels as fast as thought.",
    icon: "gauge",
  },
  {
    title: "Long-Term Support",
    description:
      "A reliable partner for your journey. We provide continuous maintenance and strategic advice post-launch.",
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
    text: "HR portal project; clean code; delivered ahead of schedule. The attention to detail and technical precision is exactly what our team needed.",
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    role: "Operations Lead",
    platform: "whatsapp",
    rating: 5,
    text: "Automation saves 30+ hours per week. Arshman transformed our operational bottlenecks into a streamlined, high-performance engine.",
  },
  {
    id: 3,
    name: "James Cooper",
    role: "CTO, StartupBase",
    platform: "linkedin",
    rating: 5,
    text: "Strong full-stack delivery and payment integration. Handling complex fiscal logic with such ease is a testament to their technical mastery.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "AI Product Lead",
    platform: "linkedin",
    rating: 5,
    text: "LangChain chatbot reduced tickets by 40%. The AI implementation was seamless and integrated perfectly with our existing infrastructure.",
  },
];

export const projectSummaries: Record<number, string> = {
  1: "AI hiring with career pages, interviews, and HR scoring. Live in production.",
  2: "Social account marketplace with protected chat, payments, and scam prevention.",
  3: "AI content workflows for keywords, competitor research, and article generation.",
  4: "Medical ML engine for risk assessment, recommendations, and recovery estimates.",
  5: "Playwright product scraper with anti-detection browsing patterns.",
  6: "Multi-tenant business management backend for multiple retail types.",
};

export type SocialPlatform = "linkedin" | "github" | "x" | "instagram";

export interface SocialProfile {
  id: string;
  platform: SocialPlatform;
  name: string;
  handle: string;
  url: string;
  image: string;
  pickupLine: string;
}

export const socialProfiles: SocialProfile[] = [
  {
    id: "linkedin",
    platform: "linkedin",
    name: "LinkedIn",
    handle: "@arshman-ahmad",
    url: "https://www.linkedin.com/in/arshman-ahmad-334829298",
    image: "/assets/social-media/LinkedIn-1.png",
    pickupLine:
      "Let's connect professionally. I share projects, career insights, and the work I'm building.",
  },
  {
    id: "github",
    platform: "github",
    name: "GitHub",
    handle: "@arshmanahmad",
    url: "https://github.com/arshmanahmad",
    image: "/assets/social-media/Github-1.png",
    pickupLine:
      "Explore the code behind the products: repos, experiments, and real engineering work.",
  },
  {
    id: "x",
    platform: "x",
    name: "X (Twitter)",
    handle: "@ArshmanDev",
    url: "https://x.com/ArshmanDev",
    image: "/assets/social-media/X-1.png",
    pickupLine:
      "Follow for dev updates, build-in-public moments, and quick thoughts on tech.",
  },
  {
    id: "instagram",
    platform: "instagram",
    name: "Instagram",
    handle: "@arshmandev",
    url: "https://www.instagram.com/arshmandev?igsh=cDdtN3c1eGlrcndm",
    image: "/assets/social-media/Insta-1.png",
    pickupLine:
      "The personal side: behind-the-scenes, journey snapshots, and creative updates.",
  },
];
