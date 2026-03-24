import {
  ChartNoAxesColumnIncreasing,
  Coins,
  Target,
  WalletCards,
  Wrench,
  Zap,
} from 'lucide-react'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { features } from '../../data/content'

const iconMap = {
  Target,
  Coins,
  ChartNoAxesColumnIncreasing,
  WalletCards,
  Wrench,
  Zap,
}

function FeaturesSection() {
  return (
    <Section
      id="features"
      eyebrow="Platform Features"
      title="Everything Needed for High-Intensity Free Fire Tournaments"
      subtitle="Built for fast lobbies, transparent rewards, and serious competitive action."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon]
          return (
            <Card key={feature.title} className="group">
              <div className="mb-5 inline-flex rounded-xl border border-orange-300/30 bg-orange-300/10 p-3 text-orange-200 transition-all duration-300 group-hover:shadow-[0_0_32px_rgba(251,146,60,0.35)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-['Rajdhani'] text-2xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-orange-100/75">{feature.description}</p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export default FeaturesSection