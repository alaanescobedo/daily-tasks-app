import { createContext, useContext } from 'react'

interface DraggerContextProps {
  isDragging?: boolean
  handleSetIsDragging: (isDragging: boolean) => void
  item: string
  handleSetItem: (item: string) => void
}

const DraggerContext = createContext<DraggerContextProps>({
  isDragging: false,
  handleSetIsDragging: () => { },
  item: '',
  handleSetItem: () => { }
})
export const useDragger = (): DraggerContextProps => useContext(DraggerContext)

export default DraggerContext
