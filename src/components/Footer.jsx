import { SECTION_IDS } from '../constants'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">Programatec</p>
        <p className="site-footer__copy">
          © {year} — Sites e landing pages pensadas para gerar clientes.{' '}
          <a href={`#${SECTION_IDS.contato}`}>Contato</a>
        </p>
      </div>
    </footer>
  )
}
