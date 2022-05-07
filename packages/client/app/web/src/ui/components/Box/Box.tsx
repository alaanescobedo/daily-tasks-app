import { HTMLAttributes } from 'react'
import cx from 'classnames'
import styles from './Box.module.css'

// Todo: add typings  
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  borderColor?: string
  borderWidth?: string
  backgroundColor?: string
  variant?: string
  padding?: string
  draggable?: boolean
  isDragging?: boolean
  className?: string
}

export const Box = ({
  children,
  borderColor,
  borderWidth = 'small',
  backgroundColor,
  variant,
  padding,
  draggable,
  isDragging,
  className
}: BoxProps): JSX.Element => {
  const customClassName = cx(
    styles.box,
    borderColor !== undefined && styles[`borderColor--${borderColor}`],
    draggable === true && styles.draggable,
    isDragging === true && styles.is_dragging,
    borderWidth !== undefined && styles[`borderWidth--${borderWidth}`],
    backgroundColor !== undefined && styles[`backgroundColor--${backgroundColor}`],
    variant !== undefined && styles[`variant--${variant}`],
    className
  )

  return (
    <div className={customClassName} style={{ padding }} draggable={draggable}>
      {children}
    </div>
  )
}
