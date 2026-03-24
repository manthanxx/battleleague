import { motion as Motion } from 'framer-motion'
import { Download, Sparkles } from 'lucide-react'
import Button from '../ui/Button'

function HeroSection() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="absolute -left-20 top-6 h-44 w-44 rounded-full bg-orange-500/30 blur-3xl" />
      <div className="absolute -right-16 top-24 h-52 w-52 rounded-full bg-amber-500/20 blur-3xl" />

      <Motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <p className="mb-4 inline-flex items-center rounded-full border border-orange-300/45 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200 shadow-[0_0_24px_rgba(251,146,60,0.25)]">
          Launch Campaign
        </p>
        <h1 className="font-['Rajdhani'] text-4xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Battle League is Coming Soon
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-orange-100/85 sm:text-xl">
          Join Free Fire Tournaments. Compete. Win Real Rewards.
        </p>
        <p className="mt-4 text-lg font-semibold text-orange-300 sm:text-xl">
          🚀 Launching Soon
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="min-w-52 gap-2">
            <Sparkles className="h-4 w-4" />
            Join as Tester
          </Button>
          <Button variant="secondary" className="min-w-52 gap-2">
            <Download className="h-4 w-4" />
            Download Tester App
          </Button>
        </div>
      </Motion.div>
    </section>
  )
}

export default HeroSection