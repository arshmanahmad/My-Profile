import Background from "@/components/Background";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WorkProcess from "@/components/WorkProcess";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import About from "@/components/About";
import ClientReviews from "@/components/ClientReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  stats,
  services,
  projects,
  processSteps,
  whyWorkWithMe,
  testimonials,
  personalInfo,
} from "@/lib/data";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arshman Ahmad",
  jobTitle: "Full Stack Developer",
  email: "arshman.codes@gmail.com",
  telephone: "+923294494502",
  url: "https://github.com/arshmanahmad",
  sameAs: [
    "https://github.com/arshmanahmad",
    "https://linkedin.com/in/arshmanahmad",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AI Integration",
    "Business Automation",
    "SaaS Development",
    "CRM Systems",
    "LangChain",
    "FastAPI",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arshman Ahmad, Full Stack Developer",
  description:
    "Building scalable web applications, AI solutions & business automation for startups and businesses.",
  author: {
    "@type": "Person",
    name: "Arshman Ahmad",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Background />
      <Navigation />
      <main>
        <Hero personalInfo={personalInfo} />
        <Stats stats={stats} />
        <Services services={services} />
        <Projects projects={projects} />
        <WorkProcess steps={processSteps} />
        <WhyWorkWithMe items={whyWorkWithMe} />
        <About />
        <ClientReviews testimonials={testimonials} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
