import styles from './InputGroup.module.css'

export interface InputGroupProps {
  children: React.ReactNode
  label?: string
  htmlFor: string
  className?: string
  labelPosition?: 'top' | 'bottom'
}

export const InputGroup = ({ children, label, htmlFor, className, labelPosition = 'top' }: InputGroupProps): JSX.Element => {
  return (
    <div className={className ?? styles.form_group}>
      {labelPosition === 'top' && <label htmlFor={htmlFor}>{label}</label>}
      {children}
      {labelPosition === 'bottom' && <label htmlFor={htmlFor}>{label}</label>}
    </div>
  )
}
