import cx from 'classnames'
import styles from './Icon.module.css'
import { icons } from './utils/icons'

export interface IconProps {
  icon: keyof typeof icons
  id?: string
  className?: string
  color?: 'base' | 'inherit'
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
  isClickable?: boolean
}

export const Icon = ({
  id,
  className,
  icon,
  onClick,
  isClickable = false,
  color = 'inherit'
}: IconProps): JSX.Element => (

  <svg
    className={cx(
      styles.container,
      styles[color],
      isClickable ? styles.isClickable : null,
      className
    )}
    xmlns='http://www.w3.org/2000/svg'
    id={id}
    onClick={onClick}
    viewBox={icons[icon].viewBox ?? '0 0 20 20'}
    preserveAspectRatio='xMidYMid meet'
  >
    <path d={icons[icon].path} />
  </svg>

)
