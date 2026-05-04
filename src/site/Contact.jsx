import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SECTION_IDS, WHATSAPP_DISPLAY_NUMBER, whatsappHref } from '../constants'
import { Button } from './Button'

export function Contact() {
  return (
    <section className="pg-cta" id={SECTION_IDS.contato}>
      <div className="pg-wrap">
        <motion.div
          className="pg-cta__box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="pg-cta__title">Fale pelo WhatsApp</h2>
          <p className="pg-cta__sub">
            Fale conosco pelo WhatsApp quando quiser. Você é atendido por um dos nossos profissionais e respondemos o
            mais rápido possível.
          </p>
          <p className="pg-cta__num" aria-label={`WhatsApp ${WHATSAPP_DISPLAY_NUMBER}`}>
            {WHATSAPP_DISPLAY_NUMBER}
          </p>
          <div className="pg-cta__row">
            <Button variant="whatsapp" href={whatsappHref()} className="pg-cta__wa">
              <MessageCircle size={20} aria-hidden />
              Abrir WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
