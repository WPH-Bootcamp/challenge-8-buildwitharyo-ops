import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { portfolio } from "../../data/content";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            title={portfolio.title}
            description={portfolio.description}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 mt-16 md:mt-20">
          {portfolio.items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 100}>
              <a href="#" className="group block">
                <div className="rounded-2xl overflow-hidden bg-ink-25 dark:bg-[#14181f]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  />
                </div>
                <div className="mt-5 text-sm font-semibold text-primary">
                  {item.category}
                </div>
                <h3 className="mt-1 text-lg md:text-xl font-bold text-ink-900 dark:text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
