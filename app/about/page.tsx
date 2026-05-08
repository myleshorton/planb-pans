'use client'

import { useReveal } from '../_components/hooks'

export default function AboutPage() {
  const head = useReveal()
  const body = useReveal()
  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <section
        style={{
          padding: '120px 24px 60px',
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
            background: 'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={head}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1000 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            About · How this started
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(44px, 7vw, 80px)',
              fontWeight: 300,
              letterSpacing: '-0.024em',
              lineHeight: 1,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 900,
            }}
          >
            I was the mom{' '}
            <em style={{ color: 'var(--teal)' }}>looking for Plan B.</em>
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 640,
              marginTop: 24,
            }}
          >
            Then I became the one building it.
          </p>
        </div>
      </section>

      {/* The story — condensed */}
      <section style={{ padding: '72px 24px', background: 'var(--cream)' }}>
        <div ref={body} className="pb-container reveal" style={{ maxWidth: 680 }}>
          <div style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink-soft)', fontWeight: 300 }}>
            <p style={{ marginBottom: 22 }}>
              I&apos;m Rachel. A mom of three, two with PANS. When my son was eight, he woke
              up a different kid — and then told me he wanted to die. That was year one:
              acute crisis. It was the hardest year of my life. There was a moment I nearly
              took my own — I couldn&apos;t hold the pain of watching my children suffer.
            </p>

            <p style={{ marginBottom: 22 }}>
              I visited every top PANS doctor I could reach. We went through multiple rounds
              of antibiotics. None of them helped. We ended up homeless for a stretch because
              of mold exposure. The doctors at the top of the field couldn&apos;t help us.
            </p>

            <p style={{ marginBottom: 22 }}>
              What eventually healed him wasn&apos;t hidden in a paper or behind a paywall.
              Biomagnetism, classical homeopathy, targeted functional medicine, nervous-system
              regulation — each one held a piece. He&apos;s 99% healed now.{' '}
              <em style={{ color: 'var(--ink)' }}>
                I still can&apos;t tell you exactly which part did what.
              </em>
            </p>

            <p
              className="serif"
              style={{
                fontSize: 'clamp(22px, 2.8vw, 28px)',
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.35,
                fontWeight: 400,
                margin: '36px 0',
                borderLeft: '3px solid var(--teal)',
                paddingLeft: 22,
              }}
            >
              The problem was never missing information.{' '}
              <span style={{ color: 'var(--teal)' }}>
                The problem was that nobody in the system could see it all at once.
              </span>
            </p>

            <p style={{ marginBottom: 22 }}>
              The microbiome person understood the gut but not methylation. The methylation
              person understood genetics but not mold. The moms who had already gotten through
              had figured this out — leaving breadcrumbs for each other in encrypted threads
              and 3am searches. When one found a real answer, her family needed her back. The
              threads went cold. The next family stayed lost.
            </p>

            <p style={{ marginBottom: 22 }}>
              When I quietly offered to help, <strong style={{ color: 'var(--ink)' }}>300
              families wrote back in twelve hours.</strong> Desperate. That&apos;s the scale
              of the need.
            </p>

            <p style={{ marginBottom: 22 }}>
              So I built Plan B. A coordination layer. Minta reads every modality
              outside the standard protocol, every published teaching, every cohort study we
              can put on the record, and reads your kid&apos;s full story on top of that. She
              synthesizes all of it into guidance specific to your child. She doesn&apos;t
              replace your practitioners — she helps you use them together. And she gets
              sharper every time a family joins.
            </p>

            <p
              className="serif"
              style={{
                fontSize: 'clamp(20px, 2.6vw, 26px)',
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.4,
                fontWeight: 400,
                margin: '36px 0 0',
                borderLeft: '3px solid var(--teal)',
                paddingLeft: 22,
              }}
            >
              Your child does not deserve to rage, to be locked in their room, or to try to
              leave this world. There is always a Plan B —{' '}
              <span style={{ color: 'var(--teal)' }}>
                and I&apos;m building it for them.
              </span>
            </p>

            <p
              className="label-tracked"
              style={{
                color: 'var(--sand-dark)',
                marginTop: 28,
                fontWeight: 600,
              }}
            >
              — Rachel Johnson
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '80px 24px 120px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <a
          href="https://app.planbforpans.com/intake"
          rel="noopener"
          className="cta-teal"
          style={{ textDecoration: 'none' }}
        >
          Start your intake →
        </a>
      </section>
    </main>
  )
}
