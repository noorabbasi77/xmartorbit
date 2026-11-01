import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DomainSearch } from './components/DomainSearch';
import { PricingSection } from './components/PricingSection';
import { DatacenterMap } from './components/DatacenterMap';
import { ControlPanelPreview } from './components/ControlPanelPreview';
import { PerformanceSection } from './components/PerformanceSection';
import { MigrationTool } from './components/MigrationTool';
import { WhoisLookup } from './components/WhoisLookup';
import { PlanAdvisor } from './components/PlanAdvisor';
import { ResellerSection } from './components/ResellerSection';
import { ReviewsSection } from './components/ReviewsSection';
import { SupportSection } from './components/SupportSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';
import { TicketModal } from './components/TicketModal';
import { CheckCircle2 } from 'lucide-react';

// Dedicated Pages
import { DomainsPage } from './pages/DomainsPage';
import { WebHostingPage } from './pages/WebHostingPage';
import { CloudHostingPage } from './pages/CloudHostingPage';
import { WordPressHostingPage } from './pages/WordPressHostingPage';
import { VpsHostingPage } from './pages/VpsHostingPage';
import { ResellerHostingPage } from './pages/ResellerHostingPage';
import { WebsiteBuilderPage } from './pages/WebsiteBuilderPage';
import { EmailHostingPage } from './pages/EmailHostingPage';
import { SecurityPage } from './pages/SecurityPage';
import { SupportPage } from './pages/SupportPage';
import { ServerStatusPage } from './pages/ServerStatusPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { ElementorExportPage } from './pages/ElementorExportPage';

const AppContent: React.FC = () => {
  const { activeNotification, currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'domains':
        return <DomainsPage />;
      case 'web-hosting':
        return <WebHostingPage />;
      case 'cloud-hosting':
        return <CloudHostingPage />;
      case 'wordpress-hosting':
        return <WordPressHostingPage />;
      case 'vps-hosting':
        return <VpsHostingPage />;
      case 'reseller-hosting':
        return <ResellerHostingPage />;
      case 'website-builder':
        return <WebsiteBuilderPage />;
      case 'email-hosting':
        return <EmailHostingPage />;
      case 'security':
        return <SecurityPage />;
      case 'support':
        return <SupportPage />;
      case 'status':
        return <ServerStatusPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'elementor-export':
        return <ElementorExportPage />;
      case 'privacy':
      case 'terms':
        return <LegalPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <DomainSearch />
            <PricingSection />
            <DatacenterMap />
            <ControlPanelPreview />
            <PerformanceSection />
            <MigrationTool />
            <WhoisLookup />
            <PlanAdvisor />
            <ResellerSection />
            <ReviewsSection />
            <SupportSection />
            <FaqSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1D1E20] flex flex-col font-sans selection:bg-[#EDE5FF] selection:text-[#673DE6]">
      {/* Toast Notification */}
      {activeNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1B1340] text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-purple-500/40 flex items-center gap-2.5 animate-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#00B090] shrink-0" />
          <span>{activeNotification}</span>
        </div>
      )}

      {/* Global Navigation */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <CartDrawer />
      <AuthModal />
      <TicketModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
