import { useState } from 'react'
import { TaskContext } from './Task.context'

const getInitialTasks = (): any => {
  const tasks = window.localStorage.getItem('tasks') ?? '{}'
  return JSON.parse(tasks)
}
const initialTasks = getInitialTasks()

export const TaskProvider = ({ children }: any): any => {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <TaskContext.Provider value={{
      tasks,
      setTasks
    }}
    >
      {children}
    </TaskContext.Provider>
  )
}
