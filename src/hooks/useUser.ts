import { useContext } from 'react'
import { UserContext, UserContextProps } from '@context/User/User.context'

export const useUser = (): UserContextProps => useContext(UserContext)
