import { motion } from 'framer-motion'
import { SECTION_IDS } from '../constants'

const steps = [
  { n: '01', t: 'Briefing', d: 'Objetivo, audiência, prova, canal, prazo e medo real de investir mal.' },
  { n: '02', t: 'Layout & narrativa', d: 'Hierarquia, mobile, mensagem e CTAs, alinhados ao funil.' },
  { n: '03', t: 'Build & integrações', d: 'SEO, formulários, tags, performance; dados quando o escopo pede.' },
  { n: '04', t: 'Publicação & ajuste', d: 'Deploy, medição, ajustes finos, sem sumir depois da publicação.' },
]

export function Process() {
  return (
    <section className="pg-section" id={SECTION_IDS.processo}>
      <div className="pg-wrap">
        <header className="pg-section__head">
          <p className="pg-eyebrow">Método</p>
          <h2 className="pg-section__title">Do diagnóstico ao ar, com rastreamento.</h2>
          <p className="pg-section__sub">Quatro fases. Sem teatro. Com transparência de escopo e entrega.</p>
        </header>

        <ol className="pg-steps">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              className="pg-step"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <span className="pg-step__n">{s.n}</span>
              <div className="pg-step__body">
                <h3 className="pg-step__t">{s.t}</h3>
                <p className="pg-step__d">{s.d}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
