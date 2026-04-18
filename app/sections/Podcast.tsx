'use client'

import { useReveal, useMouse } from '../hooks'

export function Podcast() {
  const ref = useReveal()
  const episodes = [
    { n: '014', title: 'The overloaded bucket hypothesis', guest: 'Dr. Amy Joneydi', dur: '42 min' },
    { n: '013', title: 'What the Yasko panel actually tells you', guest: 'Jess M.', dur: '58 min' },
    { n: '012', title: 'When binders backfire', guest: 'Claire H.', dur: '36 min' },
  ]
  return (
    <section id="podcast" style={{ borderBottom: '1px solid var(--rule)', background: 'var(--cream-2)' }}>
      <div className="container reveal" ref={ref} style={{ padding: '140px 40px' }}>
        <div className="pod-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div style={{ position: 'relative', aspectRatio: '1 / 1', background: 'var(--ink)', color: 'var(--cream)', overflow: 'hidden' }}>
            <svg viewBox="0 0 400 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}>
              {Array.from({ length: 18 }).map((_, i) => (
                <circle key={i} cx="200" cy="200" r={30 + i * 10} fill="none" stroke="var(--teal-light)" strokeWidth="0.4" opacity={0.4 - i * 0.015} />
              ))}
            </svg>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 40,
                textAlign: 'center',
              }}
            >
              <p className="serif" style={{ fontSize: 'clamp(42px, 6vw, 72px)', margin: 0, lineHeight: 0.95, fontWeight: 300 }}>
                Plan B
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
                <div style={{ width: 32, height: 1, background: 'var(--teal-light)' }} />
                <p className="mono" style={{ fontSize: 10, letterSpacing: '0.5em', color: 'var(--teal-light)', margin: 0 }}>
                  FOR PANS
                </p>
                <div style={{ width: 32, height: 1, background: 'var(--teal-light)' }} />
              </div>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: '#d4cbb6', margin: '40px 0 0', fontWeight: 300 }}>
                a podcast in 14 episodes &amp; counting
              </p>
            </div>
            <div style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--teal-light)', letterSpacing: '0.2em' }}>
              SIDE A · 33⅓
            </div>
            <div
              style={{ position: 'absolute', bottom: 20, right: 20, fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--teal-light)', letterSpacing: '0.2em' }}
            >
              EP. 01 – 14
            </div>
          </div>
          <div>
            <p className="eyebrow teal" style={{ marginBottom: 28 }}>
              § 05 &nbsp;·&nbsp; The podcast
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(46px, 6.2vw, 86px)',
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: '-0.02em',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              Plan B
              <br />
              for PANS.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--ink-soft)', fontWeight: 300, marginTop: 28, maxWidth: 520 }}>
              Conversations with the parents, practitioners, and researchers figuring PANS out in real time. The tracker and the podcast are two halves of the same project.
            </p>
            <div style={{ marginTop: 36, borderTop: '1px solid var(--ink)' }}>
              {episodes.map((e) => (
                <a
                  href="#"
                  key={e.n}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr auto',
                    alignItems: 'center',
                    gap: 20,
                    padding: '18px 0',
                    borderBottom: '1px solid var(--rule)',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    transition: 'padding 200ms ease',
                  }}
                  onMouseEnter={(ev) => ((ev.currentTarget as HTMLAnchorElement).style.paddingLeft = '8px')}
                  onMouseLeave={(ev) => ((ev.currentTarget as HTMLAnchorElement).style.paddingLeft = '0')}
                >
                  <span className="mono" style={{ fontSize: 11, color: 'var(--mute)', letterSpacing: '0.1em' }}>
                    EP.{e.n}
                  </span>
                  <div>
                    <p className="serif" style={{ fontSize: 20, margin: 0, fontWeight: 400, lineHeight: 1.2 }}>
                      {e.title}
                    </p>
                    <p style={{ fontSize: 12, margin: 0, marginTop: 4, color: 'var(--mute)' }}>
                      w/ {e.guest} · {e.dur}
                    </p>
                  </div>
                  <span style={{ fontSize: 18, color: 'var(--teal)' }}>→</span>
                </a>
              ))}
            </div>
            <a href="#" className="btn btn-ghost" style={{ marginTop: 32 }}>
              All episodes <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  const ref = useReveal()
  const mouse = useMouse()
  return (
    <section id="start" style={{ background: 'var(--teal)', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -60,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(200px, 38vw, 520px)',
          color: 'rgba(246,241,231,0.06)',
          lineHeight: 0.8,
          pointerEvents: 'none',
          fontWeight: 300,
          whiteSpace: 'nowrap',
        }}
      >
        puzzle.
      </div>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(246,241,231,0.1) 0%, transparent 60%)',
          left: `calc(${mouse.x * 100}% - 350px)`,
          top: `calc(${mouse.y * 100}% - 350px)`,
          transition: 'left 1.2s ease, top 1.2s ease',
          pointerEvents: 'none',
        }}
      />
      <div className="container reveal" ref={ref} style={{ padding: '140px 40px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <p className="mono" style={{ fontSize: 10, color: '#a5d5d5', letterSpacing: '0.4em', margin: 0, marginBottom: 32 }}>
          FREE &nbsp;·&nbsp; PRIVATE &nbsp;·&nbsp; ANY MODALITY
        </p>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(54px, 8vw, 128px)',
            lineHeight: 0.95,
            fontWeight: 300,
            letterSpacing: '-0.025em',
            margin: 0,
            color: 'var(--cream)',
          }}
        >
          Start assembling
          <br />
          <span style={{ fontStyle: 'italic' }}>your kid&apos;s puzzle.</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.8, fontWeight: 300, color: '#d4eaea', maxWidth: 520, margin: '40px auto 0' }}>
          Reach out and I&apos;ll send a private intake link for your child. No account to create. No email list. Just the tracker.
        </p>
        <a href="mailto:rachel@planbforpans.com?subject=Plan%20B%20intake%20link" className="btn btn-cream" style={{ marginTop: 44, padding: '22px 38px', fontSize: 11 }}>
          Request an intake link <span className="arr">→</span>
        </a>
        <div
          style={{
            marginTop: 80,
            paddingTop: 32,
            borderTop: '1px solid rgba(246,241,231,0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--mono)',
            fontSize: 10,
            color: '#a5d5d5',
            letterSpacing: '0.15em',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <span>↓ END OF ISSUE 01</span>
          <span>RACHEL TAYLOR · 2026</span>
          <span>PRIVATE DATA. PUBLIC INSIGHTS.</span>
        </div>
      </div>
    </section>
  )
}
