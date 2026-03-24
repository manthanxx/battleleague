import { motion as Motion } from 'framer-motion'

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <Motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="relative py-16 sm:py-20"
    >
      {(eyebrow || title || subtitle) && (
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-['Rajdhani'] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-4 text-orange-100/80">{subtitle}</p>}
        </header>
      )}
      {children}
    </Motion.section>
  )
}

export default Section