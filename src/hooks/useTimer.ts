import { useEffect, useState } from 'react'

interface UseTimer {
  currentTime: Date
}

export const useTimer = (): UseTimer => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(() => new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return {
    currentTime
  }
}
