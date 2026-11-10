import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Sparkles,
  ShoppingBag,
  LayoutGrid,
  Palette,
  RefreshCw,
  ShieldCheck,
  Search,
  CheckCircle2,
  Clock,
  Zap,
  Globe,
  Award,
  Star,
  Layers,
  MonitorCheck
} from 'lucide-react';
import { PageId, ProjectItem, ServiceItem, BrandConfig } from '../types';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { verifiedStats, getStoredTestimonials } from '../data/statsData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectServiceAndContact: (serviceTitle: string) => void;
  brandConfig: BrandConfig;
}

// Icon helper for service cards
const renderServiceIcon = (name: string) => {
  const iconProps = { className: "w-6 h-6 text-[#C9A44C]" };
  switch (name) {
    case 'Building2': return <Building2 {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'ShoppingBag': return <ShoppingBag {...iconProps} />;
    case 'LayoutGrid': return <LayoutGrid {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'RefreshCw': return <RefreshCw {...iconProps} />;
    case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
    case 'Search': return <Search {...iconProps} />;
    default: return <Layers {...iconProps} />;
  }
};

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onSelectServiceAndContact,
  brandConfig,
}) => {
  const [activeHeroTab, setActiveHeroTab] = useState<number>(0);
  const testimonials = getStoredTestimonials();

  const heroSpecimens = [
    {
      title: 'Enterprise Wealth Platform',
      category: 'Business Website',
      image: '/src/assets/images/mockup_business_corporate_1794278507471.jpg',
      stat: '99/100 Performance Score',
    },
    {
      title: 'Haute Horlogerie Storefront',
      category: 'E-commerce',
      image: '/src/assets/images/mockup_ecommerce_store_1794278509386.jpg',
      stat: 'Mobile Checkout Optimized',
    },
    {
      title: 'Automation SaaS Platform',
      category: 'High-Converting Landing',
      image: '/src/assets/images/mockup_saas_landing_1794278509611.jpg',
      stat: 'Zero Layout Shift (CLS 0.0)',
    },
    {
      title: 'Architectural Atelier',
      category: 'Editorial Portfolio',
      image: '/src/assets/images/mockup_creative_portfolio_1794278510187.jpg',
      stat: 'High-Retention Visual Flow',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden">
        {/* Ambient emerald & gold background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C9A44C]/10 dark:bg-[#C9A44C]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#102C23]/30 dark:bg-[#183B2F]/40 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              <span>Decent Web Engineering.com</span>
              <span aria-hidden="true">·</span>
              <span>Led by Umair Web Designer</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17251C] dark:text-[#F8FAF7] leading-[1.1] text-balance">
              WE BUILD YOUR <span className="text-[#102C23] dark:text-[#E3C477]">DIGITAL FUTURE.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed max-w-2xl mx-auto">
              Transform your ideas into powerful digital experiences. We create modern, responsive, and professional websites that help businesses grow and stand out online.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider border border-[#102C23]/25 dark:border-[#C9A44C]/40 text-[#102C23] dark:text-[#F8FAF7] hover:bg-[#102C23]/5 dark:hover:bg-[#183B2F]/40 transition-all duration-200 cursor-pointer"
              >
                <span>Let's Build Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Hero Device Mockup Showcase */}
          <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
            <div className="rounded-2xl p-2 sm:p-3 bg-[#102C23]/10 dark:bg-[#183B2F]/30 border border-[#102C23]/15 dark:border-[#C9A44C]/30 shadow-2xl backdrop-blur-xs">
              <div className="rounded-xl overflow-hidden bg-[#081710] border border-[#C9A44C]/20">
                {/* Browser bar top */}
                <div className="px-4 py-3 bg-[#102C23] border-b border-[#C9A44C]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs text-[#F8FAF7]/50 font-mono hidden sm:inline">
                      https://decentwebengineering.com/showcase
                    </span>
                  </div>

                  {/* Specimen Switcher Tabs */}
                  <div className="flex items-center gap-1 bg-[#081710]/70 p-1 rounded-lg">
                    {heroSpecimens.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveHeroTab(idx)}
                        className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                          activeHeroTab === idx
                            ? 'bg-[#C9A44C] text-[#081710] font-semibold'
                            : 'text-[#F8FAF7]/70 hover:text-white'
                        }`}
                      >
                        <span className="hidden md:inline">{item.category}</span>
                        <span className="md:hidden">0{idx + 1}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Showcase Image */}
                <div className="relative aspect-16/10 sm:aspect-16/9 bg-[#081710] overflow-hidden group">
                  <img
                    src={heroSpecimens[activeHeroTab].image}
                    alt={heroSpecimens[activeHeroTab].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081710] via-transparent to-transparent opacity-80" />

                  {/* Overlay caption */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <div className="text-xs text-[#C9A44C] font-semibold uppercase tracking-wider">
                        {heroSpecimens[activeHeroTab].category}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold font-display text-white">
                        {heroSpecimens[activeHeroTab].title}
                      </h3>
                    </div>
                    <div className="text-xs sm:text-sm text-[#F8FAF7]/80 bg-[#102C23]/90 border border-[#C9A44C]/30 px-3 py-1.5 rounded-lg shrink-0">
                      {heroSpecimens[activeHeroTab].stat}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROFESSIONAL INTRODUCTION ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 shadow-xl transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Portrait & Credentials */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#C9A44C]/30 aspect-square max-w-md mx-auto shadow-lg bg-[#081710]">
                <img
                  src="/src/assets/images/umair_designer_portrait_1794278507083.jpg"
                  alt="Umair Web Designer - Founder of Decent Web Engineering"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081710]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-base font-bold font-display">{brandConfig.ownerName}</div>
                  <div className="text-xs text-[#E3C477]">Founder & Lead Web Engineer</div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                  Founder & Brand Strategy
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#17251C] dark:text-[#F8FAF7]">
                  YOUR VISION. OUR DIGITAL EXPERTISE.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
                Welcome to <strong>Decent Web Engineering</strong>. Founded and directed by <strong>Umair Web Designer</strong>, our mission is to engineer digital platforms that combine world-class visual aesthetics with uncompromising technical rigor.
              </p>

              <p className="text-sm sm:text-base text-[#17251C]/70 dark:text-[#F8FAF7]/70 leading-relaxed">
                We believe your website is your single most important commercial asset. Rather than relying on rigid templates or bloated page builders, every solution is hand-crafted with clean modern code, intentional UI/UX design, and search engine optimization built directly into the foundations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAF7] dark:bg-[#081710]/60 border border-[#102C23]/10 dark:border-[#C9A44C]/20">
                  <div className="font-bold text-[#102C23] dark:text-[#C9A44C] mb-1 text-sm">
                    Design Excellence
                  </div>
                  <div className="text-xs text-[#17251C]/70 dark:text-[#F8FAF7]/70">
                    Bespoke UI/UX crafted with typography hierarchy, spatial harmony, and brand elegance.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAF7] dark:bg-[#081710]/60 border border-[#102C23]/10 dark:border-[#C9A44C]/20">
                  <div className="font-bold text-[#102C23] dark:text-[#C9A44C] mb-1 text-sm">
                    Engineering Integrity
                  </div>
                  <div className="text-xs text-[#17251C]/70 dark:text-[#F8FAF7]/70">
                    Lightning-fast load speeds, accessible semantic markup, and reliable 99.9% uptime.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#102C23] dark:text-[#C9A44C] hover:underline cursor-pointer group"
                >
                  <span>Learn more about Umair's engineering philosophy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES PREVIEW ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Comprehensive Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
              Tailored Digital Services
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#102C23] dark:text-[#C9A44C] hover:underline cursor-pointer group"
          >
            <span>View All 8 Services in Detail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="group relative p-6 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 hover:border-[#C9A44C] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/20 group-hover:border-[#C9A44C] transition-colors">
                    {renderServiceIcon(svc.iconName)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#C9A44C]">
                    {svc.number}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#17251C] dark:text-[#F8FAF7] group-hover:text-[#102C23] dark:group-hover:text-[#E3C477] transition-colors">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#17251C]/70 dark:text-[#F8FAF7]/70 leading-relaxed">
                  {svc.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15 flex items-center justify-between">
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:text-[#102C23] dark:hover:text-[#C9A44C] cursor-pointer"
                >
                  Learn More
                </button>
                <button
                  onClick={() => onSelectServiceAndContact(svc.title)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#102C23] dark:text-[#C9A44C] hover:underline cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Featured Specimens
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
              Selected Website Works
            </h2>
          </div>
          <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
            * Clearly marked concept specimens representing live architecture & design capabilities.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 hover:border-[#C9A44C] transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="relative aspect-16/10 bg-[#081710] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#081710]/90 backdrop-blur-xs text-[#C9A44C] border border-[#C9A44C]/30 text-xs px-3 py-1 rounded-md font-semibold">
                  {project.categoryLabel}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#17251C]/75 dark:text-[#F8FAF7]/75 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-[#17251C]/60 dark:text-[#F8FAF7]/60"
                      >
                        {tech} {idx < 2 ? '·' : ''}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-colors cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => {
              onNavigate('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 text-sm font-semibold text-[#102C23] dark:text-[#F8FAF7] hover:bg-[#102C23]/5 dark:hover:bg-[#183B2F] transition-colors cursor-pointer"
          >
            <span>Explore Full Filterable Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            Our Engineering Standard
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
            Why Businesses Choose Decent Web Engineering
          </h2>
          <p className="text-sm sm:text-base text-[#17251C]/75 dark:text-[#F8FAF7]/75">
            Every website we engineer adheres to six non-negotiable principles designed to give your company an unfair digital advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="w-5 h-5 text-[#C9A44C]" />,
              title: 'Modern and Responsive Designs',
              description: 'Meticulously crafted fluid layouts that render flawlessly across smartphones, tablets, laptops, and ultra-high-resolution desktop monitors.'
            },
            {
              icon: <Sparkles className="w-5 h-5 text-[#C9A44C]" />,
              title: 'User-Friendly Experiences',
              description: 'Human-centered UI/UX designed with clear hierarchy, natural navigation paths, and frictionless interactions that turn visitors into clients.'
            },
            {
              icon: <Building2 className="w-5 h-5 text-[#C9A44C]" />,
              title: 'Professional Development',
              description: 'Clean, modular, enterprise-grade TypeScript & React codebases built for long-term maintainability, zero technical debt, and effortless expansion.'
            },
            {
              icon: <Zap className="w-5 h-5 text-[#C9A44C]" />,
              title: 'Performance Optimization',
              description: 'Sub-second page speeds, compressed assets, and zero layout shifts (CLS < 0.05) to ensure your bounce rates remain at absolute minimums.'
            },
            {
              icon: <Search className="w-5 h-5 text-[#C9A44C]" />,
              title: 'SEO-Friendly Structure',
              description: 'Semantic HTML5 architecture, OpenGraph cards, and Schema.org JSON-LD structured data baked in so Google immediately understands and ranks your site.'
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-[#C9A44C]" />,
              title: 'Reliable Support',
              description: 'Direct communication with lead engineer Umair. Ongoing maintenance, security hardening, and fast turnaround for continuous peace of mind.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-3 hover:border-[#C9A44C]/70 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/30 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-[#17251C] dark:text-[#F8FAF7]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#17251C]/70 dark:text-[#F8FAF7]/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== STATISTICS SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#102C23] text-white border border-[#C9A44C]/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A44C]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                  Technical Benchmarks
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold">
                  Verified Engineering Standards
                </h3>
              </div>
              <div className="text-xs text-[#E3C477]/80 max-w-sm">
                * Transparency policy: We display only verifiable technical metrics and production commitments, never inflated numbers.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#C9A44C]/20">
              {verifiedStats.map((stat) => (
                <div key={stat.id} className="space-y-1">
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#C9A44C] tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#F8FAF7]/65 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS PREVIEW ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Client Trust & Reviews
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
              Client Feedback & Transparency
            </h2>
          </div>
          <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
            100% Genuine Client Portal
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#C9A44C]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#17251C]/80 dark:text-[#F8FAF7]/85 italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-[#17251C] dark:text-white">
                    {t.clientName}
                  </div>
                  <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    {t.clientRole} · {t.companyName}
                  </div>
                </div>
                <div className="text-xs text-[#C9A44C] font-mono">
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FINAL CALL TO ACTION ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 sm:p-16 text-center bg-gradient-to-br from-[#102C23] via-[#183B2F] to-[#081710] text-white border border-[#C9A44C]/40 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Let's Create Together
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              READY TO BUILD SOMETHING AMAZING?
            </h2>
            <p className="text-base sm:text-lg text-[#F8FAF7]/80 leading-relaxed">
              Let's turn your ideas into a professional digital experience. Get in touch directly with Umair to discuss scope, timeline, and deliverables.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#C9A44C] text-[#081710] hover:bg-[#E3C477] transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${brandConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello Umair! I am interested in starting a project with Decent Web Engineering.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-[#C9A44C]/40 text-white hover:bg-white/10 transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
