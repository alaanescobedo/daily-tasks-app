import cx from 'classnames'
import { options } from './Alert.config'
import styles from './Alert.module.css'

export interface AlertProps {
  children: React.ReactNode
  status?: typeof options.status[number]
  className?: string
  variant?: typeof options.variant[number]
  prepend?: React.ReactNode
  append?: React.ReactNode
}

export const Alert = ({
  children,
  className,
  prepend,
  append,
  status = 'success',
  variant = 'default'
}:
AlertProps): JSX.Element => {
  return (
    <div className={cx(
      styles.alert_root,
      styles[variant],
      styles[status],
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
        {children}
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
