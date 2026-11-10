import { FaqItem } from '../types';

export const comprehensiveFaqs: FaqItem[] = [
  // Category: process
  {
    id: 'process-timeline',
    category: 'process',
    question: 'What is the complete development process from initial contact to launch?',
    answer: 'Our workflow follows six structured phases: 1) Discovery & Strategy alignment (understanding your brand, goals, and audience); 2) Information Architecture & Wireframing; 3) High-fidelity UI/UX Design System in Figma; 4) Clean Frontend & Backend Engineering; 5) Cross-browser QA & Core Web Vitals Optimization; 6) Production Deployment, DNS configuration, and handoff.'
  },
  {
    id: 'process-communication',
    category: 'process',
    question: 'How often will I receive updates during the project?',
    answer: 'You communicate directly with Umair. We provide clear milestone updates at every phase, including staging preview links where you can interact with the live website on your own device before launch.'
  },
  {
    id: 'process-turnaround',
    category: 'process',
    question: 'How fast can an urgent landing page or website be delivered?',
    answer: 'Standard landing pages take 5 to 7 business days. For urgent marketing campaigns or product launches, we offer an expedited sprint option with delivery in as fast as 72 to 96 hours upon agreement on assets and requirements.'
  },

  // Category: pricing
  {
    id: 'pricing-payment-schedule',
    category: 'pricing',
    question: 'What is the payment structure and milestone schedule?',
    answer: 'We operate on a standard transparent milestone model: 50% initial commitment deposit to reserve your engineering schedule, and 50% upon final project approval right before production launch. For larger custom enterprise builds, we can structure 33% / 33% / 34% phased milestones.'
  },
  {
    id: 'pricing-hidden-costs',
    category: 'pricing',
    question: 'Are there any hidden costs, recurring licenses, or surprise fees?',
    answer: 'Zero hidden fees. Our proposals are fixed-price. The only external costs are standard third-party services you directly own (such as domain registration ~$12/yr and your preferred cloud hosting provider), which we help you set up directly in your name.'
  },

  // Category: technical
  {
    id: 'tech-stack',
    category: 'technical',
    question: 'What technologies and frameworks do you build with?',
    answer: 'We specialize in modern, high-performance web stacks: React, TypeScript, Tailwind CSS, Vite, Next.js, Node.js, Express, and RESTful APIs. We avoid fragile page builders and bloated WordPress templates that suffer from frequent security compromises.'
  },
  {
    id: 'tech-ownership',
    category: 'technical',
    question: 'Do I own the full copyright and source code of the finished website?',
    answer: 'Yes, 100%. Upon project completion and final settlement, all intellectual property, source code, designs, tokens, and digital assets belong entirely to you with zero vendor lock-in.'
  },
  {
    id: 'tech-mobile-responsive',
    category: 'technical',
    question: 'How do you test for mobile responsiveness and performance?',
    answer: 'Every project is engineered with a mobile-first philosophy and tested across physical mobile devices (iOS Safari, Android Chrome), tablets, laptops, and 4K desktop viewports. We aim for sub-second load times and 95+ scores on Google Lighthouse.'
  },

  // Category: support
  {
    id: 'support-post-launch',
    category: 'support',
    question: 'What happens after the website goes live? Is there support?',
    answer: 'Every project includes a complimentary 14 to 30 day post-launch warranty period for any technical adjustments, bug fixes, or minor styling tweaks. We also offer monthly maintenance retainers for continuous security audits, content updates, and ongoing SEO monitoring.'
  },
  {
    id: 'support-maintenance',
    category: 'support',
    question: 'Can you help update and maintain a website built by someone else?',
    answer: 'Yes. Our Website Redesign and Website Maintenance services include diagnostic audits of existing codebases, performance rescue, security patching, and full UI/UX modernizations.'
  }
];
