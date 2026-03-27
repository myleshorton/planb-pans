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
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '36px', fontWeight: 300, marginBottom: '24px', color: '#111' }}>
            My Story
          </h2>

          <p style={{ marginBottom: '32px' }}>
            I'm Rachel. I'm a mom of three kids who had PANS. Two were severely affected. I was not willing to accept defeat, but I was also at my breaking point—I nearly took my own life because I couldn't handle the pain of watching my children suffer.
          </p>

          <p style={{ marginBottom: '32px' }}>
            My son had Lyme, mold, COVID. We tried every major protocol: antibiotics, steroids, IVIG. Every single one made him worse. We ended up homeless because of mold exposure. It was a nightmare. And yet, he's now 100% cured. Completely healed.
          </p>

          <p style={{ marginBottom: '32px' }}>
            The protocols didn't work. I visited every top PANS doctor—Latimer, Frid, O'Hara, Bach. They couldn't help. But you know who did? Other moms. In encrypted threads, 3 a.m. Google searches, private messages—moms were leaving breadcrumbs for each other. Real solutions. Real hope.
          </p>

          <p style={{ marginBottom: '48px' }}>
            My son healed through biomagnetism (the Randall Protocol), classical homeopathy, targeted functional medicine, and behavioral therapy. But I realized something: other moms who found these answers disappeared. Their threads went cold. And parents like you were left searching in the dark, unaware that solutions existed.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '36px', fontWeight: 300, marginBottom: '24px', color: '#111' }}>
            Why This Exists
          </h2>

          <p style={{ marginBottom: '24px' }}>
            I'm not here to treat your kids. I'm not here to make money. I'm here because I believe <strong>pathogens create behaviors</strong>. Bartonella has behaviors attached to it. Lyme has behaviors attached to it. Mold has behaviors attached to it. And when we understand the pathogen, we can find the cure.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Right now, every doctor is in their corner with their one trick. They're not talking to each other. They're not synthesizing. And families are suffering because of it.
          </p>

          <p style={{ marginBottom: '48px' }}>
            My job is to get enough people listening so that we can force these doctors to talk. To share information. To stop protecting their protocols like trade secrets. <strong>Health is a human right.</strong> Your child does not deserve to rage. They do not deserve to be locked in their room. They do not deserve to try to kill themselves. These are pathogens. We can beat this. Together.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '36px', fontWeight: 300, marginBottom: '24px', color: '#111' }}>
            The Plan
          </h2>

          <p style={{ marginBottom: '24px' }}>
            We're going to explore every modality. We're going to interview doctors and healers who are thinking outside the box. We're going to document case studies so you can see what's actually working.
          </p>

          <p style={{ marginBottom: '24px' }}>
            I was terrified to try biomagnetism. I was terrified of the Nerx. There was no one I knew who had gone before me. I had to blindly trust. And it worked. My son healed.
          </p>

          <p style={{ marginBottom: '24px' }}>
            But you shouldn't have to be that brave. You shouldn't have to navigate the unknown alone. This is the hub where we will watch case studies and see real kids go through real protocols. Not everything will work, but some things will. And they may be the breadcrumbs you need to get out.
          </p>

          <p>
            We're going to synthesize patterns using AI so you can understand your child's unique profile. The breadcrumbs that other parents left for me—I'm turning those into a giant path. A roadmap. So you don't have to search alone. So we can kill PANS. Kill PANDAS. Kill autism. Together.
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
