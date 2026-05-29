import { useEffect } from "react";
import { X } from "lucide-react";
import { contact } from "../../data/content";

type ModalState = "success" | "failed" | null;

interface Props {
  state: ModalState;
  onClose: () => void;
}

export function ContactModal({ state, onClose }: Props) {
  useEffect(() => {
    if (!state) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [state, onClose]);

  if (!state) return null;

  const content = state === "success" ? contact.successText : contact.failedText;
  const icon = state === "success" ? contact.successIcon : contact.failedIcon;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={content.title}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/70 backdrop-blur-sm grid place-items-center p-5 animate-[fade-in_200ms_ease-out_both]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full bg-white dark:bg-[#14181f] border border-ink-25 dark:border-white/10 rounded-2xl p-8 text-center animate-[modal-in_300ms_ease-out_both]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full text-ink-500 dark:text-white/60 hover:bg-ink-25 dark:hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>
        <img
          src={icon}
          alt=""
          className="w-24 h-24 md:w-28 md:h-28 mx-auto object-contain"
        />
        <h3 className="mt-4 text-xl md:text-2xl font-bold text-ink-900 dark:text-white">
          {content.title}
        </h3>
        <p className="mt-2 text-sm md:text-base text-ink-500 dark:text-white/60">
          {content.body}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-primary text-white font-semibold py-3.5 hover:bg-[#cc4e32] transition-colors"
        >
          {content.button}
        </button>
      </div>
    </div>
  );
}
