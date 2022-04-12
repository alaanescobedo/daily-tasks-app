import { useState } from 'react'
import { useTasks } from '@hooks'
import { TaskContext } from './Task.context'

const getInitialTasks = (): any => {
  const tasks = window.localStorage.getItem('tasks') ?? '{}'
  return JSON.parse(tasks)
}
const initialTasks = getInitialTasks()

export const TaskProvider = ({ children }: any): any => {
  const [tasks, setTasks] = useState(initialTasks)
  const { getActiveTasks } = useTasks()

  return (
    <TaskContext.Provider value={{
      tasks: getActiveTasks(tasks),
      setTasks
    }}
    >
      {children}
    </TaskContext.Provider>
  )
}
