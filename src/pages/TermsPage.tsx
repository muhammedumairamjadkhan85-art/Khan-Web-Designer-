import React from 'react';
import { FileCheck2, Shield, ArrowLeft, Scale, CheckCircle2 } from 'lucide-react';
import { PageId, BrandConfig } from '../types';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
  brandConfig: BrandConfig;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate, brandConfig }) => {
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
          <span>Commercial Terms of Service</span>
          <span aria-hidden="true">·</span>
          <span>Decent Web Engineering</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
          Terms & Conditions
        </h1>
        <p className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60 font-mono">
          Last Revised: {lastUpdated} · Owner: {brandConfig.ownerName}
        </p>
      </div>

      {/* Terms Body */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 shadow-lg space-y-8 text-xs sm:text-sm text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            1. Agreement & Scope
          </h2>
          <p>
            By commissioning services from <strong>{brandConfig.brandName}</strong> ("Agency", "we", "us"), directed by <strong>{brandConfig.ownerName}</strong>, the client ("Client", "you") agrees to these Terms & Conditions. All engagements are governed by an agreed project specification, timeline, and quote.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            2. Payment Milestones & Invoicing
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Initial Deposit:</strong> A 50% non-refundable deposit is required prior to project kick-off to reserve engineering calendar capacity and initiate discovery/wireframing.</li>
            <li><strong>Final Settlement:</strong> The remaining 50% balance is due upon project completion, testing sign-off, and prior to the release of live production DNS credentials and repository transfers.</li>
            <li><strong>Enterprise Phased Projects:</strong> Custom web applications exceeding $4,000 may be scheduled in 33% / 33% / 34% milestones as stipulated in individual contract agreements.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            3. Intellectual Property & Code Ownership
          </h2>
          <p>
            We believe in total client freedom and zero vendor lock-in. Upon settlement of all outstanding invoices:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>The Client receives 100% full legal ownership of the customized website codebase, design tokens, styling assets, and configuration files.</li>
            <li>Open-source software libraries (such as React, Tailwind CSS, Vite) remain subject to their respective open-source licenses (MIT, Apache 2.0).</li>
            <li>{brandConfig.brandName} reserves the right to showcase the completed project specimen in professional portfolios and marketing case studies unless a formal non-disclosure agreement (NDA) has been executed.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            4. Client Responsibilities & Asset Delivery
          </h2>
          <p>
            Timely project completion requires mutual collaboration. The Client agrees to provide necessary brand assets (logos, high-res photos, approved copy) and deliver milestone feedback within five business days to maintain agreed delivery schedules.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            5. Revisions & Scope Management
          </h2>
          <p>
            Each fixed-price tier includes two rounds of structural revisions during the design and staging phases. Requested changes outside the agreed initial specification or new feature additions will be quoted transparently as project scope amendments.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            6. Post-Launch Warranty
          </h2>
          <p>
            We stand behind our work. Every website delivered includes a complimentary <strong>14 to 30 day warranty</strong> following production launch covering bug fixes, broken links, or visual regressions that diverge from the approved staging version.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            7. Limitation of Liability
          </h2>
          <p>
            In no event shall {brandConfig.brandName} or {brandConfig.ownerName} be liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, domain registrar interruptions, or client-modified source code. Total liability shall not exceed the total fees paid by the client for the specific service under agreement.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#102C23]/10 dark:border-[#C9A44C]/20 pt-6">
          <h2 className="font-display text-lg font-bold text-[#102C23] dark:text-[#E3C477]">
            8. Contact & Legal Notices
          </h2>
          <p>
            For contractual inquiries, master service agreements, or NDAs, reach out directly:
          </p>
          <div className="p-4 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/20 space-y-1">
            <div><strong>Founder & Engineer:</strong> {brandConfig.ownerName}</div>
            <div><strong>Email:</strong> <a href={`mailto:${brandConfig.email}`} className="text-[#C9A44C] underline">{brandConfig.email}</a></div>
            <div><strong>WhatsApp:</strong> {brandConfig.whatsappDisplay}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
