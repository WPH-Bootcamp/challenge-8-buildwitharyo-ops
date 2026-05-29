import { Star } from "lucide-react";

interface Props {
  rating: number;
  max?: number;
}

export function StarRating({ rating, max = 5 }: Props) {
  return (
    <div
      className="inline-flex items-center gap-1"
      aria-label={`Rating ${rating} of ${max}`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? "fill-[#f5b800] text-[#f5b800]"
              : "fill-none text-ink-300 dark:text-white/20"
          }`}
        />
      ))}
    </div>
  );
}
