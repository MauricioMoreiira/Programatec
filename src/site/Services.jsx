import { motion } from 'framer-motion'
import { Gauge, MessageSquareText, Radar, Sparkles } from 'lucide-react'
import { SECTION_IDS } from '../constants'

const pillars = [
  {
    icon: MessageSquareText,
    title: 'Estratégia antes do layout',
    text: 'Briefing, funil, prova e objeção, para a interface não ser “bonita e vazia”.',
    className: 'pg-value__tile pg-value__tile--a',
  },
  {
    icon: Sparkles,
    title: 'Tecnologia de ponta, entrega séria',
    text: 'Ferramentas e práticas atuais do mercado. Site ágil, preparado para evoluir, sem surpresas de plataforma velha ou “gato escondido”.',
    className: 'pg-value__tile pg-value__tile--b',
  },
  {
    icon: Gauge,
    title: 'Velocidade que paga',
    text: 'Performance e Core Web Vitals no desenho. Tráfego pago não perdoa lentidão.',
    className: 'pg-value__tile pg-value__tile--c',
  },
  {
    icon: Radar,
    title: 'Medição no pacote',
    text: 'SEO on-page, estrutura e tags Google quando o funil do seu negócio precisar de dados.',
    className: 'pg-value__tile pg-value__tile--d',
  },
]

function ValueArt() {
  return (
    <div className="pg-value__art" aria-hidden>
      <svg className="pg-value__svg" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="va_g1" x1="60" y1="40" x2="360" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="1" stopColor="#1d4ed8" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="va_g2" x1="200" y1="0" x2="200" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="1" stopColor="#1e40af" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <rect width="400" height="320" rx="24" fill="url(#va_g1)" />
        <circle cx="320" cy="72" r="88" fill="#3b82f6" opacity="0.18" />
        <circle cx="90" cy="220" r="64" fill="#60a5fa" opacity="0.22" />
        <path
          d="M48 200 L120 120 L200 180 L280 88 L352 140"
          stroke="url(#va_g2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <circle cx="120" cy="120" r="8" fill="#fff" opacity="0.95" />
        <circle cx="200" cy="180" r="8" fill="#93c5fd" />
        <circle cx="280" cy="88" r="8" fill="#fff" opacity="0.95" />
        <circle cx="352" cy="140" r="8" fill="#60a5fa" />
        <rect x="48" y="240" width="120" height="48" rx="10" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" />
        <rect x="196" y="240" width="156" height="48" rx="10" fill="rgba(37,99,235,0.25)" stroke="rgba(147,197,253,0.35)" />
      </svg>
      <div className="pg-value__art-cap">
        <span className="pg-value__art-kicker">Da ideia ao ar</span>
        <p className="pg-value__art-line">
          Um fio contínuo entre mensagem, interface e performance, para o desenho não ficar à solta do que o negócio precisa
          medir.
        </p>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section className="pg-section pg-value" id={SECTION_IDS.servicos}>
      <div className="pg-wrap">
        <header className="pg-section__head">
          <p className="pg-eyebrow">O que entregamos</p>
          <h2 className="pg-section__title">Antes de pensar no design, pensamos no que vai fazer seu site vender.</h2>
          <p className="pg-section__sub">
            Cada decisão é baseada em conversão: mensagem, estrutura e performance. A tecnologia vem para garantir
            velocidade, SEO e escala, não para complicar.
          </p>
        </header>

        <div className="pg-value__bento">
          <motion.div
            className="pg-value__feature"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <ValueArt />
          </motion.div>

          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              className={p.className}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.06 * i, duration: 0.4 }}
            >
              <div className="pg-value__tile-ic" aria-hidden>
                <p.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="pg-value__tile-t">{p.title}</h3>
              <p className="pg-value__tile-x">{p.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
