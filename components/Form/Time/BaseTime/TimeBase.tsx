// TODO: Migrate to Design System
import { useInput } from '@components/Form/Input/InputField/Input.context'
import styles from '@components/Form/shared/styles.module.css'
import { forwardRef } from 'react'
import cx from 'classnames'

export interface InputTimeProps {
  id?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  minTime?: string
  value: string
  size?: 'sm' | 'md' | 'lg'
  isInline?: boolean
  className?: string
}

export const TimeBase = forwardRef(({ minTime, defaultValue, isInline = false, size = 'sm', className, ...props }: InputTimeProps, ref: any): JSX.Element => {
  const { id, name, required, error } = useInput()

  const customClassName = cx(
    styles.input_date_hour,
    isInline && styles.isInline,
    error !== undefined && error.length > 0 && styles.error,
    styles[`size_${size}`],
    className
  )

  return (
    <input
      id={id}
      name={name}
      type='time'
      className={customClassName}
      defaultValue={defaultValue}
      min={minTime}
      ref={ref}
      required={required}
      {...props}
    />
  )
}
)
