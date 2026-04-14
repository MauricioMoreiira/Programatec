import { motion } from 'framer-motion'
import { Gem, Headphones, LineChart, Rocket, Shield, XCircle } from 'lucide-react'
import { Section, SectionHeader } from './layout/Section'
import { SECTION_IDS } from '../constants'

const items = [
  {
    icon: LineChart,
    title: 'Projeto com foco comercial',
    text: 'Cada bloco existe para apoiar decisão: oferta, prova, objeção e CTA — alinhado a “quanto custa” e “por que vocês”.',
  },
  {
    icon: Gem,
    title: 'Visual premium',
    text: 'Gradientes sutis, sombras leves, microinterações: aparência de produto sério — não de template empilhado.',
  },
  {
    icon: Headphones,
    title: 'Atendimento direto',
    text: 'Você fala com quem desenha e desenvolve: menos telefone sem fio, mais velocidade de ajuste.',
  },
  {
    icon: Rocket,
    title: 'Desenvolvimento personalizado',
    text: 'Landing pages para anúncios, sites institucionais e fluxos sob medida — sem solução genérica engessada.',
  },
  {
    icon: Shield,
    title: 'Páginas para gerar orçamento',
    text: 'Formulários e WhatsApp com mensagens prontas: menos atrito, mais conversas qualificadas.',
  },
  {
    icon: XCircle,
    title: 'Nada de “cara de amador”',
    text: 'Evitamos o visual repetido de templates gratuitos: seu negócio merece presença de marca.',
  },
]

export function Differentials() {
  return (
    <Section id={SECTION_IDS.diferenciais}>
      <SectionHeader
        eyebrow="Diferenciais"
        title="Por que contratar um projeto pensado para anúncios e vendas"
        subtitle="Em tráfego pago, a página é parte do produto. Se a experiência falha, o custo por lead sobe — mesmo com criativo bom."
      />
      <div className="diff-list">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            className="diff-item"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="diff-item__icon">
              <it.icon size={22} aria-hidden />
            </div>
            <div>
              <h3 className="diff-item__title">{it.title}</h3>
              <p className="diff-item__text">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
