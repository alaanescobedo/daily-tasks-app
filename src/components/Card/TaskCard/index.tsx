import { NavLink } from 'react-router-dom'
import { Task } from '../../../hooks/useTasks'
import styles from './TaskCard.module.css'

interface Props {
  tasks: Task[]
  day: string
  navigateTo: string
}

export const TaskCard = ({ tasks, day, navigateTo }: Props): JSX.Element => {
  return (
    <NavLink to={navigateTo}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {tasks.map(task => (
            <li key={task.entityId}>&gt; {task.title}</li>
          ))}
        </ul>
        <div className={styles.day}>
          <p>{day}</p>
        </div>
      </div>
    </NavLink>
  )
}
