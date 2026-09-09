import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { MobileStickyBar } from './components/sections/MobileStickyBar';
import { BookingModal } from './components/modals/BookingModal';
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Dedicated Page Components
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { AboutPage } from './pages/AboutPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';

import type { ServiceItem } from './types';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Scroll restore to top on every route navigation */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#F8FAFC] text-[#17212B] font-sans flex flex-col selection:bg-[#16C2B0] selection:text-white pb-14 lg:pb-0">
        {/* Navigation Header */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Page Routes */}
        <main className="flex-1">
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
        </main>

        {/* Global Footer */}
        <Footer />

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
      </div>
    </BrowserRouter>
  );
}

export default App;
