import { createContext, useContext } from 'react'

interface DailyTaskViewerContextProps {
  isDragging?: boolean
  handleSetIsDragging: (isDragging: boolean) => void
  selectedDay: string
  handleSetSelectedDay: (selectedDay: string) => void
}

const DailyTaskViewerContext = createContext<DailyTaskViewerContextProps>({
  isDragging: false,
  handleSetIsDragging: () => { },
  selectedDay: '',
  handleSetSelectedDay: () => { }
})
export const useDailyTaskViewer = (): DailyTaskViewerContextProps => useContext(DailyTaskViewerContext)

export default DailyTaskViewerContext
