import { Input_Base } from '@interfaces'
import styles from './Input.module.css'

export interface InputProps extends Input_Base { }

export const Input = ({ type, id, handleChange, required = false }: InputProps): JSX.Element => {
  return (
    <input type={type} id={id} name={id} autoComplete='off' onChange={handleChange} required={required} className={styles.input} />
  )
}
