import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '../constants'

export function ContactFloat() {
  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="pg-float"
      aria-label="Abrir WhatsApp"
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
