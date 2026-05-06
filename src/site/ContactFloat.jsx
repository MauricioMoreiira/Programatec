import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '../constants'
import { trackLeadConversionOpen } from '../utils/adsConversion'

export function ContactFloat() {
  const waUrl = whatsappHref()
  return (
    <motion.a
      href={waUrl}
      className="pg-float"
      aria-label="Abrir WhatsApp"
      onClick={(e) => trackLeadConversionOpen(e, waUrl)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="pg-float__ring" aria-hidden />
      <MessageCircle size={28} strokeWidth={2} aria-hidden />
    </motion.a>
  )
}
