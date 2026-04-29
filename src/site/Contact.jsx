import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, Send, X } from 'lucide-react'
import { CONTACT_PLAN_STORAGE_KEY, FORMSPREE_ENDPOINT, SECTION_IDS } from '../constants'
import { reportLeadFormConversion } from '../utils/adsConversion'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [cargo, setCargo] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [thanksOpen, setThanksOpen] = useState(false)

  useEffect(() => {
    try {
      const plan = sessionStorage.getItem(CONTACT_PLAN_STORAGE_KEY)
      if (plan) {
        sessionStorage.removeItem(CONTACT_PLAN_STORAGE_KEY)
        setMessage(`Tenho interesse no plano: ${plan}.\n\n`)
      }
    } catch {
      /* ignore */
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg('')
    if (!FORMSPREE_ENDPOINT) {
      setErrorMsg('Formulário indisponível: defina VITE_FORMSPREE_ENDPOINT no ambiente.')
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          empresa: empresa.trim() || undefined,
          cargo: cargo.trim() || undefined,
          phone: phone.trim(),
          message: message.trim(),
          _subject: `[Programatec] Contato — ${name.trim() || email.trim()}`,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const err =
          (data.errors && data.errors.map((x) => x.message).join(' ')) || data.error || 'Não foi possível enviar.'
        throw new Error(err)
      }
      reportLeadFormConversion()
      setName('')
      setEmail('')
      setEmpresa('')
      setCargo('')
      setPhone('')
      setMessage('')
      setStatus('idle')
      setThanksOpen(true)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao enviar. Tente de novo em instantes.')
    }
  }

  const submitDisabled = status === 'sending' || !FORMSPREE_ENDPOINT

  useEffect(() => {
    if (!thanksOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(ev) {
      if (ev.key === 'Escape') setThanksOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [thanksOpen])

  return (
    <section className="pg-cta" id={SECTION_IDS.contato}>
      <div className="pg-wrap">
        <motion.div
          className="pg-cta__box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="pg-cta__title">Fale com a gente</h2>
          <p className="pg-cta__sub">
            Preencha o formulário com seus dados e o que você precisa. Nossa equipe entra em contato o mais rápido possível,
            pelo e-mail ou telefone que você indicar.
          </p>

          {!FORMSPREE_ENDPOINT ? (
            <p className="pg-form__warn" role="status">
              Para ativar o envio: configure o endpoint do Formspree em{' '}
              <code className="pg-form__code">VITE_FORMSPREE_ENDPOINT</code> no arquivo <code className="pg-form__code">.env</code>{' '}
              (veja a documentação em{' '}
              <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">
                formspree.io
              </a>
              ).
            </p>
          ) : null}

          {status === 'error' && errorMsg ? (
            <p className="pg-form__err" role="alert">
              {errorMsg}
            </p>
          ) : null}

          <form className="pg-form" onSubmit={handleSubmit} noValidate>
            <input type="text" name="_gotcha" className="pg-form__hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="pg-form__grid">
              <label className="pg-form__field">
                <span className="pg-form__label">Nome</span>
                <input
                  className="pg-form__input"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  disabled={status === 'sending'}
                />
              </label>
              <label className="pg-form__field">
                <span className="pg-form__label">E-mail</span>
                <input
                  className="pg-form__input"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  disabled={status === 'sending'}
                />
              </label>
            </div>
            <div className="pg-form__grid">
              <label className="pg-form__field">
                <span className="pg-form__label">Empresa</span>
                <input
                  className="pg-form__input"
                  name="empresa"
                  type="text"
                  autoComplete="organization"
                  value={empresa}
                  onChange={(ev) => setEmpresa(ev.target.value)}
                  disabled={status === 'sending'}
                />
              </label>
              <label className="pg-form__field">
                <span className="pg-form__label">Cargo</span>
                <input
                  className="pg-form__input"
                  name="cargo"
                  type="text"
                  autoComplete="organization-title"
                  value={cargo}
                  onChange={(ev) => setCargo(ev.target.value)}
                  disabled={status === 'sending'}
                />
              </label>
            </div>
            <label className="pg-form__field">
              <span className="pg-form__label">Telefone</span>
              <input
                className="pg-form__input"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
                disabled={status === 'sending'}
              />
            </label>
            <label className="pg-form__field">
              <span className="pg-form__label">Mensagem</span>
              <textarea
                className="pg-form__textarea"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                disabled={status === 'sending'}
                placeholder="Site ou landing, prazo, referências, orçamentos…"
              />
            </label>
            <button type="submit" className="pg-form__submit" disabled={submitDisabled}>
              {status === 'sending' ? (
                <>
                  <Loader2 className="pg-form__spin" size={22} aria-hidden />
                  Enviando…
                </>
              ) : (
                <>
                  <Send size={20} aria-hidden />
                  Enviar mensagem
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {thanksOpen ? (
          <motion.div
            className="pg-modal"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="pg-modal__backdrop"
              aria-label="Fechar"
              onClick={() => setThanksOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="pg-thanks-title"
              className="pg-modal__panel"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: 'spring', stiffness: 420, damping: 32 }}
            >
              <button
                type="button"
                className="pg-modal__close"
                aria-label="Fechar"
                onClick={() => setThanksOpen(false)}
              >
                <X size={20} />
              </button>
              <h3 id="pg-thanks-title" className="pg-modal__title">
                Obrigado pelo contato
              </h3>
              <p className="pg-modal__text">
                Recebemos sua mensagem. Em breve alguém da nossa equipe vai entrar em contato com você.
              </p>
              <button type="button" className="pg-modal__ok" onClick={() => setThanksOpen(false)}>
                Entendi
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
