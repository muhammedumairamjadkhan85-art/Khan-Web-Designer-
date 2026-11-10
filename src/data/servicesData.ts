import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'business-website-development',
    number: '01',
    title: 'Business Website Development',
    shortDesc: 'Custom corporate and enterprise web platforms engineered for credibility, seamless user journeys, and qualified client acquisition.',
    fullDesc: 'We design and develop bespoke, high-performance web platforms tailored to corporate brands, consultancies, law firms, clinics, and modern enterprises. Every page is structured to present your brand authority, showcase core capabilities, and turn visitors into qualified inquiries.',
    iconName: 'Building2',
    benefits: [
      'Tailored architectural design reflecting unique corporate identity',
      'Ultra-fast load times (<1s) ensuring low bounce rates',
      'Fully responsive across desktop, tablet, and mobile displays',
      'Clean modular codebase built for long-term scalability and security'
    ],
    idealFor: [
      'Established businesses upgrading from outdated systems',
      'Consultancies, professional practices, and corporate firms',
      'B2B service providers seeking high-ticket inbound leads'
    ],
    deliverables: [
      'Full multi-page corporate web application',
      'Interactive service showcases & lead capture funnels',
      'Custom CMS or maintainable content structures',
      'Complete SEO & performance audit before handover'
    ],
    turnaroundTime: '2 – 4 Weeks'
  },
  {
    id: 'landing-page-development',
    number: '02',
    title: 'Landing Page Development',
    shortDesc: 'Laser-focused, conversion-optimized landing pages engineered to maximize ad ROI, validate products, and generate qualified leads.',
    fullDesc: 'High-converting landing pages built with persuasive visual storytelling, frictionless form flows, and psychology-driven calls-to-action. Designed specifically for marketing campaigns, paid ad traffic (Google & Meta ads), and product launches.',
    iconName: 'Sparkles',
    benefits: [
      'Conversion Rate Optimization (CRO) baked into the UX',
      'Zero layout shifts (CLS < 0.05) and lightning speed',
      'Frictionless lead capture & CRM/WhatsApp/Email integration',
      'A/B test ready structure for performance marketing'
    ],
    idealFor: [
      'Marketing agencies running paid ad campaigns',
      'Tech startups launching new SaaS or physical products',
      'Course creators, coaches, and event organizers'
    ],
    deliverables: [
      'High-impact hero visual and typographic statement',
      'Persuasive value proposition and benefit breakdowns',
      'Validated multi-step or single-step lead capture form',
      'Analytics and pixel tracking integration setup'
    ],
    turnaroundTime: '5 – 10 Days'
  },
  {
    id: 'ecommerce-website-development',
    number: '03',
    title: 'E-commerce Website Development',
    shortDesc: 'Modern, high-converting digital storefronts crafted with streamlined checkouts, catalog filtering, and secure payment processing.',
    fullDesc: 'We engineer visually stunning e-commerce experiences that turn casual browsers into loyal repeat customers. From custom product pages to high-speed cart drawer mechanisms and secure global payment gateways.',
    iconName: 'ShoppingBag',
    benefits: [
      'Frictionless cart, wishlist, and single-click checkout paths',
      'Rich product filtering, sorting, and image galleries',
      'Secure payment integrations (Stripe, PayPal, local gateways)',
      'Optimized inventory display and mobile shopping experience'
    ],
    idealFor: [
      'Direct-to-consumer (DTC) retail and fashion brands',
      'Artisanal makers, luxury watchmakers, and boutique shops',
      'Wholesale and B2B distributors migrating online'
    ],
    deliverables: [
      'Custom product catalog, collections, and search system',
      'Mobile-first responsive cart & checkout interface',
      'Payment gateway, shipping rules, and tax setup',
      'Customer account portal & automated order notifications'
    ],
    turnaroundTime: '3 – 6 Weeks'
  },
  {
    id: 'portfolio-website-development',
    number: '04',
    title: 'Portfolio Website Development',
    shortDesc: 'Distinguished, immersive portfolio websites that elevate creative professionals, architects, designers, and industry leaders.',
    fullDesc: 'Your personal brand deserves an extraordinary online home. We create distinctive portfolio platforms with fluid page transitions, interactive project mockups, media lightboxes, and clear social proof that win high-value contracts.',
    iconName: 'LayoutGrid',
    benefits: [
      'Editorial layout that puts your work and credentials center stage',
      'High-resolution media galleries and interactive case studies',
      'Distinctive typography and luxury dark/light aesthetics',
      'Direct WhatsApp and contact links for immediate inquiries'
    ],
    idealFor: [
      'Architects, interior designers, and visual artists',
      'Software developers, engineers, and tech consultants',
      'Creative directors, photographers, and agency founders'
    ],
    deliverables: [
      'Curated case study templates with rich media support',
      'Filterable project directory by category and industry',
      'Personal bio, philosophy, and credential timeline',
      'Interactive client inquiry and booking integration'
    ],
    turnaroundTime: '1 – 3 Weeks'
  },
  {
    id: 'ui-ux-design',
    number: '05',
    title: 'UI/UX Design',
    shortDesc: 'Human-centered user interface and experience design that merges aesthetic sophistication with intuitive usability.',
    fullDesc: 'Before writing a line of code, great digital products start with intentional design. We craft design systems, interactive prototypes, and wireframes in Figma with atomic design principles, WCAG accessibility, and pixel precision.',
    iconName: 'Palette',
    benefits: [
      'Clear information hierarchy and natural user flows',
      'Scalable design tokens (colors, type scale, spacing, radiuses)',
      'Accessibility-first design tested for contrast and readability',
      'Seamless design-to-code handoff for developers'
    ],
    idealFor: [
      'Founders shaping new web apps or mobile platforms',
      'Companies needing an aesthetic overhaul before code refactor',
      'Teams requiring a comprehensive brand design system'
    ],
    deliverables: [
      'Complete high-fidelity Figma workspace & UI components',
      'Interactive clickable user flow prototypes',
      'Typography, color palette, and icon style guides',
      'Asset export package with SVG and PNG guidelines'
    ],
    turnaroundTime: '1 – 3 Weeks'
  },
  {
    id: 'website-redesign',
    number: '06',
    title: 'Website Redesign',
    shortDesc: 'Transform outdated, clunky websites into sleek, high-performing, modern digital assets that reflect current brand excellence.',
    fullDesc: 'If your existing website looks tired, loads slowly, or fails to convert visitors, our redesign service revitalizes your digital presence without losing existing SEO rankings or brand equity.',
    iconName: 'RefreshCw',
    benefits: [
      'Modernized visual identity matching contemporary global standards',
      'Dramatically improved mobile responsiveness and speed metrics',
      'Preservation and enhancement of existing search engine rankings',
      'Revitalized user journey designed to increase conversion rates'
    ],
    idealFor: [
      'Companies with websites built 3+ years ago',
      'Brands experiencing low conversion or high mobile bounce rates',
      'Rebranding businesses seeking a modern, luxury look'
    ],
    deliverables: [
      'Full UX/UI and performance diagnostic of existing site',
      'Modern re-architected layout and clean visual identity',
      'Seamless 301 redirect mapping to preserve SEO equity',
      'Full cross-browser and cross-device testing before go-live'
    ],
    turnaroundTime: '2 – 4 Weeks'
  },
  {
    id: 'website-maintenance',
    number: '07',
    title: 'Website Maintenance',
    shortDesc: 'Proactive upkeep, security patches, regular backups, and technical support ensuring 99.9% uptime and peak performance.',
    fullDesc: 'A website is a living commercial asset that requires regular care. We provide ongoing engineering maintenance, uptime monitoring, security patching, library upgrades, and content updates so you can focus on running your business.',
    iconName: 'ShieldCheck',
    benefits: [
      'Routine security audits and vulnerability patching',
      'Continuous performance tuning and database hygiene',
      'Automated off-site backups with rapid disaster recovery',
      'Priority on-demand support for content updates and fixes'
    ],
    idealFor: [
      'Busy business owners who cannot manage web technicalities',
      'E-commerce stores where downtime equals lost revenue',
      'Agencies requiring outsourced maintenance for client platforms'
    ],
    deliverables: [
      '24/7 automated uptime and latency monitoring',
      'Monthly software updates and dependency security checks',
      'Scheduled cloud backups with verified restore drills',
      'Dedicated monthly hours for design and feature tweaks'
    ],
    turnaroundTime: 'Ongoing Monthly Support'
  },
  {
    id: 'seo-optimization',
    number: '08',
    title: 'SEO Optimization',
    shortDesc: 'Data-driven on-page and technical search engine optimization engineered to boost organic rankings and search visibility.',
    fullDesc: 'Building a beautiful website is only half the journey; target customers need to find it. We optimize your website code, metadata, Schema.org structured data, and semantic hierarchy so search engines rank your business at the top.',
    iconName: 'Search',
    benefits: [
      'Higher organic rankings for high-intent commercial keywords',
      'Rich Google search results via Schema.org JSON-LD snippets',
      'Optimized Core Web Vitals (LCP, INP, CLS) for Google algorithms',
      'Clean URL hierarchy, XML sitemaps, and robots configuration'
    ],
    idealFor: [
      'Local and international businesses seeking organic inbound leads',
      'Websites suffering from poor Google rankings or zero traffic',
      'New websites preparing for a high-impact launch'
    ],
    deliverables: [
      'Technical SEO audit and on-page optimization',
      'Targeted keyword and competitor landscape analysis',
      'Complete Schema.org structured data implementation',
      'Google Search Console and Google Analytics 4 integration'
    ],
    turnaroundTime: '1 – 3 Weeks'
  }
];
