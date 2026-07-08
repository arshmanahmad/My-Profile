import { personalInfo, projects, services, brandAssets } from "./data";

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercel = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const seoKeywords = [
  "ARSHMANDEV",
  "arshmandev",
  "ArshmanDev",
  "Arshman Ahmad",
  "web development services",
  "web development",
  "app development",
  "app development services",
  "software development",
  "software developer",
  "full stack developer",
  "full stack development",
  "hire web developer",
  "hire app developer",
  "React developer",
  "Next.js developer",
  "TypeScript developer",
  "Node.js developer",
  "SaaS development",
  "business automation",
  "AI integration",
  "CRM development",
  "mobile app development",
  "Smarledger",
  "Smarledger business management",
  "freelance developer Pakistan",
  "custom web applications",
] as const;

export const seoTitle =
  "ARSHMANDEV: Web & App Development Services | Full Stack Developer";

export const seoDescription =
  "ARSHMANDEV (Arshman Ahmad) offers professional web development, app development, and software development services. Full stack developer building React, Next.js, SaaS, AI solutions, and business automation, including Smarledger, a multi-tenant business management platform.";

const profileImage = `${siteUrl}${brandAssets.logo}`;

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: personalInfo.name,
    alternateName: [
      personalInfo.brandName,
      "ARSHMANDEV",
      "arshmandev",
      "ArshmanDev",
    ],
    jobTitle: personalInfo.title,
    description: seoDescription,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    url: siteUrl,
    image: profileImage,
    address: {
      "@type": "PostalAddress",
      addressCountry: personalInfo.location,
    },
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
      "https://x.com/ArshmanDev",
      "https://www.instagram.com/arshmandev",
      "https://www.linkedin.com/in/arshman-ahmad-334829298",
    ],
    knowsAbout: [
      "Web Development",
      "App Development",
      "Software Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AI Integration",
      "Business Automation",
      "SaaS Development",
      "CRM Systems",
      "Smarledger",
      "LangChain",
      "FastAPI",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: personalInfo.brandName,
    alternateName: ["ARSHMANDEV", "arshmandev", "ArshmanDev", personalInfo.name],
    url: siteUrl,
    description: seoDescription,
    inLanguage: "en-US",
    publisher: { "@id": `${siteUrl}/#person` },
    author: { "@id": `${siteUrl}/#person` },
  };
}

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: personalInfo.brandName,
    alternateName: ["ARSHMANDEV", "arshmandev", "Arshman Ahmad Web Development"],
    url: siteUrl,
    description:
      "Professional web development, app development, and custom software development services for startups and businesses.",
    founder: { "@id": `${siteUrl}/#person` },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "Web Development Services",
      "App Development Services",
      "Software Development",
      "SaaS Development",
      "AI Integration",
      "Business Automation",
      "CRM Development",
      "Mobile App Development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

export function getProjectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ARSHMANDEV Projects",
    description:
      "Web development, app development, and software projects by ARSHMANDEV.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.experience,
        ...(project.github ? { codeRepository: project.github } : {}),
        ...(project.demo ? { url: project.demo } : {}),
        author: { "@id": `${siteUrl}/#person` },
      },
    })),
  };
}

export function getSmarledgerSchema() {
  const smarledger = projects.find((p) => p.title === "Smarledger");
  if (!smarledger) return null;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#smarledger`,
    name: "Smarledger",
    alternateName: ["Smarledger Business Management", "Smarledger Store Backend"],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: smarledger.experience,
    url: smarledger.github,
    codeRepository: smarledger.github,
    author: {
      "@type": "Person",
      name: personalInfo.name,
      alternateName: personalInfo.brandName,
      url: siteUrl,
    },
    creator: { "@id": `${siteUrl}/#person` },
    keywords: "Smarledger, business management, multi-tenant, retail software",
  };
}

export function getStructuredData() {
  return [
    getPersonSchema(),
    getWebSiteSchema(),
    getProfessionalServiceSchema(),
    getProjectsSchema(),
    getSmarledgerSchema(),
  ].filter(Boolean);
}
