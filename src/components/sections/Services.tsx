import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { services } from "../../data/content";

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            title={services.title}
            description={services.description}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mt-16 md:mt-20">
          {services.items.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <div className="group relative rounded-2xl bg-white dark:bg-[#14181f] border border-ink-200 dark:border-white/5 shadow-sm dark:shadow-none px-6 pt-10 pb-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 h-full">
                {service.icon && (
                  <img
                    src={service.icon}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute -top-5 left-5 w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300"
                  />
                )}
                <h3 className="text-lg md:text-xl font-bold text-ink-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-ink-500 dark:text-white/60">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
