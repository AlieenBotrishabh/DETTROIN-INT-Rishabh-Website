import React, { useState } from 'react';
import { X, UserCheck, Lock, CheckCircle, ArrowRight, Shield, Award, BookOpen, Clock } from 'lucide-react';

export default function PortalLoginModal({ isOpen, onClose }) {
  const [role, setRole] = useState('student');
  const [username, setUsername] = useState('KIS-2026-8492');
  const [password, setPassword] = useState('••••••••');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    onClose();
  };

  return (
    <div style={modalBackdropStyle}>
      <div className="glass-card" style={{
        maxWidth: '540px',
        width: '100%',
        background: 'var(--bg-card)',
        padding: '2.5rem',
        borderRadius: '24px',
        position: 'relative'
      }}>
        
        {/* Close Button */}
        <button onClick={() => { setIsLoggedIn(false); onClose(); }} style={closeBtnStyle}>
          <X size={20} />
        </button>

        {!isLoggedIn ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #0b192c, #1d4ed8)',
                color: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.75rem auto'
              }}>
                <UserCheck size={28} />
              </div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-dark)' }}>KIS Digital Campus Portal</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Login to access LMS, Attendance, & Fee Statements</p>
            </div>

            {/* Role Switcher */}
            <div style={{ display: 'flex', background: 'var(--bg-subtle)', padding: '0.3rem', borderRadius: '12px', marginBottom: '1.25rem' }}>
              <button 
                onClick={() => setRole('student')} 
                style={roleBtnStyle(role === 'student')}
              >
                Student Portal
              </button>
              <button 
                onClick={() => setRole('parent')} 
                style={roleBtnStyle(role === 'parent')}
              >
                Parent Portal
              </button>
            </div>

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle}>{role === 'student' ? 'Student ID Number' : 'Registered Mobile / Parent ID'}</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={inputStyle}
                  required 
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Password / PIN</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                  required 
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.8rem' }}>
                Secure Login <ArrowRight size={16} />
              </button>
            </form>

            <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.775rem', color: 'var(--text-muted)' }}>
              Demo Credentials Loaded • Encryption SSL 256-Bit Secure
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--royal-blue)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800'
              }}>
                AS
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold-dark)', fontWeight: '700' }}>WELCOME BACK</div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>Aarav Sharma (Grade X-A)</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Roll No: 10042 • House: Shivaji House</span>
              </div>
            </div>

            {/* Dashboard Teaser Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Attendance Rate</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0d9488' }}>96.4%</div>
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Term 1 Grade</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--royal-blue)' }}>A1 (94.2%)</div>
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Library Books</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--accent-gold-dark)' }}>2 Issued</div>
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fee Dues</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#10b981' }}>₹0 (Cleared)</div>
              </div>
            </div>

            <button onClick={handleLogout} className="btn-outline" style={{ width: '100%' }}>
              Log Out of Portal
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

const roleBtnStyle = (active) => ({
  flex: 1,
  padding: '0.5rem',
  fontSize: '0.85rem',
  fontWeight: '700',
  border: 'none',
  borderRadius: '10px',
  background: active ? 'var(--bg-card)' : 'transparent',
  color: active ? 'var(--royal-blue)' : 'var(--text-muted)',
  cursor: 'pointer',
  boxShadow: active ? 'var(--shadow-sm)' : 'none'
});
