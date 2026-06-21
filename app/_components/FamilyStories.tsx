'use client'

// Two anonymized family stories, structured as: where they were stuck → what the
// synthesis found when every lab was read together. Names anonymized, hospitals
// and countries generalized; clinical specifics shared with permission.
// Shared between the homepage teaser, /stories, and /pricing so copy never drifts.

export type FamilyStory = {
  id: string
  tag: string
  head: string
  headEm: string
  // "Where they were" — the stuck before-state.
  where: string
  // "What the synthesis found" — framing line + the specific findings.
  foundLabel: string
  found: string[]
  // optional secondary block — rule-outs (Daniel) or newly-ordered tests (Tommy).
  extraLabel?: string
  extra?: string[]
  // what reading it all together unlocked.
  unlock: string
  quote: string
}

export const FAMILY_STORIES: FamilyStory[] = [
  {
    id: 'europe-teen',
    tag: 'Family 01 · Teen son · Europe · 30+ labs, 25 categories · 5 specialists, 3 years',
    head: 'Three years. Thirty labs.',
    headEm: 'Three drivers nobody had stacked together.',
    where:
      'A teen son with PANS-spectrum symptoms — OCD, anxiety, recurrent infections, gut problems that wouldn’t resolve. Five specialists across three years. Hospital bloodwork, full functional-genomics SNP panel, EU lab work — thirty-plus tests across twenty-five categories. The neurologist read the brain. The immunologist read the antibodies. The gastroenterologist read the gut. A prior synthesis had framed the whole thing as “gut + neuroinflammation.” Nobody had read all thirty labs against each other.',
    foundLabel: 'Read together, the data showed three drivers stacked on top of one another:',
    found: [
      'An active multi-pathogen tickborne infection — Borrelia, Bartonella, Babesia and Mycoplasma, positive on dark-field microscopy no prior practitioner had ordered. Current blood backed it: ferritin 20, neutropenia, and a high CD57 — the iron-sequestration and cytopenia pattern these infections leave behind.',
      'A CVID-spectrum immune deficiency — IgA 0.74 and IgM 0.29 (both low), class-switched memory B-cells at 5.6%. The reason his body could never clear those infections on its own. An earlier immunologist had written “immune dysfunction” but never tied it to the failure-to-clear pattern.',
      'A proven methylation block — homozygous-slow MTRR with a serum B12 of 1,360, nearly double the top of range. He was being dosed with B12 his body genetically couldn’t use. Slow COMT plus a kynurenine shift were pulling tryptophan away from serotonin toward a neuro-inflammatory byproduct — the biochemical substrate under his OCD.',
    ],
    extraLabel: 'Just as important — what reading it all together ruled OUT, so the family could stop chasing them:',
    extra: [
      'PANDAS / strep — ASO 15, essentially no strep antibody activity.',
      'Autoimmune encephalitis — NMDAR, LGI1, CASPR2 and GAD all negative.',
      'Mold / mycotoxins, and folate-receptor antibody — both negative.',
    ],
    unlock:
      'That reordered the whole plan. Instead of killing the infections first — the move every prior protocol had made, and that had failed three times — it led with an immunologist referral: his existing bloodwork already qualified him for IVIG under national health coverage, which his mom had wanted but couldn’t pay for privately. Fix the immune gap and the cleanup engine, then kill. In that order.',
    quote:
      'After three years of doctors not connecting the dots, this was the first time I saw the whole picture.',
  },
  {
    id: 'us-teen',
    tag: 'Family 02 · Teen son · U.S. · multi-driver PANS · 2 years of treatment',
    head: 'Two years of treatment. The labs never moved.',
    headEm: 'Minta knew why.',
    where:
      'Two years of homeopathy, functional medicine and biomagnetism. Every panel run, more than once. And the labs kept coming back the same — histamine high, strep that never came down, mycoplasma climbing, mold through the roof. Treatment after treatment, and nothing held.',
    foundLabel: 'Minta knew why nothing was holding: his body couldn’t clear what they kept trying to kill.',
    found: [
      'A genetic detox bottleneck — undermethylation, a CBS sulfur block, low ceruloplasmin. His drainage was throttled at the source, so biomagnetism killed pathogens faster than he could clear them — the endotoxin overflow that set him back instead of forward.',
      'A histadelic biotype with slow histamine clearance — the reason his histamine stayed high no matter the protocol or the diet.',
      'A likely immune deficiency (specific-antibody / CVID-spectrum) — why the strep never cleared and the mycoplasma kept climbing. His body couldn’t finish the job on its own.',
      'Mold through the roof, sitting on top of a detox system that couldn’t process it — a load no one had sequenced against his drainage capacity.',
    ],
    extraLabel: 'So the plan flipped the order everything had been done in:',
    extra: [
      'Open drainage and support the methylation + copper engine first — before any more killing.',
      'Then sequence the infections and the mold so die-off never outruns what his body can clear.',
      'Confirm the immune gap with a CVID / antibody screen — it may unlock a different treatment path entirely.',
    ],
    unlock:
      'The kill-first approach had been backfiring for two years. Reading every lab together showed why — and put the steps in an order his body could finally handle.',
    quote:
      'Two years of treatment, and every lab kept coming back the same. Minta was the first to tell me why.',
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

      {/* What the synthesis found */}
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
        <p className="mono" style={{ ...label, color: 'var(--teal)' }}>What the synthesis found</p>
        <p style={{ ...p, marginBottom: 14, color: 'var(--ink)', fontWeight: 400 }}>{s.foundLabel}</p>
        <ol style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 13 }}>
          {s.found.map((f, i) => (
            <li key={i} style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300 }}>{f}</li>
          ))}
        </ol>

        {s.extra && s.extra.length > 0 && (
          <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--rule)' }}>
            {s.extraLabel && (
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink)', fontWeight: 400, margin: '0 0 10px' }}>{s.extraLabel}</p>
            )}
            <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 8 }}>
              {s.extra.map((e, i) => (
                <li key={i} style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', fontWeight: 300 }}>{e}</li>
              ))}
            </ul>
          </div>
        )}
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
        <p className="eyebrow" style={{ marginBottom: 18 }}>Where they were · What the synthesis found</p>
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
          <em style={{ color: 'var(--teal)' }}>The picture no one had connected.</em>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 640, margin: '0 0 48px' }}>
          Real syntheses. Names anonymized, lab details shared with permission.
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
              }}
            >
              <p className="mono" style={{ ...label, color: 'var(--ink-soft)', letterSpacing: '0.12em' }}>{s.tag}</p>
              <h3 className="serif" style={{ fontSize: 'clamp(22px, 2.6vw, 28px)', fontWeight: 300, lineHeight: 1.12, color: 'var(--ink)', margin: '6px 0 16px' }}>
                {s.head}{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>{s.headEm}</span>
              </h3>
              <p className="mono" style={{ ...label, color: 'var(--sand-dark)' }}>Where they were</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--ink-soft)', fontWeight: 300, margin: '0 0 16px' }}>
                {s.where.length > 215 ? s.where.slice(0, 212).trimEnd() + '…' : s.where}
              </p>
              <span className="mono" style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--teal)', fontWeight: 600 }}>
                Read the full synthesis →
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
            Read both syntheses →
          </a>
        </div>
      </div>
    </section>
  )
}
