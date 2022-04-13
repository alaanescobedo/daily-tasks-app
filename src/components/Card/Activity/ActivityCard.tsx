import { TrashIcon } from '@components/Icons'
import styles from './ActivityCard.module.css'

export interface ActivityCardProps {
  title: string
}

export const ActivityCard = ({ title }: ActivityCardProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={styles.title_container}>
        <p className={styles.title}>{title}</p>
      </span>
      <span className={styles.remove_container}>
        <span className={styles.icon_container}>
          <TrashIcon />
        </span>
      </span>
    </div>
  )
}
