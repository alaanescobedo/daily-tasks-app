import { useState } from 'react'
import DraggerContext from './Dragger.context'

export const Dragger = ({ children }: any) => {
  const [isDragging, setIsDragging] = useState(false)
  const [item, setItem] = useState('')

  const handleSetIsDragging = (status: any) => {
    setIsDragging(() => status)
  }

  const handleSetItem = (item: any) => {
    setItem(() => item)
  }

  return (
    <DraggerContext.Provider value={{
      isDragging,
      handleSetIsDragging,
      item,
      handleSetItem,
    }}
    >
      {children}
    </DraggerContext.Provider>
  )
}
