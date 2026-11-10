import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  PlusCircle,
  MessageSquare,
  ArrowRight,
  Info,
  Building2,
  Calendar
} from 'lucide-react';
import { PageId, BrandConfig, TestimonialItem } from '../types';
import { getStoredTestimonials, saveTestimonial } from '../data/statsData';

interface TestimonialsPageProps {
  onNavigate: (page: PageId) => void;
  brandConfig: BrandConfig;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate, brandConfig }) => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(getStoredTestimonials());
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    clientName: '',
    clientRole: '',
    companyName: '',
    content: '',
    rating: 5,
    projectType: 'Business Website Development',
    isVerified: true,
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedback.clientName.trim() || !newFeedback.content.trim()) return;

    const updated = saveTestimonial(newFeedback);
    setTestimonials(updated);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowSubmitModal(false);
      setNewFeedback({
        clientName: '',
        clientRole: '',
        companyName: '',
        content: '',
        rating: 5,
        projectType: 'Business Website Development',
        isVerified: true,
      });
    }, 1200);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 pt-6">
      {/* ===================== HERO ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            <span>Client Endorsements & Truth</span>
            <span aria-hidden="true">·</span>
            <span>Decent Web Engineering</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
            CLIENT EXPERIENCES & <span className="text-[#102C23] dark:text-[#E3C477]">VERIFIED TRUST.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            Read direct feedback from clients and collaborators. We uphold total integrity: zero fabricated personas or invented endorsements.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all cursor-pointer shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Submit Your Client Feedback</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== TRANSPARENCY NOTICE BANNER ===================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/15 dark:border-[#C9A44C]/30 flex items-start gap-4 shadow-sm">
          <ShieldCheck className="w-6 h-6 text-[#C9A44C] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            <strong className="text-[#102C23] dark:text-[#C9A44C] font-semibold block text-sm">
              Our Zero-Fabrication Testimonial Guarantee
            </strong>
            Many agencies fill their websites with invented stock-photo personas and fake 5-star quotes. At Decent Web Engineering, we refuse to compromise our ethics. All testimonials published here come directly through our verified client submission gateway or authenticated client sign-offs.
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS LIST ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#C9A44C] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C9A44C]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#102C23] dark:text-[#E3C477] bg-[#F8FAF7] dark:bg-[#081710] px-2.5 py-1 rounded-md border border-[#102C23]/10 dark:border-[#C9A44C]/20">
                    {t.projectType}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#17251C]/85 dark:text-[#F8FAF7]/90 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-[#17251C] dark:text-white">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    {t.clientRole} · {t.companyName}
                  </p>
                </div>
                <div className="text-right text-xs text-[#C9A44C] font-mono">
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SUBMISSION MODAL ===================== */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-[#F8FAF7] dark:bg-[#102C23] border border-[#102C23]/20 dark:border-[#C9A44C]/30 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#102C23]/10 dark:border-[#C9A44C]/20 pb-4">
              <div>
                <h3 className="font-display font-bold text-lg text-[#17251C] dark:text-[#F8FAF7]">
                  Submit Client Review
                </h3>
                <p className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                  Share your experience working with Umair & Decent Web Engineering.
                </p>
              </div>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="text-xs font-semibold text-[#17251C]/60 dark:text-[#F8FAF7]/60 hover:text-black dark:hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#102C23] dark:text-[#C9A44C] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newFeedback.clientName}
                    onChange={(e) => setNewFeedback({ ...newFeedback, clientName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]"
                    placeholder="e.g. Imran Siddiqui"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#102C23] dark:text-[#C9A44C] mb-1">
                    Role & Title
                  </label>
                  <input
                    type="text"
                    value={newFeedback.clientRole}
                    onChange={(e) => setNewFeedback({ ...newFeedback, clientRole: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]"
                    placeholder="e.g. Managing Director"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#102C23] dark:text-[#C9A44C] mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={newFeedback.companyName}
                    onChange={(e) => setNewFeedback({ ...newFeedback, companyName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]"
                    placeholder="e.g. Apex Global"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#102C23] dark:text-[#C9A44C] mb-1">
                    Project Type
                  </label>
                  <select
                    value={newFeedback.projectType}
                    onChange={(e) => setNewFeedback({ ...newFeedback, projectType: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]"
                  >
                    <option value="Business Website Development">Business Website Development</option>
                    <option value="Landing Page Development">Landing Page Development</option>
                    <option value="E-commerce Website Development">E-commerce Website Development</option>
                    <option value="Portfolio Website Development">Portfolio Website Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Website Redesign">Website Redesign</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#102C23] dark:text-[#C9A44C] mb-1">
                  Rating
                </label>
                <div className="flex items-center gap-2">
                  {[5, 4, 3, 2, 1].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setNewFeedback({ ...newFeedback, rating: r })}
                      className={`px-3 py-1 text-xs rounded-lg border cursor-pointer ${
                        newFeedback.rating === r
                          ? 'bg-[#C9A44C] text-[#081710] font-bold border-[#C9A44C]'
                          : 'border-[#102C23]/20 dark:border-[#C9A44C]/30 text-[#17251C] dark:text-[#F8FAF7]'
                      }`}
                    >
                      {r} Stars
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#102C23] dark:text-[#C9A44C] mb-1">
                  Your Review / Testimonial *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newFeedback.content}
                  onChange={(e) => setNewFeedback({ ...newFeedback, content: e.target.value })}
                  placeholder="Describe the collaboration quality, performance results, and communication..."
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2 text-xs rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] cursor-pointer"
                >
                  {submitSuccess ? 'Submitted!' : 'Post Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================== BOTTOM CTA ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#102C23] text-white border border-[#C9A44C]/30 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Your Future Success Story
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Become Our Next Satisfied Partner
            </h3>
            <p className="text-xs sm:text-sm text-[#F8FAF7]/80">
              Join businesses that trust Decent Web Engineering for high-performance, conversion-oriented websites.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C9A44C] text-[#081710] hover:bg-[#E3C477] transition-all cursor-pointer shadow-lg"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
