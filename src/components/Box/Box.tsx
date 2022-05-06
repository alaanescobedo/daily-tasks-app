import cx from 'classnames'
import styles from './Box.module.css'

export const Box = ({
  children,
  borderColor,
  borderWidth = 'small',
  backgroundColor,
  variant,
  padding,
  draggable,
  onDragStart,
  isDragging,
  onDragEnd,
  className
}: any): JSX.Element => {
  const customClassName = cx(
    styles.box,
    borderColor !== undefined && styles[`borderColor--${borderColor as string}`],
    draggable === true && styles.draggable,
    isDragging === true && styles.is_dragging,
    borderWidth !== undefined && styles[`borderWidth--${borderWidth as string}`],
    backgroundColor !== undefined && styles[`backgroundColor--${backgroundColor as string}`],
    variant !== undefined && styles[`variant--${variant as string}`],
    className
  )

  return (
    <div className={customClassName} style={{ padding }} draggable={draggable} onDragStart={onDragStart} onDragEnd={onDragEnd}>
      {children}
    </div>
  )
}
