import { ReactNode } from 'react'
import { useGrid } from './Grid.context'

export const GridItem = ({
  children,
  gridColumn = '1 / -1',
  gridRow = 'auto'
}: { children: ReactNode, gridColumn?: string, gridRow?: string }): JSX.Element => {
  const { gap } = useGrid()
  return (
    <div style={{ gap, gridColumn, gridRow }}>
      {children}
    </div>
  )
}
