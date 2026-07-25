import React from 'react';
import {
  FileText, CheckCircle2, UserCheck, Calendar, ArrowRight,
  Calculator, Sparkles
} from 'lucide-react';
import campusPhoto from '../assets/campus-building.jpg';

const admissionSteps = [
  {
    step: '01',
    icon: FileText,
    title: 'Online Registration',
    desc: 'Fill out the digital application form or pick up a prospectus from the school office.'
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Interaction & Proficiency Test',
    desc: 'Student interaction / assessment test evaluating baseline academic aptitude.'
  },
  {
    step: '03',
    icon: CheckCircle2,
    title: 'Document Verification',
    desc: 'Submit birth certificate, previous report cards, Aadhaar card, and passport photos.'
  },
  {
    step: '04',
    icon: Calendar,
    title: 'Fee Payment & Enrolment',
    desc: 'Receive provisional admission letter and complete fee deposit to confirm seat.'
  }
];

export default function AdmissionsSection({ onOpenAdmissions, onOpenFeeCalculator }) {
  return (
    <section id="admissions" className="section-pad" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow"><Sparkles size={14} /> Admissions Open 2026-27</div>
          <h2 className="section-title">Join the <span className="text-gradient">Krishna International School</span> Family</h2>
          <p className="section-desc">
            We welcome applications for Nursery through Grade XII. Experience a transparent, hassle-free digital admission process.
          </p>
          <div className="divider" />
        </div>

        {/* Admission Steps Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {admissionSteps.map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="card" style={{ padding: '2rem 1.5rem', position: 'relative' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'var(--royal-muted)',
                position: 'absolute',
                top: '1rem',
                right: '1.25rem',
                fontFamily: 'Outfit, sans-serif',
              }}>
                {step}
              </div>
              <div className="icon-wrap icon-wrap-md" style={{ background: 'var(--royal-muted)', marginBottom: '1rem' }}>
                <Icon size={20} color="var(--royal)" />
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Dual Interactive Cards: Online Form & Dynamic Fee Calculator */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

          {/* Card 1: Apply Online — with campus photo background */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--r-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            minHeight: '360px',
            display: 'flex',
          }}>
            <img
              src={campusPhoto}
              alt="Krishna International School campus"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(160deg, rgba(3,12,28,0.96) 10%, rgba(11,25,44,0.9) 55%, rgba(26,86,219,0.55) 100%)',
            }} />
            <div style={{ position: 'relative', zIndex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>
                  <FileText size={14} /> Digital Application
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.75rem' }}>Start Online Admission</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: '420px' }}>
                  Apply digitally in less than 5 minutes. Instant registration receipt and reference ID provided upon submission.
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button onClick={onOpenAdmissions} className="btn btn-gold btn-lg">
                  Fill Admission Form <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Fee Calculator */}
          <div className="card" style={{
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <div className="icon-wrap icon-wrap-lg" style={{ background: 'var(--royal-muted)', marginBottom: '1.25rem' }}>
                <Calculator size={26} color="var(--royal)" />
              </div>
              <span className="badge badge-royal" style={{ marginBottom: '1rem' }}>
                <Calculator size={14} /> Transparent Pricing
              </span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>Dynamic Fee Calculator</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Select student grade level, day scholar vs hostel options, and bus route zones for an instant transparent fee breakdown.
              </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button onClick={onOpenFeeCalculator} className="btn btn-primary btn-lg">
                Calculate Fees Now <Calculator size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
