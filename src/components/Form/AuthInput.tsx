import { FC } from 'react'
import styles from './AuthInput.module.css'

interface Props {
  label: string
  type: string
  name: string
}

export const AuthInput: FC<Props> = ({ label, type, name }) => {
  return (
    <div className={styles.form_group}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} autoComplete='off' />
    </div>
  )
}
