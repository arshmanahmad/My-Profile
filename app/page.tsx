import Background from "@/components/Background";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ClientReviews from "@/components/ClientReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { stats, aboutCards, skills, projects, personalInfo } from "@/lib/data";

// Structured data for SEO (JSON-LD)
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arshman Ahmad",
  jobTitle: "Full-Stack Developer & Automation Expert",
  email: "arshmanwhiz@gmail.com",
  url: "https://github.com/arshmanahmad",
  sameAs: [
    "https://github.com/arshmanahmad",
    "https://linkedin.com/in/arshmanahmad",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "Python",
    "FastAPI",
    "LangChain",
    "MongoDB",
    "TypeScript",
    "Docker",
    "Shopify API",
    "Payment Gateway Integration",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Background />
      <Navigation />
      <main>
        <Hero personalInfo={personalInfo} />
        <Stats stats={stats} />
        <About cards={aboutCards} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <ClientReviews />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer />
    </>
  );
}
