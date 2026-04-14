import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { SECTION_IDS, whatsappLink, WA_MESSAGES } from '../constants'

const nav = [
  { label: 'Início', href: `#${SECTION_IDS.inicio}` },
  { label: 'Valor', href: `#${SECTION_IDS.valor}` },
  { label: 'Investimento', href: `#${SECTION_IDS.precos}` },
  { label: 'Benefícios', href: `#${SECTION_IDS.beneficios}` },
  { label: 'Processo', href: `#${SECTION_IDS.processo}` },
  { label: 'FAQ', href: `#${SECTION_IDS.faq}` },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__bar">
        <a href={`#${SECTION_IDS.inicio}`} className="site-header__brand" onClick={closeMenu}>
          <span className="site-header__logo" aria-hidden />
          <span className="site-header__name">
            Programatec<span className="site-header__dot">.</span>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="site-header__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Button
            variant="secondary"
            href={`#${SECTION_IDS.precos}`}
            className="site-header__cta site-header__cta--desktop"
          >
            Ver faixas de investimento
          </Button>
          <Button
            variant="whatsapp"
            href={whatsappLink(WA_MESSAGES.budget)}
            className="site-header__cta site-header__cta--desktop"
            aria-label="Pedir orçamento no WhatsApp"
          >
            WhatsApp
          </Button>
          <button
            type="button"
            className="site-header__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="site-header__drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <nav aria-label="Mobile">
              <ul className="site-header__drawer-list">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="site-header__drawer-link" onClick={closeMenu}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="site-header__drawer-ctas">
              <Button variant="primary" href={`#${SECTION_IDS.precos}`} className="site-header__drawer-btn" onClick={closeMenu}>
                Quanto custa um site?
              </Button>
              <Button
                variant="whatsapp"
                href={whatsappLink(WA_MESSAGES.budget)}
                className="site-header__drawer-btn"
                onClick={closeMenu}
              >
                Pedir orçamento no WhatsApp
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
