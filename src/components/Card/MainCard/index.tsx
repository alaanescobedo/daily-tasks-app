import { NavLink } from 'react-router-dom'
import { getCurrentDate } from '@utils/index'
import { Clock } from '../../Clock/Clock'
import styles from './MainCard.module.css'

export const MainCard = (): JSX.Element => {
  const [weekday, date] = getCurrentDate().split(',')
  const currentDate = `${weekday}, ${date}`
  return (
    <NavLink to='/'>
      <div className={styles.container}>
        <h4 className={styles.username}>Username</h4>
        <h4 className={styles.date}>
          {currentDate}
          <Clock />
        </h4>
      </div>
    </NavLink>
  )
}
