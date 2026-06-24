// Plan B pricing — one synthesis price, the situations it meets, a cheaper
// re-synthesis, and pay-as-you-go Minta token packs. Direction-not-treatment.

export const metadata = {
  title: 'Pricing | Plan B for PANS',
  description:
    'One Plan B synthesis — $397, whatever situation you’re in (new to PANS, thin on tests, or stalled for years). A $97 re-synthesis when new results come in. Pay-as-you-go Minta. Minta gives you direction; your doctors treat.',
}

const ink = '#2a2a26'
const teal = '#1F6B6B'
const soft = '#524d40'
const rule = '#e3dcc9'
const card = '#fffdf7'

// The three situations the $397 synthesis meets — same depth, same price.
const SITUATIONS: { situation: string; line: string; forWho: string; includes: string[]; twoStep: boolean }[] = [
  {
    situation: 'New to PANS',
    line: 'Don’t waste the wait.',
    forWho: 'Just diagnosed, a months-long wait for a specialist, few or no labs yet.',
    includes: [
      'Full intake + Minta with you during the wait',
      'Daily tracking, so you walk in with a month of data — not a blank page',
      'A testing direction now, then a treatment direction once results come back',
    ],
    twoStep: true,
  },
  {
    situation: 'Thin on tests',
    line: 'You can’t direct care from half a map.',
    forWho: 'You have some labs, but not enough to point treatment anywhere.',
    includes: [
      'A gap analysis — what you have, what’s missing, what to order to complete it',
      'Your full direction once the new results are in',
      'Prioritized — one or two tests at a time, never all at once',
    ],
    twoStep: true,
  },
  {
    situation: 'Stalled · months or years in',
    line: 'Doing everything, still stuck.',
    forWho: 'Round after round of treatment, doctor after doctor — and your child still isn’t better. You need fresh eyes on all of it at once.',
    includes: [
      'One deep synthesis of your whole record — labs, symptoms, history, every prior treatment',
      'The driver no one found · the wrong order · the thing never addressed',
      'A “what hasn’t been tried” pass — the menu beyond the standard protocol',
    ],
    twoStep: false,
  },
]

export default function PricingPage() {
  return (
    <main style={{ background: '#faf6ec', color: ink }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 40px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>Pricing</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 62px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            Simple, honest pricing.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            One synthesis. One price — wherever you are in this. Minta reads your child’s whole picture and gives you{' '}
            <strong style={{ color: ink }}>direction.</strong> Your doctors treat; we make sure you walk in knowing what to ask and why.
          </p>
        </div>
      </section>

      {/* The Synthesis — one price, big */}
      <section style={{ padding: 'clamp(44px, 7vw, 80px) 24px clamp(20px, 3vw, 32px)' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto', background: card, border: `1.5px solid ${teal}`, borderRadius: 18, padding: 'clamp(28px, 4vw, 40px)', textAlign: 'center' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 10px' }}>The Plan B Synthesis</p>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(54px, 9vw, 76px)', lineHeight: 1, color: ink }}>$397</div>
          <p style={{ fontSize: 14, color: soft, margin: '6px 0 18px' }}>one fee · everything below included</p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: soft, maxWidth: 560, margin: '0 auto' }}>
            Your whole record — every lab, symptom, history, and prior treatment — read together, in one pass. The drivers, the order to address them, what to bring each doctor, and your next move. The <strong style={{ color: ink }}>same depth and the same price</strong>, whatever situation you’re in.
          </p>
          <p style={{ fontSize: 15, color: teal, fontWeight: 700, margin: '16px auto 0', maxWidth: 560 }}>
            Plus a <strong style={{ color: ink }}>15-minute debrief with Rachel</strong> once your synthesis is ready — a quick call or a few emails, whichever you prefer — to walk through it and answer your questions.
          </p>
          <a href="https://app.planbforpans.com/checkout/synthesis" style={{ display: 'inline-block', marginTop: 26, background: teal, color: '#fffdf7', fontSize: 16.5, fontWeight: 700, padding: '15px 38px', borderRadius: 9, textDecoration: 'none' }}>Get your synthesis →</a>
          <p style={{ fontSize: 13, color: soft, margin: '12px 0 0' }}>No labs yet? <a href="https://app.planbforpans.com/checkout/synthesis?plan=direction" style={{ color: teal, fontWeight: 600, textDecoration: 'none' }}>Start with a $97 direction →</a></p>
        </div>
      </section>

      {/* The three situations — no repeated price */}
      <section style={{ padding: '0 24px clamp(40px, 6vw, 72px)' }}>
        <div className="pb-container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: 14, color: soft, margin: '0 0 22px' }}>The synthesis meets you wherever you are:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {SITUATIONS.map((pk) => (
              <div key={pk.situation} style={{ background: card, border: `1px solid ${rule}`, borderRadius: 14, padding: '22px 22px 24px', display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: teal, fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 6px' }}>{pk.situation}</p>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 24, lineHeight: 1.1, color: ink, margin: '0 0 12px' }}>{pk.line}</p>
                <p style={{ fontSize: 14, color: soft, lineHeight: 1.55, margin: '0 0 14px' }}>{pk.forWho}</p>
                <ul style={{ margin: '0 0 14px', paddingLeft: 18, fontSize: 14, color: soft, lineHeight: 1.6, flex: 1 }}>
                  {pk.includes.map((i) => <li key={i} style={{ marginBottom: 5 }}>{i}</li>)}
                </ul>
                <div style={{ borderTop: `1px solid ${rule}`, paddingTop: 12 }}>
                  {pk.situation === 'Stalled · months or years in' ? (
                    <p style={{ fontSize: 13.5, color: teal, fontWeight: 700, margin: 0 }}>
                      <span style={{ fontSize: 20 }}>$397</span> — one full synthesis. You already have the data.
                    </p>
                  ) : (
                    <p style={{ fontSize: 13.5, color: teal, fontWeight: 700, margin: 0, lineHeight: 1.5 }}>
                      Start at <span style={{ fontSize: 20 }}>$97</span> — your direction now (no labs, stale labs, or thin on labs). When your labs come in, the full synthesis is $397 <em style={{ fontWeight: 600 }}>minus your $97.</em> <span style={{ color: ink }}>$397 total — you never pay twice.</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Re-synthesis + ongoing Minta */}
      <section style={{ padding: '0 24px clamp(40px, 6vw, 72px)' }}>
        <div className="pb-container" style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          <div style={{ background: card, border: `1px solid ${rule}`, borderRadius: 14, padding: '24px 24px 26px' }}>
            <p style={{ color: teal, fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>When new results come in</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, margin: '0 0 10px' }}>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 44, lineHeight: 1, color: ink }}>$97</span>
              <span style={{ fontSize: 13, color: soft }}>a re-synthesis</span>
            </div>
            <p style={{ fontSize: 14.5, color: soft, lineHeight: 1.6, margin: 0 }}>
              New labs fold into your existing picture for an updated direction — faster and far less, because the foundation is already built.
            </p>
          </div>
          <div style={{ background: card, border: `1px solid ${rule}`, borderRadius: 14, padding: '24px 24px 26px' }}>
            <p style={{ color: teal, fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>Ongoing time with Minta</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap', margin: '0 0 10px' }}>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 40, lineHeight: 1, color: ink }}>$20 · $50 · $100</span>
            </div>
            <p style={{ fontSize: 14.5, color: soft, lineHeight: 1.6, margin: '0 0 8px' }}>
              Pay-as-you-go — <strong style={{ color: ink }}>no subscription, nothing recurring.</strong> You only pay for the time you use.
            </p>
            <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.6, margin: '0 0 12px' }}>
              What a month with Minta costs <em>you</em>: a <strong style={{ color: ink }}>light user</strong> (a check-in here and there) — about <strong style={{ color: ink }}>$20</strong>. A <strong style={{ color: ink }}>heavy user</strong> (chatting daily, deep in a complex case) — <strong style={{ color: ink }}>$50–$100</strong>. So <strong style={{ color: ink }}>$20</strong> lasts a heavy user about a month — a light user, several.
            </p>
            <a href="https://app.planbforpans.com" style={{ display: 'inline-block', fontSize: 14, fontWeight: 700, color: teal, textDecoration: 'none', borderBottom: `2px solid rgba(31,107,107,0.32)`, paddingBottom: 1 }}>Top up in the app →</a>
            <div style={{ borderTop: `1px solid ${rule}`, marginTop: 18, paddingTop: 16 }}>
              <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.6, margin: '0 0 12px' }}>
                Can&rsquo;t swing the $20? <strong style={{ color: ink }}>No family is ever turned away because of cost</strong> — Plan B is a non-profit, and we&rsquo;d rather help a child now than wait for funding.
              </p>
              <a href="https://app.planbforpans.com/sponsor" style={{ display: 'inline-block', fontSize: 14, fontWeight: 700, color: teal, textDecoration: 'none', borderBottom: `2px solid rgba(31,107,107,0.32)`, paddingBottom: 1 }}>Sponsor a family&rsquo;s Minta →</a>
            </div>
          </div>
        </div>
      </section>

      {/* How tokens work — education */}
      <section style={{ padding: '0 24px clamp(36px, 5vw, 56px)' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto', background: card, border: `1px solid ${rule}`, borderRadius: 14, padding: '26px 28px' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 10px' }}>How tokens work</p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: '0 0 12px' }}>
            Plan B runs on the most advanced — and most expensive — AI there is. Instead of a flat monthly fee, you buy <strong style={{ color: ink }}>tokens</strong>: units of Minta&rsquo;s time. Every message uses some; you only pay for what you actually use, and <strong style={{ color: ink }}>nothing is recurring.</strong>
          </p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: '0 0 12px' }}>
            Roughly, a <strong style={{ color: ink }}>$20 pack</strong> covers about <strong style={{ color: ink }}>85 conversations</strong> with Minta. A heavy user — working a complex case every day — moves through that in about a month; a light user, checking in here and there, can stretch it over several. The <strong style={{ color: ink }}>$50</strong> and <strong style={{ color: ink }}>$100</strong> packs go further, with a little extra thrown in.
          </p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: ink }}>Why tokens, not a subscription?</strong> A child in active treatment talks to Minta constantly; a stable one barely does — it wouldn&rsquo;t be fair to charge them the same. You pay for <em>your</em> use, and when you run low, you top up. That&rsquo;s it.
          </p>
        </div>
      </section>

      {/* Honest pricing + disclaimer */}
      <section style={{ padding: '0 24px 88px' }}>
        <div className="pb-container" style={{ maxWidth: 720, margin: '0 auto', background: '#f3eede', border: `1px solid ${rule}`, borderRadius: 12, padding: '22px 24px' }}>
          <p style={{ fontSize: 15.5, color: ink, fontWeight: 700, margin: '0 0 8px' }}>The honest version</p>
          <p style={{ fontSize: 15, color: soft, lineHeight: 1.65, margin: '0 0 10px' }}>
            A full synthesis is <strong style={{ color: ink }}>$397</strong>. If you don’t have labs yet — or yours are <strong style={{ color: ink }}>stale or thin</strong> — you start with a <strong style={{ color: ink }}>$97 direction</strong> (exactly what to test or re-run), and that $97 is <strong style={{ color: ink }}>credited</strong> toward your synthesis when your results come in. <strong style={{ color: ink }}>$397 total — never twice.</strong>
          </p>
          <p style={{ fontSize: 12.5, color: soft, fontStyle: 'italic', margin: '14px 0 0' }}>
            Plan B gives you direction — not medical advice or treatment. Your licensed medical team makes all clinical decisions. See our <a href="/terms" style={{ color: teal }}>Terms &amp; Medical Disclaimer</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
