import { TaskI } from '@modules/task/task.interface'
import { getCurrentDate } from './getCurrentDate'

export const sortTasksByDay = (tasks: TaskI[]): { [key: string]: TaskI[] } => {
  const TasksByDayObj = tasks.reduce<{ [key: string]: TaskI[] }>((acc, task) => {
    const weekday = getCurrentDate('en-US', task.scheduledFor).split(',')[0]
    acc[weekday] = acc[weekday] !== undefined ? [...acc[weekday], task] : [task]
    return acc
  }, {})

  return TasksByDayObj
}
