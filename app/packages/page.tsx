// The four Plan B packages — one engine, four doorways, each meeting a family
// where they are. Direction-not-treatment language throughout.

export const metadata = {
  title: 'Packages | Plan B for PANS',
  description:
    'Four ways into a Plan B synthesis — Starting Point (new to PANS), Full Picture (thin on tests), Fresh Eyes (stalled), and Recalibrate (a new direction). Minta gives you direction; your doctors treat.',
}

const ink = '#2a2a26'
const teal = '#1F6B6B'
const soft = '#524d40'
const rule = '#e3dcc9'
const card = '#fffdf7'

type Pkg = {
  name: string
  situation: string
  emoji: string
  line: string
  forWho: string
  includes: string[]
  twoStep: boolean
  price: string
}

const PACKAGES: Pkg[] = [
  {
    name: 'Starting Point',
    situation: 'New to PANS',
    emoji: '🌱',
    line: 'Don’t waste the wait.',
    forWho: 'Just diagnosed, a months-long wait for a specialist, few or no labs yet.',
    includes: [
      'Full intake + Minta with you during the wait',
      'Daily tracking, so you walk in with a month of data — not a blank page',
      '① A testing direction — exactly what to order now, so results are in hand before your appointment',
      '② A treatment direction once your results come back',
    ],
    twoStep: true,
    price: '$397',
  },
  {
    name: 'Full Picture',
    situation: 'Thin on tests',
    emoji: '🧩',
    line: 'You can’t direct care from half a map.',
    forWho: 'You have some labs, but not enough to point treatment anywhere.',
    includes: [
      '① A gap analysis — what you have, what’s missing, and exactly what to order to complete the picture',
      '② Your full direction once the new results are in',
      'Prioritized — one or two tests at a time, never all at once',
    ],
    twoStep: true,
    price: '$397',
  },
  {
    name: 'Fresh Eyes',
    situation: 'Stalled',
    emoji: '🧭',
    line: 'Doing everything, still stuck.',
    forWho: 'You’ve tried a lot and your child still isn’t better. You need someone to hold all of it at once.',
    includes: [
      'One deep synthesis of your whole record — labs, symptoms, history, every prior treatment',
      'The driver no one found · the wrong order · the thing that was never addressed',
      'A “what hasn’t been tried” pass — the menu beyond the standard protocol',
    ],
    twoStep: false,
    price: '$397',
  },
  {
    name: 'Recalibrate',
    situation: 'A new direction',
    emoji: '🔄',
    line: 'New results. New direction.',
    forWho: 'You already have a Plan B synthesis and new labs have come in.',
    includes: [
      'A re-synthesis — your new results folded into the existing picture',
      'An updated direction and why',
      'Faster + far less, because the foundation is already built',
    ],
    twoStep: false,
    price: '$97',
  },
]

export default function PackagesPage() {
  return (
    <main style={{ background: '#faf6ec', color: ink }}>
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 36px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>Packages</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 62px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            One engine. Four doorways.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            Wherever you are — just diagnosed, missing tests, or stalled after years — there’s a way in. Minta
            reads your child’s whole picture and gives you <strong style={{ color: ink }}>direction.</strong> Your
            doctors treat; we make sure you walk in knowing what to ask and why.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(40px, 6vw, 72px) 24px' }}>
        <div className="pb-container" style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {PACKAGES.map((pk) => (
            <div key={pk.name} style={{ background: card, border: `1px solid ${rule}`, borderRadius: 14, padding: '22px 22px 24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 26 }}>{pk.emoji}</div>
              <p style={{ color: teal, fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, margin: '8px 0 2px' }}>{pk.situation}</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 30, lineHeight: 1.05, color: ink, margin: '0 0 6px' }}>{pk.name}</h2>
              <p style={{ fontSize: 15.5, fontStyle: 'italic', color: ink, margin: '0 0 12px' }}>{pk.line}</p>
              <p style={{ fontSize: 14, color: soft, lineHeight: 1.55, margin: '0 0 14px' }}>{pk.forWho}</p>
              <ul style={{ margin: '0 0 16px', paddingLeft: 18, fontSize: 14, color: soft, lineHeight: 1.6, flex: 1 }}>
                {pk.includes.map((i) => <li key={i} style={{ marginBottom: 5 }}>{i}</li>)}
              </ul>
              {pk.twoStep && (
                <p style={{ fontSize: 12, color: teal, fontWeight: 600, margin: '0 0 12px' }}>✓ Both steps included in one fee</p>
              )}
              <div style={{ borderTop: `1px solid ${rule}`, paddingTop: 14, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 28, fontWeight: 700, color: ink }}>{pk.price}</span>
                <span style={{ fontSize: 12, color: soft }}>{pk.price === '$97' ? 'or free w/ subscription' : 'one fee'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(32px, 5vw, 56px) 24px 88px' }}>
        <div className="pb-container" style={{ maxWidth: 720, margin: '0 auto', background: '#f3eede', border: `1px solid ${rule}`, borderRadius: 12, padding: '22px 24px' }}>
          <p style={{ fontSize: 15.5, color: ink, fontWeight: 700, margin: '0 0 8px' }}>The honest pricing</p>
          <p style={{ fontSize: 15, color: soft, lineHeight: 1.65, margin: '0 0 10px' }}>
            Every full synthesis is <strong style={{ color: ink }}>$397</strong> — pick the doorway that fits you.
            The <strong style={{ color: ink }}>Starting Point</strong> and <strong style={{ color: ink }}>Full
            Picture</strong> packages include <strong style={{ color: ink }}>both</strong> steps — the testing
            direction now, and the full direction once your labs come back — under that one fee. We don’t charge a
            family twice just for not having labs yet.
          </p>
          <p style={{ fontSize: 15, color: soft, lineHeight: 1.65, margin: 0 }}>
            A <strong style={{ color: ink }}>Recalibrate</strong> later — when you bring new results — is{' '}
            <strong style={{ color: ink }}>$97</strong>, or free inside a living-synthesis subscription.
          </p>
          <p style={{ fontSize: 12.5, color: soft, fontStyle: 'italic', margin: '14px 0 0' }}>
            Plan B gives you direction — not medical advice or treatment. Your licensed medical team makes all
            clinical decisions. See our <a href="/terms" style={{ color: teal }}>Terms &amp; Medical Disclaimer</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
