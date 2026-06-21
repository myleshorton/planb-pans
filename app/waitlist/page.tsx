'use client'

import { useReveal } from '../_components/hooks'

const WAITLIST_MAILTO =
  'mailto:rachel@planbforpans.com?subject=Free%20Synthesis%20Waitlist&body=Tell%20us%20a%20little%20about%20your%20child%20(first%20name%20or%20initials%2C%20age%2C%20what%27s%20going%20on)%20and%20we%27ll%20add%20you%20to%20the%20waitlist.'

export default function WaitlistPage() {
  const head = useReveal()

  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Hero */}
      <section
        style={{
          padding: '120px 24px 72px',
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
            background: 'radial-gradient(circle, rgba(31,107,107,0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div ref={head} className="pb-container reveal" style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}>
          <p className="eyebrow" style={{ marginBottom: 22 }}>The free spot · Non-profit</p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(44px, 8.5vw, 100px)',
              fontWeight: 300,
              letterSpacing: '-0.028em',
              lineHeight: 0.97,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1080,
            }}
          >
            Can&apos;t afford it?{' '}
            <em style={{ color: 'var(--teal)' }}>One family a week, free.</em>
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
            Plan B is a non-profit — cost should never be the reason your kid doesn&apos;t get this.
            Every week, Rachel takes one family at no charge and builds the full Synthesis, the same
            one that costs $397. The only ask: it&apos;s done in the open.
          </p>
          <div style={{ marginTop: 36 }}>
            <a
              href={WAITLIST_MAILTO}
              style={{
                display: 'inline-block',
                padding: '16px 34px',
                background: 'var(--teal)',
                color: 'var(--cream)',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Join the waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* The deal */}
      <section style={{ padding: 'clamp(64px, 8vw, 100px) 24px' }}>
        <div className="pb-container" style={{ maxWidth: 820 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>How it works</p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(28px, 4.4vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: 'var(--ink)',
              margin: '0 0 40px',
              maxWidth: 720,
            }}
          >
            Open to anyone. <em style={{ color: 'var(--teal)' }}>Done in public.</em>
          </h2>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 22 }}>
            {[
              ['Join the waitlist', 'It&apos;s open — no application, no proof of hardship. If $397 is out of reach, that&apos;s reason enough.'],
              ['Each week, one family is chosen', 'The waitlist is public and transparent. No favourites, no fine print.'],
              ['You get the full Synthesis', 'Every lab read together, what&apos;s been missed, what hasn&apos;t been tried, the tests to order next, and a month-by-month calendar — exactly what the paid families receive.'],
              ['Your Synthesis goes public — your child stays anonymous', 'That&apos;s the trade, and it&apos;s the whole point. Your child&apos;s name is removed, but the synthesis and symptoms are published in our <a href="/case-studies" style="color:var(--teal)">case studies</a> as &ldquo;what Minta found&rdquo; — so we all learn together from what Minta finds. Your hardest season makes the next family&apos;s read sharper.'],
            ].map(([title, body], i) => (
              <li key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <span
                  className="serif"
                  style={{ fontSize: 34, fontWeight: 300, color: 'var(--teal)', lineHeight: 1, minWidth: 34 }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="serif" style={{ fontSize: 21, fontWeight: 400, color: 'var(--ink)', margin: '0 0 6px' }}>{title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </li>
            ))}
          </ol>

          <div
            style={{
              marginTop: 44,
              background: 'var(--cream-light)',
              border: '1px solid var(--rule)',
              borderLeft: '3px solid var(--teal)',
              borderRadius: 8,
              padding: 'clamp(22px, 3vw, 32px)',
            }}
          >
            <p className="serif" style={{ fontSize: 'clamp(19px, 2.4vw, 25px)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.4, color: 'var(--ink)', margin: 0 }}>
              We learn together what Minta finds. Public waitlist, published synthesis — the whole
              point of a non-profit is that the work belongs to everyone.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a
              href={WAITLIST_MAILTO}
              style={{
                display: 'inline-block',
                padding: '16px 34px',
                background: 'var(--teal)',
                color: 'var(--cream)',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Join the waitlist →
            </a>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', fontWeight: 300, marginTop: 16 }}>
              Want to fund a free spot instead?{' '}
              <a href="/donate" style={{ color: 'var(--teal)' }}>Support a family →</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
