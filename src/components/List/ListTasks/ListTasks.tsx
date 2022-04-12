import { Task } from '@hooks'
import { TaskCard } from '@components/Card'

import styles from './ListTasks.module.css'

export interface ListTasksProps {
  tasks: { [key: string]: Task[] }
}

export const ListTasks = ({ tasks }: ListTasksProps): JSX.Element => {
  return (
    <ul className={styles.container}>
      {Object.entries(tasks).map(([day, tasks]: any) => (
        <TaskCard tasks={tasks} day={day} key={day} navigateTo={`/activities/${day as string}`} />
      ))}
    </ul>
  )
}
