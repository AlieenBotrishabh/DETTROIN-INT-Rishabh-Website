import React, { useState } from 'react';
import { 
  BookOpen, Cpu, Sparkles, Download, CheckCircle, GraduationCap, 
  BrainCircuit, Microscope, Atom, FileText, ArrowRight 
} from 'lucide-react';

const academicWings = [
  {
    id: 'kindergarten',
    title: 'Pre-Primary (Kindergarten)',
    subtitle: 'Nursery, LKG & UKG (Ages 3-5)',
    icon: Sparkles,
    color: '#e11d48',
    description: 'Nurturing curiosity through play-way learning, Montessori activity centers, phonics, and motor skill development in a safe, vibrant space.',
    features: [
      'Interactive Montessori Play Labs',
      'Phonics & Early English Communication',
      'Sensory & Creative Arts Workshops',
      'Air-conditioned Child-Friendly Classrooms'
    ]
  },
  {
    id: 'primary',
    title: 'Primary School',
    subtitle: 'Grades I to V (Ages 6-10)',
    icon: BookOpen,
    color: '#0d9488',
    description: 'Building strong foundations in literacy, numerical reasoning, environmental studies, and foundational computer coding concepts.',
    features: [
      'CBSE Foundational Curriculum',
      'Scratch & Block-Based Coding',
      'Olympiad & Abacus Training',
      'Public Speaking & Dramatics'
    ]
  },
  {
    id: 'middle',
    title: 'Middle School',
    subtitle: 'Grades VI to VIII (Ages 11-13)',
    icon: BrainCircuit,
    color: '#d97706',
    description: 'Fostering analytical thinking, hands-on lab experiments, robotics assembly, foreign language options, and inter-school debates.',
    features: [
      'Hands-on Physics, Chemistry & Bio Labs',
      'Lego Robotics & Arduino Microcontrollers',
      'French & Sanskrit Language Electives',
      'NTSE & Junior Science Olympiad Prep'
    ]
  },
  {
    id: 'senior',
    title: 'Senior Secondary',
    subtitle: 'Grades IX to XII (Ages 14-17)',
    icon: GraduationCap,
    color: '#1d4ed8',
    description: 'Specialized CBSE academic streams with integrated coaching for JEE, NEET, CUET, and NDA along with career counseling.',
    features: [
      'Science Stream (PCM / PCB / CS AI)',
      'Commerce Stream (Accountancy, Economics, B.ST)',
      'Humanities Stream (Psychology, Pol Science)',
      'JEE / NEET Integrated Test Series'
    ]
  }
];

export default function AcademicsSection({ onOpenAdmissions }) {
  const [activeWing, setActiveWing] = useState('senior');

  const wing = academicWings.find(w => w.id === activeWing);
  const WingIcon = wing.icon;

  return (
    <section id="academics" style={{ padding: '6rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <GraduationCap size={16} color="#1d4ed8" /> Academic Spectrum & Excellence
          </div>
          <h2 className="section-title">CBSE Curriculum Designed for 21st-Century Success</h2>
          <p className="section-desc">
            From foundational early childhood learning to specialized senior secondary streams, our curriculum balances conceptual mastery with futuristic skills.
          </p>
        </div>

        {/* Academic Wing Selector Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {academicWings.map(w => {
            const Icon = w.icon;
            const isSelected = w.id === activeWing;
            return (
              <button
                key={w.id}
                onClick={() => setActiveWing(w.id)}
                style={{
                  background: isSelected ? 'var(--bg-card)' : 'transparent',
                  border: isSelected ? `2px solid ${w.color}` : '1px solid var(--border-light)',
                  padding: '1.25rem 1rem',
                  borderRadius: '18px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: isSelected ? w.color : 'rgba(100,116,139,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? '#fff' : 'var(--text-muted)',
                  flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark)' }}>{w.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{w.subtitle}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Academic Wing Feature Card */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: wing.color, fontWeight: '700', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                <WingIcon size={18} /> {wing.subtitle}
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>{wing.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                {wing.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {wing.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: '600' }}>
                    <CheckCircle size={16} color={wing.color} /> {feat}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenAdmissions} className="btn-primary">
                  Admissions Open for {wing.title} <ArrowRight size={16} />
                </button>
                <button className="btn-outline" onClick={() => alert('Brochure download simulated! Downloading Academic Prospectus PDF...')}>
                  <Download size={16} /> Download Syllabus PDF
                </button>
              </div>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img 
                src={
                  activeWing === 'kindergarten' 
                    ? "https://images.unsplash.com/photo-1587691592057-2e020764835e?auto=format&fit=crop&w=800&q=80"
                    : activeWing === 'primary'
                    ? "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                    : activeWing === 'middle'
                    ? "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    : "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                }
                alt={wing.title} 
                style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* STEM & AI Innovation Spotlight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0b192c 0%, #1e293b 100%)',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          color: '#ffffff',
          boxShadow: 'var(--shadow-lg)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <div>
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <Cpu size={14} /> FUTURE READY LABS
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
              Krishna Artificial Intelligence & Robotics Lab
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              In partnership with leading tech educators, KIS features an advanced STEM lab equipped with 3D printers, humanoid robots, IoT sensor kits, and Python coding workstations.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', fontWeight: '600', fontSize: '0.9rem' }}>
                <Microscope size={18} /> IoT & Sensor Tech
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', fontWeight: '600', fontSize: '0.9rem' }}>
                <Atom size={18} /> Drone Aviation Lab
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', fontWeight: '600', fontSize: '0.9rem' }}>
                <BrainCircuit size={18} /> Machine Learning Basics
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#60a5fa' }}>500+</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.2rem' }}>Students Trained in Coding & AI</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#f59e0b' }}>12+</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.2rem' }}>National Robotics Awards</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
