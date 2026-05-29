import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { TrustLogos } from "../components/sections/TrustLogos";
import { Stats } from "../components/sections/Stats";
import { Process } from "../components/sections/Process";
import { Services } from "../components/sections/Services";
import { Industries } from "../components/sections/Industries";
import { Portfolio } from "../components/sections/Portfolio";
import { Testimonials } from "../components/sections/Testimonials";
import { FaqCta } from "../components/sections/FaqCta";
import { ContactForm } from "../components/sections/ContactForm";

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-ink-950">
      <Header />
      <main>
        <Hero />
        <TrustLogos />
        <Stats />
        <Process />
        <Services />
        <Industries />
        <Portfolio />
        <Testimonials />
        <FaqCta />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
