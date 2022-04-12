import { Link } from 'react-router-dom'
import { Task } from '@hooks'
import styles from './ListActivities.module.css'

export interface ListActivitiesProps {
  tasks: Task[]
  day: string
}

export const ListActivities = ({ tasks, day }: ListActivitiesProps): JSX.Element => {
  return (
    <ul className={styles.container}>
      {tasks.map(task => (
        <span style={{ display: 'flex', gap: '1rem' }} key={task.entityId}>
          <li className={styles.list_item}>{task.title}</li>
          <span style={{ cursor: 'pointer' }}>Remove</span>
          <Link to={`/activities/update/${day}`}>Update</Link>
        </span>
      ))}
    </ul>
  )
}
