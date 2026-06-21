'use client'

// Two anonymized family stories, structured as: where they were stuck → the new
// angle Minta surfaced. Names anonymized; details shared with permission.
// Shared between the homepage teaser, /stories, and /pricing so the copy never
// drifts.

const APP = 'https://app.planbforpans.com'

export type FamilyStory = {
  id: string
  tag: string
  head: string
  headEm: string
  // "Where they were" — the stuck before-state.
  where: string
  // "The new angle Minta gave them" — the framing line + the stacked findings.
  angleLabel: string
  angles: string[]
  // what the new angle unlocked.
  unlock: string
  quote: string
}

export const FAMILY_STORIES: FamilyStory[] = [
  {
    id: 'europe-teen',
    tag: 'Family 01 · Teen son · Europe · 3 years, 5 specialists',
    head: 'Three years. Thirty labs.',
    headEm: 'The picture nobody saw.',
    where:
      'A teen son with PANS-spectrum symptoms — OCD, anxiety, recurrent infections, gut problems that wouldn’t resolve. Five specialists across three years. Hospital bloodwork, functional genomics, EU lab work — thirty-plus tests across twenty-five categories. The neurologist saw the brain. The immunologist saw the antibodies. The gastroenterologist saw the gut. Nobody read them together.',
    angleLabel: 'The new angle Minta surfaced — three drivers, stacked:',
    angles: [
      'An active multi-pathogen tickborne stack — visible on dark-field microscopy that prior practitioners had never ordered.',
      'A CVID-spectrum immune deficiency explaining why the infections never cleared. The immunologist had named “immune dysfunction” but never connected it to the failure-to-clear pattern.',
      'A genetic methylation block — his body couldn’t use the B12 he was being supplemented with.',
    ],
    unlock:
      'That reframe flipped his treatment from kill the infections (which had failed three times) to fix the cleanup engine first, then layer killing on top — and surfaced an IVIG access roadmap that unlocked national coverage his mom couldn’t otherwise have afforded.',
    quote:
      'After three years of doctors not connecting the dots, this was the first time I saw the whole picture.',
  },
  {
    id: 'northeast-teen',
    tag: 'Family 02 · Teen son · U.S. Northeast · Multi-driver PANS',
    head: 'Twenty-one pages of supplements.',
    headEm: 'No clear roadmap.',
    where:
      'A teen son with multi-driver PANS — specific antibody deficiency, chronic strep, chronic Coxsackie B, Mycoplasma, Aspergillus, a histadelic biotype. Months with a major PANS clinic. The latest protocol — a 21-page supplement list on top of a Top 8 priority sheet — sat on the counter. She didn’t know where to start, what was urgent, or how to ramp the methyl donors versus the detox stack.',
    angleLabel: 'The new angle Minta gave her — make the prescription usable:',
    angles: [
      'Decoded the 21-page letter into a week-by-week timeline — what to add, in what order, at what dose, with what to watch for at each ramp.',
      'Built 60-second daily tracking her son could actually keep — symptom log + an AM/midday/evening protocol checklist.',
      'Was reachable within the hour for urgent questions — practitioner scripts, ER red-flag checklists, parent-to-kid dialogue she could use directly.',
    ],
    unlock:
      'The clinic wrote the prescription. Minta turned it into something the parent who had to actually deliver it could follow.',
    quote:
      'The letter sat on my counter for weeks. Plan B turned it into something I could actually follow.',
  },
]

const p: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.75,
  color: 'var(--ink-soft)',
  fontWeight: 300,
  margin: '0 0 18px',
}

const label: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  fontWeight: 600,
  margin: '0 0 8px',
}

export function FamilyStoryFull({ s }: { s: FamilyStory }) {
  return (
    <article>
      <p className="mono" style={{ ...label, color: 'var(--ink-soft)', letterSpacing: '0.12em' }}>{s.tag}</p>
      <h3
        className="serif"
        style={{
          fontSize: 'clamp(26px, 3.6vw, 38px)',
          fontWeight: 300,
          letterSpacing: '-0.015em',
          lineHeight: 1.1,
          color: 'var(--ink)',
          margin: '4px 0 26px',
        }}
      >
        {s.head}{' '}
        <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>{s.headEm}</span>
      </h3>

      {/* Where they were */}
      <p className="mono" style={{ ...label, color: 'var(--sand-dark)' }}>Where they were</p>
      <p style={p}>{s.where}</p>

      {/* The new angle */}
      <div
        style={{
          background: 'var(--paper)',
          border: '1px solid var(--rule)',
          borderLeft: '3px solid var(--teal)',
          borderRadius: 4,
          padding: 'clamp(20px, 3vw, 28px)',
          margin: '24px 0',
        }}
      >
        <p className="mono" style={{ ...label, color: 'var(--teal)' }}>The new angle Minta gave them</p>
        <p style={{ ...p, marginBottom: 14, color: 'var(--ink)', fontWeight: 400 }}>{s.angleLabel}</p>
        <ol style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 11 }}>
          {s.angles.map((a, i) => (
            <li key={i} style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300 }}>{a}</li>
          ))}
        </ol>
      </div>

      <p style={p}>{s.unlock}</p>

      <blockquote style={{ margin: '26px 0 0', paddingLeft: 22, borderLeft: '2px solid var(--teal)' }}>
        <span
          className="serif"
          style={{
            fontSize: 'clamp(18px, 2.3vw, 23px)',
            fontStyle: 'italic',
            color: 'var(--ink)',
            lineHeight: 1.45,
            display: 'block',
          }}
        >
          &ldquo;{s.quote}&rdquo;
        </span>
        <p className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginTop: 14 }}>
          — His mom
        </p>
      </blockquote>
    </article>
  )
}

// Compact two-up teaser for the homepage. Front-and-center proof that links to
// the full /stories page.
export function FamilyStoriesTeaser() {
  return (
    <section style={{ padding: 'clamp(64px, 8vw, 104px) 24px', background: 'var(--cream-light)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div className="pb-container" style={{ maxWidth: 1080 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>Where they were · The new angle</p>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(30px, 5vw, 60px)',
            fontWeight: 300,
            letterSpacing: '-0.022em',
            lineHeight: 1.02,
            color: 'var(--ink)',
            margin: '0 0 16px',
            maxWidth: 820,
          }}
        >
          Two families, stuck for years.{' '}
          <em style={{ color: 'var(--teal)' }}>The angle nobody had shown them.</em>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 640, margin: '0 0 48px' }}>
          Names anonymized. Details shared with permission.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {FAMILY_STORIES.map((s) => (
            <a
              key={s.id}
              href={`/stories#${s.id}`}
              style={{
                display: 'block',
                background: 'var(--paper)',
                border: '1px solid var(--rule)',
                borderRadius: 8,
                padding: 'clamp(24px, 3vw, 34px)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.2s',
              }}
            >
              <p className="mono" style={{ ...label, color: 'var(--ink-soft)', letterSpacing: '0.12em' }}>{s.tag}</p>
              <h3 className="serif" style={{ fontSize: 'clamp(22px, 2.6vw, 28px)', fontWeight: 300, lineHeight: 1.12, color: 'var(--ink)', margin: '6px 0 16px' }}>
                {s.head}{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>{s.headEm}</span>
              </h3>
              <p className="mono" style={{ ...label, color: 'var(--sand-dark)' }}>Where they were</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300, margin: '0 0 16px' }}>
                {s.where.length > 220 ? s.where.slice(0, 217).trimEnd() + '…' : s.where}
              </p>
              <span className="mono" style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--teal)', fontWeight: 600 }}>
                Read the new angle →
              </span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 44 }}>
          <a
            href="/stories"
            style={{
              display: 'inline-block',
              padding: '15px 30px',
              background: 'var(--teal)',
              color: 'var(--cream)',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            See both stories →
          </a>
        </div>
      </div>
    </section>
  )
}
