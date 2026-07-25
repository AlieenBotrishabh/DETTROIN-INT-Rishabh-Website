import React, { useState, useMemo } from 'react';
import { X, Calculator, Download, GraduationCap, Bus, Home, Clock } from 'lucide-react';

const feeData = {
  kg: { name: 'Nursery / KG', tuition: 32000, lab: 2000, dev: 5000 },
  primary: { name: 'Primary (Grades 1–5)', tuition: 42000, lab: 4000, dev: 6000 },
  middle: { name: 'Middle (Grades 6–8)', tuition: 48000, lab: 6000, dev: 7000 },
  secondary: { name: 'Secondary (Grades 9–10)', tuition: 56000, lab: 8000, dev: 8000 },
  srScience: { name: 'Sr. Secondary – Science (Gr. 11–12)', tuition: 68000, lab: 12000, dev: 10000 },
  srComm: { name: 'Sr. Secondary – Commerce/Humanities', tuition: 62000, lab: 8000, dev: 10000 },
};

const transportFees = {
  none: { label: 'No Transport (Self Drop/Pick)', fee: 0 },
  z1: { label: 'Zone 1 – Within 5 km (City Center)', fee: 12000 },
  z2: { label: 'Zone 2 – 5 to 12 km (GT Road / Ramghat)', fee: 18000 },
  z3: { label: 'Zone 3 – 12 to 20 km (Outer Aligarh)', fee: 24000 },
};

export default function FeeCalculatorModal({ isOpen, onClose }) {
  const [grade, setGrade] = useState('primary');
  const [zone, setZone] = useState('z1');
  const [hostel, setHostel] = useState(false);
  const [freq, setFreq] = useState('quarterly');

  if (!isOpen) return null;

  const g = feeData[grade];
  const transport = transportFees[zone].fee;
  const hostelFee = hostel ? 65000 : 0;
  const annual = g.tuition + g.lab + g.dev + transport + hostelFee;

  const installment = freq === 'annual' ? annual : freq === 'biannual' ? Math.round(annual / 2) : Math.round(annual / 4);
  const freqLabel = freq === 'annual' ? 'per year' : freq === 'biannual' ? 'every 6 months' : 'every quarter';

  const rows = [
    { label: 'Annual Tuition Fee', amount: g.tuition },
    { label: 'Lab, STEM & Smart Tech', amount: g.lab },
    { label: 'Sports & Development', amount: g.dev },
    ...(transport > 0 ? [{ label: 'Bus Transport Service', amount: transport }] : []),
    ...(hostelFee > 0 ? [{ label: 'Boarding Hostel (AC)', amount: hostelFee }] : []),
  ];

  return (
    <div className="modal-backdrop">
      <div className="modal-panel" style={{ maxWidth: '760px', width: '100%', padding: 0, overflow: 'hidden' }}>
        <button className="modal-close" onClick={onClose} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}><X size={18} /></button>

        {/* Header Banner */}
        <div style={{ background: 'var(--grad-navy)', padding: '2.25rem 2.5rem 1.75rem', position: 'relative', overflow: 'hidden' }}>
          <div className="glow-blob" style={{ width: 260, height: 260, top: -120, right: -80, background: 'var(--royal)', opacity: 0.18 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1 }}>
            <div className="icon-wrap icon-wrap-lg" style={{ background: 'rgba(26,86,219,0.25)', border: '1px solid rgba(96,165,250,0.4)' }}>
              <Calculator size={28} color="#60a5fa" />
            </div>
            <div>
              <span className="badge badge-inverted" style={{ marginBottom: '0.4rem', background: 'rgba(96,165,250,0.18)', color: '#93c5fd', border: '1px solid rgba(96,165,250,0.35)' }}>Interactive Fee Estimator</span>
              <h2 style={{ fontSize: '1.5rem', marginTop: '0.4rem', color: '#ffffff' }}>Dynamic Fee Structure Calculator</h2>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.15rem' }}>Transparent, itemized fee breakdown for Academic Year 2026-27</p>
            </div>
          </div>
        </div>

        <div style={{ padding: '2rem 2.5rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

          {/* Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label className="form-label"><GraduationCap size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />Grade Level</label>
              <select className="form-select" value={grade} onChange={e => setGrade(e.target.value)}>
                {Object.keys(feeData).map(k => <option key={k} value={k}>{feeData[k].name}</option>)}
              </select>
            </div>

            <div>
              <label className="form-label"><Bus size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />Transport Bus Zone</label>
              <select className="form-select" value={zone} onChange={e => setZone(e.target.value)}>
                {Object.keys(transportFees).map(k => <option key={k} value={k}>{transportFees[k].label}</option>)}
              </select>
            </div>

            <div>
              <label className="form-label"><Home size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />Boarding Hostel</label>
              <div onClick={() => setHostel(h => !h)} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                background: hostel ? 'var(--royal-muted)' : 'var(--bg-subtle)',
                border: hostel ? '1.5px solid var(--royal)' : '1.5px solid var(--border)',
                borderRadius: 'var(--r-md)', padding: '0.75rem 1rem', cursor: 'pointer',
                transition: 'var(--ease-fast)'
              }}>
                <div style={{
                  width: '20px', height: '20px', borderRadius: '4px',
                  background: hostel ? 'var(--royal)' : 'transparent',
                  border: hostel ? 'none' : '2px solid var(--border-strong)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  {hostel && <X size={13} color="#fff" />}
                </div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-heading)', fontWeight: '600' }}>
                  Include AC Boarding Hostel — ₹65,000/yr
                </span>
              </div>
            </div>

            <div>
              <label className="form-label"><Clock size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />Payment Frequency</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['quarterly', 'biannual', 'annual'].map(f => (
                  <button key={f} onClick={() => setFreq(f)} style={{
                    flex: 1, padding: '0.6rem 0.25rem',
                    borderRadius: 'var(--r-sm)', fontSize: '0.8rem', fontWeight: '700',
                    border: freq === f ? '1.5px solid var(--royal)' : '1.5px solid var(--border)',
                    background: freq === f ? 'var(--royal-muted)' : 'var(--bg-subtle)',
                    color: freq === f ? 'var(--royal)' : 'var(--text-muted)',
                    cursor: 'pointer', fontFamily: 'inherit', transition: 'var(--ease-fast)'
                  }}>
                    {f === 'quarterly' ? 'Quarterly' : f === 'biannual' ? 'Bi-Annual' : 'Annual'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="card-navy" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderRadius: 'var(--r-lg)' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                FEE BREAKDOWN — {g.name.toUpperCase()}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {rows.map(({ label, amount }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span style={{ color: '#94a3b8' }}>{label}</span>
                  <span style={{ color: '#fff', fontWeight: '700' }}>₹{amount.toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '0.85rem' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Total Annual Package</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#94a3b8' }}>₹{annual.toLocaleString('en-IN')}</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--r-md)', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Installment Amount ({freqLabel})</div>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#60a5fa', fontFamily: 'Outfit, sans-serif', marginTop: '0.15rem' }}>
                ₹{installment.toLocaleString('en-IN')}
              </div>
            </div>

            <button
              onClick={() => alert(`Fee quotation PDF generated for ${g.name}!\nAnnual: ₹${annual.toLocaleString('en-IN')}\nInstallment: ₹${installment.toLocaleString('en-IN')} ${freqLabel}`)}
              className="btn btn-gold btn-md"
              style={{ width: '100%' }}
            >
              <Download size={16} /> Download Quotation Slip
            </button>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}
