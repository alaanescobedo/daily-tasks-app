import { getCurrentDate } from '@utils/index'
import styles from '@components/Form/shared/styles.module.css'

export interface InputTimeProps {
  id: string
  defaultValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Time = ({ id, defaultValue, handleChange }: InputTimeProps): JSX.Element => {
  const minTime = getCurrentDate().split(',')[2].split(':').slice(0, 2).join(':').trim()
  return (
    <input name={id} id={id} type='time' className={styles.input_date_hour} onChange={handleChange} defaultValue={defaultValue} min={minTime} />
  )
}
