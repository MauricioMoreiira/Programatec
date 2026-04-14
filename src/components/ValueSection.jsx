import { motion } from 'framer-motion'
import { BarChart3, Gauge, Layout, ShieldCheck, Smartphone, Target } from 'lucide-react'
import { Section, SectionHeader } from './layout/Section'
import { SECTION_IDS } from '../constants'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Credibilidade imediata',
    text: 'Um site profissional comunica autoridade: quem busca **orçamento site** confia mais em quem parece sério.',
  },
  {
    icon: Target,
    title: 'Estrutura para vender',
    text: 'Landing page bem feita guia a decisão: mensagem clara, provas e CTAs — não é só “página bonita”.',
  },
  {
    icon: BarChart3,
    title: 'Mais leads qualificados',
    text: 'Quando a página conversa com a intenção do anúncio, você paga menos por lead e converte mais.',
  },
  {
    icon: Layout,
    title: 'Presença premium',
    text: 'Hierarquia visual, tipografia e espaçamento transmitem posicionamento — seu negócio “sobe de nível”.',
  },
  {
    icon: Gauge,
    title: 'Velocidade e performance',
    text: 'Carregamento rápido reduz abandono e melhora experiência — especialmente em tráfego pago.',
  },
  {
    icon: Smartphone,
    title: 'Experiência mobile real',
    text: 'A maioria acessa pelo celular: layout responsivo, leitura confortável e CTA sempre acessível.',
  },
]

function RichText({ text }) {
  const parts = text.split('**')
  return (
    <p className="value-card__text">
      {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
    </p>
  )
}

export function ValueSection() {
  return (
    <Section id={SECTION_IDS.valor} tinted>
      <SectionHeader
        eyebrow="Prova de valor"
        title="Site e landing page que mudam o resultado do negócio"
        subtitle="Aqui o foco é retorno: credibilidade, conversão e consistência entre anúncio e página. Quando alguém pesquisa quanto custa um site, a decisão também é sobre confiança."
      />
      <div className="value-grid">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            className="value-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            <div className="value-card__icon-wrap">
              <c.icon className="value-card__icon" size={22} aria-hidden />
            </div>
            <h3 className="value-card__title">{c.title}</h3>
            <RichText text={c.text} />
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
