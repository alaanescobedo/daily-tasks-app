import cx from 'classnames'
import { HTMLProps } from 'react'
import styles from './Stack.module.css'

export interface StackProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  vertical?: boolean
  gap?: string
  mt?: string
  mb?: string
  noWrap?: boolean
  reverse?: boolean
  align?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  width?: string
  fullHeight?: boolean
  className?: string
}

export const Stack = ({
  children,
  vertical = false,
  gap = '.4rem',
  mt = '0',
  mb = '0',
  noWrap = true,
  align = 'stretch',
  justify = 'stretch',
  fullHeight = false,
  width = '100%',
  className,
  ...props
}: StackProps) => {
  const customStyles = {
    gap, // Todo: define a group of spaces and add its css classes,
    marginBottom: mb,
    marginTop: mt,
    width
  }

  const customClassName = cx(
    styles.flex,
    vertical && styles.vertical,
    !noWrap && styles.no_wrap,
    align && styles[`align-${align}`],
    justify && styles[`justify-${justify}`],
    fullHeight && styles.full_height,
    className
  )

  return (
    <div className={customClassName} style={customStyles} {...props}>
      {children}
    </div>
  )
}
