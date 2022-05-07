import { createContext, useContext } from 'react'

export interface InputContextProps {
  error?: string
  hint?: string
  name: string
  id: string
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
}
const initialContext: InputContextProps = {
  error: '',
  hint: '',
  name: '',
  id: '',
  required: false,
  size: 'sm'
}

const InputContext = createContext<InputContextProps>(initialContext)
export const useInput = (): InputContextProps => useContext(InputContext)

export default InputContext
