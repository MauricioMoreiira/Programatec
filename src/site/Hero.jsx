import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from './Button'
import { SECTION_IDS, hashForSectionId, navigateToSectionId, whatsappHref } from '../constants'

export function Hero() {
  return (
    <section className="pg-hero" id={SECTION_IDS.inicio}>
      <div className="pg-hero__aurora" aria-hidden />
      <div className="pg-hero__grid" aria-hidden />
      <div className="pg-hero__noise" aria-hidden />

      <div className="pg-hero__content">
        <motion.h1
          className="pg-hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sites sob medida para empresas que levam crescimento a sério.
        </motion.h1>

        <motion.p
          className="pg-hero__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          Design, performance e estratégia unidos para transformar seu site em uma máquina de vendas.
        </motion.p>

        <motion.div
          className="pg-hero__lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <p className="pg-hero__lead-line">Aqui não existe &quot;mais do mesmo&quot;.</p>
          <p className="pg-hero__lead-line">
            Cada projeto é construído do zero para posicionar sua empresa e gerar resultado real.
          </p>
        </motion.div>

        <motion.div
          className="pg-hero__actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
        >
          <Button
            variant="whatsapp"
            className="pg-hero__btn"
            href={whatsappHref('Olá! Gostaria de pedir um orçamento.')}
          >
            Falar no WhatsApp
            <MessageCircle size={18} aria-hidden />
          </Button>
          <Button
            variant="secondary"
            href={hashForSectionId(SECTION_IDS.precos)}
            className="pg-hero__btn"
            onClick={(e) => {
              e.preventDefault()
              navigateToSectionId(SECTION_IDS.precos)
            }}
          >
            Ver prazo e valores
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
