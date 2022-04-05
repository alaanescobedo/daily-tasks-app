import { useNewTask } from '../../../hooks/useNewTask'
import { CheckIcon } from '../../Icons/Check'

import sharedStyles from '../shared/styles.module.css'

interface Props {
  id: string
}

export const Checkbox = ({ id }: Props): JSX.Element => {
  const { checked, handleCheckbox } = useNewTask()

  return (
    <span className={sharedStyles.input_recurrent} onClick={handleCheckbox}>
      {checked ? <CheckIcon /> : ''}
      <input name={id} id={id} type='checkbox' className={sharedStyles.checkbox} checked={checked} readOnly />
    </span>
  )
}
