import { Clock } from '../../Clock/Clock'
import styles from './MainCard.module.css'

export interface MainCardProps {
  currentDate: string
  username?: string
}

export const MainCard = ({ currentDate, username = 'Guest' }: MainCardProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <h4 className={styles.username}>{username}</h4>
      <h4 className={styles.date}>
        {currentDate}
        <Clock />
      </h4>
    </div>
  )
}
