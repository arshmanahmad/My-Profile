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
import SocialPresence from "@/components/SocialPresence";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getStructuredData } from "@/lib/seo";
import {
  stats,
  services,
  projects,
  processSteps,
  whyWorkWithMe,
  testimonials,
  personalInfo,
  socialProfiles,
} from "@/lib/data";

export default function Home() {
  const structuredData = getStructuredData();

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
        <SocialPresence profiles={socialProfiles} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
