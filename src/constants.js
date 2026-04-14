/** Links e textos centrais da landing (fácil de ajustar para produção). */
export const WHATSAPP_NUMBER = '5551995465854'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function whatsappLink(message) {
  const text = encodeURIComponent(message)
  return `${WHATSAPP_URL}?text=${text}`
}

export const WA_MESSAGES = {
  default: 'Olá! Quero saber o preço do meu site e solicitar um orçamento.',
  budget: 'Olá! Gostaria de solicitar um orçamento para site/landing page.',
  price: 'Olá! Quero saber o preço do meu site.',
}

export const SECTION_IDS = {
  inicio: 'inicio',
  valor: 'valor',
  precos: 'precos',
  beneficios: 'beneficios',
  diferenciais: 'diferenciais',
  processo: 'processo',
  faq: 'faq',
  contato: 'contato',
}
