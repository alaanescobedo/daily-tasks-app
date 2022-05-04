import styles from './Scroll.module.css'
import cx from 'classnames'

export interface ScrollProps {
  children: React.ReactNode
  fullHeight?: boolean
}

export const Scroll = ({ children, fullHeight }: ScrollProps): JSX.Element => {
  const customClassName = cx(
    styles.scroll_container,
    fullHeight === true && styles.full_height
  )

  return (
    <div className={customClassName}>
      {children}
    </div>
  )
}
