import { NavLink } from 'react-router-dom'
import { Task } from '../../../hooks/useTasks'
import styles from './TaskCard.module.css'

interface Props {
  tasks: Task[]
  day: string
}

export const TaskCard = ({ tasks, day }: Props): JSX.Element => {
  return (
    <NavLink to='/activities'>
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
