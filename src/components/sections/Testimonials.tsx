import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { StarRating } from "../ui/StarRating";
import { useInView } from "../../hooks/useInView";
import { testimonials } from "../../data/content";
import type { TestimonialItem } from "../../types";

function QuoteMark() {
  return (
    <svg
      className="absolute -top-4 left-6 w-10 h-7 text-primary"
      viewBox="0 0 45 36"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M0 36V20.5C0 14.6 1.4 10 4.2 6.6 7 3.3 11.4 1.1 17.4 0v6.6c-3.4.8-5.9 2.3-7.5 4.3-1.6 2-2.5 4.6-2.5 7.7H17V36H0zm27.5 0V20.5c0-5.9 1.4-10.5 4.2-13.9C34.5 3.3 38.9 1.1 44.9 0v6.6c-3.4.8-5.9 2.3-7.5 4.3-1.6 2-2.4 4.6-2.5 7.7h9.6V36H27.5z" />
    </svg>
  );
}

interface CardProps {
  item: TestimonialItem;
  active: boolean;
}

function Card({ item, active }: CardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-white dark:bg-[#14181f] border border-ink-25 dark:border-white/5 shadow-sm dark:shadow-none px-6 md:px-8 pt-8 pb-16 text-center transition-all duration-500 ${
        active ? "opacity-100 md:scale-[1.02]" : "opacity-40 md:scale-100"
      }`}
    >
      <QuoteMark />
      <div className="flex justify-center">
        <StarRating rating={item.rating} />
      </div>
      <p className="mt-4 text-base md:text-lg text-ink-700 dark:text-white/80 leading-relaxed">
        “{item.quote}”
      </p>
      <div className="mt-6 font-bold text-ink-900 dark:text-white">
        {item.author}
      </div>
      <div className="text-sm font-semibold text-primary">{item.role}</div>
      <img
        src={item.avatar}
        alt={item.author}
        loading="lazy"
        decoding="async"
        className="absolute left-1/2 -bottom-7 -translate-x-1/2 w-14 h-14 rounded-full object-cover border-4 border-white dark:border-[#0a0d12]"
      />
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const { ref, inView } = useInView<HTMLElement>({
    once: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView || paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [inView, paused]);

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <Reveal>
          <SectionHeading
            title={testimonials.title}
            description={testimonials.description}
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7 pb-10 mt-16 md:mt-20">
          {testimonials.items.map((item, i) => (
            <Card key={item.author} item={item} active={i === active} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-ink-400 dark:bg-white/20 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
