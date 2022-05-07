import { useState } from 'react'
import DailyTaskViewerContext from './DailyTaskViewer.context'

export const DailyTaskViewerProvider = ({ children }: any) => {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedDay, setSelectedDay] = useState('')

  const handleSetIsDragging = (status: any) => {
    setIsDragging(() => status)
  }

  const handleSetSelectedDay = (day: any) => {
    setSelectedDay(() => day)
  }

  return (
    <DailyTaskViewerContext.Provider value={{
      isDragging,
      handleSetIsDragging,
      selectedDay,
      handleSetSelectedDay
    }}
    >
      {children}
    </DailyTaskViewerContext.Provider>
  )
}
