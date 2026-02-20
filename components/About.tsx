import { Code2, Settings2, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { AboutCard } from "@/lib/data";

const ICONS = {
  code: Code2,
  cog: Settings2,
  chart: BarChart3,
};

interface AboutProps {
  cards: AboutCard[];
}

export default function About({ cards }: AboutProps) {
  return (
    <section id="about" className="relative z-10">
      <div className="section-container">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-badge mb-4 mx-auto w-fit">About Me</div>
            <h2 className="section-heading text-[#e0f2ff] mb-5">
              A Developer Who{" "}
              <span className="gradient-text">Delivers Results</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-[#e0f2ff]/60 leading-relaxed">
              A results-driven Full-Stack Developer with 4+ years of expertise
              in MERN stack, Python automation, FastAPI, LangChain, LangGraph,
              and Shopify API integration. I don&apos;t just write code — I
              build solutions that grow your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <ScrollReveal key={card.title} delay={i * 120}>
                <article className="glass-card p-7 h-full flex flex-col group">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "rgba(0,200,255,0.1)",
                      border: "1px solid rgba(0,200,255,0.2)",
                    }}
                  >
                    <Icon size={22} style={{ color: "#00c8ff" }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#e0f2ff] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#e0f2ff]/58 mb-5 flex-1">
                    {card.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {card.badges.map((badge) => (
                      <span key={badge} className="tech-pill">
                        {badge}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
