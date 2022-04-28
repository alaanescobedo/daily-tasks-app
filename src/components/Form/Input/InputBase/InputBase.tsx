import { Button, ButtonProps } from '@components/Button'
import cx from 'classnames'
import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react'
import { useInput } from '../Input.context'
import styles from './InputBase.module.css'

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  inputRef?: React.Ref<HTMLInputElement>
}

export const InputBase = forwardRef(({
  type,
  disabled,
  onChange,
  isValid,
  className,
  inputRef,
  ...props
}: InputBaseProps, ref: any): JSX.Element => {
  const { id, name, error } = useInput()
  const [passwordShown, setPasswordShown] = useState(false)
  const isTypePassword = type === 'password'

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (disabled === true) return
    onChange(e)
  }

  const customClassName = cx(
    styles.inputContainer,
    error.length > 0 && styles.error,
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
    ref: (inputRef != null) || ref,
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
})
