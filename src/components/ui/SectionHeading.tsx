interface Props {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "center",
  className = "",
}: Props) {
  const wrapAlign = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-[760px] ${wrapAlign} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.15] text-ink-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-ink-500 dark:text-white/60">
          {description}
        </p>
      )}
    </div>
  );
}
