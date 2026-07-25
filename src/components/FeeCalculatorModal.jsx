import React, { useState } from 'react';
import { X, Calculator, Download, CheckCircle, Sparkles, RefreshCw } from 'lucide-react';

const gradeFeeStructure = {
  nursery: { name: 'Nursery / KG', tuition: 32000, lab: 2000, dev: 5000 },
  primary: { name: 'Primary (Grades 1-5)', tuition: 42000, lab: 4000, dev: 6000 },
  middle: { name: 'Middle (Grades 6-8)', tuition: 48000, lab: 6000, dev: 7000 },
  secondary: { name: 'Secondary (Grades 9-10)', tuition: 56000, lab: 8000, dev: 8000 },
  seniorScience: { name: 'Senior Science (Grades 11-12)', tuition: 68000, lab: 12000, dev: 10000 },
  seniorComm: { name: 'Senior Commerce/Humanities', tuition: 62000, lab: 8000, dev: 10000 }
};

const transportZones = {
  none: { name: 'No Transport (Self / Parent Drop)', fee: 0 },
  zone1: { name: 'Zone 1: Within 5 km (Krishna Nagar, City Center)', fee: 12000 },
  zone2: { name: 'Zone 2: 5 km to 12 km (GT Road, Ramghat Road)', fee: 18000 },
  zone3: { name: 'Zone 3: 12 km to 20 km (Outer Aligarh)', fee: 24000 }
};

export default function FeeCalculatorModal({ isOpen, onClose }) {
  const [selectedGrade, setSelectedGrade] = useState('primary');
  const [transportZone, setTransportZone] = useState('zone1');
  const [includeHostel, setIncludeHostel] = useState(false);
  const [paymentFrequency, setPaymentFrequency] = useState('quarterly'); // annual, bi-annual, quarterly

  if (!isOpen) return null;

  const baseGrade = gradeFeeStructure[selectedGrade];
  const transportFee = transportZones[transportZone].fee;
  const hostelFee = includeHostel ? 65000 : 0;
  const annualTotal = baseGrade.tuition + baseGrade.lab + baseGrade.dev + transportFee + hostelFee;

  let installmentFee = annualTotal;
  let installmentText = 'Annual One-time';
  if (paymentFrequency === 'bi-annual') {
    installmentFee = Math.round(annualTotal / 2);
    installmentText = 'Bi-Annual (Every 6 Months)';
  } else if (paymentFrequency === 'quarterly') {
    installmentFee = Math.round(annualTotal / 4);
    installmentText = 'Quarterly (Every 3 Months)';
  }

  return (
    <div style={modalBackdropStyle}>
      <div className="glass-card" style={{
        maxWidth: '720px',
        width: '100%',
        background: 'var(--bg-card)',
        padding: '2.5rem',
        borderRadius: '24px',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        
        {/* Close Button */}
        <button onClick={onClose} style={closeBtnStyle}>
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="badge-blue"><Calculator size={14} /> Interactive Estimator</span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginTop: '0.4rem' }}>
            Krishna International School Fee Calculator
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          {/* Left Controls */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Select Academic Grade Level</label>
              <select 
                value={selectedGrade} 
                onChange={(e) => setSelectedGrade(e.target.value)} 
                style={inputStyle}
              >
                {Object.keys(gradeFeeStructure).map(key => (
                  <option key={key} value={key}>{gradeFeeStructure[key].name}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Transport Bus Service Route</label>
              <select 
                value={transportZone} 
                onChange={(e) => setTransportZone(e.target.value)} 
                style={inputStyle}
              >
                {Object.keys(transportZones).map(key => (
                  <option key={key} value={key}>{transportZones[key].name}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Boarding / Hostel Facility</label>
              <div 
                onClick={() => setIncludeHostel(!includeHostel)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'var(--bg-subtle)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: includeHostel ? '2px solid var(--royal-blue)' : '1px solid var(--border-light)',
                  cursor: 'pointer'
                }}
              >
                <input type="checkbox" checked={includeHostel} onChange={() => {}} style={{ width: '18px', height: '18px' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: '600' }}>
                  Include AC Boarding Hostel (₹65,000/yr)
                </span>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Payment Frequency Breakdown</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={() => setPaymentFrequency('quarterly')}
                  style={freqBtnStyle(paymentFrequency === 'quarterly')}
                >
                  Quarterly
                </button>
                <button 
                  onClick={() => setPaymentFrequency('bi-annual')}
                  style={freqBtnStyle(paymentFrequency === 'bi-annual')}
                >
                  Bi-Annual
                </button>
                <button 
                  onClick={() => setPaymentFrequency('annual')}
                  style={freqBtnStyle(paymentFrequency === 'annual')}
                >
                  Annual
                </button>
              </div>
            </div>
          </div>

          {/* Right Summary Breakdown Box */}
          <div style={{
            background: 'linear-gradient(135deg, #0b192c 0%, #1e293b 100%)',
            color: '#fff',
            borderRadius: '20px',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ESTIMATED FEE STRUCTURE
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: '0.2rem 0 1rem 0' }}>
                {baseGrade.name}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '1rem' }}>
                <div style={breakdownRowStyle}>
                  <span style={{ color: '#94a3b8' }}>Annual Tuition Fee:</span>
                  <span style={{ fontWeight: '700' }}>₹{baseGrade.tuition.toLocaleString('en-IN')}</span>
                </div>
                <div style={breakdownRowStyle}>
                  <span style={{ color: '#94a3b8' }}>Lab & STEM Smart Tech:</span>
                  <span style={{ fontWeight: '700' }}>₹{baseGrade.lab.toLocaleString('en-IN')}</span>
                </div>
                <div style={breakdownRowStyle}>
                  <span style={{ color: '#94a3b8' }}>Sports & Development:</span>
                  <span style={{ fontWeight: '700' }}>₹{baseGrade.dev.toLocaleString('en-IN')}</span>
                </div>
                {transportFee > 0 && (
                  <div style={breakdownRowStyle}>
                    <span style={{ color: '#94a3b8' }}>Bus Transport Service:</span>
                    <span style={{ fontWeight: '700' }}>₹{transportFee.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {hostelFee > 0 && (
                  <div style={breakdownRowStyle}>
                    <span style={{ color: '#94a3b8' }}>Boarding Hostel:</span>
                    <span style={{ fontWeight: '700' }}>₹{hostelFee.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>
            </div>

            <div style={{ paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Total Annual Package: ₹{annualTotal.toLocaleString('en-IN')}</div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#60a5fa', margin: '0.2rem 0' }}>
                ₹{installmentFee.toLocaleString('en-IN')} <span style={{ fontSize: '0.85rem', fontWeight: '500', color: '#94a3b8' }}>/ {installmentText}</span>
              </div>

              <button 
                onClick={() => alert(`Fee quotation slip generated for ${baseGrade.name}! Amount: ₹${annualTotal.toLocaleString('en-IN')}`)}
                className="btn-gold" 
                style={{ width: '100%', marginTop: '1rem', padding: '0.65rem' }}
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

const modalBackdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.75)',
  backdropFilter: 'blur(8px)',
  zIndex: 2000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem'
};

const closeBtnStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  background: 'var(--bg-subtle)',
  border: 'none',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-dark)'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '700',
  color: 'var(--text-dark)',
  marginBottom: '0.35rem'
};

const inputStyle = {
  width: '100%',
  padding: '0.7rem 0.9rem',
  borderRadius: '12px',
  border: '1px solid var(--border-light)',
  background: 'var(--bg-main)',
  color: 'var(--text-dark)',
  fontSize: '0.9rem',
  outline: 'none'
};

const freqBtnStyle = (active) => ({
  flex: 1,
  padding: '0.5rem',
  fontSize: '0.8rem',
  fontWeight: '700',
  borderRadius: '10px',
  border: active ? '2px solid var(--royal-blue)' : '1px solid var(--border-light)',
  background: active ? 'rgba(29, 78, 216, 0.1)' : 'var(--bg-main)',
  color: active ? 'var(--royal-blue)' : 'var(--text-muted)',
  cursor: 'pointer'
});

const breakdownRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};
