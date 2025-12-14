import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: LucideIcon;
}