'use client'

export default function Home() {
  return (
    <main>
      {/* Hero Section with Podcast */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '900px', width: '100%' }}>
          {/* Mission Statement */}
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(36px, 8vw, 72px)', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '24px', color: '#111', lineHeight: 1.2 }}>
              Plan B for PANS, PANDAS & Autism
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '18px', color: '#666', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
              When standard protocols fail, there is still hope. Explore alternative modalities, share real stories, and build a roadmap together. Parents and doctors collaborating to find answers.
            </p>
          </div>

          {/* Podcast Player Section */}
          <div style={{ backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '40px', marginBottom: '80px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '24px' }}>Latest Episode</p>

            <div style={{ backgroundColor: '#fff', borderRadius: '4px', padding: '40px', marginBottom: '24px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '16px', color: '#999', marginBottom: '16px' }}>🎙️ Podcast player will appear here</p>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '13px', color: '#ccc' }}>Connect Riverside.fm once first episode is recorded</p>
              </div>
            </div>

            <button style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '12px 24px', backgroundColor: '#111', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '2px' }}>
              Listen to All Episodes →
            </button>
          </div>

          {/* Featured Case Studies */}
          <div style={{ marginTop: '100px' }}>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '40px' }}>Active Case Studies</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {/* Case Study Card 1 */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #e0e0e0', padding: '32px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#16a34a', marginBottom: '12px' }}>Coming Soon</p>
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 400, marginBottom: '12px', color: '#111' }}>Case Study 1</h3>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '16px' }}>Real family journey exploring alternative modalities beyond standard protocols.</p>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', color: '#999' }}>Protocol: Plan B & C • Results: Ongoing</p>
              </div>

              {/* Case Study Card 2 */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #e0e0e0', padding: '32px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#16a34a', marginBottom: '12px' }}>Coming Soon</p>
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 400, marginBottom: '12px', color: '#111' }}>Case Study 2</h3>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '16px' }}>Tracking successes and challenges with integrated treatment approaches.</p>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', color: '#999' }}>Protocol: Multi-modal • Results: Documented</p>
              </div>

              {/* Case Study Card 3 */}
              <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #e0e0e0', padding: '32px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#16a34a', marginBottom: '12px' }}>Coming Soon</p>
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 400, marginBottom: '12px', color: '#111' }}>Case Study 3</h3>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '16px' }}>Doctor and parent collaboration discovering new treatment pathways.</p>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', color: '#999' }}>Protocol: Collaborative • Results: Evolving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '48px', fontWeight: 300, marginBottom: '24px', color: '#111' }}>
            Join Us
          </h2>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '16px', color: '#666', lineHeight: 1.8, marginBottom: '32px' }}>
            Parents exploring alternatives. Doctors sharing insights. Together we map the way forward.
          </p>
          <a href="/contact" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '16px 32px', backgroundColor: '#111', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '2px', textDecoration: 'none', display: 'inline-block' }}>
            Get Involved →
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
