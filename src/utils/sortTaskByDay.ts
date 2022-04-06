import { Task } from '../hooks/useTasks'
import { getCurrentDate } from './getCurrentDate'

export const sortTasksByDay = (tasks: Task[]): Array<[string, Task[]]> => {
  const TasksByDayObj = tasks.reduce<{ [key: string]: Task[] }>((acc, task) => {
    const weekday = getCurrentDate('en-US', task.scheduledFor).split(',')[0]
    acc[weekday] = acc[weekday] !== undefined ? [...acc[weekday], task] : [task]
    return acc
  }, {})

  return Object.entries(TasksByDayObj)
}
