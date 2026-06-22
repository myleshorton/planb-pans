'use client'

import ResearchSection from '../_components/ResearchSection'
import { useReveal } from '../_components/hooks'

export default function ResearchPage() {
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
            background:
              'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={ref}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            The research
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
            Every kid is a puzzle.
            <br />
            <em style={{ color: 'var(--teal)' }}>
              Together, they tell a story.
            </em>
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
            Plan B has a unique working understanding of PANS, PANDAS, and the shared drivers
            behind severe dysregulation — built from the full arc of every family that tracks
            with it. The more kids in the library, the more precisely each next read lands.
          </p>
        </div>
      </section>

      {/* LATEST FINDINGS — what Minta is tracking (the daily research radar) */}
      <section style={{ padding: 'clamp(56px, 8vw, 96px) 24px', borderBottom: '1px solid var(--rule)' }}>
        <div className="pb-container" style={{ maxWidth: 920 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>Latest · what Minta is tracking</p>
          <h2
            className="serif"
            style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--ink)', margin: '0 0 16px' }}
          >
            Minta reads the field every day — so your child&apos;s plan reflects the{' '}
            <em style={{ color: 'var(--teal)' }}>newest science, not a textbook from years ago.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 740, margin: '0 0 34px' }}>
            This is what separates Minta from a regular AI chatbot. Generic AI is frozen at its training
            date and knows nothing about your child. Minta is <strong style={{ color: 'var(--ink)' }}>continuously
            fed the newest PANS, Lyme, mold, and methylation research</strong> — and she carries your whole
            family&apos;s history. A sample of what she&apos;s tracking right now:
          </p>
          <div style={{ display: 'grid', gap: 14 }}>
            {[
              { date: 'Jun 2026', tag: 'PANS · genetics', title: 'Ultrarare DNA-repair + mitochondrial gene variants found in PANS kids', why: 'A genetic-susceptibility signal pointing straight at the methylation/mitochondrial engine Plan B already works on.', href: 'https://med.stanford.edu/pans/publications.html' },
              { date: 'Jun 2026', tag: 'PANS · IVIG', title: 'Panzyga Phase III — a placebo-controlled IVIG trial for PANS/PANDAS', why: 'The kind of controlled evidence the field has been missing for immune treatment.', href: 'https://www.pandasppn.org/research-updates/' },
              { date: 'Jun 2026', tag: 'PANS · feeding', title: 'PANS overlaps with ARFID (obsessive food restriction)', why: 'Confirms what families live: food refusal can be an immune/OCD signal, not pickiness.', href: 'https://med.stanford.edu/pans/publications.html' },
              { date: 'Jun 2026', tag: 'Lyme · training', title: 'ILADS 2026 conferences + practitioner training (London Apr · Annual Oct)', why: 'Where the newest tick-borne and PANS science gets taught — Plan B stays current here.', href: 'https://www.ilads.org/events/' },
            ].map((f) => (
              <a
                key={f.title}
                href={f.href}
                target="_blank"
                rel="noopener"
                style={{ display: 'block', textDecoration: 'none', background: 'var(--cream-light)', border: '1px solid var(--rule)', borderRadius: 8, padding: '18px 20px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 6 }}>
                  <span style={{ color: 'var(--teal)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{f.tag}</span>
                  <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{f.date}</span>
                </div>
                <p style={{ fontSize: 17, fontWeight: 500, color: 'var(--ink)', margin: '0 0 6px', lineHeight: 1.35 }}>{f.title}</p>
                <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{f.why}</p>
              </a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-soft)', fontStyle: 'italic', marginTop: 20 }}>
            Updated as new research lands. Educational only — not medical advice.
          </p>
        </div>
      </section>

      {/* Constellation — the existing research section, it carries its own intro */}
      <ResearchSection />

      {/* What makes it smarter */}
      <section
        style={{
          padding: '120px 24px',
          background: '#141414',
          color: 'var(--cream)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1000 }}>
          <p
            className="eyebrow"
            style={{ color: 'var(--teal-light)', marginBottom: 22 }}
          >
            § What makes it smarter
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(36px, 5.6vw, 62px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--cream)',
              marginBottom: 44,
              maxWidth: 800,
            }}
          >
            The 100th family&apos;s read benefits from what the first 99 contributed.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                n: '01',
                t: 'Patterns Plan B is starting to see',
                b: 'Which combinations of symptoms point toward which drivers. Which modalities move which specific clusters. Where stalls repeat across kids.',
              },
              {
                n: '02',
                t: 'Sequencing learnings',
                b: 'Which modalities need to come before which. Where bottlenecks live. Which things tried too early just add noise.',
              },
              {
                n: '03',
                t: 'What is quietly working',
                b: 'Modalities the standard system dismisses that are showing real signal. Modalities that look promising but don&apos;t hold up across cohorts.',
              },
              {
                n: '04',
                t: 'Private data. Public insights.',
                b: 'Your family&apos;s log stays yours. The aggregate patterns — de-identified, consent-based — get published for every parent trying to piece this together.',
              },
            ].map((c) => (
              <div
                key={c.n}
                style={{
                  borderTop: '1px solid rgba(246,241,231,0.15)',
                  paddingTop: 20,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 44,
                    lineHeight: 0.9,
                    color: 'var(--teal-light)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    marginBottom: 14,
                  }}
                >
                  {c.n}
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: 'var(--cream)',
                    margin: 0,
                    marginBottom: 10,
                  }}
                >
                  {c.t}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: '#bbb3a2',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: c.b }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 24px 120px',
          background: 'var(--cream-light)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            Join the research
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 26,
              color: 'var(--ink)',
            }}
          >
            When the protocols fail,
            <br />
            <em style={{ color: 'var(--teal)' }}>this is your Plan B.</em>
          </h2>
          <a
            href="https://app.planbforpans.com/signup"
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
