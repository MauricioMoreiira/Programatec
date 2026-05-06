/**
 * Google Ads: conversão por clique definida no index.html (`gtag_report_conversion`).
 * Use `trackLeadConversionOpen` em links/botões que abrem o WhatsApp (ou outra URL de lead).
 */
export function gtagReportConversionWithUrl(url) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url)
    return
  }
  if (url) window.open(url, '_blank', 'noopener,noreferrer')
}

/** Impede a navegação padrão, dispara a conversão e abre a URL no callback (nova aba para links https). */
export function trackLeadConversionOpen(e, url) {
  e.preventDefault()
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url)
  } else if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

/** Dispara a mesma conversão sem redirecionar (ex.: envio de formulário na própria página). */
export function reportLeadFormConversion() {
  if (typeof window === 'undefined') return
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion()
  }
}
