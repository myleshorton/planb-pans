'use client'

// "What Minta does · What Rachel does · Why you need both" — the core value
// split. Minta = breadth/speed/memory/always-on. Rachel = depth/judgment/
// accountability/lived-experience. Together = foundation + daily companion.

const APP = 'https://app.planbforpans.com'

const card: React.CSSProperties = {
  background: 'var(--paper)',
  border: '1px solid var(--rule)',
  borderRadius: 8,
  padding: 'clamp(26px, 3.2vw, 38px)',
  display: 'flex',
  flexDirection: 'column',
}

const eyebrowMono: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  fontWeight: 600,
  margin: '0 0 6px',
}

const item: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.6,
  color: 'var(--ink-soft)',
  fontWeight: 300,
  paddingLeft: 20,
  position: 'relative',
}

function Col({
  who, role, color, lead, points, cant,
}: {
  who: string; role: string; color: string; lead: string; points: string[]; cant?: string
}) {
  return (
    <div style={card}>
      <p className="mono" style={{ ...eyebrowMono, color }}>{role}</p>
      <h3 className="serif" style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 300, color: 'var(--ink)', margin: '0 0 6px', letterSpacing: '-0.01em' }}>
        {who}
      </h3>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink)', fontWeight: 400, margin: '0 0 20px' }}>{lead}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, flex: 1 }}>
        {points.map((pt) => (
          <li key={pt} style={item}>
            <span style={{ position: 'absolute', left: 0, top: 0, color }}>›</span>
            <span dangerouslySetInnerHTML={{ __html: pt }} />
          </li>
        ))}
      </ul>
      {cant && (
        <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--sand-dark)', fontStyle: 'italic', margin: '20px 0 0', paddingTop: 16, borderTop: '1px solid var(--rule)' }}>
          {cant}
        </p>
      )}
    </div>
  )
}

export default function WhyBoth() {
  return (
    <section style={{ padding: 'clamp(72px, 9vw, 120px) 24px', background: 'var(--cream)' }}>
      <div className="pb-container" style={{ maxWidth: 1080 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>The bot + the human</p>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(32px, 5.4vw, 64px)',
            fontWeight: 300,
            letterSpacing: '-0.024em',
            lineHeight: 1.0,
            color: 'var(--ink)',
            margin: '0 0 18px',
            maxWidth: 880,
          }}
        >
          A trained bot you can use at 2am.{' '}
          <em style={{ color: 'var(--teal)' }}>A human who&apos;s lived it and makes the call.</em>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 700, margin: '0 0 52px' }}>
          Most PANS parents are handed a half-baked protocol — one that treats a single issue at a
          time and never integrates the whole. Plan B does the opposite: it brings every healing
          modality and every issue your child faces into one compact healing journey, and it knows
          things your doctor doesn&apos;t.{' '}
          <strong style={{ color: 'var(--teal)', fontWeight: 600 }}>
            When you&apos;re stalled, Minta has your Plan B
          </strong>{' '}
          — a real idea of <em>why</em>, and many new things to try. Doing that takes two things
          working together.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 22 }}>
          <Col
            who="Minta"
            role="The AI · always on"
            color="var(--teal)"
            lead="Breadth, speed, memory."
            points={[
              '<strong>Trained on all of PANS</strong> — every modality, framework, and cohort study, plus thousands of papers.',
              'Reads <strong>your kid&apos;s full history and every lab together</strong> — the integration no single specialist does.',
              'Available at <strong>2am, instantly, every day.</strong> Decodes a 21-page protocol into a week-by-week timeline.',
              'Runs the daily tracker, surfaces patterns, remembers everything.',
            ]}
            cant="She&apos;s still learning, not a licensed clinician — she doesn&apos;t carry the judgment or the accountability for the call."
          />
          <Col
            who="Rachel"
            role="The human · the integrator"
            color="var(--ink)"
            lead="Depth, judgment, accountability."
            points={[
              'The <strong>Synthesis</strong> — 4–6 hours with your kid&apos;s complete picture, integrated by a person.',
              'The judgment a model won&apos;t make: what&apos;s urgent, what order to try things, and <strong>what hasn&apos;t been tried that should be.</strong>',
              '<strong>Catches what the AI misses</strong> and checks every number against the source.',
              'Writes the practitioner letters that get you in the door and unlock coverage.',
              'A <strong>mom of three recovered PANS kids</strong> — she gets the parent side, not just the clinical one.',
            ]}
            cant="Deep, but not always at your side every day. That&apos;s Minta&apos;s job."
          />
        </div>

        {/* Why you need both */}
        <div
          style={{
            marginTop: 28,
            background: 'var(--cream-light)',
            border: '1px solid var(--rule)',
            borderLeft: '3px solid var(--teal)',
            borderRadius: 8,
            padding: 'clamp(26px, 3.4vw, 40px)',
          }}
        >
          <p className="mono" style={{ ...eyebrowMono, color: 'var(--teal)' }}>Why you need both</p>
          <p className="serif" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.4, color: 'var(--ink)', margin: '6px 0 14px', maxWidth: 820 }}>
            Rachel builds the foundation — the deep, integrated Synthesis that maps your kid&apos;s
            whole picture and the path forward. Minta keeps it alive, day after day.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 760, margin: 0 }}>
            AI alone is a lot of information with nobody accountable for the decision. A human alone
            can&apos;t be at your side at 2am. Together you get the foundation <em>and</em> the
            daily companion — and a real person who&apos;s been exactly where you are.
          </p>
        </div>

        <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href="/pricing"
            style={{
              display: 'inline-block', padding: '16px 32px', background: 'var(--teal)', color: 'var(--cream)',
              borderRadius: 6, textDecoration: 'none', fontSize: 15, fontWeight: 500,
            }}
          >
            Start with a Synthesis — $397 →
          </a>
          <a
            href={`${APP}/intake`}
            style={{
              display: 'inline-block', padding: '16px 30px', background: 'transparent', color: 'var(--teal)',
              border: '1px solid var(--rule)', borderRadius: 6, textDecoration: 'none', fontSize: 15, fontWeight: 500,
            }}
          >
            Start free — upload your labs →
          </a>
        </div>
      </div>
    </section>
  )
}
