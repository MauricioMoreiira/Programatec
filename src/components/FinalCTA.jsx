import { motion } from 'framer-motion'
import { MessageCircle, Sparkles } from 'lucide-react'
import { Section } from './layout/Section'
import { Button } from './ui/Button'
import { SECTION_IDS, whatsappLink, WA_MESSAGES } from '../constants'

export function FinalCTA() {
  return (
    <Section id={SECTION_IDS.contato} dark className="final-cta-section">
      <motion.div
        className="final-cta"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
      >
        <div className="final-cta__glow" aria-hidden />
        <span className="final-cta__eyebrow">
          <Sparkles size={16} aria-hidden />
          Fechamento
        </span>
        <h2 className="final-cta__title">
          Peça agora seu orçamento e descubra quanto custa tirar seu projeto do papel
        </h2>
        <p className="final-cta__subtitle">
          Se você está buscando <strong>landing page preço</strong>, <strong>preço site profissional</strong> ou um{' '}
          <strong>orçamento site</strong> sem enrolação, chame no WhatsApp — respondemos com objetividade comercial.
        </p>
        <div className="final-cta__actions">
          <Button
            variant="whatsapp"
            href={whatsappLink(WA_MESSAGES.price)}
            className="final-cta__btn final-cta__btn--wa"
            aria-label="Solicitar orçamento pelo WhatsApp"
          >
            <MessageCircle size={22} aria-hidden />
            Solicite seu orçamento pelo WhatsApp
          </Button>
          <Button variant="outline" href={`#${SECTION_IDS.precos}`} className="final-cta__btn">
            Ver faixas de investimento
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
