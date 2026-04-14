import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ValueSection } from './components/ValueSection'
import { CompareSection } from './components/CompareSection'
import { PricingSection } from './components/PricingSection'
import { Benefits } from './components/Benefits'
import { Differentials } from './components/Differentials'
import { Process } from './components/Process'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { MobileCtaBar } from './components/MobileCtaBar'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <CompareSection />
        <PricingSection />
        <Benefits />
        <Differentials />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCtaBar />
    </>
  )
}
