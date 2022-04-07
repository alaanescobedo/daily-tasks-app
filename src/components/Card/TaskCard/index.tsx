import { NavLink } from 'react-router-dom'
import { Task } from '../../../hooks/useTasks'
import styles from './TaskCard.module.css'

interface Props {
  tasks: Task[]
  day: string
  navigateTo: string
}

export const TaskCard = ({ tasks, day, navigateTo }: Props): JSX.Element => {
  const today = new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'long' })
  const tomorrow = new Date(Date.now() + 1000 * 60 * 60 * 24).toLocaleDateString('en-US', { weekday: 'long' })
  const labelDay = day === today ? 'Today' : day === tomorrow ? 'Tomorrow' : day

  return (
    <NavLink to={navigateTo} state={{ tasks, day }}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {tasks.map(task => (
            <li key={task.entityId}>&gt; {task.title}</li>
          ))}
        </ul>
        <div className={styles.day}>
          <p>{labelDay}</p>
        </div>
      </div>
    </NavLink>
  )
}
