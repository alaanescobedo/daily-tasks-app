import { Task } from '../../../hooks/useTasks'
import { AppContainerLayout } from '../../../layouts/AppContainerLayout'
import styles from './Activities.module.css'

interface Props {
  tasks: Task[]
  day: string
}

export const ActivitiesCard = ({ tasks, day }: Props): JSX.Element => {
  return (
    <AppContainerLayout>
      <h1 className={styles.heading}>Activities</h1>
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.entityId} className={styles.listItem}>{task.title}</li>
        ))}
      </ul>
      <div className={styles.date_container}>
        <p className={styles.date}>{day}</p>
      </div>
    </AppContainerLayout>
  )
}
