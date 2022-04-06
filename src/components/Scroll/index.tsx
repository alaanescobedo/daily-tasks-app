import { Task } from '../../hooks/useTasks'
import { getCurrentDate } from '../../utils/getCurrentDate'
import { TaskCard } from '../Card'
import styles from './Scroll.module.css'

interface Props {
  tasks: Task[]
}

export const TasksList = ({ tasks }: Props): JSX.Element => {
  const TasksByDayObj = tasks.reduce<{ [key: string]: Task[] }>((acc, task) => {
    const weekday = getCurrentDate('en-US', task.scheduledFor).split(',')[0]

    acc[weekday] = acc[weekday] !== undefined ? [...acc[weekday], task] : [task]

    return acc
  }, {})

  const TasksByDayArr = Object.entries(TasksByDayObj)

  return (
    <div className={styles.container}>
      {TasksByDayArr.map(([day, tasks]) => (
        <TaskCard tasks={tasks} day={day} key={day} />
      ))}
    </div>
  )
}
