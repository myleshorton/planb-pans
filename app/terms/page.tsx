// Terms of Use + Medical Disclaimer. Educational positioning: Plan B directs,
// it does not treat. Reviewed-by-attorney recommended before launch.

export const metadata = {
  title: 'Terms & Medical Disclaimer | Plan B for PANS',
  description:
    'Plan B for PANS provides educational information and integrates your child’s records — not medical advice, diagnosis, or treatment. Your licensed medical team makes all clinical decisions.',
}

const ink = '#2a2a26'
const teal = '#1F6B6B'
const soft = '#4f4a3d'
const rule = '#e3dcc9'

const h2: React.CSSProperties = { fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(22px, 3.2vw, 30px)', color: ink, margin: '36px 0 12px' }
const p: React.CSSProperties = { fontSize: 16, lineHeight: 1.75, color: soft, margin: '0 0 14px' }

export default function TermsPage() {
  return (
    <main style={{ background: '#faf6ec', color: ink }}>
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 40px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>Terms &amp; Medical Disclaimer</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 60px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            Please read this before you use Plan B.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: soft, margin: 0 }}>
            Plan B exists to help you understand and organize your child’s care. It is not a substitute for a
            doctor. This page explains the line we hold — and never cross.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(40px, 6vw, 72px) 24px 96px' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto' }}>

          <h2 style={h2}>1 · Educational purpose — not medical advice</h2>
          <p style={p}>
            Plan B for PANS, including the AI assistant “Minta,” provides <strong style={{ color: ink }}>educational
            information</strong> and helps you organize your child’s existing records, labs, symptoms, and the
            published research. It does <strong style={{ color: ink }}>not</strong> provide medical advice,
            diagnosis, or treatment. We are not physicians and do not practice medicine. Rachel Johnson is a
            parent navigator and integrator, not a licensed clinician. Nothing here creates a doctor–patient or
            provider–patient relationship.
          </p>

          <h2 style={h2}>2 · We give direction. Your doctors treat.</h2>
          <p style={p}>
            Everything Plan B provides — including any “testing direction,” “treatment direction,” synthesis,
            calendar, or roadmap — is offered as <strong style={{ color: ink }}>information and questions to bring
            to your child’s licensed medical team,</strong> who make all clinical decisions. We integrate and
            direct; your prescriber decides and treats. We never order, prescribe, or administer anything.
          </p>

          <h2 style={h2}>3 · Supplements, tests &amp; treatments</h2>
          <p style={p}>
            Any supplement, test, medication, or therapy mentioned anywhere in Plan B is{' '}
            <strong style={{ color: ink }}>informational only.</strong> Statements about supplements have not
            been evaluated by the U.S. Food and Drug Administration and are{' '}
            <strong style={{ color: ink }}>not intended to diagnose, treat, cure, or prevent any disease.</strong>{' '}
            Always consult your child’s licensed physician before starting, stopping, or changing any supplement,
            medication, test, or treatment. Dosages we reference are standard published figures for education —
            the right dose for your child is always your prescriber’s decision.
          </p>

          <h2 style={h2}>4 · Don’t delay care — and emergencies</h2>
          <p style={p}>
            Never disregard, avoid, or delay seeking professional medical advice because of something you read or
            received through Plan B. <strong style={{ color: ink }}>If your child is in crisis or danger — including
            thoughts of self-harm — call 911 or your local emergency number, or a crisis line, immediately.</strong>{' '}
            Plan B is not an emergency service.
          </p>

          <h2 style={h2}>5 · No guarantees &amp; assumption of risk</h2>
          <p style={p}>
            Every child is different and outcomes vary. We make <strong style={{ color: ink }}>no guarantee of any
            result.</strong> You are responsible for the decisions you and your medical team make. To the fullest
            extent permitted by law, you release Plan B for PANS, its founders, employees, and affiliates from any
            liability, claim, or loss arising from your use of this information or any product or service.
          </p>

          <h2 style={h2}>6 · Privacy</h2>
          <p style={p}>
            Your child’s information is private. See our <a href="/privacy" style={{ color: teal }}>Privacy Policy</a>{' '}
            for how it is stored and used. We do not sell your data.
          </p>

          <p style={{ ...p, marginTop: 32, fontSize: 14, fontStyle: 'italic', color: soft }}>
            By creating an account or using Plan B for PANS, you acknowledge that you have read and agree to these
            terms. Questions? Email <a href="mailto:rachel@planbforpans.com" style={{ color: teal }}>rachel@planbforpans.com</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
