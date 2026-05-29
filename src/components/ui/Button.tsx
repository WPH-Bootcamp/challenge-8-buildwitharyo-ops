import type { ButtonProps } from "../../types";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-primary text-white hover:bg-[#cc4e32]",
  secondary: "bg-white text-primary border border-primary hover:bg-primary/5",
  ghost:
    "bg-transparent text-ink-800 hover:bg-ink-25 dark:text-white dark:hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
