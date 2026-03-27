export default function About() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fff9f5 0%, #fff5f0 100%)' }}>
      <section style={{ padding: '100px 20px', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,26,26,0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '64px', fontWeight: 300, marginBottom: '48px', color: '#111', position: 'relative', zIndex: 1 }}>
          Our Mission
        </h1>

        <div style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '16px', color: '#555', lineHeight: 2, marginBottom: '60px', position: 'relative', zIndex: 1 }}>
          <p style={{ marginBottom: '32px' }}>
            <strong>Plan B for PANS, PANDAS & Autism</strong> exists for families when standard protocols fail but hope remains.
          </p>

          <p style={{ marginBottom: '32px' }}>
            We are not here to treat your children. We are not here to make money. We are here to explore the big picture, to help find a cure, and to demand that doctors talk to each other, share information, and synthesize a plan together.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '36px', fontWeight: 300, marginTop: '48px', marginBottom: '24px', color: '#111' }}>
            The Journey
          </h2>

          <p style={{ marginBottom: '24px' }}>
            When Plan A doesn't work, there are Plans B, C, D, E, F, G, H and beyond. Each one represents a different approach, a different set of modalities, a different hypothesis about what might help.
          </p>

          <p style={{ marginBottom: '24px' }}>
            This website documents those journeys. Real families. Real protocols. Real successes and failures. Because healing isn't linear, and neither is understanding these complex conditions.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '36px', fontWeight: 300, marginTop: '48px', marginBottom: '24px', color: '#111' }}>
            Why We're Here
          </h2>

          <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '16px' }}>To give parents <strong>hope</strong> when standard medicine says there are no more options</li>
            <li style={{ marginBottom: '16px' }}>To showcase <strong>alternative modalities</strong> that parents are using with varying degrees of success</li>
            <li style={{ marginBottom: '16px' }}>To demand <strong>transparency and collaboration</strong> from the medical community</li>
            <li style={{ marginBottom: '16px' }}>To build a <strong>collective knowledge base</strong> about PANS, PANDAS, and autism</li>
            <li>To move toward <strong>a cure</strong>, not just symptom management</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '36px', fontWeight: 300, marginTop: '48px', marginBottom: '24px', color: '#111' }}>
            Who We Are
          </h2>

          <p style={{ marginBottom: '24px' }}>
            We are parents who've walked this path. We are doctors willing to think outside the box. We are practitioners exploring modalities beyond the mainstream. And we are united by one belief: when your child is suffering and Plan A fails, you need access to Plans B through H.
          </p>

          <p>
            We believe in the power of sharing real stories, real data, and real outcomes. Not to replace medical care, but to complement it. To expand the conversation. To give families a roadmap through the darkness.
          </p>
        </div>

        <div style={{ padding: '48px 40px', background: 'linear-gradient(135deg, #fff 0%, #fef7f0 100%)', border: '2px solid #f0e0d8', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)', position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '32px', fontWeight: 300, color: '#111', marginBottom: '16px' }}>
            "There is always a Plan B."
          </p>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '16px', color: '#666', lineHeight: 1.8 }}>
            When standard protocols fail, hope doesn't end. It transforms.
          </p>
        </div>
      </section>

      <style>{`
        :root {
          --font-cormorant: 'Cormorant', Georgia, serif;
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
    </main>
  )
}
