'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'inquiry'
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // In production, this would send to an email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '', type: 'inquiry' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <section style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '64px', fontWeight: 300, marginBottom: '24px', color: '#111' }}>
          Get in Touch
        </h1>
        <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '18px', color: '#666', lineHeight: 1.8, marginBottom: '60px', maxWidth: '700px' }}>
          Have a case study to share? Want to collaborate? Have a question? We'd love to hear from you.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', display: 'block', marginBottom: '8px' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '2px',
                    backgroundColor: '#f9f9f9'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', display: 'block', marginBottom: '8px' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '2px',
                    backgroundColor: '#f9f9f9'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', display: 'block', marginBottom: '8px' }}>
                  Inquiry Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '2px',
                    backgroundColor: '#f9f9f9'
                  }}
                >
                  <option value="inquiry">General Inquiry</option>
                  <option value="case-study">Share Case Study</option>
                  <option value="podcast">Podcast Guest</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', display: 'block', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '2px',
                    backgroundColor: '#f9f9f9',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  backgroundColor: submitted ? '#16a34a' : '#111',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {submitted ? '✓ Message Sent' : 'Send Message →'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Email</p>
              <a href="mailto:rachel@planbforpans.com" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 400, color: '#111', textDecoration: 'none' }}>
                rachel@planbforpans.com
              </a>
            </div>

            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '16px' }}>Connect With Us</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '14px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px' }}>Podcast</a>
                <a href="#" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '14px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px' }}>Resources</a>
              </div>
            </div>

            <div style={{ backgroundColor: '#f5f5f5', padding: '32px', borderRadius: '4px' }}>
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '20px', fontWeight: 400, marginBottom: '12px', color: '#111' }}>
                Ready to share?
              </p>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '14px', color: '#666', lineHeight: 1.8 }}>
                We're actively seeking case studies from families and doctors. Your story could give hope to another parent just starting their Plan B journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        :root {
          --font-cormorant: 'Cormorant', Georgia, serif;
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
    </main>
  )
}
