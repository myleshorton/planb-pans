'use client'

export default function CaseStudies() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)' }}>
      <section style={{ padding: '140px 20px 60px', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
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

        <p style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '13px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: '#1F6B6B',
          marginBottom: '20px',
          fontWeight: 600,
          position: 'relative',
          zIndex: 1,
        }}>
          Case Studies
        </p>

        <h1 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: '64px',
          fontWeight: 300,
          marginBottom: '32px',
          color: '#111',
          lineHeight: 1.1,
          position: 'relative',
          zIndex: 1,
        }}>
          Coming soon.
        </h1>

        <p style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '19px',
          color: '#4a4a4a',
          lineHeight: 1.7,
          maxWidth: '640px',
          marginBottom: '28px',
          position: 'relative',
          zIndex: 1,
        }}>
          We are documenting the healing journeys of our founding cohort — ten kids, matched by Plan B to the specialists they need. Every protocol, every lab, every breakthrough, tracked over time and shared back here with their families' consent.
        </p>

        <p style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '17px',
          color: '#666',
          lineHeight: 1.7,
          maxWidth: '640px',
          position: 'relative',
          zIndex: 1,
        }}>
          The first case studies will be published as each child's journey unfolds. Check back — or follow along on the podcast.
        </p>
      </section>
    </main>
  )
}
