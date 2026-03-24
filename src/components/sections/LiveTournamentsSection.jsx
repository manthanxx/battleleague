import { ArrowUpRight, Users } from 'lucide-react'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { tournaments } from '../../data/content'

function LiveTournamentsSection() {
  return (
    <Section
      id="live-tournaments"
      eyebrow="Live Tournament Preview"
      title="Upcoming Tester-Only Match Rooms"
      subtitle="Preview active matches and reserve your position before launch day."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="flex h-full flex-col">
            <h3 className="font-['Rajdhani'] text-2xl font-semibold text-white">
              {tournament.matchName}
            </h3>

            <div className="mt-5 space-y-2 text-sm text-orange-100/80">
              <p className="flex items-center justify-between">
                <span>Entry Fee</span>
                <span className="font-semibold text-orange-100">{tournament.entryFee}</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Prize Pool</span>
                <span className="font-semibold text-orange-300">{tournament.prizePool}</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  Players
                </span>
                <span className="font-semibold text-orange-100">{tournament.playersJoined}</span>
              </p>
            </div>

            <div className="mt-6 pt-2">
              <Button className="w-full gap-2">
                Join (Tester Only)
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default LiveTournamentsSection