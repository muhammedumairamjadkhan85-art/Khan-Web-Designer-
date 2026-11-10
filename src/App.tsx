import React, { useState, useEffect } from 'react';
import { PageId, ProjectItem, BrandConfig } from './types';
import { initialBrandConfig, getStoredBrandConfig, saveBrandConfig } from './data/brandConfig';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConfigModal } from './components/ConfigModal';

// All 13 Separate Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [brandConfig, setBrandConfig] = useState<BrandConfig>(getStoredBrandConfig());
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);

  // Sync title and metadata with brand & current page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: `${brandConfig.brandName} | We Build Your Digital Future`,
      about: `About Us | ${brandConfig.ownerName} - ${brandConfig.brandName}`,
      services: `Web Engineering Services | ${brandConfig.brandName}`,
      portfolio: `Digital Portfolio & Specimens | ${brandConfig.brandName}`,
      projects: `Case Studies & Projects | ${brandConfig.brandName}`,
      skills: `Our Skills & Tech Stack | ${brandConfig.brandName}`,
      testimonials: `Testimonials & Client Feedback | ${brandConfig.brandName}`,
      pricing: `Transparent Pricing & Cost Calculator | ${brandConfig.brandName}`,
      blog: `Blog & Technical Insights | ${brandConfig.brandName}`,
      faq: `Frequently Asked Questions | ${brandConfig.brandName}`,
      contact: `Contact Us & Project Inquiry | ${brandConfig.brandName}`,
      privacy: `Privacy Policy | ${brandConfig.brandName}`,
      terms: `Terms & Conditions | ${brandConfig.brandName}`,
    };
    document.title = titles[currentPage] || `${brandConfig.brandName} | We Build Your Digital Future`;
  }, [currentPage, brandConfig]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceAndContact = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
