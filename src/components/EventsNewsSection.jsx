import React from 'react';
import { Calendar, Bell, Download, ArrowRight, Clock, MapPin, Sparkles, UserCheck } from 'lucide-react';

const eventsList = [
  {
    day: '15',
    month: 'AUG',
    title: '79th Independence Day Celebration & Flag Hoisting',
    time: '08:00 AM - 11:30 AM',
    venue: 'Main Sports Stadium Ground',
    desc: 'March past parade, patriotic songs, and annual bravery award distribution.'
  },
  {
    day: '05',
    month: 'SEP',
    title: 'Teachers Day & Cultural Gratitude Gala',
    time: '10:00 AM - 01:00 PM',
    venue: 'Air-Conditioned School Auditorium',
    desc: 'Special performances put together by senior secondary students.'
  },
  {
    day: '20',
    month: 'OCT',
    title: 'National CBSE Science & AI Tech Exhibition 2026',
    time: '09:00 AM - 04:00 PM',
    venue: 'Krishna STEM Robotics Center',
    desc: 'Inter-school innovation competition with live drone & IoT demonstrations.'
  }
];

const noticesList = [
  {
    tag: 'Academic',
    date: '24 Jul 2026',
    title: 'Schedule for Periodic Assessment Test-1 (Classes Nursery to XII)',
    pdfName: 'PAT1_Schedule_2026.pdf'
  },
  {
    tag: 'Sports',
    date: '18 Jul 2026',
    title: 'Selection Trials for District Inter-School Football Championship',
    pdfName: 'Sports_Trials_Circular.pdf'
  },
  {
    tag: 'Notice',
    date: '10 Jul 2026',
    title: 'Revised School Bus Route Timings for Monsoon Season',
    pdfName: 'Bus_Routes_Jul2026.pdf'
  }
];

export default function EventsNewsSection({ onOpenPortalLogin }) {
  return (
    <section id="events" style={{ padding: '6rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <Bell size={16} color="#e11d48" /> Stay Updated
          </div>
          <h2 className="section-title">School Events, Circulars & Announcements</h2>
          <p className="section-desc">
            Keep track of key academic dates, competitive examinations, inter-school events, and official CBSE notifications.
          </p>
        </div>

        {/* 2 Column Layout: Left Events, Right Notices & Circulars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          
          {/* Left Column: Upcoming Events */}
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={22} color="var(--royal-blue)" /> Upcoming Campus Events
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {eventsList.map((e, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #1d4ed8, #0b192c)',
                    color: '#fff',
                    borderRadius: '16px',
                    width: '65px',
                    height: '70px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: '800', lineHeight: 1 }}>{e.day}</span>
                    <span style={{ fontSize: '0.725rem', color: '#f59e0b', fontWeight: '700', textTransform: 'uppercase' }}>{e.month}</span>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>{e.title}</h4>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={13} color="var(--royal-blue)" /> {e.time}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={13} color="var(--accent-gold-dark)" /> {e.venue}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Notices & Parent Portal Card */}
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bell size={22} color="var(--accent-gold-dark)" /> Latest CBSE Circulars & Notices
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {noticesList.map((n, idx) => (
                <div key={idx} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  padding: '1.1rem 1.25rem',
                  borderRadius: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                      <span className="badge-blue" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>{n.tag}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{n.date}</span>
                    </div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>{n.title}</h4>
                  </div>

                  <button 
                    onClick={() => alert(`Downloading circular: ${n.pdfName}`)}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--royal-blue)',
                      padding: '0.45rem',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                    title="Download Circular PDF"
                  >
                    <Download size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Parent & Student Portal Action Banner */}
            <div style={{
              background: 'linear-gradient(135deg, #0b192c, #1e293b)',
              color: '#fff',
              padding: '1.75rem',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div>
                <div style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>PARENT & STUDENT PORTAL</div>
                <h4 style={{ fontSize: '1.2rem', color: '#fff', margin: '0.2rem 0' }}>Access LMS, Report Cards & Fees</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.825rem' }}>Login with Student ID or Registered Mobile No.</p>
              </div>

              <button onClick={onOpenPortalLogin} className="btn-gold" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                Portal Login <UserCheck size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
