import React, { useState } from 'react';
import { 
  Award, Target, Compass, Heart, ShieldCheck, CheckCircle2, 
  Quote, ArrowRight, BookOpen, Users, Sparkles 
} from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('principal');

  return (
    <section id="about" style={{ padding: '6rem 0', background: 'var(--bg-main)' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <Sparkles size={16} color="#d97706" /> Welcome to Krishna International School
          </div>
          <h2 className="section-title">Fostering Excellence, Character & Future Readiness</h2>
          <p className="section-desc">
            Established with a commitment to academic brilliance, holistic wellness, and technological empowerment in Krishna Nagar, Aligarh.
          </p>
        </div>

        {/* 2-Column Grid: Left (Story & Accreditations), Right (Interactive Leadership & Vision Tabs) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          {/* Left Column: Campus Overview & Badges */}
          <div>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              marginBottom: '2rem'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80" 
                alt="Krishna International School Campus" 
                style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(11, 25, 44, 0.95), transparent)',
                color: '#fff'
              }}>
                <div style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  A 5-Acres State-of-the-Art Smart Campus
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>
                  Krishna Nagar, G.T. Road, Aligarh, Uttar Pradesh
                </div>
              </div>
            </div>

            {/* Core Badges Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={badgeBoxStyle}>
                <ShieldCheck size={28} color="#1d4ed8" />
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>CBSE Affiliated</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Affiliation #2132415</p>
                </div>
              </div>

              <div style={badgeBoxStyle}>
                <Award size={28} color="#d97706" />
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>ISO Certified</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ISO 9001:2015 Quality</p>
                </div>
              </div>

              <div style={badgeBoxStyle}>
                <Sparkles size={28} color="#0d9488" />
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>STEM Excellence</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Robotics & AI Hub</p>
                </div>
              </div>

              <div style={badgeBoxStyle}>
                <Users size={28} color="#e11d48" />
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>1:20 Faculty Ratio</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Personalized Mentorship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Leadership & Philosophy */}
          <div>
            {/* Tab Navigation */}
            <div style={{
              display: 'flex',
              background: 'var(--bg-subtle)',
              padding: '0.4rem',
              borderRadius: '16px',
              gap: '0.35rem',
              marginBottom: '1.75rem',
              border: '1px solid var(--border-light)'
            }}>
              <button 
                onClick={() => setActiveTab('principal')} 
                style={tabBtnStyle(activeTab === 'principal')}
              >
                Principal's Desk
              </button>
              <button 
                onClick={() => setActiveTab('vision')} 
                style={tabBtnStyle(activeTab === 'vision')}
              >
                Vision & Mission
              </button>
              <button 
                onClick={() => setActiveTab('pillars')} 
                style={tabBtnStyle(activeTab === 'pillars')}
              >
                Core Pillars
              </button>
            </div>

            {/* Tab Content 1: Principal's Desk */}
            {activeTab === 'principal' && (
              <div id="principal" className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" 
                    alt="Principal Krishna International School" 
                    style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--royal-blue)' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)' }}>Dr. Sunita Sharma</h3>
                    <p style={{ color: 'var(--royal-blue)', fontWeight: '600', fontSize: '0.875rem' }}>Principal, M.Sc, Ph.D in Pedagogy</p>
                    <span className="badge-gold" style={{ marginTop: '0.25rem', fontSize: '0.75rem' }}>20+ Yrs Educator Leadership</span>
                  </div>
                </div>

                <div style={{ position: 'relative', background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', borderLeft: '4px solid var(--royal-blue)' }}>
                  <Quote size={24} color="var(--royal-blue)" style={{ opacity: 0.3, position: 'absolute', top: '10px', right: '10px' }} />
                  <p style={{ color: 'var(--text-dark)', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    "At Krishna International School, education is not merely about learning facts, but training the mind to think critically, act ethically, and innovate courageously. We empower every child to uncover their unique potential in a compassionate, technology-enabled environment."
                  </p>
                </div>

                <ul style={{ marginTop: '1.5rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <li style={listItemStyle}><CheckCircle2 size={16} color="var(--accent-teal)" /> Experiential learning focused on real-world problem solving</li>
                  <li style={listItemStyle}><CheckCircle2 size={16} color="var(--accent-teal)" /> Equal emphasis on competitive exam prep & sports mastery</li>
                  <li style={listItemStyle}><CheckCircle2 size={16} color="var(--accent-teal)" /> Safe, inclusive campus with 24/7 CCTV surveillance</li>
                </ul>
              </div>
            )}

            {/* Tab Content 2: Vision & Mission */}
            {activeTab === 'vision' && (
              <div id="vision" className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--royal-blue)', fontWeight: '700', marginBottom: '0.5rem' }}>
                    <Target size={20} /> OUR VISION
                  </div>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.975rem', lineHeight: 1.6 }}>
                    To be a globally recognized center of academic excellence that nurtures disciplined, creative, and empathetic future leaders who contribute meaningfully to society and global progress.
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold-dark)', fontWeight: '700', marginBottom: '0.5rem' }}>
                    <Compass size={20} /> OUR MISSION
                  </div>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.975rem', lineHeight: 1.6 }}>
                    To deliver holistic, value-based education combining rigorous CBSE curriculum with cutting-edge STEM technology, sports academies, and character building initiatives in an enriching environment.
                  </p>
                </div>
              </div>
            )}

            {/* Tab Content 3: Core Pillars */}
            {activeTab === 'pillars' && (
              <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={pillarCardStyle}>
                  <div style={pillarIconStyle('#1d4ed8')}><BookOpen size={20} color="#fff" /></div>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', fontSize: '1rem' }}>Academic Brilliance</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Conceptual clarity, CBSE curriculum, and Olympiad mentoring.</p>
                  </div>
                </div>

                <div style={pillarCardStyle}>
                  <div style={pillarIconStyle('#d97706')}><Sparkles size={20} color="#fff" /></div>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', fontSize: '1rem' }}>Technology & Innovation</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>AI coding labs, 3D printing, and smart digital classrooms.</p>
                  </div>
                </div>

                <div style={pillarCardStyle}>
                  <div style={pillarIconStyle('#0d9488')}><Heart size={20} color="#fff" /></div>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', fontSize: '1rem' }}>Character & Ethics</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Value education, community service, and leadership workshops.</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

const tabBtnStyle = (active) => ({
  flex: 1,
  padding: '0.65rem 0.5rem',
  background: active ? 'var(--bg-card)' : 'transparent',
  color: active ? 'var(--royal-blue)' : 'var(--text-muted)',
  fontWeight: active ? '700' : '600',
  fontSize: '0.875rem',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  boxShadow: active ? 'var(--shadow-sm)' : 'none',
  transition: 'all 0.2s ease'
});

const badgeBoxStyle = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border-light)',
  borderRadius: '16px',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  boxShadow: 'var(--shadow-sm)'
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: 'var(--text-dark)',
  fontSize: '0.875rem',
  fontWeight: '500'
};

const pillarCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '0.85rem 1rem',
  background: 'var(--bg-subtle)',
  borderRadius: '14px',
  border: '1px solid var(--border-light)'
};

const pillarIconStyle = (color) => ({
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  background: color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
});
