import { Coins, Crosshair, ShieldCheck } from 'lucide-react'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { aboutHighlights } from '../../data/content'

const iconMap = { Crosshair, Coins, ShieldCheck }

function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About The App"
      title="The Next Free Fire Tournament Platform"
      subtitle="Battle League is a Free Fire tournament platform where players can join matches, compete with others, and win real rewards."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {aboutHighlights.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <Card key={item.title}>
              <div className="mb-4 inline-flex rounded-xl border border-orange-300/25 bg-orange-300/10 p-3 text-orange-200 shadow-[0_0_24px_rgba(251,146,60,0.25)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-['Rajdhani'] text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-orange-100/75">{item.description}</p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export default AboutSection