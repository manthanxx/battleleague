import { motion as Motion } from 'framer-motion'
import Section from '../ui/Section'
import { appScreens } from '../../data/content'

function AppPreviewSection() {
  return (
    <Section
      id="app-preview"
      eyebrow="App Preview"
      title="Designed for Fast Mobile Free Fire Play"
      subtitle="Home, Tournament, and Wallet views tuned for high-speed decision making."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {appScreens.map((screen, index) => (
          <Motion.figure
            key={screen.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="glass-card relative mx-auto w-full max-w-[260px] overflow-hidden rounded-[2.2rem] border border-orange-300/30 bg-white/5 p-2"
            style={{ animation: `floatPulse 4s ease-in-out ${index * 0.3}s infinite` }}
          >
            <img
              src={screen.image}
              alt={`${screen.title} preview`}
              className="h-[430px] w-full rounded-[1.8rem] object-cover"
              loading="lazy"
            />
            <figcaption className="py-3 text-center font-['Rajdhani'] text-xl font-semibold text-orange-100">
              {screen.title}
            </figcaption>
          </Motion.figure>
        ))}
      </div>
    </Section>
  )
}

export default AppPreviewSection