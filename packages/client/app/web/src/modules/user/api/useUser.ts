import { useContext } from 'react'
import { UserContext, UserContextProps } from 'modules/user/api/User.context'

export const useUser = (): UserContextProps => useContext(UserContext)
