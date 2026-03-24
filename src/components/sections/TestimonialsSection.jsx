import Section from '../ui/Section'
import Card from '../ui/Card'
import { testimonials } from '../../data/content'

function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="What Free Fire Players Are Saying"
      subtitle="Early tester reactions from competitive players and creators."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <p className="text-orange-100/85">&quot;{item.review}&quot;</p>
            <div className="mt-5 border-t border-orange-300/15 pt-4">
              <h3 className="font-['Rajdhani'] text-2xl font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-orange-300">{item.tag}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default TestimonialsSection