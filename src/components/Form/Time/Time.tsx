import styles from '../shared/styles.module.css'

export interface InputTimeProps {
  id: string
  defaultValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Time = ({ id, defaultValue, handleChange }: InputTimeProps): JSX.Element => {
  return (
    <input name={id} id={id} type='time' className={styles.input_date_hour} onChange={handleChange} defaultValue={defaultValue} />
  )
}
