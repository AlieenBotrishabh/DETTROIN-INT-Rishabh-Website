import React from 'react';
import { 
  FileText, CheckCircle2, UserCheck, Calendar, ArrowRight, 
  Calculator, Download, Sparkles, HelpCircle 
} from 'lucide-react';

const admissionSteps = [
  {
    step: '01',
    title: 'Online Registration',
    desc: 'Fill out the digital application form or pick up a prospectus from the school office.'
  },
  {
    step: '02',
    title: 'Interaction & Proficiency Test',
    desc: 'Student interaction / assessment test evaluating baseline academic aptitude.'
  },
  {
    step: '03',
    title: 'Document Verification',
    desc: 'Submit birth certificate, previous report cards, Aadhaar card, and passport photos.'
  },
  {
    step: '04',
    title: 'Fee Payment & Enrolment',
    desc: 'Receive provisional admission letter and complete fee deposit to confirm seat.'
  }
];

export default function AdmissionsSection({ onOpenAdmissions, onOpenFeeCalculator }) {
  return (
    <section id="admissions" style={{ padding: '6rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <Sparkles size={16} color="#d97706" /> Admissions Open 2026-27
          </div>
          <h2 className="section-title">Join the Krishna International School Family</h2>
          <p className="section-desc">
            We welcome applications for Nursery through Grade XII. Experience a transparent, hassle-free digital admission process.
          </p>
        </div>

        {/* Admission Steps Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {admissionSteps.map((s, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem 1.5rem', position: 'relative' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'rgba(29, 78, 216, 0.15)',
                position: 'absolute',
                top: '1rem',
                right: '1.25rem'
              }}>
                {s.step}
              </div>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--royal-blue)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '0.875rem',
                marginBottom: '1rem'
              }}>
                {s.step}
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Dual Interactive Cards: Online Form & Dynamic Fee Calculator */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Card 1: Apply Online */}
          <div style={{
            background: 'linear-gradient(135deg, #0b192c 0%, #1d4ed8 100%)',
            borderRadius: '24px',
            padding: '2.5rem',
            color: '#fff',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between'
          }}>
            <div>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <FileText size={14} /> DIGITAL APPLICATION
              </div>
              <h3 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.75rem' }}>Start Online Admission</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Apply digitally in less than 5 minutes. Instant registration receipt and reference ID provided upon submission.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenAdmissions} className="btn-gold" style={{ padding: '0.85rem 1.75rem' }}>
                Fill Admission Form <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Card 2: Fee Calculator */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between'
          }}>
            <div>
              <div className="badge-blue" style={{ marginBottom: '1rem' }}>
                <Calculator size={14} /> TRANSPARENT PRICING
              </div>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Dynamic Fee Calculator</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Select student grade level, day scholar vs hostel options, and bus route zones for an instant transparent fee breakdown.
              </p>
            </div>

            <div>
              <button onClick={onOpenFeeCalculator} className="btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                Calculate Fees Now <Calculator size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
