import React, { useState } from 'react';
import {
  Code,
  Sparkles,
  Zap,
  Target,
  Compass,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
  Award,
  ShieldCheck,
  Smartphone,
  Eye
} from 'lucide-react';
import { PageId, BrandConfig } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  brandConfig: BrandConfig;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, brandConfig }) => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<'all' | 'frontend' | 'design' | 'architecture' | 'optimization'>('all');

  const skillGroups = [
    {
      category: 'frontend',
      name: 'Frontend Engineering',
      skills: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Next.js', 'Vite', 'HTML5 Semantic Architecture', 'Modern JavaScript (ESNext)', 'State Management']
    },
    {
      category: 'design',
      name: 'UI/UX & Brand Systems',
      skills: ['Figma Design Systems', 'Atomic UI Frameworks', 'Typography Pairing', 'WCAG AA Accessibility', 'Wireframing & Prototyping', 'Design Tokens', 'User Journey Mapping']
    },
    {
      category: 'architecture',
      name: 'Full-Stack & APIs',
      skills: ['Node.js & Express', 'RESTful API Integration', 'Authentication & OAuth', 'PostgreSQL & Cloud Databases', 'Git Version Control', 'CI/CD Pipelines']
    },
    {
      category: 'optimization',
      name: 'Performance & Growth',
      skills: ['Core Web Vitals Tuning', 'Technical SEO Architecture', 'OpenGraph & Schema.org', 'Sub-second Load Optimization', 'Conversion Rate Optimization (CRO)', 'Cross-Browser QA']
    }
  ];

  const filteredSkills = activeSkillCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.category === activeSkillCategory);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 pt-6">
      {/* ===================== HERO PROFILE SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 shadow-xl transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9A44C]/40 aspect-square max-w-md mx-auto shadow-2xl bg-[#081710] group">
                <img
                  src="/src/assets/images/umair_designer_portrait_1794278507083.jpg"
                  alt="Umair Web Designer - Founder of Decent Web Engineering"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081710] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xl font-bold font-display">{brandConfig.ownerName}</div>
                  <div className="text-xs text-[#E3C477] font-medium tracking-wide">
                    Lead Web Designer & Frontend Software Engineer
                  </div>
                </div>
              </div>

              {/* Verified Status Card */}
              <div className="p-4 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/20 text-xs flex items-center justify-between text-[#17251C]/80 dark:text-[#F8FAF7]/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C9A44C]" />
                  <span>Verified Independent Engineering Brand</span>
                </div>
                <span className="font-semibold text-[#102C23] dark:text-[#C9A44C]">
                  International Client Ready
                </span>
              </div>
            </div>

            {/* Right Column: Bio & Brand Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                  <span>Founder Profile</span>
                  <span aria-hidden="true">·</span>
                  <span>Decent Web Engineering</span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
                  MEET UMAIR — <span className="text-[#102C23] dark:text-[#E3C477]">YOUR DIGITAL PARTNER.</span>
                </h1>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
                <p>
                  I am <strong>Umair</strong>, an obsessive web designer and software engineer passionate about transforming ambitious ideas into world-class digital realities. Under the banner of <strong>Decent Web Engineering</strong>, I help business owners, startups, and creative brands command authority on the web.
                </p>
                <p>
                  My journey began with a clear observation: the internet is flooded with generic, fragile templates and slow, bloated websites that fail to convert visitors. Decent Web Engineering was built as an antidote to this—delivering custom-engineered web experiences where stunning aesthetics and rock-solid code coexist harmoniously.
                </p>
                <p>
                  Whether designing a high-converting landing page, architecting an e-commerce flagship, or engineering an enterprise platform, I personally oversee every detail—from initial wireframes and typographic rhythm to sub-second load times and production deployment.
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/20">
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-[#102C23] dark:text-[#C9A44C]">
                    100%
                  </div>
                  <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    Bespoke Code
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-[#102C23] dark:text-[#C9A44C]">
                    Zero-Slop
                  </div>
                  <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    Design Discipline
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-[#102C23] dark:text-[#C9A44C]">
                    Global
                  </div>
                  <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    Client Standards
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all cursor-pointer shadow-sm"
                >
                  <span>Work With Umair</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    onNavigate('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider border border-[#102C23]/20 dark:border-[#C9A44C]/30 text-[#102C23] dark:text-[#F8FAF7] hover:bg-[#102C23]/5 dark:hover:bg-[#183B2F] transition-colors cursor-pointer"
                >
                  <span>Inspect Specimen Works</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MY APPROACH TO WEB DEVELOPMENT ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            Design & Engineering Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
            MY APPROACH TO WEB DEVELOPMENT
          </h2>
          <p className="text-sm sm:text-base text-[#17251C]/75 dark:text-[#F8FAF7]/75">
            How creativity, usability, performance, and modern technology combine to create websites that truly generate business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Creativity */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-4 hover:border-[#C9A44C] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/30 flex items-center justify-center text-[#C9A44C]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C9A44C]">01. VISUAL SOUL</span>
              <h3 className="font-display text-xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                Creativity
              </h3>
              <p className="text-xs sm:text-sm text-[#17251C]/70 dark:text-[#F8FAF7]/70 leading-relaxed">
                A great website commands attention in the first three seconds. We craft intentional visual identities, bespoke color harmonies, and refined typography that express your brand's unique character.
              </p>
            </div>
          </div>

          {/* Pillar 2: Usability */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-4 hover:border-[#C9A44C] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/30 flex items-center justify-center text-[#C9A44C]">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C9A44C]">02. HUMAN FLOW</span>
              <h3 className="font-display text-xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                Usability
              </h3>
              <p className="text-xs sm:text-sm text-[#17251C]/70 dark:text-[#F8FAF7]/70 leading-relaxed">
                Beauty without usability is a failure. We structure logical visual hierarchies, frictionless conversion funnels, and accessible navigation that make engaging with your business effortless.
              </p>
            </div>
          </div>

          {/* Pillar 3: Performance */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-4 hover:border-[#C9A44C] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/30 flex items-center justify-center text-[#C9A44C]">
              <Zap className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C9A44C]">03. RAW SPEED</span>
              <h3 className="font-display text-xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                Performance
              </h3>
              <p className="text-xs sm:text-sm text-[#17251C]/70 dark:text-[#F8FAF7]/70 leading-relaxed">
                Every millisecond of delay directly slashes conversion rates. We write lightweight, tree-shaken code, optimize image assets, and target sub-second page loads across all mobile network conditions.
              </p>
            </div>
          </div>

          {/* Pillar 4: Modern Technology */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-4 hover:border-[#C9A44C] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/30 flex items-center justify-center text-[#C9A44C]">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C9A44C]">04. MODERN CODE</span>
              <h3 className="font-display text-xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                Modern Technology
              </h3>
              <p className="text-xs sm:text-sm text-[#17251C]/70 dark:text-[#F8FAF7]/70 leading-relaxed">
                Built with future-proof frameworks like React, TypeScript, and modern CSS engines. No legacy bloat, no vulnerable plugins, and seamless maintainability for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SKILLS & TECHNOLOGIES ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Technical Repertoire
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
              Skills & Engineering Stack
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'design', label: 'UI/UX & Design' },
              { id: 'architecture', label: 'Full-Stack' },
              { id: 'optimization', label: 'Performance' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSkillCategory(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeSkillCategory === tab.id
                    ? 'bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] font-semibold'
                    : 'text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:text-[#102C23] dark:hover:text-[#F8FAF7]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-4"
            >
              <h3 className="font-display text-lg font-bold text-[#17251C] dark:text-[#F8FAF7] flex items-center justify-between">
                <span>{group.name}</span>
                <span className="text-xs font-mono text-[#C9A44C]">{group.skills.length} proficiencies</span>
              </h3>

              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]/90 border border-[#102C23]/10 dark:border-[#C9A44C]/25"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== PROFESSIONAL GOALS & COMMITMENT ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#102C23] text-white border border-[#C9A44C]/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                Professional Goals
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Building Lasting Value for Every Client
              </h3>
              <p className="text-sm text-[#F8FAF7]/80 leading-relaxed">
                My objective is to elevate Decent Web Engineering into an internationally recognized standard for bespoke web development. Every client partnership is treated as a long-term collaboration founded on integrity, clear communication, and measurable commercial return.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#081710]/70 border border-[#C9A44C]/25 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#E3C477]">
                The Umair Guarantee
              </div>
              <ul className="space-y-2 text-xs text-[#F8FAF7]/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A44C] shrink-0" />
                  <span>Direct communication throughout the entire project lifecycle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A44C] shrink-0" />
                  <span>Clean handoff with full ownership of code and assets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A44C] shrink-0" />
                  <span>Rigorous pre-launch testing across mobile and desktop environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
