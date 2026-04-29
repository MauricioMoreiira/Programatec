import { Mail, Banknote } from 'lucide-react'
import { Button } from './Button'
import { SECTION_IDS, hashForSectionId, navigateToSectionId } from '../constants'

export function MobileBar() {
  return (
    <div className="pg-mbar" role="navigation" aria-label="Ações móveis">
      <Button
        href={hashForSectionId(SECTION_IDS.contato)}
        variant="primary"
        className="pg-mbar__btn"
        onClick={(e) => {
          e.preventDefault()
          navigateToSectionId(SECTION_IDS.contato)
        }}
        aria-label="Fale conosco"
      >
        <Mail size={18} />
        Fale conosco
      </Button>
      <Button
        href={hashForSectionId(SECTION_IDS.precos)}
        variant="secondary"
        className="pg-mbar__btn"
        onClick={(e) => {
          e.preventDefault()
          navigateToSectionId(SECTION_IDS.precos)
        }}
        aria-label="Orçamento"
      >
        <Banknote size={18} />
        Orçamento
      </Button>
    </div>
  )
}
