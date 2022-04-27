import { useState } from 'react'
import { UserContext } from './User.context'

const getInitialUser = (): any => {
  const tasks = window.localStorage.getItem('user') ?? '{}'
  return JSON.parse(tasks)
}
const initialUser = getInitialUser()

export const UserProvider = ({ children }: any): any => {
  const [user, setUser] = useState(initialUser)

  const setCurrentUser = (user: any): void => {
    window.localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  return (
    <UserContext.Provider value={{
      user,
      setCurrentUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
