import { motion } from 'framer-motion'

const baseClass = 'btn'

const variants = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  whatsapp: 'btn--whatsapp',
  ghost: 'btn--ghost',
  outline: 'btn--outline',
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
  ...props
}) {
  const classes = `${baseClass} ${variants[variant] ?? variants.primary} ${className}`.trim()

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  }

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href)
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
