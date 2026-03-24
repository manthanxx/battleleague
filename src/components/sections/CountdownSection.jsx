import Section from '../ui/Section'
import CountdownTimer from '../ui/CountdownTimer'

function CountdownSection() {
  return (
    <Section
      id="launch-countdown"
      eyebrow="Countdown"
      title="Official Launch Countdown"
      subtitle="Limited tester access is open now. Secure your spot before the public release."
    >
      <CountdownTimer label="Official Launch starts in" className="mx-auto max-w-4xl" />
    </Section>
  )
}

export default CountdownSection