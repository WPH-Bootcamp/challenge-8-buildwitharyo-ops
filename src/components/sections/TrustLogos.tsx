import { Container } from "../ui/Container";
import { Marquee } from "../ui/Marquee";
import { BrandMark } from "./BrandMark";
import { trustedBrands } from "../../data/content";

export function TrustLogos() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <p className="text-center text-lg md:text-xl font-bold text-ink-900 dark:text-white">
          {trustedBrands.label}
        </p>
      </Container>
      <div className="mt-10 md:mt-14">
        <Marquee>
          {trustedBrands.items.map((slug) => (
            <BrandMark key={slug} slug={slug} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
