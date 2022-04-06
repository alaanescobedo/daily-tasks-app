import { useEffect, useState } from 'react'

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
  localTasks: Task[]
  handleLocalTasks: (task: Task) => void
}

export const useTasks = (): UseTasksHook => {
  const [localTasks, setLocalTasks] = useState([] as Task[])

  useEffect(() => {
    window.localStorage.getItem('tasks') !== undefined
      ? setLocalTasks(JSON.parse(window.localStorage.getItem('tasks') as string))
      : setLocalTasks([])
  }, [])

  const handleLocalTasks = (task: Task): void => {
    setLocalTasks(() => [...localTasks, task])

    window.localStorage.setItem('tasks', JSON.stringify([...localTasks, task]))
  }

  return {
    localTasks,
    handleLocalTasks
  }
}
