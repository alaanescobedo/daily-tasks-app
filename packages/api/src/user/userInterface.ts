import type { SignupUserClientData } from '@auth/auth.interfaces'
import type { Entity } from 'redis-om'

export interface UserUpdateData {
  username: string
  email: string
}
export interface User extends SignupUserClientData {
  tasks: string[] | []
  active: boolean
  verified: boolean
  createdAt: string
  updatedAt: string | null
}
export interface IUserEntity extends User, Entity { }
