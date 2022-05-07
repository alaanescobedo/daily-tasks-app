import { ReactNode } from 'react'
import { GridContext } from './Grid.context'

export const Grid = ({ children, gap, columns = 12 }: { children: ReactNode, gap?: string, columns?: number }): JSX.Element => {
  return (
    <GridContext.Provider value={{ gap }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns},1fr)`,
        gridTemplateRows: 'auto',
        gap
      }}
      >
        {children}
      </div>
    </GridContext.Provider>
  )
}
