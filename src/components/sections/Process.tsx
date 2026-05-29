import { ChevronUp } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { process } from "../../data/content";

function Bullet({ n }: { n: number }) {
  return (
    <div className="w-10 h-10 rounded-full bg-primary grid place-items-center text-white font-bold text-sm shadow-[0_0_0_4px_#ffffff] dark:shadow-[0_0_0_4px_#0a0d12]">
      {n}
    </div>
  );
}

function StepCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-[#14181f] border border-ink-25 dark:border-white/5 shadow-sm dark:shadow-none p-5 md:p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg md:text-xl font-bold text-ink-900 dark:text-white">
          {title}
        </h3>
        <ChevronUp className="w-5 h-5 text-ink-400 dark:text-white/40 shrink-0 mt-1" />
      </div>
      <p className="mt-2 text-sm md:text-base text-ink-500 dark:text-white/60">
        {body}
      </p>
    </div>
  );
}

export function Process() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            title={process.title}
            description={process.description}
          />
        </Reveal>

        <div className="relative max-w-[1100px] mx-auto mt-16 md:mt-20">
          <span className="hidden md:block absolute left-1/2 top-5 bottom-5 w-px bg-ink-25 dark:bg-white/10 -translate-x-1/2" />
          <div className="flex flex-col gap-6 md:gap-8">
            {process.steps.map((step, idx) => {
              const onLeft = idx % 2 === 0;
              return (
                <Reveal key={step.number} delay={idx * 80}>
                  <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
                    {onLeft ? (
                      <>
                        <div className="hidden md:block">
                          <StepCard title={step.title} body={step.body} />
                        </div>
                        <div className="flex items-center gap-4 md:contents">
                          <Bullet n={step.number} />
                          <div className="flex-1 md:hidden">
                            <StepCard title={step.title} body={step.body} />
                          </div>
                        </div>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <div className="flex items-center gap-4 md:contents">
                          <Bullet n={step.number} />
                          <div className="flex-1 md:hidden">
                            <StepCard title={step.title} body={step.body} />
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <StepCard title={step.title} body={step.body} />
                        </div>
                      </>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
