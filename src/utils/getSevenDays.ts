import { getCurrentDate } from './getCurrentDate'

export const getSevenDays = (): Array<{ id: string, label: string }> => {
  const sevenDays = new Array(7).fill(0).map((_, i) => {
    return getCurrentDate('en-US', Date.now() + i * 1000 * 60 * 60 * 24)
  })

  const weekdays = sevenDays.map((day, i) => {
    const [weekday, date] = day.split(',')
    return {
      id: date.toLocaleLowerCase().trim(),
      label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : weekday
    }
  })

  return weekdays
}
