import { useEffect } from "react";
import { X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, hero } from "../../data/content";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-[#0a0d12] flex flex-col p-5 md:hidden">
      <div className="flex items-center justify-between">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 grid place-items-center rounded-full hover:bg-ink-25 dark:hover:bg-white/10 text-ink-900 dark:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-8 flex flex-col">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="py-4 text-lg font-semibold border-b border-ink-200 dark:border-white/10 text-ink-900 dark:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        onClick={onClose}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold px-6 py-3.5 hover:bg-[#cc4e32] transition-colors"
      >
        {hero.ctaLabel}
      </a>
    </div>
  );
}
