// TODO: Update types and interfaces and styles
import { forwardRef, useState } from 'react'
import { Icon } from '@components/Icons'
import { useInput } from '../../Input/InputField/Input.context'
import sharedStyles from '../../shared/styles.module.css'
import cx from 'classnames'

export const CheckboxBase = forwardRef(({
  idIcon = 'recurrent-icon',
  checked,
  size = 'sm',
  onChange,
  className,
  ...props
}: any, ref: any) => {
  const { id, name, error } = useInput()

  const [isChecked, setIsChecked] = useState(checked ?? false)

  const handleChange = (e: any): void => {
    setIsChecked(() => isChecked !== true)
    if (onChange !== undefined) onChange(e)
  }

  const customClassName = cx(
    sharedStyles.input_recurrent,
    sharedStyles[`checkbox_size_${size as string}`],
    error !== undefined && error.length > 0 && sharedStyles.error,
    className
  )

  return (
    <span className={customClassName}>
      {isChecked === true && <Icon id={idIcon} icon='check' />}
      <input
        id={id}
        name={name}
        type='checkbox'
        ref={ref}
        checked={isChecked}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '100%',
          margin: 0,
          opacity: 0,
          position: 'absolute',
          left: 0,
          top: 0
        }}
        {...props}
      />
    </span>

  )
})
