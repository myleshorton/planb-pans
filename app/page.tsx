'use client'

import { useEffect, useRef } from 'react'
import BucketSection from './_components/BucketSection'

export default function Home() {
  const revealRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('in-view')
        })
      },
      { threshold: 0.14, rootMargin: '-40px 0px' },
    )
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main ref={revealRef} style={{ background: 'var(--cream)' }}>
      {/* HERO — editorial split */}
      <section
        className="graph-paper"
        style={{
          minHeight: '94vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bloom-float"
          style={{
            position: 'absolute',
            top: -220,
            right: -200,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="bloom-float-alt"
          style={{
            position: 'absolute',
            bottom: -240,
            left: -220,
            width: 640,
            height: 640,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,203,182,0.45) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 1240,
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: 'clamp(40px, 6vw, 96px)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left — text */}
          <div>
            <p className="eyebrow rise delay-1 caret" style={{ marginBottom: 22 }}>
              There is always a Plan B
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(52px, 9vw, 104px)',
                fontWeight: 300,
                letterSpacing: '-0.028em',
                lineHeight: 0.98,
                marginBottom: 30,
                color: 'var(--ink)',
              }}
            >
              <span className="word" style={{ animationDelay: '0.18s' }}>When</span>{' '}
              <span className="word" style={{ animationDelay: '0.30s' }}>standard</span>
              <br />
              <span
                className="word word-italic"
                style={{
                  fontStyle: 'italic',
                  color: 'var(--teal)',
                  fontWeight: 400,
                  animationDelay: '0.46s',
                }}
              >
                protocols
              </span>{' '}
              <span
                className="word word-italic"
                style={{
                  fontStyle: 'italic',
                  color: 'var(--teal)',
                  fontWeight: 400,
                  animationDelay: '0.58s',
                }}
              >
                fail.
              </span>
            </h1>

            <p
              className="rise delay-3"
              style={{
                fontSize: 19,
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 580,
                marginBottom: 40,
              }}
            >
              Plan B explains every treatment option out there, reads your kid&apos;s full
              story, and builds a protocol so you stop guessing. For PANS, PANDAS, autism, and
              severe dysregulation. Free, for as long as it can be.
            </p>

            <div
              className="rise delay-4"
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://app.planbforpans.com/signup"
                target="_blank"
                rel="noopener"
                className="cta-teal"
                style={{ textDecoration: 'none' }}
              >
                Start your intake →
              </a>
              <a
                href="#listen"
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--teal)',
                  border: '1px solid var(--sand)',
                  borderRadius: 4,
                  textDecoration: 'none',
                  background: 'transparent',
                }}
              >
                Listen to the podcast
              </a>
            </div>

            <p
              className="fade delay-6"
              style={{
                marginTop: 56,
                fontSize: 11,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--sand-dark)',
                fontWeight: 500,
              }}
            >
              ↓ &nbsp; What Plan B is
            </p>
          </div>

          {/* Right — silhouette editorial block */}
          <div
            className="fade delay-2 hero-portrait"
            style={{
              position: 'relative',
              paddingLeft: 24,
            }}
          >
            {/* Teal offset panel behind the image */}
            <div
              style={{
                position: 'absolute',
                top: 28,
                right: 28,
                bottom: -32,
                left: 52,
                background: 'var(--teal)',
                zIndex: 0,
              }}
            />
            {/* Vertical editorial masthead strip */}
            <p
              className="mono"
              style={{
                position: 'absolute',
                top: 32,
                left: 2,
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                zIndex: 2,
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              № 01 &middot; The Plan B protocol &middot; Synthesized by the bot
            </p>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  position: 'relative',
                  background: 'var(--cream)',
                  border: '1px solid var(--ink)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/kid-silhouette.png"
                  alt="Silhouette of a child — representing every kid Plan B is built for"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    mixBlendMode: 'multiply',
                    padding: '20px 30px 0',
                  }}
                />

                {/* Circular seal overlay, top-right */}
                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 92,
                    height: 92,
                    borderRadius: '50%',
                    border: '1px solid var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--cream)',
                    zIndex: 3,
                  }}
                >
                  <svg viewBox="0 0 92 92" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <defs>
                      <path id="sealArc" d="M 46 46 m -34 0 a 34 34 0 1 1 68 0 a 34 34 0 1 1 -68 0" />
                    </defs>
                    <text fontFamily="var(--mono)" fontSize="7" fill="#141414" letterSpacing="2">
                      <textPath href="#sealArc" startOffset="0">
                        PLAN B · FOR PANS · EST. 2026 · FOR THE KIDS ·
                      </textPath>
                    </text>
                  </svg>
                  <p
                    className="serif"
                    style={{
                      fontSize: 26,
                      fontStyle: 'italic',
                      color: 'var(--teal)',
                      fontWeight: 400,
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    №01
                  </p>
                </div>

                {/* Caption under the image inside the frame */}
                <div
                  style={{
                    background: 'var(--cream)',
                    borderTop: '1px solid var(--ink)',
                    padding: '18px 22px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(17px, 1.9vw, 21px)',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: 'var(--ink)',
                      lineHeight: 1.4,
                      marginBottom: 12,
                    }}
                  >
                    &ldquo;What healed my son wasn&apos;t a secret buried somewhere. It was that
                    nobody in the system could see it all at once.&rdquo;
                  </p>
                  <p
                    className="label-tracked"
                    style={{ color: 'var(--teal)', fontWeight: 600 }}
                  >
                    Rachel Johnson · Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PLAN B DOES — three pillars */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <div style={{ marginBottom: 56, maxWidth: 860 }}>
            <p className="eyebrow" style={{ marginBottom: 22 }}>
              What Plan B does
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(32px, 5.4vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                lineHeight: 1.05,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              Explain every option.
              <br />
              Read your kid.{' '}
              <em style={{ color: 'var(--teal)' }}>
                Build a protocol.
              </em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 24,
                maxWidth: 680,
              }}
            >
              In the beginning we&apos;ll be guessing and learning together. That&apos;s honest.
              But as real cohorts run and real data comes in, we move — together — from hope
              to solutions.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 0,
              borderTop: '1px solid var(--ink)',
              borderBottom: '1px solid var(--ink)',
            }}
            className="pillars-grid"
          >
            {[
              {
                n: '01',
                label: 'The podcast',
                title: 'The landscape',
                body: "Every fringe modality explained honestly — functional medicine, homeopathy, phage therapy, biomagnetism, methylation, craniosacral, peptides, mold protocols, and the rest. Which kind of kid each one actually works for. Who the good practitioners are. What the standard system doesn&apos;t tell you.",
              },
              {
                n: '02',
                label: 'The bot',
                title: "Your kid\u2019s protocol",
                body: "Plan B reads every modality, every practitioner teaching, every clinical study we run — then reads your kid&apos;s full history on top of that. Synthesizes all of it into a protocol tailored to your kid. So you aren&apos;t guessing in the dark.",
              },
              {
                n: '03',
                label: 'The cohorts',
                title: 'Real case studies',
                body: "Ten-kid cohorts tracked for six months on one modality at a time. Documented openly. As the data comes in, Plan B gets sharper — which modalities actually move the needle, in which sequence, for which kind of kid. Hope becomes signal.",
              },
            ].map((c, i, arr) => (
              <div
                key={c.n}
                style={{
                  padding: '32px 28px',
                  borderRight: i < arr.length - 1 ? '1px solid var(--sand)' : 'none',
                  position: 'relative',
                }}
              >
                <p
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.24em',
                    color: 'var(--teal)',
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  § {c.n} · {c.label}
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 26,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                    color: 'var(--ink)',
                    margin: '6px 0 14px',
                  }}
                >
                  {c.title}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: 'var(--ink-soft)',
                    fontWeight: 300,
                  }}
                  dangerouslySetInnerHTML={{ __html: c.body }}
                />
              </div>
            ))}
          </div>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.4,
              fontWeight: 400,
              margin: '56px 0 0',
              maxWidth: 760,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            From <span style={{ color: 'var(--teal)' }}>hope</span> to{' '}
            <span style={{ color: 'var(--teal)' }}>solutions.</span> That&apos;s the whole idea.
          </p>
        </div>
      </section>

      {/* BUCKET */}
      <BucketSection />

      {/* INSTALL */}
      <section style={{ padding: '120px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Put Plan B on your phone
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(34px, 6.5vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                marginBottom: 18,
                lineHeight: 1.1,
              }}
            >
              No app store. <em style={{ color: 'var(--teal)' }}>No download.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                maxWidth: 600,
                margin: '0 auto',
              }}
            >
              Plan B lives on your home screen like any other app. Updates automatically. Works
              offline for the daily tracker.
            </p>
          </div>

          <div
            className="reveal-stagger"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
              marginBottom: 48,
            }}
          >
            <InstallCard
              device="iPhone · Safari"
              steps={[
                <>Open <strong>app.planbforpans.com</strong> in Safari</>,
                <>Tap the <strong>Share</strong> button (square with arrow)</>,
                <>Scroll down, tap <strong>Add to Home Screen</strong></>,
                <>Tap <strong>Add</strong></>,
              ]}
            />
            <InstallCard
              device="Android · Chrome"
              steps={[
                <>Open <strong>app.planbforpans.com</strong> in Chrome</>,
                <>Tap the <strong>⋮</strong> menu (top right)</>,
                <>Tap <strong>Install app</strong> (or <strong>Add to Home screen</strong>)</>,
                <>Tap <strong>Install</strong></>,
              ]}
            />
          </div>

          <div className="reveal" style={{ textAlign: 'center' }}>
            <a
              href="https://app.planbforpans.com/signup"
              target="_blank"
              rel="noopener"
              className="cta-teal"
              style={{ textDecoration: 'none' }}
            >
              Open Plan B →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function InstallCard({ device, steps }: { device: string; steps: React.ReactNode[] }) {
  return (
    <div
      className="card-hover"
      style={{
        background: 'var(--paper)',
        border: '1px solid var(--sand)',
        borderRadius: 4,
        padding: 28,
      }}
    >
      <p className="eyebrow" style={{ marginBottom: 14 }}>
        {device}
      </p>
      <ol
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 15,
          color: 'var(--ink)',
          lineHeight: 1.9,
          paddingLeft: 22,
          margin: 0,
          fontWeight: 300,
        }}
      >
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  )
}
