import { NavLink } from 'react-router-dom'
import styles from './TaskCard.module.css'

export const TaskCard = (): JSX.Element => {
  return (
    <NavLink to='/activities'>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>&gt; Practicar Figma</li>
          <li>&gt; Continuar con el repositorio de java</li>
          <li>&gt; Aprender un algoritmo</li>
        </ul>
        <div className={styles.day}>
          <p>Today</p>
        </div>
      </div>
    </NavLink>
  )
}
