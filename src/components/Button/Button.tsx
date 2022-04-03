import { NavLink } from 'react-router-dom'
import styles from './Button.module.css'

export const Button = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <NavLink to='/new-task'>
        <p className={styles.label}>Add Task</p>
      </NavLink>
    </div>
  )
}
