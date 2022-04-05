import sharedStyles from '../../shared/styles.module.css'

interface Props {
  id: string
  defaultValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Time = ({ id, defaultValue, handleChange }: Props): JSX.Element => {
  return (
    <input name={id} id={id} type='time' className={sharedStyles.input_date_hour} onChange={handleChange} defaultValue={defaultValue} />
  )
}
