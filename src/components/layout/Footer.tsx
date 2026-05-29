import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
} from "./SocialIcons";
import { footer, navLinks } from "../../data/content";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  TikTok: TikTokIcon,
};

export function Footer() {
  return (
    <footer className="py-12 md:py-16">
      <Container>
        <div className="rounded-3xl bg-ink-25 dark:bg-[#14181f] border border-ink-25 dark:border-white/5 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:justify-between md:items-start">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-ink-900 dark:!text-white max-w-[600px] leading-[1.1]">
              {footer.heading}
            </h2>
            <Logo />
          </div>

          <div className="my-8 border-t border-ink-200 dark:border-white/10" />

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:justify-between md:items-center">
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-ink-500 dark:text-white/60 hover:text-primary transition-colors text-sm md:text-base"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {footer.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 grid place-items-center rounded-full border border-ink-300 dark:border-white/20 text-ink-700 dark:text-white/70 hover:border-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-ink-500 dark:text-white/40">
          {footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
