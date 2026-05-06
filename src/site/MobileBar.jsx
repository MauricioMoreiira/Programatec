import { MessageCircle, Banknote } from 'lucide-react'
import { Button } from './Button'
import { SECTION_IDS, hashForSectionId, navigateToSectionId, whatsappHref } from '../constants'
import { trackLeadConversionOpen } from '../utils/adsConversion'

export function MobileBar() {
  const waUrl = whatsappHref()
  return (
    <div className="pg-mbar" role="navigation" aria-label="Ações móveis">
      <Button
        variant="whatsapp"
        href={waUrl}
        className="pg-mbar__btn"
        aria-label="Abrir WhatsApp"
        onClick={(e) => trackLeadConversionOpen(e, waUrl)}
      >
        <MessageCircle size={18} aria-hidden />
        WhatsApp
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
