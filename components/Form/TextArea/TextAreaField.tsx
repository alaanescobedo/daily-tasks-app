import { Stack } from '@components/Stack'
import { forwardRef, useState } from 'react'
import { TextareaBase } from './BaseTextarea/TextareaBase'
import { InputError } from '../Input/InputError/InputError'
import InputField from '../Input/InputField/InputField'
import { InputHint } from '../Input/InputHint/InputHint'
import { InputLabel } from '../Input/InputLabel/InputLabel'

export const TextAreaField = forwardRef(({
  id,
  name,
  error,
  hint,
  label,
  required,
  maxLength = 120,
  resize,
  gap,
  placeholder = 'Write here...',
  onChange = () => { },
  hidenErrorField = false,
  keepHint = false,
  value,
  size,
  ...props
}: any, ref): JSX.Element => {
  const [textareaValue, setTextareaValue] = useState(value ?? '')

  const handleChange = (e: any): void => {
    setTextareaValue(e.target.value)
    onChange(e)
  }

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
    gap
  }

  const baseProps = {
    onChange,
    placeholder,
    maxLength,
    resize,
    value: textareaValue,
    size,
    ...props
  }

  return (
    <InputField {...fieldProps}>
      <Stack {...stackProps}>
        <InputLabel />
        <TextareaBase {...baseProps} onChange={handleChange} ref={ref} />
        <InputHint keepHint={keepHint} />
        {hidenErrorField === false && <InputError />}
      </Stack>
    </InputField>
  )
}
)
