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
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
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
              color: '#1F6B6B',
              marginBottom: '24px',
              fontWeight: 600
            }}>
              ✨ There Is Always a Plan B For PANS, PANDAS & Autism
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
              color: '#1F6B6B',
              marginTop: '60px',
              marginBottom: '40px',
              fontWeight: 600
            }}>
              Listen to the Podcast
            </p>
          </div>

          {/* Rachel's portrait */}
          <div style={{
            maxWidth: '380px',
            margin: '0 auto 60px',
            position: 'relative',
          }}>
            <img
              src="/rachel-podcast.jpg"
              alt="Rachel Taylor, host of Plan B for PANS"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'grayscale(100%) contrast(1.05)',
                boxShadow: '0 30px 60px -30px rgba(0,0,0,0.4)',
              }}
            />
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '10px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#999',
              marginTop: '16px',
              textAlign: 'center',
              fontWeight: 500,
            }}>
              Rachel Taylor · Host
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
              color: '#1F6B6B',
              marginBottom: '32px',
              fontWeight: 600
            }}>
              🎙️ Listen to the Podcast
            </p>

            <iframe style={{
              borderRadius: '8px',
              marginBottom: '32px',
              width: '100%',
              height: '352px'
            }} src="https://open.spotify.com/embed/show/0cVlSGzG1O4m6HZCFeKan9?utm_source=generator" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
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
