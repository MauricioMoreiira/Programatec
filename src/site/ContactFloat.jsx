import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { SECTION_IDS, hashForSectionId, navigateToSectionId } from '../constants'

export function ContactFloat() {
  return (
    <motion.a
      href={hashForSectionId(SECTION_IDS.contato)}
      className="pg-float"
      aria-label="Fale conosco — formulário"
      onClick={(e) => {
        e.preventDefault()
        navigateToSectionId(SECTION_IDS.contato)
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="pg-float__ring" aria-hidden />
      <Mail size={28} />
    </motion.a>
  )
}
