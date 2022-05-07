// TODO: update types and interfaces
import cx from 'classnames'
import { useInput } from '../InputField/Input.context'
import styles from './InputLabel.module.css'

export const InputLabel = ({ label }: any): JSX.Element | null => {
  const { id, required, size } = useInput()

  if (label === '' || label === undefined) return null

  const customClassName = cx(
    styles[`size_${size as string}`]
  )

  return (
    <label htmlFor={id} className={customClassName}>
      {label}
      {required === true && <span>*</span>}
    </label>
  )
}
