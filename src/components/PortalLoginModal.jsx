import React, { useState } from 'react';
import { X, UserCheck, ArrowRight, CheckCircle, Shield } from 'lucide-react';

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
    <div className="modal-backdrop">
      <div className="modal-panel" style={{
        maxWidth: '520px',
        width: '100%',
        padding: '2.5rem'
      }}>
        
        {/* Close Button */}
        <button className="modal-close" onClick={() => { setIsLoggedIn(false); onClose(); }}>
          <X size={18} />
        </button>

        {!isLoggedIn ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div className="icon-wrap icon-wrap-lg" style={{
                background: 'var(--grad-navy)',
                color: 'var(--gold)',
                margin: '0 auto 0.75rem auto',
                boxShadow: 'var(--shadow-md)'
              }}>
                <UserCheck size={28} />
              </div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-heading)' }}>KIS Digital Campus Portal</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Login to access LMS, Attendance, & Fee Statements</p>
            </div>

            {/* Role Switcher */}
            <div className="tabs-bar" style={{ marginBottom: '1.25rem' }}>
              <button 
                onClick={() => setRole('student')} 
                className={`tab-btn ${role === 'student' ? 'active' : ''}`}
              >
                Student Portal
              </button>
              <button 
                onClick={() => setRole('parent')} 
                className={`tab-btn ${role === 'parent' ? 'active' : ''}`}
              >
                Parent Portal
              </button>
            </div>

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '1rem' }}>
                <label className="form-label">{role === 'student' ? 'Student ID Number' : 'Registered Mobile / Parent ID'}</label>
                <input 
                  type="text" 
                  className="form-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required 
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">Password / PIN</label>
                <input 
                  type="password" 
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              <button type="submit" className="btn btn-primary btn-md" style={{ width: '100%' }}>
                Secure Login <ArrowRight size={16} />
              </button>
            </form>

            <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.775rem', color: 'var(--text-muted)' }}>
              Demo Credentials Loaded • Encryption SSL 256-Bit Secure
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--royal)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '1.1rem'
              }}>
                AS
              </div>
              <div>
                <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>WELCOME BACK</span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', marginTop: '0.1rem' }}>Aarav Sharma (Grade X-A)</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Roll No: 10042 • Shivaji House</span>
              </div>
            </div>

            {/* Dashboard Teaser Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Attendance Rate</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--teal)', fontFamily: 'Outfit, sans-serif' }}>96.4%</div>
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Term 1 Grade</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--royal)', fontFamily: 'Outfit, sans-serif' }}>A1 (94.2%)</div>
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Library Books</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--gold-dark)', fontFamily: 'Outfit, sans-serif' }}>2 Issued</div>
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fee Dues</div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--emerald)', fontFamily: 'Outfit, sans-serif' }}>₹0 (Cleared)</div>
              </div>
            </div>

            <button onClick={handleLogout} className="btn btn-outline btn-md" style={{ width: '100%' }}>
              Log Out of Portal
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
