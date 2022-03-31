import type { Entity } from 'redis-om'

export interface NewUserClientData {
  username: string
  password: string
  email: string
}
export interface UserUpdateData {
  username: string
  email: string
}
export interface User extends NewUserClientData {
  tasks: string[] | []
  active: boolean
  createdAt: string
  updatedAt?: string
}
export interface IUserEntity extends User, Entity { }
