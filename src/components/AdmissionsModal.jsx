import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, User, Phone, Mail, GraduationCap, Upload, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdmissionsModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    gradeApplying: 'Grade I',
    parentName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: ''
  });
  const [submittedId, setSubmittedId] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = 'KIS-2026-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedId(randomId);
    setStep(4);

    // Fire Celebration Confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  const handleReset = () => {
    setStep(1);
    setSubmittedId(null);
    onClose();
  };

  return (
    <div style={modalBackdropStyle}>
      <div className="glass-card" style={{
        maxWidth: '680px',
        width: '100%',
        background: 'var(--bg-card)',
        padding: '2.5rem',
        borderRadius: '24px',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        
        {/* Close Button */}
        <button onClick={handleReset} style={closeBtnStyle}>
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <span className="badge-gold"><Sparkles size={12} /> Digital Admission Form 2026-27</span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginTop: '0.4rem' }}>
            Krishna International School Admission Application
          </h2>
        </div>

        {/* Step Progress Tracker */}
        {step <= 3 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', left: 0, right: 0, height: '2px', background: 'var(--border-light)', zIndex: 1 }} />
            
            <div style={stepIndicatorStyle(step >= 1)}>1. Student Info</div>
            <div style={stepIndicatorStyle(step >= 2)}>2. Parent Details</div>
            <div style={stepIndicatorStyle(step >= 3)}>3. Academic History</div>
          </div>
        )}

        {/* Step 1: Student Information */}
        {step === 1 && (
          <form onSubmit={handleNext}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Student Full Name *</label>
                <input 
                  type="text" 
                  name="studentName" 
                  required 
                  value={formData.studentName}
                  onChange={handleChange} 
                  placeholder="e.g. Aarav Sharma" 
                  style={inputStyle} 
                />
              </div>

              <div>
                <label style={labelStyle}>Date of Birth *</label>
                <input 
                  type="date" 
                  name="dob" 
                  required 
                  value={formData.dob}
                  onChange={handleChange} 
                  style={inputStyle} 
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Gender *</label>
                <select name="gender" value={formData.gender} onChange={handleChange} style={inputStyle}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Grade Applying For *</label>
                <select name="gradeApplying" value={formData.gradeApplying} onChange={handleChange} style={inputStyle}>
                  <option value="Nursery">Nursery / Playgroup</option>
                  <option value="LKG/UKG">Kindergarten (LKG/UKG)</option>
                  <option value="Grade I-V">Primary (Grade 1 - 5)</option>
                  <option value="Grade VI-VIII">Middle School (Grade 6 - 8)</option>
                  <option value="Grade IX-X">Secondary (Grade 9 - 10)</option>
                  <option value="Grade XI-XII Science">Senior Secondary Science</option>
                  <option value="Grade XI-XII Commerce">Senior Secondary Commerce</option>
                  <option value="Grade XI-XII Humanities">Senior Secondary Humanities</option>
                </select>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <button type="submit" className="btn-primary">
                Next: Parent Details <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Parent Information */}
        {step === 2 && (
          <form onSubmit={handleNext}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Parent / Guardian Name *</label>
                <input 
                  type="text" 
                  name="parentName" 
                  required 
                  value={formData.parentName}
                  onChange={handleChange} 
                  placeholder="e.g. Rajesh Sharma" 
                  style={inputStyle} 
                />
              </div>

              <div>
                <label style={labelStyle}>Mobile Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange} 
                  placeholder="+91 9876543210" 
                  style={inputStyle} 
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Email Address *</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange} 
                placeholder="parent@example.com" 
                style={inputStyle} 
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Residential Address (Aligarh/City) *</label>
              <input 
                type="text" 
                name="address" 
                required 
                value={formData.address}
                onChange={handleChange} 
                placeholder="House No, Colony, City" 
                style={inputStyle} 
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={() => setStep(1)} className="btn-outline">Back</button>
              <button type="submit" className="btn-primary">
                Next: Documents & Review <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Academic History & Submit */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Previous School Attended (If Applicable)</label>
              <input 
                type="text" 
                name="previousSchool" 
                value={formData.previousSchool}
                onChange={handleChange} 
                placeholder="e.g. St. Fidelis / DPS Aligarh" 
                style={inputStyle} 
              />
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', border: '1px dashed var(--royal-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
              <Upload size={28} color="var(--royal-blue)" style={{ margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: '600' }}>Upload Birth Certificate / Report Card (Simulator)</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PDF, JPG, PNG up to 5MB</div>
            </div>

            <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-dark)', fontWeight: '600' }}>
                📋 Application Summary:
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Applying for: <strong>{formData.gradeApplying}</strong> | Student: <strong>{formData.studentName || 'Aarav'}</strong> | Parent: <strong>{formData.parentName || 'Rajesh'}</strong> ({formData.phone})
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={() => setStep(2)} className="btn-outline">Back</button>
              <button type="submit" className="btn-gold" style={{ padding: '0.85rem 2rem' }}>
                Submit Application Now 🎉
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Submission Confirmation & Reference ID */}
        {step === 4 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0d9488, #10b981)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto',
              boxShadow: '0 8px 24px rgba(13, 148, 136, 0.3)'
            }}>
              <CheckCircle size={38} />
            </div>

            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
              Application Successfully Submitted!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Thank you for choosing Krishna International School. Our admissions desk will contact you within 24 hours.
            </p>

            <div style={{
              background: 'var(--bg-subtle)',
              border: '2px dashed var(--royal-blue)',
              padding: '1.25rem',
              borderRadius: '16px',
              maxWidth: '380px',
              margin: '0 auto 1.5rem auto'
            }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Application Reference Number
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--royal-blue)', marginTop: '0.2rem' }}>
                {submittedId}
              </div>
            </div>

            <button onClick={handleReset} className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
              Done & Close Window
            </button>
          </div>
        )}

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

const stepIndicatorStyle = (active) => ({
  position: 'relative',
  zIndex: 2,
  background: active ? 'var(--royal-blue)' : 'var(--bg-subtle)',
  color: active ? '#fff' : 'var(--text-muted)',
  padding: '0.35rem 0.85rem',
  borderRadius: '9999px',
  fontSize: '0.8rem',
  fontWeight: '700',
  boxShadow: active ? 'var(--shadow-sm)' : 'none'
});
