import { 
  Zap, 
  Layout, 
  Code, 
  Globe, 
  Shield, 
  BarChart, 
  Twitter, 
  Github, 
  Linkedin, 
  Facebook 
} from 'lucide-react';
import { NavItem, Feature, Testimonial, PricingPlan, FAQItem, SocialLink } from './types';

export const APP_NAME = "SiteForge AI";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES: Feature[] = [
  {
    title: 'AI-Powered Generation',
    description: 'Describe your business in a sentence, and our AI builds a unique, production-ready website in seconds.',
    icon: Zap,
  },
  {
    title: 'Responsive by Default',
    description: 'Every site created is automatically optimized for mobile, tablet, and desktop viewing experiences.',
    icon: Layout,
  },
  {
    title: 'Clean Code Export',
    description: 'Don\'t get locked in. Export standard React, HTML, and Tailwind CSS code whenever you want.',
    icon: Code,
  },
  {
    title: 'Global CDN Hosting',
    description: 'Your site is deployed to the edge instantly, ensuring lightning-fast load times for users worldwide.',
    icon: Globe,
  },
  {
    title: 'Enterprise Security',
    description: 'Automatic SSL certificates, DDoS protection, and 99.99% uptime guarantee included.',
    icon: Shield,
  },
  {
    title: 'Smart Analytics',
    description: 'Gain insights into visitor behavior with privacy-focused, AI-summarized analytics dashboards.',
    icon: BarChart,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    content: "We launched our bakery's online store in 20 minutes. The AI understood our brand voice perfectly.",
    author: "Sarah Jenkins",
    role: "Owner",
    company: "Sweet Delights",
    image: "https://picsum.photos/id/64/100/100",
  },
  {
    content: "As a developer, I was skeptical. But the code export feature is clean and saved me weeks of boilerplate work.",
    author: "David Chen",
    role: "Senior Engineer",
    company: "TechFlow",
    image: "https://picsum.photos/id/91/100/100",
  },
  {
    content: "The ROI has been incredible. SiteForge costs a fraction of an agency but delivers agency-quality design.",
    author: "Elena Rodriguez",
    role: "Marketing Director",
    company: "GrowthX",
    image: "https://picsum.photos/id/129/100/100",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "Perfect for testing the waters.",
    features: ["1 AI Website", "Standard Hosting", "Community Support", "SiteForge Branding"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing businesses.",
    features: ["5 AI Websites", "Custom Domain", "Priority Support", "Analytics Dashboard", "Code Export"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Agency",
    price: "$99",
    period: "/mo",
    description: "For those managing multiple clients.",
    features: ["Unlimited Websites", "White Labeling", "Dedicated Account Manager", "API Access", "Team Collaboration"],
    cta: "Contact Sales",
    popular: false,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need coding skills to use SiteForge?",
    answer: "Absolutely not. SiteForge is designed for everyone. You simply chat with our AI, and it handles all the design and coding for you.",
  },
  {
    question: "Can I use my own domain name?",
    answer: "Yes! On our Pro and Agency plans, you can connect any custom domain name that you own.",
  },
  {
    question: "Is the generated code SEO friendly?",
    answer: "Yes. Our AI follows modern SEO best practices, including semantic HTML, meta tags generation, and fast loading speeds to help you rank better.",
  },
  {
    question: "Can I edit the site after the AI builds it?",
    answer: "Of course. We provide a powerful visual editor for fine-tuning details, images, and text after the initial generation.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Twitter', href: '#', icon: Twitter },
  { platform: 'GitHub', href: '#', icon: Github },
  { platform: 'LinkedIn', href: '#', icon: Linkedin },
  { platform: 'Facebook', href: '#', icon: Facebook },
];