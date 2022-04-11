import { useEffect, useState } from 'react'
import { WeekdaysId, WeekdaysLabel } from '../components/Form/Select/Select'
import { getCurrentDate } from '../utils/getCurrentDate'
import { getSevenDays } from '../utils/getSevenDays'

interface UseNewTask {
  weekdays: Array<{ id: WeekdaysId, label: WeekdaysLabel }>
}

export const getCurrentTimePlus5minutes = (): any => {
  return getCurrentDate('en-US', Date.now() + 5 * 1000 * 60).split(',')[2].split(':').slice(0, 2).join(':').trim()
}

export const useNewTask = (): UseNewTask => {
  const [weekdays, setWeekDays] = useState([] as Array<{ id: WeekdaysId, label: WeekdaysLabel }>)

  useEffect(() => {
    const weekdays = getSevenDays()
    setWeekDays(weekdays as Array<{ id: WeekdaysId, label: WeekdaysLabel }>)
  }, [])

  // TODO: Refactor this to work as validation
  // const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
  //   const textarea = e.currentTarget

  //   if (textarea.value.includes('\n')) return

  //   textarea.style.height = '2.6rem'
  //   setTextareaValue(textarea.value)

  //   if (textarea.scrollHeight < textarea.offsetHeight) return

  //   const scrollHeight = e.currentTarget.scrollHeight
  //   e.currentTarget.style.height = `${scrollHeight}px`
  // }

  return {
    weekdays
  }
}
