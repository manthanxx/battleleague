import { motion as Motion } from 'framer-motion'

function Card({ children, className = '' }) {
  return (
    <Motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className={`glass-card rounded-2xl border border-orange-300/25 bg-orange-200/5 p-6 backdrop-blur-xl ${className}`}
    >
      {children}
    </Motion.article>
  )
}

export default Card