import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldCheck, ExternalLink, ArrowUp } from 'lucide-react';
import kisLogo from '../assets/kis-logo.png';

export default function Footer({ onOpenAdmissions, onOpenFeeCalculator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--navy-950) 0%, #020710 100%)',
      color: '#cbd5e1',
      paddingTop: '5rem',
      paddingBottom: '2rem',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          
          {/* Col 1: Brand & Affiliation */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div className="icon-wrap icon-wrap-md" style={{
                overflow: 'hidden',
                boxShadow: 'var(--shadow-royal)'
              }}>
                <img src={kisLogo} alt="Krishna International School logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: '800', color: '#ffffff' }}>
                  KRISHNA <span style={{ color: '#60a5fa' }}>INTL.</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '0.05em' }}>
                  School Aligarh • CBSE #2132415
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
              Empowering students through academic rigor, futuristic AI/Robotics STEM labs, Olympic sports, and character education in Krishna Nagar, Aligarh.
            </p>

            <div className="badge badge-inverted" style={{ whiteSpace: 'normal', textAlign: 'left', lineHeight: 1.4, maxWidth: '100%' }}>
              <ShieldCheck size={14} style={{ flexShrink: 0 }} /> CBSE Affiliated Senior Secondary Institution
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '1.25rem' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="#about" style={footerLinkStyle}>About KIS History</a></li>
              <li><a href="#principal" style={footerLinkStyle}>Principal's Message</a></li>
              <li><a href="#academics" style={footerLinkStyle}>CBSE Curriculum & Streams</a></li>
              <li><a href="#facilities" style={footerLinkStyle}>360° Campus Facilities</a></li>
              <li><a href="#gallery" style={footerLinkStyle}>Media Photo Gallery</a></li>
              <li><a href="#events" style={footerLinkStyle}>School Circulars & Events</a></li>
            </ul>
          </div>

          {/* Col 3: Admission & Student Tools */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '1.25rem' }}>Student & Parent Tools</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><button onClick={onOpenAdmissions} style={footerBtnStyle}>Online Admission Form 2026-27</button></li>
              <li><button onClick={onOpenFeeCalculator} style={footerBtnStyle}>Dynamic Fee Structure Calculator</button></li>
              <li><a href="#contact" style={footerLinkStyle}>School Bus Transport Routes</a></li>
              <li><a href="#contact" style={footerLinkStyle}>Campus Location & Directions</a></li>
              <li><a href="https://kisaligarh.com/" target="_blank" rel="noreferrer" style={{ ...footerLinkStyle, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>Original KIS Website <ExternalLink size={12} /></a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.825rem',
          color: '#94a3b8'
        }}>
          <div>
            © {new Date().getFullYear()} Krishna International School Aligarh. All rights reserved.
          </div>

          <button 
            onClick={scrollToTop} 
            className="btn btn-ghost-white btn-sm"
            style={{ borderRadius: 'var(--r-full)' }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};

const footerBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#94a3b8',
  padding: 0,
  fontSize: '0.875rem',
  cursor: 'pointer',
  textAlign: 'left'
};
