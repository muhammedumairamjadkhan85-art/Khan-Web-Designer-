import React, { useState } from 'react';
import { X, ExternalLink, Check, Monitor, Tablet, Smartphone, ArrowRight } from 'lucide-react';
import { ProjectItem, PageId } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectServiceAndContact: (serviceTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectServiceAndContact,
}) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#F8FAF7] dark:bg-[#102C23] border border-[#102C23]/20 dark:border-[#C9A44C]/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#102C23]/10 dark:border-[#C9A44C]/20 bg-white/50 dark:bg-[#081710]/50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#17251C]/40 dark:text-[#F8FAF7]/40">·</span>
            <span className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
              {project.isDemoSample ? 'Design & Architectural Specimen' : 'Client Production Work'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:bg-[#102C23]/10 dark:hover:bg-[#183B2F] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#17251C] dark:text-[#F8FAF7] mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Interactive Responsive Viewport Simulator */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
              <span className="font-semibold uppercase tracking-wider text-[#C9A44C]">
                Interactive Showcase Frame
              </span>
              <div className="flex items-center gap-1 bg-[#102C23]/10 dark:bg-[#081710] p-1 rounded-lg">
                <button
                  onClick={() => setViewportMode('desktop')}
                  className={`px-2.5 py-1 rounded flex items-center gap-1 text-xs transition-colors cursor-pointer ${
                    viewportMode === 'desktop'
                      ? 'bg-white dark:bg-[#183B2F] text-[#102C23] dark:text-[#C9A44C] font-semibold shadow-xs'
                      : 'text-[#17251C]/60 dark:text-[#F8FAF7]/60'
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setViewportMode('tablet')}
                  className={`px-2.5 py-1 rounded flex items-center gap-1 text-xs transition-colors cursor-pointer ${
                    viewportMode === 'tablet'
                      ? 'bg-white dark:bg-[#183B2F] text-[#102C23] dark:text-[#C9A44C] font-semibold shadow-xs'
                      : 'text-[#17251C]/60 dark:text-[#F8FAF7]/60'
                  }`}
                  title="Tablet View"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setViewportMode('mobile')}
                  className={`px-2.5 py-1 rounded flex items-center gap-1 text-xs transition-colors cursor-pointer ${
                    viewportMode === 'mobile'
                      ? 'bg-white dark:bg-[#183B2F] text-[#102C23] dark:text-[#C9A44C] font-semibold shadow-xs'
                      : 'text-[#17251C]/60 dark:text-[#F8FAF7]/60'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            <div className="bg-[#081710] p-4 rounded-xl border border-[#C9A44C]/20 flex items-center justify-center min-h-[320px] transition-all">
              <div
                className={`transition-all duration-300 overflow-hidden rounded-lg shadow-xl border border-[#C9A44C]/30 bg-[#081710] ${
                  viewportMode === 'desktop'
                    ? 'w-full max-w-full'
                    : viewportMode === 'tablet'
                    ? 'w-[520px] max-w-full'
                    : 'w-[320px] max-w-full'
                }`}
              >
                {/* Browser address header simulation */}
                <div className="bg-[#183B2F] px-3 py-1.5 flex items-center gap-2 border-b border-[#C9A44C]/20">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[10px] text-[#F8FAF7]/50 font-mono">
                      https://decentwebengineering.com/{project.id}
                    </span>
                  </div>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[420px]"
                />
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/60 dark:bg-[#081710]/60 border border-[#102C23]/10 dark:border-[#C9A44C]/20">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg sm:text-xl font-bold font-display text-[#102C23] dark:text-[#C9A44C] tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technical Architecture & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C] mb-3">
                Key Engineering Deliverables
              </h4>
              <ul className="space-y-2 text-sm text-[#17251C]/80 dark:text-[#F8FAF7]/80">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A44C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C] mb-3">
                Technologies & Stack
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#102C23]/10 dark:bg-[#183B2F] text-[#102C23] dark:text-[#E3C477] border border-[#102C23]/15 dark:border-[#C9A44C]/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60 italic">
                * Note: In alignment with our strict transparency policy, concept specimens demonstrate genuine design systems, code architecture, and performance standards engineered by Decent Web Engineering.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-white/80 dark:bg-[#081710]/80 border-t border-[#102C23]/10 dark:border-[#C9A44C]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#17251C]/70 dark:text-[#F8FAF7]/70">
            Ready to build a tailored solution for your brand?
          </span>

          <button
            onClick={() => {
              onClose();
              onSelectServiceAndContact(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all cursor-pointer shadow-sm"
          >
            <span>Commission a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
