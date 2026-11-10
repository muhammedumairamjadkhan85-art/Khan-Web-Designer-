import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail } from 'lucide-react';
import { PageId, BrandConfig } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
  brandConfig: BrandConfig;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate, brandConfig }) => {
  const lastUpdated = 'November 9, 2026';

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 pt-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top back button */}
      <div>
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102C23] dark:text-[#C9A44C] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header */}
      <div className="space-y-3 border-b border-[#102C23]/10 dark:border-[#C9A44C]/20 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
          <span>Legal & Data Protection</span>
          <span aria-hidden="true">·</span>
          <span>Decent Web Engineering</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60 font-mono">
          Effective Date: {lastUpdated} · Founder: {brandConfig.ownerName}
        </p>
      </div>

      {/* Policy Content */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 shadow-lg space-y-8 text-xs sm:text-sm text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            1. Overview & Commitment
          </h2>
          <p>
            At <strong>{brandConfig.brandName}</strong> ("we", "our", or "us"), founded and directed by <strong>{brandConfig.ownerName}</strong>, we respect your privacy and are committed to protecting any personal information you provide when visiting our website or submitting project inquiries.
          </p>
          <p>
            We do not sell, rent, monetize, or trade your personal information with any third-party advertisers or data brokers under any circumstances.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            2. Information We Collect
          </h2>
          <p>We only collect information voluntarily transmitted by you through our website:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Contact Details:</strong> Your full name, professional email address, and WhatsApp/phone number provided in project inquiry forms.</li>
            <li><strong>Project Scope Details:</strong> Service requirements, estimated budget ranges, timeline constraints, and project specifications.</li>
            <li><strong>Technical Analytics:</strong> Anonymized metrics such as page response times, browser type, and device screen dimensions to optimize Core Web Vitals performance.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            3. How We Use Your Information
          </h2>
          <p>Your information is used strictly for the following commercial purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Directly reviewing and responding to your web engineering inquiries and consultation requests.</li>
            <li>Preparing tailored architectural proposals, milestone schedules, and quotes.</li>
            <li>Maintaining communication during active project development and post-launch maintenance.</li>
            <li>Fulfilling legal, accounting, and contractual obligations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            4. Local Storage & Cookies
          </h2>
          <p>
            Our website uses browser <code>localStorage</code> strictly for functional client-side preferences:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Remembering your active theme choice (Dark Mode vs. Light Mode) between page reloads.</li>
            <li>Caching your submitted inquiry reference numbers so you can review recent submission tickets on your current device.</li>
          </ul>
          <p>We do not employ intrusive cross-site tracking cookies or marketing surveillance pixels.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            5. Data Security & Storage
          </h2>
          <p>
            We implement industry-standard encryption protocols (HTTPS/TLS) across all client interactions. Inquiries submitted via our backend API are processed securely and handled directly by {brandConfig.ownerName}.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            6. Your Privacy Rights (GDPR / CCPA)
          </h2>
          <p>
            Depending on your jurisdiction, you have the right to request access to the personal data we hold about you, request corrections to incomplete or inaccurate data, or request the immediate deletion of your inquiry data.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#102C23]/10 dark:border-[#C9A44C]/20 pt-6">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            7. Contact for Data Privacy Inquiries
          </h2>
          <p>
            For questions regarding this policy or to request data deletion, contact lead engineer {brandConfig.ownerName} directly:
          </p>
          <div className="p-4 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/20 space-y-1">
            <div><strong>Email:</strong> <a href={`mailto:${brandConfig.email}`} className="text-[#C9A44C] underline">{brandConfig.email}</a></div>
            <div><strong>WhatsApp:</strong> {brandConfig.whatsappDisplay}</div>
            <div><strong>Brand:</strong> {brandConfig.brandName}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
