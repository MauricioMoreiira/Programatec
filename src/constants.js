/** Formulário Formspree. Sobrescreva com VITE_FORMSPREE_ENDPOINT no `.env` se precisar de outro ambiente. */
export const FORMSPREE_ENDPOINT = (
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xwvyeeky'
).trim()

/** sessionStorage: plano escolhido na seção Orçamento para pré-preencher o formulário. */
export const CONTACT_PLAN_STORAGE_KEY = 'pg_contact_plan'

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
