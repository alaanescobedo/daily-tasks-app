import { createContext, useContext } from 'react'

interface GridContextProps {
  gap?: string
  columns?: number
}

export const GridContext = createContext<GridContextProps>({ gap: '0', columns: 12 })

export const useGrid = (): GridContextProps => useContext(GridContext)
