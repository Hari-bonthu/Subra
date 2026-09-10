import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { MobileStickyBar } from './components/sections/MobileStickyBar';
import { BookingModal } from './components/modals/BookingModal';
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';
import { PolicyModal, type PolicyTab } from './components/modals/PolicyModal';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ErrorBoundary } from './components/layout/ErrorBoundary';

// Primary Home Route (Eagerly loaded for fastest First Contentful Paint)
import { HomePage } from './pages/HomePage';

// Secondary Routes (Code-split for performance and lighter initial bundle)
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ResidentialPage = lazy(() => import('./pages/ResidentialPage').then((m) => ({ default: m.ResidentialPage })));
const CommercialPage = lazy(() => import('./pages/CommercialPage').then((m) => ({ default: m.CommercialPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then((m) => ({ default: m.ProcessPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));

import type { ServiceItem } from './types';

function PageLoadingFallback() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="w-9 h-9 border-3 border-[#16C2B0]/20 border-t-[#16C2B0] rounded-full animate-spin mb-3" />
      <span className="font-display text-[13px] font-semibold text-[#64748B] tracking-wide">
        Loading...
      </span>
    </div>
  );
}

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyTab, setPolicyTab] = useState<PolicyTab>('terms');

  const handleOpenPolicy = (tab: PolicyTab = 'terms') => {
    setPolicyTab(tab);
    setPolicyModalOpen(true);
  };

  // Open booking modal directly with optional preset service
  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  // Open service detail modal
  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setDetailModalOpen(true);
  };

  return (
    <ErrorBoundary>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        {/* Scroll restore to top on every route navigation */}
        <ScrollToTop />

        <div className="min-h-screen bg-[#F8FAFC] text-[#17212B] font-sans flex flex-col selection:bg-[#16C2B0] selection:text-white pb-24 sm:pb-28 lg:pb-0">
          {/* Navigation Header */}
          <Navbar onOpenBooking={() => handleOpenBooking()} />

          {/* Page Routes */}
          <main className="flex-1">
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      onOpenBooking={handleOpenBooking}
                      onSelectService={handleSelectService}
                    />
                  }
                />
                <Route
                  path="/services"
                  element={
                    <ServicesPage
                      onOpenBooking={handleOpenBooking}
                      onSelectService={handleSelectService}
                    />
                  }
                />
                <Route
                  path="/residential"
                  element={
                    <ResidentialPage
                      onOpenBooking={handleOpenBooking}
                      onSelectService={handleSelectService}
                    />
                  }
                />
                <Route
                  path="/commercial"
                  element={
                    <CommercialPage
                      onOpenBooking={handleOpenBooking}
                      onSelectService={handleSelectService}
                    />
                  }
                />
                <Route
                  path="/about"
                  element={<AboutPage onOpenBooking={() => handleOpenBooking()} />}
                />
                <Route
                  path="/process"
                  element={<ProcessPage onOpenBooking={() => handleOpenBooking()} />}
                />
                <Route
                  path="/contact"
                  element={<ContactPage onOpenBooking={() => handleOpenBooking()} />}
                />
                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer */}
          <Footer onOpenPolicy={handleOpenPolicy} />

          {/* Mobile Sticky Booking Bar */}
          <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

          {/* Interactive Booking & Quote Modal */}
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            initialService={selectedService}
          />

          {/* Interactive Service Detail Modal */}
          <ServiceDetailModal
            service={selectedService}
            isOpen={detailModalOpen}
            onClose={() => setDetailModalOpen(false)}
            onBook={(srv) => {
              setDetailModalOpen(false);
              handleOpenBooking(srv);
            }}
          />

          {/* Legal & Guarantee Policy Modal */}
          <PolicyModal
            key={`${policyModalOpen}-${policyTab}`}
            isOpen={policyModalOpen}
            onClose={() => setPolicyModalOpen(false)}
            initialTab={policyTab}
          />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
