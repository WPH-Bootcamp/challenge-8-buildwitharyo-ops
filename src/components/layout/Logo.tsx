export function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-3 font-bold text-xl md:text-2xl text-ink-900 dark:text-white"
    >
      <svg
        width="30"
        height="33"
        viewBox="0 0 30 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* outlined back + solid front — matches Figma logo-symbol boolean shape */}
        <rect
          x="0.8"
          y="0.8"
          width="18"
          height="23.82"
          rx="0.8"
          stroke="#ff623e"
          strokeWidth="1.6"
          fill="none"
        />
        <rect
          x="9.99"
          y="7.04"
          width="19.6"
          height="25.42"
          rx="0.8"
          fill="#ff623e"
        />
      </svg>
      <span>Your Logo</span>
    </a>
  );
}
