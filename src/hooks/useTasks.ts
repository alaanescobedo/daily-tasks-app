import { useState } from 'react'
import { getCurrentDate } from '../utils/getCurrentDate'

export interface Task {
  title: string
  scheduledFor: string
  description?: string
  status: 'Pending' | 'Completed' | 'In-Progress'
  userID: string
  createdAt: string
  completedAt?: string
  updatedAt?: string
  entityId: string
}

interface UseTasksHook {
  tasks: TasksState
  handleLocalTasks: (task: Task) => void
}

interface TasksState { [key: string]: Task[] }

export const useTasks = (): UseTasksHook => {
  const [tasks, setTasks] = useState<TasksState>(() => {
    return JSON.parse(window.localStorage.getItem('tasks') ?? '{}')
  })

  const handleLocalTasks = (task: Task): void => {
    const weekday = getCurrentDate('en-US', task.scheduledFor).split(',')[0]
    const updatedTasks = { ...tasks, [weekday]: tasks[weekday] !== undefined ? [...tasks[weekday], task] : [task] }
    setTasks(() => updatedTasks)
    window.localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  return {
    tasks,
    handleLocalTasks
  }
}
