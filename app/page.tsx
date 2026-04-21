'use client'

import { useEffect, useRef } from 'react'
import BucketSection from './_components/BucketSection'
import MethodSection from './_components/MethodSection'

const marqueeTerms: { text: string; italic?: boolean }[] = [
  { text: 'PANS', italic: true },
  { text: 'PANDAS', italic: true },
  { text: 'Autism', italic: true },
  { text: 'Regression' },
  { text: 'Rage & meltdowns' },
  { text: 'OCD' },
  { text: 'Food aversions' },
  { text: 'Mold' },
  { text: 'Methylation' },
  { text: 'Gut dysbiosis' },
  { text: 'Lyme' },
  { text: 'Bartonella' },
  { text: 'Mast cell' },
  { text: 'Peptides' },
  { text: 'Craniosacral' },
  { text: 'DNRS' },
  { text: 'Severe dysregulation', italic: true },
]

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
            background: 'radial-gradient(circle, rgba(31,107,107,0.14) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(212,203,182,0.55) 0%, transparent 70%)',
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
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              A coordination layer for parents of kids with PANS, PANDAS, autism, and severe
              dysregulation. Built from the specialists who rarely talk to each other. Free —
              for as long as it can be.
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

          {/* Right — portrait block */}
          <div
            className="fade delay-2 hero-portrait"
            style={{
              position: 'relative',
              paddingLeft: 24,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 40,
                right: 40,
                bottom: -40,
                left: 64,
                background: 'var(--teal)',
                opacity: 0.92,
                zIndex: 0,
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <img
                src="/rachel-podcast.jpg"
                alt="Rachel Johnson, founder of Plan B for PANS"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'grayscale(100%) contrast(1.06)',
                  boxShadow: '0 40px 80px -30px rgba(0,0,0,0.55)',
                }}
              />
              <div
                style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--sand)',
                  borderTop: 'none',
                  padding: '20px 22px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: 'var(--ink)',
                    lineHeight: 1.4,
                    marginBottom: 14,
                  }}
                >
                  &ldquo;What healed my son wasn&apos;t a secret buried somewhere. The problem
                  wasn&apos;t missing information. It was that nobody in the system could see it
                  all at once.&rdquo;
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
      </section>

      {/* BUCKET */}
      <BucketSection />

      {/* METHOD */}
      <MethodSection />

      {/* MARQUEE — what Plan B covers */}
      <section
        aria-label="What Plan B covers"
        style={{
          padding: '44px 0',
          background: 'var(--cream)',
          borderTop: '1px solid var(--sand)',
          borderBottom: '1px solid var(--sand)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
          <div className="marquee-track">
            {[...Array(2)].flatMap((_, copy) =>
              marqueeTerms.map((term, i) => (
                <span key={`${copy}-${i}`} className="marquee-item">
                  {term.italic ? <em>{term.text}</em> : term.text}
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--sand)',
          borderBottom: '1px solid var(--sand)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              What Plan B is
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(34px, 6.5vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                marginBottom: 48,
                color: 'var(--ink)',
                lineHeight: 1.1,
              }}
            >
              The coordination layer <br />
              <em style={{ color: 'var(--teal)' }}>parents never had.</em>
            </h2>
          </div>

          <div className="reveal-stagger">
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                maxWidth: 720,
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              The microbiome specialist understands the gut but not methylation. The methylation
              specialist understands genetics but not mold. The mold specialist doesn&apos;t know
              what the craniosacral therapist is doing.
            </p>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                maxWidth: 720,
                margin: '28px auto 0',
                textAlign: 'center',
              }}
            >
              Each of them is right about their piece. None of them are seeing the whole kid.
              None of them are talking to each other.
            </p>

            <p
              style={{
                fontSize: 20,
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'var(--teal)',
                maxWidth: 600,
                margin: '56px auto 0',
                textAlign: 'center',
              }}
            >
              Plan B reads your kid&apos;s full story and tells you what a team of ten
              specialists might have said if they&apos;d actually been in a room together.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES — three pillars */}
      <section style={{ padding: '120px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              How it works
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(34px, 6.5vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                color: 'var(--ink)',
                lineHeight: 1.1,
              }}
            >
              Three things, <em style={{ color: 'var(--teal)' }}>done right.</em>
            </h2>
          </div>

          <div
            className="reveal-stagger"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            <Pillar
              n="01"
              title="Full intake"
              body="Pregnancy, birth, environment, diet, every medication and modality tried, every symptom, every lab. Plan B asks the questions a careful practitioner would."
            />
            <Pillar
              n="02"
              title="Daily tracker"
              body="One-tap symptom logging. Notice flares before you'd otherwise connect the dots. Share with your practitioner as a real timeline, not a memory."
            />
            <Pillar
              n="03"
              title="A real thinking partner"
              body="Synthesis across practitioner silos — functional medicine, microbiome, methylation, craniosacral, mold, peptides, and more. Ask anything, 2am included."
            />
          </div>
        </div>
      </section>

      {/* PODCAST */}
      <section
        id="listen"
        style={{
          padding: '120px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--sand)',
          borderBottom: '1px solid var(--sand)',
        }}
      >
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              The podcast
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(34px, 6.5vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                marginBottom: 22,
                lineHeight: 1.1,
              }}
            >
              Finding your path when <br />
              <em style={{ color: 'var(--teal)' }}>standard protocols fail.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                maxWidth: 640,
                margin: '0 auto',
              }}
            >
              Case studies, parent experience, and deep explorations of the fringe modalities
              that actually moved the needle for our kids. New interviews plus the full back
              catalog of what we&apos;ve learned along the way.
            </p>
          </div>

          <div className="reveal" style={{ maxWidth: 360, margin: '0 auto 48px' }}>
            <img
              src="/rachel-podcast.jpg"
              alt="Rachel Johnson, host of Plan B for PANS"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'grayscale(100%) contrast(1.04)',
                boxShadow: '0 40px 80px -40px rgba(0,0,0,0.45)',
              }}
            />
            <p className="label-tracked" style={{ marginTop: 14, textAlign: 'center' }}>
              Rachel Johnson · Host
            </p>
          </div>

          <div
            className="reveal"
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--sand)',
              borderRadius: 4,
              padding: '48px 32px',
              textAlign: 'center',
              boxShadow: '0 30px 80px -40px rgba(20,20,20,0.18)',
            }}
          >
            <p
              className="eyebrow"
              style={{ marginBottom: 14, color: 'var(--sand-dark)' }}
            >
              Episodes · Dropping soon
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 22,
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.5,
                maxWidth: 520,
                margin: '0 auto',
                fontWeight: 400,
              }}
            >
              New conversations, case studies, and deep-dives on the fringe modalities that
              actually work — recorded and in edit.
            </p>
          </div>
        </div>
      </section>

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

function Pillar({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div
      className="card-hover"
      style={{
        background: 'var(--paper)',
        border: '1px solid var(--sand)',
        borderRadius: 4,
        padding: '36px 28px',
        position: 'relative',
      }}
    >
      <p className="label-tracked" style={{ color: 'var(--teal)', marginBottom: 24 }}>
        {n}
      </p>
      <h3
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 28,
          fontWeight: 400,
          letterSpacing: '-0.01em',
          marginBottom: 12,
          color: 'var(--ink)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.75,
          color: 'var(--ink-soft)',
          fontWeight: 300,
        }}
      >
        {body}
      </p>
    </div>
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
