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

  const replaceByTodayAndTomorrow = (tasks: TasksState): TasksState => {
    const today = new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'long' })
    const tomorrow = new Date(Date.now() + 1000 * 60 * 60 * 24).toLocaleDateString('en-US', { weekday: 'long' })

    const tasksWithKeyReplaced = Object.entries(tasks).reduce<TasksState>((acc, task) => {
      const [key, value] = task
      const weekday = key === today ? 'Today' : key === tomorrow ? 'Tomorrow' : key
      return { ...acc, [weekday]: value }
    }, {})

    return tasksWithKeyReplaced
  }

  return {
    tasks: replaceByTodayAndTomorrow(tasks),
    handleLocalTasks
  }
}
