import React, { useState } from 'react';
import { Compass, Eye, X, Shield, MapPin, Wifi, Camera, ChevronRight } from 'lucide-react';

const facilities = [
  { id: 'robotics', cat: 'Technology', name: 'Robotics & AI Computer Labs', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80', short: '100+ i7 workstations, 3D printers, IoT sensor kits, Python AI development stations.', full: 'State-of-the-art computing facility featuring AI software suites, micro-controllers, 3D printing stations, and high-speed optical fiber. Students get certified training in Python, robotics design, and web development.' },
  { id: 'sports', cat: 'Sports & Wellness', name: 'Olympic Swimming Pool & Sports Arena', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80', short: 'Semi-Olympic 25m heated pool with certified lifeguards, badminton, lawn tennis & football.', full: 'Our sports complex features basketball courts, lawn tennis, badminton, indoor shooting range, and full-size football turf. Professional NIS-certified coaches train for national and state-level competitions.' },
  { id: 'smart', cat: 'Infrastructure', name: 'Interactive Smart Classrooms (75" 4K)', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80', short: 'All 70 classrooms equipped with 4K Touch Panels, digital curriculum boards, and ergonomic seating.', full: 'Each acoustically treated, climate-controlled classroom is integrated with visual learning modules, 3D diagrams, and digital whiteboards to make lessons deeply engaging and interactive.' },
  { id: 'library', cat: 'Academics', name: 'Grand Knowledge & Digital Library', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80', short: '20,000+ physical titles, encyclopedias, international journals, and digital Kindle e-reader pods.', full: 'A peaceful, expansive knowledge hub featuring reference sections, digital cataloging, international research archives, quiet study pods, and a dedicated competitive exam preparation section.' },
  { id: 'science', cat: 'Academics', name: 'Composite Physics, Chemistry & Bio Labs', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80', short: 'Safety-compliant labs with fume hoods, digital sensors, and advanced CBSE-standard instruments.', full: 'Students conduct hands-on practical experiments adhering to CBSE safety protocols. Each lab is supervised by experienced demonstrators for deep empirical understanding of science fundamentals.' },
  { id: 'transport', cat: 'Safety & Transport', name: 'GPS-Tracked AC School Bus Fleet', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80', short: 'Live GPS parent app tracking, speed governors, CCTV cameras, and female attendants on every route.', full: 'Air-conditioned buses equipped with speed governors, CCTV cameras, first aid kits, fire extinguishers, and real-time parent app tracking across all Aligarh zones for complete safety assurance.' },
];

export default function FacilitiesSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="facilities" className="section-pad" style={{ background: 'var(--bg-page)' }}>
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow"><Compass size={14} /> Campus Infrastructure</div>
          <h2 className="section-title">World-Class Facilities, <span className="text-gradient">Inspiring Potential</span></h2>
          <p className="section-desc">5 acres of lush, secure, tech-enabled campus designed to inspire curiosity, athletic performance, and creative exploration.</p>
          <div className="divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {facilities.map(item => (
            <div key={item.id} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <span className="badge badge-inverted">{item.cat}</span>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,12,28,0.5), transparent)' }} />
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>{item.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.short}</p>
                </div>
                <button onClick={() => setSelected(item)} className="btn btn-outline btn-md" style={{ width: '100%' }}>
                  <Eye size={16} /> Explore Facility
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Detail Modal */}
        {selected && (
          <div className="modal-backdrop">
            <div className="modal-panel" style={{ maxWidth: '640px', width: '100%', overflow: 'hidden', padding: 0 }}>
              <button className="modal-close" onClick={() => setSelected(null)} style={{ zIndex: 10 }}><X size={18} /></button>

              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img src={selected.img} alt={selected.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '2rem' }}>
                <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>{selected.cat}</span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-heading)', margin: '0.25rem 0 0.85rem' }}>{selected.name}</h3>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{selected.full}</p>

                <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <Shield size={20} color="var(--royal)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: '600' }}>
                    CCTV Monitored · Fire Safety Compliant · 24/7 Security Supervision
                  </span>
                </div>

                <button onClick={() => setSelected(null)} className="btn btn-primary btn-md" style={{ width: '100%' }}>Close Facility View</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
