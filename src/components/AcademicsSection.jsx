import React, { useState } from 'react';
import { BookOpen, Cpu, Sparkles, Download, CheckCircle, GraduationCap, BrainCircuit, Microscope, Atom, ArrowRight, Zap } from 'lucide-react';

const wings = [
  {
    id: 'kg', label: 'Pre-Primary', sublabel: 'Nursery, LKG & UKG (Ages 3-5)',
    icon: Sparkles, color: 'var(--crimson)', bg: 'rgba(225,29,72,0.1)',
    desc: 'Nurturing curiosity through Montessori play-way learning, phonics, sensory arts, and motor skill development in a vibrant, child-safe environment.',
    features: ['Montessori Activity Centers', 'Phonics & Early English', 'Sensory & Creative Arts', 'Air-Conditioned Classrooms'],
    img: 'https://images.unsplash.com/photo-1587691592057-2e020764835e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'primary', label: 'Primary School', sublabel: 'Grades I – V (Ages 6-10)',
    icon: BookOpen, color: 'var(--teal)', bg: 'rgba(13,148,136,0.1)',
    desc: 'Building strong foundations in literacy, numeracy, environmental studies, and introducing Scratch & block-based coding concepts.',
    features: ['CBSE Foundational Curriculum', 'Scratch & Block Coding', 'Olympiad & Abacus Training', 'Public Speaking & Dramatics'],
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'middle', label: 'Middle School', sublabel: 'Grades VI – VIII (Ages 11-13)',
    icon: BrainCircuit, color: 'var(--gold-dark)', bg: 'var(--gold-muted)',
    desc: 'Fostering analytical thinking, hands-on science experiments, Lego Robotics, Arduino, and foreign language options.',
    features: ['Hands-on Physics/Chemistry/Bio Labs', 'Lego Robotics & Arduino', 'French & Sanskrit Electives', 'NTSE & Science Olympiad Prep'],
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'senior', label: 'Senior Secondary', sublabel: 'Grades IX – XII (Ages 14-17)',
    icon: GraduationCap, color: 'var(--royal)', bg: 'var(--royal-muted)',
    desc: 'Specialized CBSE streams with integrated coaching for JEE, NEET, CUET, NDA along with career counseling and college guidance.',
    features: ['Science Stream (PCM/PCB/CS+AI)', 'Commerce Stream (Accountancy, B.ST)', 'Humanities Stream (Psychology, Pol.Sci)', 'JEE/NEET Integrated Test Series'],
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
  },
];

export default function AcademicsSection({ onOpenAdmissions }) {
  const [active, setActive] = useState('senior');
  const wing = wings.find(w => w.id === active);
  const WingIcon = wing.icon;

  return (
    <section id="academics" className="section-pad" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow"><GraduationCap size={14} /> Academic Spectrum</div>
          <h2 className="section-title">CBSE Curriculum Designed for <span className="text-gradient">21st-Century Success</span></h2>
          <p className="section-desc">
            From playful early childhood learning to specialized senior secondary streams — every program is crafted for mastery, curiosity, and career readiness.
          </p>
          <div className="divider" />
        </div>

        {/* Wing Selector */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {wings.map(w => {
            const Icon = w.icon;
            const isActive = w.id === active;
            return (
              <button key={w.id} onClick={() => setActive(w.id)} style={{
                background: isActive ? 'var(--bg-card)' : 'transparent',
                border: isActive ? `2px solid ${w.color}` : '1px solid var(--border)',
                padding: '1.25rem 1rem', borderRadius: 'var(--r-lg)',
                textAlign: 'left', cursor: 'pointer',
                boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                transition: 'var(--ease-normal)', display: 'flex', alignItems: 'center', gap: '0.85rem',
                fontFamily: 'inherit'
              }}>
                <div className="icon-wrap icon-wrap-md" style={{ background: isActive ? w.color : 'var(--bg-muted)', flexShrink: 0 }}>
                  <Icon size={20} color={isActive ? '#fff' : 'var(--text-muted)'} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-heading)', fontFamily: 'Outfit, sans-serif' }}>{w.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{w.sublabel}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Wing Details Card */}
        <div className="card" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: wing.color, fontWeight: '800', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                <WingIcon size={15} /> {wing.sublabel}
              </div>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-heading)', marginBottom: '0.85rem' }}>{wing.label}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{wing.desc}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {wing.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-body)', fontWeight: '600' }}>
                    <CheckCircle size={15} color={wing.color} style={{ flexShrink: 0, marginTop: '2px' }} /> {f}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenAdmissions} className="btn btn-primary btn-md">
                  Apply for {wing.label} <ArrowRight size={16} />
                </button>
                <button onClick={() => alert('Downloading syllabus PDF...')} className="btn btn-outline btn-md">
                  <Download size={16} /> Download Syllabus
                </button>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src={wing.img} alt={wing.label} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* STEM AI Lab Spotlight Banner */}
        <div className="card-navy" style={{ padding: '3rem 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-inverted" style={{ marginBottom: '1rem' }}>
                <Cpu size={13} /> Krishna AI & Robotics Innovation Hub
              </span>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.85rem', lineHeight: 1.25 }}>
                Next-Gen <span style={{ color: '#f59e0b' }}>STEM Lab</span> for Tomorrow's Innovators
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                State-of-the-art facility featuring 3D printers, Python AI coding workstations, humanoid robots, IoT sensor kits, drone aviation bay, and electronic circuit design.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {[{ icon: Microscope, label: 'IoT & Sensor Tech' }, { icon: Atom, label: 'Drone Aviation Lab' }, { icon: BrainCircuit, label: 'ML & Python AI' }, { icon: Zap, label: '3D Printing Studio' }].map(({ icon: Icon, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontWeight: '600', fontSize: '0.875rem' }}>
                    <Icon size={16} /> {label}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { val: '500+', label: 'Students Trained in AI Coding' },
                { val: '12+', label: 'National Robotics Awards' },
                { val: '3D', label: 'Printing & Prototyping Lab' },
                { val: '24/7', label: 'Internet-Connected Workstations' },
              ].map(({ val, label }) => (
                <div key={val} style={{ background: 'rgba(255,255,255,0.06)', padding: '1.25rem', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#60a5fa', fontFamily: 'Outfit, sans-serif' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
