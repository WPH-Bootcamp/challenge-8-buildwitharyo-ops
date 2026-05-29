import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";
import { stats } from "../../data/content";

interface StatProps {
  value: string;
  label: string;
  delay: number;
}

function StatCircle({ value, label, delay }: StatProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/\d/g, "");
  const count = useCountUp(numeric, 1400, inView);

  return (
    <div
      ref={ref}
      className="stat-circle aspect-square w-full max-w-[280px] mx-auto rounded-full grid place-items-center text-center px-6 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.92)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div>
        <div className="text-4xl md:text-5xl lg:text-[56px] font-bold tabular-nums text-primary leading-none">
          {count}
          {suffix}
        </div>
        <div className="mt-3 text-sm md:text-base text-ink-800 dark:text-white">
          {label}
        </div>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading title={stats.title} description={stats.description} />
        </Reveal>
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.items.map((item, i) => (
            <StatCircle
              key={item.label}
              value={item.value}
              label={item.label}
              delay={i * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
