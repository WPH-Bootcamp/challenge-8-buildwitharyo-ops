import { Container } from "../ui/Container";
import { hero } from "../../data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-8 pb-12 md:pt-12 md:pb-20 overflow-hidden"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="animate-[hero-in_700ms_ease-out_both]">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.05] text-ink-900 dark:text-white">
              {hero.headline}{" "}
              <span className="text-primary block md:inline">
                {hero.highlight}
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-ink-500 dark:text-white/70 max-w-[480px]">
              {hero.description}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold px-8 py-3.5 hover:bg-[#cc4e32] hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              {hero.ctaLabel}
            </a>
          </div>
          <div
            className="order-first md:order-last animate-[hero-float_6s_ease-in-out_infinite]"
            style={{
              // soft radial fade so the image edges blend into page bg
              maskImage:
                "radial-gradient(ellipse 95% 90% at 50% 50%, black 65%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 95% 90% at 50% 50%, black 65%, transparent 100%)",
            }}
          >
            <img
              src={hero.imageLight}
              alt="Phone mockup showcasing IT solutions"
              decoding="async"
              className="w-full max-w-[560px] mx-auto block dark:hidden"
            />
            <img
              src={hero.image}
              alt=""
              aria-hidden
              decoding="async"
              className="w-full max-w-[560px] mx-auto hidden dark:block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
