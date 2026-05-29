import type {
  NavLink,
  StatItem,
  ProcessStep,
  ServiceItem,
  IndustryItem,
  PortfolioItem,
  TestimonialItem,
  FaqItem,
  SocialLink,
} from "../types";

import iconWeb from "../assets/icons/services/web-development.png";
import iconMobile from "../assets/icons/services/mobile-app-development.png";
import iconUiUx from "../assets/icons/services/ui-ux-design.png";
import iconCloud from "../assets/icons/services/cloud-solutions.png";
import iconInfrastructure from "../assets/icons/services/it-infrastructure.png";
import iconCybersecurity from "../assets/icons/services/cybersecurity.png";
import iconQa from "../assets/icons/services/qa-solutions.png";
import iconConsulting from "../assets/icons/services/it-consulting.png";
import iconSuccessSend from "../assets/icons/modal/success-send.png";
import iconSuccessFailed from "../assets/icons/modal/success-failed.png";
import heroPhone from "../assets/images/hero/hero-phone-mockup.png";
import heroPhoneLight from "../assets/images/hero/hero-phone-mockup-light.png";
import fintechImage from "../assets/images/industry/fintech.png";
import ecommerceImage from "../assets/images/industry/e-commerce.png";
import healthcareImage from "../assets/images/industry/healthcare.png";
import portfolio1 from "../assets/images/portfolio/portfolio-1-willy-nielsen.png";
import portfolio2 from "../assets/images/portfolio/portfolio-2-thierry.png";
import portfolio3 from "../assets/images/portfolio/portfolio-3-delon-lorenzo.png";
import avatarSarah from "../assets/images/avatars/avatar-1-sarah.png";
import avatarDaniel from "../assets/images/avatars/avatar-2-daniel.png";
import faqCtaImage from "../assets/images/faq/faq-cta.png";

/* ----- Nav ----- */

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

/* ----- Hero ----- */

export const hero = {
  headline: "Your Tech Partner for",
  highlight: "Smarter Growth",
  description:
    "We deliver tailored IT solutions to help you scale with speed and confidence.",
  ctaLabel: "Let's Talk",
  image: heroPhone,
  imageLight: heroPhoneLight,
};

/* ----- Trusted brands ----- */

export const trustedBrands = {
  label: "Trusted by Global Innovators & Leading Brands",
  items: [
    "adobe",
    "upwork",
    "zoom",
    "postman",
    "databricks",
    "airbnb",
    "dropbox",
    "paypal",
    "netflix",
  ],
};

/* ----- Stats ----- */

export const stats = {
  title: "End-to-End IT Solutions That Drive Results",
  description:
    "From strategy to execution, we deliver solutions that grow your business.",
  items: [
    { value: "50+", label: "Projects Delivered" },
    { value: "5+", label: "Years of Experience" },
    { value: "10+", label: "Industry Awards Won" },
    { value: "100%", label: "Client Satisfaction Rate" },
  ] satisfies StatItem[],
};

/* ----- Process ----- */

export const process = {
  title: "Our Process",
  description: "Clear steps. Smart execution. Results you can count on.",
  steps: [
    {
      number: 1,
      title: "Discovery & Consultation",
      body: "Understand Your Needs & Goals",
    },
    {
      number: 2,
      title: "Planning & Strategy",
      body: "Build a Clear, Scalable Roadmap",
    },
    {
      number: 3,
      title: "Design & Prototyping",
      body: "Craft UX That Converts",
    },
    {
      number: 4,
      title: "Development & Implementation",
      body: "Deliver With Speed & Precision",
    },
    {
      number: 5,
      title: "Testing & Optimization",
      body: "Ensure Quality at Every Step",
    },
    {
      number: 6,
      title: "Launch & Growth",
      body: "Scale, Measure & Improve Continuously",
    },
  ] satisfies ProcessStep[],
};

/* ----- Services ----- */

// keep services in this exact order — icon positions in design grid depend on it
export const services = {
  title: "Smart IT Solutions That Grow With You",
  description: "Tailored tech to boost efficiency, security, and results.",
  items: [
    {
      slug: "web-development",
      title: "Web Development",
      body: "Build fast, scalable, and SEO-friendly websites.",
      icon: iconWeb,
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      body: "Native & cross-platform apps tailored to user needs.",
      icon: iconMobile,
    },
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      body: "Delight users with intuitive and beautiful interfaces.",
      icon: iconUiUx,
    },
    {
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      body: "Secure and flexible cloud infrastructure for your growth.",
      icon: iconCloud,
    },
    {
      slug: "software-development",
      title: "Software Development",
      body: "Custom solutions built around your business logic.",
      icon: iconWeb,
    },
    {
      slug: "it-infrastructure",
      title: "IT Infrastructure",
      body: "Scale your backend with reliable tech foundations.",
      icon: iconInfrastructure,
    },
    {
      slug: "cybersecurity",
      title: "Cybersecurity Services",
      body: "Stay protected with enterprise-grade security.",
      icon: iconCybersecurity,
    },
    {
      slug: "qa-solutions",
      title: "QA Solutions",
      body: "Ensure performance with rigorous testing frameworks.",
      icon: iconQa,
    },
    {
      slug: "it-consulting",
      title: "IT Consulting & Support",
      body: "Make smarter tech decisions with expert guidance.",
      icon: iconConsulting,
    },
  ] satisfies ServiceItem[],
};

/* ----- Industries ----- */

export const industries = {
  title: "Built for Your Industry",
  description:
    "We've helped companies across industries launch smarter, faster, and more securely.",
  items: [
    {
      slug: "fintech",
      title: "Fintech",
      body: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
      image: fintechImage,
    },
    {
      slug: "e-commerce",
      title: "E-Commerce",
      body: "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
      image: ecommerceImage,
    },
    {
      slug: "healthcare",
      title: "Healthcare",
      body: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
      image: healthcareImage,
    },
  ] satisfies IndustryItem[],
};

/* ----- Portfolio ----- */

export const portfolio = {
  title: "From Vision to Launch! Projects We're Proud Of",
  description:
    "Take a closer look at our recent work powering startups, enterprises, and everything in between.",
  items: [
    {
      slug: "portofolio-1",
      title: "Portofolio 1",
      category: "Landing Page",
      image: portfolio1,
    },
    {
      slug: "portofolio-2",
      title: "Portofolio 2",
      category: "Landing Page",
      image: portfolio2,
    },
    {
      slug: "portofolio-3",
      title: "Portofolio 3",
      category: "Landing Page",
      image: portfolio3,
    },
  ] satisfies PortfolioItem[],
};

/* ----- Testimonials ----- */

export const testimonials = {
  title: "What Partners Say About Working With Us",
  description: "Trusted voices. Real experiences. Proven results.",
  items: [
    {
      quote:
        "A real game-changer for our project. The team listened to every detail and turned it into reality efficiently and effectively.",
      author: "John Lee",
      role: "Director at Innovate Corp",
      avatar: avatarDaniel,
      rating: 5,
    },
    {
      quote:
        "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
      author: "Sarah Tan",
      role: "Product Manager at Finovate",
      avatar: avatarSarah,
      rating: 5,
    },
    {
      quote:
        "The collaboration was seamless from start to finish. They exceeded our expectations and their expertise translated into a truly successful project.",
      author: "Emily Chen",
      role: "Marketing Head at TechCorp",
      avatar: avatarSarah,
      rating: 5,
    },
  ] satisfies TestimonialItem[],
};

/* ----- FAQ ----- */

export const faq = {
  title: "Need Help? Start Here.",
  description: "Everything you need to know — all in one place.",
  items: [
    {
      q: "What services do you offer?",
      a: "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
    },
    {
      q: "How do I know if this is right for my business?",
      a: "Book a free consultation — we'll review your goals and tell you honestly whether we're a fit.",
    },
    {
      q: "How much does a project cost?",
      a: "Projects start from around $5k for small scopes and scale up based on requirements and complexity.",
    },
    {
      q: "How long does it take?",
      a: "Typical timelines run 4–12 weeks depending on scope and complexity.",
    },
    {
      q: "Can I start with a small project first?",
      a: "Yes — many clients begin with a discovery sprint or MVP before scaling up.",
    },
  ] satisfies FaqItem[],
  cta: {
    title: "Let's talk it through",
    body: "book a free consultation with our team.",
    button: "Free Consultation",
    image: faqCtaImage,
  },
};

/* ----- Contact ----- */

export const contact = {
  title: "Ready to Start? Let's Talk.",
  description: "Tell us what you need, and we'll get back to you soon.",
  fields: {
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder: "Enter your message",
    servicesLabel: "Services",
  },
  serviceOptions: [
    "Web Development",
    "Cloud Solutions",
    "Mobile App Development",
    "Software Development",
    "UI/UX Design",
    "Other",
  ],
  submitLabel: "Send",
  successIcon: iconSuccessSend,
  failedIcon: iconSuccessFailed,
  successText: {
    title: "Message Received!",
    body: "Thanks for reaching out — we'll get back to you as soon as possible.",
    button: "Back to Home",
  },
  failedText: {
    title: "Oops! Something went wrong.",
    body: "We couldn't send your message. Please try again or check your connection.",
    button: "Try Again",
  },
};

/* ----- Footer ----- */

export const footer = {
  heading: "LET'S DISCUSS YOUR IDEAS",
  copyright: "© 2025 Your Logo. All rights reserved.",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "TikTok", href: "#" },
  ] satisfies SocialLink[],
};
