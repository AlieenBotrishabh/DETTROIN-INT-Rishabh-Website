import React, { useState, useEffect, useRef } from 'react';
import {
  Phone, Mail, Search, Moon, Sun, Menu, X,
  ChevronDown, UserCheck, Type, ArrowRight, Sparkles, Bell
} from 'lucide-react';
import kisLogo from '../assets/kis-logo.png';

const navLinks = [
  { label: 'About', href: '#about' },
  {
    label: 'Academics', href: '#academics',
    children: [
      { label: 'CBSE Curriculum', href: '#academics' },
      { label: 'STEM & AI Labs', href: '#academics' },
      { label: 'Senior Streams', href: '#academics' },
    ]
  },
  { label: 'Facilities', href: '#facilities' },
  {
    label: 'Admissions', href: '#admissions',
    children: [
      { label: 'Admission Process', href: '#admissions' },
      { label: 'Fee Calculator', action: 'fee' },
      { label: 'Apply Online', action: 'apply', highlight: true },
    ]
  },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events & News', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ theme, setTheme, fontScale, setFontScale, onOpenAdmissions, onOpenFeeCalculator, onOpenPortalLogin, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [noticeIdx, setNoticeIdx] = useState(0);
  const closeTimer = useRef(null);

  const notices = [
    'Admissions Open 2026-27 for Nursery to Grade XII — Register Now!',
    'KIS Student wins Gold at State Robotics Olympiad 2026',
    'Periodic Assessment Test-1 Schedule Released — Check Notice Board',
    'Revised AC Bus Routes for July 2026 — Download Circular PDF',
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    const cycle = setInterval(() => setNoticeIdx(p => (p + 1) % notices.length), 4000);
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(cycle); };
  }, []);

  const openDropdown = (label) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const handleChildAction = (action) => {
    setActiveDropdown(null);
    if (action === 'fee') onOpenFeeCalculator();
    if (action === 'apply') onOpenAdmissions();
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 'var(--z-header)' }}>
      {/* ── Top Notice Bar ── */}
      <div className="notif-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
            <span style={{
              background: 'var(--gold)', color: 'var(--navy-900)',
              fontWeight: '800', padding: '0.12rem 0.55rem', borderRadius: '4px',
              fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0
            }}>
              LIVE
            </span>
            <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', opacity: 0.95, fontSize: '0.82rem' }}>
              {notices[noticeIdx]}
            </span>
          </div>

          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <a href="tel:+919837050000" style={{ color: '#cbd5e1', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Phone size={12} color="var(--gold)" /> +91-9837050000
              </a>
              <a href="mailto:info@kisaligarh.com" style={{ color: '#cbd5e1', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Mail size={12} color="var(--gold)" /> info@kisaligarh.com
              </a>
            </div>

            {/* Font Size Controls */}
            <div style={{ display: 'flex', gap: '2px', background: 'rgba(255,255,255,0.08)', padding: '3px 6px', borderRadius: '8px' }}>
              <button onClick={() => setFontScale(p => Math.max(p - 10, 90))} style={fontBtn(false)}>A-</button>
              <button onClick={() => setFontScale(100)} style={fontBtn(fontScale === 100)}>A</button>
              <button onClick={() => setFontScale(p => Math.min(p + 10, 120))} style={fontBtn(false)}>A+</button>
            </div>

            {/* Theme Toggle */}
            <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')} title="Toggle dark mode"
              style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {theme === 'light' ? <Moon size={13} color="#fbbf24" /> : <Sun size={13} color="#fbbf24" />}
            </button>

            {/* Portal Button */}
            <button onClick={onOpenPortalLogin} style={{
              background: 'rgba(26,86,219,0.4)', border: '1px solid rgba(26,86,219,0.6)',
              color: '#93c5fd', padding: '0.2rem 0.65rem', borderRadius: '6px',
              fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.3rem'
            }}>
              <UserCheck size={12} /> Portal
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav style={{
        background: scrolled
          ? (theme === 'dark' ? 'rgba(4, 13, 26, 0.97)' : 'rgba(255,255,255,0.97)')
          : (theme === 'dark' ? 'var(--navy-900)' : '#ffffff'),
        backdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.12)' : '0 1px 0 var(--border)',
        transition: 'var(--ease-normal)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <div style={{
              width: '46px', height: '46px', flexShrink: 0,
              borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', boxShadow: 'var(--shadow-royal)'
            }}>
              <img src={kisLogo} alt="Krishna International School logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '800', fontSize: '1.15rem', color: 'var(--text-heading)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                KRISHNA <span style={{ color: 'var(--royal)' }}>INTL.</span>
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                School Aligarh · CBSE #2132415
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {navLinks.map(link => (
              link.children ? (
                <div key={link.label} style={{ position: 'relative' }}
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button style={navBtnStyle}>
                    {link.label} <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none' }} />
                  </button>
                  {activeDropdown === link.label && (
                    <div style={dropdownStyle} onMouseEnter={() => clearTimeout(closeTimer.current)} onMouseLeave={scheduleClose}>
                      {link.children.map(child => (
                        child.action ? (
                          <button key={child.label} onClick={() => handleChildAction(child.action)} style={{
                            ...dropdownItemStyle,
                            background: 'none', border: 'none', width: '100%', textAlign: 'left',
                            color: child.highlight ? 'var(--royal)' : 'var(--text-body)',
                            fontWeight: child.highlight ? '700' : '500',
                          }}>
                            {child.label}
                          </button>
                        ) : (
                          <a key={child.label} href={child.href} onClick={() => setActiveDropdown(null)} style={dropdownItemStyle}>
                            {child.label}
                          </a>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.label} href={link.href} style={{ ...navBtnStyle, textDecoration: 'none' }}>
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={onOpenSearch} title="Search" style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'var(--bg-subtle)', border: '1px solid var(--border)',
              color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'var(--ease-fast)'
            }}>
              <Search size={17} />
            </button>

            <button onClick={onOpenAdmissions} className="btn btn-gold btn-md hide-mobile">
              Apply Now <ArrowRight size={16} />
            </button>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(p => !p)} className="show-mobile btn" style={{
              background: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '0.5rem',
              borderRadius: 'var(--r-md)', color: 'var(--text-heading)', width: '40px', height: '40px'
            }}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="show-mobile" style={{
            borderTop: '1px solid var(--border)',
            background: 'var(--bg-card)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: 'var(--shadow-xl)'
          }}>
            {navLinks.map(link => (
              <a key={link.label} href={link.href || '#'} onClick={() => setMobileOpen(false)} style={{
                padding: '0.6rem 0', borderBottom: '1px solid var(--border)',
                color: 'var(--text-heading)', fontWeight: '600', fontSize: '1rem'
              }}>
                {link.label}
              </a>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', paddingTop: '0.5rem' }}>
              <button onClick={() => { setMobileOpen(false); onOpenFeeCalculator(); }} className="btn btn-outline btn-md" style={{ padding: '0.65rem', fontSize: '0.85rem' }}>
                Fee Calculator
              </button>
              <button onClick={() => { setMobileOpen(false); onOpenAdmissions(); }} className="btn btn-gold btn-md" style={{ padding: '0.65rem', fontSize: '0.85rem' }}>
                Apply Now
              </button>
            </div>

            {/* Mobile-only utility row: font size, theme toggle, portal login */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '0.75rem', paddingTop: '1rem', marginTop: '0.25rem', borderTop: '1px solid var(--border)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', marginRight: '0.25rem' }}>
                  <Type size={13} style={{ verticalAlign: '-2px' }} />
                </span>
                <button onClick={() => setFontScale(p => Math.max(p - 10, 90))} className="btn btn-outline btn-sm" style={{ minWidth: '40px', minHeight: '40px', padding: 0 }}>A-</button>
                <button onClick={() => setFontScale(100)} className={`btn btn-sm ${fontScale === 100 ? 'btn-primary' : 'btn-outline'}`} style={{ minWidth: '40px', minHeight: '40px', padding: 0 }}>A</button>
                <button onClick={() => setFontScale(p => Math.min(p + 10, 120))} className="btn btn-outline btn-sm" style={{ minWidth: '40px', minHeight: '40px', padding: 0 }}>A+</button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
                  title="Toggle dark mode"
                  className="btn btn-outline btn-sm"
                  style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
                >
                  {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                </button>
                <button
                  onClick={() => { setMobileOpen(false); onOpenPortalLogin(); }}
                  className="btn btn-outline btn-sm"
                  style={{ minHeight: '40px' }}
                >
                  <UserCheck size={15} /> Portal
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const fontBtn = (active) => ({
  background: active ? 'var(--gold)' : 'transparent',
  color: active ? 'var(--navy-900)' : '#fff',
  border: 'none', borderRadius: '4px',
  padding: '2px 5px', fontSize: '0.7rem', fontWeight: '700', cursor: 'pointer'
});

const navBtnStyle = {
  background: 'none', border: 'none',
  color: 'var(--text-body)',
  fontWeight: '600', fontSize: '0.88rem',
  padding: '0.5rem 0.75rem', borderRadius: 'var(--r-sm)',
  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem',
  fontFamily: 'inherit', transition: 'var(--ease-fast)'
};

const dropdownStyle = {
  position: 'absolute', top: 'calc(100% + 8px)', left: 0,
  minWidth: '220px', background: 'var(--bg-card)',
  border: '1px solid var(--border)', borderRadius: 'var(--r-md)',
  boxShadow: 'var(--shadow-lg)', padding: '0.5rem',
  display: 'flex', flexDirection: 'column', gap: '0.2rem', zIndex: 100,
  animation: 'scaleIn 0.18s ease'
};

const dropdownItemStyle = {
  display: 'flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.65rem 0.9rem', borderRadius: 'var(--r-sm)',
  color: 'var(--text-body)', fontSize: '0.875rem', fontWeight: '500',
  transition: 'var(--ease-fast)', cursor: 'pointer'
};
