import styles from './InputGroup.module.css'

export interface InputGroupProps {
  children: React.ReactNode
  label?: string
  htmlFor: string
  className?: string
}

export const InputGroup = ({ children, label, htmlFor, className }: InputGroupProps): JSX.Element => {
  return (
    <div className={className ?? styles.form_group}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  )
}
