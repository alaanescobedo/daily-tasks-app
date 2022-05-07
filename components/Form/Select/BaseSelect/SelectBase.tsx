import { forwardRef } from 'react'
import sharedStyles from '@components/Form/shared/styles.module.css'
import { useInput } from '@components/Form/Input/InputField/Input.context'
import cx from 'classnames'

export type PriorityId = 'low' | 'medium' | 'high'
export type WeekdaysId = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export type WeekdaysLabel = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'Today' | 'Tomorrow'
export type PriorityLabel = 'Low' | 'Medium' | 'High'

export interface InputSelectProps {
  options: Array<{ id: PriorityId | WeekdaysId, label: PriorityLabel | WeekdaysLabel }>
  defaultValue: string
  size: 'sm' | 'md' | 'lg'
  isInline?: boolean
  className?: string
}
export const SelectBase = forwardRef(({ options, defaultValue, className, size = 'sm', isInline = false, ...props }: InputSelectProps, ref: any): JSX.Element => {
  const { id, name, required, error } = useInput()

  const customClassName = cx(
    sharedStyles.input_select,
    error !== undefined && error.length > 0 && sharedStyles.error,
    isInline && sharedStyles.isInline,
    sharedStyles[`size_${size}`],
    className
  )

  return (
    <select name={name} id={id} className={customClassName} defaultValue={defaultValue} ref={ref} required={required} {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.id}>{option.label}</option>
      ))}
    </select>
  )
})
