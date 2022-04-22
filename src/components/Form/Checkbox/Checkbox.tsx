import { Icon } from '@components/Icons'
import sharedStyles from '../shared/styles.module.css'

export interface InputCheckboxProps {
  id: string
  checked: boolean
  handleCheckbox?: (id: string) => void
  idIcon?: string
}

export const Checkbox = ({ id, checked, handleCheckbox, idIcon = 'recurrent-icon' }: InputCheckboxProps): JSX.Element => {
  return (
    <span className={sharedStyles.input_recurrent} onClick={() => (handleCheckbox != null) ? handleCheckbox(id) : null}>
      {checked
        ? <Icon id={idIcon} icon='check' />
        : null}
      <input name={id} id={id} type='checkbox' className={sharedStyles.checkbox} checked={checked} readOnly />
    </span>
  )
}
