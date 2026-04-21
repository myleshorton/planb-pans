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
              alt="Rachel Johnson, host of Plan B for PANS"
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
              Rachel Johnson · Host
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

          {/* Install on Phone Section */}
          <div style={{
            background: '#fff',
            border: '1px solid #e8e8e8',
            borderRadius: '12px',
            padding: '48px 40px',
            marginBottom: '80px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.04)'
          }}>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1F6B6B',
              marginBottom: '16px',
              fontWeight: 600,
              textAlign: 'center'
            }}>
              📱 Put Plan B on Your Phone
            </p>
            <h2 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(28px, 5vw, 38px)',
              fontWeight: 300,
              textAlign: 'center',
              marginBottom: '16px',
              color: '#111',
              letterSpacing: '-0.01em',
              lineHeight: 1.2
            }}>
              No app store. No download.
            </h2>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              color: '#666',
              lineHeight: 1.7,
              textAlign: 'center',
              maxWidth: '560px',
              margin: '0 auto 36px',
              fontWeight: 300
            }}>
              Plan B runs as a web app that lives on your home screen — like any other app, but with no app store, no approval process, and updates automatically.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <div style={{ padding: '24px', background: '#fafafa', borderRadius: '8px' }}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1F6B6B', marginBottom: '12px', fontWeight: 600 }}>iPhone · Safari</p>
                <ol style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '15px', color: '#333', lineHeight: 1.7, paddingLeft: '18px', margin: 0 }}>
                  <li>Open <strong>app.planbforpans.com</strong> in Safari</li>
                  <li>Tap the <strong>Share</strong> button (square with arrow)</li>
                  <li>Scroll down, tap <strong>Add to Home Screen</strong></li>
                  <li>Tap <strong>Add</strong></li>
                </ol>
              </div>
              <div style={{ padding: '24px', background: '#fafafa', borderRadius: '8px' }}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1F6B6B', marginBottom: '12px', fontWeight: 600 }}>Android · Chrome</p>
                <ol style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '15px', color: '#333', lineHeight: 1.7, paddingLeft: '18px', margin: 0 }}>
                  <li>Open <strong>app.planbforpans.com</strong> in Chrome</li>
                  <li>Tap the <strong>⋮</strong> menu (top right)</li>
                  <li>Tap <strong>Install app</strong> (or <strong>Add to Home screen</strong>)</li>
                  <li>Tap <strong>Install</strong></li>
                </ol>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a
                href="https://app.planbforpans.com/signup"
                target="_blank"
                rel="noopener"
                style={{
                  display: 'inline-block',
                  background: '#1F6B6B',
                  color: '#fff',
                  padding: '16px 36px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '14px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(31,107,107,0.2)',
                }}
              >
                Open Plan B →
              </a>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', color: '#999', marginTop: '16px', fontWeight: 300 }}>
                Once installed, you'll see the Plan B icon on your home screen — tap it like any app.
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
