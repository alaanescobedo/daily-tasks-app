import { createElement, ReactNode } from 'react'
import cx from 'classnames'
import styles from './Typography.module.css'

export const variantsMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'h6',
  label: 'label',
  body: 'p',
  span: 'span',
  inherit: 'inherit'
}
export const colorsMap = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  highlight: 'highlight',
  success: 'success',
  warning: 'warning',
  error: 'error',
  base: 'base',
  inherit: 'inherit'
}
export const weightMap = {
  light: 'light',
  normal: 'normal',
  bold: 'bold'
}
export const sizeMap = {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl'
}

export interface TypographyProps {
  children: ReactNode
  id?: string
  variant?: keyof typeof variantsMap
  color?: keyof typeof colorsMap
  weight?: keyof typeof weightMap
  size?: keyof typeof sizeMap
  center?: boolean
  className?: string
  style?: React.CSSProperties
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

export const Typography = ({ children, onClick, style, center, variant = 'body', color = 'base', weight = 'normal', size, className }: TypographyProps): JSX.Element => {
  const customClassName = cx(
    styles.typography,
    styles[`typography--${variant}`],
    color !== undefined && styles[`color--${color}`],
    weight !== undefined && styles[`weight--${weight}`],
    size !== undefined && styles[`size--${size}`],
    center === true && styles.center,
    className
  )
  return createElement(
    variantsMap[variant] ?? 'p',
    {
      className: customClassName,
      style: { ...style },
      onClick
    },
    children
  )
}
