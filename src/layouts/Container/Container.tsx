import { Button } from '@components/Button'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import styles from './Container.module.css'
export const Container = ({ children, color, fullHeight, width = '95%' }: any) => {
  const customClassName = cx(
    styles.container_overflow_hide
    // styles.container,
    // // padding && styles[`padding_${padding}`],
    // className
  )

  const innerContainer = cx(
    styles.inner_container,
    fullHeight && styles.full_height,
    styles[`color_${color}`]
  )

  return (
    <div className={customClassName}>
      <div className={innerContainer}>
        <div className={styles.full_height} style={{ width, margin: '0 auto', marginBottom: '3rem' }}>
          {children}
        </div>
        <Button as={NavLink} label='Return' isInline color='clean' to='/' variant='outline' />
      </div>
    </div>
  )
}
