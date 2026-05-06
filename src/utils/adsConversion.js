/**
 * Google Ads: snippet de conversão definido no index.html (`gtag_report_conversion`).
 * Pode ser chamado ao abrir WhatsApp ou em outros pontos do funil conforme medição configurada em Google Ads.
 */
export function gtagReportConversionWithUrl(url) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url)
    return
  }
  if (url) window.open(url, '_blank', 'noopener,noreferrer')
}

/** Dispara conversão de lead configurada na tag Ads, sem navegar para outra URL. */
export function reportLeadFormConversion() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', {
    send_to: 'AW-18139120427/RgFqCLSszIEYELKE1Icp',
    value: 177.0,
    currency: 'BRL',
    transaction_id: '',
  })
}
