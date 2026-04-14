import { motion } from 'framer-motion'
import { ClipboardList, Hammer, MessageSquare, Send } from 'lucide-react'
import { Section, SectionHeader } from './layout/Section'
import { SECTION_IDS } from '../constants'

const steps = [
  {
    n: '1',
    icon: MessageSquare,
    title: 'Você entra em contato',
    text: 'Chamada rápida ou WhatsApp: você descreve objetivo, público e referências.',
  },
  {
    n: '2',
    icon: ClipboardList,
    title: 'Entendemos sua necessidade',
    text: 'Perguntas objetivas para definir escopo, páginas, integrações e prioridades.',
  },
  {
    n: '3',
    icon: Send,
    title: 'Enviamos o orçamento',
    text: 'Proposta clara com entregas, prazo e investimento — alinhada ao que você busca.',
  },
  {
    n: '4',
    icon: Hammer,
    title: 'Desenvolvemos seu projeto',
    text: 'Implementação premium, revisões e publicação com performance em mente.',
  },
]

export function Process() {
  return (
    <Section id={SECTION_IDS.processo} tinted>
      <SectionHeader
        eyebrow="Processo"
        title="Simples, rápido e sem complicação"
        subtitle="Quatro passos para sair da dúvida “quanto custa um site” para um plano claro de execução."
      />
      <ol className="process">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            className="process__step"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
          >
            <div className="process__badge" aria-hidden>
              <span>{s.n}</span>
            </div>
            <div className="process__card">
              <div className="process__icon">
                <s.icon size={22} aria-hidden />
              </div>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__text">{s.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
