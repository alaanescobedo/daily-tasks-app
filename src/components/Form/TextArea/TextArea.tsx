import { ChangeEvent } from 'react'
import styles from '../shared/styles.module.css'

interface Props {
  value: string
  id: string
  name: string
  placeholder: string
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  maxLength?: number
}
export const TextArea = ({ handleChange, value, name, id, maxLength = 70, placeholder = 'Write here...' }: Props): JSX.Element => {
  return (
    <textarea
      onChange={handleChange}
      className={styles.input_task}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      name={name}
      id={id}
    />
  )
}
