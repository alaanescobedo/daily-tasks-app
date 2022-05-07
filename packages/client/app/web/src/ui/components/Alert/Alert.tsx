import { HTMLAttributes } from 'react'
import cx from 'classnames'
import { options } from './Alert.config'
import styles from './Alert.module.css'

export interface AlertProps extends HTMLAttributes<HTMLDivElement>  {
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
  status = 'success',
  variant = 'default',
  ...props
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
      <div className={styles.main} {...props}>
        {message}
      </div>
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
