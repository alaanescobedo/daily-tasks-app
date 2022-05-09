import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { TaskI } from '../task.interface'

interface TaskContextProps {
  allTasks: TaskI[]
  activeTasks: TaskI[]
  setTasks: Dispatch<SetStateAction<TaskI[]>>
  saveNewTask: (task: TaskI) => void
  updateTask: (task: TaskI, date: string) => void
}

export const TaskContext = createContext<TaskContextProps>({
  allTasks: [],
  activeTasks: [],
  setTasks: () => { },
  saveNewTask: () => { },
  updateTask: () => { }
})

export const useTasks = (): any => useContext(TaskContext)

