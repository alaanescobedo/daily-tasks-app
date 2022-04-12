import { Link } from 'react-router-dom'
import { Task } from '../../../hooks/useTasks'
import styles from './Activities.module.css'

interface Props {
  tasks: Task[]
  day: string
}

export const ActivitiesCard = ({ tasks, day }: Props): JSX.Element => {
  return (
    <>
      <h1 className={styles.heading}>Activities</h1>
      <ul className={styles.list}>
        {tasks.map(task => (
          <span style={{ display: 'flex', gap: '1rem' }} key={task.entityId}>
            <li className={styles.listItem}>{task.title}</li>
            <span style={{ cursor: 'pointer' }}>Remove</span>
            <Link to={`/activities/update/${day}`}>Update</Link>
          </span>
        ))}
      </ul>
      <div className={styles.date_container}>
        <p className={styles.date}>{day}</p>
      </div>
    </ >
  )
}
