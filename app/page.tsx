'use client'

export default function Home() {
  return (
    <main>
      {/* Hero Section - Hopeful & Warm */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #fff9f5 0%, #fff5f0 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative element */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,26,26,0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ maxWidth: '900px', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Inspiring Intro */}
          <div style={{ marginBottom: '80px', textAlign: 'center' }}>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c41a1a',
              marginBottom: '24px',
              fontWeight: 600
            }}>
              ✨ There Is Always a Plan B
            </p>

            <h1 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(44px, 10vw, 80px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              marginBottom: '32px',
              color: '#111',
              lineHeight: 1.15
            }}>
              When Standard <br /> Protocols Fail
            </h1>

            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '20px',
              color: '#555',
              lineHeight: 2,
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: 300
            }}>
              Learn about new modalities. Be part of case studies. Together, we build a new roadmap—a Plan B for the next generation of PANS, PANDAS, and autism. Our goal is to find solutions so we don't have to hope. This is the place where PANS, PANDAS, and some forms of autism will meet their end.
            </p>

            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#c41a1a',
              marginTop: '60px',
              marginBottom: '40px',
              fontWeight: 600
            }}>
              Listen to the Podcast
            </p>
          </div>

          {/* Podcast Player Section - Beautiful */}
          <div style={{
            background: 'linear-gradient(135deg, #fff 0%, #fef7f0 100%)',
            border: '2px solid #f0e0d8',
            borderRadius: '12px',
            padding: '60px 40px',
            marginBottom: '100px',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
          }}>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c41a1a',
              marginBottom: '32px',
              fontWeight: 600
            }}>
              🎙️ Listen to the Podcast
            </p>

            <div style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '60px 40px',
              marginBottom: '32px',
              minHeight: '240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ebe0d9'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎧</div>
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '16px',
                  color: '#999',
                  marginBottom: '8px'
                }}>
                  Podcast coming soon
                </p>
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '13px',
                  color: '#ccc'
                }}>
                  Interviews with parents, doctors & practitioners exploring Plans B through H
                </p>
              </div>
            </div>

            <button style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px 36px',
              backgroundColor: '#c41a1a',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a01515'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#c41a1a'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              Listen to Episodes →
            </button>
          </div>

        </div>
      </section>

      {/* CTA Section - Hopeful */}
      <section style={{
        padding: '120px 20px',
        background: 'linear-gradient(135deg, #c41a1a 0%, #a01515 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '64px',
            fontWeight: 300,
            marginBottom: '24px',
            color: '#fff',
            letterSpacing: '-0.02em'
          }}>
            You're Not Alone
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '18px',
            color: '#fff',
            lineHeight: 2,
            marginBottom: '48px',
            fontWeight: 300,
            opacity: 0.95
          }}>
            Thousands of parents are exploring Plans B, C, D and beyond. Doctors are collaborating. Alternative modalities are being documented. Hope is growing.
          </p>
          <a href="/contact" style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '13px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '18px 40px',
            backgroundColor: '#fff',
            color: '#c41a1a',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block',
            fontWeight: 600,
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            Join the Conversation →
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
