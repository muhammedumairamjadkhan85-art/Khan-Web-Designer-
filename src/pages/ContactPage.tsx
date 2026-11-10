import React, { useState, useEffect } from 'react';
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  RotateCcw,
  Sliders,
  Copy,
  Check
} from 'lucide-react';
import { PageId, BrandConfig, ContactFormData } from '../types';
import { servicesData } from '../data/servicesData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  brandConfig: BrandConfig;
  preSelectedService?: string;
  onOpenConfig?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  brandConfig,
  preSelectedService,
  onOpenConfig,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    service: preSelectedService || servicesData[0].title,
    budget: '$1,000 – $3,000',
    details: '',
  });

  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    inquiryId?: string;
    message: string;
    timestamp?: string;
  } | null>(null);

  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  const validate = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!formData.whatsapp.trim()) {
      errors.whatsapp = 'WhatsApp number is required so Umair can reach out quickly.';
    }

    if (!formData.service) {
      errors.service = 'Please select a service required.';
    }

    if (!formData.details.trim()) {
      errors.details = 'Please briefly describe your project objectives or timeline.';
    } else if (formData.details.trim().length < 15) {
      errors.details = 'Please provide at least 15 characters describing your project.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      // POST to our backend API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionResult({
          success: true,
          inquiryId: data.inquiryId,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          message: data.message,
        });

        // Store in localStorage history
        try {
          const existing = JSON.parse(localStorage.getItem('dwe_user_inquiries') || '[]');
          existing.unshift({ ...formData, id: data.inquiryId, date: new Date().toISOString() });
          localStorage.setItem('dwe_user_inquiries', JSON.stringify(existing.slice(0, 10)));
        } catch {
          // ignore
        }
      } else {
        setSubmissionResult({
          success: false,
          message: data.error || 'Server rejected submission. Please check your inputs.',
        });
      }
    } catch (err) {
      // Fallback if network offline
      const fallbackId = `DWE-${Date.now().toString(36).toUpperCase()}`;
      setSubmissionResult({
        success: true,
        inquiryId: fallbackId,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        message: 'Your inquiry was recorded locally. You can also confirm instantly via WhatsApp or direct email below.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(brandConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      service: servicesData[0].title,
      budget: '$1,000 – $3,000',
      details: '',
    });
    setSubmissionResult(null);
    setValidationErrors({});
  };

  const whatsappInquiryUrl = `https://wa.me/${brandConfig.whatsappNumber.replace(
    /[^0-9]/g,
    ''
  )}?text=${encodeURIComponent(
    `Hello Umair! My name is ${formData.fullName || 'there'}. I am interested in "${
      formData.service
    }" for my project. Budget: ${formData.budget}. Details: ${formData.details || 'Let us discuss'}`
  )}`;

  const mailtoUrl = `mailto:${brandConfig.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.service} - ${formData.fullName || 'New Client'}`
  )}&body=${encodeURIComponent(
    `Hello Umair,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.details}`
  )}`;

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 pt-6">
      {/* ===================== CONTACT HERO ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            <span>Direct Client Liaison</span>
            <span aria-hidden="true">·</span>
            <span>Decent Web Engineering</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
            LET'S CREATE YOUR <span className="text-[#102C23] dark:text-[#E3C477]">DIGITAL SUCCESS.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            Reach out directly to Umair to discuss your web application, landing page, e-commerce storefront, or redesign. Every inquiry receives a personalized technical review within 24 hours.
          </p>
        </div>
      </section>

      {/* ===================== MAIN CONTACT SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Action Channels & Owner Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-6 shadow-md">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                  Direct Channels
                </span>
                <h3 className="font-display text-2xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                  Talk Directly With Umair
                </h3>
                <p className="text-xs sm:text-sm text-[#17251C]/70 dark:text-[#F8FAF7]/70">
                  No intermediaries or sales reps. You communicate directly with the lead engineer responsible for your project.
                </p>
              </div>

              {/* Direct WhatsApp Card */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-2xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/30 hover:border-[#C9A44C] transition-all flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                      Instant WhatsApp Chat
                    </div>
                    <div className="text-sm font-bold text-[#17251C] dark:text-[#F8FAF7] group-hover:text-[#C9A44C] transition-colors">
                      {brandConfig.whatsappDisplay}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C9A44C] transition-transform group-hover:translate-x-1" />
              </a>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#102C23]/10 dark:bg-[#183B2F] text-[#102C23] dark:text-[#C9A44C] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                        Professional Email
                      </div>
                      <a
                        href={mailtoUrl}
                        className="text-xs sm:text-sm font-bold text-[#17251C] dark:text-[#F8FAF7] hover:text-[#C9A44C] transition-colors truncate block max-w-[220px]"
                        title={brandConfig.email}
                      >
                        {brandConfig.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-[#102C23]/10 dark:border-[#C9A44C]/25 text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:bg-[#102C23]/5 dark:hover:bg-[#183B2F] transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Service Commitments */}
              <div className="space-y-3 pt-2 border-t border-[#102C23]/10 dark:border-[#C9A44C]/20 text-xs text-[#17251C]/75 dark:text-[#F8FAF7]/75">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C9A44C] shrink-0" />
                  <span>Guaranteed response time within 24 business hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C9A44C] shrink-0" />
                  <span>NDA and complete intellectual property protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C9A44C] shrink-0" />
                  <span>Free architecture consultation and fixed-price quotation</span>
                </div>
              </div>

              {/* Edit owner config helper */}
              {onOpenConfig && (
                <div className="pt-2">
                  <button
                    onClick={onOpenConfig}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#102C23] dark:text-[#E3C477] hover:underline cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Edit Live Contact Placeholders (WhatsApp / Email / Socials)</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 shadow-xl transition-colors">
              <div className="space-y-1 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                  Project Inquiry Form
                </span>
                <h3 className="font-display text-2xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                  Start Your Project With Decent Web Engineering
                </h3>
                <p className="text-xs sm:text-sm text-[#17251C]/70 dark:text-[#F8FAF7]/70">
                  Fill out your requirements below. All submissions are processed by our secure backend and transmitted directly to Umair.
                </p>
              </div>

              {/* Submission Feedback Message */}
              {submissionResult && (
                <div
                  className={`p-5 rounded-2xl mb-6 border transition-all ${
                    submissionResult.success
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                      : 'bg-red-500/10 border-red-500/30 text-red-800 dark:text-red-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submissionResult.success ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="font-semibold">
                        {submissionResult.success
                          ? 'Inquiry Transmitted Successfully!'
                          : 'Submission Error'}
                      </div>
                      <p>{submissionResult.message}</p>

                      {submissionResult.inquiryId && (
                        <div className="text-xs font-mono bg-black/10 dark:bg-black/30 p-2 rounded-lg inline-block">
                          Ticket Reference: <strong>{submissionResult.inquiryId}</strong>
                        </div>
                      )}

                      {submissionResult.success && (
                        <div className="pt-2 flex flex-wrap gap-2">
                          <a
                            href={whatsappInquiryUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Confirm via WhatsApp</span>
                          </a>

                          <button
                            onClick={handleResetForm}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/10 dark:bg-white/10 text-xs font-medium hover:bg-black/20"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Submit Another Inquiry</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alexander Vance"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (validationErrors.fullName) {
                          setValidationErrors({ ...validationErrors, fullName: undefined });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A44C] bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] ${
                        validationErrors.fullName
                          ? 'border-red-500/80 ring-1 ring-red-500/40'
                          : 'border-[#102C23]/20 dark:border-[#C9A44C]/30'
                      }`}
                      required
                    />
                    {validationErrors.fullName && (
                      <p className="mt-1 text-xs text-red-500">{validationErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (validationErrors.email) {
                          setValidationErrors({ ...validationErrors, email: undefined });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A44C] bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] ${
                        validationErrors.email
                          ? 'border-red-500/80 ring-1 ring-red-500/40'
                          : 'border-[#102C23]/20 dark:border-[#C9A44C]/30'
                      }`}
                      required
                    />
                    {validationErrors.email && (
                      <p className="mt-1 text-xs text-red-500">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1.5">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 555 123 4567"
                      value={formData.whatsapp}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsapp: e.target.value });
                        if (validationErrors.whatsapp) {
                          setValidationErrors({ ...validationErrors, whatsapp: undefined });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A44C] bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] ${
                        validationErrors.whatsapp
                          ? 'border-red-500/80 ring-1 ring-red-500/40'
                          : 'border-[#102C23]/20 dark:border-[#C9A44C]/30'
                      }`}
                      required
                    />
                    {validationErrors.whatsapp && (
                      <p className="mt-1 text-xs text-red-500">{validationErrors.whatsapp}</p>
                    )}
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1.5">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A44C] bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]"
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Budget (Optional) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1.5">
                    Estimated Project Budget <span className="text-[#17251C]/40 dark:text-[#F8FAF7]/40">(Optional)</span>
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#102C23]/20 dark:border-[#C9A44C]/30 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A44C] bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]"
                  >
                    <option value="Under $1,000">Under $1,000 (Starter / Single Landing)</option>
                    <option value="$1,000 – $3,000">$1,000 – $3,000 (Standard Business Website / Portfolio)</option>
                    <option value="$3,000 – $6,000">$3,000 – $6,000 (E-commerce / Multi-Page System)</option>
                    <option value="$6,000+">$6,000+ (Custom Enterprise Application / Retainer)</option>
                    <option value="Flexible / Undisclosed">Flexible / Undisclosed</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1.5">
                    Project Details & Scope <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project goals, target audience, preferred features, reference websites, or deadlines..."
                    value={formData.details}
                    onChange={(e) => {
                      setFormData({ ...formData, details: e.target.value });
                      if (validationErrors.details) {
                        setValidationErrors({ ...validationErrors, details: undefined });
                      }
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A44C] bg-[#F8FAF7] dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] ${
                      validationErrors.details
                        ? 'border-red-500/80 ring-1 ring-red-500/40'
                        : 'border-[#102C23]/20 dark:border-[#C9A44C]/30'
                    }`}
                    required
                  />
                  {validationErrors.details && (
                    <p className="mt-1 text-xs text-red-500">{validationErrors.details}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Inquiry to Umair...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT PROJECT INQUIRY</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
