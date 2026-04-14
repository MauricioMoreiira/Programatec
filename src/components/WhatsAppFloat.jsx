import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink, WA_MESSAGES } from '../constants'

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink(WA_MESSAGES.default)}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar agora no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="wa-float__ring" aria-hidden />
      <MessageCircle size={28} aria-hidden />
    </motion.a>
  )
}
