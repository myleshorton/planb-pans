'use client'

import { useReveal, useTick } from '../hooks'

function BucketFill() {
  const t = useTick()
  const cycle = (t * 0.4) % 1
  const fill = 0.3 + cycle * 0.65
  return (
    <svg viewBox="0 0 260 320" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <clipPath id="bucket-clip">
          <path d="M 40 80 L 60 290 Q 60 300 70 300 L 190 300 Q 200 300 200 290 L 220 80 Z" />
        </clipPath>
        <linearGradient id="liq" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1F6B6B" stopOpacity="0.75" />
          <stop offset="1" stopColor="#134848" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <ellipse cx="130" cy="80" rx="92" ry="14" fill="none" stroke="#141414" strokeWidth="1.5" />
      <path d="M 40 80 L 60 290 Q 60 300 70 300 L 190 300 Q 200 300 200 290 L 220 80" fill="none" stroke="#141414" strokeWidth="1.5" />
      <g clipPath="url(#bucket-clip)">
        <rect x="30" y={320 - fill * 240} width="220" height="240" fill="url(#liq)" />
        <path
          d={`M 30 ${320 - fill * 240} Q 80 ${315 - fill * 240} 130 ${320 - fill * 240} T 260 ${320 - fill * 240} L 260 320 L 30 320 Z`}
          fill="#134848"
          opacity="0.5"
        />
      </g>
      {[
        { x: 70, y: 110, t: 'tics' },
        { x: 170, y: 130, t: 'rage' },
        { x: 90, y: 170, t: 'OCD' },
        { x: 180, y: 200, t: 'sleep' },
        { x: 70, y: 230, t: 'anxiety' },
        { x: 170, y: 260, t: 'brain fog' },
        { x: 90, y: 280, t: 'urine freq.' },
      ].map((l, i) => (
        <text
          key={i}
          x={l.x}
          y={l.y}
          fontFamily="var(--serif)"
          fontStyle="italic"
          fontSize="14"
          fill="#F6F1E7"
          opacity={fill > (320 - l.y) / 240 ? 0.85 : 0.35}
        >
          {l.t}
        </text>
      ))}
      {fill > 0.8 && (
        <>
          <circle cx="50" cy="78" r="3" fill="#c76a4a" opacity="0.8" />
          <circle cx="218" cy="76" r="2" fill="#c76a4a" opacity="0.6" />
          <circle cx="38" cy="92" r="2" fill="#c76a4a" opacity="0.5" />
        </>
      )}
      <text x="130" y="50" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" fill="#8a8373" letterSpacing="3">
        FIG. 02 — THE BUCKET
      </text>
    </svg>
  )
}

export function Problem() {
  const ref = useReveal()
  return (
    <section id="problem" style={{ borderBottom: '1px solid var(--rule)', background: 'var(--cream)', position: 'relative' }}>
      <div className="container reveal" ref={ref} style={{ padding: '140px 40px' }}>
        <div className="prob-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ maxWidth: 320, justifySelf: 'center' }}>
            <BucketFill />
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: 28 }}>
              § 01 &nbsp;·&nbsp; The problem
            </p>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.4vw, 72px)', lineHeight: 1.02, fontWeight: 300, letterSpacing: '-0.02em', margin: 0 }}>
              35 symptoms. 12 supplements.
              <br />
              Three new meds this month.
              <br />
              <span style={{ color: 'var(--teal)', fontStyle: 'italic' }}>What is actually working?</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--ink-soft)', fontWeight: 300, marginTop: 36, maxWidth: 560 }}>
              PANS and PANDAS families carry a cognitive load no spreadsheet can hold. New symptoms appear. Old ones come back. You start a binder and the headaches get worse — is it the binder, or a flare, or the guanfacine you bumped up last Tuesday?
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--ink-soft)', fontWeight: 300, marginTop: 16, maxWidth: 560 }}>
              Plan B is the tracker built for that exact confusion.
            </p>
            <div style={{ display: 'flex', gap: 24, marginTop: 40, flexWrap: 'wrap' }}>
              {['Modality-agnostic', 'Free forever', 'Your data, yours'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)' }} />
                  <span style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 500 }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
