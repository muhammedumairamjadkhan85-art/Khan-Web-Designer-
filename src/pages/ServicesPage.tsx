import React, { useState } from 'react';
import {
  Building2,
  Sparkles,
  ShoppingBag,
  LayoutGrid,
  Palette,
  RefreshCw,
  ShieldCheck,
  Search,
  Check,
  ArrowRight,
  Clock,
  HelpCircle,
  ChevronDown,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { PageId, ServiceItem, BrandConfig } from '../types';
import { servicesData } from '../data/servicesData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceAndContact: (serviceTitle: string) => void;
  brandConfig: BrandConfig;
}

const renderServiceIcon = (name: string) => {
  const iconProps = { className: "w-7 h-7 text-[#C9A44C]" };
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

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceAndContact,
  brandConfig,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does a typical custom website build take?',
      answer: 'Standard projects range between 1 to 4 weeks depending on scope. High-impact landing pages typically take 5 to 10 days, while comprehensive e-commerce flagships or bespoke enterprise platforms take 3 to 6 weeks with clear weekly milestones.'
    },
    {
      question: 'Will my website be fully responsive across mobile and tablet?',
      answer: 'Yes, 100%. We engineer every layout with a fluid, mobile-first approach, tested rigorously across iOS Safari, Android Chrome, tablet dimensions, laptops, and ultra-wide desktop monitors.'
    },
    {
      question: 'Do I own the full source code and intellectual property?',
      answer: 'Completely. Once your project is concluded and finalized, you own 100% of the code, digital assets, designs, and domain configurations. We believe in absolute client freedom with zero vendor lock-in.'
    },
    {
      question: 'Can you work with clients in different time zones?',
      answer: 'Yes. Umair regularly collaborates with clients across the US, UK, Europe, Middle East, and Asia with asynchronous communication channels (WhatsApp, email, and scheduled video conferences).'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 pt-6">
      {/* ===================== SERVICES HERO ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            <span>Capabilities & Deliverables</span>
            <span aria-hidden="true">·</span>
            <span>Decent Web Engineering</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#17251C] dark:text-[#F8FAF7] leading-tight">
            ENGINEERED FOR <span className="text-[#102C23] dark:text-[#E3C477]">COMMERCIAL IMPACT.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
            From high-conversion landing funnels to comprehensive enterprise applications, each service is delivered with obsessive attention to design aesthetics, performance benchmarks, and measurable ROI.
          </p>
        </div>
      </section>

      {/* ===================== ALL 8 SERVICES DETAILED ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-8">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/25 shadow-md hover:border-[#C9A44C] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Column 1: Header, Icon & Turnaround */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/30 flex items-center justify-center shrink-0">
                      {renderServiceIcon(svc.iconName)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#C9A44C]">
                        SERVICE {svc.number}
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-[#17251C] dark:text-[#F8FAF7]">
                        {svc.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-[#17251C]/80 dark:text-[#F8FAF7]/80 leading-relaxed">
                    {svc.fullDesc}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8FAF7] dark:bg-[#081710] border border-[#102C23]/10 dark:border-[#C9A44C]/20 text-xs text-[#17251C]/70 dark:text-[#F8FAF7]/80">
                    <Clock className="w-3.5 h-3.5 text-[#C9A44C]" />
                    <span>Estimated Turnaround: <strong>{svc.turnaroundTime}</strong></span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onSelectServiceAndContact(svc.title)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all cursor-pointer shadow-sm hover:shadow"
                    >
                      <span>Get This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Column 2: Key Benefits */}
                <div className="lg:col-span-4 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
                    Key Advantages & Benefits
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#17251C]/80 dark:text-[#F8FAF7]/80">
                    {svc.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#C9A44C] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Ideal Clients & Deliverables */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C] mb-2">
                      Ideal For
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#17251C]/75 dark:text-[#F8FAF7]/75">
                      {svc.idealFor.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C] mb-2">
                      Included Deliverables
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#17251C]/75 dark:text-[#F8FAF7]/75">
                      {svc.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#102C23] dark:bg-[#E3C477]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FAQ ACCORDION ===================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
            Clarifications
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#17251C] dark:text-[#F8FAF7]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#102C23]/10 dark:border-[#C9A44C]/25 bg-white dark:bg-[#102C23] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#17251C] dark:text-[#F8FAF7]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C9A44C] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#17251C]/75 dark:text-[#F8FAF7]/75 leading-relaxed border-t border-[#102C23]/10 dark:border-[#C9A44C]/15 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== CONSULTATION CTA ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 text-center bg-[#102C23] text-white border border-[#C9A44C]/30 space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Complimentary Advisory
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Unsure Which Service Fits Your Roadmap?
            </h3>
            <p className="text-sm text-[#F8FAF7]/80">
              Schedule a discovery session or send a direct project message to Umair to evaluate the right architecture and timeline for your business goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C9A44C] text-[#081710] hover:bg-[#E3C477] transition-all cursor-pointer shadow-md"
            >
              <span>Book Discovery Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${brandConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Umair! I have a question regarding Decent Web Engineering services.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider border border-[#C9A44C]/30 text-white hover:bg-white/10 transition-colors"
            >
              <span>Quick WhatsApp Question</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
