'use client'

import { useReveal } from '../_components/hooks'

export default function AboutPage() {
  const head = useReveal()
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
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 300,
              letterSpacing: '-0.026em',
              lineHeight: 0.98,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 920,
            }}
          >
            I was the mom{' '}
            <em style={{ color: 'var(--teal)' }}>looking for Plan B.</em>
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
            Then I became the one building it. This is how it started — and why it has to
            exist.
          </p>
        </div>
      </section>

      {/* Chapters */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div className="pb-container" style={{ maxWidth: 760 }}>
          {/* § 01 — Before */}
          <div style={{ marginBottom: 80 }}>
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              § 01 · Before
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(30px, 5vw, 48px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                lineHeight: 1.05,
                margin: 0,
                marginBottom: 24,
                color: 'var(--ink)',
              }}
            >
              A mom of three. Two with PANS.
            </h2>
            <p style={textStyle}>
              I&apos;m Rachel. Before any of this, I was a mom of three kids in the kind of
              life parents take for granted — schedules, sports, normal problems. Then our
              life turned into something I couldn&apos;t have imagined.
            </p>
          </div>

          {/* § 02 — The change */}
          <div style={{ marginBottom: 80 }}>
            <p className="sectionLabel" style={labelStyle}>
              § 02 · The change
            </p>
            <h2 className="serif" style={chapterTitleStyle}>
              My son woke up a different kid.
            </h2>
            <p style={textStyle}>
              He told me, at eight, that he wanted to die. That was year one: acute crisis.
              Everything I thought I knew about my child was gone. It was the hardest year of
              my life. There was a moment I nearly took my own — I couldn&apos;t hold the pain
              of watching my children suffer. I&apos;m still here because I refused to leave
              them in the middle of this, with the answers still missing.
            </p>
            <p
              className="serif"
              style={{
                ...quoteStyle,
                marginTop: 28,
              }}
            >
              &ldquo;If you&apos;re reading this in that same darkness — please call{' '}
              <a
                href="tel:988"
                style={{ color: 'var(--teal)', textDecoration: 'underline' }}
              >
                988
              </a>{' '}
              (US) or reach out to someone who loves you. You don&apos;t have to stay there
              tonight.&rdquo;
            </p>
          </div>

          {/* § 03 — The search */}
          <div style={{ marginBottom: 80 }}>
            <p style={labelStyle}>§ 03 · The search</p>
            <h2 className="serif" style={chapterTitleStyle}>
              Every top specialist. Every protocol.
            </h2>
            <p style={textStyle}>
              I visited every top PANS doctor I could reach. We tried the standard protocols —
              antibiotics, steroids, IVIG. Every single one made him worse. We ended up
              homeless for a stretch because of mold exposure. My son had Lyme, mold, COVID,
              and a body that wouldn&apos;t tolerate the things that were supposed to help.
            </p>
            <p style={textStyle}>
              The doctors at the top of the PANS field couldn&apos;t help us. That was the
              moment I stopped trusting the protocols and started listening to something else.
            </p>
          </div>

          {/* § 04 — What worked */}
          <div style={{ marginBottom: 80 }}>
            <p style={labelStyle}>§ 04 · What actually worked</p>
            <h2 className="serif" style={chapterTitleStyle}>
              The thing that healed him <em style={{ color: 'var(--teal)' }}>wasn&apos;t a secret.</em>
            </h2>
            <p style={textStyle}>
              It wasn&apos;t hidden in a paper. It wasn&apos;t behind a paywall. Every piece of
              what eventually healed my son already existed somewhere. Biomagnetism, classical
              homeopathy, targeted functional medicine, nervous-system regulation — each one
              held a piece. He&apos;s 99% healed now. I still can&apos;t tell you exactly
              which part did what.
            </p>
            <p style={textStyle}>
              What I can tell you is that the problem was never missing information.
              <em> The problem was that nobody in the system could see it all at once.</em>
            </p>
          </div>

          {/* § 05 — The realization */}
          <div style={{ marginBottom: 80 }}>
            <p style={labelStyle}>§ 05 · The realization</p>
            <h2 className="serif" style={chapterTitleStyle}>
              Specialists don&apos;t talk to each other.
            </h2>
            <p style={textStyle}>
              The microbiome person understood the gut but not methylation. The methylation
              person understood genetics but not mold. The mold person didn&apos;t know what
              the craniosacral therapist was doing. Each of them was right about their piece.
              None of them were seeing the whole kid.
            </p>
            <p style={textStyle}>
              The moms who had already gotten through had figured this out. They were leaving
              breadcrumbs for each other in encrypted threads, in 3am searches, in private
              messages. When one found a real answer, she couldn&apos;t stay to guide the rest
              — her family needed her back. The threads went cold. And the next family stayed
              lost.
            </p>
            <p style={{ ...quoteStyle, marginTop: 24 }}>
              It wasn&apos;t a knowledge problem. It was a coordination problem.
            </p>
          </div>

          {/* § 06 — 300 families */}
          <div style={{ marginBottom: 80 }}>
            <p style={labelStyle}>§ 06 · 300 families in 12 hours</p>
            <h2 className="serif" style={chapterTitleStyle}>
              I quietly offered to help.
            </h2>
            <p style={textStyle}>
              Three hundred families wrote back in twelve hours. Desperate. That&apos;s the
              scale of the need. That&apos;s what nobody is coordinating for. Kids on fire,
              parents choosing between eating and the next treatment, nowhere clear to go.
            </p>
          </div>

          {/* § 07 — Plan B */}
          <div style={{ marginBottom: 40 }}>
            <p style={labelStyle}>§ 07 · Plan B</p>
            <h2 className="serif" style={chapterTitleStyle}>
              So I started building the thing that didn&apos;t exist.
            </h2>
            <p style={textStyle}>
              Plan B is the coordination layer we never had. It reads every modality that
              isn&apos;t in the standard protocol, every published teaching, every cohort study
              we can get onto the record. It reads your kid&apos;s full story — the pregnancy,
              the onset, every medication and supplement, every flare, every lab. It
              synthesizes all of it into a protocol for your kid specifically.
            </p>
            <p style={textStyle}>
              It doesn&apos;t replace your practitioners. It helps you use them together. It
              gets sharper every time a family joins, every time a cohort runs, every time
              another parent logs what worked and what didn&apos;t. The 100th family&apos;s
              read benefits from what the first 99 contributed. Together — over time — we
              build the way out.
            </p>
            <p style={{ ...quoteStyle, marginTop: 28 }}>
              Your child does not deserve to rage. They don&apos;t deserve to be locked in
              their room. They don&apos;t deserve to try to leave this world. There is always
              a Plan B — and I&apos;m building it for them.
            </p>
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
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(28px, 4.8vw, 44px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: 30,
              color: 'var(--ink)',
            }}
          >
            Start with your intake.{' '}
            <em style={{ color: 'var(--teal)' }}>Your kid, your story.</em>
          </h2>
          <a
            href="https://app.planbforpans.com/signup"
            target="_blank"
            rel="noopener"
            className="cta-teal"
            style={{ textDecoration: 'none' }}
          >
            Start your intake →
          </a>
        </div>
      </section>
    </main>
  )
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 10,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: 'var(--teal)',
  fontWeight: 600,
  marginBottom: 16,
}

const chapterTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant)',
  fontSize: 'clamp(30px, 5vw, 48px)',
  fontWeight: 300,
  letterSpacing: '-0.018em',
  lineHeight: 1.05,
  margin: '0 0 24px',
  color: 'var(--ink)',
}

const textStyle: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.9,
  color: 'var(--ink-soft)',
  fontWeight: 300,
  marginBottom: 20,
}

const quoteStyle: React.CSSProperties = {
  fontSize: 'clamp(20px, 2.6vw, 26px)',
  fontStyle: 'italic',
  fontWeight: 400,
  color: 'var(--ink)',
  lineHeight: 1.4,
  borderLeft: '3px solid var(--teal)',
  paddingLeft: 22,
  margin: 0,
  fontFamily: 'var(--font-cormorant)',
}
