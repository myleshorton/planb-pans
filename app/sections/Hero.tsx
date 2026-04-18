'use client'

import { Fragment, useMemo } from 'react'
import { useReveal, useTick, useMouse, rand } from '../hooks'

function HeroTrackerCard() {
  const t = useTick()
  const symptoms = useMemo(
    () => [
      { name: 'OCD', color: '#1F6B6B', base: 8, decay: 4.5 },
      { name: 'Rage', color: '#c76a4a', base: 7, decay: 5.5 },
      { name: 'Tics', color: '#d4a24a', base: 6, decay: 3.5 },
      { name: 'Sleep', color: '#4f8f8f', base: 7, decay: 4.0 },
      { name: 'Anxiety', color: '#2a2a2a', base: 8, decay: 5.0 },
    ],
    [],
  )
  const weeks = 14
  const progress = Math.min(1, (t % 8) / 6)

  return (
    <div
      style={{
        background: '#F6F1E7',
        border: '1px solid var(--ink)',
        padding: '28px 28px 24px',
        position: 'relative',
        boxShadow: '0 40px 80px -40px rgba(20,20,20,0.35), 0 6px 0 rgba(20,20,20,0.05)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -1,
          right: -1,
          width: 24,
          height: 24,
          background: 'var(--cream)',
          borderLeft: '1px solid var(--ink)',
          borderBottom: '1px solid var(--ink)',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <div>
          <p className="eyebrow teal" style={{ marginBottom: 4 }}>
            Weekly Check-in · Milo, age 9
          </p>
          <p className="serif" style={{ fontSize: 26, lineHeight: 1, margin: 0 }}>
            12-week <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>trend</span>
          </p>
        </div>
        <p className="mono" style={{ fontSize: 10, color: 'var(--mute)', margin: 0 }}>
          FILE · mi-09-rt
        </p>
      </div>
      <div className="rule-soft" style={{ margin: '18px 0 14px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 10, alignItems: 'center' }}>
        {symptoms.map((s, si) => {
          const vals = Array.from({ length: weeks }).map((_, w) => {
            const base = s.base * Math.exp(-w / s.decay)
            const noise = (rand(si * 7 + w) - 0.5) * 1.6
            return Math.max(0, Math.min(10, base + noise))
          })
          return (
            <Fragment key={s.name}>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--ink-soft)', margin: 0, fontWeight: 500 }}>{s.name}</p>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${weeks}, 1fr)`, gap: 3 }}>
                {vals.map((v, w) => {
                  const appear = w / weeks < progress ? 1 : 0
                  const intensity = v / 10
                  return (
                    <div
                      key={w}
                      style={{
                        aspectRatio: '1 / 1',
                        background: s.color,
                        opacity: appear * (0.15 + intensity * 0.75),
                        transition: 'opacity 300ms ease',
                      }}
                    />
                  )
                })}
              </div>
            </Fragment>
          )
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 10, marginTop: 8 }}>
        <div />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="mono" style={{ fontSize: 9, color: 'var(--mute)' }}>
            wk 01
          </span>
          <span className="mono" style={{ fontSize: 9, color: 'var(--mute)' }}>
            wk 07
          </span>
          <span className="mono" style={{ fontSize: 9, color: 'var(--mute)' }}>
            wk 14 →
          </span>
        </div>
      </div>
      <div className="rule-soft" style={{ margin: '18px 0 14px' }} />
      <div style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '14px 16px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.08em',
            background: 'var(--teal)',
            padding: '3px 8px',
            color: 'var(--cream)',
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          CLAUDE
        </div>
        <p style={{ fontSize: 12, lineHeight: 1.6, margin: 0, color: '#e8e1cf' }}>
          Rage dropped 72% the week you paused <em style={{ color: 'var(--cream)', fontStyle: 'italic' }}>guanfacine</em>. Worth considering a slower reintroduction — tics ticked up same week, may be unrelated.
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  const ref = useReveal()
  const mouse = useMouse()
  return (
    <section id="top" style={{ position: 'relative', borderBottom: '1px solid var(--rule)', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            width: 620,
            height: 620,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 60%)',
            left: `calc(70% + ${(mouse.x - 0.5) * 40}px)`,
            top: `calc(10% + ${(mouse.y - 0.5) * 20}px)`,
            transform: 'translate(-50%, -30%)',
            transition: 'left 1.4s ease, top 1.4s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(199,106,74,0.10) 0%, transparent 60%)',
            left: `calc(15% + ${(mouse.x - 0.5) * -30}px)`,
            top: `calc(60% + ${(mouse.y - 0.5) * 25}px)`,
            transition: 'left 1.4s ease, top 1.4s ease',
          }}
        />
      </div>
      <div className="container reveal" ref={ref} style={{ padding: '48px 40px 100px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 70, paddingTop: 20 }}>
          <p className="mono" style={{ fontSize: 10, color: 'var(--mute)', margin: 0 }}>
            VOL. 01 &nbsp;·&nbsp; A research project &nbsp;·&nbsp; Austin, TX
          </p>
          <p className="mono" style={{ fontSize: 10, color: 'var(--mute)', margin: 0 }}>
            FREE &nbsp;/&nbsp; PRIVATE &nbsp;/&nbsp; ANY MODALITY
          </p>
        </div>
        <div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)', gap: 72, alignItems: 'start' }}
        >
          <div>
            <p className="eyebrow teal" style={{ marginBottom: 32 }}>
              ◦ &nbsp;Issue No. 01 — The Overloaded Bucket
            </p>
            <h1
              className="serif"
              style={{
                fontSize: 'clamp(56px, 9vw, 128px)',
                lineHeight: 0.92,
                letterSpacing: '-0.025em',
                fontWeight: 300,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              Solving <span style={{ fontStyle: 'italic', fontWeight: 300 }}>PANS,</span>
              <br />
              one puzzle
              <br />
              piece <span style={{ color: 'var(--teal)', fontStyle: 'italic' }}>at a time.</span>
            </h1>
            <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: '1fr', gap: 20, maxWidth: 560 }}>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, margin: 0 }}>
                <span
                  className="serif"
                  style={{
                    fontSize: 64,
                    lineHeight: 0.85,
                    fontWeight: 400,
                    color: 'var(--teal)',
                    float: 'left',
                    paddingRight: 12,
                    paddingTop: 6,
                    fontStyle: 'italic',
                  }}
                >
                  A
                </span>
                free companion to the <em>Plan B for PANS</em> podcast. Log your kid&apos;s symptoms, meds, and treatments — any modality, any approach — and let the data show what&apos;s actually moving the needle.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 44 }}>
              <a href="#start" className="btn btn-primary">
                Start the Tracker <span className="arr">→</span>
              </a>
              <a href="#method" className="btn btn-ghost">
                See how it works
              </a>
            </div>
            <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, borderTop: '1px solid var(--ink)', paddingTop: 22 }}>
              {[
                { n: '127', l: 'Families tracking' },
                { n: '38,400+', l: 'Symptom data points' },
                { n: '0', l: 'Dollars, ever' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="serif" style={{ fontSize: 44, lineHeight: 1, margin: 0, letterSpacing: '-0.02em' }}>
                    {s.n}
                  </p>
                  <p
                    className="mono"
                    style={{ fontSize: 10, color: 'var(--mute)', textTransform: 'uppercase', marginTop: 6, letterSpacing: '0.12em' }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card-wrap" style={{ position: 'sticky', top: 120, paddingTop: 40 }}>
            <div
              style={{ position: 'absolute', top: 0, right: 0, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--mute)', letterSpacing: '0.08em' }}
            >
              FIG. 01 — a week&apos;s read
            </div>
            <HeroTrackerCard />
            <p
              style={{
                marginTop: 18,
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 16,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                lineHeight: 1.5,
                maxWidth: 440,
              }}
            >
              &ldquo;The tracker is what I wished I&apos;d had at 2am, staring at a new symptom and a dozen variables in play.&rdquo; — <span style={{ color: 'var(--teal)' }}>Rachel</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
