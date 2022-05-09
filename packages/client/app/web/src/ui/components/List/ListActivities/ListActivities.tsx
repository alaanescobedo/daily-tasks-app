import styles from './ListActivities.module.css'
import { ActivityCard } from '@components/Card/Activity'
import { Scroll } from '@components/Scroll'
import { TaskI } from '@modules/task/task.interface'

export interface ListActivitiesProps {
  tasks: TaskI[]
  day: string
}

export const ListActivities = ({ tasks, day }: ListActivitiesProps): JSX.Element => {
  return (
    <Scroll>
      <ul className={styles.container}>
        {tasks.map(task => (
          <ActivityCard title={task.title} key={task.entityId} />
        ))}
      </ul>
    </Scroll>
  )
}
