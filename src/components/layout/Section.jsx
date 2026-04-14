import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Section({
  id,
  as: Tag = 'section',
  className = '',
  children,
  tinted,
  dark,
  noPadY,
}) {
  const bg = dark
    ? 'section section--dark'
    : tinted
      ? 'section section--tint'
      : 'section'

  return (
    <Tag
      id={id}
      className={`${bg} ${noPadY ? 'section--compact-y' : ''} ${className}`.trim()}
    >
      <div className="section__inner">{children}</div>
    </Tag>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center', dark }) {
  return (
    <motion.div
      className={`section-header section-header--${align} ${dark ? 'section-header--on-dark' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
    >
      {eyebrow ? <span className="section-header__eyebrow">{eyebrow}</span> : null}
      <h2 className="section-header__title">{title}</h2>
      {subtitle != null && subtitle !== '' ? (
        <p className="section-header__subtitle">{subtitle}</p>
      ) : null}
    </motion.div>
  )
}
