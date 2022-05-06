import { Box } from '@components/Box'
import { Typography } from '@components/Typography'
import cx from 'classnames'
import styles from './DropArea.module.css'

export const DropArea = () => {
  const customClassName = cx(
    styles.drop_area
  )

  return (
    <Box
      padding='.5rem 1rem'
      className={customClassName}
    >
      <Typography>Drop Here</Typography>
    </Box>
  )
}
