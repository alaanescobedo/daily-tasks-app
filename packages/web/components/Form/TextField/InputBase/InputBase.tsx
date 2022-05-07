import { Button, ButtonProps } from '@components/Button'
import cx from 'classnames'
import { ChangeEvent, forwardRef, useState } from 'react'
import { useInput } from '../../Input/InputField/Input.context'
import styles from './InputBase.module.css'

interface InputBaseProps {
  type?: string
  disabled?: boolean
  isValid?: boolean
  required?: boolean
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const InputBase = forwardRef(({
  type,
  disabled,
  onChange,
  isValid,
  className,
  required,
  placeholder,
  ...props
}: InputBaseProps, ref: any): JSX.Element => {
  const { id, name, error } = useInput()
  const [passwordShown, setPasswordShown] = useState(false)
  const isTypePassword = type === 'password'

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (disabled === true) return
    if (onChange != null) onChange(e)
  }

  const customClassName = cx(
    styles.inputContainer,
    error !== undefined && error?.length > 0 && styles.error,
    disabled === true && styles.disabled,
    isValid === true && styles.isValid,
    className
  )

  const inputProps = {
    id,
    type: passwordShown ? 'text' : type,
    onChange: handleChange,
    name,
    disabled,
    className: styles.input,
    ref,
    ...props
  }

  const btnProps: ButtonProps = {
    color: 'clean',
    isInline: true,
    onClick: () => setPasswordShown(!passwordShown),
    label: passwordShown ? 'Hide' : 'Show',
    className: styles.passwordButton
  }

  return (
    <div className={customClassName}>
      <input {...inputProps} />
      {isTypePassword && <Button {...btnProps} />}
    </div>
  )
}
)
