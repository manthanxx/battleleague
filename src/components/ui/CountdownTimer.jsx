import { useEffect, useMemo, useState } from 'react'
import { Clock3 } from 'lucide-react'

function getTimeLeft(targetDate) {
  const totalMs = Math.max(targetDate.getTime() - Date.now(), 0)
  const totalSeconds = Math.floor(totalMs / 1000)

  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function CountdownTimer({ label = 'Official Launch begins in', className = '' }) {
  const targetDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 3)
    date.setHours(date.getHours() + 5)
    return date
  }, [])

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const parts = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ]

  return (
    <div className={`glass-card flex flex-col gap-4 rounded-2xl border border-orange-300/25 bg-orange-200/5 p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between ${className}`}>
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-orange-200">
        <Clock3 className="h-4 w-4" />
        {label}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {parts.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-orange-300/20 bg-black/25 px-3 py-2 text-center text-orange-100"
          >
            <p className="font-['Rajdhani'] text-xl font-bold sm:text-2xl">{String(item.value).padStart(2, '0')}</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-orange-300/90">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownTimer