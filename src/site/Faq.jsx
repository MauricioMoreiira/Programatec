import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SECTION_IDS } from '../constants'

const qa = [
  {
    q: 'Isso tudo vem de template?',
    a: 'Não vendemos o mesmo pacote rebrandado. O ponto de partida é a sua operação, não um demo genérico. Pode haver padrões internos (como em qualquer estúdio), mas a entrega é feita para o funil e o posicionamento do seu negócio.',
  },
  {
    q: 'Os R$ 1.200 e R$ 2.400 são preço fechado?',
    a: 'São “a partir de” e ponto de partida de conversa. O valor final e o prazo fecham no briefing, quando o escopo tiver tamanho, integrações, volume de texto e tudo o que ajusta a realidade (para cima ou para os lados) com clareza.',
  },
  {
    q: 'E hospedagem?',
    a: 'Podemos cuidar disso quando fizer sentido com a arquitetura e com o seu ritmo. Se preferir a sua infra, alinhamos requisitos e o que a equipe daí precisa receber.',
  },
  {
    q: 'E projetos com base de dados e integrações?',
    a: 'Orçamento em fases. Mapeamento do fluxo, dados, permissões, prioridades, risco, manutenção. Tudo no mesmo princípio: sem promessa no ar sem conversa sólida.',
  },
]

export function Faq() {
  const base = useId()
  const [open, setOpen] = useState(/** @type {number | null} */ (0))

  return (
    <section className="pg-section" id={SECTION_IDS.faq}>
      <div className="pg-wrap pg-wrap--narrow">
        <header className="pg-section__head">
          <p className="pg-eyebrow">Dúvidas</p>
          <h2 className="pg-section__title">O que mais perguntam antes de decidir</h2>
        </header>

        <div className="pg-faq">
          {qa.map((item, i) => {
            const is = open === i
            return (
              <div key={item.q} className={`pg-faq__item${is ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="pg-faq__q"
                  aria-expanded={is}
                  aria-controls={`${base}-a-${i}`}
                  id={`${base}-q-${i}`}
                  onClick={() => setOpen(is ? null : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className="pg-faq__icon"
                    size={20}
                    style={{ transform: is ? 'rotate(180deg)' : 'none', transition: 'transform .2s ease' }}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {is ? (
                    <motion.div
                      id={`${base}-a-${i}`}
                      role="region"
                      aria-labelledby={`${base}-q-${i}`}
                      className="pg-faq__a-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="pg-faq__a">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
