import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SECTION_IDS } from '../constants'

const points = [
  'Código e layout nascem do contexto do seu negócio, não de um demo que &quot;parece o seu setor&quot;.',
  'Performance e rastreamento (Google) entram no desenho, não como &quot;extra do mês que vem&quot;.',
  'Quando faz sentido, cuidamos da hospedagem e do deploy para o site não ser o elo fraco.',
]

export function About() {
  return (
    <section className="pg-section pg-section--dark" id={SECTION_IDS.sobre}>
      <div className="pg-wrap pg-split">
        <motion.div
          className="pg-split__visual"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="pg-split__orb" aria-hidden />
          <div className="pg-split__card">
            <span className="pg-split__mono">// programatec</span>
            <p className="pg-split__quote">
              &quot;Conversão não é cor de botão sozinha. É clareza, velocidade e confiança no mesmo segundo.&quot;
            </p>
          </div>
        </motion.div>

        <div className="pg-split__text">
          <p className="pg-eyebrow pg-eyebrow--on-dark">Porque não somos uma fábrica de temas</p>
          <h2 className="pg-section__title pg-section__title--on-dark">Engenharia comercial, não wallpaper.</h2>
          <p className="pg-section__sub pg-section__sub--on-dark">
            Se o seu site é lento ou confuso, você paga anúncio e perde lead. A Programatec trabalha para o visitante
            entender a oferta e avançar, com base técnica atual e entregas que você consegue prever.
          </p>
          <ul className="pg-checks">
            {points.map((p) => (
              <li key={p} className="pg-checks__item">
                <Check className="pg-checks__ic" size={18} aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
