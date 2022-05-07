import { forwardRef } from 'react'
import { InputGroup } from '../Input'
import { TimeBase } from './BaseTime/TimeBase'

export const TimeField = forwardRef(({
  minTime,
  defaultValue,
  id,
  name,
  error,
  hint,
  label,
  required,
  size,
  gap,
  align,
  labelPosition,
  hideErrorField = false,
  keepHint = false,
  vertical,
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
    minTime,
    defaultValue,
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
      <TimeBase {...baseProps} ref={ref} />
    </InputGroup>
  )
}
)
