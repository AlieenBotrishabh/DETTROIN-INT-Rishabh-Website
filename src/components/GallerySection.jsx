import React, { useState } from 'react';
import { Sparkles, Maximize2, X, Calendar, Image as ImageIcon, Video, Trophy } from 'lucide-react';

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
    <section id="gallery" className="section-pad" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <ImageIcon size={14} /> Life at KIS Aligarh
          </div>
          <h2 className="section-title">Media Center & <span className="text-gradient">Campus Showcase</span></h2>
          <p className="section-desc">
            Capturing the vibrant energy, athletic triumphs, cultural galas, and academic milestones of our students.
          </p>
          <div className="divider" />
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
              className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: 'var(--r-full)' }}
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
              className="card" 
              style={{ overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setLightboxImg(item)}
            >
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <span className="badge badge-inverted">{item.category}</span>
                </div>

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(3, 12, 28, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} className="hover-overlay">
                  <div className="icon-wrap icon-wrap-md" style={{ background: '#ffffff', color: 'var(--royal)' }}>
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.35rem' }}>
                  <Calendar size={13} color="var(--royal)" /> {item.date}
                </div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-heading)', lineHeight: 1.35 }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div className="modal-backdrop">
            <div className="modal-panel" style={{
              maxWidth: '820px',
              width: '100%',
              overflow: 'hidden',
              padding: 0
            }}>
              <button 
                className="modal-close"
                onClick={() => setLightboxImg(null)}
                style={{ zIndex: 10 }}
              >
                <X size={18} />
              </button>

              <img src={lightboxImg.img} alt={lightboxImg.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }} />

              <div style={{ padding: '1.75rem' }}>
                <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>{lightboxImg.category} • {lightboxImg.date}</span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', margin: '0.25rem 0 0.5rem 0' }}>{lightboxImg.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>{lightboxImg.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
