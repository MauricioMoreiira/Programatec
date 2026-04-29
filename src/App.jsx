import { useEffect } from 'react'
import { Nav } from './site/Nav'
import { Hero } from './site/Hero'
import { Services } from './site/Services'
import { About } from './site/About'
import { Process } from './site/Process'
import { Pricing } from './site/Pricing'
import { Faq } from './site/Faq'
import { Contact } from './site/Contact'
import { Footer } from './site/Footer'
import { ContactFloat } from './site/ContactFloat'
import { MobileBar } from './site/MobileBar'
import { SECTION_IDS } from './constants'

function scrollToHash() {
  const raw = window.location.hash.slice(1)
  if (!raw) return
  const id = decodeURIComponent(raw.replace(/\+/g, ' '))
  const el = document.getElementById(id)
  if (!el) return
  requestAnimationFrame(() => {
    el.scrollIntoView({ block: 'start', behavior: 'auto' })
  })
}

export default function App() {
  useEffect(() => {
    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    window.addEventListener('popstate', scrollToHash)
    return () => {
      window.removeEventListener('hashchange', scrollToHash)
      window.removeEventListener('popstate', scrollToHash)
    }
  }, [])

  return (
    <>
      <a href={`#${SECTION_IDS.inicio}`} className="pg-skip">
        Pular para o conteúdo
      </a>
      <Nav />
      <main className="pg-main">
        <Hero />
        <Services />
        <About />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
        <Footer />
      </main>
      <ContactFloat />
      <MobileBar />
    </>
  )
}
