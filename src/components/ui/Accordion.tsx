import { useState, type ReactNode } from "react";
import { Plus, Minus } from "lucide-react";

interface Item {
  title: string;
  body: ReactNode;
}

interface Props {
  items: Item[];
  defaultOpen?: number | null;
}

export function Accordion({ items, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div>
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className="border-b border-ink-200 dark:border-white/10"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-base md:text-lg font-bold text-ink-900 dark:text-white">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="w-5 h-5 text-ink-500 dark:text-white/70 shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-ink-500 dark:text-white/70 shrink-0" />
              )}
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-5 text-ink-500 dark:text-white/60">
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
