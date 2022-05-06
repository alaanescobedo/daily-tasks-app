import styles from './Scroll.module.css'
import cx from 'classnames'
import { CSSProperties, UIEvent } from 'react'
export interface ScrollProps {
  children: React.ReactNode
  fullHeight?: boolean
}

export const Scroll = ({ children, fullHeight }: ScrollProps): JSX.Element => {
  const customClassName = cx(
    styles.scroll_container,
    fullHeight === true && styles.full_height,
    styles.scroll_direction,
    styles.scroll_direction_bottom
  )

  const handleScroll = (e: UIEvent<HTMLElement>) => {
    const top = e.currentTarget.scrollTop
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.clientHeight

    const scrollToBottomPorcent = top / bottom > 1 ? 1 : top / bottom
    const scrollToTopPorcent = (bottom - top) / bottom < 0 ? 0 : (bottom - top) / bottom

    e.currentTarget.style.setProperty('--bg-scroll-top', `rgba(0,0,0,${scrollToBottomPorcent})`)
    e.currentTarget.style.setProperty('--blur-scroll-top', `${scrollToBottomPorcent}px  `)
    e.currentTarget.style.setProperty('--opacity-scroll-top', `${scrollToBottomPorcent}`)

    e.currentTarget.style.setProperty('--bg-scroll-bottom', `rgba(0,0,0,${scrollToTopPorcent})`)
    e.currentTarget.style.setProperty('--blur-scroll-top', `${scrollToBottomPorcent}px  `)
    e.currentTarget.style.setProperty('--opacity-scroll-bottom', `${scrollToTopPorcent}`)
  }

  return (
    <div className={customClassName}>
      <div
        onScroll={handleScroll}
        // ? Little hack to dynamically change values in css modules, since it can't be changed directly with javascript. Could it be fixed by adding the variables to the design system?
        className={styles.scroll_inner_container}
        style={{
          '--bg-scroll-top': 'rgba(0,0,0,0)',
          '--bg-scroll-bottom': 'rgba(0,0,0,1)',
          '--blur-scroll-top': '0px',
          '--blur-scroll-bottom': '1px',
          '--opacity-scroll-top': '0px',
          '--opacity-scroll-bottom': '1px'
        } as CSSProperties}
      >
        {children}
      </div>
    </div>
  )
}
