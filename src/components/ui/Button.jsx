import { motion as Motion } from 'framer-motion'

const variants = {
  primary:
    'neon-btn bg-orange-500/90 text-white shadow-[0_0_0_1px_rgba(253,186,116,0.55)] hover:bg-orange-400',
  secondary:
    'neon-btn border border-orange-300/45 bg-white/5 text-orange-100 hover:bg-orange-300/10',
}

function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <Motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`btn-energy inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Motion.button>
  )
}

export default Button