import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: Props) {
  return (
    <div className={`max-w-[1160px] mx-auto px-5 md:px-10 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
