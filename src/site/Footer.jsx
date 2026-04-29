import { SECTION_IDS, hashForSectionId, navigateToSectionId } from '../constants'

const y = new Date().getFullYear()

export function Footer() {
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
          <a
            href={hashForSectionId(SECTION_IDS.contato)}
            onClick={(e) => {
              e.preventDefault()
              navigateToSectionId(SECTION_IDS.contato)
            }}
          >
            Fale conosco
          </a>
        </nav>
      </div>
    </footer>
  )
}
