import { useEffect, useState } from 'react'

interface IRemaning {
  t: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

const getTimeRemaining = (endtime): IRemaning => {
  const t = endtime.getTime() - new Date().getTime()
  const seconds = Math.floor((t / 1000) % 60)
  const minutes = Math.floor((t / 1000 / 60) % 60)
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  const days = Math.floor(t / (1000 * 60 * 60 * 24))
  return {
    t,
    days,
    hours,
    minutes,
    seconds
  }
}

export const useDayLeft = (endTime = new Date(2022)) => {
  const [left, setLeft] = useState<IRemaning>({
    seconds: 0,
    t: 0,
    days: 0,
    hours: 0,
    minutes: 0
  })

  useEffect(() => {
    setTimeout(() => {
      const result = getTimeRemaining(endTime)
      setLeft(result)
    }, 1000)
  }, [left])
  return left
}
