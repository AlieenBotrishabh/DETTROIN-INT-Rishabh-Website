import React from 'react';
import { Calendar, Bell, Download, Clock, MapPin, Sparkles, UserCheck, ArrowRight, FileText } from 'lucide-react';

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
    <section id="events" className="section-pad" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Bell size={14} /> Stay Updated
          </div>
          <h2 className="section-title">Events, Circulars & <span className="text-gradient">Official Notices</span></h2>
          <p className="section-desc">
            Keep track of key academic dates, competitive examinations, inter-school events, and official CBSE notifications.
          </p>
          <div className="divider" />
        </div>

        {/* 2 Column Layout: Left Events, Right Notices & Circulars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          
          {/* Left Column: Upcoming Events */}
          <div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={22} color="var(--royal)" /> Upcoming Campus Events
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {eventsList.map((e, idx) => (
                <div key={idx} className="card" style={{ padding: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{
                    background: 'var(--grad-navy)',
                    color: '#fff',
                    borderRadius: 'var(--r-md)',
                    width: '65px',
                    height: '70px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: '800', lineHeight: 1, fontFamily: 'Outfit, sans-serif' }}>{e.day}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: '700', textTransform: 'uppercase' }}>{e.month}</span>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-heading)', marginBottom: '0.35rem' }}>{e.title}</h4>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={13} color="var(--royal)" /> {e.time}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={13} color="var(--gold-dark)" /> {e.venue}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Notices & Parent Portal Card */}
          <div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={22} color="var(--gold-dark)" /> Latest CBSE Circulars & Notices
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {noticesList.map((n, idx) => (
                <div key={idx} className="card" style={{
                  padding: '1.1rem 1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                      <span className="badge badge-royal" style={{ fontSize: '0.7rem' }}>{n.tag}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{n.date}</span>
                    </div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>{n.title}</h4>
                  </div>

                  <button 
                    onClick={() => alert(`Downloading circular: ${n.pdfName}`)}
                    className="btn btn-outline btn-sm"
                    style={{ padding: '0.45rem', borderRadius: 'var(--r-sm)' }}
                    title="Download Circular PDF"
                  >
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Parent & Student Portal Action Banner */}
            <div className="card-navy" style={{
              padding: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <span className="badge badge-inverted" style={{ marginBottom: '0.4rem' }}>Parent & Student Portal</span>
                <h4 style={{ fontSize: '1.2rem', color: '#fff', margin: '0.2rem 0' }}>Access LMS, Report Cards & Fees</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.825rem' }}>Login with Student ID or Registered Mobile No.</p>
              </div>

              <button onClick={onOpenPortalLogin} className="btn btn-gold btn-md">
                Portal Login <UserCheck size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
