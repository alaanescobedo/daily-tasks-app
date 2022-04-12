import { NavLink } from 'react-router-dom'
import styles from './Button.module.css'

export interface ButtonProps {
  label: string
}

export const Button = ({ label }: ButtonProps): JSX.Element => {
  return (
    <NavLink to='/new-task' className={styles.btn}>
      <p className={styles.label}>{label}</p>
    </NavLink>
  )
}
