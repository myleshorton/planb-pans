import { Nav, Footer } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Problem } from './sections/Problem'
import { Method } from './sections/Method'
import { Research } from './sections/Research'
import { About } from './sections/About'
import { Podcast, CTA } from './sections/Podcast'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Method />
      <Research />
      <About />
      <Podcast />
      <CTA />
      <Footer />
    </>
  )
}
