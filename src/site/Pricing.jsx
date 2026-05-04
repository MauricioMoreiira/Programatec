import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from './Button'
import { SECTION_IDS, whatsappHref } from '../constants'

const plans = [
  {
    name: 'Landing',
    price: 'R$ 1.200',
    note: 'a partir de',
    delay: 'até 7 dias*',
    desc: 'Uma página forte para campanha e teste. Conteúdo, CTA, performance móvel e base sólida para o Google entender a página.',
    highlight: false,
  },
  {
    name: 'Site & presença',
    price: 'R$ 2.400',
    note: 'a partir de',
    delay: '~12 dias*',
    desc: 'Mais páginas, SEO on-page, formulários, tags Google, interações. Para quem precisa de corpo, não de folha a mais.',
    highlight: true,
  },
  {
    name: 'Dados & integrações',
    price: 'Sob proposta',
    note: 'orçamento aberto',
    delay: 'por fases',
    desc: 'Banco de dados, stock, regras, painéis, APIs. Cada peça mapeada antes do valor, sem achismo de escopo.',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section className="pg-section pg-section--tint" id={SECTION_IDS.precos}>
      <div className="pg-wrap">
        <header className="pg-section__head">
          <p className="pg-eyebrow">Orçamento</p>
          <h2 className="pg-section__title">Números de entrada. Escopo a fechar contigo.</h2>
          <p className="pg-section__sub">
            As faixas abaixo são pontos de partida. O valor e o prazo fecham depois de alinharmos texto, peças, integrações
            e o que a sua operação exige.
          </p>
        </header>

        <div className="pg-pricing">
          {plans.map((p, i) => (
            <motion.article
              key={p.name}
              className={`pg-pricing__card${p.highlight ? ' pg-pricing__card--hi' : ''}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
            >
              {p.highlight ? <span className="pg-pricing__badge">Mais pedido</span> : null}
              <p className="pg-pricing__name">{p.name}</p>
              <p className="pg-pricing__from">{p.note}</p>
              <p className="pg-pricing__val">{p.price}</p>
              <p className="pg-pricing__delay">{p.delay}</p>
              <p className="pg-pricing__desc">{p.desc}</p>
              <Button
                variant={p.highlight ? 'whatsapp' : 'secondary'}
                className="pg-pricing__btn"
                href={whatsappHref(`Olá! Tenho interesse no plano "${p.name}".`)}
              >
                Chamar no WhatsApp
                <MessageCircle size={16} aria-hidden />
              </Button>
            </motion.article>
          ))}
        </div>
        <p className="pg-pricing__foot">*Prazos indicativos após alinhamento de conteúdo e materiais da sua parte.</p>
      </div>
    </section>
  )
}
