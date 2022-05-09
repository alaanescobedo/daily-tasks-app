import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export interface UserContextProps {
  user: {
    entityId: string
    username: string
  }
  isAuthenticated: boolean
  setCurrentUser: Dispatch<SetStateAction<any>>
  setAuthenticated: Dispatch<SetStateAction<any>>
}

export const UserContext = createContext<UserContextProps>({
  user: {
    entityId: 'guest123',
    username: 'Guest'
  },
  setCurrentUser: () => { },
  setAuthenticated: () => { }
} as any)

export const useUser = (): UserContextProps => useContext(UserContext)
