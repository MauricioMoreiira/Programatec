/**
 * Google Ads: snippet de conversão definido no index.html (`gtag_report_conversion`).
 * Mantido para fluxos que abriam destino em nova aba; o formulário usa `reportLeadFormConversion`.
 */
export function gtagReportConversionWithUrl(url) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url)
    return
  }
  if (url) window.open(url, '_blank', 'noopener,noreferrer')
}

/** Dispara conversão de lead (ex.: envio do formulário Formspree) sem abrir URL. */
export function reportLeadFormConversion() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', {
    send_to: 'AW-11021910578/RgFqCLSszIEYELKE1Icp',
    value: 177.0,
    currency: 'BRL',
    transaction_id: '',
  })
}
