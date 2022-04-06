export const getCurrentDate = (locale: string = 'en-US', customDate?: string | number | Date, timezone?: string): string => {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions()

  const date = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    hourCycle: 'h23',
    minute: 'numeric',
    second: 'numeric',
    timeZone: timezone ?? timeZone
  }).format(new Date(customDate ?? Date.now()))
  return date
}
