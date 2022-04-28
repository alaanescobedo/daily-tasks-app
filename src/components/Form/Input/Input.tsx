import { Stack } from '@components/Stack'
import { forwardRef } from 'react'
import { InputBase } from './InputBase/InputBase'
import { InputError } from './InputError/InputError'
import InputField from './InputField/InputField'
import { InputHint } from './InputHint/InputHint'
import { InputLabel } from './InputLabel/InputLabel'

export const Input = forwardRef(({
  type,
  id,
  name,
  onChange,
  required = true,
  inputClassname,
  autoComplete = 'off',
  onBlur,
  color,
  size,
  placeholder,
  passwordLabel = '',
  justify,
  isInvalid,
  hint,
  label,
  error,
  disabled = false,
  reverse,
  isValid,
  ...props
}: any, ref: any): JSX.Element => {
  const restProps = {
    onChange,
    required,
    onBlur,
    placeholder,
    props
  }

  const fieldProps = {
    id,
    name,
    error,
    hint,
    label,
    required
  }

  return (
    <InputField {...fieldProps}>
      <Stack vertical gap='.2rem'>
        <InputLabel />
        <InputBase type={type} inputRef={ref} disabled={disabled} {...restProps} />
        <InputHint />
        <InputError />
      </Stack>
    </InputField>
  )
})
