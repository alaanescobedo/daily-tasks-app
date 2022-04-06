import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { PriorityId, WeekdaysId, WeekdaysLabel } from '../components/Form/Select/Select'
import { getCurrentDate } from '../utils/getCurrentDate'

interface TaskClientData {
  title: string
  scheduledFor: string
  description?: string
}

interface UseNewTask {
  weekdays: Array<{ id: WeekdaysId, label: WeekdaysLabel }>
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  textareaValue: string
  handleTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void
  selectedDay: string
  handleSelectedDay: (event: ChangeEvent<HTMLSelectElement>) => void
  selectedHour: string
  handleSelectedHour: (event: ChangeEvent<HTMLInputElement>) => void
  selectedPriority: PriorityId
  handlePriority: (event: ChangeEvent<HTMLSelectElement>) => void
  checked: boolean
  handleCheckbox: () => void
}

export const useNewTask = (): UseNewTask => {
  const [textareaValue, setTextareaValue] = useState('')
  const [selectedDay, setSelectedDay] = useState('')
  const [weekdays, setWeekDays] = useState([] as Array<{ id: WeekdaysId, label: WeekdaysLabel }>)
  const [selectedHour, setSelectedHour] = useState('')
  const [checked, setChecked] = useState(false)
  const [selectedPriority, setSelectedPriority] = useState('medium' as PriorityId)

  useEffect(() => {
    const getSevenDays = new Array(7).fill(0).map((_, i) => {
      return getCurrentDate('en-US', Date.now() + i * 1000 * 60 * 60 * 24)
    })

    const weekdays = getSevenDays.map((day, i) => {
      const [weekday, date] = day.split(',')
      return {
        id: date.toLocaleLowerCase(),
        label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : weekday
      }
    })

    const defaultHour = getCurrentDate('en-US', Date.now() + 5 * 1000 * 60).split(',')[2].split(':').slice(0, 2).join(':').trim()

    setSelectedHour(defaultHour)
    setSelectedDay(weekdays[0].id)
    setWeekDays(weekdays as Array<{ id: WeekdaysId, label: WeekdaysLabel }>)
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const dateDayHour = new Date(`${selectedDay}, ${selectedHour}`)

    const newTask: TaskClientData = {
      title: textareaValue,
      scheduledFor: dateDayHour.toISOString()
    }

    setTextareaValue('')

    console.log(getCurrentDate('en-US', newTask.scheduledFor))
  }

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const textarea = e.currentTarget

    if (textarea.value.includes('\n')) return

    textarea.style.height = '2.6rem'
    setTextareaValue(textarea.value)

    if (textarea.scrollHeight < textarea.offsetHeight) return

    const scrollHeight = e.currentTarget.scrollHeight
    e.currentTarget.style.height = `${scrollHeight}px`
  }

  const handleSelectedDay = (e: ChangeEvent<HTMLSelectElement>): void => {
    const target = e.target
    setSelectedDay(target.value)
  }

  const handleSelectedHour = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setSelectedHour(value)
  }

  const handleCheckbox = (): void => {
    setChecked(!checked)
  }

  const handlePriority = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target
    setSelectedPriority(value as PriorityId)
  }

  return {
    weekdays,
    handleSubmit,
    textareaValue,
    handleTextArea,
    selectedDay,
    handleSelectedDay,
    selectedHour,
    handleSelectedHour,
    selectedPriority,
    handlePriority,
    checked,
    handleCheckbox
  }
}
