import { TaskI } from '@modules/task/task.interface'
import { NavLink } from 'react-router-dom'
import styles from './TaskCard.module.css'

export interface TaskCardProps {
  tasks: TaskI[]
  day: string
  navigateTo: string
}

export const TaskCard = ({ tasks, day, navigateTo }: TaskCardProps): JSX.Element => {
  return (
    <NavLink to={navigateTo} state={{ tasks, day }}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {tasks.map(task => (
            <li key={task.entityId}>- {task.title}</li>
          ))}
        </ul>
        <div className={styles.day}>
          <p>{day}</p>
        </div>
      </div>
    </NavLink>
  )
}
