import { createContext, useContext } from 'react'

export interface InputContextProps {
  error: string
  hint: string
  name: string
  id: string
  label: string
  required: boolean
}
const initialContext: InputContextProps = {
  error: '',
  hint: '',
  name: '',
  id: '',
  label: '',
  required: false
}

const InputContext = createContext<InputContextProps>(initialContext)
export const useInput = (): InputContextProps => useContext(InputContext)

export default InputContext
