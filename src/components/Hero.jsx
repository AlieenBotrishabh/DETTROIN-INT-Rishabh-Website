import React, { useState, useEffect } from 'react';
import { 
  Sparkles, ArrowRight, Play, Award, GraduationCap, ShieldCheck, 
  Users, ChevronLeft, ChevronRight, Calculator, FileText, Compass, Star 
} from 'lucide-react';

const heroSlides = [
  {
    badge: '🏆 #1 CBSE School in Aligarh Region',
    title: 'Nurturing Global Innovators & Visionary Leaders',
    description: 'Krishna International School combines rigorous CBSE academic excellence with futuristic AI/Robotics STEM education, Olympic sports infrastructure, and strong ethical values.',
    bgGrad: 'linear-gradient(135deg, rgba(11, 25, 44, 0.92) 0%, rgba(30, 41, 59, 0.85) 100%)',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
    primaryCta: 'Apply For Admission',
    secondaryCta: 'Explore Academics'
  },
  {
    badge: '🤖 Futuristic Robotics & AI Labs',
    title: 'Pioneering Next-Gen Science & Technology Education',
    description: 'Empowering students with hands-on IoT coding, 3D printing labs, satellite model building, and international robotics olympiad preparation.',
    bgGrad: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(13, 148, 136, 0.8) 100%)',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    primaryCta: 'Discover STEM Labs',
    secondaryCta: 'View Infrastructure'
  },
  {
    badge: '⚽ World-Class Sports & Arts Academies',
    title: 'Building Resilience, Leadership & All-Round Personality',
    description: 'Spanning across a lush 5-acre smart campus with Olympic-grade swimming pool, lawn tennis courts, shooting range, and music academies.',
    bgGrad: 'linear-gradient(135deg, rgba(30, 58, 138, 0.92) 0%, rgba(88, 28, 135, 0.85) 100%)',
    img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1600&q=80',
    primaryCta: 'Explore Sports Facilities',
    secondaryCta: 'Book Campus Tour'
  }
];

export default function Hero({ onOpenAdmissions, onOpenFeeCalculator }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '82vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Slide Background Image & Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${slide.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.8s ease-in-out',
        zIndex: 1
      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: slide.bgGrad,
        zIndex: 2,
        backdropFilter: 'blur(3px)'
      }} />

      {/* Main Content Container */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 10, paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.5)',
            color: '#fbbf24',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: '700',
            marginBottom: '1.25rem',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.2)'
          }}>
            <Sparkles size={16} /> {slide.badge}
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            color: '#ffffff',
            fontWeight: '800',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.03em',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#e2e8f0',
            lineHeight: 1.6,
            marginBottom: '2rem',
            maxWidth: '720px'
          }}>
            {slide.description}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={onOpenAdmissions} className="btn-gold" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              {slide.primaryCta} <ArrowRight size={18} />
            </button>

            <a href="#academics" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', padding: '0.85rem 1.8rem', fontSize: '1.05rem' }}>
              {slide.secondaryCta}
            </a>

            <button 
              onClick={onOpenFeeCalculator} 
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.85rem 1.4rem',
                borderRadius: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Calculator size={18} color="#f59e0b" /> Fee Calculator
            </button>
          </div>

        </div>

        {/* Carousel Slider Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem' }}>
          <button 
            onClick={() => setCurrentSlide(prev => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            style={sliderBtnStyle}
            title="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {heroSlides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: idx === currentSlide ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentSlide ? '#f59e0b' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          <button 
            onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
            style={sliderBtnStyle}
            title="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Quick Action Interactive Floating Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginTop: '3.5rem'
        }}>
          
          <div onClick={onOpenAdmissions} style={quickCardStyle}>
            <div style={quickIconWrapStyle('#1d4ed8')}>
              <FileText size={22} color="#fff" />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem' }}>Online Admission</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Fast 3-step digital application</p>
            </div>
          </div>

          <div onClick={onOpenFeeCalculator} style={quickCardStyle}>
            <div style={quickIconWrapStyle('#d97706')}>
              <Calculator size={22} color="#fff" />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem' }}>Fee Calculator</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Instant tuition & transport estimate</p>
            </div>
          </div>

          <a href="#facilities" style={{ ...quickCardStyle, textDecoration: 'none' }}>
            <div style={quickIconWrapStyle('#0d9488')}>
              <Compass size={22} color="#fff" />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem' }}>360° Campus Tour</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Explore smart labs & grounds</p>
            </div>
          </a>

          <a href="#academics" style={{ ...quickCardStyle, textDecoration: 'none' }}>
            <div style={quickIconWrapStyle('#e11d48')}>
              <Star size={22} color="#fff" />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem' }}>100% CBSE Results</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Top merit ranks & distinctions</p>
            </div>
          </a>

        </div>
      </div>

      {/* Stats Counter Bar Below Hero */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        padding: '1.75rem 0'
      }}>
        <div className="container-custom" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--royal-blue)', lineHeight: 1 }}>2,500+</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: '600', marginTop: '0.25rem' }}>Active Students</div>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-gold-dark)', lineHeight: 1 }}>100%</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: '600', marginTop: '0.25rem' }}>CBSE Board Pass Rate</div>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-teal)', lineHeight: 1 }}>50+</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: '600', marginTop: '0.25rem' }}>Smart Classrooms & Labs</div>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-crimson)', lineHeight: 1 }}>25+</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: '600', marginTop: '0.25rem' }}>Years Educational Legacy</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const sliderBtnStyle = {
  background: 'rgba(255,255,255,0.15)',
  border: '1px solid rgba(255,255,255,0.3)',
  color: '#fff',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease'
};

const quickCardStyle = {
  background: 'rgba(15, 23, 42, 0.75)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(12px)',
  padding: '1rem 1.2rem',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
};

const quickIconWrapStyle = (bgColor) => ({
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  background: bgColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
});
