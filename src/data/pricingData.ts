import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'launchpad',
    name: 'Launchpad Landing',
    tagline: 'High-impact, conversion-focused landing page for campaigns & launches.',
    price: '$499',
    period: 'one-time investment',
    idealFor: 'Product drops, SaaS waitlists, marketing campaigns & local service businesses.',
    turnaround: '5 – 7 Business Days',
    features: [
      'Bespoke conversion-optimized landing page structure',
      'Hero section with custom typography & motion',
      'Fully responsive (Mobile, Tablet, Desktop)',
      'Sub-second page load optimization (Lighthouse 95+)',
      'Contact form & instant WhatsApp integration',
      'Essential SEO, OpenGraph tags & Social Cards',
      '14 days post-launch technical support & warranty'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Business',
    tagline: 'Complete custom corporate website engineered for market authority.',
    price: '$1,199',
    period: 'one-time investment',
    isPopular: true,
    idealFor: 'Growing companies, consultancies, law firms, clinics & B2B brands.',
    turnaround: '2 – 3 Weeks',
    features: [
      'Up to 7 custom designed & engineered pages',
      'Interactive service directory & portfolio showcase',
      'Tailored dark/light mode brand styling system',
      'Backend API contact routing with validation & ticket reference',
      'Comprehensive Schema.org JSON-LD structured data',
      'Cross-browser QA on Chrome, Safari, Firefox, Edge & mobile iOS/Android',
      'Google Analytics 4 & Search Console configuration',
      '30 days post-launch priority support'
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Flagship',
    tagline: 'Digital storefront crafted for high-value merchandise & smooth conversions.',
    price: '$2,499',
    period: 'one-time investment',
    idealFor: 'Retail brands, luxury goods, fashion, jewelry & direct-to-consumer businesses.',
    turnaround: '3 – 4 Weeks',
    features: [
      'Full catalog architecture with filtering, search & sorting',
      'Frictionless slide-over cart drawer & multi-step checkout',
      'Payment gateways (Stripe, PayPal, Apple Pay & local methods)',
      'Product variant selection (sizes, colors, materials)',
      'Automated customer transaction emails & inventory alerts',
      'Core Web Vitals performance tuning under high traffic loads',
      'Security hardening & SSL compliance audit',
      '45 days post-launch priority support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Custom Web Application',
    tagline: 'Full-stack bespoke web platform built to your exact business logic.',
    price: '$4,500+',
    period: 'tailored proposal',
    idealFor: 'Tech startups, SaaS platforms, portals & custom digital solutions.',
    turnaround: '4 – 8 Weeks',
    features: [
      'Bespoke frontend & backend architecture with Node.js/Express',
      'Custom database schemas & REST/GraphQL API development',
      'Role-based access control (RBAC) & user authentication',
      'Interactive dashboards, data visualization & dynamic exports',
      'Dedicated staging environments & CI/CD pipeline setup',
      'Complete intellectual property transfer & architecture documentation',
      '60 days post-launch warranty with dedicated SLAs'
    ]
  }
];

export const maintenancePlans = [
  {
    name: 'Essential Care',
    price: '$99',
    period: 'per month',
    description: 'Continuous uptime monitoring, security patches, monthly software updates & cloud backups.',
    hoursIncluded: '2 hours monthly changes'
  },
  {
    name: 'Growth & Support',
    price: '$249',
    period: 'per month',
    description: 'Proactive performance tuning, monthly SEO reporting, dependency audits & feature iterations.',
    hoursIncluded: '6 hours monthly changes'
  },
  {
    name: 'Enterprise Dedicated',
    price: '$599',
    period: 'per month',
    description: 'Priority same-day emergency SLA, continuous CRO testing, staging reviews & unlimited minor tweaks.',
    hoursIncluded: '16 hours monthly changes'
  }
];
