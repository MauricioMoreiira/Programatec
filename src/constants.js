/** WhatsApp — apenas dígitos (DDI 55 + DDD + número), sem símbolos. */
export const WHATSAPP_E164_DIGITS = '5551995465854'

/** Número exibido no site (DDD 51 Rio Grande do Sul). */
export const WHATSAPP_DISPLAY_NUMBER = '(51) 99546-5854'

/**
 * Link `wa.me` com texto opcional já preenchido.
 * @param {string} [message]
 */
export function whatsappHref(message = '') {
  const base = `https://wa.me/${WHATSAPP_E164_DIGITS}`
  const t = message.trim()
  return t ? `${base}?text=${encodeURIComponent(t)}` : base
}

/** IDs das seções (âncoras), layout v2 — URLs usam hash #id */
export const SECTION_IDS = {
  inicio: 'topo',
  servicos: 'servicos',
  sobre: 'sobre',
  processo: 'processo',
  precos: 'orçamento',
  faq: 'perguntas',
  contato: 'contato',
}

/** @param {string} id */
export function hashForSectionId(id) {
  return `#${id}`
}

/**
 * Atualiza o hash na barra de endereço e rola até a seção.
 * @param {string} id
 * @param {'smooth' | 'auto'} [behavior]
 */
export function navigateToSectionId(id, behavior = 'smooth') {
  const el = document.getElementById(id)
  if (!el) return
  const next = hashForSectionId(id)
  if (window.location.hash !== next) {
    window.history.pushState(null, '', next)
  }
  el.scrollIntoView({ behavior, block: 'start' })
}
