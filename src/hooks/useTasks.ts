import { useContext } from 'react'
import { TaskContext } from '../context/Task/Task.context'

export interface Task {
  title: string
  scheduledFor: string
  description?: string
  status: 'Pending' | 'Completed' | 'In-Progress' | 'Outdated'
  userID: string
  createdAt: string
  completedAt?: string
  updatedAt?: string
  entityId: string
}

export const useTasks = (initialTasks: any): any => {
  const { tasks, setTasks } = useContext(TaskContext)

  const saveTask = (task: any): any => {
    const date = task.scheduledFor.split('T')[0]
    const updatedTasks = tasks[date] !== undefined ? [...tasks[date], task] : [task]
    const updatedState = { ...tasks, [date]: updatedTasks }

    setTasks(() => updatedState)
    window.localStorage.setItem('tasks', JSON.stringify(updatedState))
  }

  return {
    saveTask,
    tasks
  }
}
