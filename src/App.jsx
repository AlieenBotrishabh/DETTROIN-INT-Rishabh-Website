import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Reveal from './components/Reveal';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
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
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('kis-theme') || 'light'; } catch { return 'light'; }
  });
  const [fontScale, setFontScale] = useState(100);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Modal states
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [feeCalcOpen, setFeeCalcOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('kis-theme', theme); } catch {}
  }, [theme]);

  // Apply font scale
  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', `${fontScale}%`);
  }, [fontScale]);

  // Scroll-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keyboard shortcut: Ctrl+K for search
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setAdmissionsOpen(false);
        setFeeCalcOpen(false);
        setPortalOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-page)', color: 'var(--text-body)' }}>

      <Header
        theme={theme}
        setTheme={setTheme}
        fontScale={fontScale}
        setFontScale={setFontScale}
        onOpenAdmissions={() => setAdmissionsOpen(true)}
        onOpenFeeCalculator={() => setFeeCalcOpen(true)}
        onOpenPortalLogin={() => setPortalOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main>
        <Hero
          onOpenAdmissions={() => setAdmissionsOpen(true)}
          onOpenFeeCalculator={() => setFeeCalcOpen(true)}
        />
        <Reveal><AboutSection /></Reveal>
        <Reveal><TestimonialsSection /></Reveal>
        <Reveal><AcademicsSection onOpenAdmissions={() => setAdmissionsOpen(true)} /></Reveal>
        <Reveal><FacilitiesSection /></Reveal>
        <Reveal>
          <AdmissionsSection
            onOpenAdmissions={() => setAdmissionsOpen(true)}
            onOpenFeeCalculator={() => setFeeCalcOpen(true)}
          />
        </Reveal>
        <Reveal><GallerySection /></Reveal>
        <Reveal><EventsNewsSection onOpenPortalLogin={() => setPortalOpen(true)} /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>

      <Footer
        onOpenAdmissions={() => setAdmissionsOpen(true)}
        onOpenFeeCalculator={() => setFeeCalcOpen(true)}
      />

      {/* Modals */}
      <AdmissionsModal isOpen={admissionsOpen} onClose={() => setAdmissionsOpen(false)} />
      <FeeCalculatorModal isOpen={feeCalcOpen} onClose={() => setFeeCalcOpen(false)} />
      <PortalLoginModal isOpen={portalOpen} onClose={() => setPortalOpen(false)} />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onOpenAdmissions={() => setAdmissionsOpen(true)}
        onOpenFeeCalculator={() => setFeeCalcOpen(true)}
      />

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
