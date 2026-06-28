// The Learn hub — home for every deconstructed modality. Each piece tells you
// what it is, the studies behind it, and (the part no one explains) HOW to
// actually access it. Cards link to live pages or mark "coming soon".

export const metadata = {
  title: 'Learn — Plan B for PANS',
  description:
    'Every PANS/Lyme treatment, deconstructed: what it is, the studies behind it, and — the part no one explains — how to actually access it and get help.',
}

const ink = '#2a2a26'
const teal = '#1F6B6B'
const soft = '#524d40'
const rule = '#e3dcc9'
const card = '#fffdf7'

type Item = { title: string; blurb: string; href?: string }

// Ordered by where each piece falls in the decision tree — start, find the
// drivers, escalate, go deeper — so a parent reads them in the order they'd
// actually face them.
const SECTIONS: { group: string; sub: string; items: Item[] }[] = [
  {
    group: '1 · Start here',
    sub: 'Understand it, then begin.',
    items: [
      { title: 'Understanding PANS', blurb: 'What PANS actually is, in plain language for an exhausted parent.', href: '/understanding-pans.html' },
      { title: 'The Protocol', blurb: 'Where everyone starts — anti-inflammatory + a targeted antibiotic, the doses, how long, and what to do if your child slips.', href: '/deconstructing-pans.html#protocol' },
    ],
  },
  {
    group: '2 · Support the body — alongside everything',
    sub: 'Start these early. And check the cleanup engine first — if methylation/detox is clogged, nothing else will work.',
    items: [
      { title: 'Methylation & Detox', blurb: 'The cleanup engine no specialist owns — HTMA, folate/FRAT, and the detox (and daily poops) that decide whether anything else works. If it’s clogged, nothing else will.', href: '/methylation.html' },
      { title: 'Diet & Nutrition', blurb: 'Food as a real PANS lever — the anti-inflammatory foundation, which specialty diet fits your kid’s pattern, and how to find triggers without over-restricting.', href: '/diet.html' },
      { title: 'Nervous-System Regulation', blurb: 'Calming a fight-or-flight brain — vagus-nerve work, HRV, limbic retraining — the layer that makes everything else tolerable.', href: '/nervous-system.html' },
      { title: 'Brain Retraining for Kids', blurb: 'The "calm the system first" step for a sensitive kid — DNRS (Annie Hopper) as the lead, plus the kid-native tools (tapping, SSP, co-regulation) that make detox survivable.', href: '/brain-retraining-kids.html' },
    ],
  },
  {
    group: '3 · Find the root drivers',
    sub: 'If the protocol isn’t enough, this is where the answers hide.',
    items: [
      { title: 'Find Mold Yourself', blurb: 'The honest ERMI story + how to find and safely remediate mold without a predatory middleman.', href: '/find-mold.html' },
      { title: 'Mold — the full protocol', blurb: 'Once mold is implicated: remove → drainage → binders → antifungals → nasal, the 3 binder schools, and the order that matters.', href: '/mold-protocol.html' },
      { title: 'Gut & Microbiome', blurb: 'Which stool test (and which to skip), the gut-brain link, and how to reset it.', href: '/gut.html' },
      { title: 'Yeast & Candida', blurb: 'The behaviors it drives — the giddy "drunk" affect, OCD, sugar cravings — and a gentle, low-and-slow protocol for the super-sensitive kid who can\'t take die-off.', href: '/yeast.html' },
      { title: 'Lyme & Co-infections', blurb: 'Antibiotics vs herbals (research-backed), the kill-menu, per-bug dosing, and how to find a Lyme doctor.', href: '/lyme.html' },
      { title: 'MCAS & Histamine', blurb: 'The tests an MCAS doctor runs, the treatment cocktail, and why the patch alone is not the cure (find the root).', href: '/mcas.html' },
    ],
  },
  {
    group: '4 · Immune treatment',
    sub: 'Calming, steadying, or supplying an over-reactive immune system.',
    items: [
      { title: 'IVIG & Immune Treatment', blurb: 'Who qualifies, the infusion day demystified, the studies (what it clears vs not), and the insurance fight.', href: '/ivig.html' },
      { title: 'Serum Immunoglobulins (SBI Protect)', blurb: 'Powdered, oral IgG (serum-bovine immunoglobulin) that binds toxins and calms gut immunity — not IVIG. The gut-barrier and endotoxin-binding research, who it helps, how to dose, and the honest evidence.', href: '/serum-immunoglobulins.html' },
      { title: 'Intranasal Immunoglobulins', blurb: 'Immunoglobulins delivered to the nose — a far gentler, lower-cost cousin of IVIG aimed at the olfactory route into the brain. What it is, why it’s not IVIG, the early evidence, and how families access it.', href: '/nasal-immunoglobulins.html' },
      { title: 'LDN — Low-Dose Naltrexone', blurb: 'Jill Crista’s lead “regulate immunity” tool: a tiny dose of an old drug that rebalances an over-reactive immune system and quiets neuroinflammation. How it works, pediatric dosing, the honest evidence — plus colostrum and the rest of the immune toolkit.', href: '/ldn.html' },
      { title: 'Camel & Donkey Milk', blurb: 'Gentle, lower-allergen immune/gut-support milks some families try — the small camel-milk autism research, donkey milk for cow’s-milk allergy, raw-vs-pasteurized risk, and the honest “emerging, not proven” label.', href: '/camel-donkey-milk.html' },
    ],
  },
  {
    group: '5 · Deeper gut resets',
    sub: 'When remove-and-rebuild isn’t enough.',
    items: [
      { title: 'FMT — Fecal Transplant', blurb: 'The deepest gut reset — the ASU autism trials, how to access it safely, and why screening IS the safety.', href: '/fmt.html' },
      { title: 'Helminthic Therapy', blurb: 'Worms that calm an over-reactive immune system — species, dosing, the antidote, and why non-verbal kids are off the table.', href: '/helminths.html' },
    ],
  },
  {
    group: '6 · When it’s still not enough',
    sub: 'The deeper menu — what hasn’t been tried.',
    items: [
      { title: 'Hyperthermia & Clinics', blurb: 'Heat that kills Borrelia — the clinics, who qualifies, the real risks, and what it costs.', href: '/hyperthermia.html' },
      { title: 'Hyperbaric Oxygen (HBOT)', blurb: 'Pressurized oxygen for neuroinflammation — hard vs soft chambers, the honest (mixed) evidence, the cost, and the easiest antidote on the map.', href: '/hbot.html' },
      { title: 'Methylene Blue', blurb: 'Mitochondrial + anti-biofilm support — and the serotonin-syndrome warning if your child is on an SSRI. USP grade only.', href: '/methylene-blue.html' },
      { title: 'Bee Venom Therapy', blurb: 'Melittin kills Borrelia in the lab — but anaphylaxis is the headline: EpiPen on hand, test-sting first, never for young or allergic kids.', href: '/bee-venom.html' },
      { title: 'Ozone Therapy', blurb: 'Oxidative therapy for chronic infection — the routes, the honest (thin) evidence, the gas-embolism rule, and why Plan B steers away from the IV forms in kids.', href: '/ozone.html' },
      { title: 'Peptide Therapies', blurb: 'TA1, BPC-157, LL-37 and more — what each does, the honest evidence per peptide, and why sourcing (not the molecule) is the real risk.', href: '/peptides.html' },
      { title: 'Disulfiram for Lyme', blurb: 'The best human persister-remission data — and a real toxicity ceiling plus an absolute no-alcohol rule. Eyes wide open.', href: '/disulfiram.html' },
      { title: 'Phage Therapy', blurb: 'Viruses that kill bacteria and spare the gut — the real providers, how to access, and how to spot a quack.', href: '/phage.html' },
      { title: 'Biomagnetism', blurb: 'Magnets + the honest evidence — the Joan Randall Protocol, what it seems to move, and why it still needs study.', href: '/biomagnetism.html' },
      { title: 'Homeopathy', blurb: 'The 3 kinds — start classical. The training gap, the recovery stories, and how to find a true-classical homeopath.', href: '/homeopathy.html' },
    ],
  },
]

const COMING: Item[] = [
  { title: 'Kill-menu singles', blurb: 'Bee venom · HBOT · methylene blue · ozone · peptides — each graduating to its own deep-dive.' },
  { title: 'Practitioner reviews', blurb: 'Enter a name → real parent reviews, so you can skip the bad ones.' },
]

export default function LearnPage() {
  return (
    <main style={{ background: '#faf6ec', color: ink }}>
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 36px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>The Plan B Field Guide</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 62px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            Every treatment, deconstructed.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            The hardest part of PANS is the moment you <strong style={{ color: ink }}>stall</strong> — when the standard path stops working and no one tells you what&rsquo;s left. <strong style={{ color: ink }}>This is what&rsquo;s left.</strong> Every treatment, laid out honestly, so that when you hit a wall you know the search isn&rsquo;t over — there&rsquo;s a Plan B. Each guide answers the same things: <strong style={{ color: ink }}>what it is</strong>, <strong style={{ color: ink }}>the research</strong>, <strong style={{ color: ink }}>the real risks</strong>, <strong style={{ color: ink }}>how to actually get it</strong>, and <strong style={{ color: ink }}>how to vet a practitioner.</strong>
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(36px, 6vw, 64px) 24px' }}>
        <div className="pb-container" style={{ maxWidth: 960, margin: '0 auto' }}>
          {/* THE FULL MAP — the can't-miss hero with a mini-map visual */}
          <a href="/tree.html" style={{ display: 'block', textDecoration: 'none', background: 'linear-gradient(135deg, #1F6B6B, #24566a)', color: '#fdf8ee', borderRadius: 18, padding: 'clamp(28px,5vw,46px)', marginBottom: 38, boxShadow: '0 28px 64px -28px rgba(31,107,107,0.95)', border: '1px solid rgba(255,255,255,0.14)' }}>
            <p style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 800, color: '#bfe3df', margin: '0 0 12px' }}>★ Read this first — the whole picture</p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(36px, 6.5vw, 58px)', lineHeight: 1.0, margin: '0 0 6px' }}>The Map</p>
            <svg viewBox="0 0 620 64" style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '14px 0 6px' }} aria-hidden="true">
              <path d="M14,48 C130,8 210,8 300,38 C392,68 460,16 600,22" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" />
              <circle cx="14" cy="48" r="7" fill="#ffffff" />
              <circle cx="210" cy="20" r="6" fill="#bfe3df" />
              <circle cx="380" cy="50" r="6" fill="#bfe3df" />
              <circle cx="520" cy="24" r="6" fill="#bfe3df" />
              <circle cx="600" cy="22" r="8" fill="#ffd966" />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 560, fontSize: 10.5, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#cfe8e4', fontWeight: 600, margin: '0 0 18px' }}>
              <span>Protocol</span><span>Drivers</span><span>Deeper</span><span>Better</span>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: '#eaf4f2', margin: '0 0 20px', maxWidth: 640 }}>The whole journey for PANS — at a glance. <strong style={{ color: '#fff' }}>Tap any branch to open its treatments.</strong> Every guide below is one limb of this map.</p>
            <span style={{ display: 'inline-block', fontSize: 15, fontWeight: 800, color: '#1F6B6B', background: '#fff', padding: '13px 26px', borderRadius: 10, letterSpacing: '0.02em' }}>Open the Map &rarr;</span>
          </a>


          {SECTIONS.map((sec) => (
            <div key={sec.group} style={{ marginBottom: 30 }}>
              <p style={{ fontSize: 13, color: teal, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 2px' }}>{sec.group}</p>
              <p style={{ fontSize: 14, color: soft, fontStyle: 'italic', margin: '0 0 14px' }}>{sec.sub}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                {sec.items.map((it) => (
                  <a key={it.title} href={it.href} style={{ display: 'block', textDecoration: 'none', background: card, border: `1.5px solid ${teal}`, borderRadius: 14, padding: '22px 22px 24px' }}>
                    <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 24, lineHeight: 1.1, color: ink, margin: '0 0 10px' }}>{it.title}</p>
                    <p style={{ fontSize: 14.5, color: soft, lineHeight: 1.55, margin: '0 0 14px' }}>{it.blurb}</p>
                    <span style={{ fontSize: 13, color: teal, fontWeight: 700, letterSpacing: '0.04em' }}>Read &rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <p style={{ fontSize: 13, color: teal, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: 'clamp(36px, 6vw, 56px) 0 18px' }}>In the works — full how-to-access guides, with studies</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {COMING.map((it) => (
              <div key={it.title} style={{ background: '#fbf8f1', border: `1px solid ${rule}`, borderRadius: 12, padding: '18px 20px 20px', opacity: 0.92 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 21, color: ink, margin: 0 }}>{it.title}</p>
                  <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, color: teal, background: 'rgba(31,107,107,0.1)', padding: '3px 7px', borderRadius: 4, whiteSpace: 'nowrap' }}>Soon</span>
                </div>
                <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.5, margin: 0 }}>{it.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
