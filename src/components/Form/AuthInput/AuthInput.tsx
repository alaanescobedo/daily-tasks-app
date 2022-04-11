import styles from './AuthInput.module.css'

export interface InputAuthProps {
  label: string
  type: string
  name: string
}

export const AuthInput = ({ label, type, name }: InputAuthProps): JSX.Element => {
  return (
    <div className={styles.form_group}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} autoComplete='off' />
    </div>
  )
}
