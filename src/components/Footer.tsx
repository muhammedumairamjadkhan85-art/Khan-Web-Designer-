import React from 'react';
import { Mail, MessageCircle, ArrowUpRight, Github, Linkedin, Twitter, Sliders } from 'lucide-react';
import { PageId, BrandConfig } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  brandConfig: BrandConfig;
  onOpenConfig?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, brandConfig, onOpenConfig }) => {
  const currentYear = 2026;

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102C23] text-[#F8FAF7] border-t border-[#C9A44C]/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Column (2 cols on desktop) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#081710] border border-[#C9A44C]/40 flex items-center justify-center text-[#C9A44C] font-bold text-lg">
                D
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Decent Web Engineering<span className="text-[#C9A44C]">.com</span>
              </span>
            </div>
            <p className="text-sm text-[#E3C477] font-medium tracking-wide">
              {brandConfig.tagline}
            </p>
            <p className="text-sm text-[#F8FAF7]/70 max-w-md leading-relaxed">
              Founded and engineered by <strong className="text-white font-semibold">{brandConfig.ownerName}</strong>.
              Crafting world-class web applications, conversion-driven landing pages, and distinctive digital identities for ambitious businesses globally.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <a
                href={`mailto:${brandConfig.email}`}
                className="flex items-center gap-2 text-[#F8FAF7]/80 hover:text-[#C9A44C] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C9A44C] shrink-0" />
                <span>{brandConfig.email}</span>
              </a>

              <a
                href={`https://wa.me/${brandConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello Umair! I visited Decent Web Engineering and would like to discuss a web project.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#F8FAF7]/80 hover:text-[#C9A44C] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A44C] shrink-0" />
                <span>WhatsApp: {brandConfig.whatsappDisplay}</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={brandConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#081710] border border-[#C9A44C]/30 text-[#F8FAF7] hover:text-[#C9A44C] hover:border-[#C9A44C] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={brandConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#081710] border border-[#C9A44C]/30 text-[#F8FAF7] hover:text-[#C9A44C] hover:border-[#C9A44C] transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={brandConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#081710] border border-[#C9A44C]/30 text-[#F8FAF7] hover:text-[#C9A44C] hover:border-[#C9A44C] transition-colors"
                aria-label="Twitter profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Core Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Core Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F8FAF7]/80">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pricing & Tiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Studio & Credentials */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Studio & Work
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F8FAF7]/80">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us (Umair)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Projects & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('skills')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Skills & Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('testimonials')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Testimonials & Trust
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C]">
              Resources & Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F8FAF7]/80">
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blog & Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C9A44C]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8FAF7]/60">
          <div>
            © {currentYear} {brandConfig.brandName}. All rights reserved. Brand Owner: {brandConfig.ownerName}.
          </div>

          <div className="flex items-center gap-6">
            <span>Engineering Standard: WCAG AA & Core Web Vitals</span>
            {onOpenConfig && (
              <button
                onClick={onOpenConfig}
                className="inline-flex items-center gap-1.5 text-[#E3C477] hover:text-white transition-colors cursor-pointer"
                title="Edit Owner Phone, Email & Socials"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Brand Settings</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
