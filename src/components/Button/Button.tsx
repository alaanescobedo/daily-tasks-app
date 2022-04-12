import { NavLink } from 'react-router-dom'
import styles from './Button.module.css'

export const Button = (): JSX.Element => {
  return (
    <NavLink to='/new-task' className={styles.btn}>
      <p className={styles.label}>Add Task</p>
    </NavLink>
  )
}
