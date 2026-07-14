export const personalInfo = {
  name: "Arshman Ahmad",
  brandName: "ARSHMANDEV",
  brandTagline: "BUILD • CODE • SOLVE",
  title: "Full Stack Developer",
  titleExtended: "Full Stack Developer & AI Engineer",
  tagline:
    "React · Next.js · TypeScript · Node.js · AI Integrations · Business Automation",
  description:
    "ARSHMANDEV delivers high-performance web apps, mobile solutions, and custom automated systems for startups using the latest React, Next.js, and Node.js ecosystems.",
  about:
    "I'm a technical architect focused on Reliable Delivery. I build scalable products, automation systems, and AI-powered software that help startups and businesses ship faster with confidence.",
  email: "arshman.codes@gmail.com",
  phone: "+92 329 4494502",
  phoneDisplay: "03294494502",
  whatsapp: "923294494502",
  location: "Pakistan",
  github: "https://github.com/arshmanahmad",
  linkedin: "https://linkedin.com/in/arshmanahmad",
  calendly: "#contact",
};

export const valueProps = [
  {
    id: "engineering",
    title: "Engineering Mastery",
    description:
      "Designing scalable architectures that withstand the test of time and traffic. Our technical approach is rooted in precision and performance.",
    icon: "code",
  },
  {
    id: "cinematic",
    title: "Cinematic Experience",
    description:
      "Digital interfaces shouldn't just work—they should inspire. We blend technical rigor with editorial aesthetics for unforgettable UX.",
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
    experience:
      "One of the most impactful projects I've built: an AI-powered hiring platform that solves a real HR problem. Companies create career pages from our dashboard and post job openings directly. Candidates visit the career page and complete AI-based interviews, allowing many applicants to be assessed simultaneously against the same opportunity. Interview scores are delivered back to the company so HR can shortlist the best candidates without wasting time on manual screening. The entire system is AI-driven and fully automated, currently live in production.",
    demo: "https://www.true-chance.com/",
  },
  {
    id: 2,
    title: "BSello",
    type: "marketplace",
    typeLabel: "Marketplace",
    experience:
      "Built a secure marketplace platform connecting buyers and sellers for social media account transactions. Developed a dedicated chatbot supporting one-to-one and one-to-many communication in a protected environment. Implemented secure payment flows from buyer to seller with scam prevention built in, including scam detection within the chatbot, blocked user management, and a complete end-to-end system designed for safe, trustworthy deals.",
    demo: "https://bsello.com/",
  },
  {
    id: 3,
    title: "Wytify",
    type: "content-ai",
    typeLabel: "Content AI",
    experience:
      "Led AI engineering and full-stack development on a fully automated article generation platform. Users select a membership plan, choose a topic area, and the system automatically generates relevant keywords. After keyword selection, the platform scrapes the top ten Google competitors for that topic and uses those results to guide article generation and SEO analysis, optimizing content based on real competitive data. Currently in active development.",
    inDevelopment: true,
  },
  {
    id: 4,
    title: "Medi-Report-AI",
    type: "medical-ai",
    typeLabel: "Medical AI",
    experience:
      "Developed a virtual doctor data engine powered by AI and machine learning. Trained the model on comprehensive medical data to deliver accurate responses across a wide range of user inputs, including disease risk level assessment, personalized recommendations, full diet plans, estimated recovery duration based on risk level, and more.",
    github: "https://github.com/arshmanahmad/Medi-Report-AI-Backend",
  },
  {
    id: 5,
    title: "Web-Scraper",
    type: "automation",
    typeLabel: "Automation",
    experience:
      "Built a Node.js web scraper using Playwright to extract detailed product information from Ali1688.com product pages. Engineered human-like browsing behavior patterns to avoid detection and integrated CAPTCHA solving capabilities for reliable, automated data extraction at scale.",
    github: "https://github.com/arshmanahmad/Website-Scraping",
  },
  {
    id: 6,
    title: "Smarledger",
    type: "business-erp",
    typeLabel: "Business ERP",
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
      "We dive deep into your industry, target audience, and business goals. Through collaborative workshops, we define the exact vision and technical constraints to ensure the roadmap is perfectly aligned with your requirements.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "Architecture, milestones, and delivery timelines are defined before a single line of code. You get a clear roadmap covering scope, risks, and technical decisions.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Clean, maintainable code ships in transparent iterations. You receive regular updates, demos, and progress checkpoints throughout the build.",
  },
  {
    step: 4,
    title: "Testing",
    description:
      "Rigorous QA across devices, browsers, and edge cases ensures reliability, security, and performance before launch.",
  },
  {
    step: 5,
    title: "Deployment",
    description:
      "Smooth production launch with CI/CD, monitoring, and infrastructure ready for real users from day one.",
  },
  {
    step: 6,
    title: "Support",
    description:
      "Long-term maintenance, feature updates, and optimization as your product and business continue to grow.",
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
  1: "AI recruitment platform with LLM-powered candidate assessments and automated interview scoring.",
  2: "Marketplace for social accounts with escrow, scam prevention, and real-time messaging.",
  3: "AI suite for article generation, competitor scraping, and SEO keyword research.",
  4: "Virtual doctor / ML engine for medical report analysis and personalized recommendations.",
  5: "Playwright-based headless browser automation for reliable product data extraction.",
  6: "Multi-tenant ERP-style business management platform across diverse retail verticals.",
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
