import { useContext, useEffect, useState } from 'react'
import { TaskContext } from '@context/Task'
import { useTasks } from './useTasks'

interface UseTimer {
  currentDate: Date
}

export const useTimer = (): UseTimer => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const { tasks } = useContext(TaskContext)
  const { updateTask } = useTasks(tasks)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(() => new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // TODO: Refactor - Add state to Task with min schedulefor date
    const date = currentDate.toISOString().split('T')[0]
    const currentDayTasks = tasks[date]

    return currentDayTasks?.map((task: any) => {
      if (task.status === 'Outdated') return task
      const currentTime = currentDate.getTime()
      const scheduledTime = new Date(task.scheduledFor).getTime()

      return currentTime > scheduledTime ? updateTask({ ...task, status: 'Outdated' }, date) : task
    })
  }, [currentDate.getSeconds()])

  return {
    currentDate
  }
}
