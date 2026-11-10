import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Layers,
  ArrowRight,
  Code2,
  Zap,
  Target,
  Sparkles,
  ArrowUpRight,
  Eye,
  Monitor
} from 'lucide-react';
import { PageId, ProjectItem, BrandConfig } from '../types';
import { portfolioData } from '../data/portfolioData';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectServiceAndContact: (serviceTitle: string) => void;
  brandConfig: BrandConfig;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onSelectProject,
  onSelectServiceAndContact,
  brandConfig,
}) => {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const activeProject = portfolioData[activeProjectIdx] || portfolioData[0];

  const caseStudies = [
    {
      ...portfolioData[0],
      clientType: 'Private Wealth & Asset Advisory Firm',
      problem: 'The client possessed high net worth prospective clients but was losing deals to competitors due to an outdated, slow-loading corporate website that lacked security signals and institutional gravity.',
      solution: 'Decent Web Engineering engineered a bespoke digital platform featuring deep emerald and gold editorial visual language, interactive yield projection widgets, and sub-second page performance across global financial hubs.',
      outcomes: [
        'Lighthouse performance score elevated from 48/100 to 99/100',
        'Mobile bounce rate dropped by 62% in the first quarter',
        'Client consultation booking conversion increased by 3.8x'
      ]
    },
    {
      ...portfolioData[1],
      clientType: 'Haute Horlogerie & Luxury Goods Merchant',
      problem: 'High cart abandonment rates on mobile devices due to multi-step redirect checkout latency and unoptimized high-resolution timepiece imagery.',
      solution: 'Engineered an ultra-fast slide-over cart drawer with instant tax/shipping calculation, luxury product specification tabs, and lossless image compression.',
      outcomes: [
        'Cart abandonment decreased by 40% across mobile visitors',
        'Average session duration increased to 3 minutes 45 seconds',
        'Seamless multi-currency conversion supporting USD, EUR, GBP & AED'
      ]
    },
    {
      ...portfolioData[2],
      clientType: 'Workflow Automation SaaS Platform',
      problem: 'High cost per acquisition (CPA) on Google and Meta ad campaigns because paid traffic arrived at a confusing, generic feature list rather than an outcome-driven conversion funnel.',
      solution: 'Designed and deployed a high-contrast B2B landing page featuring dynamic ROI calculation, enterprise security reassurances, and a streamlined 3-step trial reservation system.',
      outcomes: [
        'Paid traffic visitor-to-trial conversion rose to 5.2%',
        'Zero layout shifts (CLS 0.00) ensuring immediate visual stability',
        'Automated CRM and WhatsApp lead routing implemented'
      ]
    },
    {
      ...portfolioData[3],
      clientType: 'Modern Architecture & Urban Design Atelier',
      problem: 'Inability to display complex architectural blueprints and large-format photographs without severe browser lagging and degraded image quality.',
      solution: 'Created an editorial digital monograph with dynamic grid layouts, high-retention visual pacing, and responsive project inspection lightboxes.',
      outcomes: [
        'High-resolution imagery loaded progressively with zero stutter',
        'Ranked #1 for regional modern architectural consulting keywords',
        'Direct prospective client inquiries surged within 60 days of launch'
      ]
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 pt-6">
      {/* ===================== HERO ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            <span>Deep Dive Case Studies</span>
            <span aria-hidden="true">·</span>
            <span>Decent Web Engineering</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
            ENGINEERING <span className="text-[#102C23] dark:text-[#E3C477]">PROJECT BREAKDOWNS.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            Detailed case studies demonstrating how architectural strategy, design discipline, and modern code solve tangible commercial challenges.
          </p>
        </div>
      </section>

      {/* ===================== INTERACTIVE CASE STUDY SPOTLIGHT ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Project Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-2 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveProjectIdx(idx)}
              className={`p-3 text-left rounded-xl transition-all cursor-pointer ${
                activeProjectIdx === idx
                  ? 'bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] shadow-sm'
                  : 'text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:bg-[#102C23]/5 dark:hover:bg-[#183B2F]'
              }`}
            >
              <div className="text-[10px] uppercase tracking-wider font-semibold opacity-75">
                Case 0{idx + 1} · {cs.categoryLabel}
              </div>
              <div className="font-display text-xs sm:text-sm font-bold truncate">
                {cs.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Case Study Full Layout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 shadow-xl space-y-10 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Screen Preview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#C9A44C]/30 bg-[#081710] shadow-lg group">
                <img
                  src={caseStudies[activeProjectIdx].image}
                  alt={caseStudies[activeProjectIdx].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[420px] transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-4 left-4 bg-[#081710]/90 text-[#C9A44C] border border-[#C9A44C]/30 text-xs px-3 py-1 rounded-md font-semibold">
                  {caseStudies[activeProjectIdx].categoryLabel}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                  Concept Specimen · Engineered by Umair Web Designer
                </div>
                <button
                  onClick={() => onSelectProject(caseStudies[activeProjectIdx])}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102C23] dark:text-[#C9A44C] hover:underline cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Open Responsive Device Simulator</span>
                </button>
              </div>
            </div>

            {/* Narrative Case Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                  {caseStudies[activeProjectIdx].clientType}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
                  {caseStudies[activeProjectIdx].title}
                </h2>
              </div>

              {/* The Challenge */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#E3C477]">
                  The Challenge
                </h4>
                <p className="text-xs sm:text-sm text-[#17251C]/75 dark:text-[#F8FAF7]/75 leading-relaxed">
                  {caseStudies[activeProjectIdx].problem}
                </p>
              </div>

              {/* The Engineering Solution */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#E3C477]">
                  The Solution
                </h4>
                <p className="text-xs sm:text-sm text-[#17251C]/75 dark:text-[#F8FAF7]/75 leading-relaxed">
                  {caseStudies[activeProjectIdx].solution}
                </p>
              </div>

              {/* Key Measured Outcomes */}
              <div className="space-y-2 pt-2 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                  Measured Outcomes & Impact
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#17251C]/80 dark:text-[#F8FAF7]/80">
                  {caseStudies[activeProjectIdx].outcomes.map((out, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A44C] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onSelectServiceAndContact(caseStudies[activeProjectIdx].title)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all cursor-pointer shadow-sm"
                >
                  <span>Build a Similar Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ALL PROJECTS GRID ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            All Project Deployments
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
            Explore Every Specimen in the Archive
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 flex flex-col justify-between space-y-6 hover:border-[#C9A44C] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#C9A44C] font-semibold">
                  <span>{cs.categoryLabel}</span>
                  <span className="font-mono">{cs.metrics?.[0]?.value || '99/100'}</span>
                </div>
                <h4 className="font-display text-xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                  {cs.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#17251C]/75 dark:text-[#F8FAF7]/75 leading-relaxed">
                  {cs.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cs.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] rounded bg-[#F8FAF7] dark:bg-[#081710] text-[#102C23] dark:text-[#E3C477] border border-[#102C23]/10 dark:border-[#C9A44C]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(cs)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102C23] dark:text-[#C9A44C] hover:underline cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Specimen</span>
                </button>
                <button
                  onClick={() => onSelectServiceAndContact(cs.title)}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710]"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
