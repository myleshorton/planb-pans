'use client'

import { useReveal } from '../hooks'

export function About() {
  const ref = useReveal()
  return (
    <section id="about" style={{ borderBottom: '1px solid var(--rule)', background: 'var(--cream)' }}>
      <div className="container reveal" ref={ref} style={{ padding: '140px 40px' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'stretch' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 28 }}>
              § 04 &nbsp;·&nbsp; Who&apos;s behind this
            </p>

            {/* Rachel's portrait — podcast cover art */}
            <div
              style={{
                marginBottom: 32,
                maxWidth: 320,
                position: 'relative',
                border: '1px solid var(--ink)',
                boxShadow: '0 30px 60px -30px rgba(20,20,20,0.35)',
              }}
            >
              <img
                src="/rachel-podcast.jpg"
                alt="Rachel Taylor, host of Plan B for PANS"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <p
                className="mono"
                style={{
                  position: 'absolute',
                  bottom: -22,
                  left: 0,
                  fontSize: 9,
                  color: 'var(--mute)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                Rachel Taylor · Host · Austin, TX
              </p>
            </div>

            <h2 className="serif" style={{ fontSize: 'clamp(46px, 6vw, 82px)', lineHeight: 0.95, fontWeight: 300, letterSpacing: '-0.02em', margin: '32px 0 0' }}>
              Rachel Taylor.
            </h2>
            <p
              className="serif"
              style={{
                fontSize: 'clamp(22px, 2.6vw, 34px)',
                lineHeight: 1.15,
                color: 'var(--teal)',
                fontStyle: 'italic',
                fontWeight: 300,
                margin: '12px 0 36px',
              }}
            >
              Researcher. Mom.
              <br />
              Puzzle-putter-together-er.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 540 }}>
              I went down the PANS rabbit hole the way most PANS parents do — because my kid was sick, conventional medicine ran out of answers, and I had to become the researcher nobody was going to hand me.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--ink-soft)', fontWeight: 300, marginTop: 16, maxWidth: 540 }}>
              Plan B is what I wished I&apos;d had at 2am, staring at a new symptom and a dozen variables in play. It&apos;s not a protocol. It&apos;s not a clinic. It&apos;s a way to see your kid&apos;s pattern — one modality, one symptom, one week at a time.
            </p>
            <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
              {[
                { k: '3 yrs', v: 'in the rabbit hole' },
                { k: '1 kid', v: 'on the other side' },
                { k: '127 families', v: 'trusting the tool' },
              ].map((s, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--ink)', paddingTop: 10 }}>
                  <p className="serif" style={{ fontSize: 22, margin: 0, fontWeight: 400 }}>
                    {s.k}
                  </p>
                  <p
                    className="mono"
                    style={{ fontSize: 9, color: 'var(--mute)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0, marginTop: 4 }}
                  >
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              background: 'var(--ink)',
              color: 'var(--cream)',
              padding: '64px 56px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              minHeight: 440,
            }}
          >
            <div>
              <span
                className="serif"
                style={{
                  position: 'absolute',
                  top: 24,
                  left: 36,
                  fontSize: 140,
                  lineHeight: 1,
                  color: 'var(--teal-light)',
                  opacity: 0.4,
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                &ldquo;
              </span>
            </div>
            <p
              className="serif"
              style={{
                fontSize: 'clamp(22px, 2.4vw, 30px)',
                lineHeight: 1.4,
                fontStyle: 'italic',
                fontWeight: 300,
                margin: 0,
                marginTop: 40,
                color: '#F6F1E7',
                position: 'relative',
                zIndex: 2,
              }}
            >
              Every PANS kid is a unique puzzle. The work isn&apos;t matching them to a protocol — it&apos;s assembling their specific puzzle, one piece at a time. That&apos;s what Plan B is for.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 48 }}>
              <div style={{ width: 44, height: 1, background: 'var(--teal-light)' }} />
              <p className="mono" style={{ fontSize: 10, color: 'var(--teal-light)', letterSpacing: '0.3em', margin: 0 }}>
                RACHEL, AUSTIN TX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
