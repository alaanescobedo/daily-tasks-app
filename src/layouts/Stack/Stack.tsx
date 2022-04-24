import cx from 'classnames';
import styles from './Stack.module.css';

export interface StackProps {
  children: React.ReactNode
  vertical?: boolean
  gap?: string
  wrap?: boolean
  className?: string
}

export const Stack = ({
  children,
  vertical = false,
  gap = '0',
  wrap = true,
  className,
}: StackProps) => {

  const customStyles = {
    gap // Todo: define a group of spaces and add its css classes
  }

  return (
    <div className={cx(
      styles.flex,
      vertical && styles.vertical,
      wrap === false && styles.noWrap,
      className
    )}
      style={{ ...customStyles }}
    >
      {children}
    </div>
  )
}
