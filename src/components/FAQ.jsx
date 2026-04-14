import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Section, SectionHeader } from './layout/Section'
import { SECTION_IDS } from '../constants'

const faqs = [
  {
    q: 'Quanto custa um site profissional?',
    a: 'Depende do escopo: quantidade de páginas, integrações, conteúdo e nível de personalização. Por isso trabalhamos com faixas “a partir de” e fechamento após um briefing rápido — você recebe um orçamento site claro, sem letras miúdas.',
  },
  {
    q: 'Quanto custa uma landing page?',
    a: 'O landing page preço varia com a complexidade (copy, seções, formulários, CRM, animações e tracking). Em geral, landing pages profissionais para anúncios ficam em faixas iniciais objetivas — fale com a gente e cruzamos seu objetivo com o escopo ideal.',
  },
  {
    q: 'Em quanto tempo o site fica pronto?',
    a: 'Landing pages costumam ser mais rápidas; sites institucionais levam mais etapas. O prazo real sai do escopo, mas sempre combinamos cronograma com entregas parciais para você acompanhar.',
  },
  {
    q: 'O site funciona no celular?',
    a: 'Sim. Responsividade não é “extra”: é padrão. Layout, tipografia e botões são pensados para leitura confortável e conversão no mobile.',
  },
  {
    q: 'Posso pedir orçamento pelo WhatsApp?',
    a: 'Sim — inclusive recomendamos. É o caminho mais rápido para entender seu caso e te responder com objetividade.',
  },
  {
    q: 'O valor muda conforme o projeto?',
    a: 'Sim. O preço site profissional correto é o que reflete trabalho e resultado. Mudanças de escopo durante o projeto são tratadas com transparência para não haver surpresas.',
  },
  {
    q: 'Vocês fazem landing pages para anúncios?',
    a: 'Sim. É um dos nossos focos: página alinhada à intenção da campanha, velocidade, prova e CTA forte — para você pagar menos por conversa e vender mais.',
  },
  {
    q: 'O site pode ser feito com foco em gerar clientes?',
    a: 'Esse é o ponto central. Estrutura comercial, mensagens e CTAs são desenhados para transformar visita em contato — não apenas “informação institucional”.',
  },
]

export function FAQ() {
  const id = useId()
  const [open, setOpen] = useState(0)

  return (
    <Section id={SECTION_IDS.faq}>
      <SectionHeader
        eyebrow="FAQ"
        title="Perguntas frequentes — intenção de compra, preço e prazo"
        subtitle="Respostas diretas para quem chegou pesquisando quanto custa um site, landing page preço e orçamento site."
      />
      <div className="faq" role="region" aria-label="Perguntas frequentes">
        {faqs.map((item, index) => {
          const expanded = open === index
          const panelId = `${id}-panel-${index}`
          const buttonId = `${id}-btn-${index}`
          return (
            <div key={item.q} className={`faq__item ${expanded ? 'faq__item--open' : ''}`}>
              <button
                id={buttonId}
                type="button"
                className="faq__trigger"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                <span className="faq__q">{item.q}</span>
                <motion.span
                  className="faq__chev"
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown size={22} aria-hidden />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {expanded ? (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="faq__panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="faq__a">{item.a}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
