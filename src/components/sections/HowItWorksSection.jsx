import { KeyRound, LogIn, Swords, Trophy } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { steps } from '../../data/content'

const iconMap = { LogIn, Swords, KeyRound, Trophy }

function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How It Works"
      title="Four Steps to Enter and Win"
      subtitle="Fast onboarding from registration to rewards in a single flow."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon]
          return (
            <Motion.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.12 }}
            >
              <Card>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                  Step {index + 1}
                </p>
                <div className="mb-5 inline-flex rounded-xl bg-orange-300/10 p-3 text-orange-200 shadow-[0_0_22px_rgba(251,146,60,0.2)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-['Rajdhani'] text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-orange-100/75">{step.description}</p>
              </Card>
            </Motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default HowItWorksSection