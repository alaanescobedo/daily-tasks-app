import cx from 'classnames'
import { Typography } from '@components/Typography/Typography'
import styles from './Button.module.css'
import { ElementType } from 'react'

export const colorsMap = {
  primary: 'primary',
  secondary: 'secondary',
  clean: 'clean'
}

export const variantsMap = {
  default: 'default',
  outline: 'outline',
  filled: 'filled'
}

export interface ButtonProps {
  label: string
  type?: 'button' | 'submit'
  color?: keyof typeof colorsMap
  variant?: keyof typeof variantsMap
  onClick?: () => void
  disabled?: boolean
  as?: ElementType
  to?: string
  isInline?: boolean
  className?: string
}

export const Button = ({ label, type, onClick, isInline, color = 'primary', disabled, variant = 'default', as = 'button', className, to = '', ...props }: ButtonProps): JSX.Element => {
  const Element = as

  const customClassName = cx(
    styles.btn,
    styles[color],
    isInline && styles.isInline,
    disabled && styles.disabled,
    variant && styles[variant],
    className
  )

  const elementProps = {
    onClick: disabled ? undefined : onClick,
    type: type || 'button',
    disabled,
    className: customClassName,
    to,
    ...props
  }

  return (
    <Element {...elementProps}>
      <Typography className={styles.label} color='inherit' variant='span'>{label}</Typography>
    </Element>
  )
}
