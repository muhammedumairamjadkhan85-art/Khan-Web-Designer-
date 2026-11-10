import React, { useState } from 'react';
import {
  ExternalLink,
  Info,
  CheckCircle2,
  Filter,
  Monitor,
  Eye,
  ArrowRight,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { PageId, ProjectCategory, ProjectItem, BrandConfig } from '../types';
import { portfolioData } from '../data/portfolioData';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectServiceAndContact: (serviceTitle: string) => void;
  brandConfig: BrandConfig;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onSelectProject,
  onSelectServiceAndContact,
  brandConfig,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'business', label: 'Business Websites' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'portfolio', label: 'Portfolio Websites' },
  ];

  const filteredProjects = portfolioData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 pt-6">
      {/* ===================== PORTFOLIO HERO ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            <span>Specimens & Case Studies</span>
            <span aria-hidden="true">·</span>
            <span>Decent Web Engineering</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
            CURATED DIGITAL <span className="text-[#102C23] dark:text-[#E3C477]">SPECIMENS.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            Explore our work across corporate platforms, high-converting landing pages, luxury e-commerce, and bespoke portfolios. Each specimen demonstrates the architectural and aesthetic standards we deliver.
          </p>

          {/* Honest Transparency Notice Banner */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/15 dark:border-[#C9A44C]/30 text-xs text-left flex items-start gap-3 shadow-xs">
            <Info className="w-4 h-4 text-[#C9A44C] shrink-0 mt-0.5" />
            <div className="text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
              <strong className="font-semibold text-[#102C23] dark:text-[#C9A44C]">
                Engineering Integrity Notice:
              </strong>{' '}
              In accordance with our strict brand truth policy, all demo items showcased here are authentic design specimens and architectural benchmarks created by Umair Web Designer. We do not invent fictional client testimonials or exaggerate completed client contracts.
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FILTER CONTROLS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-2 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 p-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] shadow-sm'
                    : 'text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:text-[#102C23] dark:hover:text-[#F8FAF7]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Filter Search */}
          <div className="px-3 py-1">
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-3 py-2 text-xs rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] focus:outline-none focus:ring-1 focus:ring-[#C9A44C]"
            />
          </div>
        </div>

        {/* ===================== PROJECT GRID ===================== */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 space-y-3 p-8 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/20">
            <p className="text-base font-semibold text-[#17251C] dark:text-[#F8FAF7]">
              No projects found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#C9A44C] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 hover:border-[#C9A44C] transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Visual Image Slot */}
                <div className="relative aspect-16/10 bg-[#081710] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081710] via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-[#081710]/90 backdrop-blur-xs text-[#C9A44C] border border-[#C9A44C]/30 text-xs px-3 py-1 rounded-md font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span className="bg-[#102C23]/90 text-white text-[11px] px-2.5 py-1 rounded-md">
                      Specimen
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-[#17251C] dark:text-[#F8FAF7] group-hover:text-[#102C23] dark:group-hover:text-[#E3C477] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17251C]/75 dark:text-[#F8FAF7]/75 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Metrics preview */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#F8FAF7] dark:bg-[#081710]/60 border border-[#102C23]/10 dark:border-[#C9A44C]/20 text-center">
                      {project.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="text-xs font-bold text-[#102C23] dark:text-[#C9A44C] tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[11px] rounded bg-[#102C23]/10 dark:bg-[#183B2F] text-[#102C23] dark:text-[#E3C477]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-colors cursor-pointer shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Specimen</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ===================== COMMISSION CTA ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-r from-[#102C23] to-[#183B2F] text-white border border-[#C9A44C]/30 space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Have a Project in Mind?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Let's Build a Custom Platform for Your Brand
            </h3>
            <p className="text-sm text-[#F8FAF7]/80">
              Every project is engineered bespoke to your precise business requirements, timeline, and conversion goals.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C9A44C] text-[#081710] hover:bg-[#E3C477] transition-all cursor-pointer shadow-lg"
          >
            <span>Commission a Custom Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
