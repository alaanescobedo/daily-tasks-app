import { Input_Base } from '@interfaces'
import styles from './Input.module.css'

export interface InputProps extends Omit<Input_Base, 'label'> { }

export const Input = ({ type, id, handleChange, value = '', required = true }: InputProps): JSX.Element => {
  return (
    <input type={type} id={id} name={id} autoComplete='off' onChange={handleChange} required={required} className={styles.input} value={value} />
  )
}
