import { forwardRef } from 'react'
import { InputGroup } from '../Input'
import { InputBase } from './InputBase/InputBase'

export const SelectField = forwardRef(({
  id,
  name,
  error,
  hint,
  label,
  required,
  size,
  gap,
  align,
  hideErrorField = false,
  keepHint = false,
  labelPosition,
  vertical,
  isInline,
  ...props
}: any, ref): JSX.Element => {
  const fieldProps = {
    id,
    name,
    error,
    hint,
    label,
    required,
    size
  }

  const stackProps = {
    gap,
    align,
    vertical
  }

  const baseProps = {
    isInline,
    size,
    ...props
  }

  return (
    <InputGroup
      labelPosition={labelPosition}
      hideErrorField={hideErrorField}
      keepHint={keepHint}
      {...fieldProps}
      {...stackProps}
    >
      <InputBase {...baseProps} ref={ref} />
    </InputGroup>
  )
}
)
