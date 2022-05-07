import { forwardRef } from 'react'
import { useInput } from '@components/Form/Input/InputField/Input.context'
import cx from 'classnames'
import styles from './TextareaBase.module.css'
import { resizeTextArea } from '@utils/Form'

export const TextareaBase = forwardRef(({
  disabled,
  className,
  onChange,
  isValid,
  resize,
  size = 'sm',
  value,
  ...props
}: any, ref: any) => {
  const { id, name, error } = useInput()

  const heightsMap = {
    sm: '2.2rem',
    md: '2.6rem',
    lg: '3rem'
  }
  const initialHeight = heightsMap[size as 'sm' | 'md' | 'lg']

  const handleChange = (e: any): void => {
    if (resize === true && e.target.value.includes('\n')) return
    if (resize === true) resizeTextArea({ e, initialHeight })
    onChange(e)
  }

  const customClassName = cx(
    styles.textarea,
    styles[`size_${size as string}`],
    resize === true && styles.resize,
    error !== undefined && error.length > 0 && styles.error,
    disabled === true && styles.disabled,
    isValid === true && styles.isValid,
    className
  )

  const textareaProps = {
    id,
    name,
    ref,
    onChange: handleChange,
    className: customClassName,
    ...props
  }

  return (
    <textarea {...textareaProps} />
  )
})
