import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy · Plan B for PANS',
  description: 'How Plan B for PANS collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#F6F1E7', color: '#141414', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <nav style={{ borderBottom: '1px solid #d4cbb6', padding: '18px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 22, fontWeight: 400, color: '#141414', margin: 0, lineHeight: 1 }}>
              Plan B <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#1F6B6B' }}>for PANS</span>
            </p>
          </Link>
        </div>
      </nav>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '72px 40px 120px' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#8a8373', marginBottom: 16, fontWeight: 500 }}>
          Legal
        </p>
        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 56, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.02, margin: 0, marginBottom: 16 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 13, color: '#8a8373', marginBottom: 48, fontFamily: '"JetBrains Mono", ui-monospace, Menlo, monospace' }}>
          Last updated: April 18, 2026
        </p>

        <div style={{ fontSize: 16, lineHeight: 1.85, color: '#2a2a2a', fontWeight: 300 }}>

          <Section title="Who we are">
            <p>
              Plan B for PANS is a free symptom-tracking tool and research project for families of children with PANS (Pediatric Acute-onset Neuropsychiatric Syndrome) and PANDAS. It is operated by Rachel Johnson as an independent research and tracking service. The tracker is available at <strong>app.planbforpans.com</strong> and as native apps for iOS and Android.
            </p>
            <p>
              We are <strong>not a medical practice</strong>. We do not provide diagnosis, treatment, or medical advice. The tracker exists to help families see patterns in their child&apos;s symptoms over time. Parents remain responsible for working with licensed medical professionals for all care decisions.
            </p>
          </Section>

          <Section title="What we collect">
            <p>When you use Plan B, we collect the following information:</p>
            <ul>
              <li><strong>Child information:</strong> first name, age/date of birth, gender, caregiver name, contact info, onset history, current treatments, symptom ratings (0–10 scale)</li>
              <li><strong>Daily logs:</strong> medications taken, doses, new symptoms, free-text notes you enter</li>
              <li><strong>Weekly check-ins:</strong> symptom ratings over time, session modality, notes</li>
              <li><strong>Device info:</strong> if you enable push notifications, we store the device token to send reminders</li>
              <li><strong>Technical data:</strong> basic server logs (IP, browser, timestamps) for security, retained 30 days</li>
            </ul>
          </Section>

          <Section title="How we use your data">
            <ul>
              <li><strong>Per-family tracker:</strong> your child&apos;s data populates charts, heatmaps, and AI analyses visible only to you and your Plan B practitioner</li>
              <li><strong>AI analysis:</strong> when you request an analysis, your data is sent to Anthropic&apos;s Claude API. Anthropic does not train on API inputs; see their <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#1F6B6B' }}>privacy policy</a></li>
              <li><strong>Aggregate research:</strong> only with your explicit consent; de-identified only</li>
              <li><strong>Push notifications:</strong> if opted in, reminder notifications when a log is due</li>
            </ul>
          </Section>

          <Section title="Who we share data with">
            <ul>
              <li><strong>Supabase</strong> (database) — encrypted at rest, US data centers</li>
              <li><strong>Anthropic</strong> (Claude AI) — for analysis queries</li>
              <li><strong>OpenAI</strong> (Whisper) — for audio transcription</li>
              <li><strong>Vercel</strong> (hosting)</li>
              <li><strong>Apple &amp; Google</strong> (push notification delivery only)</li>
            </ul>
            <p>We do <strong>not</strong> sell your data. No advertisers, data brokers, or insurers.</p>
          </Section>

          <Section title="Children's privacy">
            <p>
              Plan B is used by parents or legal guardians to track their children&apos;s symptoms. We comply with COPPA by collecting child data only through parent entry. Parents can request deletion at any time.
            </p>
          </Section>

          <Section title="Your rights">
            <p>Email <a href="mailto:rachel@planbforpans.com" style={{ color: '#1F6B6B' }}>rachel@planbforpans.com</a> to:</p>
            <ul>
              <li>Request a full export of your data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your child&apos;s record (within 30 days)</li>
              <li>Opt out of aggregate research</li>
              <li>Revoke push notification consent</li>
            </ul>
          </Section>

          <Section title="Data security">
            <p>
              All data transmitted over HTTPS, encrypted at rest. Plan B is a small-team research project and is <strong>not</strong> HIPAA-certified. Do not include protected health information you would not be comfortable sharing through a non-HIPAA service.
            </p>
          </Section>

          <Section title="Data retention">
            <p>Your child&apos;s data is retained as long as you use the tracker. Stop using it + email us and we delete within 30 days.</p>
          </Section>

          <Section title="Contact">
            <p>
              <strong>Rachel Johnson</strong>
              <br />
              <a href="mailto:rachel@planbforpans.com" style={{ color: '#1F6B6B' }}>rachel@planbforpans.com</a>
            </p>
          </Section>

        </div>

        <div style={{ marginTop: 80, paddingTop: 32, borderTop: '1px solid #d4cbb6' }}>
          <Link href="/" style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1F6B6B', textDecoration: 'none', fontWeight: 500 }}>
            ← Back to Plan B
          </Link>
        </div>
      </main>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 44 }}>
      <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 30, fontWeight: 400, color: '#141414', marginBottom: 16, marginTop: 0, letterSpacing: '-0.01em' }}>
        {title}
      </h2>
      {children}
    </section>
  )
}
