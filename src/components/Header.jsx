import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, Search, Moon, Sun, ChevronDown, Menu, X, 
  UserCheck, Award, Sparkles, BookOpen, GraduationCap, ArrowRight, Type 
} from 'lucide-react';

export default function Header({ 
  theme, 
  setTheme, 
  fontScale, 
  setFontScale, 
  onOpenAdmissions, 
  onOpenFeeCalculator, 
  onOpenPortalLogin, 
  onOpenSearch 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const increaseFont = () => setFontScale(prev => Math.min(prev + 10, 120));
  const resetFont = () => setFontScale(100);
  const decreaseFont = () => setFontScale(prev => Math.max(prev - 10, 90));

  return (
    <header className="header-wrapper" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      {/* Top Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #0b192c 0%, #1e293b 50%, #0f172a 100%)',
        color: '#f8fafc',
        padding: '0.4rem 0',
        fontSize: '0.825rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          {/* Ticker marquee / highlight */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              background: '#f59e0b',
              color: '#0b192c',
              fontWeight: '800',
              padding: '0.15rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.725rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              NOTICE
            </span>
            <span style={{ opacity: 0.95 }}>
              🎯 <strong>Admissions Open 2026-27</strong> | Nursery to Grade XII | Entrance Test & Counseling Schedule
            </span>
          </div>

          {/* Quick Contact & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div className="hide-mobile" style={{ display: 'flex', gap: '1rem' }}>
              <a href="tel:+919837050000" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Phone size={13} color="#f59e0b" /> +91-9837050000
              </a>
              <a href="mailto:info@kisaligarh.com" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={13} color="#f59e0b" /> info@kisaligarh.com
              </a>
            </div>

            {/* Accessibility & Theme Adjusters */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.1)', padding: '0.15rem 0.5rem', borderRadius: '20px' }}>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginRight: '2px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <Type size={11} /> Size:
              </span>
              <button onClick={decreaseFont} title="Decrease Font Size" style={fontBtnStyle(fontScale === 90)}>A-</button>
              <button onClick={resetFont} title="Reset Font Size" style={fontBtnStyle(fontScale === 100)}>A</button>
              <button onClick={increaseFont} title="Increase Font Size" style={fontBtnStyle(fontScale === 120)}>A+</button>
            </div>

            {/* Light / Dark Mode Toggle */}
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: 'none',
                color: '#fff',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? <Moon size={14} color="#fbbf24" /> : <Sun size={14} color="#f59e0b" />}
            </button>

            {/* Parent & Student Portal Link */}
            <button
              onClick={onOpenPortalLogin}
              style={{
                background: 'rgba(29, 78, 216, 0.3)',
                border: '1px solid rgba(29, 78, 216, 0.6)',
                color: '#60a5fa',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <UserCheck size={12} /> Student/Parent Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav style={{
        background: isScrolled 
          ? (theme === 'dark' ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)') 
          : (theme === 'dark' ? '#111827' : '#ffffff'),
        backdropFilter: 'blur(12px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.25rem' }}>
          
          {/* School Brand / Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              background: 'linear-gradient(135deg, #0b192c 0%, #1d4ed8 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f59e0b',
              boxShadow: '0 4px 12px rgba(29, 78, 216, 0.25)',
              position: 'relative'
            }}>
              <GraduationCap size={28} color="#f59e0b" />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                KRISHNA <span style={{ color: 'var(--royal-blue)' }}>INTERNATIONAL</span>
              </div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                School Aligarh • CBSE Affiliated #2132415
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="#hero" style={navLinkStyle}>Home</a>
            
            <div style={{ position: 'relative' }} onMouseLeave={() => setActiveDropdown(null)}>
              <button 
                onClick={() => toggleDropdown('about')}
                onMouseEnter={() => setActiveDropdown('about')}
                style={dropdownBtnStyle}
              >
                About Us <ChevronDown size={14} />
              </button>
              {activeDropdown === 'about' && (
                <div style={dropdownMenuStyle}>
                  <a href="#about" style={dropdownItemStyle}><BookOpen size={14} color="#1d4ed8" /> Overview & History</a>
                  <a href="#principal" style={dropdownItemStyle}><UserCheck size={14} color="#1d4ed8" /> Principal's Message</a>
                  <a href="#vision" style={dropdownItemStyle}><Award size={14} color="#1d4ed8" /> Vision, Mission & Values</a>
                </div>
              )}
            </div>

            <div style={{ position: 'relative' }} onMouseLeave={() => setActiveDropdown(null)}>
              <button 
                onClick={() => toggleDropdown('academics')}
                onMouseEnter={() => setActiveDropdown('academics')}
                style={dropdownBtnStyle}
              >
                Academics <ChevronDown size={14} />
              </button>
              {activeDropdown === 'academics' && (
                <div style={dropdownMenuStyle}>
                  <a href="#academics" style={dropdownItemStyle}><GraduationCap size={14} color="#1d4ed8" /> CBSE Curriculum</a>
                  <a href="#academics" style={dropdownItemStyle}><Sparkles size={14} color="#1d4ed8" /> STEM & AI Innovation Lab</a>
                  <a href="#academics" style={dropdownItemStyle}><BookOpen size={14} color="#1d4ed8" /> Senior Secondary Streams</a>
                </div>
              )}
            </div>

            <a href="#facilities" style={navLinkStyle}>Facilities</a>

            <div style={{ position: 'relative' }} onMouseLeave={() => setActiveDropdown(null)}>
              <button 
                onClick={() => toggleDropdown('admissions')}
                onMouseEnter={() => setActiveDropdown('admissions')}
                style={dropdownBtnStyle}
              >
                Admissions <ChevronDown size={14} />
              </button>
              {activeDropdown === 'admissions' && (
                <div style={dropdownMenuStyle}>
                  <a href="#admissions" style={dropdownItemStyle}><Award size={14} color="#1d4ed8" /> Admission Process</a>
                  <button onClick={onOpenFeeCalculator} style={{ ...dropdownItemStyle, width: '100%', textAlign: 'left', background: 'none', border: 'none' }}>
                    💰 Dynamic Fee Calculator
                  </button>
                  <button onClick={onOpenAdmissions} style={{ ...dropdownItemStyle, width: '100%', textAlign: 'left', background: 'none', border: 'none', color: '#1d4ed8', fontWeight: '700' }}>
                    📝 Online Application Form
                  </button>
                </div>
              )}
            </div>

            <a href="#gallery" style={navLinkStyle}>Gallery</a>
            <a href="#events" style={navLinkStyle}>Events & News</a>
            <a href="#contact" style={navLinkStyle}>Contact Us</a>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              onClick={onOpenSearch} 
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)',
                color: 'var(--text-dark)',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-fast)'
              }}
              title="Search website content"
            >
              <Search size={18} />
            </button>

            <button onClick={onOpenAdmissions} className="btn-gold hide-mobile">
              Apply Now <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="show-mobile-only"
              style={{
                background: 'var(--bg-subtle)',
                border: 'none',
                padding: '0.5rem',
                borderRadius: '8px',
                color: 'var(--text-dark)',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="show-mobile-only" style={{
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-light)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>About KIS</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Academics & STEM</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Campus Facilities</a>
            <a href="#admissions" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Admissions</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Media Gallery</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Events & Circulars</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Contact Us</a>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button onClick={() => { setMobileMenuOpen(false); onOpenFeeCalculator(); }} className="btn-outline" style={{ padding: '0.5rem', fontSize: '0.85rem' }}>
                Fee Calculator
              </button>
              <button onClick={() => { setMobileMenuOpen(false); onOpenAdmissions(); }} className="btn-gold" style={{ padding: '0.5rem', fontSize: '0.85rem' }}>
                Apply Online
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const fontBtnStyle = (active) => ({
  background: active ? '#f59e0b' : 'transparent',
  color: active ? '#0b192c' : '#ffffff',
  border: 'none',
  borderRadius: '3px',
  padding: '0.1rem 0.35rem',
  fontSize: '0.7rem',
  fontWeight: '700',
  cursor: 'pointer'
});

const navLinkStyle = {
  color: 'var(--text-dark)',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '0.925rem',
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};

const mobileNavLinkStyle = {
  color: 'var(--text-dark)',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1rem',
  padding: '0.4rem 0',
  borderBottom: '1px solid var(--border-light)'
};

const dropdownBtnStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--text-dark)',
  fontWeight: '600',
  fontSize: '0.925rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  cursor: 'pointer',
  padding: '0.4rem 0'
};

const dropdownMenuStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '230px',
  background: 'var(--bg-card)',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  border: '1px solid var(--border-light)',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  zIndex: 100
};

const dropdownItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  padding: '0.6rem 0.8rem',
  color: 'var(--text-dark)',
  textDecoration: 'none',
  fontSize: '0.875rem',
  fontWeight: '500',
  borderRadius: '6px',
  transition: 'background 0.2s ease'
};
