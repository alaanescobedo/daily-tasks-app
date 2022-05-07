import { useState } from 'react'
import { getActiveTasks } from '@utils/Task'
import { TaskI } from '@hooks'
import { TaskContext } from './Task.context'

interface TasksState {
  tasks: TaskI[]
}

export const setInStorage = ({ key, value }: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

const getInitialTasks = (): any => {
  const tasks = window.localStorage.getItem('tasks') ?? '[]'
  return JSON.parse(tasks)
}
const initialTasks = getInitialTasks()

export const TaskProvider = ({ children }: any): any => {
  const [tasks, setTasks] = useState(initialTasks)

  const saveNewTask = (newTask: any): void => {
    const updatedTasks = [...tasks, newTask]
    setTasks(() => updatedTasks)
    setInStorage({ key: 'tasks', value: updatedTasks })
  }

  const updateTask = (updatedTask: any): any => {
    const date = updatedTask.scheduledFor.split('T')[0]
    tasks[date] = tasks[date] ?? []
    const updatedState = {
      ...tasks,
      [date]: tasks[date].map((task: any) => task.entityId === updatedTask.entityId ? updatedTask : task)
    }
    setTasks(() => updatedState)
    setInStorage({ key: 'key_tasks', value: updatedState })
  }

  return (
    <TaskContext.Provider value={{
      allTasks: tasks,
      activeTasks: getActiveTasks(tasks),
      setTasks,
      saveNewTask,
      updateTask
    }}
    >
      {children}
    </TaskContext.Provider>
  )
}
