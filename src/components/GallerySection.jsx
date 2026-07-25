import React, { useState } from 'react';
import { Sparkles, Image, Maximize2, X, Play, Filter, Calendar } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Annual Sports Meet Athletic Championship',
    category: 'Sports',
    date: 'March 2026',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    caption: 'Students competing in 400m relay sprint at the school athletic stadium.'
  },
  {
    id: 2,
    title: 'Robotics & AI Innovation Exhibition',
    category: 'STEM',
    date: 'February 2026',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    caption: 'Student teams showcasing autonomous rover robots and IoT Smart Home models.'
  },
  {
    id: 3,
    title: 'Grand Annual Cultural & Performing Arts Day',
    category: 'Cultural',
    date: 'January 2026',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    caption: 'Classical Indian dance and theatrical drama performances by primary & middle school wings.'
  },
  {
    id: 4,
    title: 'CBSE Regional Science & Math Olympiad',
    category: 'Academics',
    date: 'December 2025',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Chemistry lab experiments and empirical science research presentations.'
  },
  {
    id: 5,
    title: 'Inter-School Swimming Championship',
    category: 'Sports',
    date: 'November 2025',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80',
    caption: 'Gold medal winners at the 25m Aquatic Center.'
  },
  {
    id: 6,
    title: 'Air-Conditioned Digital Library & Reading Hub',
    category: 'Campus',
    date: 'October 2025',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    caption: 'Quiet research environment with access to global digital libraries.'
  }
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const categories = ['All', 'Academics', 'STEM', 'Sports', 'Cultural', 'Campus'];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" style={{ padding: '6rem 0', background: 'var(--bg-main)' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <Sparkles size={16} color="#d97706" /> Life at KIS Aligarh
          </div>
          <h2 className="section-title">Media Center & Campus Moments</h2>
          <p className="section-desc">
            Capturing the vibrant energy, athletic triumphs, cultural galas, and academic milestones of our students.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                border: activeCategory === cat ? 'none' : '1px solid var(--border-light)',
                background: activeCategory === cat ? 'var(--royal-blue)' : 'var(--bg-card)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                fontWeight: '700',
                fontSize: '0.875rem',
                cursor: 'pointer',
                boxShadow: activeCategory === cat ? 'var(--shadow-blue)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="glass-card" 
              style={{ overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setLightboxImg(item)}
            >
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(11, 25, 44, 0.8)',
                  color: '#fbbf24',
                  padding: '0.25rem 0.7rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  {item.category}
                </div>

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(11, 25, 44, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} className="hover-overlay">
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: 'var(--royal-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.35rem' }}>
                  <Calendar size={12} color="var(--royal-blue)" /> {item.date}
                </div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: 1.35 }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 2500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div style={{
              maxWidth: '850px',
              width: '100%',
              background: 'var(--bg-card)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              <button 
                onClick={() => setLightboxImg(null)}
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
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <X size={20} />
              </button>

              <img src={lightboxImg.img} alt={lightboxImg.title} style={{ width: '100%', maxHeight: '520px', objectFit: 'cover', display: 'block' }} />

              <div style={{ padding: '1.75rem' }}>
                <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>{lightboxImg.category} • {lightboxImg.date}</span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', margin: '0.25rem 0 0.5rem 0' }}>{lightboxImg.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{lightboxImg.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
