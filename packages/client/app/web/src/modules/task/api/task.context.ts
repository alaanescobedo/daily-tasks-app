import { TaskI } from '@hooks'
import { createContext, Dispatch, SetStateAction } from 'react'

interface TaskContextProps {
  activeTasks: TaskI[]
  setTasks: Dispatch<SetStateAction<TaskI[]>>
  saveNewTask: (task: TaskI) => void
  updateTask: (task: TaskI, date: string) => void
}

export const TaskContext = createContext<TaskContextProps>({
  activeTasks: [],
  setTasks: () => { },
  saveNewTask: () => { },
  updateTask: () => { }
})
