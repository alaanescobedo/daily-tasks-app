import { Icon } from '@components/Icons/Icon'
import styles from './ActivityCard.module.css'

export interface ActivityCardProps {
  title: string
}

export const ActivityCard = ({ title }: ActivityCardProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.remove_container}>
        <span className={styles.icon_container}>
          <Icon icon='trash' id='trash-icon' />
        </span>
      </div>
    </div>
  )
}
