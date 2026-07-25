import React, { useState } from 'react';
import { Search, X, BookOpen, GraduationCap, Calculator, MapPin, ArrowRight } from 'lucide-react';

const searchableItems = [
  { title: 'Online Admission Application 2026-27', category: 'Admissions', link: '#admissions' },
  { title: 'Dynamic Fee Structure Calculator', category: 'Fees', link: '#admissions' },
  { title: 'Principal Dr. Sunita Sharma Desk Message', category: 'About', link: '#about' },
  { title: 'CBSE Senior Secondary Science & Commerce Streams', category: 'Academics', link: '#academics' },
  { title: 'Krishna Artificial Intelligence & Robotics Lab', category: 'STEM', link: '#academics' },
  { title: 'Olympic Swimming Pool & Sports Academies', category: 'Facilities', link: '#facilities' },
  { title: 'GPS Monitored School Bus Transport Fleet', category: 'Facilities', link: '#facilities' },
  { title: 'Student & Parent Digital Campus Portal', category: 'Portal', link: '#events' },
  { title: 'Annual Cultural Fest & Sports Day Gallery', category: 'Media', link: '#gallery' },
  { title: 'Contact Office Address & Route Directions', category: 'Contact', link: '#contact' }
];

export default function SearchModal({ isOpen, onClose, onOpenAdmissions, onOpenFeeCalculator }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === '' 
    ? searchableItems.slice(0, 5) 
    : searchableItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="modal-backdrop">
      <div className="modal-panel" style={{
        maxWidth: '600px',
        width: '100%',
        padding: '1.75rem'
      }}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <X size={18} />
        </button>

        {/* Search Bar Input */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <Search size={20} color="var(--royal)" style={{ position: 'absolute', left: '14px', top: '14px' }} />
          <input 
            type="text"
            autoFocus 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search admissions, fees, syllabus, STEM labs, transport... (Ctrl+K)"
            style={{
              width: '100%',
              padding: '0.85rem 1rem 0.85rem 3rem',
              borderRadius: 'var(--r-md)',
              border: '2px solid var(--royal)',
              background: 'var(--bg-subtle)',
              color: 'var(--text-heading)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Search Results List */}
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {query.trim() === '' ? 'Popular Quick Search Topics' : `Results (${results.length})`}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '320px', overflowY: 'auto' }}>
            {results.length > 0 ? (
              results.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link}
                  onClick={() => {
                    onClose();
                    if (item.title.includes('Admission')) onOpenAdmissions();
                    if (item.title.includes('Fee')) onOpenFeeCalculator();
                  }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--r-md)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    color: 'var(--text-heading)',
                    transition: 'var(--ease-fast)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <BookOpen size={16} color="var(--royal)" />
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{item.title}</span>
                  </div>
                  <span className="badge badge-royal" style={{ fontSize: '0.7rem' }}>{item.category}</span>
                </a>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                No results found matching "{query}"
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
