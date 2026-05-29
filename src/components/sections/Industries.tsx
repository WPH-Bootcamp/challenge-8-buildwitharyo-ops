import { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { industries } from "../../data/content";

export function Industries() {
  const [active, setActive] = useState(industries.items[0].slug);
  const current =
    industries.items.find((item) => item.slug === active) ??
    industries.items[0];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            title={industries.title}
            description={industries.description}
            align="left"
          />
        </Reveal>

        <div className="mt-12 md:mt-16 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div
            role="tablist"
            aria-label="Industries"
            className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible"
          >
            {industries.items.map((item) => {
              const isActive = item.slug === active;
              return (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(item.slug)}
                  className="relative shrink-0 text-left py-2 pl-4 pr-2 transition-colors"
                >
                  <span
                    className={`absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full transition-all duration-300 origin-center ${
                      isActive
                        ? "bg-primary scale-y-100"
                        : "bg-ink-200 dark:bg-white/15 scale-y-75"
                    }`}
                  />
                  <span
                    className={`text-base md:text-lg font-semibold transition-colors ${
                      isActive
                        ? "text-ink-900 dark:text-white"
                        : "text-ink-400 dark:text-white/40 hover:text-ink-700 dark:hover:text-white/70"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            key={current.slug}
            className="animate-[fade-in_400ms_ease-out_both]"
          >
            <p className="text-base md:text-lg text-ink-700 dark:text-white/80 leading-relaxed">
              {current.body}
            </p>
            <img
              src={current.image}
              alt={current.title}
              loading="lazy"
              decoding="async"
              className="mt-8 w-full rounded-2xl h-[280px] md:h-[360px] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
