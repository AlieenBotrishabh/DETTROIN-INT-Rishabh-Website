import React, { useState } from 'react';
import { 
  Sparkles, Compass, Shield, Eye, X, Check, 
  MapPin, Clock, Award, Users, BookOpen 
} from 'lucide-react';

const facilitiesData = [
  {
    id: 'robotics',
    name: 'Robotics & High-Tech AI Computer Labs',
    category: 'Academics & Tech',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    shortDesc: '100+ High-performance i7 workstations with 1Gbps optical fiber line and 3D printing stations.',
    details: 'Equipped with state-of-the-art computer systems, AI software suites, micro-controllers, and high-speed internet. Students get hands-on experience in Python coding, robotics design, and web development under certified IT faculty.'
  },
  {
    id: 'sports',
    name: 'Olympic-Grade Swimming Pool & Sports Arena',
    category: 'Sports & Wellness',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Semi-Olympic 25m heated swimming pool with trained lifeguard supervision and junior pool.',
    details: 'Our sports complex includes basketball courts, lawn tennis, badminton arena, indoor shooting range, and a full-size football turf. Professional NIS certified coaches train students for national and state-level meets.'
  },
  {
    id: 'smartclass',
    name: 'Interactive Smart Classrooms',
    category: 'Infrastructure',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    shortDesc: '75-inch 4K Interactive Touch Panels with digital curriculum integration and ergonomic furniture.',
    details: 'Every classroom is acoustically treated and climate-controlled, integrated with visual learning modules, 3D diagrams, and digital whiteboards to make lessons engaging and interactive.'
  },
  {
    id: 'library',
    name: 'Grand Knowledge & Digital Library',
    category: 'Academics',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Over 20,000 physical titles, encyclopedias, international journals, and Kindle e-reader pods.',
    details: 'A peaceful, expansive learning hub featuring reference sections, digital cataloging, research archives, and quiet study pods to encourage lifelong reading habits.'
  },
  {
    id: 'science',
    name: 'Composite Physics, Chemistry & Biology Labs',
    category: 'Academics',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Spacious, safety-compliant laboratories with modern equipment, fume hoods, and digital sensors.',
    details: 'Students conduct practical experiments adhering to CBSE safety protocols. Guided by experienced lab demonstrator staff for deep empirical understanding of science fundamentals.'
  },
  {
    id: 'transport',
    name: 'GPS-Tracked AC School Bus Transport Fleet',
    category: 'Safety & Transport',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Coverage across Aligarh and surrounding regions with live GPS app tracking and female attendants.',
    details: 'Our fleet of air-conditioned buses is fitted with speed governors, CCTV cameras, first aid stations, and real-time parent app tracking for ultimate peace of mind.'
  }
];

export default function FacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <section id="facilities" style={{ padding: '6rem 0', background: 'var(--bg-main)' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <Compass size={16} color="#0d9488" /> Campus Infrastructure
          </div>
          <h2 className="section-title">World-Class Facilities Nurturing Excellence</h2>
          <p className="section-desc">
            Spread across 5 acres of green, secure campus in Aligarh, engineered to inspire learning, athletics, and creative exploration.
          </p>
        </div>

        {/* Facilities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {facilitiesData.map((item) => (
            <div key={item.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(11, 25, 44, 0.85)',
                  color: '#fbbf24',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  backdropFilter: 'blur(6px)'
                }}>
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{item.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {item.shortDesc}
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedFacility(item)} 
                  className="btn-outline" 
                  style={{ width: '100%', fontSize: '0.875rem', padding: '0.65rem' }}
                >
                  <Eye size={16} /> View Facility Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Details Modal */}
        {selectedFacility && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem'
          }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: '24px',
              maxWidth: '650px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              animation: 'floatAnim 0.3s ease-out'
            }}>
              <div style={{ position: 'relative', height: '260px' }}>
                <img src={selectedFacility.img} alt={selectedFacility.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button 
                  onClick={() => setSelectedFacility(null)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(0,0,0,0.6)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: '2rem' }}>
                <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>{selectedFacility.category}</span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>{selectedFacility.name}</h3>
                <p style={{ color: 'var(--text-dark)', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {selectedFacility.details}
                </p>

                <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: '14px', marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Shield size={24} color="var(--royal-blue)" />
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dark)', fontWeight: '600' }}>
                    Fully CCTV Monitored • Fire Safety Compliant • 24/7 Security Supervision
                  </div>
                </div>

                <button onClick={() => setSelectedFacility(null)} className="btn-primary" style={{ width: '100%' }}>
                  Close Tour Modal
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
