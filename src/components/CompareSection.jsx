import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Section, SectionHeader } from './layout/Section'

const left = {
  title: 'Site comum',
  subtitle: 'Template genérico, pouca estratégia',
  items: [
    { ok: false, text: 'Visual “parecido com todo mundo”' },
    { ok: false, text: 'Copy e layout desconectados do anúncio' },
    { ok: false, text: 'Performance e mobile como detalhe' },
    { ok: false, text: 'CTA fraco ou escondido' },
  ],
}

const right = {
  title: 'Site profissional',
  subtitle: 'Projeto comercial + execução premium',
  items: [
    { ok: true, text: 'Identidade visual coesa e premium' },
    { ok: true, text: 'Estrutura pensada para conversão' },
    { ok: true, text: 'Responsivo, rápido e bem construído' },
    { ok: true, text: 'Integração clara com WhatsApp/orçamento' },
  ],
}

export function CompareSection() {
  return (
    <Section className="compare-wrap">
      <SectionHeader
        eyebrow="Comparativo"
        title="A diferença entre “ter um site” e ter uma máquina de contatos"
      />
      <div className="compare">
        <motion.div
          className="compare__col compare__col--weak"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="compare__head">
            <h3>{left.title}</h3>
            <p>{left.subtitle}</p>
          </div>
          <ul className="compare__list">
            {left.items.map((row) => (
              <li key={row.text} className="compare__row compare__row--bad">
                <X className="compare__icon" size={18} aria-hidden />
                {row.text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="compare__col compare__col--strong"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="compare__head">
            <h3>{right.title}</h3>
            <p>{right.subtitle}</p>
          </div>
          <ul className="compare__list">
            {right.items.map((row) => (
              <li key={row.text} className="compare__row compare__row--good">
                <Check className="compare__icon" size={18} aria-hidden />
                {row.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
