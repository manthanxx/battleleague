import { useEffect, useMemo, useState } from 'react'
import { motion as Motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  AlertTriangle,
  Coins,
  Crosshair,
  Flame,
  Radio,
  ShieldCheck,
  Sparkles,
  Swords,
  Target,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'
import Button from './ui/Button'
import { appScreens, features, steps, tournaments } from '../data/content'

const featureIcons = {
  Target,
  Coins,
  Zap,
  ChartNoAxesColumnIncreasing: Users,
  WalletCards: Wallet,
  Wrench: ShieldCheck,
}

const lobbyEvents = [
  { tag: 'QUEUE', text: 'Alpha Clash reached 20/50 players' },
  { tag: 'PAYOUT', text: 'Night Rush reward window unlocked' },
  { tag: 'ACCESS', text: '27 new testers approved in last 24h' },
]

function HUDCountdown() {
  const targetDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 5)
    date.setHours(date.getHours() + 11)
    return date
  }, [])

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const tick = () => {
      const totalMs = Math.max(targetDate.getTime() - Date.now(), 0)
      const total = Math.floor(totalMs / 1000)
      setTimeLeft({
        days: Math.floor(total / 86400),
        hours: Math.floor((total % 86400) / 3600),
        mins: Math.floor((total % 3600) / 60),
        secs: total % 60,
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = [
    ['Days', timeLeft.days],
    ['Hours', timeLeft.hours],
    ['Mins', timeLeft.mins],
    ['Secs', timeLeft.secs],
  ]

  return (
    <div className="rounded-2xl border border-orange-300/35 bg-black/45 p-4 shadow-[0_0_35px_rgba(255,106,0,0.22)]">
      <p className="mb-4 font-['Rajdhani'] text-lg uppercase tracking-[0.2em] text-orange-300">
        Official Launch
      </p>
      <div className="grid grid-cols-4 gap-2">
        {units.map(([label, value]) => (
          <div key={label} className="rounded-lg border border-orange-300/20 bg-orange-500/5 p-2 text-center">
            <p className="hud-digit">{String(value).padStart(2, '0')}</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-orange-200/80">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function BattleLobbyPage() {
  const [activeStep, setActiveStep] = useState(0)

  const mouseX = useMotionValue(typeof window === 'undefined' ? 0 : window.innerWidth / 2)
  const mouseY = useMotionValue(typeof window === 'undefined' ? 0 : window.innerHeight / 2)

  const glowX = useSpring(mouseX, { stiffness: 110, damping: 20 })
  const glowY = useSpring(mouseY, { stiffness: 110, damping: 20 })

  const previewOffsetX = useTransform(glowX, [0, 1600], [-18, 18])
  const previewOffsetY = useTransform(glowY, [0, 900], [-12, 12])

  const previewStyles = [
    {
      x: useTransform(previewOffsetX, (value) => value * 0.5),
      y: useTransform(previewOffsetY, (value) => value * -0.5),
    },
    {
      x: useTransform(previewOffsetX, (value) => value * 0.8),
      y: useTransform(previewOffsetY, (value) => value * 0.4),
    },
    {
      x: useTransform(previewOffsetX, (value) => value * -0.6),
      y: useTransform(previewOffsetY, (value) => value * 0.8),
    },
  ]

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <Motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onMouseMove={(event) => {
        mouseX.set(event.clientX)
        mouseY.set(event.clientY)
      }}
      className="animated-bg relative min-h-screen overflow-hidden bg-[#070604] px-4 pb-8 pt-6 text-orange-50 sm:px-6 lg:px-10"
    >
      <Motion.div
        style={{ left: glowX, top: glowY }}
        className="pointer-events-none fixed z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl"
      />
      <div className="particle-layer pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(255,106,0,0.18),transparent_32%),radial-gradient(circle_at_88%_16%,rgba(251,146,60,0.16),transparent_30%),radial-gradient(circle_at_65%_78%,rgba(255,149,0,0.12),transparent_38%)]" />

      <div className="relative z-10 mx-auto max-w-[1300px] space-y-8">
        <section className="noise-overlay glass-card panel-cut rounded-[1.2rem] border border-orange-300/25 bg-black/55 px-4 py-3 sm:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/35 bg-orange-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-orange-200">
                <Flame className="h-3.5 w-3.5" />
                Control Room
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-orange-300/90">Region: India // Mode: Early Access</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-orange-100/85">
              {['Live Queue', 'Ranked Ruleset', 'Secure Wallet'].map((item) => (
                <span key={item} className="rounded-md border border-orange-300/20 bg-orange-500/5 px-2.5 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-12">
          <Motion.article
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="noise-overlay glass-card mission-border panel-cut relative overflow-hidden rounded-[2rem] border border-orange-300/30 bg-black/45 p-6 lg:col-span-7 lg:p-8"
          >
            <Motion.p
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="absolute right-6 top-5 rounded-full border border-orange-300/55 bg-orange-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300"
            >
              Launching Soon
            </Motion.p>

            <p className="mb-3 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-orange-200">
              <Radio className="h-4 w-4" />
              Live Lobby Feed
            </p>
            <h1 className="heading-gradient max-w-xl font-['Rajdhani'] text-4xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
              Battle League - Enter the Arena
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-orange-100/85 sm:text-base">
              Free Fire tournament command center with real-time room joins, cash rewards, and elite tester access before official launch.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button className="gap-2">
                <Sparkles className="h-4 w-4" />
                Join Testing Squad
              </Button>
              <Button variant="secondary" className="gap-2">
                <Swords className="h-4 w-4" />
                Download Tester App
              </Button>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ['Active Testers', '2,480'],
                ['Rooms Created', '176'],
                ['Payout Ready', '$14.8k'],
              ].map((item) => (
                <div key={item[0]} className="rounded-xl border border-orange-300/20 bg-orange-500/5 p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-orange-300/85">{item[0]}</p>
                  <p className="mt-1 font-['Rajdhani'] text-3xl font-bold text-white">{item[1]}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-2 rounded-xl border border-orange-300/20 bg-black/25 p-3 sm:grid-cols-3">
              {lobbyEvents.map((event) => (
                <div key={event.tag} className="rounded-lg border border-orange-300/15 bg-orange-500/5 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-orange-300">{event.tag}</p>
                  <p className="mt-1 text-xs text-orange-100/85">{event.text}</p>
                </div>
              ))}
            </div>
          </Motion.article>

          <Motion.aside
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative min-h-[330px] rounded-[2rem] border border-orange-300/30 bg-black/45 p-5 lg:col-span-5"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-orange-300">Floating Tournament Feed</p>
            {tournaments.map((tournament, index) => (
              <Motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 26, rotate: -2 }}
                animate={{ opacity: 1, y: [0, -6, 0], rotate: index % 2 === 0 ? 1.5 : -1.5 }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.2 + index * 0.1 },
                  y: { repeat: Infinity, duration: 3 + index * 0.4, ease: 'easeInOut' },
                  rotate: { duration: 0.5, delay: 0.2 + index * 0.1 },
                }}
                whileHover={{ rotate: 0, scale: 1.02, y: -10 }}
                className={`absolute left-5 right-5 rounded-2xl border border-orange-300/25 bg-gradient-to-r from-orange-500/12 to-transparent p-4 backdrop-blur-lg ${index === 0 ? 'top-12' : index === 1 ? 'top-36' : 'top-60'}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-['Rajdhani'] text-xl font-semibold text-white">{tournament.matchName}</h3>
                  <span className="rounded-full border border-orange-300/45 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-orange-200">
                    Live
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="live-dot h-1.5 w-1.5 rounded-full bg-orange-300"
                      style={{ animationDelay: `${dot * 0.22}s` }}
                    />
                  ))}
                  <span className="text-[10px] uppercase tracking-[0.18em] text-orange-200/80">Players joining</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-orange-100/85">
                  <span>Entry {tournament.entryFee}</span>
                  <span>Prize {tournament.prizePool}</span>
                  <span>{tournament.playersJoined}</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-orange-100/10">
                  <Motion.div
                    initial={{ width: '15%' }}
                    animate={{ width: ['15%', '85%', '40%'] }}
                    transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
                    className="h-full bg-orange-400"
                  />
                </div>
              </Motion.div>
            ))}
          </Motion.aside>
        </section>

        <section className="noise-overlay glass-card panel-cut rounded-[2rem] border border-orange-300/30 bg-black/40 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-['Rajdhani'] text-3xl font-bold text-white">Tournament Conveyor</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-orange-300">Tester Lobby Access</span>
          </div>
          <div className="hide-scrollbar rack-skew flex gap-4 overflow-x-auto pb-2">
            {[...tournaments, ...tournaments].map((item, index) => (
              <Motion.article
                key={`${item.id}-${index}`}
                whileHover={{ rotateX: 7, rotateY: -8, scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="min-w-[260px] rounded-2xl border border-orange-300/25 bg-orange-500/10 p-4 shadow-[0_10px_30px_rgba(255,106,0,0.18)]"
              >
                <h3 className="font-['Rajdhani'] text-2xl font-semibold text-white">{item.matchName}</h3>
                <p className="mt-2 text-sm text-orange-100/80">Join (Tester Only)</p>
                <div className="mt-4 flex items-center justify-between text-xs text-orange-100/80">
                  <span>{item.entryFee}</span>
                  <span>{item.prizePool}</span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {item.playersJoined}
                  </span>
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <section className="relative grid gap-5 xl:grid-cols-12">
          <article className="noise-overlay glass-card panel-cut relative overflow-hidden rounded-[2rem] border border-orange-300/25 bg-black/45 p-6 xl:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-orange-300">Feature Network</p>
            <h2 className="mt-2 font-['Rajdhani'] text-4xl font-bold text-white">Battle Systems Linked in Real Time</h2>

            <div className="relative mt-10 min-h-[330px]">
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 380" preserveAspectRatio="none">
                <path d="M90 90 L320 70 L520 145 L710 90" className="network-path" />
                <path d="M100 230 L330 250 L520 200 L705 260" className="network-path" />
                <path d="M330 70 L330 250" className="network-path" />
                <path d="M520 145 L520 200" className="network-path" />
              </svg>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {features.map((feature, index) => {
                  const Icon = featureIcons[feature.icon] ?? Crosshair
                  return (
                    <Motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.06 }}
                      whileHover={{ scale: 1.04, y: -4 }}
                      className={`glass-card relative rounded-2xl border border-orange-300/25 bg-orange-400/5 p-4 ${index % 2 === 1 ? 'sm:translate-y-8' : ''} ${index === 0 ? 'sm:col-span-2' : ''} ${index === 4 ? 'sm:-translate-y-6' : ''}`}
                    >
                      <div className="mb-3 inline-flex rounded-lg border border-orange-300/25 bg-black/35 p-2 text-orange-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-['Rajdhani'] text-xl font-semibold text-white">{feature.title}</h3>
                    </Motion.div>
                  )
                })}
              </div>
            </div>
          </article>

          <aside className="space-y-5 xl:col-span-5">
            <article className="noise-overlay mission-border glass-card panel-cut rounded-[1.7rem] border border-orange-300/30 bg-black/55 p-5">
              <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-orange-300">
                <AlertTriangle className="h-4 w-4" />
                Early Access Required
              </p>
              <h3 className="font-['Rajdhani'] text-4xl font-bold text-white">Become an Early Tester</h3>
              <ul className="mt-3 space-y-2 text-sm text-orange-100/85">
                <li>Limited access for early users</li>
                <li>Get exclusive rewards and badges</li>
                <li>Help improve the app with direct feedback</li>
                <li>Report bugs and earn tester benefits</li>
              </ul>
              <Button className="mt-5 w-full">Join Testing Squad</Button>
            </article>

            <HUDCountdown />
          </aside>
        </section>

        <section className="grid gap-5 xl:grid-cols-12">
          <article className="noise-overlay glass-card panel-cut rounded-[2rem] border border-orange-300/25 bg-black/45 p-5 xl:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-orange-300">Interactive Flow</p>
            <h2 className="mt-2 font-['Rajdhani'] text-4xl font-bold text-white">How It Works</h2>

            <div className="mt-6 space-y-3">
              {steps.map((step, index) => (
                <Motion.div
                  key={step.title}
                  animate={{
                    scale: index === activeStep ? 1.02 : 1,
                    borderColor:
                      index === activeStep ? 'rgba(253,186,116,0.8)' : 'rgba(253,186,116,0.2)',
                  }}
                  className="rounded-xl border bg-orange-500/5 p-3"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-orange-300">Step {index + 1}</p>
                  <h3 className="mt-1 font-['Rajdhani'] text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-orange-100/80">{step.description}</p>
                </Motion.div>
              ))}
            </div>
          </article>

          <article className="noise-overlay glass-card panel-cut rounded-[2rem] border border-orange-300/25 bg-black/45 p-5 xl:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-orange-300">App Preview Bay</p>
            <h2 className="mt-2 font-['Rajdhani'] text-4xl font-bold text-white">Parallax Device Preview</h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {appScreens.map((screen, index) => (
                <Motion.figure
                  key={screen.title}
                  style={previewStyles[index]}
                  whileHover={{ y: -10, rotate: index === 1 ? -2 : 2 }}
                  className="glass-card rounded-[2rem] border border-orange-300/25 bg-orange-500/5 p-2"
                >
                  <img
                    src={screen.image}
                    alt={`${screen.title} screen`}
                    className="h-[360px] w-full rounded-[1.5rem] object-cover"
                  />
                  <figcaption className="py-3 text-center font-['Rajdhani'] text-2xl font-semibold text-orange-100">
                    {screen.title}
                  </figcaption>
                </Motion.figure>
              ))}
            </div>
          </article>
        </section>

        <section className="noise-overlay glass-card panel-cut rounded-[1.6rem] border border-orange-300/20 bg-black/40 px-5 py-4">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-orange-100/85 sm:flex-row">
            <p className="font-['Rajdhani'] text-xl font-semibold text-white">Battle League // Free Fire Tournament Hub</p>
            <div className="flex items-center gap-5">
              <a href="#" className="transition hover:text-orange-200">About</a>
              <a href="#" className="transition hover:text-orange-200">Contact</a>
              <a href="#" className="transition hover:text-orange-200">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-orange-300/15 pt-3 text-[11px] uppercase tracking-[0.16em] text-orange-200/75">
            <span className="rounded-md bg-orange-500/10 px-2 py-1">Patch 0.9.2</span>
            <span className="rounded-md bg-orange-500/10 px-2 py-1">Server Health: Stable</span>
            <span className="rounded-md bg-orange-500/10 px-2 py-1">Next Room Sync: 18s</span>
          </div>
        </section>
      </div>
    </Motion.main>
  )
}

export default BattleLobbyPage