import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageCircle,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PageId, BrandConfig, FaqItem } from '../types';
import { comprehensiveFaqs } from '../data/faqData';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
  brandConfig: BrandConfig;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, brandConfig }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'process' | 'pricing' | 'technical' | 'support'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>([comprehensiveFaqs[0].id]);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = comprehensiveFaqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 pt-6">
      {/* ===================== HERO ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            <span>Knowledge Base & Clarifications</span>
            <span aria-hidden="true">·</span>
            <span>Decent Web Engineering</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
            FREQUENTLY ASKED <span className="text-[#102C23] dark:text-[#E3C477]">QUESTIONS.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            Everything you need to know about our engineering standards, project timelines, fixed pricing, code ownership, and post-launch support.
          </p>
        </div>
      </section>

      {/* ===================== SEARCH & CATEGORIES ===================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25">
          <div className="flex flex-wrap gap-1 p-1">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'process', label: 'Process & Timelines' },
              { id: 'pricing', label: 'Pricing & Terms' },
              { id: 'technical', label: 'Tech Stack & Ownership' },
              { id: 'support', label: 'Support & SLAs' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] shadow-sm'
                    : 'text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:text-[#102C23] dark:hover:text-[#F8FAF7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="px-3 py-1">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-56 px-3 py-1.5 text-xs rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] focus:outline-none focus:ring-1 focus:ring-[#C9A44C]"
            />
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-2">
              <p className="text-sm font-semibold text-[#17251C] dark:text-[#F8FAF7]">
                No questions found matching your search.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-[#C9A44C] underline cursor-pointer"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-3xl border border-[#102C23]/10 dark:border-[#C9A44C]/25 bg-white dark:bg-[#102C23] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-[#17251C] dark:text-[#F8FAF7] pr-2">
                      {faq.question}
                    </span>
                    <div className="p-1.5 rounded-full bg-[#F8FAF7] dark:bg-[#081710] text-[#C9A44C] shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed border-t border-[#102C23]/10 dark:border-[#C9A44C]/15 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ===================== HAVE A QUESTION NOT LISTED? ===================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#102C23] text-white border border-[#C9A44C]/30 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Direct Inquiry
            </span>
            <h3 className="font-display text-2xl font-bold">
              Have a Specific Question About Your Project?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8FAF7]/80">
              Umair is available for direct technical questions via WhatsApp or email with guaranteed answers within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Umair! I have a question regarding Decent Web Engineering.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C9A44C] text-[#081710] hover:bg-[#E3C477] transition-all cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider border border-[#C9A44C]/30 text-white hover:bg-white/10 transition-colors"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
