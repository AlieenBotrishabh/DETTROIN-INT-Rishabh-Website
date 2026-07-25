import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Upload, Sparkles, GraduationCap, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const grades = ['Nursery / Playgroup', 'Kindergarten (LKG/UKG)', 'Primary (Grade 1–5)', 'Middle School (Grade 6–8)', 'Secondary (Grade 9–10)', 'Senior Secondary – Science', 'Senior Secondary – Commerce', 'Senior Secondary – Humanities'];

export default function AdmissionsModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [refId, setRefId] = useState(null);
  const [data, setData] = useState({
    studentName: '', dob: '', gender: 'Male', grade: 'Primary (Grade 1–5)',
    parentName: '', phone: '', email: '', address: '', prevSchool: ''
  });

  if (!isOpen) return null;

  const set = (k, v) => setData(prev => ({ ...prev, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = 'KIS-2026-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(id);
    setStep(4);
    try { confetti({ particleCount: 150, spread: 80, origin: { y: 0.55 } }); } catch {}
  };

  const reset = () => { setStep(1); setRefId(null); onClose(); setData({ studentName: '', dob: '', gender: 'Male', grade: 'Primary (Grade 1–5)', parentName: '', phone: '', email: '', address: '', prevSchool: '' }); };

  return (
    <div className="modal-backdrop">
      <div className="modal-panel" style={{ maxWidth: '640px', width: '100%', padding: '2.5rem' }}>
        <button className="modal-close" onClick={reset}><X size={18} /></button>

        <div style={{ marginBottom: '1.75rem' }}>
          <span className="badge badge-gold"><Sparkles size={12} /> Digital Application 2026-27</span>
          <h2 style={{ fontSize: '1.5rem', marginTop: '0.4rem', color: 'var(--text-heading)' }}>Admission Application Form</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Krishna International School Aligarh</p>
        </div>

        {/* Step Indicators */}
        {step < 4 && (
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', alignItems: 'center' }}>
            {['Student Info', 'Parent Details', 'Review & Submit'].map((label, i) => {
              const n = i + 1;
              const done = step > n;
              const active = step === n;
              return (
                <React.Fragment key={n}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      background: done ? 'var(--emerald)' : active ? 'var(--royal)' : 'var(--bg-muted)',
                      color: done || active ? '#fff' : 'var(--text-muted)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.8rem', fontWeight: '700', flexShrink: 0, transition: 'var(--ease-normal)'
                    }}>
                      {done ? <Check size={14} /> : n}
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: '600', color: active ? 'var(--royal)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>{label}</span>
                  </div>
                  {i < 2 && <div style={{ flex: 1, height: '2px', background: done ? 'var(--emerald)' : 'var(--border)', borderRadius: '1px', transition: 'var(--ease-normal)' }} />}
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <form onSubmit={e => { e.preventDefault(); setStep(2); }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label className="form-label">Student Full Name *</label>
                <input className="form-input" type="text" required value={data.studentName} onChange={e => set('studentName', e.target.value)} placeholder="e.g. Aarav Sharma" />
              </div>
              <div>
                <label className="form-label">Date of Birth *</label>
                <input className="form-input" type="date" required value={data.dob} onChange={e => set('dob', e.target.value)} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label className="form-label">Gender *</label>
                <select className="form-select" value={data.gender} onChange={e => set('gender', e.target.value)}>
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
              <div>
                <label className="form-label">Grade Applying For *</label>
                <select className="form-select" value={data.grade} onChange={e => set('grade', e.target.value)}>
                  {grades.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <button type="submit" className="btn btn-primary btn-md">Next: Parent Details <ArrowRight size={16} /></button>
            </div>
          </form>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={e => { e.preventDefault(); setStep(3); }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label className="form-label">Parent/Guardian Name *</label>
                <input className="form-input" type="text" required value={data.parentName} onChange={e => set('parentName', e.target.value)} placeholder="e.g. Rajesh Sharma" />
              </div>
              <div>
                <label className="form-label">Mobile Number *</label>
                <input className="form-input" type="tel" required value={data.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 9876543210" />
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label className="form-label">Email Address *</label>
              <input className="form-input" type="email" required value={data.email} onChange={e => set('email', e.target.value)} placeholder="parent@example.com" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Residential Address *</label>
              <input className="form-input" type="text" required value={data.address} onChange={e => set('address', e.target.value)} placeholder="House No., Colony, City" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" className="btn btn-outline btn-md" onClick={() => setStep(1)}>Back</button>
              <button type="submit" className="btn btn-primary btn-md">Review & Submit <ArrowRight size={16} /></button>
            </div>
          </form>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label className="form-label">Previous School (If Any)</label>
              <input className="form-input" type="text" value={data.prevSchool} onChange={e => set('prevSchool', e.target.value)} placeholder="e.g. DPS Aligarh" />
            </div>

            <div style={{ border: '2px dashed var(--royal)', borderRadius: 'var(--r-md)', padding: '1.5rem', textAlign: 'center', marginBottom: '1.25rem', background: 'var(--royal-muted)' }}>
              <Upload size={26} color="var(--royal)" style={{ margin: '0 auto 0.4rem' }} />
              <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--royal)' }}>Upload Birth Certificate / Previous Report Card</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PDF, JPG, PNG — Max 5MB (Simulated Upload)</div>
            </div>

            <div style={{ background: 'var(--gold-muted)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 'var(--r-md)', padding: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.825rem', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>📋 Summary</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Grade: <strong>{data.grade}</strong> · Student: <strong>{data.studentName || '—'}</strong> · Parent: <strong>{data.parentName || '—'}</strong> · Phone: <strong>{data.phone || '—'}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" className="btn btn-outline btn-md" onClick={() => setStep(2)}>Back</button>
              <button type="submit" className="btn btn-gold btn-md">Submit Application 🎉</button>
            </div>
          </form>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--teal), var(--emerald))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', boxShadow: 'var(--shadow-teal)' }}>
              <CheckCircle size={38} />
            </div>
            <h3 style={{ fontSize: '1.65rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>Application Submitted! 🎊</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Our admissions team will contact you at <strong>{data.phone || '+91-XXXXXXXXXX'}</strong> within <strong>24 working hours</strong>.
            </p>
            <div style={{ border: '2px dashed var(--royal)', borderRadius: 'var(--r-md)', padding: '1.25rem', maxWidth: '360px', margin: '0 auto 1.75rem', background: 'var(--royal-muted)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Application Reference ID</div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--royal)', fontFamily: 'Outfit, sans-serif', marginTop: '0.2rem' }}>{refId}</div>
            </div>
            <button onClick={reset} className="btn btn-primary btn-md">Close & Return to Website</button>
          </div>
        )}
      </div>
    </div>
  );
}
