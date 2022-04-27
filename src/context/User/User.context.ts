import { createContext, Dispatch, SetStateAction } from 'react'

export interface UserContextProps {
  user: {
    username: string
  }
  setCurrentUser: Dispatch<SetStateAction<any>>
}

export const UserContext = createContext<UserContextProps>({
  user: {},
  setCurrentUser: () => { }
} as any)
