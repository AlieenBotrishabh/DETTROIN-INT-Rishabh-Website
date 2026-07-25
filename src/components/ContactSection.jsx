import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  HelpCircle, ChevronDown, ChevronUp, Bus, Navigation 
} from 'lucide-react';

const faqItems = [
  {
    q: 'What is the age criteria for Nursery and Kindergarten admissions?',
    a: 'For Nursery admission, the child should be 3+ years old as of March 31st of the academic session. For Kindergarten (LKG), the minimum age requirement is 4+ years.'
  },
  {
    q: 'Is transport available across all major localities in Aligarh?',
    a: 'Yes, our fleet of air-conditioned, GPS-monitored buses covers Krishna Nagar, Ramghat Road, GT Road, Civil Lines, Medical Road, and surrounding township zones.'
  },
  {
    q: 'What secondary and senior secondary subject streams are offered?',
    a: 'We offer CBSE Senior Secondary Science (PCM/PCB with AI & Computer Science), Commerce (Accountancy, Business Studies, Economics, Applied Math), and Humanities streams.'
  },
  {
    q: 'Are merit scholarships available for deserving students?',
    a: 'Yes, Krishna International School awards merit-cum-means scholarships to top scorers in Board exams, Olympiad rank holders, and national sports champions.'
  }
];

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'var(--bg-main)' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <MapPin size={16} color="#1d4ed8" /> Get In Touch
          </div>
          <h2 className="section-title">Contact Us & Visit Our Aligarh Campus</h2>
          <p className="section-desc">
            Have questions about admissions, campus visits, or academic programs? We are here to help.
          </p>
        </div>

        {/* Top Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={contactIconWrap('#1d4ed8')}><MapPin size={22} color="#fff" /></div>
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>Campus Address</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Krishna Nagar, G.T. Road, Aligarh, U.P. - 202001</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={contactIconWrap('#d97706')}><Phone size={22} color="#fff" /></div>
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>Call Phone Desk</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>+91-9837050000 / +91-9837060000</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={contactIconWrap('#0d9488')}><Mail size={22} color="#fff" /></div>
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>Email Desk</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>info@kisaligarh.com / kisaligarh@gmail.com</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={contactIconWrap('#e11d48')}><Clock size={22} color="#fff" /></div>
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>Office Hours</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mon - Sat: 08:00 AM - 03:30 PM</p>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Left (Interactive Contact Form), Right (Google Map & FAQ Accordion) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          
          {/* Contact Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              Send Us a Message
            </h3>

            {contactSubmitted && (
              <div style={{ background: 'rgba(13, 148, 136, 0.15)', border: '1px solid #0d9488', color: '#0d9488', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={20} /> Message sent successfully! Our team will respond shortly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Your Full Name *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar" 
                  style={inputStyle} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com" 
                    style={inputStyle} 
                  />
                </div>

                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210" 
                    style={inputStyle} 
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={inputStyle}
                >
                  <option value="Admission Inquiry">Admission Inquiry</option>
                  <option value="Campus Tour Booking">Campus Tour Booking</option>
                  <option value="Transport & Bus Route">Transport & Bus Route</option>
                  <option value="General Feedback">General Feedback</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Your Message *</label>
                <textarea 
                  rows="4" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist you?" 
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* Map Simulator & FAQ Accordion */}
          <div>
            {/* Map Frame */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem',
              border: '1px solid var(--border-light)',
              background: 'var(--bg-card)'
            }}>
              <iframe 
                title="Krishna International School Aligarh Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14115.352618991448!2d78.077222!3d27.897222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4857b6f6f1d%3A0x4a0a4c0a4c0a4c0a!2sKrishna%20International%20School%20Aligarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="220" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy"
              />
            </div>

            {/* FAQ Accordion */}
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HelpCircle size={20} color="var(--royal-blue)" /> Frequently Asked Questions
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {faqItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '14px',
                      overflow: 'hidden'
                    }}
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '1rem 1.25rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        fontWeight: '700',
                        fontSize: '0.925rem',
                        color: 'var(--text-dark)',
                        cursor: 'pointer'
                      }}
                    >
                      {item.q}
                      {openFaq === idx ? <ChevronUp size={18} color="var(--royal-blue)" /> : <ChevronDown size={18} />}
                    </button>

                    {openFaq === idx && (
                      <div style={{ padding: '0 1.25rem 1rem 1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const contactIconWrap = (color) => ({
  width: '46px',
  height: '46px',
  borderRadius: '12px',
  background: color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
});

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '700',
  color: 'var(--text-dark)',
  marginBottom: '0.35rem'
};

const inputStyle = {
  width: '100%',
  padding: '0.7rem 0.9rem',
  borderRadius: '12px',
  border: '1px solid var(--border-light)',
  background: 'var(--bg-subtle)',
  color: 'var(--text-dark)',
  fontSize: '0.9rem',
  outline: 'none'
};
