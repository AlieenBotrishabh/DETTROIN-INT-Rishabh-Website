import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import AcademicsSection from './components/AcademicsSection';
import FacilitiesSection from './components/FacilitiesSection';
import AdmissionsSection from './components/AdmissionsSection';
import GallerySection from './components/GallerySection';
import EventsNewsSection from './components/EventsNewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdmissionsModal from './components/AdmissionsModal';
import FeeCalculatorModal from './components/FeeCalculatorModal';
import PortalLoginModal from './components/PortalLoginModal';
import SearchModal from './components/SearchModal';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [fontScale, setFontScale] = useState(100);
  
  // Modals state
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);
  const [feeCalculatorModalOpen, setFeeCalculatorModalOpen] = useState(false);
  const [portalLoginModalOpen, setPortalLoginModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Apply Theme & Accessibility Font Scale to Root Element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', `${fontScale}%`);
  }, [fontScale]);

  return (
    <div className="app-container" style={{ minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-dark)' }}>
      
      {/* Header & Sticky Navigation */}
      <Header 
        theme={theme}
        setTheme={setTheme}
        fontScale={fontScale}
        setFontScale={setFontScale}
        onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        onOpenFeeCalculator={() => setFeeCalculatorModalOpen(true)}
        onOpenPortalLogin={() => setPortalLoginModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        <Hero 
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
          onOpenFeeCalculator={() => setFeeCalculatorModalOpen(true)}
        />
        <AboutSection />
        <AcademicsSection 
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        />
        <FacilitiesSection />
        <AdmissionsSection 
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
          onOpenFeeCalculator={() => setFeeCalculatorModalOpen(true)}
        />
        <GallerySection />
        <EventsNewsSection 
          onOpenPortalLogin={() => setPortalLoginModalOpen(true)}
        />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        onOpenFeeCalculator={() => setFeeCalculatorModalOpen(true)}
      />

      {/* Interactive Modals */}
      <AdmissionsModal 
        isOpen={admissionsModalOpen}
        onClose={() => setAdmissionsModalOpen(false)}
      />

      <FeeCalculatorModal 
        isOpen={feeCalculatorModalOpen}
        onClose={() => setFeeCalculatorModalOpen(false)}
      />

      <PortalLoginModal 
        isOpen={portalLoginModalOpen}
        onClose={() => setPortalLoginModalOpen(false)}
      />

      <SearchModal 
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onOpenAdmissions={() => setAdmissionsModalOpen(true)}
        onOpenFeeCalculator={() => setFeeCalculatorModalOpen(true)}
      />

    </div>
  );
}
