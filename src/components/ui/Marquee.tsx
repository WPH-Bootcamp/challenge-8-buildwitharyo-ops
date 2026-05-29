import type { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Marquee({ children, speed = 35, className = "" }: Props) {
  const mask =
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";
  const style = {
    maskImage: mask,
    WebkitMaskImage: mask,
  } as CSSProperties;

  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      <div
        className="flex w-max gap-12 md:gap-16 animate-[marquee_var(--dur)_linear_infinite] hover:[animation-play-state:paused]"
        style={{ ["--dur" as string]: `${speed}s` }}
      >
        {/* duplicate items so the loop is seamless when first set scrolls off */}
        <div className="flex items-center gap-12 md:gap-16 shrink-0">
          {children}
        </div>
        <div
          className="flex items-center gap-12 md:gap-16 shrink-0"
          aria-hidden
        >
          {children}
        </div>
      </div>
    </div>
  );
}
