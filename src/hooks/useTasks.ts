import { useContext } from 'react'
import { TaskContext } from '@context/Task'
import { Form_Values_New_Task } from '@interfaces'

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

export const useTasks = (): any => {
  const { tasks, setTasks } = useContext(TaskContext)

  const saveTask = (task: any): any => {
    const date = task.scheduledFor.split('T')[0]
    const updatedTasks = tasks[date] !== undefined ? [...tasks[date], task] : [task]
    const updatedState = { ...tasks, [date]: updatedTasks }

    setTasks(() => updatedState)
    window.localStorage.setItem('tasks', JSON.stringify(updatedState))
  }

  const updateTask = (updatedTask: any, date: string): any => {
    const updatedState = { ...tasks, [date]: tasks[date].map((task: any) => task.entityId === updatedTask.entityId ? updatedTask : task) }

    setTasks(() => updatedState)
    window.localStorage.setItem('tasks', JSON.stringify(updatedState))
  }

  const getActiveTasks = (tasks: any): any => {
    return Object.values(tasks).reduce((acc: any, currentTasks: any) => {
      if (currentTasks.length === 0) return acc

      const currentDate = new Date(currentTasks[0]?.scheduledFor).toISOString().split('T')[0]
      const activeTasks = currentTasks.filter((task: any) => task.status !== 'Outdated')

      if (activeTasks.length === 0) return acc

      acc[currentDate] = activeTasks
      return acc
    }, {})
  }

  const submitNewTask = (data: Form_Values_New_Task): void => {
    const { title, day, hour } = data
    const date = new Date(`${day}, ${hour}`)

    const newTask: Task = {
      title,
      scheduledFor: date.toISOString(),
      createdAt: new Date().toISOString(),
      status: 'Pending',
      userID: 'GUEST',
      entityId: Math.random().toString()
    }

    saveTask(newTask)
  }

  return {
    saveTask,
    tasks,
    updateTask,
    getActiveTasks,
    submitNewTask
  }
}
