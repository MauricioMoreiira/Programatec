import { SECTION_IDS, hashForSectionId, navigateToSectionId, whatsappHref } from '../constants'
import { trackLeadConversionOpen } from '../utils/adsConversion'

const y = new Date().getFullYear()

export function Footer() {
  const waUrl = whatsappHref()
  return (
    <footer className="pg-foot">
      <div className="pg-wrap pg-foot__inner">
        <div className="pg-foot__brand">Programatec</div>
        <p className="pg-foot__copy">© {y}. Desenvolvimento de sites sob medida.</p>
        <nav className="pg-foot__nav" aria-label="Rodapé">
          <a
            href={hashForSectionId(SECTION_IDS.inicio)}
            onClick={(e) => {
              e.preventDefault()
              navigateToSectionId(SECTION_IDS.inicio)
            }}
          >
            Início
          </a>
          <a
            href={hashForSectionId(SECTION_IDS.servicos)}
            onClick={(e) => {
              e.preventDefault()
              navigateToSectionId(SECTION_IDS.servicos)
            }}
          >
            Serviços
          </a>
          <a
            href={hashForSectionId(SECTION_IDS.precos)}
            onClick={(e) => {
              e.preventDefault()
              navigateToSectionId(SECTION_IDS.precos)
            }}
          >
            Orçamento
          </a>
          <a
            href={hashForSectionId(SECTION_IDS.faq)}
            onClick={(e) => {
              e.preventDefault()
              navigateToSectionId(SECTION_IDS.faq)
            }}
          >
            Dúvidas
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => trackLeadConversionOpen(e, waUrl)}>
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  )
}
