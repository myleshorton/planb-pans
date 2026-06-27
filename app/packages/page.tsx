// Plan B pricing — the Synthesis is free (Plan B is a non-profit). The only
// charge is pay-as-you-go Minta tokens, which cover the actual AI cost. A warm
// "support the studies" donation path funds it for the next family.
// Direction-not-treatment.

export const metadata = {
  title: 'Pricing | Plan B for PANS',
  description:
    'The Plan B Synthesis is free — Plan B is a non-profit, and a real person reads your child’s whole picture. The only thing you ever pay for is metered Minta tokens (pay-as-you-go, with a generous free amount first). Donations fund the studies and keep it free for the next family.',
}

const ink = '#2a2a26'
const teal = '#1F6B6B'
const soft = '#524d40'
const rule = '#e3dcc9'
const card = '#fffdf7'

// The three situations the (free) synthesis meets — same depth, every family.
const SITUATIONS: { situation: string; line: string; forWho: string; includes: string[] }[] = [
  {
    situation: 'New to PANS',
    line: 'Don’t waste the wait.',
    forWho: 'Just diagnosed, a months-long wait for a specialist, few or no labs yet.',
    includes: [
      'Full intake + Minta with you during the wait',
      'Daily tracking, so you walk in with a month of data — not a blank page',
      'A testing direction now, then a treatment direction once results come back',
    ],
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
            The Synthesis is free.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            Plan B is a non-profit. Minta reads your child’s whole picture and gives you{' '}
            <strong style={{ color: ink }}>direction</strong> — and the Synthesis costs nothing. The only thing you ever pay for is{' '}
            <strong style={{ color: ink }}>metered Minta tokens</strong>, pay-as-you-go, after a generous free amount. Your doctors treat; we make sure you walk in knowing what to ask and why.
          </p>
        </div>
      </section>

      {/* The Synthesis — free */}
      <section style={{ padding: 'clamp(44px, 7vw, 80px) 24px clamp(20px, 3vw, 32px)' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto', background: card, border: `1.5px solid ${teal}`, borderRadius: 18, padding: 'clamp(28px, 4vw, 40px)', textAlign: 'center' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 14px' }}>The Plan B Synthesis</p>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(60px, 11vw, 92px)', lineHeight: 1, color: ink, margin: '0 0 18px' }}>Free.</div>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: soft, maxWidth: 560, margin: '0 auto' }}>
            A complete, integrated read of everything going on with your child — built by a real person. Plan B is a non-profit, and the Synthesis is <strong style={{ color: ink }}>free.</strong>
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: soft, maxWidth: 560, margin: '14px auto 0' }}>
            Your whole record — every lab, symptom, history, and prior treatment — read together, in one pass. The drivers, the order to address them, what to bring each doctor, and your next move. The <strong style={{ color: ink }}>same depth, whatever situation you’re in.</strong>
          </p>
          <p style={{ fontSize: 15, color: teal, fontWeight: 700, margin: '16px auto 0', maxWidth: 560 }}>
            Plus a <strong style={{ color: ink }}>15-minute debrief with Rachel</strong> once your synthesis is ready — a quick call or a few emails, whichever you prefer.
          </p>
          <a href="https://app.planbforpans.com/signup" style={{ display: 'inline-block', marginTop: 24, background: teal, color: '#fffdf7', fontSize: 16.5, fontWeight: 700, padding: '15px 38px', borderRadius: 9, textDecoration: 'none' }}>Get your synthesis — free →</a>
        </div>
      </section>

      {/* Support the studies — pay it forward */}
      <section style={{ padding: 'clamp(20px, 3vw, 28px) 24px clamp(36px, 5vw, 56px)' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto', background: '#f1efe2', border: `1.5px solid ${teal}`, borderRadius: 16, padding: 'clamp(26px, 4vw, 36px)', textAlign: 'center' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 12px' }}>Pay it forward</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(28px, 4.4vw, 40px)', lineHeight: 1.1, color: ink, margin: '0 0 14px' }}>
            Support the studies
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: soft, maxWidth: 580, margin: '0 auto' }}>
            Plan B is a non-profit, and the Synthesis is free for every family. If it helped yours and you’re able, a gift goes straight to the work: <strong style={{ color: ink }}>donations fund the cohort studies, keep Rachel’s time on it, and keep it free for the next family.</strong>
          </p>
          <a href="https://app.planbforpans.com/donate" style={{ display: 'inline-block', marginTop: 22, background: teal, color: '#fffdf7', fontSize: 16, fontWeight: 700, padding: '14px 34px', borderRadius: 9, textDecoration: 'none' }}>Donate / Support the studies →</a>
          <p style={{ fontSize: 13, color: soft, margin: '14px 0 0' }}>Entirely optional — never a wall. Every family gets the Synthesis free, gift or no gift.</p>
        </div>
      </section>

      {/* The three situations — every family, same depth */}
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
                      <span style={{ fontSize: 18 }}>Free</span> — one full synthesis. You already have the data.
                    </p>
                  ) : (
                    <p style={{ fontSize: 13.5, color: teal, fontWeight: 700, margin: 0, lineHeight: 1.5 }}>
                      <span style={{ fontSize: 18 }}>Free</span> — your direction now (no labs, stale labs, or thin on labs), then your full synthesis when the new results come in. <span style={{ color: ink }}>Both free — Plan B is a non-profit.</span>
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
              <span style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 44, lineHeight: 1, color: ink }}>Free</span>
              <span style={{ fontSize: 13, color: soft }}>a re-synthesis</span>
            </div>
            <p style={{ fontSize: 14.5, color: soft, lineHeight: 1.6, margin: 0 }}>
              New labs fold into your existing picture for an updated direction — re-read as your child’s story changes, for as long as you need it, free.
            </p>
          </div>
          <div style={{ background: card, border: `1px solid ${rule}`, borderRadius: 14, padding: '24px 24px 26px' }}>
            <p style={{ color: teal, fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>Ongoing time with Minta</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap', margin: '0 0 10px' }}>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 40, lineHeight: 1, color: ink }}>$20 · $50 · $100</span>
            </div>
            <p style={{ fontSize: 14.5, color: soft, lineHeight: 1.6, margin: '0 0 8px' }}>
              The Synthesis and Minta’s core are free — a <strong style={{ color: ink }}>generous free amount comes first.</strong> After that, metered tokens are the only charge, and they just cover the actual AI cost. Pay-as-you-go — <strong style={{ color: ink }}>no subscription, nothing recurring.</strong>
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
            The Synthesis and Minta&rsquo;s core are <strong style={{ color: ink }}>free</strong> — and a generous free amount of Minta time comes before you pay anything. Plan B runs on the most advanced — and most expensive — AI there is, so once that runs out you buy <strong style={{ color: ink }}>tokens</strong>: units of Minta&rsquo;s time that just cover the actual AI cost. Every message uses some; you only pay for what you actually use, and <strong style={{ color: ink }}>nothing is recurring.</strong>
          </p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: '0 0 12px' }}>
            Roughly, a <strong style={{ color: ink }}>$20 pack</strong> covers about <strong style={{ color: ink }}>85 conversations</strong> with Minta. A heavy user — working a complex case every day — moves through that in about a month; a light user, checking in here and there, can stretch it over several. The <strong style={{ color: ink }}>$50</strong> and <strong style={{ color: ink }}>$100</strong> packs go further <em>and</em> give you more time per dollar — <strong style={{ color: ink }}>the $50 is about 10% more generous than the $20, and the $100 about 15% more</strong> (roughly <strong style={{ color: ink }}>~240 chats</strong> for $50 and <strong style={{ color: ink }}>~500</strong> for $100, versus the ~213 and ~425 you&rsquo;d get at the $20 rate). The bigger the pack, the better the rate.
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
            The full Synthesis is <strong style={{ color: ink }}>free</strong> — Plan B is a non-profit. If you don’t have labs yet — or yours are <strong style={{ color: ink }}>stale or thin</strong> — you start with a free <strong style={{ color: ink }}>direction</strong> (exactly what to test or re-run), then your full Synthesis once results come in. The only thing you ever pay for is <strong style={{ color: ink }}>metered Minta tokens</strong>, after a generous free amount — and if Plan B helped you, a <strong style={{ color: ink }}>donation</strong> keeps it free for the next family.
          </p>
          <p style={{ fontSize: 12.5, color: soft, fontStyle: 'italic', margin: '14px 0 0' }}>
            Plan B gives you direction — not medical advice or treatment. Your licensed medical team makes all clinical decisions. See our <a href="/terms" style={{ color: teal }}>Terms &amp; Medical Disclaimer</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
