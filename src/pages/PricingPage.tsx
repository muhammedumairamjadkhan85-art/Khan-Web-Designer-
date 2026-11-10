import React, { useState } from 'react';
import {
  Check,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Calculator,
  HelpCircle,
  Clock,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { PageId, BrandConfig, PricingTier } from '../types';
import { pricingTiers, maintenancePlans } from '../data/pricingData';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceAndContact: (serviceTitle: string) => void;
  brandConfig: BrandConfig;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onSelectServiceAndContact,
  brandConfig,
}) => {
  // Interactive Project Cost Estimator state
  const [calcPages, setCalcPages] = useState<'1' | '5' | '10' | '15+'>('5');
  const [calcEcommerce, setCalcEcommerce] = useState(false);
  const [calcCms, setCalcCms] = useState(true);
  const [calcSpeedGuarantee, setCalcSpeedGuarantee] = useState(true);
  const [calcSeoAudit, setCalcSeoAudit] = useState(true);

  const calculateEstimate = () => {
    let base = 500;
    if (calcPages === '5') base = 1100;
    if (calcPages === '10') base = 1800;
    if (calcPages === '15+') base = 2800;

    if (calcEcommerce) base += 900;
    if (calcCms) base += 250;
    if (calcSpeedGuarantee) base += 150;
    if (calcSeoAudit) base += 200;

    return base;
  };

  const estimatedTotal = calculateEstimate();

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 pt-6">
      {/* ===================== HERO ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            <span>Transparent Investment</span>
            <span aria-hidden="true">·</span>
            <span>Decent Web Engineering</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
            FIXED-PRICE TIERS & <span className="text-[#102C23] dark:text-[#E3C477]">CLEAR VALUE.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            No unexpected billing or ambiguous hourly rates. Every package is delivered with fixed pricing, clear weekly milestones, and 100% code ownership.
          </p>
        </div>
      </section>

      {/* ===================== PRICING CARDS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-[#102C23] to-[#183B2F] text-white border-2 border-[#C9A44C] shadow-2xl scale-102 lg:-translate-y-2'
                  : 'bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 text-[#17251C] dark:text-[#F8FAF7] hover:border-[#C9A44C]'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C9A44C] text-[#081710] text-[10px] uppercase font-bold tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  Most Popular for Businesses
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-bold">
                    {tier.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${tier.isPopular ? 'text-[#F8FAF7]/80' : 'text-[#17251C]/70 dark:text-[#F8FAF7]/70'}`}>
                    {tier.tagline}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-current/10">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold tracking-tight tabular-nums text-[#C9A44C]">
                      {tier.price}
                    </span>
                  </div>
                  <span className={`text-[11px] block font-medium ${tier.isPopular ? 'text-[#E3C477]' : 'text-[#102C23] dark:text-[#C9A44C]'}`}>
                    {tier.period}
                  </span>
                </div>

                <div className={`p-3 rounded-xl text-xs space-y-1 ${tier.isPopular ? 'bg-black/20' : 'bg-[#F8FAF7] dark:bg-[#081710]'}`}>
                  <div className="font-semibold text-[#C9A44C]">Turnaround:</div>
                  <div className="opacity-90">{tier.turnaround}</div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                    Included Scope
                  </div>
                  <ul className="space-y-2 text-xs">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C9A44C] shrink-0 mt-0.5" />
                        <span className="opacity-90 leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onSelectServiceAndContact(`${tier.name} Package (${tier.price})`)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                    tier.isPopular
                      ? 'bg-[#C9A44C] text-[#081710] hover:bg-[#E3C477]'
                      : 'bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477]'
                  }`}
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== INTERACTIVE COST ESTIMATOR ===================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/30 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#102C23]/10 dark:border-[#C9A44C]/20 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#C9A44C]" />
                <h3 className="font-display text-2xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                  Interactive Project Estimator
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#17251C]/70 dark:text-[#F8FAF7]/70">
                Configure your project requirements to calculate an estimated budget range instantly.
              </p>
            </div>

            <div className="text-right p-4 rounded-2xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/25 shrink-0">
              <div className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">Estimated Total</div>
              <div className="text-3xl font-extrabold font-display text-[#102C23] dark:text-[#C9A44C] tabular-nums">
                ~${estimatedTotal}
              </div>
            </div>
          </div>

          {/* Configuration Controls */}
          <div className="space-y-6">
            {/* Pages Count */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-2">
                Scope & Number of Pages
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: '1', label: '1 Landing Page' },
                  { id: '5', label: 'Up to 5 Pages' },
                  { id: '10', label: '6 – 10 Pages' },
                  { id: '15+', label: '11 – 15+ Pages' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCalcPages(opt.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      calcPages === opt.id
                        ? 'bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] border-transparent shadow-sm'
                        : 'border-[#102C23]/20 dark:border-[#C9A44C]/30 text-[#17251C] dark:text-[#F8FAF7]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <label className="p-4 rounded-xl border border-[#102C23]/15 dark:border-[#C9A44C]/25 flex items-center justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#17251C] dark:text-[#F8FAF7]">
                    E-Commerce Storefront
                  </div>
                  <div className="text-[11px] text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    Product catalog, cart drawer & Stripe checkout (+$900)
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={calcEcommerce}
                  onChange={(e) => setCalcEcommerce(e.target.checked)}
                  className="w-4 h-4 accent-[#C9A44C]"
                />
              </label>

              <label className="p-4 rounded-xl border border-[#102C23]/15 dark:border-[#C9A44C]/25 flex items-center justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#17251C] dark:text-[#F8FAF7]">
                    Custom CMS Integration
                  </div>
                  <div className="text-[11px] text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    Effortless content updating dashboard (+$250)
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={calcCms}
                  onChange={(e) => setCalcCms(e.target.checked)}
                  className="w-4 h-4 accent-[#C9A44C]"
                />
              </label>

              <label className="p-4 rounded-xl border border-[#102C23]/15 dark:border-[#C9A44C]/25 flex items-center justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#17251C] dark:text-[#F8FAF7]">
                    Sub-Second Performance SLA
                  </div>
                  <div className="text-[11px] text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    Guaranteed sub-850ms LCP & 0.00 CLS (+$150)
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={calcSpeedGuarantee}
                  onChange={(e) => setCalcSpeedGuarantee(e.target.checked)}
                  className="w-4 h-4 accent-[#C9A44C]"
                />
              </label>

              <label className="p-4 rounded-xl border border-[#102C23]/15 dark:border-[#C9A44C]/25 flex items-center justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#17251C] dark:text-[#F8FAF7]">
                    Technical SEO & Schema.org
                  </div>
                  <div className="text-[11px] text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    JSON-LD structured data & indexing audit (+$200)
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={calcSeoAudit}
                  onChange={(e) => setCalcSeoAudit(e.target.checked)}
                  className="w-4 h-4 accent-[#C9A44C]"
                />
              </label>
            </div>
          </div>

          {/* Estimator Action */}
          <div className="pt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#17251C]/70 dark:text-[#F8FAF7]/70">
              * Estimate includes full code ownership, testing, and 30-day post-launch warranty.
            </div>
            <button
              onClick={() =>
                onSelectServiceAndContact(
                  `Custom Project Estimate (~$${estimatedTotal}) - ${calcPages} Pages`
                )
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all cursor-pointer shadow-md"
            >
              <span>Lock In This Estimate With Umair</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================== MAINTENANCE RETAINERS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            Ongoing Care & Security
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
            Monthly Maintenance Retainers
          </h3>
          <p className="text-xs sm:text-sm text-[#17251C]/75 dark:text-[#F8FAF7]/75">
            Keep your website protected, fast, and up to date without hiring in-house technical staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {maintenancePlans.map((plan, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 space-y-4 hover:border-[#C9A44C] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h4 className="font-display font-bold text-lg text-[#17251C] dark:text-[#F8FAF7]">
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold font-display text-[#C9A44C]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#17251C]/60 dark:text-[#F8FAF7]/60">
                    {plan.period}
                  </span>
                </div>
                <p className="text-xs text-[#17251C]/75 dark:text-[#F8FAF7]/75 leading-relaxed">
                  {plan.description}
                </p>
                <div className="p-3 rounded-xl bg-[#F8FAF7] dark:bg-[#081710] text-xs font-semibold text-[#102C23] dark:text-[#E3C477]">
                  Includes: {plan.hoursIncluded}
                </div>
              </div>

              <div className="pt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15">
                <button
                  onClick={() => onSelectServiceAndContact(`${plan.name} Maintenance Plan`)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] cursor-pointer"
                >
                  Inquire Retainer
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
