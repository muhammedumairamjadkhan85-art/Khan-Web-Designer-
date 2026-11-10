import { ProjectItem } from '../types';

export const portfolioData: ProjectItem[] = [
  {
    id: 'aeterna-fintech',
    title: 'Aeterna Wealth & Asset Management',
    category: 'business',
    categoryLabel: 'Business Website',
    shortDesc: 'A high-performance corporate platform engineered for an international wealth management and private equity advisory firm.',
    fullDesc: 'Designed to establish unwavering institutional trust, this platform combines deep emerald surfaces with warm gold accents, interactive asset yield calculators, regulatory disclosure architecture, and client onboarding workflows. Built with zero layout shifts and sub-second load times.',
    image: '/src/assets/images/mockup_business_corporate_1794278507471.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    clientType: 'Private Wealth & Asset Advisory (Concept Specimen)',
    liveUrl: '#',
    metrics: [
      { label: 'Lighthouse Performance', value: '99/100' },
      { label: 'Target Load Time', value: '< 850ms' },
      { label: 'Mobile Conversion', value: '3.8%' }
    ],
    keyFeatures: [
      'Interactive asset growth and portfolio projection charts',
      'Encrypted multi-step client consultation booking module',
      'Bespoke editorial typography and luxury emerald theme',
      'Full WCAG AA accessibility compliance'
    ],
    isDemoSample: true
  },
  {
    id: 'aurelia-lune',
    title: 'Aurélia Lune Haute Horlogerie',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    shortDesc: 'An exquisite digital flagship store for luxury Swiss timepieces and artisanal fine jewelry, with smooth cart drawers and high-res media.',
    fullDesc: 'This luxury e-commerce specimen highlights fine craftsmanship through editorial grid layouts, micro-interactions, faceted collection filtering, and seamless currency switching. Optimized for high average-order-value conversions with friction-free checkout architecture.',
    image: '/src/assets/images/mockup_ecommerce_store_1794278509386.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Cart State Engine'],
    clientType: 'Luxury Horology & Jewelry (Concept Specimen)',
    liveUrl: '#',
    metrics: [
      { label: 'Checkout Step Reduction', value: '-40%' },
      { label: 'Visual Fidelity', value: '4K Ready' },
      { label: 'Mobile UX Score', value: '98/100' }
    ],
    keyFeatures: [
      'Interactive slide-over cart drawer with real-time total calculator',
      'Curated product zoom and luxury specification tabs',
      'Multi-currency and global shipping calculator previews',
      'Tailored VIP concierge consultation inquiry flow'
    ],
    isDemoSample: true
  },
  {
    id: 'zenflow-automation',
    title: 'Zenflow Intelligent Automation',
    category: 'landing',
    categoryLabel: 'Landing Page',
    shortDesc: 'A laser-targeted B2B SaaS landing page designed to turn paid campaign visitors into active software trials and demo bookings.',
    fullDesc: 'Built around conversion psychology and behavioral UX principles, this landing page delivers clear value articulation, interactive feature comparisons, verified security assurances, and streamlined calendar booking integration.',
    image: '/src/assets/images/mockup_saas_landing_1794278509611.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    clientType: 'Workflow Automation SaaS (Concept Specimen)',
    liveUrl: '#',
    metrics: [
      { label: 'Specimen Benchmark CR', value: '5.2%' },
      { label: 'First Contentful Paint', value: '0.4s' },
      { label: 'Lead Velocity', value: '+65%' }
    ],
    keyFeatures: [
      'High-contrast value proposition hero with dual CTA paths',
      'Interactive ROI calculator demonstrating enterprise cost savings',
      'Frictionless 3-field demo reservation module with instant confirmation',
      'Full semantic SEO and OpenGraph social metadata integration'
    ],
    isDemoSample: true
  },
  {
    id: 'monarch-studio',
    title: 'Monarch Architectural Atelier',
    category: 'portfolio',
    categoryLabel: 'Portfolio Website',
    shortDesc: 'An architectural portfolio showcasing award-winning contemporary residential and commercial projects with minimal framing.',
    fullDesc: 'Conceived for a modern architectural firm, this portfolio balances stark negative space with dramatic full-bleed project photography, technical drawings, material palettes, and direct client commission inquiry channels.',
    image: '/src/assets/images/mockup_creative_portfolio_1794278510187.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Grid'],
    clientType: 'Architectural & Design Practice (Concept Specimen)',
    liveUrl: '#',
    metrics: [
      { label: 'Average Session Duration', value: '4m 12s' },
      { label: 'Visual Engagement', value: 'High-Retention' },
      { label: 'Direct Inquiries', value: 'Qualified' }
    ],
    keyFeatures: [
      'Curated case study layouts featuring blueprint and photo overlays',
      'Filterable project directory by typology (Residential, Commercial, Civic)',
      'Client monograph presentation mode for executive pitches',
      'Direct WhatsApp and email liaison triggers'
    ],
    isDemoSample: true
  }
];
