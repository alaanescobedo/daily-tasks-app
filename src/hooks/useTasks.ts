import { useState } from 'react'

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

const getInitialTasks = (): any => {
  const tasks = window.localStorage.getItem('tasks') ?? '{}'
  return JSON.parse(tasks)
}
const initialTasks = getInitialTasks()

export const useTasks = (): any => {
  const [tasks, setTasks] = useState(initialTasks)

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
