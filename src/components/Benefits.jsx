import { motion } from 'framer-motion'
import {
  Bot,
  Gauge,
  LayoutTemplate,
  Palette,
  Search,
  Smartphone,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { Section, SectionHeader } from './layout/Section'
import { SECTION_IDS } from '../constants'

const benefits = [
  { icon: Palette, title: 'Design profissional e moderno', text: 'Visual premium, consistente com o posicionamento da sua marca.' },
  { icon: Smartphone, title: 'Site 100% responsivo', text: 'Tipografia, espaçamento e CTAs pensados primeiro para mobile.' },
  { icon: LayoutTemplate, title: 'Estrutura para conversão', text: 'Seções na ordem certa para guiar visitante → contato.' },
  { icon: Gauge, title: 'Carregamento rápido', text: 'Boas práticas para sensação de leveza e melhor experiência.' },
  { icon: Search, title: 'SEO básico e boas práticas', text: 'Títulos, hierarquia e fundamentos para indexação saudável.' },
  { icon: Bot, title: 'Integração com WhatsApp', text: 'Fluxo direto para conversa — ideal para tráfego pago.' },
  { icon: Wrench, title: 'Desenvolvimento sob medida', text: 'Quando o padrão não basta, evoluímos o projeto com você.' },
  { icon: Sparkles, title: 'Atendimento próximo e direto', text: 'Alinhamento rápido, sem burocracia de agência gigante.' },
]

export function Benefits() {
  return (
    <Section id={SECTION_IDS.beneficios} tinted>
      <SectionHeader
        eyebrow="Benefícios"
        title="Tudo o que sua landing page e site precisam para performar"
        subtitle="Combinamos estética premium com intenção comercial: é o pacote que sustenta campanhas quando o usuário chega pesquisando preço e comparação."
      />
      <div className="benefits-grid">
        {benefits.map((b, i) => (
          <motion.article
            key={b.title}
            className="benefit-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.04 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="benefit-card__icon">
              <b.icon size={22} aria-hidden />
            </div>
            <h3 className="benefit-card__title">{b.title}</h3>
            <p className="benefit-card__text">{b.text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
