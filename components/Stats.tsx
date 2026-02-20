import ScrollReveal from "./ScrollReveal";

interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section
      className="relative z-10 border-y"
      style={{ borderColor: "rgba(16,217,160,0.08)" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(6,24,20,0.5)" }}
        aria-hidden="true"
      />
      <div className="section-container relative !py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div className="text-center group">
                <div
                  className="text-4xl lg:text-5xl font-extrabold gradient-text mb-1 transition-transform duration-300 group-hover:scale-110"
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[#f0fdf4]/55 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
