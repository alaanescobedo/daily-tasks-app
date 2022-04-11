import { CheckIcon } from '../../Icons/Check'

import sharedStyles from '../shared/styles.module.css'

export interface InputCheckboxProps {
  id: string
  checked: boolean
  handleCheckbox?: (id: string) => void
}

export const Checkbox = ({ id, checked, handleCheckbox }: InputCheckboxProps): JSX.Element => {
  return (
    <span className={sharedStyles.input_recurrent} onClick={handleCheckbox}>
      {checked ? <CheckIcon /> : ''}
      <input name={id} id={id} type='checkbox' className={sharedStyles.checkbox} checked={checked} readOnly />
    </span>
  )
}
