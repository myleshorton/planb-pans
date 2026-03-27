export default function CaseStudies() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Header */}
      <section style={{ padding: '80px 20px 40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '64px', fontWeight: 300, marginBottom: '24px', color: '#111' }}>
          Case Studies
        </h1>
        <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '18px', color: '#666', lineHeight: 1.8, maxWidth: '700px' }}>
          Real families on their journey. Tracking successes, challenges, and everything in between as we explore Plans B through H.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {/* Sample Case Study */}
          <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease' }}>
            <div style={{ padding: '32px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#16a34a', marginBottom: '8px' }}>FEATURED</p>
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
                  Started with Plan A (standard protocol). After 6 months, exploring Plan B with focus on [modality]. Documenting progress, challenges, and insights.
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

              <button style={{ width: '100%', padding: '12px', fontFamily: 'var(--font-inter), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', backgroundColor: '#111', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '2px' }}>
                Read Full Case Study →
              </button>
            </div>
          </div>

          {/* Placeholder Cards */}
          {[2, 3, 4].map((i) => (
            <div key={i} style={{ backgroundColor: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '14px', color: '#999', marginBottom: '8px' }}>Case Study #{i}</p>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', color: '#ccc' }}>Coming soon...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contribute Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '48px', fontWeight: 300, marginBottom: '24px', color: '#111' }}>
            Share Your Story
          </h2>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '16px', color: '#666', lineHeight: 1.8, marginBottom: '32px' }}>
            We're collecting case studies from families willing to share their journey. Help other parents find hope and options.
          </p>
          <a href="/contact" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 32px', backgroundColor: '#111', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '2px', textDecoration: 'none', display: 'inline-block' }}>
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
