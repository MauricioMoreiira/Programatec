import { motion } from 'framer-motion'

const map = {
  primary: 'pg-btn pg-btn--primary',
  secondary: 'pg-btn pg-btn--secondary',
  whatsapp: 'pg-btn pg-btn--wa',
  ghost: 'pg-btn pg-btn--ghost',
  outline: 'pg-btn pg-btn--outline',
}

/**
 * @param {'primary' | 'secondary' | 'whatsapp' | 'ghost' | 'outline'} variant
 */
export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  external,
  onClick,
  ...props
}) {
  const classes = `${map[variant] ?? map.primary} ${className}`.trim()
  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 420, damping: 26 },
  }

  if (href) {
    const isHttp = /^https?:\/\//.test(href)
    const isMailto = href.startsWith('mailto:')
    const isHash = href.startsWith('#')
    const openNewTab = external ?? (isHttp && !isMailto && !isHash)
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...(openNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} onClick={onClick} {...props}>
      {children}
    </motion.button>
  )
}
