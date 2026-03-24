import { AlertTriangle, Gift, Users2 } from 'lucide-react'
import Section from '../ui/Section'
import Button from '../ui/Button'

function TesterModeSection() {
  return (
    <Section
      id="tester-mode"
      eyebrow="Tester Recruitment"
      title="Become an Early Tester"
      subtitle="Launching soon with limited access. Early testers help shape the final app and unlock extra perks."
    >
      <div className="glass-card mx-auto max-w-5xl rounded-3xl border border-orange-300/30 bg-orange-300/5 p-6 sm:p-8">
        <div className="grid gap-5 md:grid-cols-4">
          <article className="rounded-2xl border border-orange-300/20 bg-black/20 p-5">
            <Users2 className="h-5 w-5 text-orange-200" />
            <h3 className="mt-3 font-['Rajdhani'] text-2xl font-semibold text-white">Limited Access</h3>
            <p className="mt-2 text-sm text-orange-100/75">
              Only early users get entry during this closed testing phase.
            </p>
          </article>
          <article className="rounded-2xl border border-orange-300/20 bg-black/20 p-5">
            <Gift className="h-5 w-5 text-orange-200" />
            <h3 className="mt-3 font-['Rajdhani'] text-2xl font-semibold text-white">Exclusive Rewards</h3>
            <p className="mt-2 text-sm text-orange-100/75">
              Earn special rewards and benefits for active tester participation.
            </p>
          </article>
          <article className="rounded-2xl border border-orange-300/20 bg-black/20 p-5">
            <AlertTriangle className="h-5 w-5 text-orange-200" />
            <h3 className="mt-3 font-['Rajdhani'] text-2xl font-semibold text-white">Help Improve the App</h3>
            <p className="mt-2 text-sm text-orange-100/75">
              Share feedback that directly shapes gameplay flow and stability.
            </p>
          </article>
          <article className="rounded-2xl border border-orange-300/20 bg-black/20 p-5">
            <AlertTriangle className="h-5 w-5 text-orange-200" />
            <h3 className="mt-3 font-['Rajdhani'] text-2xl font-semibold text-white">Report Bugs & Earn</h3>
            <p className="mt-2 text-sm text-orange-100/75">
              Submit bug reports and get extra benefits as we approach launch.
            </p>
          </article>
        </div>
        <div className="mt-8 text-center">
          <Button className="px-8">Apply for Testing</Button>
        </div>
      </div>
    </Section>
  )
}

export default TesterModeSection