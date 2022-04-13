import styles from '@components/Form/shared/styles.module.css'

export interface InputTimeProps {
  id: string
  defaultValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  minTime?: string
}

export const Time = ({ id, defaultValue, handleChange, minTime = '12:00' }: InputTimeProps): JSX.Element => {
  return (
    <input name={id} id={id} type='time' className={styles.input_date_hour} onChange={handleChange} defaultValue={defaultValue} min={minTime} />
  )
}
