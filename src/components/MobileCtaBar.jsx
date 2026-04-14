import { MessageCircle, Send } from 'lucide-react'
import { Button } from './ui/Button'
import { SECTION_IDS, whatsappLink, WA_MESSAGES } from '../constants'

export function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar" role="region" aria-label="Atalhos de contato">
      <Button variant="primary" href={`#${SECTION_IDS.precos}`} className="mobile-cta-bar__btn">
        <Send size={18} aria-hidden />
        Solicitar orçamento
      </Button>
      <Button
        variant="whatsapp"
        href={whatsappLink(WA_MESSAGES.budget)}
        className="mobile-cta-bar__btn mobile-cta-bar__btn--wa"
        aria-label="Pedir orçamento no WhatsApp"
      >
        <MessageCircle size={18} aria-hidden />
        WhatsApp
      </Button>
    </div>
  )
}
