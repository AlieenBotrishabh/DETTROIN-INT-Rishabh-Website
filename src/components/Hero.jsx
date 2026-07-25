import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Calculator, Compass, ChevronLeft, ChevronRight, Sparkles, Star, Users, BookOpen, Award, Shield } from 'lucide-react';
import campusPhoto from '../assets/campus-building.jpg';

const slides = [
  {
    tag: 'CBSE Aligarh Region\'s #1 School 2025-26',
    headline: ['Shaping Tomorrow\'s', 'World-Class Leaders'],
    sub: 'Experience academic brilliance, AI-powered STEM labs, Olympic-level sports, and character-driven education at Krishna International School — 25 years of excellence.',
    img: campusPhoto,
    accent: 'var(--royal)',
    primaryCta: 'Apply for Admission',
    secondaryCta: 'Explore Academics',
  },
  {
    tag: 'Cutting-Edge STEM & AI Innovation Hub',
    headline: ['Future-Ready Tech &', 'Robotics Education'],
    sub: 'Python coding, 3D printing, IoT sensors, drone aviation labs, and Machine Learning fundamentals — preparing students for the careers of tomorrow.',
    img: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1800&q=85',
    accent: 'var(--teal)',
    primaryCta: 'Explore STEM Labs',
    secondaryCta: 'View Infrastructure',
  },
  {
    tag: 'Olympic-Grade Sports & Arts Programs',
    headline: ['Holistic Development,', 'Beyond Textbooks'],
    sub: 'Semi-Olympic heated swimming pool, NIS-certified coaches, National-level chess, shooting, tennis, badminton — all on a lush 5-acre smart campus.',
    img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1800&q=85',
    accent: 'var(--violet)',
    primaryCta: 'Explore Sports Facilities',
    secondaryCta: 'Book Campus Tour',
  },
];

const stats = [
  { value: '2,500+', label: 'Active Students', icon: Users, color: 'var(--royal)' },
  { value: '100%', label: 'CBSE Pass Rate', icon: Award, color: 'var(--gold-dark)' },
  { value: '50+', label: 'Smart Labs & Classrooms', icon: BookOpen, color: 'var(--teal)' },
  { value: '25 Yrs', label: 'Educational Legacy', icon: Shield, color: 'var(--violet)' },
];

const AUTOPLAY_MS = 7000;

export default function Hero({ onOpenAdmissions, onOpenFeeCalculator }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const goTo = (idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 300);
  };

  const goNext = () => goTo((current + 1) % slides.length);
  const goPrev = () => goTo(current === 0 ? slides.length - 1 : current - 1);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [current, paused]);

  // Keyboard navigation when hero is focused/hovered
  useEffect(() => {
    const handleKey = (e) => {
      if (!paused) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [current, paused]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const slide = slides[current];

  return (
    <section
      id="hero"
      style={{ position: 'relative', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${slide.img})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: isTransitioning ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }} />

      {/* Overlay Gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(105deg, rgba(3,12,28,0.95) 0%, rgba(11,25,44,0.88) 45%, rgba(11,25,44,0.55) 100%)',
      }} />

      {/* Decorative blur blobs */}
      <div className="glow-blob" style={{ width: 600, height: 600, top: -200, left: -200, background: 'var(--royal)', zIndex: 2, opacity: 0.12 }} />
      <div className="glow-blob" style={{ width: 400, height: 400, bottom: -100, right: 100, background: 'var(--gold)', zIndex: 2, opacity: 0.1 }} />

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '5rem', paddingBottom: '3rem', minHeight: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <div style={{ maxWidth: '860px' }}>
          {/* Tag badge */}
          <div className="badge badge-inverted" style={{ marginBottom: '1.25rem', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
            <Sparkles size={14} /> {slide.tag}
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            color: '#ffffff',
            fontWeight: '900',
            lineHeight: 1.12,
            marginBottom: '1.25rem',
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}>
            {slide.headline[0]}<br />
            <span className="text-shimmer">{slide.headline[1]}</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: '#94a3b8',
            lineHeight: 1.75,
            maxWidth: '680px',
            marginBottom: '2.25rem',
            opacity: isTransitioning ? 0 : 1,
            transition: 'opacity 0.5s ease 0.1s',
          }}>
            {slide.sub}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3.5rem' }}>
            <button onClick={onOpenAdmissions} className="btn btn-gold btn-xl">
              {slide.primaryCta} <ArrowRight size={18} />
            </button>
            <a href="#academics" className="btn btn-ghost-white btn-xl">
              {slide.secondaryCta}
            </a>
            <button onClick={onOpenFeeCalculator} className="btn btn-ghost-white btn-xl">
              <Calculator size={18} /> Fee Calculator
            </button>
          </div>

          {/* Slide Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={goPrev} aria-label="Previous slide" style={navDotBtn}>
              <ChevronLeft size={18} />
            </button>

            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === current}
                  style={{
                    width: i === current ? '40px' : '18px',
                    height: '18px', padding: 0,
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <span style={{
                    display: 'block', width: '100%', height: '8px', borderRadius: '4px',
                    background: 'rgba(255,255,255,0.35)', overflow: 'hidden', position: 'relative',
                    transition: 'var(--ease-normal)',
                  }}>
                    {i === current && (
                      <span
                        key={current}
                        style={{
                          position: 'absolute', inset: 0, background: 'var(--gold)',
                          borderRadius: '4px', transformOrigin: 'left',
                          animation: `heroProgress ${AUTOPLAY_MS}ms linear forwards`,
                          animationPlayState: paused ? 'paused' : 'running',
                        }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <button onClick={goNext} aria-label="Next slide" style={navDotBtn}>
              <ChevronRight size={18} />
            </button>

            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: '600', marginLeft: '0.25rem' }}>
              {paused ? 'Paused' : 'Auto-playing'}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{
        position: 'relative', zIndex: 10,
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border)',
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.5rem',
          padding: '2rem 1.5rem',
        }}>
          {stats.map(({ value, label, icon: Icon, color }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem' }}>
              <div className="icon-wrap icon-wrap-md" style={{ background: `${color}18` }}>
                <Icon size={22} color={color} />
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color, lineHeight: 1, fontFamily: 'Outfit, sans-serif' }}>
                  {value}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '0.2rem' }}>
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const navDotBtn = {
  background: 'rgba(255,255,255,0.12)',
  border: '1px solid rgba(255,255,255,0.25)',
  color: '#fff', width: '40px', height: '40px', borderRadius: '50%',
  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  flexShrink: 0,
  transition: 'var(--ease-fast)'
};
