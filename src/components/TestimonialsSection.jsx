import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Trophy, TrendingUp, GraduationCap } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Gupta',
    role: 'Grade XII Topper — 98.4% CBSE Board 2025',
    text: 'KIS gave me both the academic rigor and the confidence I needed. The JEE integrated program and dedicated faculty mentorship helped me crack IIT Delhi. I\'m forever grateful to this institution!',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    score: '98.4%',
    rank: 'AIR 872 JEE Main',
  },
  {
    name: 'Aryan Srivastava',
    role: 'Grade XII Science — NEET 2025 Qualifier',
    text: 'The Biology, Chemistry, and Physics labs here are truly world-class. Our teachers went beyond just the CBSE syllabus and gave us the deep understanding needed for NEET success.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    score: '675/720',
    rank: 'NEET 2025 Qualifier',
  },
  {
    name: 'Ritika Singh',
    role: 'Grade X Board Topper — 97.8%',
    text: 'The teaching methodology at KIS is outstanding. Smart classes, weekly assessments, and individual mentor attention made it possible for me to score a perfect 100 in Mathematics!',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    score: '97.8%',
    rank: 'District Rank #3',
  },
  {
    name: 'Rahul Sharma (Parent)',
    role: 'Father of Grade VI Student',
    text: 'The transparency, infrastructure, and faculty quality at KIS Aligarh exceed every expectation. The live GPS bus tracking app gives parents real peace of mind. Highly recommend to all Aligarh families!',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    score: '⭐ 5/5',
    rank: 'Parent Testimonial',
  },
];

const results2025 = [
  { subject: 'Mathematics', students: 248, avg: 94.2, topScore: 100 },
  { subject: 'Science', students: 248, avg: 91.8, topScore: 99 },
  { subject: 'English', students: 248, avg: 93.1, topScore: 100 },
  { subject: 'Social Science', students: 248, avg: 89.6, topScore: 100 },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(p => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive(p => (p + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section style={{ padding: '6rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Trophy size={14} /> Student Success Stories & Board Results
          </div>
          <h2 className="section-title">Outstanding Results, <span className="text-gradient">Proud Achievers</span></h2>
          <p className="section-desc">
            Consistently delivering outstanding CBSE board results and competitive exam success stories year after year.
          </p>
          <div className="divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'center' }}>

          {/* Testimonials Carousel */}
          <div>
            <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              {/* Decorative Quote Mark */}
              <div style={{ position: 'absolute', top: 20, right: 24, opacity: 0.06 }}>
                <Quote size={80} color="var(--royal)" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <img
                  src={t.img}
                  alt={t.name}
                  style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--royal)', flexShrink: 0 }}
                />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-heading)' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{t.role}</p>
                  <div style={{ display: 'flex', gap: '2px', marginTop: '0.3rem' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="var(--gold)" color="var(--gold)" />)}
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--royal)', fontFamily: 'Outfit, sans-serif' }}>{t.score}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600' }}>{t.rank}</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.75, fontStyle: 'italic' }}>
                "{t.text}"
              </p>

              {/* Carousel Controls */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2rem' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)} style={{
                      width: i === active ? '24px' : '8px', height: '8px',
                      borderRadius: '4px', border: 'none', cursor: 'pointer', transition: 'var(--ease-normal)',
                      background: i === active ? 'var(--royal)' : 'var(--border-strong)'
                    }} />
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={prev} className="btn btn-outline btn-sm" style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}>
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={next} className="btn btn-primary btn-sm" style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Board Results Panel */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>
                <TrendingUp size={13} /> CBSE Board Results 2025 — Grade X
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)' }}>Subject-Wise Average Performance</h3>
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Students</th>
                    <th>Avg. Score</th>
                    <th>Top Score</th>
                  </tr>
                </thead>
                <tbody>
                  {results2025.map(r => (
                    <tr key={r.subject}>
                      <td style={{ fontWeight: '600', color: 'var(--text-heading)' }}>{r.subject}</td>
                      <td>{r.students}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div className="progress-bar" style={{ width: '80px', display: 'inline-block' }}>
                            <div className="progress-fill" style={{ width: `${r.avg}%` }} />
                          </div>
                          <span style={{ fontWeight: '700', color: 'var(--royal)', fontSize: '0.875rem' }}>{r.avg}%</span>
                        </div>
                      </td>
                      <td><span className="badge badge-teal">{r.topScore}/100</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
              <div className="card" style={{ padding: '1.25rem', background: 'linear-gradient(135deg, var(--royal), #2563eb)', border: 'none', transform: 'none' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', fontFamily: 'Outfit, sans-serif' }}>100%</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.2rem' }}>Pass Rate Grade X & XII</div>
              </div>
              <div className="card" style={{ padding: '1.25rem', background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))', border: 'none', transform: 'none' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', fontFamily: 'Outfit, sans-serif' }}>12+</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.2rem' }}>IIT/NIT Qualifiers 2025</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
