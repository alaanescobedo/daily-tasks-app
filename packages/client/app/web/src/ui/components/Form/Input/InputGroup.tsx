import { Stack } from '@components/Stack'
import { CSSProperties } from 'react'
import { InputError } from './InputError/InputError'
import InputField, { InputFieldProps } from './InputField/InputField'
import { InputHint } from './InputHint/InputHint'
import { InputLabel } from './InputLabel/InputLabel'

export interface InputGroupProps extends InputFieldProps {
  label?: string
  gap?: CSSProperties['gap']
  align?: CSSProperties['alignItems']
  labelPosition?: 'top' | 'bottom'
  vertical?: boolean
  hideErrorField?: boolean
  keepHint?: boolean
}

export const InputGroup = ({
  children,
  id,
  name,
  error,
  hint,
  label,
  gap = '.6rem',
  align = 'start',
  labelPosition = 'top',
  vertical,
  hideErrorField = false,
  keepHint = false,
  ...props
}: InputGroupProps): JSX.Element => {
  const fieldProps = {
    id,
    name,
    error,
    hint
  }

  const stackProps = {
    gap,
    align,
    vertical
  }

  return (
    <InputField {...fieldProps} {...props}>
      <Stack {...stackProps}>
        {labelPosition === 'top' && <InputLabel label={label} />}
        {children}
        {labelPosition === 'bottom' && <InputLabel label={label} />}
        <InputHint keepHint={keepHint} />
        {hideErrorField === false && <InputError />}
      </Stack>
    </InputField>
  )
}
