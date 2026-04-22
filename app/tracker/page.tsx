'use client'

import MethodSection from '../_components/MethodSection'
import { useReveal } from '../_components/hooks'

export default function TrackerPage() {
  const intro = useReveal()
  const close = useReveal()
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
            right: -200,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={intro}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            Daily tracker · What it actually does
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
            The log you wish <em style={{ color: 'var(--teal)' }}>you&apos;d been keeping.</em>
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
            A PANS kid on a protocol generates more variables in a week than anyone can hold in
            their head. The tracker is how you stop guessing — and how Claude gets the signal
            it needs to tell you what&apos;s actually working.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20,
              marginTop: 56,
            }}
          >
            {[
              {
                k: 'One tap',
                v: 'Log meds, symptoms, reactions in seconds. Works offline.',
              },
              {
                k: 'Weekly roll-up',
                v: 'Rate each symptom 0–10. Spot trends before they become crises.',
              },
              {
                k: 'Analysis on demand',
                v: 'Claude reads your full timeline and flags correlations you&apos;d miss.',
              },
              {
                k: 'Share-ready',
                v: 'Export clean timelines to take into any practitioner appointment.',
              },
            ].map((c) => (
              <div
                key={c.k}
                style={{
                  borderTop: '1px solid var(--ink)',
                  paddingTop: 18,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: 'var(--ink)',
                    marginBottom: 10,
                  }}
                >
                  {c.k}
                </p>
                <p
                  style={{
                    fontSize: 13.5,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                  dangerouslySetInnerHTML={{ __html: c.v }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method graphic — the 4-step visual already built */}
      <MethodSection />

      {/* The deeper story */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--cream)',
        }}
      >
        <div
          ref={close}
          className="pb-container reveal"
          style={{ maxWidth: 960 }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: 64,
              alignItems: 'start',
            }}
            className="tracker-deep"
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>
                Why it matters
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: 'clamp(34px, 5vw, 54px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  margin: 0,
                  color: 'var(--ink)',
                }}
              >
                Memory is the <em style={{ color: 'var(--teal)' }}>first thing to go.</em>
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: 'var(--ink-soft)',
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Every PANS parent has had this moment: three months into a new protocol the kid
                is worse, and you genuinely cannot remember if it started before or after the
                binder. Or the guanfacine bump. Or the move. Or the sibling&apos;s strep.
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: 'var(--ink-soft)',
                  fontWeight: 300,
                  marginTop: 18,
                }}
              >
                You are running a clinical trial on your own child, with ten variables in play
                and no lab notebook. The tracker is the notebook. Not for paperwork — for
                signal. Six weeks of daily taps and the pattern becomes visible in a way no
                memory can hold.
              </p>
              <p
                className="serif"
                style={{
                  fontSize: 24,
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  margin: '32px 0 0',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  borderLeft: '3px solid var(--teal)',
                  paddingLeft: 22,
                }}
              >
                The log is the protocol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 24px 120px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            Start free
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 30,
              color: 'var(--ink)',
            }}
          >
            When the protocols fail,
            <br />
            <em style={{ color: 'var(--teal)' }}>this is your Plan B.</em>
          </h2>
          <a
            href="https://app.planbforpans.com/signup"
            target="_blank"
            rel="noopener"
            className="cta-teal"
            style={{ textDecoration: 'none' }}
          >
            Start tracking →
          </a>
        </div>
      </section>
    </main>
  )
}
