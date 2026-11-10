export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'projects'
  | 'skills'
  | 'testimonials'
  | 'pricing'
  | 'blog'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  idealFor: string[];
  deliverables: string[];
  turnaroundTime: string;
}

export type ProjectCategory = 'all' | 'business' | 'landing' | 'ecommerce' | 'portfolio';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'business' | 'landing' | 'ecommerce' | 'portfolio';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  technologies: string[];
  clientType: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  isDemoSample: boolean;
  problem?: string;
  solution?: string;
  architectureNotes?: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  content: string;
  rating: number;
  projectType: string;
  date: string;
  isVerified: boolean;
}

export interface BusinessStat {
  id: string;
  label: string;
  value: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period?: string;
  isPopular?: boolean;
  idealFor: string;
  turnaround: string;
  features: string[];
  notIncluded?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  date: string;
  author: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'process' | 'pricing' | 'technical' | 'support';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  service: string;
  budget: string;
  details: string;
}

export interface BrandConfig {
  brandName: string;
  ownerName: string;
  tagline: string;
  email: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  location: string;
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
    dribbble: string;
  };
}
