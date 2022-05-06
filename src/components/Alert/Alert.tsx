import cx from 'classnames'
import { useEffect } from 'react'
import { options } from './Alert.config'
import styles from './Alert.module.css'

export interface AlertProps {
  message: string
  status?: typeof options.status[number]
  className?: string
  variant?: typeof options.variants[number]
  prepend?: React.ReactNode
  append?: React.ReactNode
}

export const Alert = ({
  message,
  className,
  prepend,
  append,
  timer,
  status = 'success',
  variant = 'default'
}:
AlertProps): JSX.Element => {
  return (
    <div className={cx(
      styles.alert_root,
      styles[status],
      styles[variant],
      className
    )}
    >
      {prepend !== false
        ? (
          <span className={styles.addon_prepend}>
            {prepend}
          </span>
          )
        : null}
      <span className={styles.main}>
        {message}
      </span>
      {append !== false
        ? (
          <span className={styles.addon_append}>
            {append}
          </span>
          )
        : null}
    </div>
  )
}
