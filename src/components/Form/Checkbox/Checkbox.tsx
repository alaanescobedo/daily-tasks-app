// TODO: Update types and interfaces
import { Icon } from '@components/Icons'
import { forwardRef, useState } from 'react'
import { CheckboxBase } from '../Input/BaseCheckbox/CheckboxBase'
import sharedStyles from '../shared/styles.module.css'

export interface InputCheckboxProps {
  idIcon?: string
}

export const Checkbox = forwardRef(({ idIcon = 'recurrent-icon', checked, onChange, ...props }: any, ref: any): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked ?? false)

  const handleChange = (e: any): void => {
    setIsChecked(() => isChecked !== true)
    if (onChange !== undefined) onChange(e)
  }

  return (
    <span className={sharedStyles.input_recurrent}>
      {isChecked === true && <Icon id={idIcon} icon='check' />}
      <CheckboxBase ref={ref} checked={isChecked} onChange={handleChange} {...props} />
    </span>
  )
}
)
