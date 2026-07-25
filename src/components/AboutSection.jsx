import React, { useState } from 'react';
import { Award, Target, Compass, Heart, ShieldCheck, CheckCircle2, Quote, BookOpen, Users, Sparkles, Cpu, Leaf } from 'lucide-react';
import campusPhoto from '../assets/campus-building.jpg';

const tabs = ['principal', 'vision', 'pillars'];
const tabLabels = { principal: "Principal's Desk", vision: 'Vision & Mission', pillars: 'Core Pillars' };

const pillars = [
  { icon: BookOpen, color: 'var(--royal)', bg: 'var(--royal-muted)', label: 'Academic Brilliance', desc: 'Conceptual clarity, CBSE curriculum mastery, and Olympiad coaching.' },
  { icon: Cpu, color: 'var(--teal)', bg: 'rgba(13,148,136,0.1)', label: 'Tech & Innovation', desc: 'AI coding labs, 3D printing hubs, and smart digital classrooms.' },
  { icon: Heart, color: 'var(--crimson)', bg: 'rgba(225,29,72,0.1)', label: 'Character & Ethics', desc: 'Value education, community service, and leadership workshops.' },
  { icon: Leaf, color: 'var(--emerald)', bg: 'rgba(16,185,129,0.1)', label: 'Holistic Wellness', desc: 'Sports, arts, yoga, and mental wellness programs for all grades.' },
];

const accreditations = [
  { icon: ShieldCheck, label: 'CBSE Affiliated', sub: '#2132415', color: 'var(--royal)', bg: 'var(--royal-muted)' },
  { icon: Award, label: 'ISO 9001:2015', sub: 'Certified Quality', color: 'var(--gold-dark)', bg: 'var(--gold-muted)' },
  { icon: Sparkles, label: 'STEM Excellence', sub: 'AI & Robotics Hub', color: 'var(--teal)', bg: 'rgba(13,148,136,0.1)' },
  { icon: Users, label: '1 : 20 Ratio', sub: 'Faculty to Student', color: 'var(--violet)', bg: 'rgba(124,58,237,0.1)' },
];

export default function AboutSection() {
  const [tab, setTab] = useState('principal');

  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg-page)' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow"><Sparkles size={14} /> About Krishna International School</div>
          <h2 className="section-title">25 Years of <span className="text-gradient">Educational Excellence</span></h2>
          <p className="section-desc">
            Founded with a vision to transform education in Aligarh, KIS blends CBSE academics with innovation, sports, and strong values.
          </p>
          <div className="divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* LEFT: Campus photo + accreditation badges */}
          <div>
            <div style={{ position: 'relative', borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', marginBottom: '1.75rem' }}>
              <img
                src={campusPhoto}
                alt="Krishna International School Aligarh Campus"
                style={{ width: '100%', height: '340px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.5rem',
                background: 'linear-gradient(to top, rgba(3,12,28,0.97), transparent)'
              }}>
                <div className="badge badge-inverted" style={{ marginBottom: '0.4rem' }}>5-Acre Smart Campus</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff' }}>Krishna Nagar, G.T. Road, Aligarh, U.P.</div>
              </div>
            </div>

            {/* Accreditation Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {accreditations.map(({ icon: Icon, label, sub, color, bg }) => (
                <div key={label} className="card" style={{ padding: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="icon-wrap icon-wrap-md" style={{ background: bg }}>
                    <Icon size={22} color={color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-heading)' }}>{label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Tabbed content */}
          <div>
            <div className="tabs-bar" style={{ marginBottom: '1.75rem' }}>
              {tabs.map(t => (
                <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
                  {tabLabels[t]}
                </button>
              ))}
            </div>

            {/* Principal Tab */}
            {tab === 'principal' && (
              <div id="principal" className="card animate-fade-up" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                    alt="Principal"
                    style={{ width: '68px', height: '68px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--royal)', flexShrink: 0 }}
                  />
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)' }}>Dr. Sunita Sharma</h3>
                    <p style={{ color: 'var(--royal)', fontWeight: '600', fontSize: '0.82rem' }}>Principal — M.Sc, Ph.D in Pedagogy</p>
                    <span className="badge badge-gold" style={{ marginTop: '0.3rem', whiteSpace: 'normal', textAlign: 'left', lineHeight: 1.4 }}>20+ Years Educational Leadership</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--r-md)', borderLeft: '4px solid var(--royal)', position: 'relative', marginBottom: '1.25rem' }}>
                  <Quote size={20} color="var(--royal)" style={{ opacity: 0.2, position: 'absolute', top: 8, right: 8 }} />
                  <p style={{ color: 'var(--text-body)', fontStyle: 'italic', fontSize: '0.93rem', lineHeight: 1.7 }}>
                    "At KIS, we believe education is not just about acquiring knowledge — it's about developing the courage to innovate, the empathy to lead, and the discipline to achieve. Every child who walks through our gates has unlimited potential."
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Experiential, inquiry-based learning methodology',
                    'Equal emphasis on academics, sports, and arts',
                    '24/7 CCTV monitored, fully secure campus',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-body)', fontWeight: '500' }}>
                      <CheckCircle2 size={16} color="var(--teal)" style={{ flexShrink: 0 }} /> {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vision Tab */}
            {tab === 'vision' && (
              <div id="vision" className="card animate-fade-up" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--royal)', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
                    <Target size={16} /> Our Vision
                  </div>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                    To be a globally recognized center of academic excellence, nurturing disciplined, creative, and empathetic future leaders who contribute meaningfully to society and global progress.
                  </p>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-dark)', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
                    <Compass size={16} /> Our Mission
                  </div>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                    To deliver holistic, value-based education combining rigorous CBSE curriculum with STEM innovation, sports academies, and character-building initiatives in a safe, enriching, and tech-enabled environment.
                  </p>
                </div>
              </div>
            )}

            {/* Pillars Tab */}
            {tab === 'pillars' && (
              <div className="card animate-fade-up" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {pillars.map(({ icon: Icon, color, bg, label, desc }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--r-md)', border: '1px solid var(--border)', transition: 'var(--ease-normal)' }}>
                    <div className="icon-wrap icon-wrap-md" style={{ background: bg, flexShrink: 0 }}>
                      <Icon size={22} color={color} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', marginBottom: '0.2rem' }}>{label}</h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
