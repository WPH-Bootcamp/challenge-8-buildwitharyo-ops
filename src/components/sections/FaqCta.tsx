import { Container } from "../ui/Container";
import { Accordion } from "../ui/Accordion";
import { Reveal } from "../ui/Reveal";
import { faq } from "../../data/content";

export function FaqCta() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <Container>
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-12 items-start">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-ink-200 dark:border-white/10 pb-6">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.15] text-ink-900 dark:text-white max-w-[480px]">
                {faq.title}
              </h2>
              <p className="text-sm md:text-base text-ink-500 dark:text-white/50 md:text-right md:max-w-[200px]">
                {faq.description}
              </p>
            </div>
            <div className="mt-2">
              <Accordion
                items={faq.items.map((item) => ({
                  title: item.q,
                  body: <p>{item.a}</p>,
                }))}
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <aside className="rounded-3xl bg-primary p-6 md:p-7 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold !text-white">
                {faq.cta.title}
              </h3>
              <p className="mt-2 text-white/90 text-sm md:text-base">
                {faq.cta.body}
              </p>
              <img
                src={faq.cta.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="mt-5 w-full rounded-2xl h-[160px] object-cover"
              />
              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-white text-ink-900 font-bold px-6 py-3.5 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {faq.cta.button}
              </a>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
