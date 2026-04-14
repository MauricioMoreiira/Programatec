import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles, Zap } from 'lucide-react'
import { Button } from './ui/Button'
import { SECTION_IDS, whatsappLink, WA_MESSAGES } from '../constants'

const stagger = {
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const bullets = [
  { icon: Zap, text: 'Orçamento rápido' },
  { icon: Sparkles, text: 'Design moderno' },
  { icon: ArrowRight, text: 'Site responsivo' },
  { icon: MessageCircle, text: 'Foco em conversão' },
]

export function Hero() {
  return (
    <section id={SECTION_IDS.inicio} className="hero">
      <div className="hero__bg" aria-hidden />
      <div className="hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={item} className="hero__badges">
            <span className="badge badge--pulse">
              <span className="badge__dot" aria-hidden />
              Orçamento rápido
            </span>
            <span className="badge badge--soft">Sites & landing pages premium</span>
          </motion.div>

          <motion.h1 variants={item} className="hero__title">
            Quanto custa um site profissional?{' '}
            <span className="hero__title-accent">Solicite seu orçamento agora</span>
          </motion.h1>

          <motion.p variants={item} className="hero__subtitle">
            Sites e landing pages pensadas para gerar clientes — com preço alinhado ao seu objetivo e
            sem complicação.
          </motion.p>

          <motion.ul variants={item} className="hero__bullets" aria-label="Destaques">
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="hero__bullet">
                <Icon className="hero__bullet-icon" size={18} aria-hidden />
                {text}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="hero__ctas">
            <Button
              variant="primary"
              href={`#${SECTION_IDS.precos}`}
              className="hero__cta hero__cta--primary"
            >
              Solicitar orçamento
            </Button>
            <Button
              variant="whatsapp"
              href={whatsappLink(WA_MESSAGES.default)}
              className="hero__cta"
              aria-label="Falar agora no WhatsApp para pedir orçamento"
            >
              <MessageCircle size={20} aria-hidden />
              Pedir orçamento no WhatsApp
            </Button>
          </motion.div>

          <motion.p variants={item} className="hero__note">
            Resposta objetiva sobre <strong>preço site profissional</strong> após entender seu
            objetivo — sem compromisso.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-mockup" aria-hidden>
            <div className="hero-mockup__glow" />
            <div className="hero-mockup__desktop">
              <div className="hero-mockup__chrome">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-mockup__screen hero-mockup__screen--desktop">
                <div className="hero-mockup__nav" />
                <div className="hero-mockup__hero-block">
                  <div className="hero-mockup__line hero-mockup__line--lg" />
                  <div className="hero-mockup__line hero-mockup__line--md" />
                  <div className="hero-mockup__cta-row">
                    <span className="hero-mockup__pill" />
                    <span className="hero-mockup__pill hero-mockup__pill--ghost" />
                  </div>
                </div>
                <div className="hero-mockup__grid">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="hero-mockup__phone">
              <div className="hero-mockup__notch" />
              <div className="hero-mockup__screen hero-mockup__screen--mobile">
                <div className="hero-mockup__line hero-mockup__line--sm" />
                <div className="hero-mockup__line hero-mockup__line--xs" />
                <span className="hero-mockup__btn" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
