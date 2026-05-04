import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { Button } from './Button'
import { SECTION_IDS, hashForSectionId, navigateToSectionId, whatsappHref } from '../constants'

const links = [
  { label: 'Início', id: SECTION_IDS.inicio },
  { label: 'Serviços', id: SECTION_IDS.servicos },
  { label: 'Como fazemos', id: SECTION_IDS.processo },
  { label: 'Orçamento', id: SECTION_IDS.precos },
  { label: 'Dúvidas', id: SECTION_IDS.faq },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`pg-nav${scrolled ? ' pg-nav--scrolled' : ''}`}>
      <div className="pg-nav__inner">
        <a
          href={hashForSectionId(SECTION_IDS.inicio)}
          className="pg-nav__brand"
          onClick={(e) => {
            e.preventDefault()
            navigateToSectionId(SECTION_IDS.inicio)
          }}
        >
          <img
            className="pg-nav__mark"
            src="/Logo_Programatec.png"
            alt=""
            width={34}
            height={34}
            decoding="async"
          />
          <span className="pg-nav__word">
            Programa<span className="pg-nav__accent">tec</span>
          </span>
        </a>

        <nav className="pg-nav__links" aria-label="Seções">
          {links.map((l) => (
            <a
              key={l.id}
              href={hashForSectionId(l.id)}
              className="pg-nav__link"
              onClick={(e) => {
                e.preventDefault()
                navigateToSectionId(l.id)
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="pg-nav__end">
          <Button variant="whatsapp" href={whatsappHref()} className="pg-nav__cta">
            <MessageCircle size={18} aria-hidden />
            WhatsApp
          </Button>
          <button
            type="button"
            className="pg-nav__burger"
            aria-expanded={open}
            aria-controls="pg-menu"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="pg-menu"
            className="pg-nav__sheet"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l) => (
              <a
                key={l.id}
                href={hashForSectionId(l.id)}
                className="pg-nav__sheet-link"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToSectionId(l.id)
                  setOpen(false)
                }}
              >
                {l.label}
              </a>
            ))}
            <Button
              variant="whatsapp"
              href={whatsappHref()}
              className="pg-nav__sheet-wa"
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={18} aria-hidden />
              WhatsApp
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
