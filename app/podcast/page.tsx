'use client'

import { useReveal } from '../_components/hooks'

export default function PodcastPage() {
  const ref = useReveal()
  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <section
        style={{
          padding: '120px 24px 80px',
          borderBottom: '1px solid var(--rule)',
          background: 'var(--cream-light)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bloom-float"
          style={{
            position: 'absolute',
            top: -180,
            right: -180,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,58,95,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={ref}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            The Plan B podcast
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 300,
              letterSpacing: '-0.026em',
              lineHeight: 0.98,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1000,
            }}
          >
            Finding your path when <em style={{ color: 'var(--teal)' }}>standard protocols fail.</em>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 720,
              marginTop: 28,
            }}
          >
            Case studies, parent experience, and deep explorations of the fringe modalities that
            actually moved the needle for our kids. Not a single-lens medical podcast — a
            multi-modal conversation about real healing, real setbacks, and what the standard
            system keeps missing.
          </p>
        </div>
      </section>

      {/* Two-column: portrait + what the podcast covers */}
      <section style={{ padding: '100px 24px', background: 'var(--cream)' }}>
        <div
          className="pb-container"
          style={{
            maxWidth: 1080,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.2fr)',
            gap: 'clamp(32px, 5vw, 72px)',
            alignItems: 'start',
          }}
        >
          {/* Portrait column */}
          <div
            style={{
              position: 'relative',
              paddingRight: 16,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 32,
                right: 0,
                bottom: -32,
                left: 32,
                background: 'var(--teal)',
                opacity: 0.92,
                zIndex: 0,
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <img
                src="/rachel-podcast.jpg"
                alt="Rachel Johnson, host of Plan B for PANS"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'grayscale(100%) contrast(1.06)',
                  boxShadow: '0 40px 80px -30px rgba(0,0,0,0.55)',
                }}
              />
              <p
                className="label-tracked"
                style={{
                  marginTop: 16,
                  color: 'var(--teal)',
                  fontWeight: 600,
                }}
              >
                Rachel Johnson · Host
              </p>
            </div>
          </div>

          {/* What it covers */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              What you&apos;ll hear
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 22,
              }}
            >
              {[
                {
                  k: 'Case studies',
                  v: 'Real kids, real protocols, real outcomes — the fringe modalities tracked across our cohort.',
                },
                {
                  k: 'Parent experience',
                  v: 'What it was like from the inside. The 2am googling. The specialists we got right. The ones we didn’t.',
                },
                {
                  k: 'Deep dives on fringe modalities',
                  v: 'Craniosacral, methylation, phage, peptides, DNRS, biomagnetism, homeopathy, mold, and more — explained honestly, not pitched.',
                },
                {
                  k: 'Practitioner conversations',
                  v: 'When they come, they come with real questions — not infomercials. How they actually think about these kids.',
                },
                {
                  k: 'Finding your path',
                  v: 'How to sequence modalities when the system gives you nothing. What to try, what to pause, what to rule out.',
                },
              ].map((x) => (
                <li
                  key={x.k}
                  style={{
                    borderTop: '1px solid var(--ink)',
                    paddingTop: 18,
                  }}
                >
                  <p
                    className="serif"
                    style={{
                      fontSize: 26,
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.15,
                      color: 'var(--ink)',
                      marginBottom: 10,
                    }}
                  >
                    {x.k}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    {x.v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Coming soon card */}
      <section
        style={{
          padding: '80px 24px 120px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 780 }}>
          <div
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--sand)',
              borderRadius: 4,
              padding: 'clamp(32px, 5vw, 56px)',
              textAlign: 'center',
              boxShadow: '0 30px 80px -40px rgba(20,20,20,0.18)',
            }}
          >
            <p
              className="eyebrow"
              style={{ marginBottom: 16, color: 'var(--sand-dark)' }}
            >
              Episodes · Dropping soon
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.45,
                maxWidth: 560,
                margin: '0 auto 28px',
                fontWeight: 400,
              }}
            >
              New conversations, case studies, and deep-dives on the fringe modalities that
              actually work — recorded and in edit.
            </p>
            <p
              style={{
                fontSize: 13,
                color: 'var(--sand-dark)',
                fontFamily: 'var(--font-inter)',
                letterSpacing: '0.08em',
              }}
            >
              Subscribe in your podcast app of choice — links live here when Episode 01 drops.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
