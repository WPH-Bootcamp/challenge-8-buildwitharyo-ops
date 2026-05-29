import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Container } from "../ui/Container";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { navLinks, hero } from "../../data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // 16px = scroll threshold for sticky header bg swap
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors ${
          scrolled
            ? "bg-white/85 dark:bg-[#0a0d12]/80 backdrop-blur-md border-b border-ink-200 dark:border-white/5"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-6 py-4">
            <Logo />

            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-semibold text-ink-700 dark:text-white/80 hover:text-ink-900 dark:hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold px-6 py-3 hover:bg-[#cc4e32] hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                {hero.ctaLabel}
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="md:hidden w-10 h-10 grid place-items-center rounded-full text-ink-900 dark:text-white hover:bg-ink-25 dark:hover:bg-white/10"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
