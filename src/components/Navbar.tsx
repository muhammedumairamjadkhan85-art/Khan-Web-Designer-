import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PageId } from '../types';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  brandName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, brandName }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary navigation links in Zone 2
  const primaryLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // Secondary pages in the clean dropdown
  const secondaryLinks: { id: PageId; label: string; group?: string }[] = [
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Projects (Case Studies)' },
    { id: 'skills', label: 'Our Skills' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog & Insights' },
    { id: 'faq', label: 'FAQ' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms & Conditions' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSecondaryActive = secondaryLinks.some((link) => link.id === currentPage);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#F8FAF7]/95 dark:bg-[#081710]/95 backdrop-blur-md border-[#102C23]/10 dark:border-[#C9A44C]/15 shadow-sm'
          : 'bg-[#F8FAF7] dark:bg-[#081710] border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Official Emblem */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
          aria-label="Decent Web Engineering.com Home"
        >
          <img
            src="/assets/aistudio/file_0000000056708211a5d9289307191d62_88c53f2d.png"
            alt="Decent Web Engineering Logo"
            className="h-10 w-auto rounded-lg object-contain shadow-xs border border-[#C9A44C]/30 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-display text-lg font-bold tracking-tight text-[#17251C] dark:text-[#F8FAF7] whitespace-nowrap">
            Decent Web Engineering<span className="text-[#C9A44C]">.com</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {primaryLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#102C23] dark:text-[#C9A44C] font-semibold'
                    : 'text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:text-[#102C23] dark:hover:text-[#F8FAF7]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C9A44C] rounded-full transition-all" />
                )}
              </button>
            );
          })}

          {/* More Pages Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className={`flex items-center gap-1 py-1 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                isSecondaryActive
                  ? 'text-[#102C23] dark:text-[#C9A44C] font-semibold'
                  : 'text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:text-[#102C23] dark:hover:text-[#F8FAF7]'
              }`}
            >
              <span>More</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  moreDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {moreDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 rounded-2xl bg-white dark:bg-[#102C23] border border-[#102C23]/10 dark:border-[#C9A44C]/30 shadow-xl p-2 space-y-1 z-50 animate-in fade-in duration-150">
                <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-[#C9A44C] tracking-wider">
                  Company & Resources
                </div>
                {secondaryLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#102C23]/10 dark:bg-[#183B2F] text-[#102C23] dark:text-[#C9A44C] font-semibold'
                          : 'text-[#17251C]/80 dark:text-[#F8FAF7]/80 hover:bg-[#F8FAF7] dark:hover:bg-[#081710]'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Actions (Theme Toggle & CTA) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[#102C23]/15 dark:border-[#C9A44C]/30 text-[#17251C] dark:text-[#F8FAF7] hover:bg-[#102C23]/5 dark:hover:bg-[#183B2F] transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#E3C477]" />
            ) : (
              <Moon className="w-4 h-4 text-[#102C23]" />
            )}
          </button>

          <button
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#17251C] dark:text-[#F8FAF7] hover:bg-[#102C23]/5 dark:hover:bg-[#183B2F] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#102C23]/10 dark:border-[#C9A44C]/20 bg-[#F8FAF7] dark:bg-[#081710] px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1">
            <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#C9A44C]">
              Main Navigation
            </div>
            {primaryLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#102C23]/10 dark:bg-[#183B2F] text-[#102C23] dark:text-[#C9A44C] font-semibold'
                      : 'text-[#17251C] dark:text-[#F8FAF7]/80 hover:bg-[#102C23]/5 dark:hover:bg-[#183B2F]/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-1 pt-2 border-t border-[#102C23]/10 dark:border-[#C9A44C]/15">
            <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#C9A44C]">
              All Pages & Policies
            </div>
            {secondaryLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#102C23]/10 dark:bg-[#183B2F] text-[#102C23] dark:text-[#C9A44C] font-semibold'
                      : 'text-[#17251C]/75 dark:text-[#F8FAF7]/70 hover:bg-[#102C23]/5 dark:hover:bg-[#183B2F]/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
