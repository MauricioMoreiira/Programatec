import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Section, SectionHeader } from './layout/Section'
import { Button } from './ui/Button'
import { SECTION_IDS, whatsappLink, WA_MESSAGES } from '../constants'

const plans = [
  {
    name: 'Landing page profissional',
    desc: 'Uma página focada em campanha: oferta clara, prova social, FAQ curto e CTA forte.',
    forWho: 'Ideal para Google Ads, lançamentos e captação de leads.',
    from: 'a partir de R$ 2.400',
    hint: 'Valores variam com copy, integrações (CRM/form), animações e volume de seções.',
    featured: true,
  },
  {
    name: 'Site institucional profissional',
    desc: 'Múltiplas páginas com navegação sólida: empresa, serviços, contato e SEO básico.',
    forWho: 'Marcas que precisam de presença séria e contato fácil.',
    from: 'a partir de R$ 4.800',
    hint: 'Depende da quantidade de páginas, blog, formulários e integrações.',
    featured: false,
  },
  {
    name: 'Projeto sob medida',
    desc: 'Desenvolvimento personalizado: integrações, painéis, automações e regras específicas.',
    forWho: 'Negócios com fluxo próprio, SaaS, operações mais complexas.',
    from: 'sob consulta',
    hint: 'Após briefing, entregamos escopo fechado e investimento alinhado ao prazo.',
    featured: false,
  },
]

export function PricingSection() {
  return (
    <Section id={SECTION_IDS.precos} dark>
      <SectionHeader
        dark
        eyebrow="Investimento"
        title="Quanto custa um site? Transparência comercial, sem surpresa"
        subtitle="O preço site profissional e o landing page preço mudam com escopo: páginas, integrações, nível de personalização e objetivo. Por isso trabalhamos com faixas “a partir de” e fechamento após entender sua necessidade — é a forma mais justa de orçamento site com resultado."
        align="center"
      />
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <motion.article
            key={p.name}
            className={`pricing-card ${p.featured ? 'pricing-card--featured' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -6 }}
          >
            {p.featured ? <span className="pricing-card__ribbon">Mais pedido em ads</span> : null}
            <h3 className="pricing-card__title">{p.name}</h3>
            <p className="pricing-card__desc">{p.desc}</p>
            <p className="pricing-card__for">{p.forWho}</p>
            <div className="pricing-card__price">
              <span className="pricing-card__from">{p.from}</span>
              <span className="pricing-card__hint">{p.hint}</span>
            </div>
            <Button
              variant={p.featured ? 'primary' : 'outline'}
              href={whatsappLink(`${WA_MESSAGES.budget} Projeto: ${p.name}`)}
              className="pricing-card__btn"
              aria-label={`Pedir orçamento para ${p.name} no WhatsApp`}
            >
              Pedir orçamento
              <ArrowUpRight size={18} aria-hidden />
            </Button>
          </motion.article>
        ))}
      </div>
      <motion.p
        className="pricing-footnote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Não prometemos “preço fechado no ar” sem briefing — prometemos clareza, prazo e entrega com
        padrão premium.
      </motion.p>
    </Section>
  )
}
