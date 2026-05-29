import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  body: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  body: string;
  icon?: string;
}

export interface IndustryItem {
  slug: string;
  title: string;
  body: string;
  image: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}
