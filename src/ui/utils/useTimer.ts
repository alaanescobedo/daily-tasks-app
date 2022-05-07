import { TaskContext } from 'modules/task/api'
import { useContext, useEffect, useState } from 'react'
import { useTasks } from '../modules/task/api/useTasks'

interface UseTimer {
  currentDate: Date
}

export const useTimer = (): UseTimer => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const { activeTasks } = useContext(TaskContext)
  const { updateTask } = useTasks()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(() => new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // TODO: Refactor - Add state to Task with min schedulefor date
    const date = currentDate.toISOString().split('T')[0]
    const currentDayTasks = activeTasks.find((task: any) => task.scheduledFor.split('T')[0] === date)

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
