import { Box, BoxProps } from '@components/Box'
import { Typography } from '@components/Typography'
import cx from 'classnames'
import styles from './DropArea.module.css'

interface DropAreaProps extends BoxProps {
  label: string
}

export const DropArea = ({
  label = 'Drop here',
  ...props
}: DropAreaProps) => {
  const customClassName = cx(
    styles.drop_area
  )

  return (
    <Box
      padding='.5rem 1rem'
      className={customClassName}
      {...props}
    >
      <Typography>{label}</Typography>
    </Box>
  )
}
