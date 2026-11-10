import React, { useState } from 'react';
import {
  Code2,
  Palette,
  Terminal,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Globe,
  Sliders,
  Sparkles,
  MonitorCheck
} from 'lucide-react';
import { PageId, BrandConfig } from '../types';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
  brandConfig: BrandConfig;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate, brandConfig }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'design' | 'fullstack' | 'performance'>('all');

  const technicalProficiencies = [
    {
      category: 'frontend',
      name: 'React 19 & Next.js Architecture',
      level: 96,
      summary: 'State orchestration, Server Components, client boundary isolation, hydration optimization, and modern React 19 action hooks.',
      tags: ['React 19', 'Next.js', 'Hooks', 'Context API', 'Suspense']
    },
    {
      category: 'frontend',
      name: 'TypeScript Strict Mode',
      level: 95,
      summary: 'Type-safe contracts, generic interfaces, Discriminated Unions, and zero runtime type errors across all application modules.',
      tags: ['TypeScript', 'Type Safety', 'Interfaces', 'Generics']
    },
    {
      category: 'frontend',
      name: 'Tailwind CSS v4 & Modern Styling',
      level: 98,
      summary: 'Tailwind v4 compiler rules, custom @theme CSS variables, @custom-variant dark modes, fluid typography clamps, and fluid spacing math.',
      tags: ['Tailwind CSS v4', 'Dark Mode', 'Design Tokens', 'CSS3']
    },
    {
      category: 'design',
      name: 'Figma UI/UX & Design Systems',
      level: 92,
      summary: 'Atomic component libraries, auto-layout matrices, interactive prototyping, variable design tokens, and developer-ready handoff.',
      tags: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping', 'Tokens']
    },
    {
      category: 'design',
      name: 'Accessibility & WCAG AA Compliance',
      level: 94,
      summary: 'Color contrast ratio calculations, keyboard tab navigation, visible focus rings, ARIA roles, and screen-reader tree validation.',
      tags: ['WCAG AA', 'ARIA', 'Contrast Math', 'Semantics']
    },
    {
      category: 'fullstack',
      name: 'Node.js, Express & REST APIs',
      level: 90,
      summary: 'Server middleware, JSON payload validation, route security, error interceptors, rate limiting, and webhook ingestion.',
      tags: ['Node.js', 'Express', 'REST APIs', 'Middleware']
    },
    {
      category: 'performance',
      name: 'Core Web Vitals & Sub-Second LCP',
      level: 98,
      summary: 'Zero layout shift (CLS < 0.05), First Contentful Paint < 0.8s, image WebP/AVIF compression, and asset bundle pruning.',
      tags: ['Lighthouse 95+', 'CLS 0.00', 'LCP < 1s', 'Compression']
    },
    {
      category: 'performance',
      name: 'Technical SEO & Structured Data',
      level: 94,
      summary: 'Schema.org JSON-LD structured data, OpenGraph social card protocols, clean URL hierarchy, XML sitemaps, and indexing optimizations.',
      tags: ['Schema.org', 'JSON-LD', 'OpenGraph', 'Semantic HTML5']
    }
  ];

  const filtered = activeTab === 'all'
    ? technicalProficiencies
    : technicalProficiencies.filter(p => p.category === activeTab);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 pt-6">
      {/* ===================== HERO ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            <span>Technical Repertoire</span>
            <span aria-hidden="true">·</span>
            <span>Umair Web Designer</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
            ENGINEERING SKILLS & <span className="text-[#102C23] dark:text-[#E3C477]">TECH STACK.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            Our full stack capabilities combine aesthetic discernment with computational performance. Every tool in our stack is chosen for stability, speed, and long-term maintainability.
          </p>
        </div>
      </section>

      {/* ===================== SKILLS FILTER & CARDS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1 p-1 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 max-w-2xl mx-auto justify-center">
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'frontend', label: 'Frontend Engine' },
            { id: 'design', label: 'UI/UX & Design' },
            { id: 'fullstack', label: 'Full-Stack & APIs' },
            { id: 'performance', label: 'Performance & SEO' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] shadow-sm'
                  : 'text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:text-[#102C23] dark:hover:text-[#F8FAF7]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-4 hover:border-[#C9A44C] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                    {item.name}
                  </h3>
                  <span className="font-mono text-sm font-bold text-[#C9A44C] tabular-nums">
                    {item.level}%
                  </span>
                </div>

                {/* Progress bar visual */}
                <div className="w-full h-1.5 rounded-full bg-[#102C23]/10 dark:bg-[#081710] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#102C23] to-[#C9A44C] dark:from-[#C9A44C] dark:to-[#E3C477] rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  />
                </div>

                <p className="text-xs sm:text-sm text-[#17251C]/75 dark:text-[#F8FAF7]/75 leading-relaxed pt-1">
                  {item.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 text-[11px] rounded bg-[#F8FAF7] dark:bg-[#081710] text-[#102C23] dark:text-[#E3C477] border border-[#102C23]/10 dark:border-[#C9A44C]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== OUR ENGINEERING STANDARDS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#102C23] text-white border border-[#C9A44C]/30 space-y-8 shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Non-Negotiable Benchmarks
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              The Decent Web Engineering Quality Promise
            </h3>
            <p className="text-xs sm:text-sm text-[#F8FAF7]/80">
              When Umair designs and develops your website, every codebase must pass these strict criteria before production handover:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#C9A44C]/20">
            <div className="space-y-2">
              <div className="text-2xl font-bold font-display text-[#C9A44C]">
                0.00 CLS
              </div>
              <div className="text-xs font-semibold text-white">
                Zero Layout Shift
              </div>
              <p className="text-xs text-[#F8FAF7]/70 leading-relaxed">
                Elements never jump or displace as images and fonts stream into the viewport.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-2xl font-bold font-display text-[#C9A44C]">
                &lt; 850ms
              </div>
              <div className="text-xs font-semibold text-white">
                Target LCP
              </div>
              <p className="text-xs text-[#F8FAF7]/70 leading-relaxed">
                Largest Contentful Paint loads in under a single second on standard 4G networks.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-2xl font-bold font-display text-[#C9A44C]">
                100% Type-Safe
              </div>
              <div className="text-xs font-semibold text-white">
                Strict TypeScript
              </div>
              <p className="text-xs text-[#F8FAF7]/70 leading-relaxed">
                Zero runtime variable undefined exceptions or brittle untyped interfaces.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-2xl font-bold font-display text-[#C9A44C]">
                WCAG AA
              </div>
              <div className="text-xs font-semibold text-white">
                Accessible Contrast
              </div>
              <p className="text-xs text-[#F8FAF7]/70 leading-relaxed">
                Minimum 4.5:1 text contrast for universal readability across both light and dark modes.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#C9A44C]/20">
            <div className="text-xs text-[#F8FAF7]/75">
              Ready to bring this level of engineering rigor to your brand?
            </div>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C9A44C] text-[#081710] hover:bg-[#E3C477] transition-all cursor-pointer shadow-md"
            >
              <span>Initiate Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
