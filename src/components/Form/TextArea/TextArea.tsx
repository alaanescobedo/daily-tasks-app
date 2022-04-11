import { ChangeEvent } from 'react'
import styles from '../shared/styles.module.css'

export interface TextAreaProps {
  value: string
  id: string
  placeholder: string
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  maxLength?: number
}

export const TextArea = ({ handleChange, value, id, maxLength = 70, placeholder = 'Write here...' }: TextAreaProps): JSX.Element => {
  return (
    <textarea
      onChange={handleChange}
      className={styles.input_task}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      name={id}
      id={id}
    />
  )
}
