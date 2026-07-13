export const personalInfo = {
  name: "Arshman Ahmad",
  brandName: "ARSHMANDEV",
  brandTagline: "BUILD • CODE • SOLVE",
  title: "Full Stack Developer",
  tagline:
    "React · Next.js · TypeScript · Node.js · AI Integrations · Business Automation",
  description:
    "ARSHMANDEV delivers web development, app development, and custom software for startups and businesses, helping you build modern products, automate workflows, and launch faster.",
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
    "A quick introduction to who I am, what I build, and how I help startups and businesses ship reliable web and app products.",
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
      "Fast, responsive web apps built with React and Next.js, optimized for performance and SEO.",
    icon: "globe",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile experiences with React Native: one codebase, native feel.",
    icon: "smartphone",
  },
  {
    id: "api",
    title: "API Development",
    description:
      "Robust RESTful and real-time APIs with Node.js and FastAPI: secure, documented, and scalable.",
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
  experience: string;
  demo?: string;
  github?: string;
  inDevelopment?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "True-Chance",
    experience:
      "One of the most impactful projects I've built: an AI-powered hiring platform that solves a real HR problem. Companies create career pages from our dashboard and post job openings directly. Candidates visit the career page and complete AI-based interviews, allowing many applicants to be assessed simultaneously against the same opportunity. Interview scores are delivered back to the company so HR can shortlist the best candidates without wasting time on manual screening. The entire system is AI-driven and fully automated, currently live in production.",
    demo: "https://www.true-chance.com/",
  },
  {
    id: 2,
    title: "BSello",
    experience:
      "Built a secure marketplace platform connecting buyers and sellers for social media account transactions. Developed a dedicated chatbot supporting one-to-one and one-to-many communication in a protected environment. Implemented secure payment flows from buyer to seller with scam prevention built in, including scam detection within the chatbot, blocked user management, and a complete end-to-end system designed for safe, trustworthy deals.",
    demo: "https://bsello.com/",
  },
  {
    id: 3,
    title: "Wytify",
    experience:
      "Led AI engineering and full-stack development on a fully automated article generation platform. Users select a membership plan, choose a topic area, and the system automatically generates relevant keywords. After keyword selection, the platform scrapes the top ten Google competitors for that topic and uses those results to guide article generation and SEO analysis, optimizing content based on real competitive data. Currently in active development.",
    inDevelopment: true,
  },
  {
    id: 4,
    title: "Medi-Report-AI",
    experience:
      "Developed a virtual doctor data engine powered by AI and machine learning. Trained the model on comprehensive medical data to deliver accurate responses across a wide range of user inputs, including disease risk level assessment, personalized recommendations, full diet plans, estimated recovery duration based on risk level, and more.",
    github: "https://github.com/arshmanahmad/Medi-Report-AI-Backend",
  },
  {
    id: 5,
    title: "Web-Scraper",
    experience:
      "Built a Node.js web scraper using Playwright to extract detailed product information from Ali1688.com product pages. Engineered human-like browsing behavior patterns to avoid detection and integrated CAPTCHA solving capabilities for reliable, automated data extraction at scale.",
    github: "https://github.com/arshmanahmad/Website-Scraping",
  },
  {
    id: 6,
    title: "Smarledger",
    experience:
      "Smarledger is a multi-tenant business management platform supporting many business types: Mobile, Cosmetics, Cars, Sanitary, and more, all running on the same backend infrastructure. Users select their business type during account creation and the system adapts accordingly, making Smarledger a flexible, scalable software solution for diverse retail and service operations.",
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
      "Building with clean, maintainable code, with regular updates and transparent progress.",
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
      "Systems designed to grow with your business, from MVP to enterprise scale.",
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
      "I don't disappear after launch. Ongoing maintenance and improvements when you need them.",
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
    text: "Full-stack expertise at its best. Payment integration was flawless and exceeded all expectations.",
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
