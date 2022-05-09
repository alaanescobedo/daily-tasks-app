import cx from 'classnames'
import { Typography } from '@components/Typography/Typography'
import styles from './Button.module.css'
import { ButtonHTMLAttributes } from 'react'

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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  color?: keyof typeof colorsMap
  variant?: keyof typeof variantsMap
  disabled?: boolean
  as?: any  // Error if we use ElementType
  to?: string
  isInline?: boolean
  className?: string
}

export const Button = ({
  label,
  isInline,
  color = 'primary',
  disabled,
  variant = 'default',
  as = 'button',
  to = '',
  className,
  ...props }: ButtonProps): JSX.Element => {
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
