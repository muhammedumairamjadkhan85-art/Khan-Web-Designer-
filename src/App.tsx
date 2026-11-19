import React, { useState, useEffect, Suspense, lazy } from 'react';
import { PageId, ProjectItem, BrandConfig } from './types';
import { getStoredBrandConfig, saveBrandConfig } from './data/brandConfig';
import { PAGE_PATHS, getPageFromPath, applyClientSeo } from './data/seoConfig';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConfigModal } from './components/ConfigModal';

// Eager load HomePage for fastest Core Web Vitals (LCP/FCP)
import { HomePage } from './pages/HomePage';

// Lazy load secondary pages for optimal bundle splitting and fast ranking
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then((m) => ({ default: m.PortfolioPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const SkillsPage = lazy(() => import('./pages/SkillsPage').then((m) => ({ default: m.SkillsPage })));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage').then((m) => ({ default: m.TestimonialsPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then((m) => ({ default: m.PricingPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then((m) => ({ default: m.FaqPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));

export function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>(() =>
    typeof window !== 'undefined' ? getPageFromPath(window.location.pathname) : 'home'
  );
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [brandConfig, setBrandConfig] = useState<BrandConfig>(getStoredBrandConfig());
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);

  // Listen to browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync dynamic SEO meta tags, canonical URL, OpenGraph & Schema.org JSON-LD per route
  useEffect(() => {
    applyClientSeo(currentPage, brandConfig.brandName);
  }, [currentPage, brandConfig]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetPath = PAGE_PATHS[page] || '/';
    if (typeof window !== 'undefined' && window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceAndContact = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    handleNavigate('contact');
  };

  const handleSaveBrandConfig = (newConfig: BrandConfig) => {
    setBrandConfig(newConfig);
    saveBrandConfig(newConfig);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF7] text-[#17251C] dark:bg-[#081710] dark:text-[#F8FAF7] transition-colors duration-200">
      {/* Sticky Main Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        brandName={brandConfig.brandName}
      />

      {/* Main Content Area: 13 Distinct Separate Pages */}
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
              <div className="inline-block w-8 h-8 border-2 border-[#C9A44C] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onSelectProject={setSelectedProject}
              onSelectServiceAndContact={handleSelectServiceAndContact}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onNavigate={handleNavigate}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onSelectServiceAndContact={handleSelectServiceAndContact}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'portfolio' && (
            <PortfolioPage
              onNavigate={handleNavigate}
              onSelectProject={setSelectedProject}
              onSelectServiceAndContact={handleSelectServiceAndContact}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'projects' && (
            <ProjectsPage
              onNavigate={handleNavigate}
              onSelectProject={setSelectedProject}
              onSelectServiceAndContact={handleSelectServiceAndContact}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'skills' && (
            <SkillsPage
              onNavigate={handleNavigate}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'testimonials' && (
            <TestimonialsPage
              onNavigate={handleNavigate}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'pricing' && (
            <PricingPage
              onNavigate={handleNavigate}
              onSelectServiceAndContact={handleSelectServiceAndContact}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'blog' && (
            <BlogPage
              onNavigate={handleNavigate}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'faq' && (
            <FaqPage
              onNavigate={handleNavigate}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage
              onNavigate={handleNavigate}
              brandConfig={brandConfig}
              preSelectedService={preSelectedService}
              onOpenConfig={() => setIsConfigOpen(true)}
            />
          )}

          {currentPage === 'privacy' && (
            <PrivacyPolicyPage
              onNavigate={handleNavigate}
              brandConfig={brandConfig}
            />
          )}

          {currentPage === 'terms' && (
            <TermsPage
              onNavigate={handleNavigate}
              brandConfig={brandConfig}
            />
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        brandConfig={brandConfig}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectServiceAndContact={handleSelectServiceAndContact}
      />

      {/* Owner Configuration Modal */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={brandConfig}
        onSave={handleSaveBrandConfig}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
