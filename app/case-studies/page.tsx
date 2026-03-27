'use client'

export default function CaseStudies() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)' }}>
      {/* Header */}
      <section style={{ padding: '100px 20px 60px', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-150px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,26,26,0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '64px', fontWeight: 300, marginBottom: '24px', color: '#111', position: 'relative', zIndex: 1 }}>
          Case Studies
        </h1>
        <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '18px', color: '#666', lineHeight: 1.8, maxWidth: '700px', position: 'relative', zIndex: 1 }}>
          Five kids. Five healing journeys. Real protocols. Real results. We're documenting everything—every week, every breakthrough, every challenge. Watch what works.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {/* Sample Case Study */}
          <div style={{ background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)', border: '2px solid #f0e0d8', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(196, 26, 26, 0.1)'
            e.currentTarget.style.transform = 'translateY(-8px)'
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}>
            <div style={{ padding: '32px', background: 'linear-gradient(135deg, #fff 0%, #fef7f0 100%)', borderBottom: '1px solid #f0e0d8' }}>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1F6B6B', marginBottom: '8px', fontWeight: 600 }}>FEATURED</p>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '28px', fontWeight: 400, color: '#111', marginBottom: '12px' }}>Child's Name</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', backgroundColor: '#f0faf4', color: '#16a34a', padding: '4px 12px', borderRadius: '2px' }}>PANS</span>
                <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', backgroundColor: '#f5f5f5', color: '#999', padding: '4px 12px', borderRadius: '2px' }}>Alternative Modalities</span>
              </div>
            </div>

            <div style={{ padding: '32px' }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Journey</p>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '14px', color: '#666', lineHeight: 1.8 }}>
                  Five kids. Five different healing protocols. Real weekly progress. Real breakthroughs. Real challenges. This is where you'll see what actually works.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '4px' }}>Protocols Tried</p>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '13px', fontWeight: 600, color: '#111' }}>A, B, C</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '4px' }}>Timeline</p>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '13px', fontWeight: 600, color: '#111' }}>12+ months</p>
                </div>
              </div>

              <button style={{ width: '100%', padding: '12px', fontFamily: 'var(--font-inter), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', backgroundColor: '#1F6B6B', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 600, transition: 'all 0.3s ease' }} onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#134B4B'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1F6B6B'
              }}>
                Read Full Case Study →
              </button>
            </div>
          </div>

          {/* Phage Therapy Case Study */}
          <div style={{ background: 'linear-gradient(135deg, #fff 0%, #fef7f0 100%)', border: '2px solid #f0e0d8', borderRadius: '8px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(31, 107, 107, 0.1)'
            e.currentTarget.style.transform = 'translateY(-8px)'
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '28px', fontWeight: 400, color: '#111', marginBottom: '16px' }}>Phage Therapy Case Study</p>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '16px', color: '#666', marginBottom: '24px', lineHeight: 1.8 }}>Need 10 kids</p>
              <a href="/contact" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '12px 32px', backgroundColor: '#1F6B6B', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s ease' }} onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#134B4B'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1F6B6B'
              }}>
                Enroll Here →
              </a>
            </div>
          </div>

          {/* Biomagnetic Therapy Case Study */}
          <div style={{ background: 'linear-gradient(135deg, #fff 0%, #fef7f0 100%)', border: '2px solid #f0e0d8', borderRadius: '8px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(31, 107, 107, 0.1)'
            e.currentTarget.style.transform = 'translateY(-8px)'
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '28px', fontWeight: 400, color: '#111', marginBottom: '16px' }}>Biomagnetic Therapy Case Study</p>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '16px', color: '#666', marginBottom: '24px', lineHeight: 1.8 }}>Need 10 kids</p>
              <a href="/contact" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '12px 32px', backgroundColor: '#1F6B6B', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s ease' }} onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#134B4B'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1F6B6B'
              }}>
                Enroll Here →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section style={{ padding: '120px 20px', background: 'linear-gradient(135deg, #1F6B6B 0%, #134B4B 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '48px', fontWeight: 300, marginBottom: '24px', color: '#fff', letterSpacing: '-0.02em' }}>
            Share Your Story
          </h2>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '16px', color: '#fff', lineHeight: 1.8, marginBottom: '40px', opacity: 0.95 }}>
            Your story matters. If your family has found answers—or is still searching—we want to hear from you. Share what's working (or what isn't) and help others find their Plan B.
          </p>
          <a href="/contact" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 40px', backgroundColor: '#fff', color: '#1F6B6B', border: 'none', cursor: 'pointer', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', fontWeight: 600, transition: 'all 0.3s ease' }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            Submit Your Case →
          </a>
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
