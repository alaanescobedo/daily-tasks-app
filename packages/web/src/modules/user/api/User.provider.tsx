import { useState } from 'react'
import { UserContext } from './User.context'

const getInitialUser = (): any => {
  const tasks = window.localStorage.getItem('user') ?? '{}'
  return JSON.parse(tasks)
}
const initialUser = getInitialUser()

export const UserProvider = ({ children }: any): any => {
  const [user, setUser] = useState(initialUser)
  const [isAuthenticated, setisAuthenticated] = useState(!!user.verified)

  const setCurrentUser = (user: any): void => {
    if (!user) return
    window.localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const setAuthenticated = (isAuthenticated: boolean): void => {
    setisAuthenticated(isAuthenticated)
  }

  return (
    <UserContext.Provider value={{
      user,
      setCurrentUser,
      setAuthenticated,
      isAuthenticated
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
